# Aula 6B: Engenharia de Prompt em Sistemas Agênticos

## Visão Geral

| Aspecto | Detalhe |
|---------|---------|
| **Duração** | 90 minutos |
| **Nível** | Intermediário-Avançado |
| **Pré-requisitos** | Aulas 1-6 (fundamentos de agentes e Claude Code) |
| **Objetivo** | Dominar a arte de escrever e orquestrar prompts em sistemas agênticos |

## O Princípio Fundamental

> **"Toda instrução que entra no contexto É um prompt."**

Este é o insight central desta aula. Em sistemas agênticos:

- `CLAUDE.md` é um prompt (carregado automaticamente)
- `orquestrador.md` é um prompt (carregado quando invocado)
- `etapas/*.md` são prompts (carregados pelo orquestrador)
- `commands/*.md` são prompts (carregados por `/comando`)
- `skills/*/SKILL.md` são prompts (carregados por contexto)

A diferença dos sistemas agênticos: **esses prompts são acionados de forma progressiva e inteligente** - explícita ou implicitamente, pelo usuário ou pelo agente, na medida da necessidade.

```
┌─────────────────────────────────────────────────────────────────┐
│                    JANELA DE CONTEXTO                           │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CLAUDE.md (sempre presente - "DNA" do projeto)          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Prompt do usuário (a tarefa atual)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Orquestrador (se invocado - coordena execução)          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Etapa N (carregado pelo orquestrador quando necessário) │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Resultado da etapa anterior (contexto acumulado)        │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Parte 1: A Evolução - De Prompt Engineering a Context Engineering

### 1.1 O Que Mudou

| Prompt Engineering (2023) | Context Engineering (2025) |
|---------------------------|----------------------------|
| Um prompt, uma resposta | Múltiplos prompts orquestrados |
| Foco no "como perguntar" | Foco em "qual contexto fornecer" |
| Usuário controla tudo | Sistema ativa prompts inteligentemente |
| Estático | Dinâmico e adaptativo |

### 1.2 A Analogia do Gabinete Judicial

Imagine um gabinete de magistrado bem organizado:

```
GABINETE JUDICIAL                    SISTEMA AGÊNTICO
─────────────────                    ─────────────────
Manual de Procedimentos        →     CLAUDE.md
Coordenador do Gabinete        →     Orquestrador
Assessores Especializados      →     Subagentes (etapas)
Modelos de Minutas             →     Templates em prompts
Checklist de Conferência       →     Validações entre etapas
```

O magistrado não precisa instruir cada assessor do zero a cada processo. O gabinete tem **procedimentos documentados** que são acionados conforme a necessidade.

---

## Parte 2: CLAUDE.md - O DNA do Projeto

### 2.1 O Que É o CLAUDE.md

O `CLAUDE.md` é um arquivo especial que o Claude Code lê automaticamente ao iniciar qualquer sessão no projeto. Ele funciona como:

- **Manual de procedimentos** do projeto
- **Memória institucional** das decisões tomadas
- **Guia de estilo** e convenções
- **Mapa do território** (estrutura, artefatos, fluxos)

### 2.2 Hierarquia de Carregamento

```
1. ~/.claude/CLAUDE.md          (global - todas as sessões)
       ↓
2. ./CLAUDE.md                   (projeto - raiz do repositório)
       ↓
3. ./subpasta/CLAUDE.md          (local - contexto específico)
```

O Claude combina todos os níveis, com o mais específico tendo precedência.

### 2.3 Estrutura Recomendada

```markdown
# CLAUDE.md

## Propósito do Projeto
[Uma frase que define a razão de existir do projeto]

## Filosofia
[Princípios que guiam todas as decisões]

## Estrutura do Repositório
[Mapa visual das pastas e seus propósitos]

## Artefatos Principais
[Tabela com commands, skills, prompts disponíveis]

## Fluxos de Trabalho
[Diagramas ASCII dos pipelines principais]

## Convenções
[Nomenclatura, idioma, formatação]

## Status e Pendências
[O que está feito, o que falta fazer]
```

### 2.4 Exemplo Real: Trecho do CLAUDE.md do CLERK

```markdown
## Filosofia: AUMENTAÇÃO, não Automação

