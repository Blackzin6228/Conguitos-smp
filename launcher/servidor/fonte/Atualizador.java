package conguitos;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

/**
 * CONGUITOS SMP: atualiza o servidor pelo GitHub ANTES do Minecraft ligar.
 *
 * <p>Entra pelo user_jvm_args.txt como -javaagent, então funciona sem mexer no comando de inicialização do painel.
 * Regras de segurança:
 * <ul>
 *   <li>o mundo (world) nunca é tocado;</li>
 *   <li>se a atualização falhar, a pasta mods volta exatamente como estava e o servidor liga com ela;</li>
 *   <li>na primeira vez, mods, config e kubejs ganham cópia em backup_conguitos/ e os mods só do servidor voltam;</li>
 *   <li>mods só de cliente (WATERMeDIA etc.) nunca voltam para o servidor;</li>
 *   <li>arquivo nao_atualizar.txt na pasta do servidor desliga tudo.</li>
 * </ul>
 */
public final class Atualizador {
    private static final String PACK = "https://raw.githubusercontent.com/Blackzin6228/Conguitos-smp/main/pack.toml";
    private static final long LIMITE_MINUTOS = 20;
    private static final Pattern MOD_ID = Pattern.compile("modId\\s*=\\s*\"([^\"]+)\"");

    private static PrintWriter log;
    private static final PrintStream SAIDA = new PrintStream(new FileOutputStream(FileDescriptor.out), true, StandardCharsets.UTF_8);

    private Atualizador() {
    }

    public static void premain(String args) {
        executar();
    }

    public static void main(String[] args) {
        executar();
    }

    private static void executar() {
        if (System.getenv("CONGUITOS_ATUALIZANDO") != null || System.getProperty("conguitos.atualizado") != null) {
            return; // é o próprio processo do packwiz, ou a linha está em dois arquivos: roda uma vez só
        }
        System.setProperty("conguitos.atualizado", "1");
        Path raiz = Paths.get("").toAbsolutePath();
        try {
            Files.createDirectories(raiz.resolve("logs"));
            log = new PrintWriter(new OutputStreamWriter(new FileOutputStream(raiz.resolve("logs/conguitos-atualizador.log").toFile(), true), StandardCharsets.UTF_8), true);
        } catch (IOException e) {
            log = new PrintWriter(new OutputStreamWriter(SAIDA, StandardCharsets.UTF_8), true);
        }
        try {
            if (Files.exists(raiz.resolve("nao_atualizar.txt"))) {
                dizer("nao_atualizar.txt encontrado: atualização desligada.");
                return;
            }
            atualizar(raiz);
        } catch (Throwable t) {
            dizer("Erro inesperado, ligando com o que já está aí: " + t);
        } finally {
            log.flush();
        }
    }

    private static void atualizar(Path raiz) throws Exception {
        Path pasta = raiz.resolve("conguitos");
        Path bootstrap = pasta.resolve("packwiz-installer-bootstrap.jar");
        Path instalador = pasta.resolve("packwiz-installer.jar");
        if (!Files.exists(bootstrap) || !Files.exists(instalador)) {
            dizer("Faltam os arquivos do packwiz em conguitos/. Nada foi feito.");
            return;
        }
        Path mods = raiz.resolve("mods");
        Files.createDirectories(mods);
        boolean primeira = !Files.exists(raiz.resolve("packwiz.json"));
        String carimbo = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HH-mm"));
        Path backup = raiz.resolve("backup_conguitos").resolve(carimbo);

        // retrato da pasta mods (cópias leves) para desfazer se der errado
        Path retrato = raiz.resolve("backup_conguitos").resolve("ultimo_mods");
        apagar(retrato);
        copiar(mods, retrato, true);

        if (primeira) {
            dizer("Primeira atualização automática: guardando mods, config e kubejs em " + raiz.relativize(backup));
            Files.createDirectories(backup);
            copiar(raiz.resolve("config"), backup.resolve("config"), false);
            copiar(raiz.resolve("kubejs"), backup.resolve("kubejs"), false);
            Files.move(mods, backup.resolve("mods"));
            Files.createDirectories(mods);
        }

        dizer("Conferindo atualizações do pack...");
        boolean ok = rodarPackwiz(raiz, bootstrap, instalador);

        if (!ok) {
            dizer("A atualização não terminou. Voltando a pasta mods como estava.");
            apagar(mods);
            copiar(retrato, mods, false);
            if (primeira) {
                Files.deleteIfExists(raiz.resolve("packwiz.json"));
            }
            return;
        }

        if (primeira) {
            devolverModsDoServidor(backup.resolve("mods"), mods);
        }
        dizer("Pack atualizado. Ligando o servidor.");
    }

