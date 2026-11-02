// Falas do Diabo (roleplay) — só OP.
//   /diabo cheiro <jogador>   -> "você tem cheiro de morte"
//   /diabo rejeita <jogador>  -> "você não foi escolhido"
//   /diabo zerar <jogador>    -> Exposição 0, Vínculo desfeito, Véu da região dele em 0
// Coloque em kubejs/server_scripts/ do servidor e rode /reload.

const DIABO_FALAS = {
  cheiro: {
    som: 'minecraft:ambient.cave',
    titulo: 'Que cheiro é esse?',
    sub: 'Alguém chegou antes de mim.',
    linhas: [
      'Espera... chega mais perto.',
      'Você tem cheiro de morte, {nome}. De terra fria. De coisa que já devia ter acabado.',
      'Não é o meu cheiro. Alguém já colocou a mão em você... e não fui eu.',
      'Cuidado com quem você deixa te tocar. Nem tudo que te escolhe quer você vivo.'
    ]
  },
  rejeita: {
    som: 'minecraft:entity.warden.heartbeat',
    titulo: 'Você não foi escolhido.',
    sub: 'O Diabo não aceita qualquer um.',
    linhas: [
      'Eu senti o cheiro da sua ambição de longe, {nome}.',
      'Você bateu na porta errada. Eu escolho os meus... e você não está entre eles.',
      'Tudo o que o Avesso te deu, eu tomo de volta. Volte a ser ninguém.'
    ]
  }
}

function diabo$falar(alvo, fala) {
  const s = alvo.server
  const nome = alvo.username
  s.runCommandSilent(`execute at ${nome} run playsound ${fala.som} master ${nome} ~ ~ ~ 2 0.5`)
  // o subtítulo precisa vir ANTES do título, senão não aparece
  s.runCommandSilent(`title ${nome} subtitle {"text":"${fala.sub}","color":"gray"}`)
  s.runCommandSilent(`title ${nome} title {"text":"${fala.titulo}","color":"dark_red"}`)
  fala.linhas.forEach(l => {
    alvo.tell(Text.darkRed('[Diabo] ').append(Text.white(l.replace('{nome}', nome))))
  })
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  const alvoArg = () => Commands.argument('alvo', Arguments.PLAYER.create(event))
  const fala = id => Commands.literal(id).then(alvoArg().executes(ctx => {
    diabo$falar(Arguments.PLAYER.getResult(ctx, 'alvo'), DIABO_FALAS[id])
    return 1
  }))
  event.register(Commands.literal('diabo')
    .requires(src => src.hasPermission(2))
    .then(fala('cheiro'))
    .then(fala('rejeita'))
    .then(Commands.literal('zerar').then(alvoArg().executes(ctx => {
      const p = Arguments.PLAYER.getResult(ctx, 'alvo')
      const s = p.server
      const n = p.username
      s.runCommandSilent(`exposicao ${n} 0`)
      s.runCommandSilent(`vinculo limpar ${n}`)
      s.runCommandSilent(`execute as ${n} at ${n} run veu definir 0`)
      ctx.source.sendSystemMessage(Text.gray(`${n}: Exposição 0, Vínculo desfeito, Véu da região em 0.`))
      return 1
    }))))
})
