# -*- coding: utf-8 -*-
"""
Gerador de Apresentações Web (Reveal.js) a partir de Roteiros de Aula.

Uso:
    python gerar_html.py --roteiro ROTEIRO --output OUTPUT

Exemplo:
    python gerar_html.py \
        --roteiro docs/curso-sistemas-agenticos/aulas/aula-01/roteiro-aula-01.md \
        --output docs/curso-sistemas-agenticos/aulas/aula-01/slides/aula-01.html
"""

import argparse
import os
import re
import sys
from dataclasses import dataclass, field
from typing import List, Dict, Optional

# Configurar encoding UTF-8 para Windows
if sys.stdout:
    sys.stdout.reconfigure(encoding='utf-8')

try:
    import requests
except ImportError:
    print("Erro: requests não instalado. Execute: pip install requests")
    sys.exit(1)


# =============================================================================
# CONFIGURAÇÃO VISUAL
# =============================================================================

# Paletas de cores do superposts (5 temas)
PALETAS = {
    "super": {
        "nome": "SUPER (Institucional)",
        "primaria": "#194A68",      # Prussian Blue - atmosfera
        "secundaria": "#BE9C6D",    # Antique Gold - acentos
        "fundo": "#3A3A3A",         # Charcoal - fundos
        "accent": "#5287A8",        # Steel Blue - fill light
        "texto": "#FFF4E4",         # Cream - highlights
    },
    "coral": {
        "nome": "CORAL SUNSET (Vibrante)",
        "primaria": "#FF5A54",      # Deep Coral - acentos vibrantes
        "secundaria": "#5EC2B1",    # Teal - contraste
        "fundo": "#103641",         # Deep Sea - profundidade
        "accent": "#FFCDB2",        # Soft Peach - suavidade
        "texto": "#FFF8F0",         # Warm White - highlights
    },
    "tech": {
        "nome": "TECH NOIR (Futurista)",
        "primaria": "#7851F2",      # Electric Violet - acentos tech
        "secundaria": "#00F0FF",    # Neon Cyan - highlights digitais
        "fundo": "#1A1A2E",         # Carbon Black - fundos
        "accent": "#2A0E7A",        # Deep Purple - profundidade
        "texto": "#C0C0C0",         # Silver - reflexos metálicos
    },
    "earth": {
        "nome": "EARTH TONES (Natural)",
        "primaria": "#2D5A3D",      # Forest Green - natureza
        "secundaria": "#C67B5C",    # Terracotta - calor
        "fundo": "#3D2B1F",         # Deep Brown - profundidade
        "accent": "#9CAF88",        # Sage - frescor
        "texto": "#E8DCC4",         # Sand - neutralidade
    },
    "ambar": {
        "nome": "NOIR ÂMBAR (Elegante)",
        "primaria": "#8B4000",      # Deep Amber - atmosfera
        "secundaria": "#EB9605",    # Honey Gold - highlights
        "fundo": "#1A1410",         # Warm Black - sombras
        "accent": "#CD7F32",        # Bronze - acentos metálicos
        "texto": "#F5E6D3",         # Smoke claro - texto
    },
}

# Paleta ativa (padrão: super - institucional)
PALETA_ATIVA = "super"

def get_config(paleta_id: str = None) -> dict:
    """Retorna configuração baseada na paleta selecionada."""
    paleta = PALETAS.get(paleta_id or PALETA_ATIVA, PALETAS["super"])

    return {
        # Cores da paleta
        "cor_primaria": paleta["primaria"],
        "cor_secundaria": paleta["secundaria"],
        "cor_fundo": paleta["fundo"],
        "cor_accent": paleta["accent"],
        "cor_texto": paleta["texto"],

        # Aliases para compatibilidade
        "cor_dourado": paleta["secundaria"],
        "cor_branco": paleta["texto"],
        "cor_preto": paleta["fundo"],

        # Fontes (do superposts - headline + body)
        "fonte_titulo": "'Outfit', 'Montserrat', 'Helvetica Neue', sans-serif",
        "fonte_texto": "'IBM Plex Serif', 'Lora', Georgia, serif",
        "fonte_codigo": "'IBM Plex Mono', 'Consolas', 'Monaco', monospace",

        # Reveal.js
        "transition": "slide",
        "background_transition": "fade",

        # Limites
        "max_slides_por_bloco": 4,
        "max_slides_total": 30,

        # Nome da paleta
        "paleta_nome": paleta["nome"],
    }

CONFIG = get_config()

# =============================================================================
# BANCO DE IMAGENS CURADAS (Unsplash - URLs diretas)
# =============================================================================
# Imagens abstratas e tecnológicas selecionadas manualmente
# Não requer API key - URLs diretas do Unsplash

