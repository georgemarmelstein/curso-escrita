# PLAYBOOK DE DESIGN DE SLIDES
## Artesania Visual Didática v3.0 - Guia Completo

> *"O professor FALA. O slide MOSTRA. Nunca o inverso."*

Este playbook documenta a **razão de ser** de cada tipo de slide do curso de Sistemas Agênticos. Não é apenas um manual técnico — é um guia filosófico e artístico para criar experiências visuais transformadoras.

---

## PARTE I: FUNDAMENTOS FILOSÓFICOS

### 1.1 A Regra de Ouro

```
┌─────────────────────────────────────────────────────────────────┐
│  "Se o conteúdo seria DITO pelo professor durante a aula,       │
│   ele NÃO deve estar escrito no slide."                         │
└─────────────────────────────────────────────────────────────────┘
```

**Por que isso importa:**
- O cérebro humano processa imagens 60.000x mais rápido que texto
- Slides com texto competem com a voz do professor
- Bullet points narrativos forçam o aluno a escolher: ler ou ouvir
- Demos interativas criam memória muscular e compreensão profunda

### 1.2 Os 3 Únicos Propósitos de um Slide

Todo slide deve passar neste teste. Se não passar, **não deveria existir**.

| Propósito | Pergunta de Teste | Exemplos |
|-----------|-------------------|----------|
| **MOSTRAR** | "Isso visualiza algo?" | demo-paradigmas, demo-contexto, demo-agentes |
| **TOPIFICAR** | "Isso marca uma transição?" | "02 - O Problema", "Bloco III" |
| **CITAR** | "Isso traz autoridade externa?" | demo-quote-karpathy, demo-quote-anthropic |

**Anti-Pattern Absoluto:** Slides com texto explicativo, bullet points narrativos ou parágrafos que seriam LIDOS pelo aluno.

### 1.3 A Filosofia "Duas Mentes, Uma Obra"

A criação de slides não é automação — é **artesania colaborativa**.

| O Humano Contribui | A IA Contribui |
|--------------------|----------------|
| Julgamento estético final | Gera propostas visuais alternativas |
| Escolhas de prioridade | Aplica padrões técnicos (CSS, HTML) |
| Contexto pedagógico | Mantém consistência visual |
| Aprovação explícita | Documenta decisões para reuso |

**Processo obrigatório:**
1. Propor 2-3 alternativas
2. Aguardar escolha explícita
3. Implementar apenas a escolhida
4. Validar visualmente
5. Só avançar após aprovação

---

## PARTE II: IDENTIDADE VISUAL

### 2.1 PALETA SUPER - Sistema de Cores Unificado

```css
:root {
    /* CORES PRIMÁRIAS */
    --super-gold: #BE9C6D;          /* Dourado - CTAs, destaques, títulos */
    --super-gold-light: #d4b896;    /* Dourado claro - hover, glow */
    --super-gold-dark: #9a7d52;     /* Dourado escuro - gradientes */
    --super-cream: #FFF4E4;         /* Creme quente - texto principal */
    --super-bg-dark: #0a0a12;       /* Preto profundo - fundo base */
    --super-bg-section: #1a1a2e;    /* Azul-preto - fundo seção */

    /* CORES SEMÂNTICAS */
    --super-green: #4ade80;         /* Verde - sucesso, extensões */
    --super-red: #ef4444;           /* Vermelho - erro, strikethrough */
    --super-amber: #fbbf24;         /* Âmbar - aviso, atenção */

    /* VARIAÇÕES DE OPACIDADE */
    --super-gold-dim: rgba(190, 156, 109, 0.6);
    --super-gold-subtle: rgba(190, 156, 109, 0.3);
    --super-gold-ghost: rgba(190, 156, 109, 0.15);
}
```

**Aplicação por Elemento:**

| Elemento | Cor | Variável |
|----------|-----|----------|
| Títulos principais | Dourado | `--super-gold` |
| Texto corpo | Creme | `--super-cream` |
| Fundo base | Escuro | `--super-bg-dark` |
| Bordas de cards | Sutil | `--super-gold-subtle` |
| Highlights especiais | Verde | `--super-green` |
| Glow effects | Light | `--super-gold-light` |

### 2.2 Tipografia Tripartite

Três famílias com papéis específicos — **NUNCA misturar**.

