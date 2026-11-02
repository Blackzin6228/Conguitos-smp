# CONGUITOS SMP - instalador automatico (Windows)
# Baixa o Prism Launcher (versao portatil), cria a instancia do servidor, ajusta a memoria
# conforme o PC e coloca um atalho na Area de Trabalho que abre o jogo ja entrando no servidor.
# Pode rodar de novo quando quiser: ele so atualiza o que precisa e nao apaga mundo nem config.

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$Raiz      = Join-Path $env:LOCALAPPDATA 'CONGUITOS-SMP'
$PastaPrism = Join-Path $Raiz 'Prism'
$IdInst    = 'CONGUITOS-SMP'
$ZipInst   = 'https://raw.githubusercontent.com/Blackzin6228/Conguitos-smp/main/launcher/CONGUITOS-SMP.zip'
$Servidor  = 'kayn.lura.host:42044'
$PrismReserva = 'https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-Windows-MSVC-Portable-9.4.zip'

function Passo($t) { Write-Host ''; Write-Host "==> $t" -ForegroundColor Magenta }

Write-Host ''
Write-Host '   C O N G U I T O S   S M P' -ForegroundColor Red
Write-Host '   instalador automatico' -ForegroundColor DarkGray

New-Item -ItemType Directory -Force -Path $Raiz | Out-Null
$tmp = Join-Path $env:TEMP ('conguitos-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

# ------------------------------------------------------------------ 1. Prism Launcher
$exe = Get-ChildItem -Path $PastaPrism -Filter 'prismlauncher.exe' -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $exe) {
    Passo 'Baixando o Prism Launcher...'
    $url = $null
    try {
        $rel = Invoke-RestMethod -UseBasicParsing -Uri 'https://api.github.com/repos/PrismLauncher/PrismLauncher/releases/latest' -Headers @{ 'User-Agent' = 'conguitos-instalador' }
        $asset = $rel.assets | Where-Object { $_.name -match '^PrismLauncher-Windows-MSVC-Portable-.*\.zip$' } | Select-Object -First 1
        if ($asset) { $url = $asset.browser_download_url }
    } catch { }
    if (-not $url) { $url = $PrismReserva }
    $zipPrism = Join-Path $tmp 'prism.zip'
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $zipPrism
    Passo 'Instalando o Prism Launcher...'
    New-Item -ItemType Directory -Force -Path $PastaPrism | Out-Null
    Expand-Archive -Path $zipPrism -DestinationPath $PastaPrism -Force
    $exe = Get-ChildItem -Path $PastaPrism -Filter 'prismlauncher.exe' -Recurse | Select-Object -First 1
    if (-not $exe) { throw 'Nao achei o prismlauncher.exe depois de extrair.' }
} else {
    Passo 'Prism Launcher ja instalado.'
}
$dirPrism = $exe.DirectoryName
# modo portatil: tudo (contas, instancias, Java) fica dentro desta pasta
$portable = Join-Path $dirPrism 'portable.txt'
if (-not (Test-Path $portable)) { Set-Content -Path $portable -Value '' }

# ------------------------------------------------------------------ 2. Configuracao do Prism (pula o assistente)
$cfg = Join-Path $dirPrism 'prismlauncher.cfg'
$padrao = [ordered]@{
    'Language'              = 'pt_BR'
    'ApplicationTheme'      = 'dark'
    'IconTheme'             = 'pe_colored'
    'BackgroundCat'         = 'kitteh'
    'AutomaticJavaDownload' = 'true'
    'AutomaticJavaSwitch'   = 'true'
    'IgnoreJavaWizard'      = 'true'
    'UserAskedAboutAutomaticJavaDownload' = 'true'
    'ShowConsoleOnError'    = 'true'
    'CloseAfterLaunch'      = 'false'
}
$linhas = @()
if (Test-Path $cfg) { $linhas = @(Get-Content -Path $cfg) }
foreach ($k in $padrao.Keys) {
    if (-not ($linhas | Where-Object { $_ -match ('^' + [regex]::Escape($k) + '=') })) {
        $linhas += "$k=$($padrao[$k])"
    }
}
Set-Content -Path $cfg -Value $linhas -Encoding UTF8

