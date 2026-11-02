// Máscaras Relíquia — balanceamento do Mystical Extended Tier (tiers acima do Insanium).
// Coloque em kubejs/server_scripts/ (PC e servidor). Para aplicar sem reiniciar: /reload
//
// Problemas do mod no nosso pack:
//  1. Atalhos "combine": 4 blocos do tier de baixo + Cristal Mestre (que não quebra) viram o bloco de cima.
//     Isso pula o cristal do MATC, que gasta durabilidade, e deixa subir até o Ouranium sem custo nenhum além de essência.
//  2. Nada liga esses tiers ao resto do pack: dá pra chegar no Ouranium sem nunca minerar Allthemodium.
//
// Agora cada tier de essência pede um metal do Allthemodium, na ordem da progressão do pack:
//   Ornium   = 4 Insanium + cristal + 2 pepitas de Allthemodium
//   Lightium = 4 Ornium   + cristal + 2 pepitas de Vibranium
//   Tornium  = 4 Lightium + cristal + 2 pepitas de Unobtainium
//   Ouranium = 4 Tornium  + cristal + 1 lingote de Vibranium + 1 lingote de Unobtainium

ServerEvents.recipes(event => {
  const MET = 'mysticalextendedtier'

  // ---- 1. atalhos que pulam o cristal ----
  ;[
    `${MET}:compat/agradditions/insanium_to_ornium_combine`,
    `${MET}:compat/agradditions/insanium_to_ornium_essence`,
    `${MET}:ornium_block_combine`,
    `${MET}:lightium_block_combine`,
    `${MET}:tornium_block_combine`,
    `${MET}:ouranium_block_combine`,
    `${MET}:ornium_essence`,
    `${MET}:lightium_essence`,
    `${MET}:tornium_essence`,
    `${MET}:ouranium_essence`
  ].forEach(id => event.remove({ id: id }))

  // ---- 2. essências com o metal da progressão ----
  const tiers = [
    // [essência nova, essência de baixo, cristal (tag do MATC), metal A, metal B]
    ['ornium', 'mysticalagradditions:insanium_essence', 'matc:infusion_crystals/insanium',
      'allthemodium:allthemodium_nugget', 'allthemodium:allthemodium_nugget'],
    ['lightium', `${MET}:ornium_essence`, 'matc:infusion_crystals/ornium',
      'allthemodium:vibranium_nugget', 'allthemodium:vibranium_nugget'],
    ['tornium', `${MET}:lightium_essence`, 'matc:infusion_crystals/lightium',
      'allthemodium:unobtainium_nugget', 'allthemodium:unobtainium_nugget'],
    ['ouranium', `${MET}:tornium_essence`, 'matc:infusion_crystals/tornium',
      'allthemodium:vibranium_ingot', 'allthemodium:unobtainium_ingot']
  ]
  tiers.forEach(([nome, baixo, cristal, a, b]) => {
    event.remove({ id: `${MET}:matc/${nome}_essence` })
    event.shaped(`${MET}:${nome}_essence`, ['A# ', '#C#', ' #B'], {
      '#': baixo,
      C: `#${cristal}`,
      A: a,
      B: b
    }).id(`kubejs:mascaras/mystical/${nome}_essence`)
  })
})
