# CONGUITOS SMP

Modpack do servidor. Minecraft **1.21.1** · NeoForge **21.1.262** · ~410 mods.
Servidor: `kayn.lura.host:42044` (já vem salvo na lista de servidores).

## Como instalar (jogadores)

Faz uma vez só. Depois disso o pack se atualiza sozinho toda vez que você abre o jogo.

1. Instale o **Prism Launcher**: <https://prismlauncher.org/download/> (Windows: baixe o instalador, próximo, próximo, concluir).
2. Abra o Prism. Na primeira vez ele pede para **entrar com a conta Microsoft** do Minecraft: entre.
3. Clique em **Add Instance** (ou *Adicionar instância*) → aba **Import** → cole este link e dê OK:

   ```
   https://github.com/Blackzin6228/conguitos-smp/releases/latest/download/CONGUITOS-SMP.zip
   ```

4. Dê dois cliques na instância **CONGUITOS SMP**. Na primeira abertura ele baixa tudo (uns 1,3 GB, pode demorar). Nas próximas só baixa o que mudou.
5. Entre no servidor **CONGUITOS SMP**, que já aparece na lista de multiplayer.

Memória: a instância já vem com **8 GB** reservados. Se o seu PC tiver 8 GB no total, abaixe para 5 ou 6 em *Edit → Settings → Java → Memory*.

### Deu erro?

- **"Could not find packwiz-installer" / erro de rede no começo**: é o atualizador tentando baixar. Confira a internet e abra de novo.
- **O jogo abre mas o pack não atualizou**: feche e abra pelo Prism (não pelo atalho do Minecraft). A atualização roda só no Prism.
- **Falta um mod / "Mod rejections"** ao entrar no servidor: você está desatualizado. Feche tudo e abra pelo Prism de novo.
- Qualquer outra coisa: manda o `latest.log` (pasta `logs` da instância) pro Nikolas.

## Para quem mantém o pack

O pack usa o formato **packwiz**: o Prism roda o `packwiz-installer` antes de abrir o jogo, ele lê o `pack.toml` deste repositório e baixa/atualiza o que estiver diferente.

- `pack.toml` / `index.toml`: gerados por `tools/gerar_pack.py`. **Nunca edite na mão.**
- `mods/*.pw.toml`: um por mod, com link e hash. Os jars ficam na Release `mods` deste repositório.
- `mods/*.jar`: só os nossos (Máscaras Relíquia, Banco Central).
- `config/`, `kubejs/`, `shaderpacks/`: vão para todo mundo como estão.
- `launcher/`: o zip de instância do Prism (`build.sh` gera o `CONGUITOS-SMP.zip`, que vai na Release `latest`).
- `VERSAO`: versão do pack mostrada no Prism.

### Atualizar um mod (ou as Máscaras)

1. Coloque o jar novo na Release `mods` (e tire o antigo).
2. Rode `python3 tools/gerar_pack.py --jars <pasta com os jars>`; ele reescreve os `.pw.toml`, o `index.toml` e o `pack.toml`.
3. Suba o número em `VERSAO`, commit, push. Pronto: na próxima vez que cada jogador abrir, atualiza.

### Lado cliente / servidor

`tools/gerar_pack.py` marca como `client` os mods de desempenho, HUD e vídeo (Sodium, Iris, EMI, WATERMeDIA…). O servidor
instala o pack com `java -jar packwiz-installer-bootstrap.jar -g -s server <pack.toml>` e pula esses automaticamente.
**O WATERMeDIA nunca pode ir para o servidor** (ele derruba o servidor de propósito).
