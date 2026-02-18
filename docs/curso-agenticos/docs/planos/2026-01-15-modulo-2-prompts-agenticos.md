# Módulo 2: Prompts Agênticos - Plano de Implementação

> **Para Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans para implementar este plano task-by-task.

**Data:** 2026-01-15
**Status:** PLANEJADO

**Goal:** Criar módulo completo sobre engenharia de documentação e prompts para sistemas agênticos

**Architecture:** O módulo será composto por 4 aulas que cobrem os 4 pilares da engenharia de sistemas agênticos: Prompt, Contexto, Capacidades e Workflows. Cada aula terá roteiro teórico e hands-on prático.

**Tech Stack:** HTML/CSS/JS (site existente), Markdown (roteiros de aula)

---

## Visão Geral do Módulo

### Tema Central
Como **ESCREVER, ESTRUTURAR e OTIMIZAR** a documentação que alimenta sistemas agênticos:
- CLAUDE.md (contexto do projeto)
- Commands (atalhos de prompt)
- Skills (expertise encapsulada)
- Workflows (pipelines de execução)

### Os 4 Pilares

```
┌─────────────────────────────────────────────────────────────────┐
│                  MÓDULO 2: PROMPTS AGÊNTICOS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   AULA 6: ENGENHARIA DE PROMPT                                  │
│   └── A anatomia do prompt eficaz                               │
│   └── Regras explícitas (SEMPRE/NUNCA/PREFERIR)                 │
│   └── Prompt Learning Loop                                      │
│                                                                 │
│   AULA 7: ENGENHARIA DE CONTEXTO                                │
│   └── Progressive Disclosure                                    │
│   └── Hierarquia de CLAUDE.md                                   │
│   └── Gerenciamento de Context Window                           │
│                                                                 │
│   AULA 8: ENGENHARIA DE CAPACIDADES                             │
│   └── Anatomia de Commands e Skills                             │
│   └── Templates e exemplos                                      │
│   └── Organização de arquivos                                   │
│                                                                 │
│   AULA 9: ENGENHARIA DE WORKFLOWS                               │
│   └── Pipelines deterministicos                                 │
│   └── Checkpoints e Gates                                       │
│   └── Error handling e recuperação                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Estrutura de Cada Aula

Cada aula seguirá o formato estabelecido:

| Componente | Descrição |
|------------|-----------|
| **Roteiro teórico** | `aulas/aula-XX/roteiro-aula-XX.md` (~1000-1500 linhas) |
| **Página HTML** | `site/pages/aula-XX.html` (seguindo template existente) |
| **Hands-on** | `hands-on/modulo-02-hands-on-*.md` (exercícios práticos) |

---

## Aula 6: Engenharia de Prompt

### Objetivos de Aprendizagem
1. Compreender a diferença entre prompts vagos e específicos
2. Aplicar o padrão SEMPRE/NUNCA/PREFERIR em regras
3. Implementar o Prompt Learning Loop com feedback específico
4. Evitar os 10 erros mais comuns ao escrever prompts

### Conteúdo Principal

**Bloco 1: Paradigma Spec-Driven** (~25min)
- O que é Spec-Driven Development
- As 3 fases: Requirements → Design → Tasks
- Vibe Coding vs Vibe Engineering
- Citação: Al Harris (Amazon Kiro)

**Bloco 2: Anatomia do Prompt Eficaz** (~30min)
- Estrutura universal do prompt
- Seções obrigatórias: Contexto, Tarefa, Regras, Saída
- Exemplos: prompt fraco vs prompt forte
- Exercício: reescrever prompt vago

**Bloco 3: Regras Explícitas** (~25min)
- O padrão SEMPRE/NUNCA/PREFERIR
- Por que regras explícitas funcionam melhor
- Cobertura de casos: requisitos, restrições, prioridades
- Exercício: escrever 10 regras para tarefa jurídica

**Bloco 4: Prompt Learning Loop** (~30min)
- O ciclo: Escrever → Rodar → Avaliar → Refinar
- Feedback fraco vs feedback forte
- Critério de convergência (5 sucessos consecutivos)
- Exercício: iterar prompt até convergência

**Bloco 5: Os 10 Erros Mais Comuns** (~20min)
- Lista de anti-padrões
- Como evitar cada erro
- Checklist de validação
- Exercício: identificar erros em prompts ruins

### Fontes (Transcrições)
- `aula-04/roteiro-aula-04.md` linhas 21-184 (Spec-Driven)
- `aula-04/roteiro-aula-04.md` linhas 220-258 (Regras Explícitas)
- `aula-04/roteiro-aula-04.md` linhas 842-979 (Prompt Learning Loop)
- `aula-04/roteiro-aula-04.md` linhas 1045-1177 (10 Erros)

### Especialistas a Citar
- Al Harris (Amazon Kiro) - Spec-Driven
- Kitze - Vibe Engineering
- SallyAnn DeLucia (Arize) - Feedback específico
- Barry Zhang (Anthropic) - Regras explícitas

---

## Aula 7: Engenharia de Contexto

### Objetivos de Aprendizagem
1. Aplicar Progressive Disclosure no CLAUDE.md
2. Gerenciar a hierarquia de contextos (global, projeto, subpasta)
3. Otimizar uso da Context Window
4. Usar referências em vez de conteúdo embutido

### Conteúdo Principal

**Bloco 1: O Problema do Contexto Inchado** (~20min)
- Por que CLAUDE.md gigante é anti-padrão
- Custo de tokens por requisição
- Impacto na qualidade das respostas
- Citação: Barry Zhang (Anthropic)

**Bloco 2: Progressive Disclosure** (~30min)
- Metadados visíveis, detalhes sob demanda
- Estrutura ideal: 200-300 linhas
- Como usar referências ("Ver: docs/arquivo.md")
- Exercício: refatorar CLAUDE.md inchado

**Bloco 3: Hierarquia de CLAUDE.md** (~25min)
- Global (~/.claude/CLAUDE.md)
- Projeto (./CLAUDE.md)
- Subpasta (./pasta/CLAUDE.md)
- Ordem de precedência e sobreescrita
- Exercício: configurar hierarquia para projeto

**Bloco 4: Context Window Management** (~25min)
- O que é a context window
- Comando /compact e quando usar
- Estratégias de economia de tokens
- Quando iniciar nova sessão

**Bloco 5: Context is King** (~20min)
- Contexto rico > instruções longas
- Como estruturar informação contextual
- Citação: Dex Horthy (12 Fatores)
- Exercício: transformar instruções em contexto

### Fontes (Transcrições)
- `aula-02/roteiro-aula-02b.md` linhas 302-508 (CLAUDE.md)
- `aula-04/roteiro-aula-04.md` linhas 342-376 (Progressive Disclosure)
- `aula-02/roteiro-aula-02a.md` linhas 270-287 (Context is King)

### Especialistas a Citar
- Barry Zhang (Anthropic) - Progressive Disclosure
- Dex Horthy - Context is King
- Mahesh Murag (Anthropic) - Hierarquia de contextos

---

## Aula 8: Engenharia de Capacidades

### Objetivos de Aprendizagem
1. Criar Commands eficazes com $ARGUMENTS
2. Estruturar Skills com SKILL.md completo
3. Organizar arquivos e pastas corretamente
4. Escolher entre Command vs Skill para cada caso

### Conteúdo Principal

**Bloco 1: Commands - Atalhos de Prompt** (~25min)
- O que são Commands
- Estrutura do arquivo .md
- Variáveis: $ARGUMENTS, $FILE
- Localização: global vs projeto
- Exercício: criar 3 Commands jurídicos

**Bloco 2: Anatomia da Skill** (~30min)
- "Skills são apenas pastas" - Barry Zhang
- Estrutura obrigatória do SKILL.md
- Seções: Quando Usar, Como Funciona, Regras, Formato, Exemplos
- Exercício: criar Skill completa

**Bloco 3: Command vs Skill - Quando Usar Cada** (~20min)
- Regra prática: < 50 linhas → Command
- Critérios de decisão
- Exemplos de cada caso
- Exercício: classificar 10 tarefas

**Bloco 4: Templates e Exemplos** (~25min)
- Por que exemplos são essenciais
- Estrutura: Entrada → Saída esperada
- Caso simples + caso complexo
- Exercício: criar 3 exemplos para Skill

**Bloco 5: Organização de Arquivos** (~20min)
- Estrutura de pastas recomendada
- Convenções de nomenclatura
- Versionamento e manutenção
- Checklist de organização

### Fontes (Transcrições)
- `aula-02/roteiro-aula-02b.md` linhas 512-676 (Commands)
- `aula-02/roteiro-aula-02b.md` linhas 679-910 (Skills)
- `aula-04/roteiro-aula-04.md` linhas 187-408 (Anatomia da Skill)

### Especialistas a Citar
- Barry Zhang (Anthropic) - "Skills são apenas pastas"
- Mahesh Murag (Anthropic) - Arquitetura de Skills

---

## Aula 9: Engenharia de Workflows

### Objetivos de Aprendizagem
1. Projetar pipelines deterministicos
2. Inserir checkpoints nos pontos corretos
3. Implementar tratamento de erros estruturado
4. Definir gates baseados em risco

### Conteúdo Principal

**Bloco 1: Pipelines vs Agência Livre** (~25min)
- Trade-off: controle vs flexibilidade
- Quando usar cada abordagem
- Pipeline: previsibilidade e auditoria
- Citação: Dex Horthy (Workflow com bolsões agênticos)

**Bloco 2: Padrão RPI: Research → Plan → Implement** (~30min)
- As 3 fases do desenvolvimento guiado
- Gates entre fases
- Outputs esperados de cada fase
- Exercício: aplicar RPI em tarefa jurídica

**Bloco 3: Checkpoints e Gates** (~25min)
- Matriz de risco: custo do erro × descoberta
- Tipos de checkpoint: HITL, HOTL, HOOTL
- Onde inserir supervisão humana
- Exercício: mapear checkpoints em pipeline

**Bloco 4: Error Handling Estruturado** (~25min)
- Capturar → Filtrar → Resumir → Tentar
- Regra de 3 tentativas
- Escalação para humano
- Citação: Dex Horthy (não coloque stack trace)

**Bloco 5: Framework de Custo do Erro** (~25min)
- As 3 perguntas antes de projetar
- Mapeando risco em configuração
- Citação: Barry Zhang (custo e descoberta)
- Exercício: avaliar risco de 5 tarefas

### Fontes (Transcrições)
- `aula-04/roteiro-aula-04.md` linhas 623-838 (RPI)
- `aula-02/roteiro-aula-02a.md` linhas 390-502 (Checkpoints)
- `aula-04/roteiro-aula-04.md` linhas 1004-1177 (Error Handling)
- `aula-04/roteiro-aula-04.md` linhas 985-1003 (Custo do Erro)

### Especialistas a Citar
- Dex Horthy - Workflows com bolsões agênticos
- Barry Zhang (Anthropic) - Framework de custo do erro

---

## Tarefas de Implementação

### Task 1: Criar Estrutura de Pastas

**Files:**
- Create: `aulas/aula-06/roteiro-aula-06.md`
- Create: `aulas/aula-07/roteiro-aula-07.md`
- Create: `aulas/aula-08/roteiro-aula-08.md`
- Create: `aulas/aula-09/roteiro-aula-09.md`

### Task 2: Criar Roteiros de Aula

**Para cada aula (6-9):**
1. Criar roteiro seguindo estrutura definida
2. Incluir citações dos especialistas (em inglês + tradução)
3. Adicionar diagramas ASCII
4. Criar exercícios práticos

### Task 3: Criar Páginas HTML do Site

**Files:**
- Create: `site/pages/aula-6.html`
- Create: `site/pages/aula-7.html`
- Create: `site/pages/aula-8.html`
- Create: `site/pages/aula-9.html`

### Task 4: Atualizar Navegação do Site

**Files:**
- Modify: `site/index.html` (adicionar seção Módulo 2)
- Modify: `site/js/main.js` (atualizar menu dropdown)

### Task 5: Criar Hands-on do Módulo 2

**Files:**
- Create: `hands-on/modulo-02-hands-on-prompt-learning-loop.md`
- Create: `hands-on/modulo-02-hands-on-progressive-disclosure.md`
- Create: `hands-on/modulo-02-hands-on-skill-completa.md`
- Create: `hands-on/modulo-02-hands-on-pipeline-rpi.md`

---

## Estimativa de Esforço

| Componente | Quantidade | Esforço |
|------------|-----------|---------|
| Roteiros de aula | 4 | ~1000-1500 linhas cada |
| Páginas HTML | 4 | ~300 linhas cada |
| Hands-on | 4 | ~500 linhas cada |
| Atualizações site | 2 | ~50 linhas cada |

**Total:** ~8.000-10.000 linhas de conteúdo

---

## Dependências

- [ ] Aulas 0-5 existentes (base de referência)
- [ ] Transcrições AI Engineer (fonte de citações)
- [ ] CSS e templates do site (estrutura visual)
- [ ] Glossário existente (consistência terminológica)

---

## Critérios de Sucesso

1. Cada aula tem roteiro completo com citações verificáveis
2. Cada aula tem página HTML funcional no site
3. Cada aula tem pelo menos 1 hands-on prático
4. Navegação do site atualizada com Módulo 2
5. Conteúdo consistente com glossário existente
6. Diagramas ASCII renderizam corretamente

---

## Próximos Passos Imediatos

1. **Criar estrutura de pastas** para aulas 6-9
2. **Implementar Aula 6** (Engenharia de Prompt) como primeira entrega
3. **Validar formato** antes de continuar com demais aulas
4. **Atualizar navegação** do site para incluir Módulo 2
