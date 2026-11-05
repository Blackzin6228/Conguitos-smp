package conguitos;

import java.io.File;
import java.lang.instrument.Instrumentation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.jar.Attributes;
import java.util.jar.JarFile;

/**
 * Entra no lugar do server.jar no painel (campo "Arquivo de inicialização .jar").
 * 1) roda o atualizador do pack; 2) liga o server.jar original, como se ele tivesse sido aberto direto.
 * Para desfazer: voltar o campo do painel para server.jar.
 */
public final class Servidor {
    private static final String ORIGINAL = "server.jar";
    private static Attributes original;

    private Servidor() {
    }

    private static Attributes original() throws Exception {
        if (original == null) {
            try (JarFile j = new JarFile(new File(ORIGINAL))) {
                original = j.getManifest().getMainAttributes();
            }
        }
        return original;
    }

    /** Launcher-Agent-Class: repassa a instrumentação para o agente do server.jar original (o starter da NeoForge usa). */
    public static void agentmain(String args, Instrumentation inst) throws Throwable {
        String classe = original().getValue("Launcher-Agent-Class");
        if (classe == null) {
            return;
        }
        Class<?> c = Class.forName(classe, true, ClassLoader.getSystemClassLoader());
        Method m;
        try {
            m = c.getDeclaredMethod("agentmain", String.class, Instrumentation.class);
            m.setAccessible(true);
            m.invoke(null, args, inst);
        } catch (NoSuchMethodException e) {
            m = c.getDeclaredMethod("agentmain", String.class);
            m.setAccessible(true);
            m.invoke(null, args);
        } catch (InvocationTargetException e) {
            throw e.getCause();
        }
    }

    public static void main(String[] args) throws Throwable {
        Atualizador.main(args);
        String classe = original().getValue("Main-Class");
        if (classe == null) {
            System.err.println("[CONGUITOS] O " + ORIGINAL + " não tem Main-Class. Volte o painel para server.jar.");
            System.exit(1);
        }
        System.setProperty("java.class.path", System.getProperty("java.class.path") + File.pathSeparator + ORIGINAL);
        Method m = Class.forName(classe, true, ClassLoader.getSystemClassLoader()).getMethod("main", String[].class);
        try {
            m.invoke(null, (Object) args);
        } catch (InvocationTargetException e) {
            throw e.getCause();
        }
    }
}
