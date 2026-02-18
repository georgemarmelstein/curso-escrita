# Plano de Revisão Artesanal - Slides Aula 01

## Contexto do Projeto

Estamos fazendo uma **revisão artesanal slide-a-slide** da apresentação da Aula 01 do curso de sistemas agênticos. O objetivo é criar slides com design impactante e profissional.

**Apresentação base:** `aula-01.html` (Reveal.js)
**Diretório de trabalho:** `docs/curso-sistemas-agenticos/aulas/aula-01/slides/`

---

## Padrões Visuais Obrigatórios

### PALETA SUPER (cores CSS)
```css
:root {
    --super-gold: #BE9C6D;
    --super-gold-light: #d4b896;
    --super-cream: #FFF4E4;
    --super-bg-dark: #0a0a12;
    --super-bg-section: #1a1a2e;
}
```

### Fontes (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Uso | Fonte |
|-----|-------|
| Títulos, quotes | Playfair Display (serif) |
| Corpo, labels | Inter (sans-serif) |
| Código, técnico | JetBrains Mono (monospace) |

### Efeitos Visuais
- **Glassmorphism**: `backdrop-filter: blur(20px)`, backgrounds `rgba(..., 0.03-0.1)`
- **Bordas sutis**: `border: 1px solid rgba(190, 156, 109, 0.2-0.3)`
- **Sombras**: `box-shadow` com tons dourados para destaque
- **Transições**: `cubic-bezier(0.4, 0, 0.2, 1)` para suavidade

### Embed Mode (CRÍTICO)
Todo slide DEVE ter CSS para `body.embed-mode` com tamanhos reduzidos para caber no iframe do Reveal.js (viewport ~1100x550px).

```javascript
// Detecção obrigatória
function detectEmbedMode() {
    try {
        if (window.self !== window.top) {
            document.body.classList.add('embed-mode');
        }
    } catch (e) {
        document.body.classList.add('embed-mode');
    }
}
detectEmbedMode();
```

---

## Skill de Referência

**Ler:** `.claude/skills/slides-web/SKILL.md`

Esta skill contém:
- Estrutura HTML padrão
- Padrões CSS consolidados
- Templates documentados (capa, quote, 3 colunas)
- Exemplos de Progressive Spotlight

---

## Slides de Referência (já finalizados)

Use estes como modelo de qualidade:

| Slide | Arquivo | Padrões Demonstrados |
|-------|---------|----------------------|
| Capa | `demo-capa.html` | Background gradient, título centralizado, decorações |
| Quote | `demo-quote-karpathy.html` | Split-screen, citação com aspas decorativas |
| Paradigmas | `demo-paradigmas.html` | 3 colunas, Progressive Spotlight, convergência |

---

## Processo de Trabalho por Slide

### Fase 1: Análise
1. Ler o slide atual em `aula-01.html` (identificar conteúdo)
2. Identificar tipo: citação, demo interativo, transição, código, etc.

### Fase 2: Criação (3 propostas)
1. Criar 3 propostas alternativas: `demo-[nome]-proposta-a/b/c.html`
2. Cada proposta com abordagem visual diferente
3. Testar no browser em `http://localhost:8080/[arquivo]`

### Fase 3: Refinamento
1. Usuário escolhe proposta preferida
2. Aplicar ajustes solicitados
3. Copiar versão final para arquivo principal

### Fase 4: Documentação
1. Se descobrir novo padrão, adicionar à skill slides-web
2. Atualizar este plano se necessário

---

## Slides Pendentes

### Grupo A: Citações (padrão quote)
- Slide 5: Citação (verificar conteúdo)
- Slide 8: Citação (verificar conteúdo)
- Slide 17: Citação (verificar conteúdo)

### Grupo B: Demos Interativos
- Slide 6: Demo Contexto (`demo-contexto.html`)
- Slide 9: Demo Agentes (`demo-agentes.html`)
- Slide 18: Demo Conexão (`demo-conexao.html`)
- Slide 21: Demo Workflow (`demo-workflow.html`)
- Slide 23: Prática/Recapitulação
- Slide 24: Fechamento (`demo-fechamento.html`)

### Grupo C: Transições de Seção
- Slides 2, 4, 7, 10, 13, 16, 20, 22

### Grupo D: Conteúdo Técnico
- Slides 11, 12, 14: Capacidades, Conectores, Limitações
- Slides 15, 19: Código (No Web, Custom Instructions)

### Grupo E: Final
- Slide 25: Encerramento

---

## Instruções para Subagentes

### Ao receber uma tarefa de slide:

