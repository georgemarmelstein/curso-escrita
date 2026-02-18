# Curso de Sistemas Agênticos - Plano Mestre

> **Para Claude:** Este é um plano de CURSO, não de código. Cada tarefa é uma etapa de criação de conteúdo pedagógico.

---

## NOTA IMPORTANTE: Roteiro Flexível

Este plano é um **ponto de partida**, não uma camisa de força.

A construção do curso será **orgânica e iterativa**:
- O mapeamento das transcrições pode revelar temas que reorganizam as aulas
- Cada aula desenvolvida pode gerar insights que modificam as seguintes
- Novas fontes (pre-prints, blogs) podem introduzir conceitos não previstos
- O feedback do ensaio síncrono refinará o material

**Princípio:** O plano serve ao curso, não o contrário. Ajustes são esperados e bem-vindos.

---

**Objetivo:** Formar juristas como Regentes de Sistemas Cognitivos, capacitando-os a operar o Claude Code como ambiente de trabalho para orquestração de tarefas jurídicas em escala.

**Filosofia:** Regência Cognitiva - o humano não opera, mas dirige. Não executa, mas rege orquestras de inteligência.

**Público-alvo:** Juristas técnicos (magistrados, advogados, servidores) que querem dominar sistemas agênticos para aumentação do trabalho jurídico.

**Base de Conhecimento:** 77+ transcrições do AI Engineer Summit (estado da arte em agentes)

---

## Visão Geral das Aulas

| Aula | Título | Foco | Ambiente | Status |
|------|--------|------|----------|--------|
| 0 | Apresentação ao Mundo Agêntico | Sensibilização | Apresentação + Demo | **CONCLUÍDA** |
| 1 | O Fascinante Mundo dos Agentes | Conceitual | Web (Claude.ai) | Pendente |
| 2 | Fundamentos do Claude Code | Técnico-prático | Terminal (Claude Code) | Pendente |
| 3 | Arquitetura de Agentes | Conceitual-técnico | Terminal + Diagramas | Pendente |
| 4 | Construindo os Primeiros Agentes | Prático intensivo | Terminal | Pendente |
| 5 | Sistema Jurídico Agêntico | Aplicação real | Terminal + MCPs | Pendente |

---

## Entregáveis do Curso

| Entregável | Descrição | Formato |
|------------|-----------|---------|
| Glossário | Termos essenciais de sistemas agênticos | Markdown/Site |
| Site Completo | Todo o material do curso | HTML/Docusaurus |
| MCPs Jurídicos | BNP, JULIA, CJF (precedentes) | Python/FastMCP |
| Integração PJE | Download e conversão de processos | Skill Claude Code |
| Pipeline Jurídico | Baixar → Converter → Relatar → Analisar → Minutar | Commands + Skills |
| Prompts Jurídicos | Templates para trabalho jurídico | Markdown |

---

## FASE 0: Preparação

### Tarefa 0.1: Mapeamento Panorâmico das Transcrições ✅ CONCLUÍDA

**Objetivo:** Criar índice estruturado de todas as 77+ transcrições

**Passos:**
1. ✅ Ler cada transcrição (leitura rápida, foco em conceitos-chave)
2. ✅ Extrair: palestrante, empresa, tema central, 3-5 insights principais
3. ✅ Categorizar por relevância para cada aula
4. ✅ Criar arquivo `docs/mapeamento-transcricoes.md`

**Artefato:** `docs/mapeamento-transcricoes.md`

**Saída esperada:**
```markdown
## Transcrição: [Nome]
- **Palestrante:** [Nome], [Empresa]
- **Tema:** [Tema central]
- **Insights-chave:**
  1. [Insight 1]
  2. [Insight 2]
  3. [Insight 3]
- **Relevância:** Aula [N] - [Conceito específico]
```

### Tarefa 0.2: Refinamento da Estrutura ✅ CONCLUÍDA

**Objetivo:** Ajustar as 5 aulas com base no mapeamento