IMAGENS_CURADAS = {
    # CAPA / SECAO - Abstract dark, technology minimal
    "CAPA": [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",  # Earth from space, technology
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",  # Circuit board macro
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",  # Matrix code green
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",  # Cybersecurity lock
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop",  # AI brain technology
    ],
    "SECAO": [
        "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&h=1080&fit=crop",  # Stars galaxy
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&h=1080&fit=crop",  # Code on screen dark
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop",  # Laptop code
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop",  # Code closeup
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop",  # Programming code
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1920&h=1080&fit=crop",  # Code laptop dark
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",  # Monitor code
    ],
    # CONCEITO - Code, data visualization, diagrams
    "CONCEITO": [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&h=1080&fit=crop",  # Code syntax highlighting
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&h=1080&fit=crop",  # Python code
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1920&h=1080&fit=crop",  # GitHub code
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&h=1080&fit=crop",  # Developer workspace
        "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1920&h=1080&fit=crop",  # Code neon
    ],
    # CITACAO - Light, inspiration, minimal abstract
    "CITACAO": [
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&h=1080&fit=crop",  # Abstract fluid pink
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop",  # Gradient colorful
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&h=1080&fit=crop",  # Abstract marble
        "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1920&h=1080&fit=crop",  # Abstract paint blue
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",  # Light abstract
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop",  # Abstract gradient sphere
    ],
    # LISTA - Geometric, structure, pattern
    "LISTA": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",  # Geometric 3D
        "https://images.unsplash.com/photo-1557177324-56c542165309?w=1920&h=1080&fit=crop",  # Abstract lines
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1920&h=1080&fit=crop",  # Neon lines dark
        "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1920&h=1080&fit=crop",  # Hexagon geometric
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&h=1080&fit=crop",  # AI robot abstract
    ],
    # GRID - Technology, network, connections
    "GRID": [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop",  # Server room
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop",  # Network cables
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",  # Data dashboard
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=1080&fit=crop",  # Data visualization
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",  # Analytics dashboard
    ],
    # COMPARATIVO - Contrast, duality
    "COMPARATIVO": [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",  # Light and shadow
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&h=1080&fit=crop",  # Abstract fluid
        "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=1920&h=1080&fit=crop",  # Aurora borealis
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",  # Milky way
    ],
    # FECHAMENTO - Horizon, future, conclusion
    "FECHAMENTO": [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",  # Earth space
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&h=1080&fit=crop",  # Galaxy stars
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",  # Milky way night
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop",  # Nebula cosmic
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1920&h=1080&fit=crop",  # Stars sky
    ],
}


# =============================================================================
# MODELOS DE DADOS
# =============================================================================

@dataclass
class Slide:
    """Representa um slide a ser gerado."""
    tipo: str
    titulo: str
    conteudo: str = ""
    subtitulo: str = ""
    autor: str = ""
    itens: List[str] = field(default_factory=list)
    colunas: List[Dict] = field(default_factory=list)
    imagem_url: str = ""
    imagem_query: str = ""


@dataclass
class Roteiro:
    """Representa um roteiro de aula parseado."""
    titulo: str
    subtitulo: str
    blocos: List[Dict]
    metadados: Dict


# =============================================================================
# PARSER DE ROTEIRO
# =============================================================================

def parse_roteiro(filepath: str) -> Roteiro:
    """Lê e parseia um roteiro de aula em Markdown."""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extrair título do campo **Tema:**
    titulo_match = re.search(r'^\s*-?\s*\*\*Tema:\*\*\s*(.+)$', content, re.MULTILINE)
    if titulo_match:
        titulo = titulo_match.group(1).strip()
        if len(titulo) > 50 and ' - ' in titulo:
            titulo = titulo.split(' - ')[0].strip()
    else:
        h1_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        titulo = h1_match.group(1) if h1_match else "Apresentação"

    # Extrair subtítulo
    subtitulo = "Curso de Sistemas Agênticos"
    if titulo_match:
        tema_completo = titulo_match.group(1).strip()
        if ' - ' in tema_completo:
            subtitulo = tema_completo.split(' - ', 1)[1].strip()

    # Extrair blocos
    blocos = []
    bloco_pattern = r'###\s+Bloco\s+\d+:\s*(.+?)(?=###\s+Bloco|\Z)'
    bloco_matches = re.finditer(bloco_pattern, content, re.DOTALL)

    for match in bloco_matches:
        bloco_titulo_linha = match.group(1).split('\n')[0].strip()
        bloco_titulo = re.sub(r'\s*\(\d+\s*min\)\s*$', '', bloco_titulo_linha).strip()
        bloco_conteudo = match.group(1)

        blocos.append({
            'titulo': bloco_titulo,
            'conteudo': bloco_conteudo
        })

    return Roteiro(
        titulo=titulo,
        subtitulo=subtitulo,
        blocos=blocos,
        metadados={}
    )


