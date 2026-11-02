// Máscaras Relíquia — receitas mais difíceis para itens dos mods que entraram no pack (out/2026).
// Coloque em kubejs/server_scripts/ (PC e servidor), junto com mascaras_dificuldade.js e mascaras_expert.js.
// Para aplicar sem reiniciar: /reload

ServerEvents.recipes(event => {
  // ---------------- Time in a Bottle ----------------
  // Antes: ouro, diamante e lápis (barato demais para um item que acelera qualquer máquina).
  // Agora: Vibranium, circuitos supremos do Mekanism, Estrela do Nether e placas de Allthemodium.
  event.remove({ id: 'tiab:time_in_a_bottle' })
  event.shaped('tiab:time_in_a_bottle', ['VCV', 'UTU', 'NBN'], {
    V: 'allthemodium:vibranium_ingot',
    C: 'minecraft:clock',
    U: '#c:circuits/ultimate',
    T: 'minecraft:nether_star',
    N: 'allthemodium:allthemodium_plate',
    B: 'minecraft:glass_bottle'
  }).id('kubejs:mascaras/time_in_a_bottle')

  // ---------------- Sophisticated Backpacks/Storage (atualização) ----------------
  // A versão nova trouxe uma receita própria do Upgrade Ômega (9 upgrades do nível anterior),
  // que pulava a receita difícil do mascaras_dificuldade.js. Fica só a nossa.
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
  event.remove({ id: 'sophisticatedstorage:stack_upgrade_omega_tier' })

  // ---------------- Tempad ----------------
  // Teletransporte livre: passa a pedir Olho do Ender e placas de Allthemodium no lugar do Aço do Tempo.
  event.remove({ id: 'tempad:tempad' })
  event.shaped('tempad:tempad', ['GGG', 'QER', 'PBP'], {
    G: '#c:glass_blocks/tinted',
    Q: '#c:gems/quartz',
    E: 'minecraft:ender_eye',
    R: 'minecraft:redstone_lamp',
    P: 'allthemodium:allthemodium_plate',
    B: 'tempad:chronon_battery'
  }).id('kubejs:mascaras/tempad')
})
