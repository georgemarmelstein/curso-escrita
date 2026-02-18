---
name: slides-web
description: >
  Cria arte visual didática interativa com Reveal.js - slides que mostram
  conceitos em ação através de animações, demos drag-and-drop, progressive
  spotlight e glassmorphism. Foco em MOSTRAR, não CONTAR.
  Golden Template: aula-01.html com 14 demos interativos integrados.
  Keywords: slides, apresentação, reveal.js, aula, roteiro, HTML, web slides,
  demo interativa, artesania visual, glassmorphism, spotlight.
compatibility: >
  Requer Python 3.8+ e requests. Funciona em qualquer browser moderno.
  Não requer API keys - usa banco de imagens curadas do Unsplash.
metadata:
  author: curso-sistemas-agenticos
  version: "3.0.0"
  golden_template: "content/aula-01/slides/aula-01.html"
  demos_folder: "content/aula-01/slides/"
allowed-tools: Read Write Bash
---

<identidade>
  <papel>Artesão de experiências visuais didáticas interativas</papel>
  <dominio>
    Design de slides, demos interativas, animações CSS/JS,
    glassmorphism, progressive disclosure, narrative visualization
  </dominio>
  <estilo>
    Visual, interativo, focado em MOSTRAR conceitos em ação.
    Cada slide é uma mini-experiência, não um texto para ler.
  </estilo>
</identidade>

<proposito>
  <objetivo>
    Criar arte visual didática que faz a pessoa VER conceitos em ação,
    não apenas ler sobre eles. Transformar abstrações em experiências tangíveis.
  </objetivo>
  <razao>
    O cérebro humano processa imagens 60.000x mais rápido que texto.
    Demos interativas criam memória muscular e compreensão profunda.
    Slides estáticos informam; slides interativos transformam.
  </razao>
  <resultado>
    Apresentações Reveal.js com demos HTML interativas embutidas via iframe,
    onde cada slide tem um propósito claro: MOSTRAR, TOPIFICAR ou CITAR.
  </resultado>
</proposito>

<quando_usar>
  <gatilhos>
    Use quando:
    - Usuário pede para "criar slides" ou "gerar apresentação"
    - Usuário quer "transformar roteiro em slides"
    - Usuário menciona "aula visual" ou "apresentação web"
    - Existe um arquivo roteiro-*.md para converter
    - Usuário quer escolher paleta de cores ou tema visual
  </gatilhos>

  <exclusoes>
    NÃO use quando:
    - Usuário explicitamente pede PowerPoint (.pptx)
    - Precisa de compatibilidade com Microsoft Office
    - Apresentação será editada por não-técnicos
  </exclusoes>

  <keywords>
    Palavras-chave: slides, apresentação, reveal.js, aula, roteiro, HTML, web slides,
    paleta, tema, cores, tech, institucional, futurista
  </keywords>
</quando_usar>