# =============================================================================
# LIMPEZA DE MARKDOWN
# =============================================================================

def limpar_markdown(texto: str) -> str:
    """Remove símbolos de formatação Markdown do texto."""
    if not texto:
        return texto

    # Remover bold (**texto** ou __texto__)
    texto = re.sub(r'\*\*(.+?)\*\*', r'\1', texto)
    texto = re.sub(r'__(.+?)__', r'\1', texto)

    # Remover itálico (*texto* ou _texto_)
    texto = re.sub(r'\*(.+?)\*', r'\1', texto)
    texto = re.sub(r'(?<!\w)_(.+?)_(?!\w)', r'\1', texto)

    # Remover código inline (`texto`)
    texto = re.sub(r'`(.+?)`', r'\1', texto)

    # Remover links [texto](url)
    texto = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', texto)

    # Remover headers residuais
    texto = re.sub(r'^#+\s*', '', texto, flags=re.MULTILINE)

    return texto.strip()


# =============================================================================
# EXTRATORES DE CONTEÚDO
# =============================================================================

def extrair_citacoes(texto: str) -> List[Dict]:
    """Extrai citações do formato > 'texto' — Autor"""
    citacoes = []
    pattern = r'>\s*["\'](.+?)["\']\s*[—–-]\s*(.+?)(?:\n|$)'
    for match in re.finditer(pattern, texto):
        citacoes.append({
            'texto': match.group(1).strip(),
            'autor': match.group(2).strip()
        })
    return citacoes


def extrair_tabelas(texto: str) -> List[Dict]:
    """Extrai tabelas Markdown com título precedente."""
    tabelas = []
    # Pattern para capturar título em negrito antes da tabela (opcional)
    pattern = r'(?:\*\*([^*]+)\*\*:?\s*\n\n?)?\|(.+)\|\n\|[-\s|]+\|\n((?:\|.+\|\n?)+)'

    for match in re.finditer(pattern, texto):
        titulo_precedente = match.group(1).strip() if match.group(1) else ""
        headers = [h.strip() for h in match.group(2).split('|') if h.strip()]
        rows_text = match.group(3)
        rows = []
        for row_line in rows_text.strip().split('\n'):
            cells = [c.strip() for c in row_line.split('|') if c.strip()]
            if cells:
                rows.append(cells)

        tabelas.append({
            'headers': headers,
            'rows': rows,
            'num_colunas': len(headers),
            'titulo': titulo_precedente
        })

    return tabelas


def extrair_diagramas(texto: str) -> List[str]:
    """Extrai blocos de código/diagramas ASCII."""
    pattern = r'```[^\n]*\n(.*?)```'
    diagramas = re.findall(pattern, texto, re.DOTALL)
    return [d.strip() for d in diagramas if len(d.strip()) > 20]


def extrair_listas(texto: str) -> List[List[str]]:
    """Extrai listas de bullets."""
    listas = []
    lines = texto.split('\n')
    current_list = []

    for line in lines:
        if re.match(r'^\s*[-*]\s+', line):
            item = re.sub(r'^\s*[-*]\s+', '', line).strip()
            if item and not item.startswith('**') and len(item) > 10:
                current_list.append(item)
        elif current_list and line.strip() == '':
            if len(current_list) >= 3:
                listas.append(current_list)
            current_list = []

    if len(current_list) >= 3:
        listas.append(current_list)

    return listas


# =============================================================================
# TRANSFORMAÇÃO EM SLIDES
# =============================================================================