| Família | Função | Peso | Personalidade |
|---------|--------|------|---------------|
| **Playfair Display** | Títulos, citações | 400-700 | Sofisticação, autoridade, elegância |
| **Inter** | Corpo, labels, descrições | 300-600 | Clareza, modernidade, neutralidade |
| **JetBrains Mono** | Código, badges, números | 400-500 | Precisão, tecnicidade, confiabilidade |

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**CSS Application:**
```css
h1, .quote-text { font-family: 'Playfair Display', Georgia, serif; }
body, .description { font-family: 'Inter', -apple-system, sans-serif; }
.code, .badge { font-family: 'JetBrains Mono', 'Consolas', monospace; }
```

---

## PARTE III: TAXONOMIA DE SLIDES

### 3.1 SLIDE: CAPA

**Propósito:** Impacto inicial. Definir tom. Capturar atenção imediata.

**Arquivo de Referência:** `demo-capa-terminal.html`

#### Anatomia

```
┌──────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ [BACKGROUND: Imagem atmosférica + radial overlay escuro]  │  │
│  │                                                            │  │
│  │         // AULA 02                                         │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │ [TERMINAL WINDOW]                                   │   │  │
│  │  │ $ claude                                            │   │  │
│  │  │ Claude Code v1.0.0                                  │   │  │
│  │  │ # Comentário descritivo                             │   │  │
│  │  │ > Olá! Como posso ajudar? █                         │   │  │
│  │  └─────────────────────────────────────────────────────┘   │  │
│  │                                                            │  │
│  │              PRIMEIROS PASSOS                              │  │
│  │              CLAUDE CODE                                   │  │
│  │                   ─────                                    │  │
│  │       Instalação, configuração e primeiros comandos        │  │
│  │                                                            │  │
│  │  [📚 Curso] [⚖ Público] [👤 Instrutor]                    │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

#### Especificações Técnicas

| Elemento | CSS/Técnica | Propósito |
|----------|-------------|-----------|
| **Background** | `background-image` + `radial-gradient` overlay | Criar atmosfera e foco central |
| **Terminal Window** | Mock com dots coloridos + animação typing | Reforçar tema técnico |
| **Título principal** | Gradient text animado + drop-shadow | Impacto visual máximo |
| **Barra decorativa** | `linear-gradient` horizontal | Separação elegante |
| **Badges inferiores** | Glassmorphism cards | Informação contextual |

#### CSS Crítico

```css
/* Gradient text animado */
.title-line.large {
    background: linear-gradient(135deg, #BE9C6D 0%, #d4b896 40%, #BE9C6D 70%, #9a7d52 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 4s ease infinite;
    filter: drop-shadow(0 0 30px rgba(190, 156, 109, 0.4));
}

/* Terminal typing animation */
.terminal-line {
    opacity: 0;
    animation: typeLine 0.5s ease forwards;
}
.terminal-line:nth-child(1) { animation-delay: 0.8s; }
.terminal-line:nth-child(2) { animation-delay: 1.3s; }
/* ... staggered delays */

/* Radial overlay para legibilidade */
.radial-overlay {
    background: radial-gradient(ellipse at center,
        rgba(10, 10, 18, 0.5) 0%,
        rgba(10, 10, 18, 0.75) 50%,
        rgba(10, 10, 18, 0.92) 100%);
}
```

#### Filosofia Artística

- **Primeira impressão define expectativas** — capa profissional = curso profissional
- **Terminal reforça identidade** — somos um curso de código, não de PowerPoint
- **Animação cria antecipação** — elementos revelados gradualmente constroem suspense
- **Badges informam sem competir** — informação contextual discreta

#### Variantes Disponíveis

| Variante | Quando Usar |
|----------|-------------|
| **Terminal** | Aulas técnicas (instalação, comandos) |
| **Matrix Rain** | Aulas conceituais (agentes, IA) |
| **Cinematic** | Aulas introdutórias (visão geral) |

---

### 3.2 SLIDE: CITAÇÃO (QUOTE)

**Propósito:** Trazer autoridade externa. Validar conceitos. Criar conexão emocional.

**Arquivo de Referência:** `demo-quote-karpathy.html`

#### Anatomia

```
┌──────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ [GRID SUTIL DE FUNDO]                                      │  │
│  │                                                            │  │
│  │     2025                                                   │  │
│  │     ────────────────────                                   │  │
│  │                                                            │  │
│  │     "Claramente alguma FERRAMENTA                          │  │
│  │      ALIENÍGENA poderosa foi                   ┌────────┐  │  │
│  │      distribuída, exceto que ela               │        │  │  │
│  │      vem sem manual."                          │ [FOTO] │  │  │
│  │                                                │        │  │  │
│  │     ─────── Andrej Karpathy                    │        │  │  │
│  │             Ex-Director of AI @ Tesla          └────────┘  │  │
│  │             Co-founder OpenAI                   Jan 2025   │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

#### Especificações Técnicas

| Elemento | CSS/Técnica | Propósito |
|----------|-------------|-----------|
| **Grid de fundo** | Background `linear-gradient` repetido | Textura sutil, sofisticação |
| **Ano grande** | `-webkit-text-stroke` outline | Contexto temporal como elemento visual |
| **Texto citação** | Playfair Display itálico | Elegância e autoridade |
| **Highlight** | Cor dourada + font-weight 700 | Chamar atenção para termos-chave |
| **Foto** | Grayscale + border offset | Profissionalismo editorial |
| **Decorative line** | Width animada | Conexão visual texto→autor |

#### CSS Crítico

```css
/* Ano em outline (não comprado com texto) */
.big-year {
    font-family: 'Playfair Display', serif;
    font-size: 8em;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 1px rgba(190, 156, 109, 0.3);
}

/* Highlight de termos-chave */
.quote-text .highlight {
    color: var(--super-gold);
    font-weight: 700;
    font-style: normal;  /* Remove itálico do termo destacado */
}

/* Foto com frame offset */
.photo-frame::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid var(--super-gold);
}

.photo-frame img {
    filter: grayscale(100%);  /* Foto em P&B para elegância */
}

/* Grid de fundo sutil */
.grid-bg {
    background-image:
        linear-gradient(rgba(190, 156, 109, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(190, 156, 109, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
}
```

#### Filosofia Artística

- **Citações trazem credibilidade externa** — não somos nós dizendo, é um especialista
- **Grayscale na foto evita distração** — foco no texto, foto como contexto
- **Highlights guiam a leitura** — o termo-chave deve saltar aos olhos
- **Frame offset cria profundidade** — design editorial premium

#### Variantes de Estilo

| Variante | Layout | Quando Usar |
|----------|--------|-------------|
| **Split Screen** | Texto à esquerda, foto à direita | Citações longas |
| **Card Central** | Citação centralizada, foto menor | Citações curtas e impactantes |
| **Glitch** | Efeito CRT, scanlines | Citações sobre tecnologia/IA |

---

### 3.3 SLIDE: COMPARAÇÃO 3 COLUNAS (GRID3)

**Propósito:** Contrastar conceitos. Revelar evolução. Guiar raciocínio progressivo.

**Arquivo de Referência:** `demo-paradigmas.html`

#### Anatomia

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│              TRÊS PARADIGMAS DE CONHECIMENTO                     │
│                                                                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐            │
│  │     💬      │   │     📎      │   │     🌐      │            │
│  │    2023     │   │    2023     │   │    2023     │            │
│  │   ChatGPT   │   │   Claude    │   │ Bard/Gemini │            │
│  │   OpenAI    │   │  Anthropic  │   │   Google    │            │
│  │             │   │             │   │             │            │
│  │ PARAMÉTRICO │   │ CONTEXTUAL  │   │  EXTERNO    │            │
│  │             │   │             │   │             │            │
│  │ "O LLM como │   │ "O usuário  │   │ "A web é a  │            │
│  │  um Grande  │   │  como       │   │  fonte de   │            │
│  │  Oráculo"   │   │  curador"   │   │  verdade"   │            │
│  │             │   │             │   │             │            │
│  │ ▪ Feature 1 │   │ ▪ Feature 1 │   │ ▪ Feature 1 │            │
│  │ ▪ Feature 2 │   │ ▪ Feature 2 │   │ ▪ Feature 2 │            │
│  │ ▪ Feature 3 │   │ ▪ Feature 3 │   │ ▪ Feature 3 │   01       │
│  └─────────────┘   └─────────────┘   └─────────────┘            │
│                                                                  │
│                     ↓        ↓        ↓                         │
│               ┌───────────────────────────┐                     │
│               │    CONVERGÊNCIA 2025      │                     │
│               │ "Se todos já têm tudo...  │                     │
│               │  o que os agentes trazem  │                     │
│               │  de novo?"                │                     │
│               └───────────────────────────┘                     │
│                                                                  │
│                   ● ○ ○ ○                                       │
└──────────────────────────────────────────────────────────────────┘
```

#### O Sistema de Progressive Spotlight

Este é o padrão mais sofisticado. A revelação acontece em **4 estágios**:

| Stage | Estado Visual | Clique/Tecla |
|-------|---------------|--------------|
| **0** | Card 1 em SPOTLIGHT, Cards 2-3 DIMMED | Inicial |
| **1** | Card 2 em SPOTLIGHT, Cards 1,3 DIMMED | 1º clique |
| **2** | Card 3 em SPOTLIGHT, Cards 1-2 DIMMED | 2º clique |
| **3** | Todos visíveis + CONVERGÊNCIA aparece | 3º clique |

#### Especificações Técnicas

| Elemento | CSS/Técnica | Propósito |
|----------|-------------|-----------|
| **Card base** | Glassmorphism + blur 20px | Profundidade visual |
| **Número de fundo** | `::before` + `attr(data-number)` | Hierarquia numérica decorativa |
| **Badge categoria** | Background dourado sólido | Identificar tipo claramente |
| **Features** | Border-left dourada | Lista diferenciada |
| **Convergência** | Aparece com animação | Conclusão narrativa |
| **Nav dots** | Indicam estágio atual | Feedback de navegação |

#### CSS Crítico

```css
/* Estado SPOTLIGHT (em foco) */
.paradigm-card.spotlight {
    transform: scale(1.02);
    border-color: var(--super-gold);
    box-shadow: 0 0 60px rgba(190, 156, 109, 0.3),
                0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Estado DIMMED (esmaecido) */
.paradigm-card.dimmed {
    opacity: 0.2;
    transform: scale(0.92);
    filter: grayscale(0.5);
}

/* Número decorativo de fundo */
.paradigm-card::before {
    content: attr(data-number);
    position: absolute;
    bottom: -25px;
    right: -5px;
    font-size: 8em;
    font-weight: 700;
    color: rgba(190, 156, 109, 0.06);
    pointer-events: none;
}

/* Seção de convergência (aparece no Stage 3) */
.convergence-section {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
}

.convergence-section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Pergunta com glow pulsante */
.convergence-question {
    text-shadow: 0 0 20px rgba(190, 156, 109, 0.6);
    animation: glowPulse 2.5s ease-in-out infinite;
}
```

#### JavaScript para Navegação

```javascript
let currentStage = 0;
const TOTAL_STAGES = 4;

function setStage(stage) {
    currentStage = stage;

    // Atualizar nav dots
    stageDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === stage);
    });

    // Atualizar cards
    cards.forEach((card, i) => {
        card.classList.remove('dimmed', 'spotlight');
        if (stage < 3) {
            if (i === stage) {
                card.classList.add('spotlight');
            } else {
                card.classList.add('dimmed');
            }
        }
        // Stage 3: todos visíveis (nenhuma classe)
    });

    // Mostrar convergência no Stage 3
    convergence.classList.toggle('visible', stage === 3);
}