# ------------------------------------------------------------------ 3. Instancia do servidor
Passo 'Baixando a instancia do CONGUITOS SMP...'
$zipI = Join-Path $tmp 'instancia.zip'
Invoke-WebRequest -UseBasicParsing -Uri $ZipInst -OutFile $zipI
$extraI = Join-Path $tmp 'instancia'
Expand-Archive -Path $zipI -DestinationPath $extraI -Force

$pastaInst = Join-Path (Join-Path $dirPrism 'instances') $IdInst
$nova = -not (Test-Path $pastaInst)
New-Item -ItemType Directory -Force -Path (Join-Path $pastaInst '.minecraft') | Out-Null
# sempre atualiza o que e do pack (config da instancia e atualizador); nunca mexe em mundo, prints ou opcoes
Copy-Item -Force (Join-Path $extraI 'instance.cfg')   $pastaInst
Copy-Item -Force (Join-Path $extraI 'mmc-pack.json')  $pastaInst
Copy-Item -Force (Join-Path $extraI '.minecraft\packwiz-installer-bootstrap.jar') (Join-Path $pastaInst '.minecraft')
Copy-Item -Force (Join-Path $extraI '.minecraft\packwiz-installer.jar')           (Join-Path $pastaInst '.minecraft')
$servers = Join-Path $pastaInst '.minecraft\servers.dat'
if (-not (Test-Path $servers)) { Copy-Item (Join-Path $extraI '.minecraft\servers.dat') $servers }

# memoria conforme o PC (deixa sobra para o Windows e o Discord)
$gb = [math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB)
if     ($gb -ge 24) { $mem = 10240 }
elseif ($gb -ge 16) { $mem = 8192 }
elseif ($gb -ge 12) { $mem = 6144 }
else                { $mem = 4096 }
$ic = Join-Path $pastaInst 'instance.cfg'
(Get-Content $ic) -replace '^MaxMemAlloc=.*', "MaxMemAlloc=$mem" | Set-Content -Path $ic -Encoding UTF8
Write-Host "    RAM do PC: $gb GB -> o jogo vai usar $([math]::Round($mem/1024)) GB" -ForegroundColor DarkGray

# ------------------------------------------------------------------ 4. Atalhos
Passo 'Criando os atalhos...'
$ws = New-Object -ComObject WScript.Shell
$desk = [Environment]::GetFolderPath('Desktop')
$menu = Join-Path ([Environment]::GetFolderPath('Programs')) 'CONGUITOS SMP'
New-Item -ItemType Directory -Force -Path $menu | Out-Null
foreach ($onde in @($desk, $menu)) {
    $a = $ws.CreateShortcut((Join-Path $onde 'CONGUITOS SMP.lnk'))
    $a.TargetPath = $exe.FullName
    $a.Arguments = "--launch $IdInst --server $Servidor"
    $a.WorkingDirectory = $dirPrism
    $a.IconLocation = "$($exe.FullName),0"
    $a.Description = 'Abre o CONGUITOS SMP (atualiza o pack sozinho e entra no servidor)'
    $a.Save()
}
$b = $ws.CreateShortcut((Join-Path $menu 'Prism Launcher.lnk'))
$b.TargetPath = $exe.FullName
$b.WorkingDirectory = $dirPrism
$b.Save()

Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

# ------------------------------------------------------------------ 5. Primeira abertura
Write-Host ''
Write-Host 'Pronto!' -ForegroundColor Green
if ($nova) {
    Write-Host ''
    Write-Host 'Agora o Prism vai abrir. Na primeira vez:' -ForegroundColor Yellow
    Write-Host '  1. Ele pede para ENTRAR COM A CONTA MICROSOFT do Minecraft. Entre.' -ForegroundColor Yellow
    Write-Host '  2. Depois ele baixa o pack inteiro (uns 1,3 GB) e o Java. Pode demorar, e normal.' -ForegroundColor Yellow
    Write-Host '  3. O jogo abre e entra direto no servidor.' -ForegroundColor Yellow
}
Write-Host ''
Write-Host 'Das proximas vezes e so abrir o atalho "CONGUITOS SMP" na Area de Trabalho.' -ForegroundColor Cyan
Start-Sleep -Seconds 3
Start-Process -FilePath $exe.FullName -ArgumentList "--launch $IdInst --server $Servidor" -WorkingDirectory $dirPrism
