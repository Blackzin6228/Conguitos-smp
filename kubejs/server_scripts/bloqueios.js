// CONGUITOS SMP — itens bloqueados por bug.
//
// Meka-Gun (Mekanism Weapons 4.3): ao soltar o tiro, o mod chama no servidor uma classe que só existe
// no jogo do jogador (net.minecraft.client...MultiBufferSource) e o servidor cai ("Exception in server tick
// loop", crash de 05/11/2026). Até sair uma versão corrigida do mod: sem receita e sem uso.
// Quem já tem continua com o item no inventário; só não atira.

ServerEvents.recipes(event => {
  event.remove({ id: 'mekaweapons:meka_gun' })
  event.remove({ output: 'mekaweapons:meka_gun' })
})

ItemEvents.rightClicked('mekaweapons:meka_gun', event => {
  try {
    event.player.setStatusMessage(Text.gray('A Meka-Gun emperrou. Ela está desligada neste servidor.'))
  } catch (e) {}
  event.cancel()
})