1. **PRIMEIRO**: Ler este plano (`PLANO-REVISAO-SLIDES.md`)
2. **SEGUNDO**: Ler a skill (`/.claude/skills/slides-web/SKILL.md`)
3. **TERCEIRO**: Ler um slide de referência para entender o padrão
4. **QUARTO**: Analisar o conteúdo do slide alvo em `aula-01.html`
5. **QUINTO**: Criar as propostas ou executar a tarefa específica

### Regras Críticas:
- SEMPRE usar PALETA SUPER (nunca cores aleatórias)
- SEMPRE incluir embed-mode CSS
- SEMPRE testar no browser antes de finalizar
- NUNCA pular a fase de 3 propostas para slides complexos
- SEMPRE manter português brasileiro com acentos

### Output Esperado:
- Arquivos HTML no diretório de slides
- Screenshot de verificação
- Breve descrição do que foi feito

---

## Estrutura de Arquivos

```
aulas/aula-01/slides/
├── aula-01.html              # Apresentação principal (Reveal.js)
├── PLANO-REVISAO-SLIDES.md   # Este plano
├── demo-capa.html            # ✓ Finalizado
├── demo-quote-karpathy.html  # ✓ Finalizado
├── demo-paradigmas.html      # ✓ Finalizado
├── demo-paradigmas-proposta-a.html  # Referência
├── demo-paradigmas-proposta-b.html  # Referência
├── demo-paradigmas-proposta-c.html  # Referência
├── demo-contexto.html        # Pendente
├── demo-agentes.html         # Pendente
└── ...
```

---

## Tarefas Específicas por Slide

### TAREFA: Slide 4 - Paradigmas (Refinamento de Conteúdo)

**Arquivo:** `demo-paradigmas.html`
**Status:** Design OK, conteúdo precisa refinamento

#### Narrativa do Slide (contexto pedagógico)

A ideia é mostrar três paradigmas de conhecimento e como cada ferramenta fez uma APOSTA DIFERENTE:

**ChatGPT (2022) - Conhecimento Paramétrico**
- Focou em CONVERSA como interface principal
- Demorou para incluir botão de anexo
- Demorou para ampliar janela de contexto
- Aposta: "O modelo já sabe o suficiente"

**Claude (2023) - Conhecimento Contextual**
- Priorizou conhecimento contextual DESDE A ORIGEM
- Botão de anexo desde o início
- Apostou em contextos longos: 100K tokens → 200K tokens
- Aposta: "O usuário traz a verdade"

**Perplexity (2023) - Conhecimento Externo**
- NÃO tem modelo próprio (usa modelos de terceiros)
- Apostou em PESQUISA de qualidade na web
- Conhecimento baseado em fontes externas em tempo real
- Aposta: "A web é a fonte de verdade"

**Convergência (2025)**
- A partir de 2025, TODOS passaram a ter:
  - Anexos
  - Busca na web
  - Deep research
  - Raciocínio expandido
  - Janelas de contexto maiores
- Pergunta provocativa: "Se todos já têm tudo... o que os agentes trazem de novo?"

#### Problemas Identificados

1. **Conteúdo dos cards não reflete a narrativa acima**
   - Falta destacar a APOSTA de cada um
   - Falta o contraste entre as abordagens

2. **Legibilidade**
   - Letras estão pequenas demais
   - Precisa aumentar sem quebrar o layout

3. **Restrição crítica**
   - TUDO deve caber na viewport sem scroll
   - Viewport embed-mode: ~1100x550px
   - A seção CONVERGÊNCIA deve aparecer inteira no stage 3

#### Tarefa para o Subagente

1. Revisar o texto de cada card para refletir a narrativa
2. Ajustar tamanhos de fonte para melhor legibilidade
3. Manter design Glassmorphism existente
4. Testar TODOS os 4 stages no browser
5. Garantir que stage 3 (convergência) cabe sem scroll

#### Textos Sugeridos para os Cards

**ChatGPT:**
- Badge: PARAMÉTRICO
- Quote: "O que o modelo já aprendeu"
- Features:
  - Conversa como interface principal
  - Anexos e contexto vieram depois
  - Fonte: treino do modelo

**Claude:**
- Badge: CONTEXTUAL
- Quote: "O que você fornece importa"
- Features:
  - Anexos desde a origem
  - 100K → 200K tokens de contexto
  - Fonte de verdade = VOCÊ

**Perplexity:**
- Badge: EXTERNO
- Quote: "O que a web sabe agora"
- Features:
  - Pesquisa como diferencial
  - Sem modelo próprio
  - Fonte = fontes da web

---

## Servidor Local

Para testar slides: `http://localhost:8080/[arquivo].html`

O servidor deve estar rodando na raiz do curso.