Este projeto adota o paradigma de **Inteligência Aumentada**:

| Automação | Aumentação |
|-----------|------------|
| IA substitui o humano | IA potencializa o humano |
| Foco em eficiência | Foco em qualidade decisória |
| Resultado final automático | Insumos qualificados para decisão |

### O Papel do CLERK

O CLERK atua como um **assessor inteligente** que:
1. **Prepara** - Organiza informações processuais
2. **Sintetiza** - Resume documentos extensos
3. **Pesquisa** - Localiza jurisprudência relevante
4. **Sugere** - Apresenta minutas como ponto de partida

**A decisão judicial permanece EXCLUSIVAMENTE humana.**
```

### 2.5 Boas Práticas para CLAUDE.md

| Prática | Por quê |
|---------|---------|
| **Seja conciso mas completo** | O CLAUDE.md é lido em TODA sessão - cada token conta |
| **Use tabelas para estruturar** | Fácil de escanear, difícil de interpretar errado |
| **Documente decisões, não discussões** | "Usamos X" em vez de "Pensamos em X, Y, Z e decidimos X" |
| **Mantenha atualizado** | CLAUDE.md desatualizado causa mais confusão que ajuda |
| **Inclua exemplos de uso** | Commands com exemplos são mais fáceis de usar |

### 2.6 Erros Comuns no CLAUDE.md

| Erro | Consequência | Correção |
|------|--------------|----------|
| **Muito longo** | Consome tokens, dilui foco | Máximo 500 linhas úteis |
| **Muito vago** | Claude "adivinha" errado | Seja específico nas instruções |
| **Desatualizado** | Instruções contraditórias | Revise a cada mudança significativa |
| **Sem estrutura** | Difícil encontrar informação | Use seções e tabelas |
| **Duplicação** | Inconsistências inevitáveis | Uma fonte de verdade |

---

## Parte 3: Contratos de Entrada e Saída

### 3.1 O Que São Contratos

Um **contrato** define claramente:

- **O que entra** (entrada): Quais arquivos, em qual formato
- **O que sai** (saída): Qual arquivo gerar, com qual estrutura
- **Quem executa** (modelo): Qual modelo usar (opus, sonnet, haiku)
- **Contexto necessário**: O que o executor precisa saber

### 3.2 Por Que Contratos São Essenciais

Sem contratos explícitos:
```
"Gere um relatório do processo"
     ↓
[Claude decide formato, estrutura, nível de detalhe]
     ↓
Resultado imprevisível
```

Com contratos explícitos:
```
ENTRADA: processo.txt (texto completo do processo)
SAÍDA: relatorio.md (formato Marmelstein)
MODELO: opus
CONTEXTO: Apenas o arquivo de entrada
     ↓
[Claude segue especificação]
     ↓
Resultado previsível e consistente
```

### 3.3 Anatomia de um Contrato

```markdown
<!--
CONTRATO DA ETAPA
─────────────────
ENTRADA: nome-arquivo-entrada.extensao
SAÍDA: nome-arquivo-saida.extensao
CONTEXTO: [O que deve ser passado ao executor]
MODELO: [opus | sonnet | haiku]
VALIDAÇÃO: [Como verificar se a saída está correta]
-->
```

### 3.4 Exemplo Real: Tabela de Contratos do Pipeline Sentença

| # | Etapa | Entrada | Saída | Modelo |
|---|-------|---------|-------|--------|
| 1 | Relatório | processo.txt | relatorio-marmelstein.md | opus |
| 2 | Análise | relatorio-marmelstein.md | [NUM]-analise.md | opus |
| 3 | Fundamentação | relatorio.md + analise.md | fundamentacao.md | opus |
| 4 | Merge | relatorio.md + fundamentacao.md | [NUM]-minuta.md | opus |

**Observe:**
- Cada etapa sabe EXATAMENTE o que recebe
- Cada etapa sabe EXATAMENTE o que deve produzir
- A saída de uma etapa é a entrada da próxima
- Não há ambiguidade

### 3.5 Validação Entre Etapas

O orquestrador deve validar a saída antes de passar para a próxima etapa:

```markdown
## Validação da Etapa 1 (Relatório)

