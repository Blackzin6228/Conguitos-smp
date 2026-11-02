// Esconde o nome em cima da cabeça de todos os jogadores.
// Todo jogador que entra vai para o time "anonimos" (nome invisível).
// Para desfazer: apague este arquivo e rode /team remove anonimos

PlayerEvents.loggedIn(event => {
  const s = event.server
  s.runCommandSilent('team add anonimos')
  s.runCommandSilent('team modify anonimos nametagVisibility never')
  s.runCommandSilent(`team join anonimos ${event.player.username}`)
})
