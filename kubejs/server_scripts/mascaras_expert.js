// Máscaras Relíquia — MODO EXPERT (estilo ATM). Gerado por tools/gerar_expert.py.
// Coloque em kubejs/server_scripts/ (PC e servidor) junto com mascaras_dificuldade.js.
// Ideia: cada mod de tecnologia passa a depender dos outros e do Allthemodium.

ServerEvents.recipes(event => {
  // MI Turbo: pede circuitos de elite do Mekanism
  event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/hull/turbo_machine_hull' })
  event.custom({"type": "modern_industrialization:assembler", "duration": 1000, "eu": 32, "item_inputs": [{"amount": 2, "item": "modern_industrialization:sodium_battery"}, {"amount": 1, "item": "modern_industrialization:digital_circuit"}, {"amount": 1, "item": "modern_industrialization:turbo_machine_casing"}, {"amount": 3, "item": "modern_industrialization:aluminum_cable"}, {"tag": "c:circuits/elite", "amount": 2}, {"item": "mekanism:alloy_reinforced", "amount": 4}], "item_outputs": [{"amount": 1, "item": "modern_industrialization:turbo_machine_hull"}]}).id('kubejs:expert/modern_industrialization/assembler_generated/electric_age/hull/turbo_machine_hull')

  // sem atalho na bancada
  event.remove({ id: 'modern_industrialization:electric_age/hull/turbo_machine_hull_asbl' })

  // MI Altamente Avançado: circuito supremo + placas de Allthemodium
  event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/hull/highly_advanced_machine_hull' })
  event.custom({"type": "modern_industrialization:assembler", "duration": 1000, "eu": 32, "item_inputs": [{"amount": 2, "item": "modern_industrialization:cadmium_battery"}, {"amount": 1, "item": "modern_industrialization:processing_unit"}, {"amount": 1, "item": "modern_industrialization:highly_advanced_machine_casing"}, {"amount": 3, "item": "modern_industrialization:annealed_copper_cable"}, {"tag": "c:circuits/ultimate", "amount": 2}, {"item": "allthemodium:allthemodium_plate", "amount": 2}], "item_outputs": [{"amount": 1, "item": "modern_industrialization:highly_advanced_machine_hull"}]}).id('kubejs:expert/modern_industrialization/assembler_generated/electric_age/hull/highly_advanced_machine_hull')

  // sem atalho na bancada
  event.remove({ id: 'modern_industrialization:electric_age/hull/highly_advanced_machine_hull_asbl' })

  // MI Quântico: Unobtainium, Vibranium, Singularidade e Corruptium
  event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/hull/quantum_machine_hull' })
  event.custom({"type": "modern_industrialization:assembler", "duration": 2000, "eu": 64, "item_inputs": [{"amount": 2, "item": "modern_industrialization:plutonium_battery"}, {"amount": 1, "item": "modern_industrialization:quantum_circuit"}, {"amount": 1, "item": "modern_industrialization:quantum_machine_casing"}, {"amount": 3, "item": "modern_industrialization:superconductor_cable"}, {"item": "allthemodium:unobtainium_plate", "amount": 4}, {"item": "allthemodium:vibranium_plate", "amount": 4}, {"item": "ae2:singularity", "amount": 1}, {"item": "create_creative_assembly:corruptiumingot", "amount": 1}], "item_outputs": [{"amount": 1, "item": "modern_industrialization:quantum_machine_hull"}]}).id('kubejs:expert/modern_industrialization/assembler_generated/electric_age/hull/quantum_machine_hull')

  // sem atalho na bancada
  event.remove({ id: 'modern_industrialization:electric_age/hull/quantum_machine_hull_asbl' })

  // MI Unidade de Processamento: Allthemodium
  event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit' })
  event.custom({"type": "modern_industrialization:assembler", "duration": 1000, "eu": 32, "item_inputs": [{"amount": 4, "item": "modern_industrialization:digital_circuit"}, {"amount": 2, "item": "modern_industrialization:random_access_memory"}, {"amount": 1, "item": "modern_industrialization:memory_management_unit"}, {"amount": 1, "item": "modern_industrialization:arithmetic_logic_unit"}, {"amount": 1, "item": "modern_industrialization:processing_unit_board"}, {"item": "allthemodium:allthemodium_ingot", "amount": 2}], "item_outputs": [{"amount": 1, "item": "modern_industrialization:processing_unit"}]}).id('kubejs:expert/modern_industrialization/assembler_generated/electric_age/circuit/craft/processing_unit')

  // sem atalho na bancada
  event.remove({ id: 'modern_industrialization:electric_age/circuit/craft/processing_unit_asbl' })

  // MI Circuito Quântico: Vibranium + liga hipercarregada
  event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/quantum_circuit' })
  event.custom({"type": "modern_industrialization:assembler", "duration": 2000, "eu": 64, "item_inputs": [{"amount": 4, "item": "modern_industrialization:processing_unit"}, {"amount": 2, "item": "modern_industrialization:cooling_cell"}, {"amount": 2, "item": "modern_industrialization:qubit"}, {"amount": 1, "item": "modern_industrialization:quantum_circuit_board"}, {"item": "allthemodium:vibranium_ingot", "amount": 2}, {"item": "evolvedmekanism:alloy_hypercharged", "amount": 2}], "item_outputs": [{"amount": 1, "item": "modern_industrialization:quantum_circuit"}]}).id('kubejs:expert/modern_industrialization/assembler_generated/electric_age/circuit/craft/quantum_circuit')

  // sem atalho na bancada
  event.remove({ id: 'modern_industrialization:electric_age/circuit/craft/quantum_circuit_asbl' })

  // Casco do SPS: lingotes de Allthemodium
  event.remove({ id: 'mekanism:sps_casing' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"#": {"tag": "c:pellets/plutonium"}, "A": {"tag": "c:pellets/polonium"}, "P": {"item": "allthemodium:allthemodium_ingot"}}, "pattern": ["PAP", "A#A", "PAP"], "result": {"count": 1, "id": "mekanism:sps_casing"}}).id('kubejs:expert/mekanism/sps_casing')

  // Bobina Supercarregada: Vibranium
  event.remove({ id: 'mekanism:supercharged_coil' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"#": {"item": "mekanism:laser"}, "A": {"tag": "c:pellets/polonium"}, "C": {"tag": "c:circuits/ultimate"}, "c": {"item": "allthemodium:vibranium_ingot"}}, "pattern": ["ccc", "C#C", "AAA"], "result": {"count": 1, "id": "mekanism:supercharged_coil"}}).id('kubejs:expert/mekanism/supercharged_coil')

  // Nucleossintetizador: Unobtainium
  event.remove({ id: 'mekanism:antiprotonic_nucleosynthesizer' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"#": {"item": "allthemodium:unobtainium_ingot"}, "A": {"tag": "c:pellets/antimatter"}, "C": {"tag": "c:circuits/ultimate"}, "X": {"item": "mekanism:steel_casing"}}, "pattern": ["#C#", "AXA", "#C#"], "result": {"count": 1, "id": "mekanism:antiprotonic_nucleosynthesizer"}}).id('kubejs:expert/mekanism/antiprotonic_nucleosynthesizer')

  // Evolved: Allthemodium
  event.remove({ id: 'evolvedmekanism:tier_installer/overclocked' })
  event.custom({"type": "minecraft:crafting_shaped", "key": {"A": {"tag": "evolvedmekanism:alloys/hypercharged"}, "C": {"tag": "c:circuits/overclocked"}, "I": {"item": "allthemodium:allthemodium_ingot"}, "P": {"item": "mekanism:steel_casing"}}, "pattern": ["ACA", "IPI", "ACA"], "result": {"id": "evolvedmekanism:overclocked_tier_installer"}}).id('kubejs:expert/evolvedmekanism/tier_installer/overclocked')

  // Evolved: Vibranium
  event.remove({ id: 'evolvedmekanism:tier_installer/quantum' })
  event.custom({"type": "minecraft:crafting_shaped", "key": {"A": {"tag": "evolvedmekanism:alloys/subatomic"}, "C": {"tag": "c:circuits/quantum"}, "I": {"item": "allthemodium:vibranium_ingot"}, "P": {"item": "mekanism:steel_casing"}}, "pattern": ["ACA", "IPI", "ACA"], "result": {"id": "evolvedmekanism:quantum_tier_installer"}}).id('kubejs:expert/evolvedmekanism/tier_installer/quantum')

  // Evolved: Unobtainium
  event.remove({ id: 'evolvedmekanism:tier_installer/dense' })
  event.custom({"type": "minecraft:crafting_shaped", "key": {"A": {"tag": "evolvedmekanism:alloys/singular"}, "C": {"tag": "c:circuits/dense"}, "I": {"item": "allthemodium:unobtainium_ingot"}, "P": {"item": "mekanism:steel_casing"}}, "pattern": ["ACA", "IPI", "ACA"], "result": {"id": "evolvedmekanism:dense_tier_installer"}}).id('kubejs:expert/evolvedmekanism/tier_installer/dense')

  // Evolved Multiversal: liga UV + Liga Paranormal
  event.remove({ id: 'evolvedmekanism:tier_installer/multiversal' })
  event.custom({"type": "minecraft:crafting_shaped", "key": {"A": {"tag": "evolvedmekanism:alloys/exoversal"}, "C": {"tag": "c:circuits/multiversal"}, "I": {"item": "allthemodium:unobtainium_vibranium_alloy_ingot"}, "P": {"item": "mascaras:liga_paranormal"}}, "pattern": ["ACA", "IPI", "ACA"], "result": {"id": "evolvedmekanism:multiversal_tier_installer"}}).id('kubejs:expert/evolvedmekanism/tier_installer/multiversal')

  // Anel Quântico: Allthemodium
  event.remove({ id: 'ae2:network/blocks/quantum_ring' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:allthemodium_ingot"}, "b": {"item": "ae2:logic_processor"}, "c": {"item": "ae2:engineering_processor"}, "d": {"item": "ae2:energy_cell"}, "e": {"tag": "ae2:smart_dense_cable"}}, "pattern": ["aba", "cde", "aba"], "result": {"count": 1, "id": "ae2:quantum_ring"}}).id('kubejs:expert/ae2/network/blocks/quantum_ring')

  // Câmara Quântica: placas de Vibranium
  event.remove({ id: 'ae2:network/blocks/quantum_link' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:vibranium_plate"}, "b": {"item": "ae2:fluix_pearl"}}, "pattern": ["aba", "b b", "aba"], "result": {"count": 1, "id": "ae2:quantum_link"}}).id('kubejs:expert/ae2/network/blocks/quantum_link')

  // MEGA 1M: Allthemodium
  event.remove({ id: 'megacells:cells/cell_component_1m' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:allthemodium_plate"}, "b": {"item": "megacells:accumulation_processor"}, "c": {"item": "ae2:cell_component_256k"}, "d": {"item": "ae2:quartz_vibrant_glass"}}, "pattern": ["aba", "cdc", "aca"], "result": {"count": 1, "id": "megacells:cell_component_1m"}}).id('kubejs:expert/megacells/cells/cell_component_1m')

  // MEGA 4M: Vibranium
  event.remove({ id: 'megacells:cells/cell_component_4m' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:vibranium_plate"}, "b": {"item": "megacells:accumulation_processor"}, "c": {"item": "megacells:cell_component_1m"}, "d": {"item": "ae2:quartz_vibrant_glass"}}, "pattern": ["aba", "cdc", "aca"], "result": {"count": 1, "id": "megacells:cell_component_4m"}}).id('kubejs:expert/megacells/cells/cell_component_4m')

  // MEGA 16M: Unobtainium
  event.remove({ id: 'megacells:cells/cell_component_16m' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:unobtainium_plate"}, "b": {"item": "megacells:accumulation_processor"}, "c": {"item": "megacells:cell_component_4m"}, "d": {"item": "ae2:quartz_vibrant_glass"}}, "pattern": ["aba", "cdc", "aca"], "result": {"count": 1, "id": "megacells:cell_component_16m"}}).id('kubejs:expert/megacells/cells/cell_component_16m')

  // MEGA 64M: liga Unobtainium-Vibranium
  event.remove({ id: 'megacells:cells/cell_component_64m' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"a": {"item": "allthemodium:unobtainium_vibranium_alloy_ingot"}, "b": {"item": "megacells:accumulation_processor"}, "c": {"item": "megacells:cell_component_16m"}, "d": {"item": "ae2:quartz_vibrant_glass"}}, "pattern": ["aba", "cdc", "aca"], "result": {"count": 1, "id": "megacells:cell_component_64m"}}).id('kubejs:expert/megacells/cells/cell_component_64m')

  // Cristal Flamejante: 4x FE
  event.remove({ id: 'powah:energizing/blazing_crystal' })
  event.custom({"type": "powah:energizing", "energy": 480000, "ingredients": [{"item": "minecraft:blaze_powder"}, {"item": "minecraft:blaze_powder"}, {"item": "minecraft:blaze_powder"}, {"item": "minecraft:blaze_powder"}], "result": {"count": 1, "id": "powah:crystal_blazing"}}).id('kubejs:expert/powah/energizing/blazing_crystal')

  // Cristal Flamejante: 4x FE
  event.remove({ id: 'powah:energizing/blazing_crystal_2' })
  event.custom({"type": "powah:energizing", "energy": 480000, "ingredients": [{"tag": "c:rods/blaze"}], "result": {"count": 1, "id": "powah:crystal_blazing"}}).id('kubejs:expert/powah/energizing/blazing_crystal_2')

  // Cristal Niótico: 5x FE
  event.remove({ id: 'powah:energizing/niotic_crystal' })
  event.custom({"type": "powah:energizing", "energy": 1500000, "ingredients": [{"tag": "c:gems/diamond"}], "result": {"count": 1, "id": "powah:crystal_niotic"}}).id('kubejs:expert/powah/energizing/niotic_crystal')

  // Cristal Espiritual: 5x FE
  event.remove({ id: 'powah:energizing/spirited_crystal' })
  event.custom({"type": "powah:energizing", "energy": 5000000, "ingredients": [{"tag": "c:gems/emerald"}], "result": {"count": 1, "id": "powah:crystal_spirited"}}).id('kubejs:expert/powah/energizing/spirited_crystal')

  // Cristal Nitro: 200M FE + Allthemodium, rende 8
  event.remove({ id: 'powah:energizing/nitro_crystal' })
  event.custom({"type": "powah:energizing", "energy": 200000000, "ingredients": [{"tag": "c:nether_stars"}, {"tag": "c:storage_blocks/redstone"}, {"tag": "c:storage_blocks/redstone"}, {"item": "powah:blazing_crystal_block"}, {"item": "allthemodium:allthemodium_ingot"}], "result": {"count": 8, "id": "powah:crystal_nitro"}}).id('kubejs:expert/powah/energizing/nitro_crystal')

  // Célula Nitro: Vibranium
  event.remove({ id: 'powah:crafting/energy_cell_nitro' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "powah:crystal_nitro"}, "c": {"item": "powah:energy_cell_spirited"}, "d": {"item": "allthemodium:vibranium_plate"}, "n": {"item": "powah:capacitor_nitro"}}, "pattern": ["bnb", "cdc", "bnb"], "result": {"count": 1, "id": "powah:energy_cell_nitro"}}).id('kubejs:expert/powah/crafting/energy_cell_nitro')

  // Gerador Nitro: Vibranium
  event.remove({ id: 'powah:crafting/thermo_generator_nitro' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "powah:capacitor_nitro"}, "d": {"item": "allthemodium:vibranium_plate"}, "g": {"item": "powah:crystal_nitro"}, "i": {"item": "powah:dielectric_paste"}, "p": {"item": "powah:thermoelectric_plate"}, "t": {"item": "powah:thermo_generator_spirited"}}, "pattern": ["igi", "cdc", "ptp"], "result": {"count": 1, "id": "powah:thermo_generator_nitro"}}).id('kubejs:expert/powah/crafting/thermo_generator_nitro')

  // Plataforma de Teleporte do Allthemodium: Estrela do Nether + Núcleos de Teletransporte + circuitos de elite
  event.remove({ id: 'allthemodium:teleport_pad' })
  event.shaped('allthemodium:teleport_pad', ['NTN', 'CSC', 'NTN'], {
    N: 'allthemodium:allthemodium_ingot',
    T: 'mekanism:teleportation_core',
    C: '#c:circuits/elite',
    S: 'minecraft:nether_star'
  }).id('kubejs:expert/allthemodium/teleport_pad')

  // Altar do Despertar: Vibranium
  event.remove({ id: 'mysticalagriculture:awakening_altar' })
  event.custom({"type": "minecraft:crafting_shaped", "pattern": ["GCG", " S ", "SSS"], "key": {"S": {"item": "mysticalagriculture:soulstone"}, "C": {"item": "minecraft:orange_wool"}, "G": {"item": "allthemodium:vibranium_ingot"}}, "result": {"id": "mysticalagriculture:awakening_altar"}}).id('kubejs:expert/mysticalagriculture/awakening_altar')

  // Pedestal do Despertar: Allthemodium
  event.remove({ id: 'mysticalagriculture:awakening_pedestal' })
  event.custom({"type": "minecraft:crafting_shaped", "pattern": ["GCG", " S ", " S "], "key": {"S": {"item": "mysticalagriculture:soulstone"}, "C": {"item": "minecraft:orange_wool"}, "G": {"item": "allthemodium:allthemodium_ingot"}}, "result": {"id": "mysticalagriculture:awakening_pedestal"}}).id('kubejs:expert/mysticalagriculture/awakening_pedestal')

  // Recipiente de Essência: Allthemodium
  event.remove({ id: 'mysticalagriculture:essence_vessel' })
  event.custom({"type": "minecraft:crafting_shaped", "pattern": ["GCG", " S ", " S "], "key": {"S": {"item": "mysticalagriculture:soulstone"}, "C": {"tag": "c:glass_blocks/colorless"}, "G": {"item": "allthemodium:allthemodium_ingot"}}, "result": {"id": "mysticalagriculture:essence_vessel"}}).id('kubejs:expert/mysticalagriculture/essence_vessel')

  // Cristal Mestre (infinito): Allthemodium no lugar dos fragmentos
  event.remove({ id: 'matc:master_infusion_crystal' })
  event.custom({"neoforge:conditions": [{"type": "neoforge:mod_loaded", "modid": "mysticalagradditions"}], "type": "minecraft:crafting_shaped", "category": "misc", "key": {"E": {"item": "allthemodium:allthemodium_ingot"}, "G": {"item": "matc:supremium_crystal"}, "P": {"item": "mysticalagradditions:insanium_essence"}}, "pattern": ["PEP", "EGE", "PEP"], "result": {"count": 1, "id": "mysticalagriculture:master_infusion_crystal"}}).id('kubejs:expert/matc/master_infusion_crystal')

  // Crux da Estrela do Nether: Bloco de Unobtainium (senão a estrela vira farm cedo)
  event.remove({ id: 'mysticalagradditions:nether_star_crux' })
  event.custom({"type": "crafting_shaped", "neoforge:conditions": [{"type": "mysticalagriculture:crop_enabled", "crop": "mysticalagradditions:nether_star"}], "pattern": ["ESE", "WDW", "ESE"], "key": {"E": {"item": "mysticalagradditions:insanium_essence"}, "S": {"item": "minecraft:nether_star"}, "W": {"item": "mysticalagradditions:withering_soul"}, "D": {"item": "allthemodium:unobtainium_block"}}, "result": {"id": "mysticalagradditions:nether_star_crux"}}).id('kubejs:expert/mysticalagradditions/nether_star_crux')

  // Crux do Ovo do Dragão: Bloco de Vibranium
  event.remove({ id: 'mysticalagradditions:dragon_egg_crux' })
  event.custom({"type": "crafting_shaped", "neoforge:conditions": [{"type": "mysticalagriculture:crop_enabled", "crop": "mysticalagradditions:dragon_egg"}], "pattern": ["ECE", "CDC", "ECE"], "key": {"E": {"item": "mysticalagradditions:insanium_essence"}, "C": {"item": "mysticalagradditions:dragon_scale"}, "D": {"item": "allthemodium:vibranium_block"}}, "result": {"id": "mysticalagradditions:dragon_egg_crux"}}).id('kubejs:expert/mysticalagradditions/dragon_egg_crux')

  // Crux do Cristal Nitro: Bloco de Vibranium
  event.remove({ id: 'mysticalagradditions:nitro_crystal_crux' })
  event.custom({"type": "crafting_shaped", "neoforge:conditions": [{"type": "neoforge:mod_loaded", "modid": "powah"}, {"type": "mysticalagriculture:crop_enabled", "crop": "mysticalagradditions:nitro_crystal"}], "pattern": ["ECE", "FDF", "ECE"], "key": {"E": {"item": "mysticalagradditions:insanium_essence"}, "C": {"item": "powah:crystal_nitro"}, "D": {"item": "allthemodium:vibranium_block"}, "F": {"item": "powah:capacitor_nitro"}}, "result": {"id": "mysticalagradditions:nitro_crystal_crux"}}).id('kubejs:expert/mysticalagradditions/nitro_crystal_crux')

  // QIO: o drive base pede componentes 4k do AE2
  event.remove({ id: 'mekanism:qio_drive_base' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"#": {"tag": "c:ender_pearls"}, "C": {"item": "mekanism:ultimate_control_circuit"}, "I": {"item": "ae2:cell_component_4k"}}, "pattern": ["ICI", "C#C", "ICI"], "result": {"count": 1, "id": "mekanism:qio_drive_base"}}).id('kubejs:expert/mekanism/qio_drive_base')

  // QIO Hiperdenso: componente 64k do AE2
  event.remove({ id: 'mekanism:qio_drive_hyper_dense' })
  event.custom({"type": "mekanism:mek_data", "category": "misc", "key": {"#": {"item": "ae2:cell_component_64k"}, "I": {"tag": "c:pellets/plutonium"}, "P": {"item": "mekanism:qio_drive_base"}}, "pattern": ["IPI", "P#P", "IPI"], "result": {"count": 1, "id": "mekanism:qio_drive_hyper_dense"}}).id('kubejs:expert/mekanism/qio_drive_hyper_dense')

  // QIO Dilatação Temporal: componente 1M do MEGA
  event.remove({ id: 'mekanism:qio_drive_time_dilating' })
  event.custom({"type": "mekanism:mek_data", "category": "misc", "key": {"#": {"item": "megacells:cell_component_1m"}, "I": {"tag": "c:pellets/plutonium"}, "P": {"item": "mekanism:qio_drive_hyper_dense"}}, "pattern": ["IPI", "P#P", "IPI"], "result": {"count": 1, "id": "mekanism:qio_drive_time_dilating"}}).id('kubejs:expert/mekanism/qio_drive_time_dilating')

  // QIO Supermassivo: Unobtainium
  event.remove({ id: 'mekanism:qio_drive_supermassive' })
  event.custom({"type": "mekanism:mek_data", "category": "misc", "key": {"#": {"tag": "c:pellets/antimatter"}, "I": {"item": "allthemodium:unobtainium_ingot"}, "P": {"item": "mekanism:qio_drive_time_dilating"}}, "pattern": ["IPI", "P#P", "IPI"], "result": {"count": 1, "id": "mekanism:qio_drive_supermassive"}}).id('kubejs:expert/mekanism/qio_drive_supermassive')

  // Célula de Indução Suprema: capacitores Nióticos (Powah)
  event.remove({ id: 'mekanism:induction/cell/ultimate' })
  event.custom({"type": "mekanism:mek_data", "category": "misc", "key": {"#": {"item": "mekanism:ultimate_energy_cube"}, "E": {"item": "powah:capacitor_niotic"}, "P": {"item": "mekanism:elite_induction_cell"}}, "pattern": ["EPE", "P#P", "EPE"], "result": {"count": 1, "id": "mekanism:ultimate_induction_cell"}}).id('kubejs:expert/mekanism/induction/cell/ultimate')

  // Provedor de Indução Supremo: capacitores Nitro (Powah)
  event.remove({ id: 'mekanism:induction/provider/ultimate' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"#": {"item": "mekanism:ultimate_energy_cube"}, "C": {"item": "powah:capacitor_nitro"}, "P": {"item": "mekanism:elite_induction_provider"}}, "pattern": ["CPC", "P#P", "CPC"], "result": {"count": 1, "id": "mekanism:ultimate_induction_provider"}}).id('kubejs:expert/mekanism/induction/provider/ultimate')

  // Controlador do Reator de Fusão: Unidade de Processamento (MI)
  event.remove({ id: 'mekanismgenerators:reactor/controller' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"C": {"tag": "c:circuits/ultimate"}, "F": {"item": "mekanismgenerators:fusion_reactor_frame"}, "G": {"tag": "c:glass_panes"}, "T": {"item": "modern_industrialization:processing_unit"}}, "pattern": ["CGC", "FTF", "FFF"], "result": {"count": 1, "id": "mekanismgenerators:fusion_reactor_controller"}}).id('kubejs:expert/mekanismgenerators/reactor/controller')

  // Orbe de Melhoria (Iron's): Iésnio do Occultism
  event.remove({ id: 'irons_spellbooks:upgrade_orb' })
  event.custom({"type": "minecraft:crafting_shaped", "pattern": ["ICI", "CSC", "ICI"], "key": {"I": {"item": "occultism:iesnium_ingot"}, "C": {"item": "irons_spellbooks:cinder_essence"}, "S": {"tag": "irons_spellbooks:mithril_material"}}, "result": {"id": "irons_spellbooks:upgrade_orb", "count": 1}}).id('kubejs:expert/irons_spellbooks/upgrade_orb')

  // Núcleo Quântico (AdvancedAE): placas de Unobtainium
  event.remove({ id: 'advanced_ae:quantumcore' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"A": {"item": "advanced_ae:quantum_accelerator"}, "E": {"item": "allthemodium:unobtainium_plate"}, "S": {"item": "ae2:singularity"}, "T": {"item": "advanced_ae:quantum_storage_256"}, "U": {"item": "advanced_ae:quantum_unit"}}, "pattern": ["SES", "AUT", "SES"], "result": {"count": 1, "id": "advanced_ae:quantum_core"}}).id('kubejs:expert/advanced_ae/quantumcore')

  // Controlador de Armazenamento do Occultism: processadores do AE2 + mecanismos de precisão do Create
  event.remove({ id: 'occultism:crafting/storage_controller' })
  event.shaped('occultism:storage_controller', ['AdA', 'CbC'], {
    A: 'ae2:engineering_processor', d: 'occultism:dimensional_matrix',
    C: 'create:precision_mechanism', b: 'occultism:storage_controller_base'
  }).id('kubejs:expert/occultism/storage_controller')

  // Anel do Pacto: Allthemodium, sangue de dragão (Ice and Fire), Ignitium (Ignis), runa de sangue (Iron's), presas (Vampirism)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" ADA ", "AIBIA", "FBSBF", "AIBIA", " ADA "], "key": {"A": {"item": "allthemodium:allthemodium_ingot"}, "D": {"item": "iceandfire:fire_dragon_blood"}, "I": {"item": "cataclysm:ignitium_ingot"}, "B": {"item": "irons_spellbooks:blood_rune"}, "F": {"item": "vampirism:vampire_fang"}, "S": {"item": "mascaras:selo_sangue"}}, "result": {"id": "mascaras:anel_do_pacto", "count": 1}}).id('kubejs:mascaras/anel_do_pacto')

  // Colar da Chave: lingote arcano (Iron's), processador quântico (AdvancedAE), gema espiritual (Occultism), Vibranium
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" GQG ", "GKEKG", "QESEQ", "GKEKG", " GQG "], "key": {"G": {"item": "irons_spellbooks:arcane_ingot"}, "Q": {"item": "advanced_ae:quantum_processor"}, "K": {"item": "occultism:spirit_attuned_gem"}, "E": {"item": "allthemodium:vibranium_plate"}, "S": {"item": "mascaras:selo_conhecimento"}}, "result": {"id": "mascaras:colar_da_chave", "count": 1}}).id('kubejs:mascaras/colar_da_chave')

  // Rosário do Ocaso: Witherite (Harbinger), caveiras de wither, Unobtainium, gemas de alma (Occultism)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" WKW ", "WGOGW", "KOSOK", "WGOGW", " WKW "], "key": {"W": {"item": "cataclysm:witherite_ingot"}, "K": {"item": "minecraft:wither_skeleton_skull"}, "G": {"item": "allthemodium:unobtainium_plate"}, "O": {"item": "occultism:soul_gem"}, "S": {"item": "mascaras:selo_morte"}}, "result": {"id": "mascaras:rosario_do_ocaso", "count": 1}}).id('kubejs:mascaras/rosario_do_ocaso')

  // Cinto da Órbita: cristal Nitro (Powah), Radiância Refinada (Create), liga hipercarregada (Evolved), Essência da Tempestade (Scylla)
  event.custom({"type": "create:mechanical_crafting", "accept_mirrored": false, "category": "misc", "show_notification": true, "pattern": [" CRC ", "CEZEC", "RZSZR", "CEZEC", " CRC "], "key": {"C": {"item": "powah:crystal_nitro"}, "R": {"item": "create:refined_radiance"}, "E": {"item": "evolvedmekanism:alloy_hypercharged"}, "Z": {"item": "cataclysm:essence_of_the_storm"}, "S": {"item": "mascaras:selo_energia"}}, "result": {"id": "mascaras:cinto_da_orbita", "count": 1}}).id('kubejs:mascaras/cinto_da_orbita')

  // Oritech Perfuratriz Profunda (minério infinito): placas de Vibranium e Allthemodium
  event.remove({ id: 'oritech:crafting/deepdrill' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "allthemodium:allthemodium_plate"}, "c": {"item": "oritech:heisenberg_compensator"}, "f": {"item": "allthemodium:vibranium_plate"}, "m": {"item": "oritech:motor"}, "s": {"item": "oritech:overcharged_crystal"}}, "pattern": ["fsf", "mcm", "bbb"], "result": {"count": 1, "id": "oritech:deep_drill_block"}}).id('kubejs:expert/oritech/crafting/deepdrill')

  // Oritech Acelerador de Partículas: Vibranium + circuito supremo do Mekanism
  event.remove({ id: 'oritech:crafting/particlecontroller' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "oritech:accelerator_motor"}, "c": {"item": "minecraft:dropper"}, "f": {"item": "allthemodium:vibranium_plate"}, "s": {"item": "mekanism:ultimate_control_circuit"}}, "pattern": ["fff", "fcf", "sbs"], "result": {"count": 1, "id": "oritech:accelerator_controller"}}).id('kubejs:expert/oritech/crafting/particlecontroller')

  // Oritech Motor do Acelerador: placas de Allthemodium
  event.remove({ id: 'oritech:crafting/particlemotor' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"i": {"item": "allthemodium:allthemodium_plate"}, "o": {"item": "oritech:ion_thruster"}, "r": {"tag": "c:ingots/electrum"}, "t": {"item": "oritech:superconductor"}}, "pattern": [" t ", "rrr", "oio"], "result": {"count": 1, "id": "oritech:accelerator_motor"}}).id('kubejs:expert/oritech/crafting/particlemotor')

  // Oritech Coletor de Partículas: bobinas supercondutoras do MI
  event.remove({ id: 'oritech:crafting/particlecollector' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "oritech:big_solar_panel_block"}, "p": {"item": "modern_industrialization:superconductor_coil"}, "s": {"item": "oritech:heisenberg_compensator"}}, "pattern": ["ppp", "scs", "ppp"], "result": {"count": 1, "id": "oritech:particle_collector_block"}}).id('kubejs:expert/oritech/crafting/particlecollector')

  // Oritech Controlador do Reator: Unidade de Processamento do MI
  event.remove({ id: 'oritech:crafting/controller' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "oritech:reactor_wall"}, "r": {"item": "modern_industrialization:processing_unit"}}, "pattern": ["   ", "rcr", "   "], "result": {"count": 1, "id": "oritech:reactor_controller"}}).id('kubejs:expert/oritech/crafting/controller')

  // Oritech Contêiner Instável: Unobtainium + capacitores Nitro do Powah
  event.remove({ id: 'oritech:crafting/unstablecontainer' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "powah:capacitor_nitro"}, "c": {"item": "oritech:large_storage_block"}, "f": {"item": "oritech:super_ai_chip"}, "m": {"item": "allthemodium:unobtainium_plate"}, "s": {"item": "oritech:flux_gate"}}, "pattern": ["fsf", "mcm", "bbb"], "result": {"count": 1, "id": "oritech:unstable_container"}}).id('kubejs:expert/oritech/crafting/unstablecontainer')

  // Oritech Controlador de Spawner: Coração de Piglich no lugar da âncora
  event.remove({ id: 'oritech:crafting/spawner' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "allthemodium:piglich_heart"}, "p": {"item": "oritech:spawner_cage_block"}, "s": {"item": "oritech:enchantment_catalyst_block"}}, "pattern": ["ppp", "scs", "ppp"], "result": {"count": 1, "id": "oritech:spawner_controller_block"}}).id('kubejs:expert/oritech/crafting/spawner')

  // Oritech Porto de Drones: placas de Allthemodium
  event.remove({ id: 'oritech:crafting/droneport' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "allthemodium:allthemodium_plate"}, "c": {"item": "oritech:superconductor"}, "f": {"item": "oritech:advanced_computing_engine"}, "m": {"item": "oritech:motor"}, "s": {"item": "oritech:unholy_intelligence"}}, "pattern": ["fsf", "mcm", "bbb"], "result": {"count": 1, "id": "oritech:drone_port_block"}}).id('kubejs:expert/oritech/crafting/droneport')

  // Oritech Porto de Drones: placas de Allthemodium
  event.remove({ id: 'oritech:crafting/droneportalt' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "allthemodium:allthemodium_plate"}, "c": {"item": "oritech:superconductor"}, "f": {"item": "oritech:advanced_computing_engine"}, "m": {"item": "oritech:motor"}, "s": {"item": "oritech:super_ai_chip"}}, "pattern": ["fsf", "mcm", "bbb"], "result": {"count": 1, "id": "oritech:drone_port_block"}}).id('kubejs:expert/oritech/crafting/droneportalt')

  // Oritech Núcleo de Máquina 6: Allthemodium
  event.remove({ id: 'oritech:crafting/core6' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "oritech:dubios_container"}, "s": {"item": "allthemodium:allthemodium_plate"}}, "pattern": ["sss", "scs", "sss"], "result": {"count": 1, "id": "oritech:machine_core_6"}}).id('kubejs:expert/oritech/crafting/core6')

  // Oritech Núcleo de Máquina 7: Vibranium
  event.remove({ id: 'oritech:crafting/core7' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"c": {"item": "oritech:superconductor"}, "s": {"item": "allthemodium:vibranium_plate"}}, "pattern": ["sss", "scs", "sss"], "result": {"count": 1, "id": "oritech:machine_core_7"}}).id('kubejs:expert/oritech/crafting/core7')

  // Oritech Addon Supremo: Unobtainium
  event.remove({ id: 'oritech:crafting/addon/ultimate' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "allthemodium:unobtainium_plate"}, "c": {"item": "oritech:machine_speed_addon"}, "f": {"item": "oritech:overcharged_crystal"}, "m": {"item": "oritech:heisenberg_compensator"}, "s": {"item": "oritech:machine_efficiency_addon"}}, "pattern": ["fsf", "mcm", "bbb"], "result": {"count": 1, "id": "oritech:machine_ultimate_addon"}}).id('kubejs:expert/oritech/crafting/addon/ultimate')

  // Oritech Encantador: Allthemodium
  event.remove({ id: 'oritech:crafting/enchanter' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "key": {"b": {"item": "allthemodium:allthemodium_ingot"}, "c": {"item": "oritech:enchantment_catalyst_block"}, "f": {"item": "minecraft:book"}, "s": {"item": "oritech:energite_ingot"}}, "pattern": ["fff", "fcf", "sbs"], "result": {"count": 1, "id": "oritech:enchanter_block"}}).id('kubejs:expert/oritech/crafting/enchanter')

  // JDT Varinha do Tempo (acelera tudo): Vibranium + circuito supremo
  event.remove({ id: 'justdirethings:time_wand' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "justdirethings", "key": {"b": {"item": "allthemodium:vibranium_ingot"}, "i": {"item": "mekanism:ultimate_control_circuit"}, "t": {"item": "justdirethings:time_crystal"}}, "pattern": [" bt", " ib", "i  "], "result": {"count": 1, "id": "justdirethings:time_wand"}}).id('kubejs:expert/justdirethings/time_wand')

  // JDT Máquina do Paradoxo: placas de Unobtainium
  event.remove({ id: 'justdirethings:paradoxmachine' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "justdirethings", "key": {"d": {"item": "justdirethings:time_crystal"}, "f": {"item": "allthemodium:unobtainium_plate"}, "o": {"item": "justdirethings:time_crystal_block"}, "r": {"item": "justdirethings:time_fluid_bucket"}}, "pattern": ["fdf", "dod", "frf"], "result": {"count": 1, "id": "justdirethings:paradoxmachine"}}).id('kubejs:expert/justdirethings/paradoxmachine')

  // JDT Transmissor de Energia (sem fio): capacitores Nióticos do Powah
  event.remove({ id: 'justdirethings:energytransmitter' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "justdirethings", "key": {"d": {"item": "justdirethings:celestigem"}, "e": {"item": "minecraft:ender_pearl"}, "f": {"item": "powah:capacitor_niotic"}, "h": {"item": "minecraft:redstone"}}, "pattern": [" d ", "heh", "fff"], "result": {"count": 1, "id": "justdirethings:energytransmitter"}}).id('kubejs:expert/justdirethings/energytransmitter')

  // JDT Arma de Portal v2: placas de Allthemodium
  event.remove({ id: 'justdirethings:portalgun_v2' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "justdirethings", "key": {"b": {"item": "allthemodium:allthemodium_plate"}, "c": {"item": "justdirethings:celestigem"}, "e": {"item": "justdirethings:portal_fluid_catalyst"}, "f": {"item": "justdirethings:fluid_canister"}}, "pattern": [" bc", "beb", "bf "], "result": {"count": 1, "id": "justdirethings:portalgun_v2"}}).id('kubejs:expert/justdirethings/portalgun_v2')

  // JDT Gerador de Fluido: liga reforçada do Mekanism
  event.remove({ id: 'justdirethings:generatorfluidt1' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "justdirethings", "key": {"b": {"item": "minecraft:bucket"}, "f": {"item": "minecraft:blast_furnace"}, "g": {"item": "mekanism:alloy_reinforced"}, "r": {"item": "minecraft:redstone"}}, "pattern": ["grg", "bfb", "grg"], "result": {"count": 1, "id": "justdirethings:generatorfluidt1"}}).id('kubejs:expert/justdirethings/generatorfluidt1')

  // Just Dyna Things Gosma Criativa: Núcleo Criativo no lugar da Estrela do Nether (e sai 1, não 2)
  event.remove({ id: 'justdynathings:creative_goo' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "creative_goo", "key": {"A": {"item": "justdirethings:time_crystal"}, "B": {"item": "justdirethings:eclipsealloy_ingot"}, "C": {"item": "mascaras:nucleo_criativo"}}, "pattern": ["ABA", "BCB", "ABA"], "result": {"count": 1, "id": "justdynathings:creative_goo"}}).id('kubejs:expert/justdynathings/creative_goo')

  // Flux Core: liga reforçada + Núcleo de Teletransporte (Mekanism)
  event.remove({ id: 'fluxnetworks:flux_core' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "fluxnetworks", "pattern": ["fof", "oeo", "fof"], "key": {"o": {"item": "mekanism:alloy_reinforced"}, "f": {"item": "fluxnetworks:flux_dust"}, "e": {"item": "mekanism:teleportation_core"}}, "result": {"id": "fluxnetworks:flux_core", "count": 4}}).id('kubejs:expert/fluxnetworks/flux_core')

  // Controlador Flux: circuitos de elite
  event.remove({ id: 'fluxnetworks:flux_controller' })
  event.custom({"type": "minecraft:crafting_shaped", "category": "misc", "group": "fluxnetworks", "pattern": ["bcb", "f f", "bbb"], "key": {"c": {"item": "fluxnetworks:flux_core"}, "b": {"item": "fluxnetworks:flux_block"}, "f": {"item": "mekanism:elite_control_circuit"}}, "result": {"id": "fluxnetworks:flux_controller", "count": 1}}).id('kubejs:expert/fluxnetworks/flux_controller')

  // Armazenamento Flux Hercúleo: Allthemodium
  event.remove({ id: 'fluxnetworks:herculean_flux_storage' })
  event.custom({"type": "fluxnetworks:flux_storage_recipe", "category": "misc", "group": "fluxnetworks", "pattern": ["bbb", "g g", "bbb"], "key": {"b": {"item": "fluxnetworks:basic_flux_storage"}, "g": {"item": "allthemodium:allthemodium_plate"}}, "result": {"id": "fluxnetworks:herculean_flux_storage", "count": 1}}).id('kubejs:expert/fluxnetworks/herculean_flux_storage')

  // Armazenamento Flux Gargantuesco: Unobtainium
  event.remove({ id: 'fluxnetworks:gargantuan_flux_storage' })
  event.custom({"type": "fluxnetworks:flux_storage_recipe", "category": "misc", "group": "fluxnetworks", "pattern": ["bbb", "g g", "bbb"], "key": {"b": {"item": "fluxnetworks:herculean_flux_storage"}, "g": {"item": "allthemodium:unobtainium_plate"}}, "result": {"id": "fluxnetworks:gargantuan_flux_storage", "count": 1}}).id('kubejs:expert/fluxnetworks/gargantuan_flux_storage')

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

  // Cca: receitas de itens criativos saem; Corruptium e Glitch and Steel ficam
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

  // Bloco de Comando de Repetição (usado no Fragmento do Cca): agora com Corruptium
  event.custom({"type":"create:mechanical_crafting","accept_mirrored":false,"category":"misc","show_notification":true,
    "pattern":["EPBPE","NSOSN","BOCOB","NSOSN","EPBPE"],
    "key":{"S":{"item":"minecraft:nether_star"},"P":{"item":"allthemodium:unobtainium_plate"},"E":{"item":"minecraft:echo_shard"},
      "N":{"item":"create_creative_assembly:corruptiumingot"},"B":{"item":"minecraft:breeze_rod"},"O":{"item":"minecraft:observer"},
      "C":{"item":"minecraft:conduit"}},
    "result":{"id":"minecraft:repeating_command_block","count":1}}).id('kubejs:expert/repeating_command_block')
})