Após gerar, verificar:
- [ ] Arquivo criado com nome correto
- [ ] Começa com "RELATÓRIO" (com acento)
- [ ] Contém seções obrigatórias (partes, fatos, pedidos)
- [ ] Tamanho razoável (não vazio, não truncado)

Se falhar: PARAR e reportar erro
Se passar: Prosseguir para Etapa 2
```

---

## Parte 4: Escrevendo Prompts de Etapa

### 4.1 Estrutura de um Prompt de Etapa

```markdown
<!--
ENTRADA: [arquivo de entrada]
SAÍDA: [arquivo de saída]
CONTEXTO: [o que o subagente recebe]
-->

<persona>
[Quem o Claude deve "ser" para esta tarefa]
</persona>

<objetivo>
[O que deve ser alcançado - claro e mensurável]
</objetivo>

<formato_saida>
[Template EXATO do que deve ser gerado]
</formato_saida>

<pecas_relevantes>
[O que considerar e o que ignorar]
</pecas_relevantes>

<armadilha>
[Erros comuns a evitar - experiência destilada]
</armadilha>

<exemplo>
[Exemplo concreto de saída bem-sucedida]
</exemplo>
```

### 4.2 Cada Seção em Detalhe

#### `<persona>` - Quem Executar

```markdown
<persona>
Você é um ASSESSOR JURÍDICO DE ALTO NÍVEL especializado em
direito previdenciário. Sua função é extrair e organizar
informações processuais com precisão cirúrgica.

Você NÃO julga. Você NÃO opina. Você RELATA.
</persona>
```

**Por que funciona:**
- Define o papel claramente
- Estabelece limites ("NÃO julga")
- Usa linguagem assertiva

#### `<objetivo>` - O Que Fazer

```markdown
<objetivo>
Elaborar o RELATÓRIO do processo seguindo o formato Marmelstein.

O relatório deve:
1. Identificar as partes e a natureza da ação
2. Resumir os fatos em ordem cronológica
3. Listar os pedidos da parte autora
4. Sintetizar a defesa (se houver)
5. Registrar provas relevantes

Extensão ideal: 1-2 páginas
</objetivo>
```

**Por que funciona:**
- Objetivo claro e verificável
- Lista de entregas específicas
- Parâmetro de qualidade (extensão)

#### `<formato_saida>` - Como Entregar

```markdown
<formato_saida>
RELATÓRIO

Trata-se de `TIPO DE AÇÃO` ajuizada por `AUTOR` em face de `RÉU`.

**FATOS:**
[Narrativa cronológica dos fatos relevantes]

**PEDIDOS:**
[Lista dos pedidos da parte autora]

**CONTESTAÇÃO:**
[Síntese da defesa, se houver]

**PROVAS:**
[Documentos e perícias relevantes]
</formato_saida>
```

**Por que funciona:**
- Template literal (não descrição do template)
- Placeholders claros entre crases
- Estrutura que pode ser copiada

#### `<pecas_relevantes>` - O Que Considerar

```markdown
<pecas_relevantes>
INCLUIR (ordem de prioridade):
1. Petição inicial - SEMPRE
2. Contestação - se houver
3. Réplica - se houver
4. Laudos periciais - essenciais
5. Decisões interlocutórias relevantes

IGNORAR:
- Procurações e substabelecimentos
- Certidões de rotina
- Despachos de mero expediente
- Comprovantes de pagamento de custas
</pecas_relevantes>
```

**Por que funciona:**
- Priorização explícita
- Lista de exclusão (evita ruído)
- Economia de contexto

#### `<armadilha>` - Experiência Destilada

```markdown
<armadilha>
CUIDADO: Partes frequentemente anexam sentenças de OUTROS
processos como "precedentes favoráveis".

NÃO confunda essas sentenças com a decisão do processo atual.
Sempre verifique o número do processo citado.