// Click handler
document.body.addEventListener('click', () => {
    setStage((currentStage + 1) % 4);
});
```

#### Filosofia Artística

- **Spotlight foca atenção** — humanos só processam bem uma coisa por vez
- **Dimmed mantém contexto** — não desaparece, mas sai do foco
- **Convergência é a recompensa** — após ver as partes, ver o todo
- **Pergunta provocativa fecha** — deixa o aluno pensando

#### Comunicação com Reveal.js

```javascript
// Reportar estado para o parent (Reveal.js)
window.parent.postMessage({
    type: 'paradigmas-state',
    currentStage: currentStage,
    totalStages: TOTAL_STAGES,
    completed: currentStage >= TOTAL_STAGES - 1
}, '*');
```

---

### 3.4 SLIDE: DEMO INTERATIVA (3 FORMAS)

**Propósito:** Mostrar opções com mockups visuais. Guiar escolha com spotlight.

**Arquivo de Referência:** `demo-formas-acesso.html`

#### Anatomia

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│           3 FORMAS DE USAR O CLAUDE CODE                         │
│                Mesmo poder, diferentes interfaces                │
│                                                                  │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐    │
│  │ [RECOMENDADO]   │ │                 │ │                 │    │
│  │┌───────────────┐│ │┌───────────────┐│ │┌───────────────┐│    │
│  ││  TERMINAL     ││ ││     IDE       ││ ││   DESKTOP     ││    │
│  ││  ● ● ●        ││ ││  ● ● ●        ││ ││  ● ● ●        ││    │
│  ││ $ claude      ││ ││ ┌──┬──────┬──┐││ ││ 🤖 Claude     ││    │
│  ││ > Olá! █      ││ ││ │📁│code  │💬│││ ││ [mensagem]    ││    │
│  │└───────────────┘│ │└───────────────┘│ │└───────────────┘│    │
│  │                 │ │                 │ │                 │    │
│  │ ⌨️ Terminal     │ │ 💻 IDE Extension│ │ 🖥️ Desktop App │    │
│  │ Interface nativa│ │ Integrado ao   │ │ Interface       │    │
│  │ Potência máxima │ │ editor         │ │ gráfica         │    │
│  │                 │ │                 │ │                 │    │
│  │ ✓ Controle total│ │ ✓ Diffs visuais│ │ ✓ Amigável     │    │
│  │ ✓ Multi-terminal│ │ ✓ Contexto     │ │ ✗ Requer MCPs  │    │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘    │
│                                                                  │
│  "É terminal-first sem lock-in de IDE — funciona onde seu       │
│   shell funciona."  — Claude Code Documentation                  │
│                                                                  │
│                    ○ ○ ○ ○                                       │
└──────────────────────────────────────────────────────────────────┘
```

