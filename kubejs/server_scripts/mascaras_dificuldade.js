// Máscaras Relíquia — receitas mais difíceis no estilo ATM (precisa do KubeJS).
// Coloque este arquivo em: <pasta do modpack>/kubejs/server_scripts/
// e o MESMO arquivo na pasta kubejs/server_scripts/ do servidor.
// Para aplicar sem reiniciar: /reload  (as receitas dos itens criativos já vêm dentro do mod).

ServerEvents.recipes(event => {
  // ---------------- Mekanism: MekaSuit e Meka-Tool ----------------
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

  event.remove({ id: 'mekanism:meka_tool' })
  event.shaped('mekanism:meka_tool', ['COC', 'PDP', 'AEA'], {
    C: '#c:circuits/ultimate',
    O: 'mekanism:configurator',
    P: 'mekanism:hdpe_sheet',
    D: 'mekanism:atomic_disassembler',
    A: 'mascaras:liga_paranormal',
    E: 'mekanism:ultimate_induction_cell'
  }).id('kubejs:mascaras/meka_tool')

  // ---------------- Sophisticated Backpacks / Storage ----------------
  // Últimos níveis do Upgrade de Pilha passam a pedir Allthemodium.
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
  event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', ['NAN', 'ASA', 'NAN'], {
    N: '#c:storage_blocks/netherite',
    A: 'allthemodium:allthemodium_block',
    S: 'sophisticatedbackpacks:stack_upgrade_tier_3'
  }).id('kubejs:mascaras/backpack_stack_upgrade_tier_4')

  event.remove({ id: 'sophisticatedstorage:stack_upgrade_tier_5' })
  event.shaped('sophisticatedstorage:stack_upgrade_tier_5', ['VNV', 'NSN', 'BNB'], {
    V: 'allthemodium:vibranium_ingot',
    N: '#c:ingots/netherite',
    B: 'allthemodium:allthemodium_block',
    S: 'sophisticatedstorage:stack_upgrade_tier_4'
  }).id('kubejs:mascaras/storage_stack_upgrade_tier_5')

  // ---------------- MEGA Cells: componente de 256M ----------------
  event.remove({ id: 'megacells:cells/cell_component_256m' })
  event.shaped('megacells:cell_component_256m', ['MPM', 'CUC', 'MCM'], {
    M: 'ae2:matter_ball',
    P: 'megacells:accumulation_processor',
    C: 'megacells:cell_component_64m',
    U: 'allthemodium:unobtainium_ingot'
  }).id('kubejs:mascaras/cell_component_256m')

  // ---------------- Powah: Reator Nitro ----------------
  event.remove({ id: 'powah:crafting/reactor_nitro' })
  event.shaped('4x powah:reactor_nitro', ['RLR', 'LVL', 'RLR'], {
    R: 'powah:reactor_spirited',
    L: 'powah:capacitor_nitro',
    V: 'allthemodium:vibranium_block'
  }).id('kubejs:mascaras/reactor_nitro')

  // ---------------- Torchmaster: Megatocha ----------------
  event.remove({ id: 'torchmaster:megatorch' })
  event.shaped('torchmaster:megatorch', ['TTT', 'ADA', 'ALA'], {
    T: 'minecraft:torch',
    A: 'allthemodium:allthemodium_ingot',
    D: 'minecraft:diamond_block',
    L: '#minecraft:logs'
  }).id('kubejs:mascaras/megatorch')

  // ---------------- Mekanism Weapons: Meka-Tana, Meka-Bow e Meka-Gun ----------------
  event.remove({ id: 'mekaweapons:katana_blade' })
  event.shaped('mekaweapons:katana_blade', ['  V', ' AV', 'UA '], {
    V: 'allthemodium:vibranium_allthemodium_alloy_ingot', A: 'mekanism:alloy_atomic', U: 'allthemodium:unobtainium_ingot'
  }).id('kubejs:mascaras/katana_blade')
  event.remove({ id: 'mekaweapons:meka_tana' })
  event.shaped('mekaweapons:meka_tana', ['LKL', 'HCH', ' E '], {
    L: 'mascaras:liga_paranormal', K: 'mekaweapons:katana_blade', H: 'mekanism:hdpe_sheet',
    C: '#c:circuits/ultimate', E: 'mekanism:ultimate_induction_cell'
  }).id('kubejs:mascaras/meka_tana')
  event.remove({ id: 'mekaweapons:bow_riser' })
  event.shaped('mekaweapons:bow_riser', ['CSC', 'VAV'], {
    C: '#c:circuits/ultimate', S: 'allthemodium:unobtainium_ingot',
    V: 'allthemodium:vibranium_allthemodium_alloy_ingot', A: 'mekanism:alloy_atomic'
  }).id('kubejs:mascaras/bow_riser')
  event.remove({ id: 'mekaweapons:meka_bow' })
  event.shaped('mekaweapons:meka_bow', ['LBL', 'HEH', 'SSS'], {
    L: 'mascaras:liga_paranormal', B: 'mekaweapons:bow_riser', H: 'mekanism:hdpe_sheet',
    E: 'mekanism:ultimate_induction_cell', S: 'mekaweapons:bow_limb'
  }).id('kubejs:mascaras/meka_bow')
  event.remove({ id: 'mekaweapons:meka_gun' })
  event.shaped('mekaweapons:meka_gun', ['FTF', 'ACA', 'LEL'], {
    F: 'mekaweapons:fiber_optic_glass', T: 'mekanism:laser', A: 'mekanism:laser_amplifier',
    C: '#c:circuits/ultimate', L: 'mascaras:liga_paranormal', E: 'mekanism:ultimate_induction_cell'
  }).id('kubejs:mascaras/meka_gun')

  // ---------------- Modern Industrialization: armadura e espada Quânticas ----------------
  // Continuam na Empacotadora (1 milhão de EU/t), mas agora pedem também um Cristal do Vazio.
  const quantico = (peca, base) => {
    event.remove({ id: `modern_industrialization:upgrade/packer/quantum/${peca}` })
    event.custom({
      type: 'modern_industrialization:packer',
      duration: 600,
      eu: 1000000,
      item_inputs: [
        { amount: 1, item: base },
        { amount: 1, item: 'modern_industrialization:quantum_upgrade' },
        { amount: 1, item: 'mascaras:cristal_do_vazio' }
      ],
      item_outputs: [{ amount: 1, item: `modern_industrialization:quantum_${peca}` }]
    }).id(`kubejs:mascaras/quantum_${peca}`)
  }
  quantico('helmet', 'minecraft:netherite_helmet')
  quantico('chestplate', 'minecraft:netherite_chestplate')
  quantico('leggings', 'minecraft:netherite_leggings')
  quantico('boots', 'minecraft:netherite_boots')
  quantico('sword', 'minecraft:netherite_sword')

  // ---------------- Sophisticated: Módulo do Infinito (sobrevivência) ----------------
  // Só tinha receita pelo Create: Creative Assembly (removido). Agora pede um Núcleo Criativo.
  const infinito = (mod) => {
    event.shaped(`${mod}:survival_infinity_upgrade`, ['CFC', 'ONO', 'CPC'], {
      C: 'mascaras:cristal_do_vazio', F: 'create:creative_fluid_tank', O: `${mod}:stack_upgrade_omega_tier`,
      N: 'mascaras:nucleo_criativo', P: `${mod}:crafting_upgrade`
    }).id(`kubejs:mascaras/${mod}_survival_infinity_upgrade`)
  }
  infinito('sophisticatedbackpacks')
  infinito('sophisticatedstorage')

  // ---------------- ExtendedAE: Células do Infinito (água e pedregulho) ----------------
  event.remove({ id: 'extendedae:water_cell' })
  event.shaped('extendedae:infinity_water_cell', ['CWC', 'UXU', 'VVV'], {
    C: 'ae2:quartz_glass', W: 'minecraft:water_bucket', U: 'allthemodium:unobtainium_ingot',
    X: 'ae2:cell_component_256k', V: 'allthemodium:vibranium_ingot'
  }).id('kubejs:mascaras/infinity_water_cell')
  event.remove({ id: 'extendedae:cobblestone_cell' })
  event.shaped('extendedae:infinity_cobblestone_cell', ['CLC', 'WXW', 'VUV'], {
    C: 'ae2:quartz_glass', L: 'minecraft:lava_bucket', W: 'minecraft:water_bucket',
    X: 'ae2:cell_component_256k', V: 'allthemodium:vibranium_ingot', U: 'allthemodium:unobtainium_ingot'
  }).id('kubejs:mascaras/infinity_cobblestone_cell')
})

