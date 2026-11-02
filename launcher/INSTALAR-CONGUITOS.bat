@echo off
title CONGUITOS SMP - instalador
echo Instalando o CONGUITOS SMP... (nao feche esta janela)
powershell -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; try { iex ((New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/Blackzin6228/Conguitos-smp/main/launcher/instalar.ps1')) } catch { Write-Host ('ERRO: ' + $_) -ForegroundColor Red; Write-Host 'Tira um print desta janela e manda pro Nikolas.' }"
echo.
pause
