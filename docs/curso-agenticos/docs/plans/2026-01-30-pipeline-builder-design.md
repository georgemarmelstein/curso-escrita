# Design: Pipeline Builder Interativo - Aula 05

**Data:** 2026-01-30
**Status:** Validado (v2 - refinado)
**Arquivo alvo:** `content/aula-05/slides/demo-pipeline-builder.html`

---

## Visão Geral

Slide interativo estilo "mesa de trabalho" onde o usuário monta pipelines agênticos arrastando pastas que **abrem e revelam conteúdo editável**. O usuário controla a quantidade de processos e prompts, visualizando dinamicamente como a configuração determina o modo de operação (Assistente Simples vs Agêntico).

**Público:** Juristas aprendendo sistemas agênticos
**Metáfora:** Pastas de escritório com documentos editáveis
**Tom visual:** Lúdico, amigável, cores pastel
**Vocabulário:** Alinhado ao "Super Jurista" do curso

---

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  📋 Padrões: [Unitária ▾] [Cadeia ▾] [Routing ▾] [...]  🔄 ▶️   │
├─────────────────────┬───────────────────────────────────────────┤
│                     │                                           │
│   📁 BIBLIOTECA     │         🖥️ CANVAS DE MONTAGEM             │
│      (25%)          │              (75%)                        │
│                     │                                           │
│  ┌──────────┐       │  ┌─────────────────────────────────────┐  │
│  │ 📂 ENTRADA│       │  │ 📂 ENTRADA                     [+] │  │
│  │ 📂 TAREFA │       │  │   📄 PROCESSO-001.PDF              │  │
│  │ 📂 DOCS   │       │  │   📄 PROCESSO-002.PDF              │  │
│  │ 📂 SAÍDA  │       │  └─────────────────────────────────────┘  │
│  └──────────┘       │              │                            │
│                     │              ▼                            │
│                     │  ┌─────────────────────────────────────┐  │
│                     │  │ 📂 TAREFA                       [+] │  │
│                     │  │   📝 Relator                        │  │
│                     │  └─────────────────────────────────────┘  │
│                     │              │                            │
│                     │              ▼                            │
│                     │  ┌─────────────────────────────────────┐  │
│                     │  │ 📂 SAÍDA            (auto: 2 docs)  │  │
│                     │  │   📄 RELATÓRIO-001.TXT              │  │
│                     │  │   📄 RELATÓRIO-002.TXT              │  │
│                     │  └─────────────────────────────────────┘  │
│                     │                                           │
│                     │  ┌─────────────────────────────────────┐  │
│                     │  │ 🏷️ MODO: Escala (2 entradas → 2 saídas)│
│                     │  └─────────────────────────────────────┘  │
└─────────────────────┴───────────────────────────────────────────┘
```

**Menu superior:** Discreto, dropdowns com padrões pré-configurados
**Proporções:** Biblioteca 25% | Canvas 75%
**Indicador de modo:** Badge dinâmico mostrando o padrão detectado

---

## Comportamento das Pastas

### Ao arrastar pasta para o canvas:

1. **Pasta "pousa" e ABRE** mostrando conteúdo
2. **Botão [+]** permite adicionar mais itens
3. **Botão [-]** ou clique no item remove
4. **Conteúdo é editável** (nomes dos arquivos)

### ENTRADA

```
┌─────────────────────────────────────┐
│ 📂 ENTRADA                     [+]  │
├─────────────────────────────────────┤
│   📄 PROCESSO-001.PDF          [×]  │
│   📄 PROCESSO-002.PDF          [×]  │
│   📄 PROCESSO-003.PDF          [×]  │
└─────────────────────────────────────┘
```

- Clica [+] → adiciona novo processo (numeração automática)
- Pode ter 1 ou N processos
- Cada processo representa um caso/documento de entrada

### TAREFA (com menu de tipos)

```
┌─────────────────────────────────────┐
│ 📂 TAREFA                      [+]  │
├─────────────────────────────────────┤
│   📝 Relator                   [×]  │
│   🔍 Analisador                [×]  │
└─────────────────────────────────────┘
```

Ao clicar [+], aparece menu de seleção:

```
┌─────────────────────────┐
│ Escolha o tipo:         │
├─────────────────────────┤
│ 📝 Relator              │
│ 🔍 Analisador           │
│ 📚 Pesquisador          │
│ ✅ Revisor              │
│ 📋 Minutador            │
├─────────────────────────┤
│ ⚙️ Custom Prompt...     │
└─────────────────────────┘
```

### DOCS (opcional, flexível)

```
┌─────────────────────────────────────┐
│ 📂 DOCS                        [+]  │
├─────────────────────────────────────┤
│   📚 jurisprudencia.md         [×]  │
│   📋 modelo-minuta.md          [×]  │
└─────────────────────────────────────┘
```

- Conectável à ENTRADA (contexto direto) ou TAREFA (RAG/search)
- Visual diferenciado conforme conexão

### SAÍDA (automática)

```
┌─────────────────────────────────────┐
│ 📂 SAÍDA              (auto: 2 docs)│
├─────────────────────────────────────┤
│   📄 RELATÓRIO-001.TXT              │
│   📄 RELATÓRIO-002.TXT              │
└─────────────────────────────────────┘
```

- **Quantidade calculada automaticamente** baseada na configuração
- **Tipo de saída** determinado pelo prompt selecionado
- Não editável diretamente (reflete o pipeline)

---

## Lógica de Modos (Detecção Automática)

O sistema detecta o padrão baseado na configuração:

| Entradas | Prompts | Arranjo | Modo Detectado | Padrão Anthropic |
|----------|---------|---------|----------------|------------------|
| 1 | 1 | - | Assistente Simples | Single-turn |
| N | 1 | - | Escala Horizontal | Batch/Parallelization |
| 1 | N | Sequencial | Cadeia de Prompts | Prompt Chaining |
| 1 | N | Paralelo | Paralelização | Parallelization |
| 1 | N | Condicional | Roteamento | Routing |
| 1 | 1+workers | Delegação | Orquestrador | Orchestrator-Workers |
| N | N | Avaliação | Loop de Refinamento | Evaluator-Optimizer |

### Badge dinâmico de modo:

```
┌───────────────────────────────────────────┐
│ 🏷️ MODO: Cadeia de Prompts (Prompt Chaining) │
│    1 processo → Relator → Analisador → 1 saída │
└───────────────────────────────────────────┘
```

---

## Prompts do "Super Jurista"

Vocabulário alinhado ao curso:

| Prompt | Ícone | Função | Saída Gerada |
|--------|-------|--------|--------------|
| Relator | 📝 | Resume o processo | RELATÓRIO.TXT |
| Analisador | 🔍 | Analisa questões jurídicas | ANÁLISE.TXT |
| Pesquisador | 📚 | Busca jurisprudência/doutrina | PESQUISA.TXT |
| Revisor | ✅ | Revisa e valida documentos | REVISÃO.TXT |
| Minutador | 📋 | Elabora minuta de decisão | MINUTA.TXT |

### Saída automática por prompt:

```javascript
const promptOutputMap = {
  'relator': 'RELATÓRIO',
  'analisador': 'ANÁLISE',
  'pesquisador': 'PESQUISA',
  'revisor': 'REVISÃO',
  'minutador': 'MINUTA'
};
```

---

## Padrões Pré-configurados (Menu Superior)

Botões que montam configurações de exemplo:

### 1. Tarefa Unitária (Single-turn)
```
1× PROCESSO.PDF → 1× Relator → 1× RELATÓRIO.TXT
```

### 2. Escala Horizontal (Batch)
```
5× PROCESSO.PDF → 1× Relator → 5× RELATÓRIO.TXT
```

### 3. Cadeia de Prompts (Prompt Chaining)
```
1× PROCESSO.PDF → Relator → Analisador → Minutador → 1× MINUTA.TXT
```

### 4. Paralelização (Parallelization)
```
1× PROCESSO.PDF → [Relator | Analisador | Pesquisador] → 3× saídas simultâneas
```

### 5. Roteamento (Routing)
```
1× PROCESSO.PDF → Classificador → {se criminal: Analisador-Penal | se cível: Analisador-Cível}
```

### 6. Orquestrador (Orchestrator-Workers)
```
1× PROCESSO.PDF → Orquestrador → delega para [Relator, Pesquisador, Minutador] → consolida
```

---

## Interatividade

### Drag & Drop

1. **Arrastar da biblioteca:**
   - Ghost preview acompanha cursor
   - Canvas mostra área de drop

2. **Soltar no canvas:**
   - Pasta pousa e ABRE mostrando conteúdo
   - Posiciona automaticamente no fluxo (vertical)

3. **Adicionar itens [+]:**
   - ENTRADA: adiciona novo processo (nome editável)
   - TAREFA: abre menu de seleção de prompt
   - DOCS: adiciona documento de referência

4. **Remover itens [×]:**
   - Remove o item específico
   - Recalcula saídas automaticamente

5. **Conexões automáticas:**
   - Linhas conectam ENTRADA → TAREFA → SAÍDA
   - Múltiplos prompts: linhas mostram arranjo (série/paralelo)

### Controle de Arranjo (para múltiplos prompts)

Quando há 2+ prompts, aparece controle:

```
┌─────────────────────────────────────┐
│ Arranjo dos prompts:                │
│ ○ Sequencial (um após outro)        │
│ ○ Paralelo (todos ao mesmo tempo)   │
│ ○ Condicional (baseado em critério) │
└─────────────────────────────────────┘
```

---

## Animação de Execução

### Ao clicar ▶️ Executar:

1. **Validação:** Verifica se pipeline está completo

2. **Pulso sequencial:** Pastas brilham em ordem do fluxo

3. **Documentos fluindo:**
   - Ícones 📄 saem de cada PROCESSO na ENTRADA
   - Passam pela(s) TAREFA(s) conforme arranjo
   - Chegam na SAÍDA correspondente

4. **Feedback:** "Pipeline executado ✓" com contagem de saídas geradas

---

## Paleta de Cores

### Pastel (elementos principais)
| Elemento | Cor | Hex |
|----------|-----|-----|
| Fundo canvas | Bege claro (mesa) | #F5F0E8 |
| ENTRADA | Creme | #FFF8E7 |
| TAREFA | Azul pastel | #E3F2FD |
| DOCS | Verde menta | #E8F5E9 |
| SAÍDA | Pêssego | #FFF3E0 |

### Acentos (paleta SUPER)
| Uso | Cor | Hex |
|-----|-----|-----|
| Conexões ativas | Dourado | #BE9C6D |
| Hover/seleção | Dourado light | #d4b896 |
| Títulos | Dourado | #BE9C6D |
| Menu superior | Escuro | #0a0a12 |

### Tipografia
- Títulos: Playfair Display
- Labels pastas: Inter
- Nomes arquivos: JetBrains Mono

---

## Arquitetura Técnica

### Stack
- HTML5 semântico
- CSS3 com custom properties
- JavaScript vanilla (zero deps)
- Drag & Drop API nativa

### Estrutura de código

```javascript
// Estado do pipeline
const pipelineState = {
  entrada: {
    items: ['PROCESSO-001.PDF']  // lista editável
  },
  tarefa: {
    items: ['relator'],          // prompts selecionados
    arranjo: 'sequential'        // sequential | parallel | conditional
  },
  docs: {
    items: [],
    conexao: null                // 'entrada' | 'tarefa'
  },
  saida: {
    items: []                    // calculado automaticamente
  },
  modoDetectado: 'single-turn'   // atualizado dinamicamente
};