def transformar_em_slides(roteiro: Roteiro) -> List[Slide]:
    """Transforma roteiro parseado em lista de slides."""
    slides = []
    MAX_SLIDES_POR_BLOCO = CONFIG["max_slides_por_bloco"]

    # 1. Slide de CAPA
    slides.append(Slide(
        tipo="CAPA",
        titulo=roteiro.titulo,
        subtitulo=roteiro.subtitulo,
        imagem_query=f"{roteiro.titulo} technology"
    ))

    # 2. Processar cada bloco
    for bloco in roteiro.blocos:
        slides_do_bloco = []

        # Slide de SEÇÃO
        slides_do_bloco.append(Slide(
            tipo="SECAO",
            titulo=bloco['titulo'],
            imagem_query=f"{bloco['titulo']} abstract"
        ))

        conteudo = bloco['conteudo']

        # Extrair elementos
        citacoes = extrair_citacoes(conteudo)
        tabelas = extrair_tabelas(conteudo)
        diagramas = extrair_diagramas(conteudo)
        listas = extrair_listas(conteudo)

        # Processar citações (máx 1)
        for quote in citacoes[:1]:
            if len(quote['texto']) > 30:
                slides_do_bloco.append(Slide(
                    tipo="CITACAO",
                    titulo=quote['texto'],
                    autor=quote['autor'],
                    imagem_query="inspiration quote"
                ))

        # Processar tabelas (máx 2)
        for tabela in tabelas[:2]:
            if tabela['num_colunas'] == 2 and len(tabela['rows']) >= 2:
                headers_lower = [h.lower() for h in tabela['headers']]
                if any(h in headers_lower for h in ['antes', 'depois', 'vs', 'modo']):
                    slides_do_bloco.append(Slide(
                        tipo="COMPARATIVO",
                        titulo=" vs ".join(tabela['headers']),
                        colunas=[
                            {'titulo': tabela['headers'][0], 'itens': [r[0] for r in tabela['rows']]},
                            {'titulo': tabela['headers'][1], 'itens': [r[1] for r in tabela['rows']]}
                        ],
                        imagem_query="comparison contrast"
                    ))
                elif len(tabela['rows']) >= 3:
                    slides_do_bloco.append(Slide(
                        tipo="LISTA",
                        titulo=tabela['headers'][0] if tabela['headers'] else "",
                        itens=[f"{r[0]}: {r[1]}" for r in tabela['rows'][:8] if len(r) >= 2],
                        imagem_query=f"{tabela['headers'][0]} concept"
                    ))
            elif tabela['num_colunas'] == 3:
                titulo_grid = tabela.get('titulo', '') or bloco['titulo']
                slides_do_bloco.append(Slide(
                    tipo="GRID3",
                    titulo=titulo_grid,
                    colunas=[
                        {'titulo': tabela['headers'][i], 'itens': [r[i] for r in tabela['rows'][:4] if len(r) > i]}
                        for i in range(3)
                    ],
                    imagem_query="three columns concept"
                ))
            elif tabela['num_colunas'] >= 4:
                titulo_grid = tabela.get('titulo', '') or bloco['titulo']
                slides_do_bloco.append(Slide(
                    tipo="GRID4",
                    titulo=titulo_grid,
                    colunas=[
                        {'titulo': tabela['headers'][i], 'itens': [r[i] for r in tabela['rows'][:4] if len(r) > i]}
                        for i in range(min(4, tabela['num_colunas']))
                    ],
                    imagem_query="four columns grid"
                ))

        # Processar diagrama principal
        if diagramas:
            diagrama = max(diagramas, key=len)
            lines = diagrama.split('\n')
            titulo = bloco['titulo']
            for line in lines:
                line_clean = line.strip()
                if (line_clean and
                    not line_clean.startswith(('┌', '│', '└', '─', '├', '▶', '▼', '↓', '|')) and
                    len(line_clean) > 5 and len(line_clean) < 60):
                    titulo = line_clean
                    break

            slides_do_bloco.append(Slide(
                tipo="CONCEITO",
                titulo=titulo,
                conteudo=diagrama,
                imagem_query=f"{titulo} technology"
            ))

        # Respeitar limite por bloco
        slides.extend(slides_do_bloco[:MAX_SLIDES_POR_BLOCO])

    # 3. Slide de FECHAMENTO
    if slides and slides[-1].tipo != "FECHAMENTO":
        if roteiro.blocos:
            slides.append(Slide(
                tipo="FECHAMENTO",
                titulo=roteiro.blocos[-1]['titulo'],
                imagem_query="conclusion future"
            ))

    return slides[:CONFIG["max_slides_total"]]


# =============================================================================
# BUSCA DE IMAGENS
# =============================================================================

def gerar_url_imagem(tipo_slide: str, titulo: str, index: int = 0) -> str:
    """Seleciona URL de imagem curada baseado no tipo de slide.

    Usa hash do título para seleção determinística (mesmo slide = mesma imagem).

    Args:
        tipo_slide: CAPA, SECAO, CONCEITO, LISTA, CITACAO, GRID3, GRID4, COMPARATIVO, FECHAMENTO
        titulo: Título do slide (usado para hash)
        index: Índice do slide (fallback para variação)

    Returns:
        URL da imagem do Unsplash
    """
    import hashlib

    # Mapear tipos de slide para categorias de imagem
    categoria_map = {
        "CAPA": "CAPA",
        "SECAO": "SECAO",
        "CONCEITO": "CONCEITO",
        "LISTA": "LISTA",
        "CITACAO": "CITACAO",
        "GRID3": "GRID",
        "GRID4": "GRID",
        "COMPARATIVO": "COMPARATIVO",
        "FECHAMENTO": "FECHAMENTO",
    }

    categoria = categoria_map.get(tipo_slide, "SECAO")
    imagens = IMAGENS_CURADAS.get(categoria, IMAGENS_CURADAS["SECAO"])

    # Usar hash do título para seleção determinística
    hash_val = int(hashlib.md5(f"{titulo}-{index}".encode()).hexdigest(), 16)
    img_index = hash_val % len(imagens)

    return imagens[img_index]


