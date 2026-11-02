#!/usr/bin/env python3
"""Gera o pack no formato packwiz a partir do que está no repositório.

  python3 tools/gerar_pack.py                 -> reescreve index.toml e pack.toml (hashes)
  python3 tools/gerar_pack.py --jars          -> além disso, cria mods/*.pw.toml para cada jar em jars/,
                                                 apontando para o raw.githubusercontent deste repositório

Não depende do binário do packwiz: o formato é só TOML + sha256.
"""
import hashlib
import json
import os
import re
import sys
from urllib.parse import quote
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DONO, REPO = "Blackzin6228", "Conguitos-smp"
PASTA_JARS = "jars"      # pasta do repositório onde ficam os jars dos mods (servidos pelo raw.githubusercontent)
MC, NEOFORGE = "1.21.1", "21.1.262"
NOME, AUTOR = "CONGUITOS SMP", "Nikolas"

# pastas do repositório que entram no pack (tudo dentro delas)
PASTAS = ["config", "kubejs", "shaderpacks", "mods"]
IGNORAR = {".DS_Store", "Thumbs.db"}

# ------------------------------------------------------------------ lado de cada mod (só quando é claramente cliente)
# Tudo que não estiver aqui vai como "both" (vale para o servidor também). Nome = começo do arquivo, minúsculo.
CLIENTE = [
    "sodium", "sodiumsable", "iris", "embeddium", "entityculling", "dynamic-fps", "immediatelyfast", "badoptimizations",
    "moreculling", "skinlayers3d", "chat_heads", "chatanimation", "justzoom", "controlling", "searchables", "mousetweaks",
    "emi-", "jei-", "jadeaddons", "watermedia", "watervision", "euphoriapatcher", "crashassistant", "colorwheel",
    "particlerain", "particular", "asyncparticles", "overflowingbars", "better-advanced-tooltips", "obscure_tooltips",
    "apothic_tooltip_cleanup", "cinematiccataclysm", "smoothchunk", "redirected", "flerovium", "ksyxis",
    "justenoughresources", "justenoughprofessions", "justenoughmekanismmultiblocks", "mekagenjei", "xaerominimap",
    "xaeroworldmap", "xaeroplus", "xaeros_waystones", "appleskin", "fastpaintings", "legendarytooltips", "aaa_particles",
]
# mods que só fazem sentido no servidor (o cliente não precisa, mas também não atrapalha)
SERVIDOR = ["servercore", "letmedespawn", "immersive_optimization", "crashutilities", "vcadmin"]


def sha256(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def lado(nome_jar: str) -> str:
    n = nome_jar.lower()
    if any(n.startswith(c) for c in CLIENTE):
        return "client"
    if any(n.startswith(s) for s in SERVIDOR):
        return "server"
    return "both"


def toml_str(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def nomes_curseforge():
    """projectID -> (nome bonito, url) a partir do export do CurseForge."""
    out = {}
    man = json.load(open(RAIZ / "tools/manifest.json"))
    html = open(RAIZ / "tools/modlist.html", encoding="utf-8").read()
    links = re.findall(r'<a href="(https://www.curseforge.com/minecraft/mc-mods/[^"]+)">([^<]+)</a>', html)
    # o modlist está na mesma ordem do manifest
    for f, (url, nome) in zip(man["files"], links):
        out[f["projectID"]] = (nome.split(" (by ")[0], url, f["fileID"], f.get("required", True))
    return out


def gerar_metafiles(pasta_jars: Path):
    """Um mods/<nome>.pw.toml por jar de jars/, apontando para o raw deste repositório."""
    for velho in (RAIZ / "mods").glob("*.pw.toml"):
        velho.unlink()
    base = f"https://raw.githubusercontent.com/{DONO}/{REPO}/main/{PASTA_JARS}/"
    feitos = 0
    for jar in sorted(pasta_jars.glob("*.jar")):
        slug = re.sub(r"[^a-z0-9._-]+", "-", jar.name[:-4].lower()).strip("-")
        meta = RAIZ / "mods" / f"{slug}.pw.toml"
        texto = "\n".join([
            f"name = {toml_str(jar.name[:-4])}",
            f"filename = {toml_str(jar.name)}",
            f"side = {toml_str(lado(jar.name))}",
            "",
            "[download]",
            f"url = {toml_str(base + quote(jar.name))}",
            'hash-format = "sha256"',
            f"hash = {toml_str(sha256(jar))}",
            "",
        ])
        meta.write_text(texto, encoding="utf-8")
        feitos += 1
    print(f"{feitos} metafiles em mods/")


def gerar_index():
    linhas = ['hash-format = "sha256"', ""]
    arquivos = []
    for pasta in PASTAS:
        d = RAIZ / pasta
        if not d.exists():
            continue
        for p in sorted(d.rglob("*")):
            if p.is_file() and p.name not in IGNORAR:
                arquivos.append(p)
    for p in arquivos:
        rel = p.relative_to(RAIZ).as_posix()
        linhas.append("[[files]]")
        linhas.append(f"file = {toml_str(rel)}")
        linhas.append(f"hash = {toml_str(sha256(p))}")
        if rel.endswith(".pw.toml"):
            linhas.append("metafile = true")
        linhas.append("")
    (RAIZ / "index.toml").write_text("\n".join(linhas), encoding="utf-8")
    print(f"index.toml: {len(arquivos)} arquivos")


def gerar_pack():
    versao = (RAIZ / "VERSAO").read_text().strip() if (RAIZ / "VERSAO").exists() else "8.0"
    texto = "\n".join([
        f"name = {toml_str(NOME)}",
        f"author = {toml_str(AUTOR)}",
        f"version = {toml_str(versao)}",
        'pack-format = "packwiz:1.1.0"',
        "",
        "[index]",
        'file = "index.toml"',
        'hash-format = "sha256"',
        f"hash = {toml_str(sha256(RAIZ / 'index.toml'))}",
        "",
        "[versions]",
        f"minecraft = {toml_str(MC)}",
        f"neoforge = {toml_str(NEOFORGE)}",
        "",
    ])
    (RAIZ / "pack.toml").write_text(texto, encoding="utf-8")
    print(f"pack.toml: versão {versao}")


if __name__ == "__main__":
    if "--jars" in sys.argv:
        gerar_metafiles(RAIZ / PASTA_JARS)
    gerar_index()
    gerar_pack()