**Passos:**
1. ✅ Analisar distribuição de temas nas transcrições
2. ✅ Identificar lacunas (temas importantes não cobertos)
3. ✅ Identificar redundâncias
4. ✅ Propor ajustes na estrutura das aulas
5. ✅ Validar com o autor do curso

**Artefato:** `docs/plans/2025-01-14-refinamento-estrutura-aulas.md`

---

## AULA 0: Apresentação ao Mundo Agêntico ✅ CONCLUÍDA

### Objetivo da Aula
Sensibilizar o público para a mudança de paradigma na interação humano-IA, preparando-os para abandonar a zona de conforto das interfaces amigáveis.

### Metadados
- **Duração:** 45-60 minutos
- **Ambiente:** Apresentação + demonstração ao vivo
- **Público:** Abertura do curso (todos os participantes)

### Estrutura em 8 Blocos

| Bloco | Título | Conteúdo Principal |
|-------|--------|-------------------|
| 1 | Do Mundo dos Assistentes ao Mundo dos Agentes | Humano como middleware, inversão 80/20, subagentes especializados |
| 2 | O Que Mudou (Contexto) | Citação Karpathy ("ferramenta alienígena"), estatísticas 2024-2025, paradoxo METR |
| 3 | Por Que a Interface Limita | Metáfora Bruce Lee + armadura, ironia histórica (Steve Yegge) |
| 4 | O Que É um Agente | Definição funcional, escala L1-L5, 3 pilares (Michele Catasta) |
| 5 | O Terminal Como Ambiente Agêntico | Composabilidade bash, mimetização, terminal-first |
| 6 | As Capacidades do Claude Code | Super-agente, modo YOLO, extended thinking |
| 7 | O Novo Papel do Humano | De operador a regente, metáfora do maestro, vibe engineering |
| 8 | Visão do Curso | Estrutura 5 aulas, sistema CLERK, convite |

### Citações-Chave Utilizadas

| Autor | Citação | Uso |
|-------|---------|-----|
| Karpathy | "Ferramenta alienígena poderosa... sem manual... terremoto magnitude 9" | Abertura do Bloco 2 |
| Karpathy | Lista: agentes, subagentes, prompts, contextos, memória, modos, permissões, tools, plugins, skills, hooks, MCP... | Estrutura do curso |
| Karpathy | "Arregace as mangas para não ficar para trás" | Chamado à ação |
| Willison | "Agentes finalmente funcionam" | Contexto |
| Dex Horthy | "A IA não pode substituir o pensamento. Ela só pode amplificar o pensamento que você já fez" | Filosofia |
| Kitze | "Não dê ferramentas de IA para seus estagiários. Dê para seus seniores" | Advertência |
| Jared Zoneraich | "Give it tools and then get out of the way" | Terminal |
| swyx | "No more slop" | Fechamento |

### Artefatos Criados

| Arquivo | Descrição |
|---------|-----------|
| `aulas/aula-00/roteiro-aula-00.md` | Roteiro completo com 8 blocos |
| `aulas/aula-00/variacoes-abertura.md` | Variações de estilo (TED, Storytelling, etc.) |

### Demonstrações Sugeridas

1. **Demo 1:** Mesma tarefa na interface web vs Claude Code (tempo, autonomia)
2. **Demo 2:** Agente criando ferramentas, iterando, corrigindo
3. **Demo 3:** Múltiplos subagentes paralelos

---

## FASE 1: Aula 1 - O Sistema Agêntico na Prática ✅ EM DESENVOLVIMENTO

### Objetivo da Aula (REFORMULADO)
Demonstrar as capacidades e limitações do modo agêntico no Claude Web/Desktop, comparar com o terminal, e mostrar o resultado final (CLERK) que os alunos vão aprender a construir.

> **Nota:** Aula reformulada para evitar tautologia com Aula 0. Foco em DEMONSTRAÇÃO PRÁTICA, não teoria.

### Estrutura em 6 Blocos