Sinais de alerta:
- "Conforme sentença proferida no processo XXX..."
- Número de processo diferente nos autos
- Data de julgamento anterior à distribuição
</armadilha>
```

**Por que funciona:**
- Erro real, não hipotético
- Explicação do porquê
- Sinais concretos para detectar

#### `<exemplo>` - Mostrar, Não Dizer

```markdown
<exemplo>
RELATÓRIO

Trata-se de AÇÃO ORDINÁRIA ajuizada por MARIA DA SILVA em face
do INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, objetivando a
concessão de aposentadoria por invalidez.

**FATOS:**
A autora, nascida em 15/03/1965, exerceu atividade rural desde
a infância. Em 2019, foi diagnosticada com artrose severa nos
joelhos, impossibilitando a continuidade do trabalho...

[continua...]
</exemplo>
```

**Por que funciona:**
- Exemplo completo, não fragmento
- Mesmo formato do `<formato_saida>`
- Demonstra o nível de detalhe esperado

### 4.3 O Princípio da Altitude Correta

A Anthropic recomenda encontrar a "altitude correta" nas instruções:

```
MUITO ALTO (vago demais):
"Faça um bom relatório"
→ Claude decide tudo, resultado imprevisível

MUITO BAIXO (micro-gerenciamento):
"Na linha 1, escreva 'RELATÓRIO' em maiúsculas,
 pule uma linha, na linha 3 escreva 'Trata-se de'..."
→ Inflexível, quebra com qualquer variação

ALTITUDE CORRETA:
"Gere um relatório no formato Marmelstein,
 começando com o tipo de ação e partes,
 seguido de fatos em ordem cronológica..."
→ Direção clara + flexibilidade de execução
```

---

## Parte 5: Orquestradores

### 5.1 O Que É um Orquestrador

Um **orquestrador** é um prompt especializado que:

1. Conhece todas as etapas do pipeline
2. Sabe a ordem de execução
3. Valida saídas entre etapas
4. Decide quando parar ou prosseguir
5. Coordena passagem de contexto

### 5.2 Estrutura de um Orquestrador

```markdown
# Orquestrador: [Nome do Pipeline]

## Visão Geral
[Diagrama do fluxo completo]

## Tabela de Contratos
[Todas as etapas com entrada/saída/modelo]

## Regras de Execução
- Ordem: SEQUENCIAL (nunca paralelo)
- Cada etapa usa Task tool com modelo especificado
- Validar saída antes de prosseguir

## Fluxo de Execução

### Etapa 1: [Nome]
1. Ler prompt de `etapas/01-xxx.md`
2. Executar via Task tool
3. Validar saída
4. Se OK: prosseguir | Se ERRO: parar

### Etapa 2: [Nome]
[...]

## Tratamento de Erros
[O que fazer quando algo falha]
```

### 5.3 Exemplo Real: Orquestrador do Pipeline Sentença

```markdown
# Orquestrador: Pipeline de Sentença

## Fluxo Visual

processo.txt
     │
     ▼
┌─────────────────────────────┐
│   ETAPA 1: RELATÓRIO        │
│   Entrada: processo.txt     │
│   Saída: relatorio.md       │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│   ETAPA 2: ANÁLISE          │
│   Entrada: relatorio.md     │
│   Saída: analise.md         │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│   ETAPA 3: FUNDAMENTAÇÃO    │
│   Entrada: relatorio + análise │
│   Saída: fundamentacao.md   │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│   ETAPA 4: MERGE            │
│   Entrada: relatorio + fund │
│   Saída: minuta.md          │
└─────────────────────────────┘

## Regras de Execução

1. **NUNCA execute etapas em paralelo**
   - Cada etapa depende da anterior
   - Aguarde conclusão completa antes de prosseguir

2. **Use Task tool para cada etapa**
   - Contexto isolado por etapa
   - Modelo especificado na tabela de contratos

3. **Valide antes de prosseguir**
   - Verifique se arquivo foi criado
   - Verifique se formato está correto
   - Se inválido: PARE e reporte

## Como Chamar Cada Etapa

### Etapa 1: Relatório
```
Task tool:
- Prompt: Conteúdo de etapas/01-relatorio.md
- Entrada: processo.txt
- Modelo: opus
```

