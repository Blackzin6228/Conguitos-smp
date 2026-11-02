#!/usr/bin/env bash
# Gera o zip de instância do Prism Launcher (o que o jogador importa) em launcher/CONGUITOS-SMP.zip
set -e
cd "$(dirname "$0")"
rm -f CONGUITOS-SMP.zip
( cd instancia && zip -qr ../CONGUITOS-SMP.zip . -x '.DS_Store' )
ls -la CONGUITOS-SMP.zip