    private static boolean rodarPackwiz(Path raiz, Path bootstrap, Path instalador) {
        String java = Paths.get(System.getProperty("java.home"), "bin", "java").toString();
        ProcessBuilder pb = new ProcessBuilder(java, "-jar", bootstrap.toString(), "-g", "-s", "server",
                "--bootstrap-no-update", "--bootstrap-main-jar", instalador.toString(), PACK);
        pb.directory(raiz.toFile());
        pb.environment().put("CONGUITOS_ATUALIZANDO", "1");
        pb.redirectErrorStream(true);
        try {
            Process p = pb.start();
            Thread leitor = new Thread(() -> {
                try (BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream(), StandardCharsets.UTF_8))) {
                    String linha;
                    while ((linha = r.readLine()) != null) {
                        SAIDA.println("[CONGUITOS] " + linha);
                        log.println("  " + linha);
                    }
                } catch (IOException ignored) {
                }
            });
            leitor.setDaemon(true);
            leitor.start();
            if (!p.waitFor(LIMITE_MINUTOS, TimeUnit.MINUTES)) {
                p.destroyForcibly();
                dizer("O packwiz passou de " + LIMITE_MINUTOS + " minutos e foi parado.");
                return false;
            }
            leitor.join(2000);
            if (p.exitValue() != 0) {
                dizer("O packwiz terminou com erro (código " + p.exitValue() + ").");
                return false;
            }
            return true;
        } catch (Exception e) {
            dizer("Não deu para rodar o packwiz: " + e);
            return false;
        }
    }

    /** Mods que o servidor tinha e o pack não conhece (ex.: um mod só de servidor) voltam para a pasta mods. */
    private static void devolverModsDoServidor(Path antigos, Path mods) throws IOException {
        Set<String> conhecidos = new HashSet<>();
        try (InputStream in = Atualizador.class.getResourceAsStream("/conhecidos.txt")) {
            if (in != null) {
                for (String l : new String(in.readAllBytes(), StandardCharsets.UTF_8).split("\n")) {
                    if (!l.isBlank()) {
                        conhecidos.add(l.trim());
                    }
                }
            }
        }
        Set<String> idsNovos = new HashSet<>();
        Set<String> arquivosNovos = new HashSet<>();
        try (DirectoryStream<Path> ds = Files.newDirectoryStream(mods, "*.jar")) {
            for (Path j : ds) {
                arquivosNovos.add(j.getFileName().toString());
                idsNovos.addAll(ids(j));
            }
        }
        if (!Files.isDirectory(antigos)) {
            return;
        }
        try (DirectoryStream<Path> ds = Files.newDirectoryStream(antigos, "*.jar")) {
            for (Path j : ds) {
                String nome = j.getFileName().toString();
                if (arquivosNovos.contains(nome) || conhecidos.contains("arquivo:" + nome)) {
                    continue;
                }
                Set<String> ids = ids(j);
                boolean doPack = false;
                for (String id : ids) {
                    if (idsNovos.contains(id) || conhecidos.contains("id:" + id)) {
                        doPack = true;
                        break;
                    }
                }
                if (ids.isEmpty() || doPack) {
                    continue; // versão velha de um mod do pack, mod de cliente ou biblioteca: fica só no backup
                }
                Files.copy(j, mods.resolve(nome), StandardCopyOption.REPLACE_EXISTING);
                dizer("Mod só do servidor mantido: " + nome);
            }
        }
    }

    private static Set<String> ids(Path jar) {
        Set<String> r = new HashSet<>();
        try (ZipFile z = new ZipFile(jar.toFile())) {
            for (String n : new String[]{"META-INF/neoforge.mods.toml", "META-INF/mods.toml"}) {
                ZipEntry e = z.getEntry(n);
                if (e != null) {
                    try (InputStream in = z.getInputStream(e)) {
                        Matcher m = MOD_ID.matcher(new String(in.readAllBytes(), StandardCharsets.UTF_8));
                        while (m.find()) {
                            r.add(m.group(1));
                        }
                    }
                }
            }
        } catch (IOException ignored) {
        }
        return r;
    }

    /** Copia uma pasta; com leve=true tenta link físico (não gasta disco) e cai para cópia normal. */
    private static void copiar(Path de, Path para, boolean leve) throws IOException {
        if (!Files.isDirectory(de)) {
            return;
        }
        Files.walkFileTree(de, new SimpleFileVisitor<>() {
            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes a) throws IOException {
                Files.createDirectories(para.resolve(de.relativize(dir).toString()));
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult visitFile(Path f, BasicFileAttributes a) throws IOException {
                Path alvo = para.resolve(de.relativize(f).toString());
                if (leve) {
                    try {
                        Files.createLink(alvo, f);
                        return FileVisitResult.CONTINUE;
                    } catch (IOException | UnsupportedOperationException ignored) {
                    }
                }
                Files.copy(f, alvo, StandardCopyOption.REPLACE_EXISTING);
                return FileVisitResult.CONTINUE;
            }
        });
    }

    private static void apagar(Path p) throws IOException {
        if (!Files.exists(p)) {
            return;
        }
        Files.walkFileTree(p, new SimpleFileVisitor<>() {
            @Override
            public FileVisitResult visitFile(Path f, BasicFileAttributes a) throws IOException {
                Files.delete(f);
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult postVisitDirectory(Path d, IOException e) throws IOException {
                Files.delete(d);
                return FileVisitResult.CONTINUE;
            }
        });
    }

    private static void dizer(String s) {
        String linha = "[CONGUITOS] " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM HH:mm:ss")) + " " + s;
        SAIDA.println(linha);
        log.println(linha);
    }
}