### Etapa 2: Análise
```
Task tool:
- Prompt: Conteúdo de etapas/02-analise.md
- Entrada: relatorio.md gerado na Etapa 1
- Modelo: opus
```

[...]
```

### 5.4 Ativação Progressiva em Ação

O orquestrador demonstra o princípio de **ativação progressiva**:

```
CONTEXTO INICIAL (antes de iniciar):
├── CLAUDE.md (sempre presente)
└── Pedido do usuário: "Gere sentença do processo X"

ETAPA 1 (orquestrador carrega):
├── CLAUDE.md
├── orquestrador.md (carregado pelo comando)
├── etapas/01-relatorio.md (carregado pelo orquestrador)
└── processo.txt (entrada)

ETAPA 2 (contexto muda):
├── CLAUDE.md
├── orquestrador.md
├── etapas/02-analise.md (novo prompt)
└── relatorio.md (saída anterior vira entrada)

[E assim por diante...]
```

**Observe:** O contexto muda DINAMICAMENTE. Não carregamos tudo de uma vez.

---

## Parte 6: Boas Práticas Consolidadas

### 6.1 Na Escrita de Prompts

| Prática | Exemplo |
|---------|---------|
| **Use delimitadores claros** | `<persona>`, `<objetivo>`, `<formato_saida>` |
| **Mostre, não diga** | Inclua `<exemplo>` completo, não descrição |
| **Seja específico sobre formato** | Template literal, não "use formato adequado" |
| **Documente armadilhas** | Erros reais que você já encontrou |
| **Limite o escopo** | Uma tarefa por prompt de etapa |

### 6.2 No Design de Contratos

| Prática | Exemplo |
|---------|---------|
| **Nomeie arquivos consistentemente** | `[numero]-[tipo].md` |
| **Especifique modelo** | "Use opus para esta etapa" |
| **Defina validação** | "Deve começar com RELATÓRIO" |
| **Documente dependências** | "Requer saída da Etapa 1" |

### 6.3 Na Orquestração

| Prática | Exemplo |
|---------|---------|
| **Sequencial quando depende** | Relatório → Análise → Fundamentação |
| **Paralelo quando independe** | Múltiplas pesquisas simultâneas |
| **Valide entre etapas** | Verificar formato antes de prosseguir |
| **Falhe rápido** | Se etapa 1 falhar, não tente etapa 2 |

### 6.4 No CLAUDE.md

| Prática | Exemplo |
|---------|---------|
| **Atualize regularmente** | Após cada mudança significativa |
| **Use tabelas para referência** | Commands, skills, status |
| **Documente decisões** | "Usamos X porque Y" |
| **Inclua diagramas ASCII** | Fluxos visuais |

---

## Parte 7: Erros Comuns e Como Evitar

### 7.1 Erros em Prompts de Etapa

| Erro | Consequência | Solução |
|------|--------------|---------|
| **Sem `<exemplo>`** | Formato inconsistente | Sempre inclua exemplo completo |
| **Objetivo vago** | Claude "adivinha" | Liste entregas específicas |
| **Persona ausente** | Tom inconsistente | Defina papel claramente |
| **Instruções contraditórias** | Comportamento imprevisível | Revise para consistência |

### 7.2 Erros em Contratos

| Erro | Consequência | Solução |
|------|--------------|---------|
| **Entrada não especificada** | Contexto errado | Documente arquivos exatos |
| **Saída ambígua** | Nomes inconsistentes | Padrão de nomenclatura |
| **Sem validação** | Erros propagam | Checar antes de prosseguir |
| **Modelo não definido** | Custo imprevisível | Especifique opus/sonnet/haiku |

### 7.3 Erros de Orquestração

| Erro | Consequência | Solução |
|------|--------------|---------|
| **Paralelizar dependências** | Saída incorreta | Sequencial quando depende |
| **Não validar saídas** | Erros em cascata | Validação obrigatória |
| **Contexto acumulado** | Estouro de tokens | Isolar contexto por etapa |
| **Sem tratamento de erro** | Sistema trava | Definir fallback |

### 7.4 Erros no CLAUDE.md

| Erro | Consequência | Solução |
|------|--------------|---------|
| **Muito extenso** | Tokens desperdiçados | Máximo 500 linhas |
| **Desatualizado** | Instruções erradas | Revisão regular |
| **Duplicação** | Inconsistências | Uma fonte de verdade |
| **Sem estrutura** | Difícil consultar | Seções padronizadas |

---

## Parte 8: Exercício Prático

### 8.1 Cenário

Você precisa criar um pipeline para **analisar contratos comerciais** com as seguintes etapas:

1. **Extração** - Identificar partes, objeto, valor, prazo
2. **Análise de Riscos** - Cláusulas problemáticas
3. **Resumo Executivo** - Para decisão do gestor

### 8.2 Tarefa

Crie:

1. **Contrato da Etapa 1** (extração)
   - Defina entrada, saída, modelo
   - Escreva o prompt completo com todas as seções

2. **Tabela de contratos** do pipeline completo

3. **Estrutura do orquestrador** (não precisa completo)

### 8.3 Template de Resposta

```markdown
## Etapa 1: Extração de Dados Contratuais