# =============================================================================
# GERAÇÃO DE HTML
# =============================================================================

def gerar_slide_html(slide: Slide, index: int) -> str:
    """Gera HTML de um slide individual."""
    bg_style = ""
    if slide.imagem_url:
        bg_style = f'data-background-image="{slide.imagem_url}" data-background-opacity="0.4"'
    else:
        bg_style = f'data-background-color="{CONFIG["cor_preto"]}"'

    content = ""

    # Limpar markdown de todos os textos
    titulo = limpar_markdown(slide.titulo)
    subtitulo = limpar_markdown(slide.subtitulo)
    conteudo = slide.conteudo  # Não limpar conteúdo de código
    autor = limpar_markdown(slide.autor)
    itens = [limpar_markdown(item) for item in slide.itens]

    # Estilo padrão para títulos (text-shadow para destaque)
    titulo_style = f"color: {CONFIG['cor_dourado']}; text-shadow: 2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8); font-weight: 700; letter-spacing: 0.5px;"

    # Estilo padrão para cards (glassmorphism)
    card_style = "background: rgba(0,0,0,0.5); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(4px); padding: 20px;"

    if slide.tipo == "CAPA":
        content = f'''
        <h1 style="{titulo_style} font-size: 2.5em;">{titulo}</h1>
        <p style="color: {CONFIG["cor_branco"]}; font-size: 1.2em; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">{subtitulo}</p>
        '''

    elif slide.tipo == "SECAO":
        content = f'''
        <h2 style="{titulo_style} font-size: 2.2em;">{titulo}</h2>
        '''

    elif slide.tipo == "CONCEITO":
        # Bloco de código com card glassmorphism
        content = f'''
        <h3 style="{titulo_style} font-size: 1.3em; margin-bottom: 20px;">{titulo}</h3>
        <div style="{card_style} max-width: 90%; margin: 0 auto;">
            <pre style="background: rgba(0,0,0,0.4); padding: 15px 20px; font-size: 0.36em; text-align: left; color: {CONFIG["cor_branco"]}; white-space: pre; max-height: 380px; overflow: auto; border-radius: 8px; margin: 0; line-height: 1.4;"><code style="display: block; font-family: 'IBM Plex Mono', 'Consolas', 'Monaco', monospace;">{conteudo}</code></pre>
        </div>
        '''

    elif slide.tipo == "LISTA":
        # Lista com card glassmorphism e highlight progressivo
        items_html = "\n".join([f'<li class="fragment highlight-current-item" style="margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">{item}</li>' for item in itens])
        content = f'''
        <h3 style="{titulo_style} font-size: 1.4em; margin-bottom: 25px;">{titulo}</h3>
        <div style="{card_style} max-width: 85%; margin: 0 auto;">
            <ul class="highlight-list" style="color: {CONFIG["cor_branco"]}; text-align: left; font-size: 0.7em; list-style: none; padding: 0; margin: 0;">
                {items_html}
            </ul>
        </div>
        '''

    elif slide.tipo == "CITACAO":
        # Citação com card glassmorphism
        content = f'''
        <div style="{card_style} max-width: 85%; margin: 0 auto;">
            <blockquote style="color: {CONFIG["cor_branco"]}; font-style: italic; font-size: 0.85em; border-left: 4px solid {CONFIG["cor_dourado"]}; padding-left: 20px; margin: 0; text-align: left; line-height: 1.6;">
                "{titulo}"
            </blockquote>
            <p style="color: {CONFIG["cor_dourado"]}; text-align: right; font-size: 0.8em; margin-top: 20px; margin-bottom: 0;">— {autor}</p>
        </div>
        '''

    elif slide.tipo in ["GRID3", "GRID4"]:
        num_cols = 3 if slide.tipo == "GRID3" else 4
        cols_html = ""
        for idx, col in enumerate(slide.colunas[:num_cols]):
            col_items = [limpar_markdown(item) for item in col.get('itens', [])]
            items = "\n".join([f'<li style="margin-bottom: 8px;">{item}</li>' for item in col_items])
            col_titulo = limpar_markdown(col.get('titulo', ''))
            # Card com fragmento para destaque progressivo (spotlight effect)
            cols_html += f'''
            <div class="fragment highlight-current-visible" data-fragment-index="{idx}" style="flex: 1; {card_style} margin: 0 10px; transition: all 0.4s ease;">
                <h4 style="color: {CONFIG["cor_dourado"]}; margin-bottom: 15px; font-size: 1em; border-bottom: 2px solid {CONFIG["cor_dourado"]}; padding-bottom: 10px; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">{col_titulo}</h4>
                <ul style="color: {CONFIG["cor_branco"]}; font-size: 0.55em; text-align: left; list-style: none; padding: 0; margin: 0;">{items}</ul>
            </div>
            '''
        titulo_html = f'<h3 style="{titulo_style} font-size: 1.4em; margin-bottom: 30px;">{titulo}</h3>' if titulo else ""
        content = f'''
        {titulo_html}
        <div style="display: flex; justify-content: center; gap: 15px;">
            {cols_html}
        </div>
        '''

    elif slide.tipo == "COMPARATIVO":
        left = slide.colunas[0] if len(slide.colunas) > 0 else {}
        right = slide.colunas[1] if len(slide.colunas) > 1 else {}
        left_itens = [limpar_markdown(item) for item in left.get('itens', [])]
        right_itens = [limpar_markdown(item) for item in right.get('itens', [])]
        left_items = "\n".join([f'<li style="margin-bottom: 8px;">{item}</li>' for item in left_itens])
        right_items = "\n".join([f'<li style="margin-bottom: 8px;">{item}</li>' for item in right_itens])
        left_titulo = limpar_markdown(left.get('titulo', ''))
        right_titulo = limpar_markdown(right.get('titulo', ''))
        content = f'''
        <h3 style="{titulo_style} font-size: 1.4em; margin-bottom: 25px;">{titulo}</h3>
        <div style="display: flex; justify-content: center; gap: 20px;">
            <div class="fragment highlight-current-visible" data-fragment-index="0" style="flex: 1; {card_style} transition: all 0.4s ease;">
                <h4 style="color: {CONFIG["cor_dourado"]}; margin-bottom: 15px; border-bottom: 2px solid {CONFIG["cor_dourado"]}; padding-bottom: 10px; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">{left_titulo}</h4>
                <ul style="color: {CONFIG["cor_branco"]}; text-align: left; font-size: 0.6em; list-style: none; padding: 0; margin: 0;">{left_items}</ul>
            </div>
            <div class="fragment highlight-current-visible" data-fragment-index="1" style="flex: 1; {card_style} transition: all 0.4s ease;">
                <h4 style="color: {CONFIG["cor_dourado"]}; margin-bottom: 15px; border-bottom: 2px solid {CONFIG["cor_dourado"]}; padding-bottom: 10px; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">{right_titulo}</h4>
                <ul style="color: {CONFIG["cor_branco"]}; text-align: left; font-size: 0.6em; list-style: none; padding: 0; margin: 0;">{right_items}</ul>
            </div>
        </div>
        '''

    elif slide.tipo == "FECHAMENTO":
        content = f'''
        <div style="{card_style} max-width: 60%; margin: 0 auto; text-align: center;">
            <h2 style="{titulo_style} font-size: 2em; margin-bottom: 15px;">Obrigado!</h2>
            <p style="color: {CONFIG["cor_branco"]}; font-size: 1em; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">Curso de Sistemas Agênticos</p>
        </div>
        '''

    return f'''
    <section {bg_style}>
        {content}
    </section>
    '''