#### Sistema de 4 Estados

| Estado | Cards | Quote | Navegação |
|--------|-------|-------|-----------|
| **1** | Terminal SPOTLIGHT, outros dim | Oculta | 1º clique |
| **2** | IDE SPOTLIGHT, Terminal visible | Oculta | 2º clique |
| **3** | Desktop SPOTLIGHT, outros visible | Oculta | 3º clique |
| **4** | Todos visible, Terminal SPOTLIGHT | Visível | 4º clique |

#### Especificações Técnicas

| Elemento | CSS/Técnica | Propósito |
|----------|-------------|-----------|
| **Badge Recomendado** | Position absolute top | Destacar opção preferida |
| **Mock windows** | Dots coloridos + layout | Simular interface real |
| **Terminal mock** | Background #0d0d0d | Autenticidade de terminal |
| **IDE mock** | Sidebar + explorer | Simular VS Code |
| **Desktop mock** | Bubbles de chat | Simular Claude Desktop |
| **Feature tags** | Badges com .pro/.con | Diferencial visual |

#### CSS Crítico

```css
/* Card em spotlight */
.form-card.spotlight {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: grayscale(0%);
    border-color: var(--super-gold);
    box-shadow:
        0 0 60px rgba(190, 156, 109, 0.15),
        0 25px 50px rgba(0, 0, 0, 0.4);
}

/* Card apenas visível (não spotlight) */
.form-card.visible {
    opacity: 0.4;
    transform: translateY(0) scale(0.97);
    filter: grayscale(30%);
}

/* Badge recomendado */
.recommended-badge {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--super-gold);
    color: var(--super-bg-dark);
    font-size: 0.65em;
    font-weight: 700;
    padding: 5px 15px;
    border-radius: 0 0 10px 10px;
}

/* Feature tags semânticas */
.feature-tag.pro {
    background: rgba(74, 222, 128, 0.1);
    border-color: rgba(74, 222, 128, 0.3);
    color: var(--super-green);
}

.feature-tag.con {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;
}
```