| Bloco | Título | Duração | Tipo |
|-------|--------|---------|------|
| 1 | O Claude Web em Modo Agêntico | 30 min | Demo |
| 2 | Artifacts, Projects e Skills | 25 min | Demo + Hands-on |
| 3 | As Limitações do Web | 20 min | Discussão |
| 4 | O Terminal: Uma Prévia | 15 min | Demo |
| 5 | O Resultado Final: CLERK em Ação | 20 min | Demo + Motivação |
| 6 | Fechamento e Próximos Passos | 10 min | Síntese |

### Conceitos Demonstrados (não teorizados)
- [x] Artifacts no Claude Web
- [x] Projects como "CLAUDE.md do web"
- [x] MCPs pré-configurados (Drive, Notion, GitHub)
- [x] Limitações: sem fluxo contínuo, sem acesso ao sistema
- [x] Comparação visual Web vs Terminal
- [x] CLERK como "resultado final" motivador

### Artefato Criado

| Arquivo | Descrição |
|---------|-----------|
| `aulas/aula-01/roteiro-aula-01.md` | Roteiro completo com 6 blocos |

### Diferença Aula 0 vs Aula 1

| Aspecto | Aula 0 | Aula 1 |
|---------|--------|--------|
| Foco | Sensibilização teórica | Demonstração prática |
| Ambiente | Apresentação | Claude Web + Terminal |
| Tom | "Por que mudar?" | "O que existe hoje?" |
| Resultado | Entender a mudança | Ver as limitações ao vivo |

### Demonstrações Necessárias

1. **Artifact jurídico** — Gerar minuta no Claude Web
2. **Project configurado** — Mostrar instruções persistentes
3. **Limitação ao vivo** — Tentar pipeline completo no web
4. **Terminal preview** — Mesmo cenário no Claude Code
5. **CLERK em ação** — Pipeline completo funcionando

---

## FASE 2: Aula 2 - Fundamentos do Claude Code

### Objetivo da Aula
Instalar, configurar e dominar a interface do Claude Code. Primeiros comandos. Modo YOLO.

### Conceitos a Cobrir
- [ ] O que é Claude Code (CLI vs. API vs. Web)
- [ ] Instalação (3 métodos: npm, brew, binário)
- [ ] Interface do terminal (anatomia da tela)
- [ ] Primeiros comandos (/help, /status, /cost, /config)
- [ ] CLAUDE.md (instruções do projeto)
- [ ] Configuração de permissões (settings.json)
- [ ] Modo YOLO (allowedTools, trust levels)
- [ ] Prefixos especiais (/, @, !)

### Tarefa 2.1: Roteiro Técnico

**Arquivos a criar:**
- `aulas/aula-02/roteiro.md`
- `aulas/aula-02/troubleshooting.md`

**Passos:**
1. Minerar transcrições sobre Claude Code (Jared Zoneraich, Boris Cherny)
2. Documentar instalação passo a passo (Windows, Mac, Linux)
3. Criar guia de troubleshooting
4. Escrever roteiro com checkpoints práticos

### Tarefa 2.2: Hands-on Guiado

**Arquivos a criar:**
- `aulas/aula-02/hands-on/01-instalacao.md`
- `aulas/aula-02/hands-on/02-primeiro-uso.md`
- `aulas/aula-02/hands-on/03-claude-md.md`
- `aulas/aula-02/hands-on/04-modo-yolo.md`

**Passos:**
1. Criar exercício de instalação com verificação
2. Criar exercício "primeiro prompt no terminal"
3. Criar exercício de configuração CLAUDE.md
4. Criar exercício de configuração YOLO

### Tarefa 2.3: Cheatsheet

**Arquivos a criar:**
- `aulas/aula-02/cheatsheet-comandos.md`
- `aulas/aula-02/cheatsheet-prefixos.md`

---

## FASE 3: Aula 3 - Arquitetura de Agentes

### Objetivo da Aula
Dominar os padrões arquiteturais: pipelines, workflows, gates, routers, paralelização, subagentes, gerenciamento de contexto.

