#!/usr/bin/env python3
"""
Gerador do site Banco de Prompts P.O.E.M.A.
Lê todos os arquivos .md de prompts e gera o HTML do site.
"""

import os
import re
from pathlib import Path

def parse_frontmatter(content: str) -> tuple[dict, str]:
    """Extrai o frontmatter YAML e o conteúdo do arquivo."""
    if not content.startswith('---'):
        return {}, content

    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, content

    frontmatter = {}
    for line in parts[1].strip().split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            frontmatter[key.strip()] = value.strip()

    return frontmatter, parts[2].strip()

def get_prompt_content(content: str) -> str:
    """Extrai apenas o conteúdo do prompt (tags XML)."""
    # Encontra o início do prompt (primeira tag <persona> ou similar)
    match = re.search(r'<persona>', content, re.IGNORECASE)
    if match:
        return content[match.start():]
    return content

def escape_html(text: str) -> str:
    """Escapa caracteres HTML."""
    return (text
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&#39;'))

def load_prompts(base_dir: str) -> dict:
    """Carrega todos os prompts organizados por categoria."""
    prompts = {
        'metaprompts': [],
        'analise': [],
        'escrita': [],
        'criacao': []
    }

    # Metaprompts
    metaprompts_dir = Path(base_dir) / 'metaprompts'
    if metaprompts_dir.exists():
        for file in sorted(metaprompts_dir.glob('*.md')):
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            fm, body = parse_frontmatter(content)
            prompts['metaprompts'].append({
                'file': file.name,
                'name': fm.get('name', file.stem),
                'description': fm.get('description', ''),
                'uso': fm.get('uso', ''),
                'content': get_prompt_content(body)
            })

    # Prompts por categoria
    for categoria in ['analise', 'escrita', 'criacao']:
        cat_dir = Path(base_dir) / 'prompts' / categoria
        if cat_dir.exists():
            for file in sorted(cat_dir.glob('*.md')):
                with open(file, 'r', encoding='utf-8') as f:
                    content = f.read()
                fm, body = parse_frontmatter(content)
                prompts[categoria].append({
                    'file': file.name,
                    'name': fm.get('name', file.stem),
                    'description': fm.get('description', ''),
                    'uso': fm.get('uso', ''),
                    'content': get_prompt_content(body)
                })

    return prompts

def generate_nav_item(prompt: dict, index: int, categoria: str) -> str:
    """Gera um item de navegação."""
    prompt_id = f"{categoria}-{prompt['name']}"
    return f'''            <a href="#{prompt_id}" class="nav-link">
                <span class="nav-step">{index}</span>
                {prompt['name']}
            </a>'''

def generate_prompt_section(prompt: dict, categoria: str) -> str:
    """Gera a seção HTML de um prompt."""
    prompt_id = f"{categoria}-{prompt['name']}"
    escaped_content = escape_html(prompt['content'])

    # Mapeia categoria para emoji
    emoji_map = {
        'metaprompts': '🧠',
        'analise': '🔍',
        'escrita': '✍️',
        'criacao': '🎨'
    }
    emoji = emoji_map.get(categoria, '📄')

    return f'''
            <!-- PROMPT: {prompt['name']} -->
            <section class="section" id="{prompt_id}">
                <div class="section-header">
                    <div class="section-step">
                        <span class="section-step-number">{emoji}</span>
                        {categoria.title()}
                    </div>
                    <h1 class="section-title">{prompt['name']}</h1>
                    <p class="section-subtitle">{prompt['description']}</p>
                </div>

                <div class="card">
                    <div class="card-title">📋 Como usar</div>
                    <p>{prompt['uso']}</p>
                </div>

                <h3>Prompt Completo</h3>
                <p>Copie o prompt abaixo e cole no Claude ou outro modelo de linguagem:</p>

                <div class="code-block">
                    <div class="code-header">
                        <span class="code-lang">PROMPT</span>
                        <button class="code-copy" onclick="copyCode(this)">Copiar</button>
                    </div>
                    <pre><code>{escaped_content}</code></pre>
                </div>
            </section>
'''

def generate_html(prompts: dict) -> str:
    """Gera o HTML completo do site."""

    # Gerar navegação
    nav_sections = []

    # Metaprompts
    if prompts['metaprompts']:
        items = '\n'.join([generate_nav_item(p, i+1, 'metaprompts')
                          for i, p in enumerate(prompts['metaprompts'])])
        nav_sections.append(f'''        <div class="nav-section">
            <div class="nav-section-title">🧠 Metaprompts ({len(prompts['metaprompts'])})</div>
{items}
        </div>''')

    # Análise
    if prompts['analise']:
        items = '\n'.join([generate_nav_item(p, i+1, 'analise')
                          for i, p in enumerate(prompts['analise'])])
        nav_sections.append(f'''        <div class="nav-section">
            <div class="nav-section-title">🔍 Análise ({len(prompts['analise'])})</div>
{items}
        </div>''')

    # Escrita
    if prompts['escrita']:
        items = '\n'.join([generate_nav_item(p, i+1, 'escrita')
                          for i, p in enumerate(prompts['escrita'])])
        nav_sections.append(f'''        <div class="nav-section">
            <div class="nav-section-title">✍️ Escrita ({len(prompts['escrita'])})</div>
{items}
        </div>''')

    # Criação
    if prompts['criacao']:
        items = '\n'.join([generate_nav_item(p, i+1, 'criacao')
                          for i, p in enumerate(prompts['criacao'])])
        nav_sections.append(f'''        <div class="nav-section">
            <div class="nav-section-title">🎨 Criação ({len(prompts['criacao'])})</div>
{items}
        </div>''')

    nav_html = '\n'.join(nav_sections)

    # Gerar seções de conteúdo
    content_sections = []

    # Introdução
    total = sum(len(v) for v in prompts.values())
    content_sections.append(f'''
            <!-- INTRODUÇÃO -->
            <section class="section" id="introducao">
                <div class="section-header">
                    <div class="section-step">
                        <span class="section-step-number">📚</span>
                        Bem-vindo
                    </div>
                    <h1 class="section-title">Banco de Prompts P.O.E.M.A.</h1>
                    <p class="section-subtitle">Repositório completo de {total} prompts jurídicos estruturados seguindo o framework P.O.E.M.A. (Persona, Objetivo, Estilo, Modelo, Adicionais).</p>
                </div>

                <p>Este banco reúne prompts desenvolvidos para auxiliar profissionais do Direito em tarefas de <strong>análise</strong>, <strong>escrita</strong> e <strong>criação</strong> de conteúdo jurídico, utilizando modelos de linguagem como o Claude.</p>

                <div class="card-grid">
                    <div class="card-mini">
                        <div class="card-mini-title">🧠 {len(prompts['metaprompts'])} Metaprompts</div>
                        <div class="card-mini-desc">Geradores de prompts especializados</div>
                    </div>
                    <div class="card-mini">
                        <div class="card-mini-title">🔍 {len(prompts['analise'])} Análise</div>
                        <div class="card-mini-desc">Extração, interpretação, compreensão</div>
                    </div>
                    <div class="card-mini">
                        <div class="card-mini-title">✍️ {len(prompts['escrita'])} Escrita</div>
                        <div class="card-mini-desc">Produção de documentos jurídicos</div>
                    </div>
                    <div class="card-mini">
                        <div class="card-mini-title">🎨 {len(prompts['criacao'])} Criação</div>
                        <div class="card-mini-desc">Conteúdo original e criativo</div>
                    </div>
                </div>

                <h3>Como usar os prompts</h3>
                <ol>
                    <li><strong>Escolha o prompt</strong> adequado à sua tarefa no menu lateral</li>
                    <li><strong>Leia a descrição</strong> e as instruções de uso</li>
                    <li><strong>Copie o prompt</strong> clicando no botão "Copiar"</li>
                    <li><strong>Cole no Claude</strong> (ou outro modelo) e forneça o documento/contexto</li>
                </ol>

                <div class="callout callout-tip">
                    <span class="callout-icon">💡</span>
                    <div class="callout-content">
                        <div class="callout-title">Dica</div>
                        <p class="callout-text">Todos os prompts seguem o framework P.O.E.M.A., garantindo estrutura consistente e resultados de alta qualidade.</p>
                    </div>
                </div>
            </section>
''')

    # Prompts por categoria
    for categoria in ['metaprompts', 'analise', 'escrita', 'criacao']:
        for prompt in prompts[categoria]:
            content_sections.append(generate_prompt_section(prompt, categoria))

    content_html = '\n'.join(content_sections)

    # HTML completo
    html = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banco de Prompts P.O.E.M.A. by George Marmelstein</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {{
            --ink: #0f172a;
            --ink-light: #334155;
            --ink-muted: #64748b;
            --paper: #faf9f7;
            --paper-warm: #f5f3ef;
            --accent: #b45309;
            --accent-light: #fbbf24;
            --accent-glow: rgba(180, 83, 9, 0.15);
            --success: #059669;
            --border: #e2e0dc;
            --border-dark: #d4d0c8;
            --shadow-soft: 0 4px 24px rgba(15, 23, 42, 0.06);
            --shadow-medium: 0 8px 32px rgba(15, 23, 42, 0.1);
            --font-display: 'Cormorant Garamond', Georgia, serif;
            --font-body: 'DM Sans', -apple-system, sans-serif;
            --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
            --nav-width: 300px;
            --header-height: 72px;
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        html {{
            scroll-behavior: smooth;
            scroll-padding-top: calc(var(--header-height) + 32px);
        }}

        body {{
            font-family: var(--font-body);
            background: var(--paper);
            color: var(--ink);
            line-height: 1.7;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
        }}

        /* HEADER */
        .header {{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--header-height);
            background: rgba(250, 249, 247, 0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            z-index: 100;
            display: flex;
            align-items: center;
            padding: 0 32px;
        }}

        .header-brand {{
            display: flex;
            align-items: center;
            gap: 16px;
        }}

        .header-logo {{
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--accent) 0%, #92400e 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 20px;
            color: white;
        }}

        .header-title {{
            font-family: var(--font-display);
            font-size: 22px;
            font-weight: 600;
            color: var(--ink);
        }}

        .header-subtitle {{
            font-size: 13px;
            color: var(--ink-muted);
            margin-left: 16px;
            padding-left: 16px;
            border-left: 1px solid var(--border);
        }}

        /* NAVIGATION */
        .nav {{
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: var(--nav-width);
            height: calc(100vh - var(--header-height));
            background: var(--paper-warm);
            border-right: 1px solid var(--border);
            overflow-y: auto;
            padding: 24px 0;
            z-index: 50;
        }}

        .nav::-webkit-scrollbar {{
            width: 6px;
        }}

        .nav::-webkit-scrollbar-thumb {{
            background: var(--border-dark);
            border-radius: 3px;
        }}

        .nav-section {{
            margin-bottom: 20px;
        }}

        .nav-section-title {{
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--ink-muted);
            padding: 0 20px;
            margin-bottom: 8px;
        }}

        .nav-link {{
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 20px;
            color: var(--ink-light);
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s;
            position: relative;
        }}

        .nav-link::before {{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: var(--accent);
            opacity: 0;
            transition: opacity 0.2s;
        }}

        .nav-link:hover {{
            background: rgba(180, 83, 9, 0.06);
            color: var(--ink);
        }}

        .nav-link.active {{
            color: var(--accent);
            background: var(--accent-glow);
        }}

        .nav-link.active::before {{
            opacity: 1;
        }}

        .nav-step {{
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 600;
            color: var(--ink-muted);
            flex-shrink: 0;
        }}

        .nav-link.active .nav-step {{
            background: var(--accent);
            color: white;
        }}

        /* MAIN CONTENT */
        .main {{
            margin-left: var(--nav-width);
            margin-top: var(--header-height);
            min-height: calc(100vh - var(--header-height));
        }}

        .content {{
            max-width: 900px;
            margin: 0 auto;
            padding: 48px 48px 120px;
        }}

        /* SECTIONS */
        .section {{
            margin-bottom: 80px;
            opacity: 0;
            transform: translateY(24px);
            animation: fadeInUp 0.6s ease forwards;
        }}

        @keyframes fadeInUp {{
            to {{
                opacity: 1;
                transform: translateY(0);
            }}
        }}

        .section-header {{
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--border);
        }}

        .section-step {{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--accent);
            margin-bottom: 12px;
        }}

        .section-step-number {{
            width: 28px;
            height: 28px;
            background: var(--accent);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }}

        .section-title {{
            font-family: var(--font-display);
            font-size: 36px;
            font-weight: 600;
            color: var(--ink);
            line-height: 1.2;
            letter-spacing: -1px;
            margin-bottom: 16px;
        }}

        .section-subtitle {{
            font-size: 17px;
            color: var(--ink-light);
            max-width: 700px;
        }}

        /* TYPOGRAPHY */
        h3 {{
            font-family: var(--font-display);
            font-size: 24px;
            font-weight: 600;
            color: var(--ink);
            margin: 32px 0 16px;
        }}

        p {{
            margin-bottom: 16px;
            color: var(--ink-light);
        }}

        strong {{
            color: var(--ink);
            font-weight: 600;
        }}

        ol, ul {{
            margin: 16px 0;
            padding-left: 24px;
        }}

        li {{
            margin-bottom: 8px;
            color: var(--ink-light);
        }}

        li::marker {{
            color: var(--accent);
        }}

        /* CODE BLOCKS */
        .code-block {{
            background: #1e293b;
            border-radius: 12px;
            overflow: hidden;
            margin: 20px 0;
            box-shadow: var(--shadow-medium);
        }}

        .code-header {{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            background: rgba(0, 0, 0, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }}

        .code-lang {{
            font-size: 12px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        .code-copy {{
            padding: 8px 16px;
            font-size: 13px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
        }}

        .code-copy:hover {{
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }}

        .code-copy.copied {{
            background: var(--success);
            color: white;
        }}

        pre {{
            padding: 20px;
            overflow-x: auto;
            font-family: var(--font-mono);
            font-size: 13px;
            line-height: 1.6;
            color: #e2e8f0;
            white-space: pre-wrap;
            word-wrap: break-word;
            max-height: 600px;
            overflow-y: auto;
        }}

        pre code {{
            font-family: inherit;
        }}

        /* CARDS */
        .card {{
            background: white;
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px;
            margin: 20px 0;
            box-shadow: var(--shadow-soft);
        }}

        .card-title {{
            font-family: var(--font-display);
            font-size: 18px;
            font-weight: 600;
            color: var(--ink);
            margin-bottom: 12px;
        }}

        .card-grid {{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin: 24px 0;
        }}

        .card-mini {{
            background: var(--paper-warm);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 20px;
            transition: all 0.2s;
        }}

        .card-mini:hover {{
            border-color: var(--accent);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }}

        .card-mini-title {{
            font-weight: 700;
            color: var(--ink);
            margin-bottom: 4px;
        }}

        .card-mini-desc {{
            font-size: 13px;
            color: var(--ink-muted);
        }}

        /* CALLOUTS */
        .callout {{
            padding: 20px 24px;
            border-radius: 12px;
            margin: 24px 0;
            display: flex;
            gap: 16px;
        }}

        .callout-icon {{
            font-size: 20px;
            flex-shrink: 0;
        }}

        .callout-content {{
            flex: 1;
        }}

        .callout-title {{
            font-weight: 700;
            margin-bottom: 4px;
        }}

        .callout-text {{
            font-size: 14px;
            margin: 0;
        }}

        .callout-tip {{
            background: #dcfce7;
            border: 1px solid #86efac;
        }}

        .callout-tip .callout-title {{ color: #166534; }}
        .callout-tip .callout-text {{ color: #15803d; }}

        /* MOBILE TOGGLE */
        .nav-toggle {{
            display: none;
            width: 40px;
            height: 40px;
            border: none;
            background: none;
            cursor: pointer;
            position: relative;
            margin-right: 16px;
        }}

        .nav-toggle span {{
            display: block;
            width: 24px;
            height: 2px;
            background: var(--ink);
            position: absolute;
            left: 8px;
            transition: all 0.3s;
        }}

        .nav-toggle span:nth-child(1) {{ top: 12px; }}
        .nav-toggle span:nth-child(2) {{ top: 19px; }}
        .nav-toggle span:nth-child(3) {{ top: 26px; }}

        /* RESPONSIVE */
        @media (max-width: 1024px) {{
            :root {{
                --nav-width: 260px;
            }}
        }}

        @media (max-width: 768px) {{
            .nav-toggle {{
                display: block;
            }}

            .nav {{
                transform: translateX(-100%);
                transition: transform 0.3s ease;
                width: 280px;
                background: var(--paper);
                box-shadow: var(--shadow-medium);
            }}

            .nav.open {{
                transform: translateX(0);
            }}

            .main {{
                margin-left: 0;
            }}

            .content {{
                padding: 32px 24px 80px;
            }}

            .section-title {{
                font-size: 28px;
            }}

            .header-subtitle {{
                display: none;
            }}

            .card-grid {{
                grid-template-columns: 1fr;
            }}
        }}

        /* SCROLL TO TOP */
        .scroll-indicator {{
            position: fixed;
            bottom: 32px;
            right: 32px;
            width: 48px;
            height: 48px;
            background: var(--accent);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: var(--shadow-medium);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }}

        .scroll-indicator.visible {{
            opacity: 1;
            visibility: visible;
        }}

        .scroll-indicator:hover {{
            transform: translateY(-4px);
        }}

        /* FOOTER */
        .footer {{
            text-align: center;
            padding: 32px;
            color: var(--ink-muted);
            font-size: 14px;
            border-top: 1px solid var(--border);
            margin-top: 80px;
        }}

        .footer a {{
            color: var(--accent);
            text-decoration: none;
        }}

        .footer a:hover {{
            text-decoration: underline;
        }}
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <button class="nav-toggle" onclick="toggleNav()">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="header-brand">
            <div class="header-logo">P</div>
            <span class="header-title">Banco de Prompts P.O.E.M.A.</span>
        </div>
        <span class="header-subtitle">by George Marmelstein</span>
    </header>

    <!-- Navigation -->
    <nav class="nav" id="nav">
        <div class="nav-section">
            <div class="nav-section-title">📚 Início</div>
            <a href="#introducao" class="nav-link active">
                <span class="nav-step">🏠</span>
                Introdução
            </a>
        </div>
{nav_html}
    </nav>

    <!-- Main Content -->
    <main class="main">
        <div class="content">
{content_html}

            <!-- Footer -->
            <div class="footer">
                <p>Banco de Prompts P.O.E.M.A. by <strong>George Marmelstein</strong></p>
                <p>Framework de Engenharia de Prompts Jurídicos</p>
            </div>
        </div>
    </main>

    <!-- Scroll to top button -->
    <button class="scroll-indicator" id="scrollTop" onclick="scrollToTop()">↑</button>

    <script>
        // Navigation toggle for mobile
        function toggleNav() {{
            document.getElementById('nav').classList.toggle('open');
        }}

        // Close nav when clicking a link on mobile
        document.querySelectorAll('.nav-link').forEach(link => {{
            link.addEventListener('click', () => {{
                document.getElementById('nav').classList.remove('open');
            }});
        }});

        // Copy code
        function copyCode(button) {{
            const code = button.closest('.code-block').querySelector('pre code').textContent;
            navigator.clipboard.writeText(code).then(() => {{
                button.textContent = 'Copiado!';
                button.classList.add('copied');
                setTimeout(() => {{
                    button.textContent = 'Copiar';
                    button.classList.remove('copied');
                }}, 2000);
            }});
        }}

        // Scroll to top
        function scrollToTop() {{
            window.scrollTo({{ top: 0, behavior: 'smooth' }});
        }}

        // Active navigation on scroll
        function updateActiveNav() {{
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';
            sections.forEach(section => {{
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {{
                    current = section.getAttribute('id');
                }}
            }});

            navLinks.forEach(link => {{
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {{
                    link.classList.add('active');
                }}
            }});

            // Show/hide scroll to top button
            const scrollButton = document.getElementById('scrollTop');
            if (window.scrollY > 500) {{
                scrollButton.classList.add('visible');
            }} else {{
                scrollButton.classList.remove('visible');
            }}
        }}

        // Initialize
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    </script>
</body>
</html>
'''

    return html

def main():
    """Função principal."""
    # Diretório base do projeto
    base_dir = Path(__file__).parent.parent

    print("Carregando prompts...")
    prompts = load_prompts(base_dir)

    total = sum(len(v) for v in prompts.values())
    print(f"  - Metaprompts: {len(prompts['metaprompts'])}")
    print(f"  - Análise: {len(prompts['analise'])}")
    print(f"  - Escrita: {len(prompts['escrita'])}")
    print(f"  - Criação: {len(prompts['criacao'])}")
    print(f"  - Total: {total}")

    print("\nGerando HTML...")
    html = generate_html(prompts)

    # Salvar arquivo
    output_path = Path(__file__).parent / 'index.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"\nSite gerado com sucesso!")
    print(f"Arquivo: {output_path}")

if __name__ == '__main__':
    main()