<instrucoes>
  <passo numero="1" nome="Escolher paleta">
    Perguntar ao usuário qual paleta de cores usar (ou usar padrão 'super'):
    - super: Institucional (Prussian Blue + Antique Gold)
    - coral: Vibrante (Deep Coral + Teal)
    - tech: Futurista (Electric Violet + Neon Cyan)
    - earth: Natural (Forest Green + Terracotta)
    - ambar: Elegante (Deep Amber + Honey Gold)
  </passo>

  <passo numero="2" nome="Ler roteiro">
    Ler o arquivo de roteiro Markdown.
    Identificar: título, subtítulo, blocos de conteúdo.
  </passo>

  <passo numero="3" nome="Parsear estrutura">
    Extrair do roteiro:
    - Metadados (tema, duração, objetivos)
    - Blocos (### Bloco N: Título)
    - Dentro de cada bloco: tabelas, diagramas, citações, listas
  </passo>

  <passo numero="4" nome="Transformar em slides">
    Aplicar regras de transformação:
    - Metadados → Slide CAPA
    - Início de bloco → Slide SECAO
    - Tabela 2 colunas comparativa → Slide COMPARATIVO
    - Tabela 3 colunas → Slide GRID3
    - Tabela 4+ colunas → Slide GRID4
    - Citação com autor → Slide CITACAO
    - Diagrama/conceito → Slide CONCEITO
    - Lista de itens → Slide LISTA
    - Último bloco → Slide FECHAMENTO
  </passo>

  <passo numero="5" nome="Gerar HTML">
    Executar script de geração:
    ```bash
    python .claude/skills/slides-web/scripts/gerar_html.py \
      --roteiro [ROTEIRO] \
      --output [OUTPUT] \
      --paleta [PALETA]
    ```
  </passo>

  <passo numero="6" nome="Verificar resultado">
    - Confirmar que arquivo HTML foi gerado
    - Informar caminho e tamanho
    - Sugerir abrir no browser para visualizar
  </passo>
</instrucoes>

<conhecimento>
  <topico nome="Paletas de Cores">
    5 paletas profissionais do superposts:

    | ID | Nome | Primária | Secundária | Estilo |
    |----|------|----------|------------|--------|
    | super | SUPER | #194A68 | #BE9C6D | Institucional, corporativo |
    | coral | CORAL SUNSET | #FF5A54 | #5EC2B1 | Vibrante, energético |
    | tech | TECH NOIR | #7851F2 | #00F0FF | Futurista, tecnológico |
    | earth | EARTH TONES | #2D5A3D | #C67B5C | Natural, orgânico |
    | ambar | NOIR ÂMBAR | #8B4000 | #EB9605 | Elegante, sofisticado |

    Cada paleta inclui: primária, secundária, fundo, accent, texto.
  </topico>

  <topico nome="Tipografia">
    Stack de fontes profissionais (Google Fonts):

    Headlines:
    - Outfit (geométrica, moderna)
    - Montserrat (fallback)

    Body:
    - IBM Plex Serif (legível, elegante)
    - Lora (fallback)

    Código:
    - IBM Plex Mono (monospace profissional)
  </topico>

  <topico nome="Padrão Visual (Golden Template)">
    Referência: `content/aula-01/slides/aula-01.html`

    Este arquivo é o **padrão ouro** para o design visual dos slides.
    Qualquer ajuste de estilo deve ser testado nele primeiro.

    **Estilos Padronizados (variáveis internas):**

    ```python
    # Títulos - text-shadow para destaque sobre overlay
    titulo_style = "color: COR_DOURADO; text-shadow: 2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8); font-weight: 700; letter-spacing: 0.5px;"

    # Cards - glassmorphism para separação visual
    card_style = "background: rgba(0,0,0,0.5); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(4px); padding: 20px;"
    ```

    **Aplicação por Tipo de Slide:**

    | Tipo | titulo_style | card_style | Destaque Progressivo |
    |------|--------------|------------|---------------------|
    | CAPA | h1 + subtítulo | - | - |
    | SECAO | h2 | - | - |
    | CONCEITO | h3 | código dentro | - |
    | LISTA | h3 | itens dentro | fragment nos itens |
    | CITACAO | - | blockquote dentro | - |
    | GRID3/GRID4 | h3 | cada coluna | fragment nas colunas |
    | COMPARATIVO | h3 | cada coluna | fragment nas colunas |
    | FECHAMENTO | h2 | centralizado | - |

    **Consistência Visual:**
    - Todos os títulos têm text-shadow duplo (sombra + glow)
    - Todos os cards têm glassmorphism (blur + borda sutil)
    - Subtítulos de cards têm border-bottom na cor dourada
    - Conteúdo fica acima do overlay (z-index: 2)
  </topico>

  <topico nome="Técnicas de Highlight">
    10 classes CSS para destaque de texto:

    | Classe | Efeito |
    |--------|--------|
    | highlight-color-pop | Cor diferente + bold |
    | highlight-underline | Sublinhado colorido |
    | highlight-underline-wavy | Sublinhado ondulado |
    | highlight-box | Caixa sólida ao redor |
    | highlight-box-gradient | Caixa com gradiente |
    | highlight-marker | Marca-texto (highlighter) |
    | highlight-circle | Círculo envolvendo |
    | highlight-bold | Apenas bold |
    | highlight-tag | Label/tag estilo |

    Uso: `<span class="highlight-marker">texto</span>`
  </topico>

  <topico nome="Overlay Vignette">
    Gradiente radial que escurece bordas e foca no centro:
    - Centro: 30% escurecimento
    - Meio: 50% escurecimento
    - Bordas: 70% escurecimento

    Melhora legibilidade sem perder a imagem de fundo.

    Camadas Z-Index (títulos acima do overlay):
    | Camada | Z-Index | Elementos |
    |--------|---------|-----------|
    | Imagem de fundo | 0 | background-image da section |
    | Overlay vignette | 1 | ::before pseudo-element |
    | Conteúdo | 2 | h1, h2, h3, h4, div, p, ul, blockquote, pre |

    Isso garante que títulos fiquem nítidos mesmo sobre o efeito de escurecimento.
  </topico>

  <topico nome="Destaque Progressivo (Spotlight Effect)">
    Técnica para revelar colunas uma a uma em slides GRID3/GRID4.
    Usa fragmentos do Reveal.js com classe `highlight-current-visible`.

    Comportamento:
    1. Estado inicial: todos os cards visíveis mas apagados (30% opacidade)
    2. Clique 1: Card 1 em destaque (100% + glow + scale), cards 2-3 apagados
    3. Clique 2: Card 1 semi-apagado (50%), Card 2 em destaque
    4. Clique 3: Cards 1-2 semi-apagados, Card 3 em destaque
    5. Próximo slide

    CSS aplicado:
    | Estado | Opacidade | Escala | Efeitos |
    |--------|-----------|--------|---------|
    | Inicial (não revelado) | 30% | 0.95 | grayscale(30%) |
    | Atual (spotlight) | 100% | 1.02 | glow + borda dourada |
    | Já mostrado | 50% | 0.98 | grayscale(20%) |

    Implementação:
    ```html
    <div class="fragment highlight-current-visible" data-fragment-index="0">
      Card 1
    </div>
    <div class="fragment highlight-current-visible" data-fragment-index="1">
      Card 2
    </div>
    ```

    O Reveal.js adiciona automaticamente as classes `visible` e `current-fragment`
    conforme o usuário avança na apresentação.
  </topico>

  <topico nome="Demo Interativa de Janela de Contexto">
    **Localização:** `content/aula-01/slides/demo-contexto.html`

    **Propósito:** Visualização pedagógica do problema da janela de contexto em LLMs.
    Permite ao aluno experimentar interativamente como funciona o preenchimento
    e overflow de contexto em modelos de linguagem.

    **7 Tipos de Blocos Disponíveis:**
    | ID | Bloco | Tamanho | Cor |
    |----|-------|---------|-----|
    | 1 | System Prompt | 15% | Roxo (#7c3aed) |
    | 2 | Custom Instructions | 10% | Índigo (#4f46e5) |
    | 3 | Prompt Usuário | 5% | Azul (#2563eb) |
    | 4 | Anexo PDF | 25% | Verde (#059669) |
    | 5 | Busca Web | 20% | Amarelo (#d97706) |
    | 6 | Resposta IA | 15% | Rosa (#db2777) |
    | 7 | Novo Turno | 8% | Cinza (#6b7280) |

    **Funcionalidades Interativas:**
    - Drag-and-drop para adicionar blocos (arrastar da área de seleção)
    - Reordenação de blocos por drag-and-drop
    - Remoção de blocos (botão X)
    - Indicador de custo em tempo real (% e tokens estimados)
    - Barra de preenchimento com cores progressivas:
      - Verde (0-50%): Contexto saudável
      - Amarelo (50-80%): Zona de atenção
      - Vermelho (80-100%): Zona crítica

    **Dois Modos de Operação:**

    | Modo | Ícone | Comportamento ao Atingir 100% |
    |------|-------|-------------------------------|
    | Colapso | 💥 | Tudo falha - representa overflow de contexto |
    | Janela Deslizante | 🔄 | Blocos antigos desbotam gradualmente |

    **Técnica de Fade Gradual (Modo Janela Deslizante):**
    Simula como LLMs "esquecem" contexto antigo via compactação.

    6 níveis de CSS aplicados progressivamente:
    | Classe | Opacidade | Grayscale | Blur | Scale |
    |--------|-----------|-----------|------|-------|
    | fade-level-1 | 70% | 10% | 0px | 0.98 |
    | fade-level-2 | 50% | 20% | 0.5px | 0.97 |
    | fade-level-3 | 35% | 30% | 1px | 0.96 |
    | fade-level-4 | 20% | 50% | 1.5px | 0.95 |
    | fade-level-5 | 10% | 70% | 2px | 0.94 |
    | fade-level-6 | 5% | 90% | 3px | 0.93 |

    Blocos no nível 6 (mais "esquecidos") exibem emoji 💨 indicando
    que estão prestes a ser removidos da "memória".

    **Integração com Reveal.js:**
    Pode ser embarcado via iframe dentro de slides:
    ```html
    <section>
      <h3>Demonstração: Janela de Contexto</h3>
      <iframe src="demo-contexto.html"
              style="width: 100%; height: 600px; border: none;">
      </iframe>
    </section>
    ```
    A demo mantém interatividade completa dentro da apresentação,
    permitindo ao instrutor demonstrar conceitos em tempo real.

    **Casos de Uso Pedagógico:**
    1. Mostrar por que prompts muito longos falham
    2. Demonstrar a diferença entre truncamento e compactação
    3. Ilustrar a importância de CLAUDE.md (sobrevive à compactação)
    4. Explicar custos de tokens de diferentes tipos de conteúdo
  </topico>

  <topico nome="Técnica de Criação de Capas de Impacto">
    **Referência:** `content/aula-01/slides/demo-capa.html`

    Capas de apresentação devem causar impacto imediato. A técnica consiste em
    criar **3 propostas visuais diferentes** para o usuário escolher, variando
    elementos-chave de design.

    **Elementos Variáveis (não hardcoded):**

    | Elemento | Opções | Impacto |
    |----------|--------|---------|
    | Tipografia título | Serifada, Monospace, Geométrica | Personalidade |
    | Fundo | Imagem, Animação, Gradiente | Atmosfera |
    | Ícones | Emojis, Pixel art, SVG | Identidade |
    | Efeitos | Glassmorphism, Glow, Particles | Modernidade |

    **3 Estilos de Fundo Recomendados:**

    | Estilo | Técnica | Quando Usar |
    |--------|---------|-------------|
    | **Cinematic** | Imagem Unsplash + overlay escuro | Institucional, sério |
    | **Matrix Rain** | Canvas + caracteres caindo | Tech, futurista, código |
    | **Glassmorphism** | Formas flutuantes + blur | Moderno, startup |

    **3 Stacks de Tipografia:**

    | Stack | Título | Subtítulo | Personalidade |
    |-------|--------|-----------|---------------|
    | **Clássica** | Playfair Display | Cormorant Garamond | Sofisticado, TED |
    | **Tech** | JetBrains Mono | Space Grotesk | Terminal, hacker |
    | **Moderna** | Sora | Inter | Clean, Apple |

    **Implementação Matrix Rain (PALETA SUPER):**

    ```javascript
    // Cores da PALETA SUPER para Matrix
    const colors = {
        goldBright: 'rgba(190, 156, 109, 0.9)',   // #BE9C6D
        goldMedium: 'rgba(190, 156, 109, 0.6)',
        goldDim: 'rgba(190, 156, 109, 0.25)',
        cream: 'rgba(255, 244, 228, 0.7)',        // #FFF4E4 (highlight raro)
    };

    // Caracteres jurídicos + tech
    const chars = 'ABCDEF...Art.Lei.Proc.Juiz.AI.LLM.MCP.Agent.Claude.SKILL'.split('');
    ```

    **Ícone do Orquestrador (Claude Code):**

    Usar imagem pixel art do Claude Code como orquestrador central:
    ```html
    <div class="agent-node orchestrator">
      <img src="claude-code-icon.png" alt="Claude Code" class="orchestrator-icon">
    </div>
    ```

    CSS para preservar pixel art:
    ```css
    .orchestrator-icon {
        width: 48px;
        height: 48px;
        object-fit: contain;
        image-rendering: pixelated;  /* Mantém nitidez do pixel art */
        filter: drop-shadow(0 0 8px rgba(190, 156, 109, 0.5));
    }
    ```

    **Processo de Brainstorming (CLAUDE.md):**

    1. Criar 3 propostas HTML separadas (demo-capa-proposta-[a/b/c].html)
    2. Mostrar screenshots de cada uma ao usuário
    3. Usuário escolhe ou pede híbrido
    4. Criar versão final com ajustes
    5. Transferir para demo-capa.html (arquivo referenciado pelo aula-XX.html)
    6. Limpar arquivos de proposta ou manter como referência

    **Arquivos de Referência:**
    - `demo-capa-proposta-a.html` - Cinematic (serifada + imagem)
    - `demo-capa-proposta-b.html` - Matrix Rain (monospace + animação)
    - `demo-capa-proposta-c.html` - Glassmorphism (geométrica + blur)
    - `demo-capa-matrix-super.html` - Matrix com PALETA SUPER (aprovado)
    - `demo-capa.html` - Versão final em uso
  </topico>

  <topico nome="Banco de Imagens">
    ~40 imagens curadas do Unsplash por categoria:

    | Tipo Slide | Tema das Imagens |
    |------------|------------------|
    | CAPA | Terra do espaço, circuitos, AI |
    | SECAO | Galáxia, código, laptop dev |
    | CONCEITO | Syntax highlighting, GitHub |
    | CITACAO | Abstract fluido, gradientes |
    | LISTA | Geométrico 3D, linhas neon |
    | GRID | Server room, dashboards |
    | COMPARATIVO | Aurora, via láctea |
    | FECHAMENTO | Espaço, nebulosas |

    Seleção determinística por hash do título (mesmo slide = mesma imagem).
  </topico>

  <topico nome="Templates de Quote (Citações)">
    **Referência:** `content/aula-01/slides/demo-quote-*.html`

    3 templates alternativos para slides de citação, todos com PALETA SUPER:

    | Template | Layout | Estilo | Quando Usar |
    |----------|--------|--------|-------------|
    | **Proposta A** | Split screen (texto/foto) | Jornalístico | Equilibrar texto e imagem do autor |
    | **Proposta B** | Card central glassmorphism | Apple keynote | Foco na citação, visual moderno |
    | **Proposta C** | Tipográfico editorial | Revista/impacto | Citações curtas, impacto visual |

    **Elementos Configuráveis (não hardcoded):**

    | Elemento | Variável | Exemplo |
    |----------|----------|---------|
    | Foto do autor | `url('nome-autor.jpg')` | `andrej-karpathy.jpg` |
    | Texto da citação | Conteúdo do `.quote-text` | Qualquer citação |
    | Nome do autor | `.author-name` | "Andrej Karpathy" |
    | Credenciais | `.author-title` | "Ex-Director of AI @ Tesla" |
    | Destaques | `<span class="highlight">` | Datas, termos-chave |
    | Badge inferior | `.decade-badge` | Tema da citação |

    **Proposta B (Recomendada) - Glassmorphism:**

    ```html
    <div class="quote-card">
      <img src="FOTO.jpg" alt="AUTOR" class="author-photo">
      <p class="quote-text">
        "<span class="highlight">DESTAQUE</span> texto da citação..."
      </p>
      <div class="decorative-bar"></div>
      <div class="author-info">
        <div class="author-name">NOME DO AUTOR</div>
        <div class="author-title">CREDENCIAIS</div>
      </div>
      <div class="decade-badge">
        <span>TEMA DA CITAÇÃO</span>
      </div>
    </div>
    ```

    **Arquivos de Referência:**
    - `demo-quote-proposta-a.html` - Split screen
    - `demo-quote-proposta-b.html` - Glassmorphism (recomendado)
    - `demo-quote-proposta-c.html` - Tipográfico editorial
    - `demo-quote-karpathy.html` - Exemplo em uso (Karpathy)
  </topico>

  <topico nome="Templates de 3 Colunas (Paradigmas)">
    **Referência:** `content/aula-01/slides/demo-paradigmas*.html`

    3 templates alternativos para slides de comparação em 3 colunas, todos com PALETA SUPER.
    Sistema de **Progressive Spotlight**: cada clique destaca uma coluna por vez.

    | Template | Layout | Estilo | Quando Usar |
    |----------|--------|--------|-------------|
    | **Proposta A** | Cards glassmorphism + números grandes | Elegante, Apple | Comparações conceituais |
    | **Proposta B** | Timeline com marcadores circulares | Cronológico, editorial | Evolução temporal |
    | **Proposta C** | Minimal com ícones grandes | Clean, startups | Foco no essencial |

    **Proposta A (Recomendada) - Glassmorphism Elegante:**

    ```html
    <div class="paradigm-card" data-number="01">
      <div class="card-header">
        <div class="card-icon">💬</div>
        <div class="card-year">2023</div>
        <div class="card-product">Nome do Produto</div>
        <div class="card-company">Empresa</div>
      </div>
      <div class="knowledge-label">tipo de conhecimento</div>
      <div class="knowledge-badge">CATEGORIA</div>
      <div class="card-quote">"Descrição curta"</div>
      <div class="features">
        <div class="feature">
          <span class="feature-icon">🧠</span>
          <span class="feature-text">Feature 1</span>
        </div>
        <!-- mais features -->
      </div>
    </div>
    ```

    **Características Visuais da Proposta A:**
    | Elemento | CSS | Efeito |
    |----------|-----|--------|
    | Número de fundo | `::before` com `data-number` | 01, 02, 03 sutis |
    | Card base | `backdrop-filter: blur(20px)` | Glassmorphism |
    | Spotlight | `scale(1.02)` + `box-shadow` glow | Destaque dourado |
    | Dimmed | `opacity: 0.2` + `grayscale(0.5)` | Esmaecimento |
    | Features | `border-left: 3px solid gold` | Barra lateral dourada |

    **4 Estágios do Progressive Spotlight:**
    | Stage | Estado | Cards |
    |-------|--------|-------|
    | 0 | Spotlight Card 1 | 1=destaque, 2-3=dimmed |
    | 1 | Spotlight Card 2 | 2=destaque, 1,3=dimmed |
    | 2 | Spotlight Card 3 | 3=destaque, 1-2=dimmed |
    | 3 | Convergência | Todos visíveis + seção inferior |

    **Seção de Convergência (Stage 3):**
    ```html
    <div class="convergence-section">
      <div class="convergence-arrows">↓ ↓ ↓</div>
      <div class="convergence-box">
        <div class="convergence-title">TÍTULO</div>
        <div class="convergence-text">Texto explicativo</div>
        <div class="convergence-question">"Pergunta provocativa"</div>
      </div>
    </div>
    ```

    **Arquivos de Referência:**
    - `demo-paradigmas-proposta-a.html` - Glassmorphism (recomendado)
    - `demo-paradigmas-proposta-b.html` - Timeline Editorial
    - `demo-paradigmas-proposta-c.html` - Minimal Focus
    - `demo-paradigmas.html` - Versão final em uso
  </topico>

  <topico nome="Tipos de Slide">
    10 tipos disponíveis (incluindo QUOTE):
    1. CAPA - Título principal + subtítulo
    2. SECAO - Título de bloco (transição)
    3. CONCEITO - Título + código/diagrama
    4. LISTA - Título + bullets com highlight progressivo
    5. GRID3 - 3 colunas
    6. GRID4 - 4 colunas
    7. CITACAO - Quote + autor
    8. COMPARATIVO - 2 colunas lado a lado
    9. FECHAMENTO - Call-to-action final
  </topico>
</conhecimento>

<scripts>
  <script nome="Gerar HTML">
    <comando>python .claude/skills/slides-web/scripts/gerar_html.py --roteiro ROTEIRO --output OUTPUT --paleta PALETA</comando>
    <parametros>
      | Parâmetro | Tipo | Obrigatório | Descrição |
      |-----------|------|-------------|-----------|
      | `--roteiro` | string | Sim | Caminho do roteiro .md |
      | `--output` | string | Sim | Caminho do HTML de saída |
      | `--paleta` | choice | Não | super, coral, tech, earth, ambar (default: super) |
      | `--dry-run` | flag | Não | Apenas mostrar estrutura |
      | `--no-images` | flag | Não | Não incluir imagens de fundo |
      | `--list-paletas` | flag | Não | Listar paletas disponíveis |
    </parametros>
    <saida>Arquivo HTML com apresentação Reveal.js</saida>
  </script>

  <script nome="Listar Paletas">
    <comando>python .claude/skills/slides-web/scripts/gerar_html.py --list-paletas</comando>
    <saida>Lista das 5 paletas com cores primárias e secundárias</saida>
  </script>
</scripts>

<exemplos>
  <exemplo cenario="Gerar slides com paleta padrão">
    <entrada>Crie slides para content/aula-01/roteiro-aula-01.md</entrada>
    <saida>
      === GERADOR DE SLIDES WEB ===

      Roteiro: docs/.../roteiro-aula-01.md
      Output: docs/.../slides/aula-01.html
      Paleta: SUPER (Institucional)

      [1/4] Parseando roteiro...
        Título: A Era dos Agentes
        Blocos: 8

      [2/4] Transformando em slides...
        Slides gerados: 26

      [3/4] Gerando URLs de imagens...
        [1/26] CAPA: OK
        ...

      [4/4] Gerando HTML...

      ✓ Apresentação gerada: docs/.../slides/aula-01.html
    </saida>
  </exemplo>

  <exemplo cenario="Gerar com paleta futurista">
    <entrada>Crie slides com tema tech noir</entrada>
    <saida>
      python .claude/skills/slides-web/scripts/gerar_html.py \
        --roteiro docs/.../roteiro-aula-01.md \
        --output docs/.../slides/aula-01-tech.html \
        --paleta tech

      Paleta: TECH NOIR (Futurista)
      Cores: Electric Violet (#7851F2) + Neon Cyan (#00F0FF)
    </saida>
  </exemplo>

  <exemplo cenario="Listar paletas disponíveis">
    <entrada>Quais paletas de cores estão disponíveis?</entrada>
    <saida>
      === PALETAS DISPONÍVEIS ===

        super    - SUPER (Institucional)
                   Primária: #194A68  Secundária: #BE9C6D
        coral    - CORAL SUNSET (Vibrante)
                   Primária: #FF5A54  Secundária: #5EC2B1
        tech     - TECH NOIR (Futurista)
                   Primária: #7851F2  Secundária: #00F0FF
        earth    - EARTH TONES (Natural)
                   Primária: #2D5A3D  Secundária: #C67B5C
        ambar    - NOIR ÂMBAR (Elegante)
                   Primária: #8B4000  Secundária: #EB9605
    </saida>
  </exemplo>
</exemplos>

<casos_de_borda>
  <caso nome="Roteiro sem blocos">
    <problema>Arquivo não tem estrutura ### Bloco</problema>
    <solucao>Usar H2 (##) como separadores de seção. Se não houver, criar slide único com conteúdo.</solucao>
  </caso>

  <caso nome="Imagens não carregam">
    <problema>URLs do Unsplash bloqueadas ou offline</problema>
    <solucao>Usar --no-images para gerar sem imagens. Overlay vignette ainda funciona sobre fundo sólido.</solucao>
  </caso>

  <caso nome="Conteúdo muito longo">
    <problema>Bloco com mais de 4 elementos significativos</problema>
    <solucao>Limitar a 4 slides por bloco. Priorizar: citações > tabelas > diagramas > listas.</solucao>
  </caso>

  <caso nome="Markdown nos textos">
    <problema>Símbolos ** ou * aparecendo no slide</problema>
    <solucao>Função limpar_markdown() remove automaticamente formatação Markdown.</solucao>
  </caso>
</casos_de_borda>

<filosofia_slides>
  <principio nome="Propósito Único">
    Cada slide deve ter UM propósito claro. Não existe slide "informativo genérico".
  </principio>

  <tipos_permitidos>
    | Tipo | Propósito | Exemplo |
    |------|-----------|---------|
    | MOSTRA | Visualiza algo (demo, diagrama, código) | demo-paradigmas.html |
    | TOPIFICA | Marca transição de seção | "02 - O Problema" |
    | QUOTE | Citação de autoridade externa | Karpathy, Bezos |
  </tipos_permitidos>

  <anti_patterns>
    **NUNCA criar slides com:**
    - Texto narrativo que substitui a voz do professor
    - Bullet points que seriam DITOS, não MOSTRADOS
    - Explicações textuais de conceitos (use demos visuais)
    - "Citações" do próprio professor/instrutor
    - Parágrafos que o aluno leria em vez de ouvir

    **Regra de Ouro:**
    > "Se o conteúdo seria DITO pelo professor durante a aula,
    > ele NÃO deve estar escrito no slide."

    **Exceção única:** Quotes de autoridades externas (especialistas, autores, pesquisadores).
    Essas citações trazem credibilidade externa e são mostradas para impacto.
  </anti_patterns>

  <teste_proposito>
    Antes de criar um slide, pergunte:
    1. Este slide MOSTRA algo visualmente? → OK
    2. Este slide apenas NOMEIA uma seção? → OK
    3. Este slide é uma QUOTE de autoridade externa? → OK
    4. Este slide tem texto que o professor DIRIA? → ELIMINAR
  </teste_proposito>
</filosofia_slides>

<restricoes>
  <nunca>
    - Gerar mais de 30 slides por apresentação
    - Usar fontes que não sejam Google Fonts ou web-safe
    - Incluir JavaScript externo além do Reveal.js
    - Hardcodar caminhos absolutos no HTML
    - Usar imagens aleatórias (sempre usar banco curado)
    - Criar slides com texto que o professor DIRIA (use demos visuais)
    - Usar window.innerWidth/Height em canvas dentro de iframes
  </nunca>

  <sempre>
    - Aplicar overlay vignette sobre imagens de fundo
    - Usar cores da paleta selecionada via variáveis CSS
    - Gerar HTML auto-contido (CDN para libs e fontes)
    - Limpar símbolos Markdown dos textos
    - Manter seleção de imagem determinística (hash do título)
    - Implementar detectEmbedMode() em todas as demos
    - Usar document.documentElement.clientWidth/Height para canvas em iframes
  </sempre>
</restricoes>

<!-- ================================================================
     SEÇÃO PRINCIPAL: ARTESANIA VISUAL DIDÁTICA
     Documentação do processo criativo e filosofia de design
     extraída da análise dos demos da aula-01.
     ================================================================ -->

<artesania_visual_didatica>
  <manifesto>
    ## A Arte de Mostrar, Não Contar

    Cada slide é uma **mini-experiência sensorial**. O objetivo não é informar,
    é **transformar a compreensão** do espectador através da interação visual.

    > "O professor FALA. O slide MOSTRA. Nunca o inverso."

    ### Os 3 Únicos Propósitos de um Slide

    | Propósito | Pergunta | Exemplo |
    |-----------|----------|---------|
    | **MOSTRAR** | "Isso visualiza algo?" | demo-paradigmas.html, demo-contexto.html |
    | **TOPIFICAR** | "Isso marca uma transição?" | Slide "02 - O Problema" |
    | **CITAR** | "Isso traz autoridade externa?" | demo-quote-karpathy.html |

    Se um slide não passa nesse teste, ele não deveria existir.

    ### A Regra de Ouro

    > "Se o conteúdo seria DITO pelo professor durante a aula,
    > ele NÃO deve estar escrito no slide."

    Bullet points narrativos são proibidos. Explicações textuais são proibidas.
    O slide mostra; o professor contextualiza.
  </manifesto>

  <paleta_super>
    ## Paleta SUPER - Sistema de Cores Unificado

    Todas as demos usam o mesmo sistema de variáveis CSS para consistência visual.

    ### Variáveis Obrigatórias

    ```css
    :root {
        /* Cores primárias */
        --super-gold: #BE9C6D;          /* Dourado principal - CTAs, destaques */
        --super-gold-light: #d4b896;    /* Dourado claro - hover, glow */
        --super-gold-dark: #9a7d52;     /* Dourado escuro - gradientes */
        --super-cream: #FFF4E4;         /* Creme - texto principal */
        --super-bg-dark: #0a0a12;       /* Fundo escuro - base */
        --super-bg-section: #1a1a2e;    /* Fundo seção - secundário */

        /* Cores semânticas */
        --super-green: #4ade80;         /* Verde - extensões, sucesso */
        --super-red: #ef4444;           /* Vermelho - erro, perigo */
        --super-amber: #fbbf24;         /* Âmbar - aviso, atenção */

        /* Variações de opacidade */
        --super-gold-dim: rgba(190, 156, 109, 0.6);
        --super-gold-subtle: rgba(190, 156, 109, 0.3);
        --super-gold-ghost: rgba(190, 156, 109, 0.15);
    }
    ```

    ### Aplicação por Elemento

    | Elemento | Cor | Variável |
    |----------|-----|----------|
    | Títulos principais | Dourado | `--super-gold` |
    | Texto corpo | Creme | `--super-cream` |
    | Fundo base | Escuro | `--super-bg-dark` |
    | Bordas de cards | Dourado sutil | `--super-gold-subtle` |
    | Destaques especiais | Verde | `--super-green` |
    | Badges exclusivos | Verde | `--super-green` |
    | Glow effects | Dourado light | `--super-gold-light` |
  </paleta_super>

  <tipografia_tripartite>
    ## Sistema Tipográfico de 3 Famílias

    ### A Tríade Tipográfica

    | Função | Família | Peso | Uso |
    |--------|---------|------|-----|
    | **Headlines** | Playfair Display | 400-700 | Títulos, citações, impacto |
    | **Corpo** | Inter | 300-600 | Texto, descrições, labels |
    | **Código** | JetBrains Mono | 400-500 | Técnico, badges, monospace |

    ### Import do Google Fonts

    ```html
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    ```

    ### Aplicação em CSS

    ```css
    /* Títulos - elegância serifada */
    .title h1, .quote-text {
        font-family: 'Playfair Display', Georgia, serif;
    }

    /* Corpo - legibilidade sans-serif */
    body, .description, .label {
        font-family: 'Inter', -apple-system, sans-serif;
    }

    /* Técnico - monospace profissional */
    .code, .badge, .number {
        font-family: 'JetBrains Mono', 'Consolas', monospace;
    }
    ```

    ### Personalidade de Cada Família

    - **Playfair Display**: Sofisticação, autoridade, elegância editorial
    - **Inter**: Clareza, modernidade, neutralidade funcional
    - **JetBrains Mono**: Precisão, tecnicidade, confiabilidade
  </tipografia_tripartite>

  <glassmorphism>
    ## Glassmorphism - Linguagem Visual de Camadas

    ### O Que É

    Efeito de "vidro fosco" que cria profundidade e hierarquia visual
    através de blur, transparência e bordas sutis.

    ### Receita Base

    ```css
    .glass-card {
        background: rgba(255, 255, 255, 0.03);   /* Fundo quase transparente */
        backdrop-filter: blur(20px);             /* Blur do fundo */
        -webkit-backdrop-filter: blur(20px);    /* Safari */
        border: 1px solid rgba(255, 255, 255, 0.1);  /* Borda sutil */
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);  /* Sombra profunda */
    }
    ```

    ### Variações por Intensidade

    | Nível | Background Alpha | Blur | Quando Usar |
    |-------|------------------|------|-------------|
    | **Leve** | 0.02-0.03 | 10px | Cards secundários |
    | **Médio** | 0.05-0.08 | 20px | Cards principais |
    | **Intenso** | 0.10-0.15 | 30px | Destaque, spotlight |

    ### Exemplo: Quote Card

    ```css
    .quote-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        padding: 60px 80px;
    }
    ```
  </glassmorphism>

  <progressive_spotlight>
    ## Progressive Spotlight - Revelação Controlada

    ### Conceito

    Técnica de foco narrativo onde elementos são revelados um a um,
    com os demais "esmaecidos" (dimmed) para direcionar atenção.

    ### Estados de um Card

    | Estado | Classe CSS | Opacidade | Scale | Filter |
    |--------|------------|-----------|-------|--------|
    | **Inicial** | (nenhuma) | 0.25 | 0.95 | grayscale(50%) |
    | **Highlighted** | `.highlighted` | 1.0 | 1.03 | none + glow |
    | **Dimmed** | `.dimmed` | 0.25 | 0.95 | grayscale(50%) |
    | **Visible** | `.all-visible` | 1.0 | 1.0 | none |

    ### CSS Base

    ```css
    /* Estado dimmed (esmaecido) */
    .card.dimmed {
        opacity: 0.25;
        transform: scale(0.95);
        filter: grayscale(50%);
        transition: all 0.4s ease;
    }

    /* Estado highlighted (em destaque) */
    .card.highlighted {
        opacity: 1;
        transform: translateY(-8px) scale(1.03);
        filter: none;
        border-color: var(--super-gold);
        box-shadow: 0 15px 50px rgba(190, 156, 109, 0.3),
                    0 0 30px rgba(190, 156, 109, 0.15);
    }
    ```

    ### Navegação por Stages

    ```javascript
    let currentState = 0;
    const totalCards = 3;

    function updateDisplay() {
        cards.forEach((card, i) => {
            card.classList.remove('all-visible', 'dimmed', 'highlighted');

            if (currentState === 0) {
                // Stage 0: todos visíveis
                card.classList.add('all-visible');
            } else {
                // Stages 1-N: spotlight no card atual
                if (i === currentState - 1) {
                    card.classList.add('highlighted');
                } else {
                    card.classList.add('dimmed');
                }
            }
        });
    }

    document.body.addEventListener('click', () => {
        currentState = (currentState + 1) % (totalCards + 1);
        updateDisplay();
    });
    ```

    ### Indicador de Navegação (Nav Dots)

    ```html
    <div class="nav-indicator">
        <div class="nav-dot active" data-index="0" title="Todos"></div>
        <div class="nav-dot" data-index="1" title="Card 1"></div>
        <div class="nav-dot" data-index="2" title="Card 2"></div>
        <div class="nav-dot" data-index="3" title="Card 3"></div>
    </div>
    ```
  </progressive_spotlight>

  <embed_mode>
    ## Embed Mode - Adaptação para iframes

    ### Por Que É Necessário

    Demos HTML são embutidas em Reveal.js via iframe. O espaço disponível
    é menor que fullscreen, então precisamos de estilos compactos.

    ### Detecção Automática

    ```javascript
    function detectEmbedMode() {
        try {
            if (window.self !== window.top) {
                document.body.classList.add('embed-mode');
            }
        } catch (e) {
            // Cross-origin iframe
            document.body.classList.add('embed-mode');
        }
    }
    detectEmbedMode();
    ```

    ### Padrão de Estilos Compactos

    ```css
    /* Modo embed - reduções proporcionais */
    body.embed-mode { padding: 15px 30px; }
    body.embed-mode .title h1 { font-size: 2em; }  /* De 3em para 2em */
    body.embed-mode .card { padding: 25px; }       /* De 45px para 25px */
    body.embed-mode .icon { font-size: 2em; }      /* De 4em para 2em */
    body.embed-mode .nav-indicator { bottom: 15px; }
    ```

    ### Regra de Proporção

    No embed mode, todos os tamanhos são reduzidos em ~30-40%:
    - Fontes: ×0.65-0.75
    - Paddings: ×0.55-0.65
    - Gaps: ×0.70-0.80
    - Ícones: ×0.50-0.60
  </embed_mode>

  <canvas_em_iframes>
    ## Canvas em iframes - Fix Obrigatório

    ### O Problema

    `window.innerWidth/Height` retorna valores incorretos quando o
    canvas está dentro de um iframe. O canvas fica com dimensões erradas.

    ### A Solução

    Usar `document.documentElement.clientWidth/Height`:

    ```javascript
    // ❌ ERRADO - não funciona em iframes
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ✅ CORRETO - funciona em iframes e standalone
    function resizeCanvas() {
        canvas.width = document.documentElement.clientWidth || window.innerWidth;
        canvas.height = document.documentElement.clientHeight || window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    ```

    ### Onde Aplicar

    - Efeito Matrix Rain (demo-capa-matrix-super.html)
    - Qualquer animação canvas
    - Backgrounds procedurais
  </canvas_em_iframes>

  <staggered_animations>
    ## Animações Staggered - Entrada Escalonada

    ### Conceito

    Elementos entram em sequência, criando ritmo visual e guiando o olhar.

    ### Técnica CSS

    ```css
    .card {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.5s ease-out forwards;
    }

    /* Delay escalonado por índice */
    .card:nth-child(1) { animation-delay: 0.1s; }
    .card:nth-child(2) { animation-delay: 0.15s; }
    .card:nth-child(3) { animation-delay: 0.2s; }
    .card:nth-child(4) { animation-delay: 0.25s; }

    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    ```

    ### Variações de Animação

    | Nome | Movimento | Quando Usar |
    |------|-----------|-------------|
    | `fadeUp` | De baixo para cima | Cards, listas |
    | `fadeDown` | De cima para baixo | Headers, títulos |
    | `fadeIn` | Apenas opacidade | Elementos sutis |
    | `scaleIn` | De menor para maior | Destaque central |
    | `slideInLeft` | Da esquerda | Comparações lado A |
    | `slideInRight` | Da direita | Comparações lado B |

    ### Timing Recomendado

    - **Duração base**: 0.5-0.8s
    - **Delay entre elementos**: 0.05-0.1s
    - **Easing**: `ease-out` (entrada), `ease-in-out` (loop)
  </staggered_animations>

  <interatividade>
    ## Padrões de Interatividade

    ### Tipos de Interação

    | Tipo | Exemplo | Complexidade |
    |------|---------|--------------|
    | **Click-to-advance** | demo-paradigmas.html | Baixa |
    | **Tabs** | demo-capacidades-proposta-a.html | Média |
    | **Drag-and-drop** | demo-contexto.html | Alta |
    | **Playback controls** | demo-agentes.html | Alta |

    ### Click-to-Advance (Spotlight)

    ```javascript
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.nav-dot')) return; // Ignora clique nos dots
        nextState();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextState();
        } else if (e.key === 'ArrowLeft') {
            prevState();
        }
    });
    ```

    ### Tabs Toggle

    ```javascript
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.dataset.mode;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Atualiza conteúdo
            if (mode === 'desktop') {
                exclusiveItems.forEach((item, i) => {
                    setTimeout(() => item.classList.add('visible'), i * 80);
                });
            } else {
                exclusiveItems.forEach(item => item.classList.remove('visible'));
            }
        });
    });
    ```

    ### Comunicação com Reveal.js (Parent)

    ```javascript
    // No final de uma demo, avançar slide do parent
    if (window.parent !== window) {
        window.parent.postMessage({ type: 'slideAction', action: 'next' }, '*');
    }
    ```
  </interatividade>

  <catalogo_demos>
    ## Catálogo de Demos - Referência Completa

    ### Demos da Aula 01

    | Demo | Tipo | Técnicas | Propósito |
    |------|------|----------|-----------|
    | `demo-capa-matrix-super.html` | Capa | Canvas matrix rain, paleta SUPER | Impacto inicial |
    | `demo-quote-karpathy.html` | Quote | Glassmorphism, foto autor | Citação autoridade |
    | `demo-paradigmas.html` | Grid 3 | Progressive spotlight, convergência | Comparação evolutiva |
    | `demo-contexto.html` | Interativa | Drag-drop, barra fill, modos | Visualizar overflow |
    | `demo-agentes-proposta-i.html` | Fórmula | Loop triangular, SVG animado | Definição de agente |
    | `demo-agentes.html` | Interativa | Playback, drag-drop, paths | Orquestrador em ação |
    | `demo-insights-proposta-a.html` | Grid 6 | Spotlight individual | Capacidades agênticas |
    | `demo-capacidades-proposta-a.html` | Tabs | Web/Desktop toggle, badges | Comparação features |

    ### Estrutura de Arquivos por Demo

    ```
    slides/
    ├── aula-01.html              # Apresentação principal (Reveal.js)
    ├── demo-capa-matrix-super.html   # Capa com Matrix
    ├── demo-quote-karpathy.html      # Quote Karpathy
    ├── demo-paradigmas.html          # 3 Paradigmas
    ├── demo-contexto.html            # Janela de Contexto
    ├── demo-agentes-proposta-i.html  # Fórmula do Agente
    ├── demo-agentes.html             # Orquestrador
    ├── demo-insights-proposta-a.html # O Que Agentes Fazem
    ├── demo-capacidades-proposta-a.html  # Web vs Desktop
    ├── andrej-karpathy.jpg           # Foto para quote
    └── claude-code-icon.png          # Ícone orquestrador
    ```
  </catalogo_demos>

  <processo_criativo>
    ## Processo de Criação de Demos

    ### Fluxo de Brainstorming (Obrigatório)

    1. **Identificar o conceito** a ser visualizado
    2. **Criar 2-3 propostas** HTML separadas (`demo-*-proposta-[a/b/c].html`)
    3. **Mostrar ao usuário** via screenshot ou browser
    4. **Coletar feedback** e escolha
    5. **Refinar a escolha** com ajustes
    6. **Promover para produção** (`demo-*.html` final)

    ### Checklist de Qualidade

    Para cada demo, verificar:

    - [ ] Usa variáveis CSS da Paleta SUPER?
    - [ ] Tipografia das 3 famílias (Playfair/Inter/JetBrains)?
    - [ ] Tem detectEmbedMode() implementado?
    - [ ] Estilos embed-mode reduzem tamanhos em 30-40%?
    - [ ] Animações têm timing < 1s e easing adequado?
    - [ ] Canvas usa clientWidth/Height (não innerWidth)?
    - [ ] Navegação por clique E teclado funciona?
    - [ ] Não tem texto que o professor DIRIA?

    ### Anti-Patterns (NUNCA fazer)

    | Anti-Pattern | Por Quê É Ruim |
    |--------------|----------------|
    | Bullet points narrativos | Professor FALA, slide MOSTRA |
    | Texto explicativo | Substitui a voz do professor |
    | Animações > 2s | Perde ritmo da apresentação |
    | Cores fora da paleta | Quebra identidade visual |
    | Fontes aleatórias | Perde personalidade |
    | Canvas com innerWidth | Não funciona em iframe |
    | Demo sem embed-mode | Fica cortado no Reveal |
  </processo_criativo>
</artesania_visual_didatica>

<referencias>
  - Reveal.js: https://revealjs.com/
  - Google Fonts: https://fonts.google.com/
  - Unsplash: https://unsplash.com/ (fonte das imagens curadas)
  - Superposts: Projeto fonte das paletas e tipografia
</referencias>

<pre_requisitos>
  - Python 3.8+ - `python --version`
  - requests - `pip install requests`
  - Conexão internet - Para carregar Google Fonts e imagens Unsplash
</pre_requisitos>