#### Filosofia Artística

- **Mockups são mais poderosos que screenshots** — permitem focar no essencial
- **Badge "Recomendado" guia decisão** — sem ser mandatório
- **Feature tags diferenciam visualmente** — verde = bom, vermelho = limitação
- **Quote no final valida** — autoridade da documentação oficial

---

### 3.5 SLIDE: DEFINIÇÕES

**Propósito:** Apresentar conceitos com clareza. Usar spotlight para guiar leitura.

**Arquivo de Referência:** `demo-definicoes.html`

#### Anatomia

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│         O QUE É O CLAUDE CODE?                                   │
│                                                                  │
│         ┌─ DEFINIÇÃO ANTROPIC ────────────────────────────────┐  │
│         │                                                     │  │
│         │   "CLAUDE CODE é a implementação da Anthropic       │  │
│         │    de um agent harness, disponibilizado via CLI     │  │
│         │    terminal. Ele permite que um LLM aja como um     │  │
│         │    agente autônomo, usando ferramentas e recursos   │  │
│         │    do seu computador."                              │  │
│         │                                                     │  │
│         │   ✓ Agent Harness    ✓ CLI terminal                │  │
│         │   ✓ LLM Autônomo     ✓ Ferramentas                 │  │
│         │                                                     │  │
│         └─────────────────────────────────────────────────────┘  │
│                                                                  │
│         ┌─ NOSSA DEFINIÇÃO ───────────────────────────────────┐  │
│         │                                                     │  │
│         │   "Uma LINHA DE MONTAGEM COGNITIVA para produção    │  │
│         │    epistêmica aumentada e em escala."               │  │
│         │                                                     │  │
│         │   ✓ Linha de montagem  ✓ Produção epistêmica       │  │
│         │   ✓ Aumentada          ✓ Em escala                 │  │
│         │                                                     │  │
│         └─────────────────────────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

