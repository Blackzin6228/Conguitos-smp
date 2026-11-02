// Máscaras Relíquia — mods de tecnologia adicionados em 31/10/2026 no estilo ATM.
// Gerado por tools/gerar_tech_nova.py a partir das receitas reais dos jars.
// Coloque em kubejs/server_scripts/ (PC e servidor). Para aplicar sem reiniciar: /reload

ServerEvents.recipes(event => {
  // ================= DRACONIC EVOLUTION =================
  // Todos os itens do Draconic passam pelos núcleos; endurecendo os núcleos, o mod inteiro segue a progressão do Allthemodium.
  // Núcleo Wyvern: + placas de Allthemodium
  event.remove({ id: 'draconicevolution:components/wyvern_core' })
  event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"A":{"tag":"c:ingots/draconium"},"B":{"item":"draconicevolution:draconium_core"},"C":{"tag":"c:nether_stars"},"P":{"item":"allthemodium:allthemodium_plate"}},"pattern":["APA","BCB","APA"],"result":{"count":1,"id":"draconicevolution:wyvern_core"}}).id('kubejs:mascaras/tech/wyvern_core')

  // Núcleo Desperto: + 2 lingotes de Vibranium
  event.remove({ id: 'draconicevolution:components/awakened_core' })
  event.custom({"type":"draconicevolution:fusion_crafting","catalyst":{"tag":"c:nether_stars"},"ingredients":[{"consume":true,"ingredient":{"item":"draconicevolution:wyvern_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:wyvern_core"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"item":"draconicevolution:wyvern_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:wyvern_core"}},{"consume":true,"ingredient":{"item":"allthemodium:vibranium_ingot"}},{"consume":true,"ingredient":{"item":"allthemodium:vibranium_ingot"}}],"result":{"count":1,"id":"draconicevolution:awakened_core"},"techLevel":"wyvern","totalEnergy":1000000}).id('kubejs:mascaras/tech/awakened_core')

  // Núcleo Caótico: + 2 Unobtainium + Liga Paranormal
  event.remove({ id: 'draconicevolution:components/chaotic_core' })
  event.custom({"type":"draconicevolution:fusion_crafting","catalyst":{"item":"draconicevolution:large_chaos_frag"},"ingredients":[{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"item":"draconicevolution:awakened_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:awakened_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"item":"draconicevolution:awakened_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:awakened_core"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"item":"allthemodium:unobtainium_ingot"}},{"consume":true,"ingredient":{"item":"allthemodium:unobtainium_ingot"}},{"consume":true,"ingredient":{"item":"mascaras:liga_paranormal"}}],"result":{"count":1,"id":"draconicevolution:chaotic_core"},"techLevel":"draconic","totalEnergy":100000000}).id('kubejs:mascaras/tech/chaotic_core')

  // Núcleo do Reator Dracônico: + 2 pelotas de antimatéria
  event.remove({ id: 'draconicevolution:machines/reactor_core' })
  event.custom({"type":"draconicevolution:fusion_crafting","catalyst":{"item":"draconicevolution:chaos_shard"},"ingredients":[{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium"}},{"consume":true,"ingredient":{"tag":"c:ingots/draconium_awakened"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"item":"draconicevolution:large_chaos_frag"}},{"consume":true,"ingredient":{"tag":"c:pellets/antimatter"}},{"consume":true,"ingredient":{"tag":"c:pellets/antimatter"}}],"result":{"count":1,"id":"draconicevolution:reactor_core"},"techLevel":"chaotic","totalEnergy":64000000}).id('kubejs:mascaras/tech/reactor_core')

  // ================= INDUSTRIAL FOREGOING =================
  // infinity_drill: blocos de diamante viram blocos de Allthemodium
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_drill' })
  event.custom({"type":"industrialforegoing:dissolution_chamber","input":[{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:diamond_shovel"},{"item":"allthemodium:allthemodium_block"},{"item":"allthemodium:allthemodium_block"},{"item":"industrialforegoing:range_addon_tier_11"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"}],"inputFluid":{"amount":2000,"fluid":"industrialforegoing:pink_slime"},"output":{"components":{"industrialforegoing:infinity_can_charge":true,"industrialforegoing:infinity_item_power":0,"industrialforegoing:infinity_item_selected_tier":"poor","industrialforegoing:infinity_item_special":false},"count":1,"id":"industrialforegoing:infinity_drill"},"processingTime":400}).id('kubejs:mascaras/tech/infinity_drill')

  // infinity_saw: blocos de diamante viram blocos de Allthemodium
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_saw' })
  event.custom({"type":"industrialforegoing:dissolution_chamber","input":[{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:diamond_pickaxe"},{"item":"minecraft:diamond_axe"},{"item":"minecraft:diamond_axe"},{"item":"industrialforegoing:range_addon_tier_11"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"}],"inputFluid":{"amount":2000,"fluid":"industrialforegoing:pink_slime"},"output":{"components":{"industrialforegoing:infinity_can_charge":true,"industrialforegoing:infinity_item_power":0,"industrialforegoing:infinity_item_selected_tier":"poor","industrialforegoing:infinity_item_special":false},"count":1,"id":"industrialforegoing:infinity_saw"},"processingTime":400}).id('kubejs:mascaras/tech/infinity_saw')

  // infinity_hammer: blocos de diamante viram blocos de Allthemodium
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_hammer' })
  event.custom({"type":"industrialforegoing:dissolution_chamber","input":[{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:diamond_sword"},{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:diamond_axe"},{"item":"industrialforegoing:range_addon_tier_11"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"}],"inputFluid":{"amount":2000,"fluid":"industrialforegoing:pink_slime"},"output":{"components":{"industrialforegoing:infinity_can_charge":true,"industrialforegoing:infinity_hammer_beheading":0,"industrialforegoing:infinity_item_power":0,"industrialforegoing:infinity_item_selected_tier":"poor","industrialforegoing:infinity_item_special":false},"count":1,"id":"industrialforegoing:infinity_hammer"},"processingTime":400}).id('kubejs:mascaras/tech/infinity_hammer')

  // infinity_trident: blocos de diamante viram blocos de Allthemodium
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_trident' })
  event.custom({"type":"industrialforegoing:dissolution_chamber","input":[{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:trident"},{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:diamond_hoe"},{"item":"industrialforegoing:range_addon_tier_11"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"}],"inputFluid":{"amount":2000,"fluid":"industrialforegoing:pink_slime"},"output":{"components":{"industrialforegoing:infinity_can_charge":true,"industrialforegoing:infinity_item_power":0,"industrialforegoing:infinity_item_selected_tier":"poor","industrialforegoing:infinity_item_special":false,"industrialforegoing:infinity_trident_channeling":false,"industrialforegoing:infinity_trident_loyalty":0,"industrialforegoing:infinity_trident_riptide":0},"count":1,"id":"industrialforegoing:infinity_trident"},"processingTime":400}).id('kubejs:mascaras/tech/infinity_trident')

  // infinity_launcher: blocos de diamante viram blocos de Allthemodium
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_launcher' })
  event.custom({"type":"industrialforegoing:dissolution_chamber","input":[{"item":"allthemodium:allthemodium_block"},{"item":"minecraft:bow"},{"item":"allthemodium:allthemodium_block"},{"item":"industrialforegoing:mob_imprisonment_tool"},{"item":"industrialforegoing:range_addon_tier_11"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"},{"tag":"c:gears/gold"}],"inputFluid":{"amount":2000,"fluid":"industrialforegoing:pink_slime"},"output":{"components":{"industrialforegoing:configuration_action":"RELEASE","industrialforegoing:infinity_can_charge":true,"industrialforegoing:infinity_item_power":0,"industrialforegoing:infinity_item_selected_tier":"poor","industrialforegoing:infinity_item_special":false},"count":1,"id":"industrialforegoing:infinity_launcher"},"processingTime":400}).id('kubejs:mascaras/tech/infinity_launcher')

  // Bomba Infinita: destrói uma área gigante — fora do servidor (grief)
  event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_nuke' })

  // Base do Laser de Minério (minério infinito): picareta de Allthemodium + placas de Vibranium
  event.remove({ id: 'industrialforegoing:ore_laser_base' })
  event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"b":{"item":"allthemodium:vibranium_plate"},"f":{"item":"allthemodium:allthemodium_pickaxe"},"g":{"tag":"c:gears/diamond"},"m":{"tag":"industrialforegoing:machine_frame/advanced"},"p":{"tag":"c:plastics"},"r":{"tag":"c:dusts/redstone"}},"pattern":["pfp","bmb","grg"],"result":{"count":1,"id":"industrialforegoing:ore_laser_base"}}).id('kubejs:mascaras/tech/ore_laser_base')

  // Base do Laser de Fluido: picareta de Allthemodium
  event.remove({ id: 'industrialforegoing:fluid_laser_base' })
  event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"b":{"item":"minecraft:bucket"},"f":{"item":"allthemodium:allthemodium_pickaxe"},"g":{"tag":"c:gears/diamond"},"m":{"tag":"industrialforegoing:machine_frame/advanced"},"p":{"tag":"c:plastics"},"r":{"item":"minecraft:redstone"}},"pattern":["pfp","bmb","grg"],"result":{"count":1,"id":"industrialforegoing:fluid_laser_base"}}).id('kubejs:mascaras/tech/fluid_laser_base')

  // Duplicador de Mobs: esmeraldas viram Unobtainium
  event.remove({ id: 'industrialforegoing:mob_duplicator' })
  event.custom({"type":"minecraft:crafting_shaped","category":"misc","key":{"C":{"item":"minecraft:magma_cream"},"E":{"item":"allthemodium:unobtainium_ingot"},"M":{"tag":"industrialforegoing:machine_frame/advanced"},"P":{"tag":"c:plastics"},"R":{"item":"minecraft:redstone"},"W":{"item":"minecraft:nether_wart"}},"pattern":["PWP","CMC","ERE"],"result":{"count":1,"id":"industrialforegoing:mob_duplicator"}}).id('kubejs:mascaras/tech/mob_duplicator')
})