### Conceitos a Cobrir
- [ ] Pipeline vs. Workflow vs. Agent Loop
- [ ] Gates (validação, controle de qualidade)
- [ ] Routers (decisão condicional, classificação)
- [ ] Paralelização (Task tool, background tasks)
- [ ] Subagentes (especialização, isolamento de contexto)
- [ ] Gerenciamento de contexto (tokens, compactação, /compact)
- [ ] Skills, Commands, Prompts (taxonomia)
- [ ] Hooks (automação de eventos)

### Tarefa 3.1: Roteiro Arquitetural

**Arquivos a criar:**
- `aulas/aula-03/roteiro.md`
- `aulas/aula-03/diagramas/` (pasta para diagramas)

**Passos:**
1. Minerar transcrições sobre arquitetura (12 Factor Agents, Building Agents)
2. Criar diagramas ASCII/Mermaid para cada padrão
3. Mapear conceitos para funcionalidades do Claude Code
4. Escrever roteiro com exemplos práticos

### Tarefa 3.2: Demonstrações de Padrões

**Arquivos a criar:**
- `aulas/aula-03/demos/demo-pipeline.md`
- `aulas/aula-03/demos/demo-router.md`
- `aulas/aula-03/demos/demo-subagent.md`
- `aulas/aula-03/demos/demo-contexto.md`

### Tarefa 3.3: Exercícios Arquiteturais

**Arquivos a criar:**
- `aulas/aula-03/exercicios/ex-01-pipeline-simples.md`
- `aulas/aula-03/exercicios/ex-02-router-decisao.md`
- `aulas/aula-03/exercicios/ex-03-paralelizacao.md`

---

## FASE 4: Aula 4 - Construindo os Primeiros Agentes

### Objetivo da Aula
Prática intensiva de construção de agentes. Uso de skills existentes (brainstorming, feature-dev). Criação de commands e skills próprios.

### Conceitos a Cobrir
- [ ] Anatomia de uma Skill (SKILL.md, estrutura)
- [ ] Anatomia de um Command (argumentos, descrição)
- [ ] Superpack de skills úteis (brainstorming, writing-plans, etc.)
- [ ] Feature-dev workflow (explore → architect → implement → review)
- [ ] Criando seu primeiro Command
- [ ] Criando sua primeira Skill
- [ ] Debugging e iteração

### Tarefa 4.1: Roteiro Prático

**Arquivos a criar:**
- `aulas/aula-04/roteiro.md`
- `aulas/aula-04/catalogo-skills.md`

**Passos:**
1. Minerar transcrições sobre skills e desenvolvimento
2. Documentar skills do superpack relevantes
3. Criar roteiro de construção progressiva
4. Definir projeto prático da aula

### Tarefa 4.2: Projeto Prático - Agente de Análise de Documentos

**Arquivos a criar:**
- `aulas/aula-04/projeto/especificacao.md`
- `aulas/aula-04/projeto/solucao/` (pasta com solução)

**Passos:**
1. Especificar agente simples (não jurídico ainda)
2. Guiar construção passo a passo
3. Testar e iterar

---

## FASE 5: Aula 5 - Sistema Jurídico Agêntico

### Objetivo da Aula
Aplicação completa: construir o pipeline jurídico do CLERK. MCPs de precedentes. Integração PJE. Fluxo completo.

### Conceitos a Cobrir
- [ ] MCPs: o que são, como funcionam
- [ ] MCP BNP (precedentes vinculantes)
- [ ] MCP JULIA (TRF5)
- [ ] MCP CJF (jurisprudência unificada)
- [ ] Integração PJE (download, conversão PDF→TXT)
- [ ] Pipeline completo: Baixar → Converter → Relatar → Analisar → Minutar
- [ ] Skill de relatório judicial
- [ ] Command de pesquisa de precedentes
- [ ] Revisão com subagentes paralelos

### Tarefa 5.1: Roteiro Aplicado

