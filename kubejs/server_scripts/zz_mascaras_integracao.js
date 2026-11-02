// Máscaras Relíquia 1.33 — integração dos mods com o Avesso (camada 2 do Arco 1).
// Regra: o topo de cada mod passa a pedir um pedaço do Avesso. Troca UM ingrediente que aparece uma vez só
// na receita original; se outro script já mudou a receita e o ingrediente não estiver lá, a troca não faz nada.
// O nome começa com "zz" para rodar depois dos outros scripts. Coloque no PC e no servidor; /reload aplica.

ServerEvents.recipes(event => {
  const trocar = (id, de, para) => {
    try { event.replaceInput({ id: id }, de, para) } catch (e) { console.warn('[mascaras] troca falhou em ' + id + ': ' + e) }
  }

  // Energia — Plasma, Componente da Energia, Caco do Estalo
  trocar('draconicevolution:components/awakened_core', '#c:nether_stars', 'mascaras:plasma')
  trocar('powah:crafting/reactor_nitro', 'powah:uraninite', 'mascaras:componente_energia')
  trocar('bigreactors:turbine/reinforced/controller', 'minecraft:comparator', 'mascaras:caco_estalo')

  // Conhecimento — Componente do Conhecimento, Escrita, Pena do Escriba
  trocar('enigmaticlegacyplus:cosmic_heart', 'minecraft:nether_star', 'mascaras:componente_conhecimento')
  trocar('malum:spirit_infusion/mnemonic_hex_staff', 'malum:soulwood_planks', 'mascaras:escrita')
  trocar('botania:gaia_pylon', 'botania:pixie_dust', 'mascaras:pena_escriba')

  // Morte — Breu
  trocar('malum:spirit_infusion/tyrving', 'malum:twisted_rock', 'mascaras:breu')

  // Sangue — Dente do Retalhado
  trocar('industrialforegoing:dissolution_chamber/infinity_drill', 'minecraft:diamond_shovel', 'mascaras:dente_retalhado')
  trocar('industrialforegoing:dissolution_chamber/infinity_saw', 'minecraft:diamond_pickaxe', 'mascaras:dente_retalhado')
})