#### Especificações Técnicas

| Elemento | CSS/Técnica | Propósito |
|----------|-------------|-----------|
| **Cards de definição** | Glassmorphism + borda lateral | Estruturar conceitos |
| **Label de fonte** | Borda superior diferenciada | Identificar origem |
| **Texto citação** | Playfair Display | Elegância de citação |
| **Keywords** | Badges dourados | Destacar termos-chave |
| **Spotlight** | Um card por vez | Guiar foco da leitura |

---

## PARTE IV: TÉCNICAS VISUAIS CORE

### 4.1 Glassmorphism

**O que é:** Efeito de "vidro fosco" que cria profundidade através de blur e transparência.

**Quando usar:** Cards, modais, elementos flutuantes sobre background.

```css
.glass-card {
    background: rgba(255, 255, 255, 0.03);   /* Quase transparente */
    backdrop-filter: blur(20px);             /* Desfoque do fundo */
    -webkit-backdrop-filter: blur(20px);    /* Safari */
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

**Variações por intensidade:**

| Nível | Background Alpha | Blur | Uso |
|-------|------------------|------|-----|
| **Leve** | 0.02-0.03 | 10px | Cards secundários |
| **Médio** | 0.05-0.08 | 20px | Cards principais |
| **Intenso** | 0.10-0.15 | 30px | Destaque, spotlight |

### 4.2 Vignette Overlay

**O que é:** Gradiente radial que escurece bordas, focando no centro.

**Quando usar:** Sobre imagens de fundo para melhorar legibilidade.

```css
.overlay {
    background: radial-gradient(ellipse at center,
        rgba(10, 10, 18, 0.3) 0%,    /* Centro: 30% escuro */
        rgba(10, 10, 18, 0.5) 50%,   /* Meio: 50% escuro */
        rgba(10, 10, 18, 0.7) 100%); /* Borda: 70% escuro */
}
```

### 4.3 Staggered Animations (Entrada Escalonada)

**O que é:** Elementos entram em sequência, criando ritmo visual.

**Quando usar:** Listas, cards em grid, qualquer sequência de elementos.

```css
.element {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.5s ease-out forwards;
}

.element:nth-child(1) { animation-delay: 0.1s; }
.element:nth-child(2) { animation-delay: 0.15s; }
.element:nth-child(3) { animation-delay: 0.2s; }

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### 4.4 Embed Mode

**O que é:** Adaptação de demos para funcionar em iframes do Reveal.js.

**Por que é obrigatório:** Demos são embutidas via `<iframe>` e precisam de tamanhos compactos.

```javascript
function detectEmbedMode() {
    try {
        if (window.self !== window.top) {
            document.body.classList.add('embed-mode');
        }
    } catch (e) {
        document.body.classList.add('embed-mode');  // Cross-origin iframe
    }
}
detectEmbedMode();
```

```css
/* Regra: reduzir tamanhos em ~30-40% */
body.embed-mode { padding: 15px 30px; }
body.embed-mode h1 { font-size: 2em; }      /* De 3em */
body.embed-mode .card { padding: 25px; }    /* De 45px */
body.embed-mode .icon { font-size: 2em; }   /* De 4em */
```

### 4.5 Canvas em iframes (Fix Obrigatório)

**Problema:** `window.innerWidth/Height` retorna valores incorretos em iframes.

**Solução:** Usar `document.documentElement.clientWidth/Height`.