// Módulos
- DragDropManager    // arrastar/soltar pastas
- FolderRenderer     // renderiza pasta aberta com itens
- PromptSelector     // menu de seleção de prompts
- ModeDetector       // detecta padrão baseado na config
- ConnectionDrawer   // desenha linhas SVG
- AnimationEngine    // pulsos e docs fluindo
- PatternLoader      // carrega exemplos pré-definidos
```

### Funções principais

```javascript
// Recalcula saídas baseado na configuração
function recalculateOutputs() {
  const numEntradas = state.entrada.items.length;
  const prompts = state.tarefa.items;

  // Lógica de saída por modo
  if (state.tarefa.arranjo === 'sequential') {
    // Cadeia: 1 saída final por entrada
    return numEntradas * 1;
  } else if (state.tarefa.arranjo === 'parallel') {
    // Paralelo: 1 saída por prompt por entrada
    return numEntradas * prompts.length;
  }
  // ... etc
}

// Detecta modo baseado na configuração
function detectMode() {
  const n = state.entrada.items.length;
  const p = state.tarefa.items.length;

  if (n === 1 && p === 1) return 'single-turn';
  if (n > 1 && p === 1) return 'batch';
  if (n === 1 && p > 1 && state.tarefa.arranjo === 'sequential')
    return 'prompt-chaining';
  // ... etc
}
```

### Embed mode
- Detecta `?embed=true`
- Esconde título, reduz padding
- Compatível com iframe Reveal.js

### Estimativa
~1000-1200 linhas (ligeiramente maior que demo-contexto.html devido à lógica de modos)

---

## Arquivo de saída

```
content/aula-05/slides/demo-pipeline-builder.html
```

Self-contained, sem dependências externas.

---

## Referências

- demo-contexto.html (aula-01) - padrão de interatividade
- "Building Effective Agents" - Anthropic (nomenclatura oficial)
- Pipeline "Super Jurista" do curso (Relator, Analisador, etc.)
- Paleta SUPER do curso

---

*Design validado e refinado em sessão de brainstorming colaborativo (v2).*
