@echo off
setlocal EnableExtensions
title CONGUITOS SMP - instalador

echo.
echo    C O N G U I T O S   S M P
echo    instalador automatico
echo.


set "RAIZ=%LOCALAPPDATA%\CONGUITOS-SMP"
set "PRISM=%RAIZ%\Prism"
set "INST=%PRISM%\instances\CONGUITOS-SMP"
set "TMPD=%TEMP%\conguitos-instalador"
set "SERV=kayn.lura.host:42044"
set "PRISMURL=https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-Windows-MSVC-Portable-9.4.zip"
set "INSTURL=https://raw.githubusercontent.com/Blackzin6228/Conguitos-smp/main/launcher/CONGUITOS-SMP.zip"
set "PACK=https://raw.githubusercontent.com/Blackzin6228/Conguitos-smp/main/pack.toml"

where curl >nul 2>&1 || goto sem_ferramentas
where tar >nul 2>&1 || goto sem_ferramentas

if exist "%TMPD%" rmdir /s /q "%TMPD%"
mkdir "%TMPD%" || goto erro
if not exist "%PRISM%" mkdir "%PRISM%" || goto erro

rem ------------------------------------------------------------ 1. Prism Launcher (portatil)
if exist "%PRISM%\prismlauncher.exe" goto prism_ok
echo [1/4] Baixando o Prism Launcher...
curl -L --fail --progress-bar -o "%TMPD%\prism.zip" "%PRISMURL%" || goto erro
echo       Instalando...
tar -xf "%TMPD%\prism.zip" -C "%PRISM%" || goto erro
if not exist "%PRISM%\prismlauncher.exe" goto erro
goto prism_cfg
:prism_ok
echo [1/4] Prism Launcher ja instalado.

:prism_cfg
if not exist "%PRISM%\portable.txt" type nul > "%PRISM%\portable.txt"
if exist "%PRISM%\prismlauncher.cfg" goto instancia
> "%PRISM%\prismlauncher.cfg" (
  echo Language=pt_BR
  echo ApplicationTheme=dark
  echo IconTheme=pe_colored
  echo BackgroundCat=kitteh
  echo AutomaticJavaDownload=true
  echo AutomaticJavaSwitch=true
  echo IgnoreJavaWizard=true
  echo UserAskedAboutAutomaticJavaDownload=true
  echo ShowConsoleOnError=true
)

rem ------------------------------------------------------------ 2. Instancia do servidor
:instancia
echo [2/4] Baixando a instancia do CONGUITOS SMP...
curl -L --fail --silent --show-error -o "%TMPD%\inst.zip" "%INSTURL%" || goto erro
mkdir "%TMPD%\inst"
tar -xf "%TMPD%\inst.zip" -C "%TMPD%\inst" || goto erro
set "NOVA=0"
if not exist "%INST%" set "NOVA=1"
if not exist "%INST%\.minecraft" mkdir "%INST%\.minecraft" || goto erro
copy /y "%TMPD%\inst\mmc-pack.json" "%INST%\" >nul || goto erro
copy /y "%TMPD%\inst\.minecraft\packwiz-installer-bootstrap.jar" "%INST%\.minecraft\" >nul || goto erro
copy /y "%TMPD%\inst\.minecraft\packwiz-installer.jar" "%INST%\.minecraft\" >nul || goto erro
if not exist "%INST%\.minecraft\servers.dat" copy /y "%TMPD%\inst\.minecraft\servers.dat" "%INST%\.minecraft\" >nul

rem ------------------------------------------------------------ 3. Memoria conforme o PC
echo [3/4] Ajustando a memoria ao seu PC...
set "GB="
for /f "tokens=2 delims==" %%m in ('wmic ComputerSystem get TotalPhysicalMemory /value 2^>nul') do for /f %%n in ("%%m") do set "BYTES=%%n"
if defined BYTES set "GB=%BYTES:~0,-9%"
if not defined GB (
  > "%TMPD%\ram.vbs" echo For Each c In GetObject^("winmgmts:"^).ExecQuery^("Select TotalPhysicalMemory From Win32_ComputerSystem"^): WScript.Echo Int^(c.TotalPhysicalMemory / 1000000000^): Next
  for /f %%g in ('cscript //nologo "%TMPD%\ram.vbs" 2^>nul') do set "GB=%%g"
)
if not defined GB set "GB=12"
set "MEM=4096"
if %GB% GEQ 12 set "MEM=6144"
if %GB% GEQ 16 set "MEM=8192"
if %GB% GEQ 24 set "MEM=10240"
echo       RAM do PC: ~%GB% GB, o jogo vai usar %MEM% MB

> "%INST%\instance.cfg" (
  echo [General]
  echo ConfigVersion=1.2
  echo InstanceType=OneSix
  echo name=CONGUITOS SMP
  echo iconKey=default
  echo OverrideCommands=true
  echo PreLaunchCommand="\"$INST_JAVA\" -jar packwiz-installer-bootstrap.jar %PACK%"
  echo OverrideMemory=true
  echo MinMemAlloc=1024
  echo MaxMemAlloc=%MEM%
  echo OverrideJavaArgs=true
  echo JvmArgs=-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:InitiatingHeapOccupancyPercent=15
  echo ManagedPack=false
)

rem ------------------------------------------------------------ 4. Atalho na Area de Trabalho
echo [4/4] Criando o atalho na Area de Trabalho...
> "%TMPD%\atalho.vbs" (
  echo Set ws = CreateObject^("WScript.Shell"^)
  echo For Each pasta In Array^(ws.SpecialFolders^("Desktop"^), ws.SpecialFolders^("Programs"^)^)
  echo   Set s = ws.CreateShortcut^(pasta ^& "\CONGUITOS SMP.lnk"^)
  echo   s.TargetPath = "%PRISM%\prismlauncher.exe"
  echo   s.Arguments = "--launch CONGUITOS-SMP --server %SERV%"
  echo   s.WorkingDirectory = "%PRISM%"
  echo   s.IconLocation = "%PRISM%\prismlauncher.exe,0"
  echo   s.Description = "Abre o CONGUITOS SMP e entra no servidor"
  echo   s.Save
  echo Next
)
cscript //nologo "%TMPD%\atalho.vbs" >nul 2>&1
if errorlevel 1 (
  > "%USERPROFILE%\Desktop\CONGUITOS SMP.bat" (
    echo @start "" "%PRISM%\prismlauncher.exe" --launch CONGUITOS-SMP --server %SERV%
  )
)

rmdir /s /q "%TMPD%" >nul 2>&1
echo.
echo Pronto!
if "%NOVA%"=="1" (
  echo.
  echo Agora o Prism vai abrir. Na primeira vez:
  echo   1. Ele pede para ENTRAR COM A CONTA MICROSOFT do Minecraft. Entre.
  echo   2. Depois baixa o pack inteiro, uns 1,3 GB, e o Java. Pode demorar.
  echo   3. O jogo abre e entra direto no servidor.
)
echo.
echo Das proximas vezes e so abrir o atalho "CONGUITOS SMP" na Area de Trabalho.
start "" "%PRISM%\prismlauncher.exe" --launch CONGUITOS-SMP --server %SERV%
echo.
pause
exit /b 0

:sem_ferramentas
echo ERRO: este Windows nao tem curl/tar. Precisa do Windows 10 atualizado ou do Windows 11.
goto fim

:erro
echo.
echo ERRO durante a instalacao. Tira um print desta janela e manda pro Nikolas.

:fim
echo.
pause
exit /b 1