```javascript
// ❌ ERRADO
canvas.width = window.innerWidth;

// ✅ CORRETO
canvas.width = document.documentElement.clientWidth || window.innerWidth;
canvas.height = document.documentElement.clientHeight || window.innerHeight;
```

---

## PARTE V: CHECKLIST DE QUALIDADE

### Antes de Criar

- [ ] Defini o PROPÓSITO claro (MOSTRAR, TOPIFICAR ou CITAR)?
- [ ] Sei qual técnica visual usar (spotlight, glassmorphism, etc.)?
- [ ] Tenho referência de demo similar?

### Durante a Criação

- [ ] Usando variáveis CSS da PALETA SUPER?
- [ ] Tipografia das 3 famílias (Playfair/Inter/JetBrains)?
- [ ] Implementei `detectEmbedMode()`?
- [ ] Estilos embed-mode reduzem tamanhos em 30-40%?

### Após a Criação

- [ ] Animações têm timing < 1s?
- [ ] Navegação por clique E teclado funciona?
- [ ] Funciona em iframe do Reveal.js?
- [ ] NÃO tem texto que o professor DIRIA?

### Comunicação com Parent

- [ ] Implementei comunicação via `postMessage`?
- [ ] Reporto estados (currentStage, totalStages, completed)?
- [ ] Notifico quando iframe está pronto?

---

## PARTE VI: ANTI-PATTERNS (NUNCA FAZER)

| Anti-Pattern | Por Quê É Ruim | Solução |
|--------------|----------------|---------|
| **Bullet points narrativos** | Professor FALA, slide MOSTRA | Converter em diagrama/demo |
| **Texto explicativo** | Substitui voz do professor | Mover para roteiro falado |
| **Mais de 7 elementos** | Perde hierarquia visual | Dividir em 2 slides |
| **Animações > 2s** | Atrapalha ritmo | Reduzir para < 1s |
| **Cores fora da paleta** | Quebra identidade | Usar variáveis CSS SUPER |
| **Canvas com innerWidth** | Não funciona em iframe | Usar clientWidth/Height |
| **Fontes aleatórias** | Perde personalidade | Playfair/Inter/JetBrains only |
| **Modificação em batch** | Não respeita artesania | Fazer slide-a-slide |

---

## PARTE VII: REFERÊNCIAS DE ARQUIVOS

### Templates Base
```
.claude/skills/slides-web/assets/demos/
├── template-capa-matrix.html
├── template-quote-glassmorphism.html
├── template-grid3-spotlight.html
├── template-contexto-dragdrop.html
└── template-orquestrador.html
```

### Demos da Aula 01 (Referência)
```
content/aula-01/slides/
├── aula-01.html                    # Apresentação Reveal.js
├── demo-capa-matrix-super.html     # Capa com Matrix Rain
├── demo-quote-karpathy.html        # Quote Karpathy
├── demo-paradigmas.html            # 3 Paradigmas com spotlight
├── demo-contexto.html              # Janela de contexto (drag-drop)
├── demo-agentes.html               # Orquestrador em ação
└── andrej-karpathy.jpg             # Asset de foto
```

### Demos da Aula 02 (Referência)
```
content/aula-02/slides/
├── aula-02.html                    # Apresentação Reveal.js
├── demo-capa-terminal.html         # Capa com terminal
├── demo-quote-karpathy.html        # Quote ferramenta alienígena
├── demo-formas-acesso.html         # 3 formas (Terminal/IDE/Desktop)
├── demo-definicoes.html            # O que é Claude Code
├── demo-instalacao.html            # Demo viva de instalação
└── demo-caverna-terminal.html      # Caverna com luz dourada
```

---

## PARTE VIII: GLOSSÁRIO VISUAL

| Termo | Definição | Exemplo |
|-------|-----------|---------|
| **Spotlight** | Estado visual de destaque com glow e scale | Card em foco no paradigmas |
| **Dimmed** | Estado visual esmaecido (opacity + grayscale) | Cards não focados |
| **Glassmorphism** | Efeito vidro fosco (blur + transparência) | Cards de citação |
| **Vignette** | Gradiente radial que escurece bordas | Overlay sobre imagens |
| **Staggered** | Animação em sequência com delays | Entrada de cards |
| **Embed Mode** | Adaptação para iframes | Tamanhos reduzidos |
| **Nav Dots** | Indicadores de estado/página | Pontos na base |

---

*Playbook criado para o Curso de Sistemas Agênticos*
*"Da interface à regência: formando os maestros do futuro"*