def gerar_html_completo(slides: List[Slide], titulo: str, config: dict = None) -> str:
    """Gera HTML completo da apresentação."""
    cfg = config or CONFIG
    slides_html = "\n".join([gerar_slide_html(s, i) for i, s in enumerate(slides)])

    return f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{titulo}</title>
    <!-- Google Fonts - Stack do Superposts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/black.css">
    <style>
        /* ============================================
           VARIÁVEIS CSS - Paleta: {cfg.get("paleta_nome", "SUPER")}
           ============================================ */
        :root {{
            --cor-primaria: {cfg["cor_primaria"]};
            --cor-secundaria: {cfg["cor_secundaria"]};
            --cor-fundo: {cfg["cor_fundo"]};
            --cor-accent: {cfg["cor_accent"]};
            --cor-texto: {cfg["cor_texto"]};
            --r-main-font: {cfg["fonte_texto"]};
            --r-heading-font: {cfg["fonte_titulo"]};
            --r-main-color: {cfg["cor_texto"]};
            --r-heading-color: {cfg["cor_secundaria"]};
            --r-background-color: {cfg["cor_fundo"]};
        }}

        /* ============================================
           TIPOGRAFIA
           ============================================ */
        .reveal h1, .reveal h2, .reveal h3, .reveal h4 {{
            text-transform: none;
            font-weight: 600;
            font-family: {cfg["fonte_titulo"]};
            color: var(--cor-secundaria);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }}
        .reveal p, .reveal li, .reveal blockquote {{
            font-family: {cfg["fonte_texto"]};
            color: var(--cor-texto);
        }}
        .reveal pre, .reveal code {{
            font-family: {cfg["fonte_codigo"]};
        }}

        /* ============================================
           LAYOUT BASE
           ============================================ */
        .reveal section {{
            text-align: center;
        }}
        .reveal ul {{
            list-style-type: none;
        }}
        .reveal ul li::before {{
            content: "•";
            color: var(--cor-secundaria);
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }}
        .reveal blockquote {{
            background: none;
            box-shadow: none;
            font-family: {cfg["fonte_texto"]};
        }}
        .reveal pre {{
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            border-radius: 8px;
        }}
        .reveal pre code {{
            overflow: visible;
            max-height: none;
        }}

        /* ============================================
           OVERLAYS - Estilo Vignette (do superposts)
           ============================================ */
        .reveal .slides section::before {{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center,
                rgba(0,0,0,0.3) 0%,
                rgba(0,0,0,0.5) 50%,
                rgba(0,0,0,0.7) 100%);
            pointer-events: none;
            z-index: 1;
        }}

        /* Títulos acima do overlay para maior destaque */
        .reveal .slides section h1,
        .reveal .slides section h2,
        .reveal .slides section h3,
        .reveal .slides section h4 {{
            position: relative;
            z-index: 2;
        }}

        /* Conteúdo também acima do overlay */
        .reveal .slides section > div,
        .reveal .slides section > p,
        .reveal .slides section > ul,
        .reveal .slides section > blockquote,
        .reveal .slides section > pre {{
            position: relative;
            z-index: 2;
        }}

        /* ============================================
           DESTAQUE PROGRESSIVO (Spotlight Effect)
           Técnica: fragment + highlight-current-visible
           Uso em GRID3/GRID4 para revelar colunas uma a uma
           ============================================ */
        /* Estado inicial: todos os cards visíveis mas levemente apagados */
        .reveal .slides section .fragment.highlight-current-visible {{
            opacity: 0.3;
            transform: scale(0.95);
            filter: grayscale(30%);
        }}
        /* Card atual em destaque (spotlight) */
        .reveal .slides section .fragment.highlight-current-visible.current-fragment {{
            opacity: 1;
            transform: scale(1.02);
            filter: grayscale(0%);
            box-shadow: 0 0 30px rgba(190, 156, 109, 0.4), 0 8px 32px rgba(0,0,0,0.5);
            border-color: var(--cor-secundaria) !important;
        }}
        /* Cards já mostrados (após serem destaque) */
        .reveal .slides section .fragment.highlight-current-visible.visible:not(.current-fragment) {{
            opacity: 0.5;
            transform: scale(0.98);
            filter: grayscale(20%);
        }}

        /* ============================================
           HIGHLIGHTS - Técnicas do superposts
           ============================================ */
        .highlight-color-pop {{
            color: var(--cor-secundaria);
            font-weight: 700;
        }}
        .highlight-underline {{
            text-decoration: underline;
            text-decoration-color: var(--cor-secundaria);
            text-underline-offset: 4px;
        }}
        .highlight-underline-wavy {{
            text-decoration: underline wavy;
            text-decoration-color: var(--cor-secundaria);
        }}
        .highlight-box {{
            background: var(--cor-secundaria);
            color: var(--cor-fundo);
            padding: 2px 8px;
            border-radius: 4px;
        }}
        .highlight-box-gradient {{
            background: linear-gradient(135deg, var(--cor-primaria), var(--cor-accent));
            color: var(--cor-texto);
            padding: 2px 8px;
            border-radius: 4px;
        }}
        .highlight-marker {{
            background: linear-gradient(180deg, transparent 50%, rgba(235,150,5,0.4) 50%);
            padding: 0 4px;
        }}
        .highlight-circle {{
            border: 2px solid var(--cor-secundaria);
            border-radius: 50%;
            padding: 2px 8px;
        }}
        .highlight-bold {{
            font-weight: 700;
        }}
        .highlight-tag {{
            background: var(--cor-accent);
            color: var(--cor-texto);
            padding: 2px 10px;
            border-radius: 12px;
            font-size: 0.85em;
            font-weight: 500;
        }}

        /* ============================================
           LISTA COM HIGHLIGHT PROGRESSIVO
           ============================================ */
        .reveal .highlight-list li.highlight-current-item {{
            opacity: 0.35;
            transition: opacity 0.4s ease, transform 0.3s ease;
        }}
        .reveal .highlight-list li.highlight-current-item.visible {{
            opacity: 0.5;
        }}
        .reveal .highlight-list li.highlight-current-item.current-fragment {{
            opacity: 1;
            transform: translateX(10px);
        }}
        .reveal .highlight-list li.highlight-current-item:first-child:not(.visible) {{
            opacity: 1;
        }}

        /* ============================================
           CARDS E GRIDS
           ============================================ */
        .card {{
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 20px;
            backdrop-filter: blur(10px);
        }}
        .card-accent {{
            border-left: 4px solid var(--cor-secundaria);
        }}
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            {slides_html}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
    <script>
        Reveal.initialize({{
            hash: true,
            transition: '{cfg["transition"]}',
            backgroundTransition: '{cfg["background_transition"]}',
            slideNumber: true,
            controls: true,
            progress: true,
            center: true,
        }});
    </script>
