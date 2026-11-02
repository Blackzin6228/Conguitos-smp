// Itens no chão duram 30 minutos em vez de 5 (padrão do Minecraft).
// Coloque em kubejs/server_scripts/ (servidor; no PC só vale para mundo solo).
// Para mudar o tempo, troque MINUTOS. Para aplicar: /reload

const MINUTOS_NO_CHAO = 30

EntityEvents.spawned(event => {
  const e = event.entity
  if (e.type != 'minecraft:item') return
  // o item some quando a idade passa do "lifespan" (5 min = 6000 ticks no padrão)
  e.lifespan = MINUTOS_NO_CHAO * 60 * 20
})