// =====================================================================
//   ITENS CRIATIVOS — progressão estilo ATM com itens próprios do mod Máscaras (1.7.0+)
//
//   Ligas ATM ─┐
//              ├─> Liga Paranormal (antimatéria)  ─┐
//   Cristal do Vazio (2,1 bi de FE) ───────────────┼─> Fragmento (1 bi de FE) ─┐
//   4 Selos ───────────────────────────────────────┴───────────────────────────┼─> Matriz Paranormal (5x5)
//                                                                              └─> Núcleo Instável (7x7)
//   Fragmento ─> 4 Linhas do Avesso (Montadora do MI)
//   Núcleo Instável + 8 Linhas + lingotes de Gaia + peças de todos os mods (9x9) ─> Núcleo Remendado
//   Núcleo Remendado + 4000 mB de antimatéria ─> Núcleo Criativo ─> itens criativos
//
//   Todas as outras receitas de itens criativos (Evolved Mekanism, More Machines...) são removidas:
//   o único caminho é este. Máscaras e katanas NÃO têm receita.
//   Para deixar mais fácil/difícil é só mudar aqui e usar /reload.
// =====================================================================
ServerEvents.recipes(event => {
  // Tira as receitas criativas que vêm dentro do .jar das máscaras e as de outros mods
  event.remove({ id: /^mascaras:criativo\/.*/ })
  // Qualquer receita que dê item "creative", venha de onde vier (mod, datapack, Cca...).
  // As nossas (kubejs:...) são adicionadas DEPOIS desta linha, então não são afetadas.
  event.remove({ output: /:.*creative/ })
  // "Create: Creative Assembly" só existe para dar receita a itens criativos (e até ao bloco de comando): sai tudo
  // (Cca: tratado em mascaras_expert.js — só as receitas criativas saem)
  // garantia: máscaras e katanas nunca têm receita
  event.remove({ output: /^mascaras:(mascara|katana)_/ })

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

  // ---------- Etapa 2: Cristal do Vazio (Orbe Energizante, 2,1 bilhões de FE) ----------
  energizar('cristal_do_vazio', CRISTAL, ['cataclysm:void_core', 'minecraft:echo_shard', 'minecraft:echo_shard',
    'ae2:singularity', 'minecraft:dragon_breath', 'minecraft:nether_star'], MAX_FE)

  // ---------- Etapa 3: Selos ----------
  event.shaped('mascaras:selo_sangue', ['BIB', 'FHF', 'BIB'], {
    B: 'vampirism:blood_infused_enhanced_iron_block', I: 'cataclysm:ignitium_block',
    F: 'iceandfire:dragonsteel_fire_block', H: 'allthemodium:piglich_heart_block'
  }).id(id('selo_sangue'))
  event.shaped('mascaras:selo_conhecimento', ['LSL', 'GPG', 'LSL'], {
    L: 'irons_spellbooks:legendary_ink', S: 'apotheosis:sigil_of_supremacy',
    G: 'occultism:spirit_attuned_gem', P: 'irons_spellbooks:dragonskin'
  }).id(id('selo_conhecimento'))
  event.shaped('mascaras:selo_morte', ['KCK', 'IWI', 'KCK'], {
    K: 'minecraft:wither_skeleton_skull', C: 'cataclysm:cursium_block',
    I: 'iceandfire:dragonsteel_ice_block', W: 'cataclysm:witherite_block'
  }).id(id('selo_morte'))
  event.shaped('mascaras:selo_energia', ['XAX', 'LSL', 'XAX'], {
    X: 'powah:nitro_crystal_block', A: 'mekanism:pellet_antimatter',
    L: 'iceandfire:dragonsteel_lightning_block', S: 'modern_industrialization:superconductor_coil'
  }).id(id('selo_energia'))

  // ---------- Etapa 4: Fragmento Paranormal (Orbe Energizante, 1 bilhão de FE) ----------
  energizar('fragmento_paranormal', FRAG, [LIGA, LIGA, CRISTAL, 'ae2:singularity', 'ae2:singularity',
    'minecraft:nether_star'], 1000000000)

  // ---------- Etapa 5: Matriz Paranormal (Mecânico de Montagem, 5x5) ----------
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      L: { item: LIGA }, F: { item: FRAG }, C: { item: CRISTAL }, U: { item: UV_BLOCK },
      X: { item: 'ae2:quantum_entangled_singularity' }
    },
    pattern: [
      ' LFL ',
      'LCUCL',
      'FUXUF',
      'LCUCL',
      ' LFL '
    ],
    result: { count: 1, id: MATRIZ },
    show_notification: false
  }).id(id('matriz_paranormal'))

  // ---------- Etapa 6: Núcleo Instável (Mecânico de Montagem, 7x7) ----------
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      S: [{ item: 'iceandfire:dragon_skull_fire' }, { item: 'iceandfire:dragon_skull_ice' },
          { item: 'iceandfire:dragon_skull_lightning' }],
      N: { item: 'minecraft:nether_star' },
      V: { item: UA_BLOCK },
      F: { item: FRAG },
      U: { item: UV_BLOCK },
      A: { item: 'mascaras:selo_sangue' },
      B: { item: 'mascaras:selo_conhecimento' },
      C: { item: 'mascaras:selo_morte' },
      D: { item: 'mascaras:selo_energia' },
      X: { item: MATRIZ }
    },
    pattern: [
      'S  N  S',
      ' V F V ',
      '  UAU  ',
      'NFBXCFN',
      '  UDU  ',
      ' V F V ',
      'S  N  S'
    ],
    result: { count: 1, id: INSTAVEL },
    show_notification: false
  }).id(id('nucleo_instavel'))

  // ---------- Etapa 7: Núcleo Criativo (Nucleossintetizador: 1000 mB de antimatéria, 90 s) ----------
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

  // ---------- Etapa 8: Núcleo Remendado (Mecânico de Montagem 9x9) ----------
  // O Núcleo Instável costurado com 8 Linhas, preso por peças de todos os mods de progressão
  // e pelos corações dos três dragões.
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    show_notification: true,
    pattern: [
      '    F    ',
      '   ELE   ',
      '  MXAXM  ',
      ' GQPLPQG ',
      'ILALNLALI',
      ' GQPLPQG ',
      '  MXAXM  ',
      '   ELE   ',
      '    R    '
    ],
    key: {
      N: { item: INSTAVEL },
      L: { item: 'mascaras:linha_do_avesso' },
      M: { item: MATRIZ },
      X: { item: 'mekanism:pellet_antimatter' },
      A: { item: 'advanced_ae:quantum_alloy' },
      Q: { item: 'modern_industrialization:quantum_circuit' },
      P: { item: 'powah:nitro_crystal_block' },
      E: { item: 'evolvedmekanism:alloy_exoversal' },
      G: { item: 'botania:gaia_ingot' },
      F: { item: 'iceandfire:fire_dragon_heart' },
      I: { item: 'iceandfire:ice_dragon_heart' },
      R: { item: 'iceandfire:lightning_dragon_heart' }
    },
    result: { id: 'mascaras:nucleo_remendado', count: 1 }
  }).id(id('nucleo_remendado'))

  // ---------- Etapa 9: Núcleo Criativo (o último ponto: 4000 mB de antimatéria, 5 minutos) ----------
  antimateria('nucleo_criativo', 'mascaras:nucleo_remendado', CORE, 4000, 6000)

  // ---------- Botania: os itens criativos dele também pedem o Núcleo Criativo (Placa Terrestre) ----------
  // O Botania Revived traz receitas próprias desses itens (módulo "cre"); saem todas.
  event.remove({ id: /^botania:cre\// })
  const terra = (nome, itens, mana, resultado) => event.custom({
    type: 'botania:terra_plate',
    ingredients: itens.map(i => ({ item: i })),
    mana: mana,
    result: resultado
  }).id(id(nome))
  const x4 = i => [i, i, i, i]
  terra('botania_creative_pool',
    [CORE, 'botania:fabulous_pool', 'botania:mana_tablet'].concat(x4('botania:dragonstone_block'),
      x4('botania:life_essence'), x4('botania:gaia_ingot')),
    1000000, { count: 1, id: 'botania:creative_pool' })
  terra('botania_creative_mana_tablet',
    [CORE, 'botania:mana_tablet', 'botania:rune_lust', 'botania:rune_gluttony', 'botania:rune_greed',
      'botania:rune_sloth', 'botania:rune_wrath', 'botania:rune_envy', 'botania:rune_pride']
      .concat(x4('botania:terrasteel_block'), x4('botania:life_essence')),
    1000000, {
      count: 1, id: 'botania:mana_tablet',
      components: { 'minecraft:custom_data': { creative: 1, mana: 500000 }, 'minecraft:rarity': 'epic' }
    })
  terra('botania_creative_corporea_spark',
    [CORE, 'botania:corporea_spark_master', 'botania:rune_mana'].concat(x4('botania:elementium_block'),
      x4('botania:pixie_dust'), x4('botania:life_essence')),
    1000000, { count: 1, id: 'botania:corporea_spark_creative' })
  terra('botania_infrangible_platform',
    [FRAG, 'botania:dragonstone_block'].concat(x4('botania:abstruse_platform'), x4('botania:terrasteel_ingot')),
    1000000, { count: 4, id: 'botania:infrangible_platform' })

  // ---------- Etapa 8: itens criativos ----------
  // Núcleo no meio, 4x o melhor item do mod nos cantos, 4x bloco de liga Unobtainium-Vibranium nas laterais
  const criativo = (saida, canto, borda) => {
    event.shaped(saida, ['TBT', 'BNB', 'TBT'], { T: canto, B: borda || BORDA, N: CORE })
      .id(id(saida.replace(':', '_')))
  }
  // Só 1 item do último nível (os do MI já são absurdos)
  const criativoUnico = (saida, item) => {
    event.shaped(saida, ['BTB', 'BNB', 'BBB'], { T: item, B: BORDA, N: CORE })
      .id(id(saida.replace(':', '_')))
  }
  // Energia infinita: Orbe Energizante no máximo (2.147.483.647 FE) e 2 Núcleos
  const energiaCriativa = (saida, itens) =>
    energizar(saida.replace(':', '_'), saida, [CORE, CORE].concat(itens), MAX_FE)

  criativo('mekanism:creative_fluid_tank', 'mekanism:ultimate_fluid_tank')
  criativo('mekanism:creative_chemical_tank', 'mekanism:ultimate_chemical_tank')
  criativo('mekanism:creative_bin', 'mekanism:ultimate_bin')
  criativo('ae2:creative_storage_cell', 'ae2:item_storage_cell_256k', 'ae2:fluid_storage_cell_256k')
  criativo('create:creative_motor', 'create:precision_mechanism')
  criativo('create:creative_fluid_tank', 'create:fluid_tank')
  criativo('create:creative_crate', 'create:item_vault')
  criativo('evolvedmekanism:creative_induction_cell', 'evolvedmekanism:multiversal_induction_cell')
  criativo('evolvedmekanism:creative_induction_provider', 'evolvedmekanism:multiversal_induction_provider')
  criativo('evolvedmekanism:qio_drive_creative', 'evolvedmekanism:qio_drive_black_hole')
  criativoUnico('modern_industrialization:creative_barrel', 'modern_industrialization:quantum_barrel')
  criativoUnico('modern_industrialization:creative_tank', 'modern_industrialization:quantum_tank')
  criativoUnico('modern_industrialization:creative_storage_unit', 'modern_industrialization:superconductor_storage_unit')

  energiaCriativa('mekanism:creative_energy_cube', ['mekanism:ultimate_energy_cube', 'mekanism:ultimate_energy_cube',
    'mekanism:ultimate_induction_cell', 'mekanism:ultimate_induction_cell'])
  energiaCriativa('ae2:creative_energy_cell', ['megacells:mega_energy_cell', 'megacells:mega_energy_cell',
    'megacells:mega_energy_cell', 'megacells:mega_energy_cell'])
  energiaCriativa('powah:energy_cell_creative', ['powah:energy_cell_nitro', 'powah:energy_cell_nitro',
    'powah:energy_cell_nitro', 'powah:energy_cell_nitro'])

  // Bolo de Blaze Criativo: 8 bolos + 1 Fragmento
  event.shaped('create:creative_blaze_cake', ['CCC', 'CFC', 'CCC'], {
    C: 'create:blaze_cake', F: FRAG
  }).id(id('create_creative_blaze_cake'))

  // Upgrade de Pilha Ômega (pilha infinita)
  event.shaped('sophisticatedbackpacks:stack_upgrade_omega_tier', ['TUT', 'UNU', 'TUT'], {
    T: 'sophisticatedbackpacks:stack_upgrade_tier_4', U: UV_BLOCK, N: CORE
  }).id(id('backpack_stack_upgrade_omega'))
  event.shaped('sophisticatedstorage:stack_upgrade_omega_tier', ['TUT', 'UNU', 'TUT'], {
    T: 'sophisticatedstorage:stack_upgrade_tier_5', U: UV_BLOCK, N: CORE
  }).id(id('storage_stack_upgrade_omega'))
})
