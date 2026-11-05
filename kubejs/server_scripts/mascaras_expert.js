// Máscaras Relíquia — receitas dos trajes e dos 4 acessórios (eles não têm receita dentro do mod).
// Coloque em kubejs/server_scripts/ (PC e servidor). Para aplicar sem reiniciar: /reload

ServerEvents.recipes(event => {
  // Anel do Pacto: Allthemodium, sangue de dragão (Ice and Fire), Ignitium (Ignis), runa de sangue (Iron's), presas (Vampirism)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" ADA ", "AIBIA", "FBSBF", "AIBIA", " ADA "], "key": {"A": {"item": "allthemodium:allthemodium_ingot"}, "D": {"item": "iceandfire:fire_dragon_blood"}, "I": {"item": "cataclysm:ignitium_ingot"}, "B": {"item": "irons_spellbooks:blood_rune"}, "F": {"item": "vampirism:vampire_fang"}, "S": {"item": "mascaras:selo_sangue"}}, "result": {"id": "mascaras:anel_do_pacto", "count": 1}}).id('kubejs:mascaras/anel_do_pacto')

  // Colar da Chave: lingote arcano (Iron's), processador quântico (AdvancedAE), gema espiritual (Occultism), Vibranium
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" GQG ", "GKEKG", "QESEQ", "GKEKG", " GQG "], "key": {"G": {"item": "irons_spellbooks:arcane_ingot"}, "Q": {"item": "advanced_ae:quantum_processor"}, "K": {"item": "occultism:spirit_attuned_gem"}, "E": {"item": "allthemodium:vibranium_plate"}, "S": {"item": "mascaras:selo_conhecimento"}}, "result": {"id": "mascaras:colar_da_chave", "count": 1}}).id('kubejs:mascaras/colar_da_chave')

  // Rosário do Ocaso: Witherite (Harbinger), caveiras de wither, Unobtainium, gemas de alma (Occultism)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" WKW ", "WGOGW", "KOSOK", "WGOGW", " WKW "], "key": {"W": {"item": "cataclysm:witherite_ingot"}, "K": {"item": "minecraft:wither_skeleton_skull"}, "G": {"item": "allthemodium:unobtainium_plate"}, "O": {"item": "occultism:soul_gem"}, "S": {"item": "mascaras:selo_morte"}}, "result": {"id": "mascaras:rosario_do_ocaso", "count": 1}}).id('kubejs:mascaras/rosario_do_ocaso')

  // Cinto da Órbita: cristal Nitro (Powah), Radiância Refinada (Create), liga hipercarregada (Evolved), Essência da Tempestade (Scylla)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" CRC ", "CEZEC", "RZSZR", "CEZEC", " CRC "], "key": {"C": {"item": "powah:crystal_nitro"}, "R": {"item": "create:refined_radiance"}, "E": {"item": "evolvedmekanism:alloy_hypercharged"}, "Z": {"item": "cataclysm:essence_of_the_storm"}, "S": {"item": "mascaras:selo_energia"}}, "result": {"id": "mascaras:cinto_da_orbita", "count": 1}}).id('kubejs:mascaras/cinto_da_orbita')

  event.shaped('mascaras:capuz_carmim', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'vampirism:vampire_fang', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_helmet'
  }).id('kubejs:mascaras/capuz_carmim')

  event.shaped('mascaras:jaqueta_carmim', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'vampirism:vampire_fang', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_chestplate'
  }).id('kubejs:mascaras/jaqueta_carmim')

  event.shaped('mascaras:calca_carmim', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'vampirism:vampire_fang', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_leggings'
  }).id('kubejs:mascaras/calca_carmim')

  event.shaped('mascaras:botas_carmim', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'vampirism:vampire_fang', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_boots'
  }).id('kubejs:mascaras/botas_carmim')

  event.shaped('mascaras:capuz_arquivista', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'irons_spellbooks:arcane_ingot', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_helmet'
  }).id('kubejs:mascaras/capuz_arquivista')

  event.shaped('mascaras:jaqueta_arquivista', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'irons_spellbooks:arcane_ingot', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_chestplate'
  }).id('kubejs:mascaras/jaqueta_arquivista')

  event.shaped('mascaras:calca_arquivista', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'irons_spellbooks:arcane_ingot', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_leggings'
  }).id('kubejs:mascaras/calca_arquivista')

  event.shaped('mascaras:botas_arquivista', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'irons_spellbooks:arcane_ingot', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_boots'
  }).id('kubejs:mascaras/botas_arquivista')

  event.shaped('mascaras:capuz_luto', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:wither_skeleton_skull', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_helmet'
  }).id('kubejs:mascaras/capuz_luto')

  event.shaped('mascaras:jaqueta_luto', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:wither_skeleton_skull', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_chestplate'
  }).id('kubejs:mascaras/jaqueta_luto')

  event.shaped('mascaras:calca_luto', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:wither_skeleton_skull', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_leggings'
  }).id('kubejs:mascaras/calca_luto')

  event.shaped('mascaras:botas_luto', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:wither_skeleton_skull', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_boots'
  }).id('kubejs:mascaras/botas_luto')

  event.shaped('mascaras:capuz_estatico', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'powah:crystal_spirited', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_helmet'
  }).id('kubejs:mascaras/capuz_estatico')

  event.shaped('mascaras:jaqueta_estatico', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'powah:crystal_spirited', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_chestplate'
  }).id('kubejs:mascaras/jaqueta_estatico')

  event.shaped('mascaras:calca_estatico', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'powah:crystal_spirited', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_leggings'
  }).id('kubejs:mascaras/calca_estatico')

  event.shaped('mascaras:botas_estatico', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'powah:crystal_spirited', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_boots'
  }).id('kubejs:mascaras/botas_estatico')

  // 1.29 — Traje do Agente: o investigador (bússola, couro, pano) sobre vibranium
  event.shaped('mascaras:capuz_agente', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:recovery_compass', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_helmet'
  }).id('kubejs:mascaras/capuz_agente')
  event.shaped('mascaras:jaqueta_agente', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:recovery_compass', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_chestplate'
  }).id('kubejs:mascaras/jaqueta_agente')
  event.shaped('mascaras:calca_agente', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:recovery_compass', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_leggings'
  }).id('kubejs:mascaras/calca_agente')
  event.shaped('mascaras:botas_agente', ['MCM', 'CPC', 'MAM'], {
    A: 'mekanism:alloy_atomic', M: 'minecraft:recovery_compass', C: 'botania:manaweave_cloth', P: 'allthemodium:vibranium_boots'
  }).id('kubejs:mascaras/botas_agente')

  // 1.29 — Traje do Marcado: costurado com os QUATRO componentes e Linha do Avesso sobre a peça dos quatro trajes
  const REMENDADO = [['capuz', 'capuz'], ['jaqueta', 'jaqueta'], ['calca', 'calca'], ['botas', 'botas']]
  REMENDADO.forEach(([peca]) => {
    event.shaped('mascaras:' + peca + '_remendado', ['SLC', 'ABD', 'MFE'], {
      S: 'mascaras:componente_sangue', C: 'mascaras:componente_conhecimento', M: 'mascaras:componente_morte',
      E: 'mascaras:componente_energia', L: 'mascaras:linha_do_avesso',
      A: 'mascaras:' + peca + '_carmim', B: 'mascaras:' + peca + '_luto', D: 'mascaras:' + peca + '_arquivista',
      F: 'mascaras:' + peca + '_estatico'
    }).id('kubejs:mascaras/' + peca + '_remendado')
  })
})