<!--
ENTRADA: contrato.pdf (texto extraído)
SAÍDA: dados-contrato.md
MODELO: sonnet
-->

<persona>
[Sua definição]
</persona>

<objetivo>
[Sua definição]
</objetivo>

<formato_saida>
[Seu template]
</formato_saida>

[... outras seções ...]
```

---

## Parte 9: Checklist de Qualidade

### Para Prompts de Etapa

- [ ] Tem `<persona>` definida?
- [ ] Tem `<objetivo>` claro e mensurável?
- [ ] Tem `<formato_saida>` como template literal?
- [ ] Tem `<exemplo>` completo?
- [ ] Tem `<armadilha>` com erros reais?
- [ ] Contrato documentado no cabeçalho?

### Para Orquestradores

- [ ] Tabela de contratos completa?
- [ ] Fluxo visual (diagrama ASCII)?
- [ ] Regras de execução claras?
- [ ] Validação entre etapas definida?
- [ ] Tratamento de erro especificado?

### Para CLAUDE.md

- [ ] Propósito do projeto claro?
- [ ] Estrutura do repositório documentada?
- [ ] Commands e skills listados?
- [ ] Fluxos principais com diagrama?
- [ ] Atualizado com último status?

---

## Resumo da Aula

### Conceitos-Chave

1. **Toda instrução no contexto é prompt** - CLAUDE.md, orquestradores, etapas
2. **Ativação progressiva** - Carregar contexto quando necessário, não tudo de uma vez
3. **Contratos explícitos** - Entrada, saída, modelo, validação
4. **Altitude correta** - Nem vago demais, nem micro-gerenciamento
5. **Validação entre etapas** - Verificar antes de prosseguir

### Estrutura de um Sistema Agêntico Bem Projetado

```
projeto/
├── CLAUDE.md                    # DNA do projeto
├── pipelines/
│   └── meu-pipeline/
│       ├── README.md            # Documentação
│       ├── orquestrador.md      # Coordenador
│       └── etapas/
│           ├── 01-primeira.md   # Prompt etapa 1
│           ├── 02-segunda.md    # Prompt etapa 2
│           └── 03-terceira.md   # Prompt etapa 3
└── saidas/
    └── processo-XXX/
        ├── etapa1-saida.md
        ├── etapa2-saida.md
        └── resultado-final.md
```

### Fórmula de Sucesso

```
CLAUDE.md bem escrito
    + Contratos explícitos
    + Prompts estruturados
    + Orquestração clara
    + Validação entre etapas
    = Sistema previsível e confiável
```

---

## Próximos Passos

1. **Pratique** - Crie um mini-pipeline para uma tarefa sua
2. **Revise** - Analise seu CLAUDE.md atual
3. **Documente** - Transforme conhecimento tácito em prompts explícitos

---

## Leitura Complementar

- [Context Engineering](https://www.anthropic.com/research/context-engineering) - Artigo da Anthropic
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Guia oficial
- Pipeline Sentença do CLERK - Exemplo completo em produção