</body>
</html>
'''


# =============================================================================
# MAIN
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="Gera apresentação web (Reveal.js) a partir de roteiro de aula"
    )
    parser.add_argument('--roteiro', help='Caminho do roteiro .md')
    parser.add_argument('--output', help='Caminho do HTML de saída')
    parser.add_argument('--paleta', default='super',
                        choices=['super', 'coral', 'tech', 'earth', 'ambar'],
                        help='Paleta de cores (default: super)')
    parser.add_argument('--dry-run', action='store_true', help='Apenas mostrar estrutura')
    parser.add_argument('--no-images', action='store_true', help='Não buscar imagens')
    parser.add_argument('--list-paletas', action='store_true', help='Listar paletas disponíveis')

    args = parser.parse_args()

    # Listar paletas disponíveis
    if args.list_paletas:
        print("\n=== PALETAS DISPONÍVEIS ===\n")
        for pid, p in PALETAS.items():
            print(f"  {pid:8s} - {p['nome']}")
            print(f"             Primária: {p['primaria']}  Secundária: {p['secundaria']}")
        print()
        return

    # Validar argumentos obrigatórios
    if not args.roteiro or not args.output:
        parser.error("--roteiro e --output são obrigatórios (exceto com --list-paletas)")

    # Configurar paleta selecionada
    global CONFIG
    CONFIG = get_config(args.paleta)

    print(f"\n=== GERADOR DE SLIDES WEB ===\n")
    print(f"Roteiro: {args.roteiro}")
    print(f"Output: {args.output}")
    print(f"Paleta: {CONFIG['paleta_nome']}")

    # 1. Parsear roteiro
    print(f"\n[1/4] Parseando roteiro...")
    roteiro = parse_roteiro(args.roteiro)
    print(f"  Título: {roteiro.titulo}")
    print(f"  Blocos: {len(roteiro.blocos)}")

    # 2. Transformar em slides
    print(f"\n[2/4] Transformando em slides...")
    slides = transformar_em_slides(roteiro)
    print(f"  Slides gerados: {len(slides)}")

    # Mostrar estrutura
    print(f"\n  Estrutura:")
    for i, slide in enumerate(slides, 1):
        print(f"    {i:2d}. {slide.tipo:12s} | {slide.titulo[:50]}")

    if args.dry_run:
        print(f"\n[DRY-RUN] Não gerando arquivo.")
        return

    # 3. Gerar URLs de imagens
    print(f"\n[3/4] Gerando URLs de imagens...")

    if args.no_images:
        print("  Pulando imagens (--no-images).")
    else:
        for i, slide in enumerate(slides):
            # Usar banco de imagens curadas por tipo de slide
            slide.imagem_url = gerar_url_imagem(slide.tipo, slide.titulo, i)
            print(f"  [{i+1}/{len(slides)}] {slide.tipo}: OK")

    # 4. Gerar HTML
    print(f"\n[4/4] Gerando HTML...")
    html = gerar_html_completo(slides, roteiro.titulo)

    os.makedirs(os.path.dirname(args.output) or '.', exist_ok=True)
    with open(args.output, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"\n✓ Apresentação gerada: {args.output}")
    print(f"\nPara visualizar, abra no browser:")
    print(f"  file:///{os.path.abspath(args.output).replace(os.sep, '/')}")


if __name__ == "__main__":
    main()
