// Máscaras Relíquia — o JEI não mostra NENHUMA receita do mod (nem os ritos, nem os trajes, nem os acessórios).
// Quem quiser saber como se faz, descobre pelo Dossiê, pelas Páginas Soltas e pela Escrita nas paredes.
// (Os itens continuam visíveis na lista; só o "como fazer" some.)
// As receitas de itens de OUTROS mods que ficaram mais difíceis continuam aparecendo, para o jogador saber o que juntar.
//
// KubeJS 7 (Minecraft 1.21+): o evento antigo JEIEvents não existe mais; agora é RecipeViewerEvents,
// que vale para JEI, EMI e REI. O "typeof" impede o erro se o pack estiver sem visualizador de receitas.
if (typeof RecipeViewerEvents !== 'undefined') {
  RecipeViewerEvents.removeRecipes(event => {
    const ids = [
      'mascaras:arco/olho_de_vidro',
      'mascaras:arco/lanterna_do_limiar',
      'mascaras:arco/bateria_de_alma',
      'mascaras:arco/ampulheta_garantia',
      'mascaras:arco/sino_rachado',
      'mascaras:arco/frasco_estatica',
      'mascaras:mekanism/sangue_destilado',
      'mascaras:mekanism/vela_sebo',
      'mascaras:mekanism/condensador_do_avesso',
      'mascaras:ritual/sangue',
      'mascaras:ritual/conhecimento',
      'mascaras:ritual/morte',
      'mascaras:ritual/energia',
      'mascaras:ritual/sangue_avancado',
      'mascaras:ritual/conhecimento_avancado',
      'mascaras:ritual/morte_avancado',
      'mascaras:ritual/energia_avancado',
      'mascaras:ritual/passagem',
      'mascaras:ritual/chamado',
      'kubejs:mascaras/anel_do_pacto',
      'kubejs:mascaras/colar_da_chave',
      'kubejs:mascaras/rosario_do_ocaso',
      'kubejs:mascaras/cinto_da_orbita',
      'kubejs:mascaras/capuz_agente',
      'kubejs:mascaras/jaqueta_agente',
      'kubejs:mascaras/calca_agente',
      'kubejs:mascaras/botas_agente',
      'kubejs:mascaras/capuz_arquivista',
      'kubejs:mascaras/jaqueta_arquivista',
      'kubejs:mascaras/calca_arquivista',
      'kubejs:mascaras/botas_arquivista',
      'kubejs:mascaras/capuz_carmim',
      'kubejs:mascaras/jaqueta_carmim',
      'kubejs:mascaras/calca_carmim',
      'kubejs:mascaras/botas_carmim',
      'kubejs:mascaras/capuz_estatico',
      'kubejs:mascaras/jaqueta_estatico',
      'kubejs:mascaras/calca_estatico',
      'kubejs:mascaras/botas_estatico',
      'kubejs:mascaras/capuz_luto',
      'kubejs:mascaras/jaqueta_luto',
      'kubejs:mascaras/calca_luto',
      'kubejs:mascaras/botas_luto',
      'kubejs:mascaras/capuz_remendado',
      'kubejs:mascaras/jaqueta_remendado',
      'kubejs:mascaras/calca_remendado',
      'kubejs:mascaras/botas_remendado',
      'mascaras:dossie',
      'mascaras:giz_ritual',
      'mascaras:marco_do_limiar'
    ]
    ids.forEach(id => {
      try {
        event.remove(id)
      } catch (e) {
        // receita que não existe nesta versão do pack: ignora
      }
    })
  })
}
