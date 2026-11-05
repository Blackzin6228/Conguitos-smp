// Máscaras Relíquia — o que sobrou das receitas personalizadas (05/11/2026).
// Só a MekaSuit (com a cadeia da Liga Paranormal que ela pede) e o bloqueio dos itens criativos.
// Todas as outras receitas dos mods voltaram a ser as originais.
// Coloque em kubejs/server_scripts/ (PC e servidor). Para aplicar sem reiniciar: /reload

ServerEvents.recipes(event => {
  // ---------------- Bloqueios ----------------
  // Itens criativos não têm receita, venha de onde vier (mod, datapack, Create: Creative Assembly...).
  event.remove({ id: /^mascaras:criativo\/.*/ })
  event.remove({ output: /:.*creative/ })
  event.remove({ id: /^botania:cre\// })
  // Bomba Infinita do Industrial Foregoing: destrói uma área gigante (grief) — continua fora
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_nuke' })
  // garantia: máscaras e katanas nunca têm receita
  event.remove({ output: /^mascaras:(mascara|katana)_/ })

  // Create: Creative Assembly — as receitas de itens criativos saem (Corruptium e Glitch and Steel ficam)
  event.remove({ id: 'create_creative_assembly:ae2_creative_energy_cell' })
  event.remove({ id: 'create_creative_assembly:ae2_creative_storage_cell' })
  event.remove({ id: 'create_creative_assembly:aeronautics_creative_magnetic_gun' })
  event.remove({ id: 'create_creative_assembly:aeronautics_structure_tool' })
  event.remove({ id: 'create_creative_assembly:aeronautics_utility_objects_creative_hydraulic_rod' })
  event.remove({ id: 'create_creative_assembly:all_type_creative_ammo_box' })
  event.remove({ id: 'create_creative_assembly:black_creative_controller' })
  event.remove({ id: 'create_creative_assembly:blue_creative_controller' })
  event.remove({ id: 'create_creative_assembly:brown_creative_controller' })
  event.remove({ id: 'create_creative_assembly:create_radar_creative_radar_plate' })
  event.remove({ id: 'create_creative_assembly:create_submarine_creative_oxygenator' })
  event.remove({ id: 'create_creative_assembly:createbigcannons_creative_autocannon_ammo_container' })
  event.remove({ id: 'create_creative_assembly:creative_ammo_box' })
  event.remove({ id: 'create_creative_assembly:creative_blaze_cake' })
  event.remove({ id: 'create_creative_assembly:creative_controller' })
  event.remove({ id: 'create_creative_assembly:creative_crate' })
  event.remove({ id: 'create_creative_assembly:creative_energy' })
  event.remove({ id: 'create_creative_assembly:creative_filling_tank' })
  event.remove({ id: 'create_creative_assembly:creative_fluid_storage_block' })
  event.remove({ id: 'create_creative_assembly:creative_fluid_storage_disk' })
  event.remove({ id: 'create_creative_assembly:creative_fluid_tank' })
  event.remove({ id: 'create_creative_assembly:creative_fluid_vessel' })
  event.remove({ id: 'create_creative_assembly:creative_motor' })
  event.remove({ id: 'create_creative_assembly:creative_physics_staff' })
  event.remove({ id: 'create_creative_assembly:creative_portable_grid' })
  event.remove({ id: 'create_creative_assembly:creative_range_upgrade' })
  event.remove({ id: 'create_creative_assembly:creative_repeating_command_block' })
  event.remove({ id: 'create_creative_assembly:creative_storage_block' })
  event.remove({ id: 'create_creative_assembly:creative_storage_disk' })
  event.remove({ id: 'create_creative_assembly:creative_thruster' })
  event.remove({ id: 'create_creative_assembly:creative_vector_thruster' })
  event.remove({ id: 'create_creative_assembly:creative_wireless_autocrafting_monitor' })
  event.remove({ id: 'create_creative_assembly:creative_wireless_grid' })
  event.remove({ id: 'create_creative_assembly:creative_worldshaper' })
  event.remove({ id: 'create_creative_assembly:cyan_creative_controller' })
  event.remove({ id: 'create_creative_assembly:dndesires_creative_gear_motor' })
  event.remove({ id: 'create_creative_assembly:electroenergetics_creative_battery' })
  event.remove({ id: 'create_creative_assembly:electroenergetics_creative_resistor' })
  event.remove({ id: 'create_creative_assembly:electroenergetics_creative_wire_spool' })
  event.remove({ id: 'create_creative_assembly:gray_creative_controller' })
  event.remove({ id: 'create_creative_assembly:green_creative_controller' })
  event.remove({ id: 'create_creative_assembly:immersiveengineering_creative_capacitor' })
  event.remove({ id: 'create_creative_assembly:light_gray_creative_controller' })
  event.remove({ id: 'create_creative_assembly:lime_creative_controller' })
  event.remove({ id: 'create_creative_assembly:magenta_creative_controller' })
  event.remove({ id: 'create_creative_assembly:orange_creative_controller' })
  event.remove({ id: 'create_creative_assembly:pink_creative_controller' })
  event.remove({ id: 'create_creative_assembly:pneumaticcraft_creative_compressed_iron_block' })
  event.remove({ id: 'create_creative_assembly:pneumaticcraft_creative_compressor' })
  event.remove({ id: 'create_creative_assembly:pneumaticcraft_creative_upgrade' })
  event.remove({ id: 'create_creative_assembly:powergrid_creative_current_source' })
  event.remove({ id: 'create_creative_assembly:powergrid_creative_resistor' })
  event.remove({ id: 'create_creative_assembly:powergrid_creative_voltage_source' })
  event.remove({ id: 'create_creative_assembly:purple_creative_controller' })
  event.remove({ id: 'create_creative_assembly:red_creative_controller' })
  event.remove({ id: 'create_creative_assembly:repeatingcommandblock' })
  event.remove({ id: 'create_creative_assembly:rocketnautics_creative_thruster' })
  event.remove({ id: 'create_creative_assembly:sb_infinitestorage' })
  event.remove({ id: 'create_creative_assembly:ss_infinitestorage' })
  event.remove({ id: 'create_creative_assembly:white_creative_controller' })
  event.remove({ id: 'create_creative_assembly:yellow_creative_controller' })

  // ---------------- Liga Paranormal (a MekaSuit pede) ----------------
  // Ligas do Allthemodium no Orbe Energizante do Powah, depois a Liga Paranormal no Nucleossintetizador.
  const UV_INGOT = 'allthemodium:unobtainium_vibranium_alloy_ingot'
  const UV_BLOCK = 'allthemodium:unobtainium_vibranium_alloy_block'
  const UA_BLOCK = 'allthemodium:unobtainium_allthemodium_alloy_block'
  const BORDA = UV_BLOCK
  const LIGA = 'mascaras:liga_paranormal'
  const CRISTAL = 'mascaras:cristal_do_vazio'
  const FRAG = 'mascaras:fragmento_paranormal'
  const MATRIZ = 'mascaras:matriz_paranormal'
  const INSTAVEL = 'mascaras:nucleo_instavel'
  const CORE = 'mascaras:nucleo_criativo'
  const MAX_FE = 2147483647
  const id = nome => `kubejs:mascaras/${nome}`
  const energizar = (nome, saida, itens, fe, qtd) => {
    event.custom({
      type: 'powah:energizing',
      energy: fe,
      ingredients: itens.map(i => ({ item: i })),
      result: { count: qtd || 1, id: saida }
    }).id(id(nome))
  }
  const antimateria = (nome, entrada, saida, mb, ticks) => {
    event.custom({
      type: 'mekanism:nucleosynthesizing',
      chemical_input: { amount: mb, chemical: 'mekanism:antimatter' },
      duration: ticks,
      item_input: { count: 1, item: entrada },
      output: { count: 1, id: saida },
      per_tick_usage: false
    }).id(id(nome))
  }

  // ---------- Etapa 0: Ligas do Allthemodium (no mod só saem pelo Tinkers', que não está no pack) ----------
  const liga = (saida, a, b, fe) => energizar(saida.replace(':', '_'), saida,
    [a, a, b, b, 'allthemodium:piglich_heart', 'powah:crystal_nitro'], fe, 2)
  liga('allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot', 100000000)
  liga('allthemodium:unobtainium_allthemodium_alloy_ingot', 'allthemodium:allthemodium_ingot', 'allthemodium:unobtainium_ingot', 200000000)
  liga('allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:unobtainium_ingot', 300000000)

  // ---------- Etapa 1: Liga Paranormal (Nucleossintetizador: liga + 250 mB de antimatéria) ----------
  antimateria('liga_paranormal', UV_INGOT, LIGA, 250, 600)

  // ---------------- Linha do Avesso (o traje Remendado pede) ----------------
  // ---------- Etapa 2: Cristal do Vazio (Orbe Energizante, 2,1 bilhões de FE) ----------
  energizar('cristal_do_vazio', CRISTAL, ['cataclysm:void_core', 'minecraft:echo_shard', 'minecraft:echo_shard',
    'ae2:singularity', 'minecraft:dragon_breath', 'minecraft:nether_star'], MAX_FE)

  // ---------- Etapa 4: Fragmento Paranormal (Orbe Energizante, 1 bilhão de FE) ----------
  energizar('fragmento_paranormal', FRAG, [LIGA, LIGA, CRISTAL, 'ae2:singularity', 'ae2:singularity',
    'minecraft:nether_star'], 1000000000)

  // ---------- Etapa 7: Linha do Avesso (Modern Industrialization, Montadora) ----------
  // Um Fragmento vira 4 linhas. Precisa da Montadora do MI e de fio/tecido de mana do Botania.
  event.custom({
    type: 'modern_industrialization:assembler',
    eu: 128,
    duration: 4000,
    item_inputs: [
      { item: FRAG, amount: 1 },
      { item: 'occultism:otherworld_essence', amount: 4 },
      { item: 'irons_spellbooks:arcane_essence', amount: 16 },
      { item: 'botania:mana_string', amount: 8 },
      { item: 'botania:manaweave_cloth', amount: 2 }
    ],
    item_outputs: [{ item: 'mascaras:linha_do_avesso', amount: 4 }]
  }).id(id('linha_do_avesso'))

  // ---------------- Mekanism: MekaSuit ----------------
  // Antes: polônio + célula de indução básica. Agora: Liga Paranormal (feita com antimatéria) + célula de indução suprema.
  const mekasuit = {
    'mekanism:mekasuit_helmet': 'minecraft:netherite_helmet',
    'mekanism:mekasuit_bodyarmor': 'minecraft:netherite_chestplate',
    'mekanism:mekasuit_pants': 'minecraft:netherite_leggings',
    'mekanism:mekasuit_boots': 'minecraft:netherite_boots'
  }
  Object.keys(mekasuit).forEach(peca => {
    event.remove({ id: peca })
    event.shaped(peca, ['PCP', 'PNP', 'AEA'], {
      P: 'mekanism:hdpe_sheet',
      C: '#c:circuits/ultimate',
      N: mekasuit[peca],
      A: 'mascaras:liga_paranormal',
      E: 'mekanism:ultimate_induction_cell'
    }).id(`kubejs:mascaras/${peca.split(':')[1]}`)
  })
})