**Arquivos a criar:**
- `aulas/aula-05/roteiro.md`
- `aulas/aula-05/arquitetura-clerk.md`

**Passos:**
1. Documentar arquitetura completa do CLERK
2. Criar roteiro de construção incremental
3. Preparar processo-exemplo para demonstração

### Tarefa 5.2: Hands-on MCPs

**Arquivos a criar:**
- `aulas/aula-05/hands-on/01-instalando-mcps.md`
- `aulas/aula-05/hands-on/02-pesquisa-bnp.md`
- `aulas/aula-05/hands-on/03-pesquisa-julia.md`
- `aulas/aula-05/hands-on/04-pesquisa-cjf.md`

### Tarefa 5.3: Hands-on Pipeline

**Arquivos a criar:**
- `aulas/aula-05/hands-on/05-baixar-pje.md`
- `aulas/aula-05/hands-on/06-converter-pdf.md`
- `aulas/aula-05/hands-on/07-relatar.md`
- `aulas/aula-05/hands-on/08-analisar.md`
- `aulas/aula-05/hands-on/09-minutar.md`

### Tarefa 5.4: Projeto Final - Pipeline Completo

**Arquivos a criar:**
- `aulas/aula-05/projeto-final/especificacao.md`
- `aulas/aula-05/projeto-final/checklist.md`

---

## FASE 6: Entregáveis Finais

### Tarefa 6.1: Glossário Completo

**Arquivo:** `docs/glossario.md`

**Termos essenciais:**
- Agente, Assistente, Protoagente
- Claude Code, CLI, API
- Command, Skill, Prompt, Hook
- Pipeline, Workflow, Agent Loop
- Gate, Router, Subagente
- MCP, Tool, Resource
- Contexto, Tokens, Compactação
- YOLO, Trust Level, Permissions
- Regência Cognitiva, Aumentação

### Tarefa 6.2: Site do Curso

**Estrutura:**
```
site/
├── index.html (landing page)
├── aulas/
│   ├── aula-01/
│   ├── aula-02/
│   ├── aula-03/
│   ├── aula-04/
│   └── aula-05/
├── recursos/
│   ├── glossario/
│   ├── cheatsheets/
│   └── downloads/
└── sobre/
```

### Tarefa 6.3: Kit de Instalação

**Arquivos:**
- MCPs empacotados (BNP, JULIA, CJF)
- Scripts de instalação
- Configurações de exemplo
- CLAUDE.md template para juristas

---

## Cronograma de Execução

| Fase | Descrição | Dependência | Status |
|------|-----------|-------------|--------|
| 0.1 | Mapeamento transcrições | - | ✅ CONCLUÍDA |
| 0.2 | Refinamento estrutura | 0.1 | ✅ CONCLUÍDA |
| 0.0 | Aula 0 (sensibilização) | 0.2 | ✅ CONCLUÍDA |
| 1.x | Aula 1 completa | 0.0 | **PRÓXIMA** |
| 2.x | Aula 2 completa | 1.x | Pendente |
| 3.x | Aula 3 completa | 2.x | Pendente |
| 4.x | Aula 4 completa | 3.x | Pendente |
| 5.x | Aula 5 completa | 4.x | Pendente |
| 6.x | Entregáveis finais | 5.x | Pendente |

---

## Próximo Passo Imediato

**FASE 1: Aula 1 - O Fascinante Mundo dos Agentes**

Desenvolver o roteiro conceitual completo, distinguindo assistentes de agentes, estabelecendo a escala de autonomia L1-L5, e aprofundando a filosofia de Regência Cognitiva.

**Tarefas:**
- Tarefa 1.1: Roteiro Conceitual
- Tarefa 1.2: Demonstrações Práticas (Modo Web)
- Tarefa 1.3: Material de Apoio

---

*Plano criado em 2025-01-14*
*Última atualização: 2025-01-14 (Aula 0 concluída)*
*Projeto: Curso de Sistemas Agênticos*
*Autor: George Marmelstein + Claude*
