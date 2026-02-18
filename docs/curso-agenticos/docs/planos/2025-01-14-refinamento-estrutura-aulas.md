# Refinamento da Estrutura das 5 Aulas

> **Documento de Análise:** Baseado no mapeamento de 77 transcrições do AI Engineer Summit
> **Data:** 2025-01-14
> **Objetivo:** Identificar lacunas, redundâncias e propor ajustes

---

## 1. Análise da Distribuição de Temas

### Cobertura por Aula (baseada no mapeamento)

| Aula | Transcrições Alta Prioridade | Transcrições Média Prioridade | Total |
|------|------------------------------|-------------------------------|-------|
| Aula 1 (Agentes) | 6 | 4 | 10 |
| Aula 2 (Claude Code) | 5 | 3 | 8 |
| Aula 3 (Arquitetura) | 7 | 3 | 10 |
| Aula 4 (Primeiros Agentes) | 6 | 5 | 11 |
| Aula 5 (Sistema Jurídico) | 5 | 4 | 9 |

**Observação:** A distribuição está relativamente equilibrada, com Aula 4 tendo maior cobertura (esperado, pois é a mais prática).

---

## 2. Lacunas Identificadas

### 2.1 Lacunas Conceituais

| Lacuna | Impacto | Transcrição que Cobre | Sugestão |
|--------|---------|----------------------|----------|
| **Durabilidade de Agentes** | Alto | Cornelia Davis (Temporal), Peter Wielander (Vercel) | Incluir na Aula 3 - workflows duráveis |
| **Test Time Training** | Médio | Alberto Romero (Meta-AC) | Mencionar em Aula 3 como técnica avançada |
| **Hierarchical Verification** | Alto | Alberto Romero, Eno Reyes | Fundamental para Aula 5 (validação jurídica) |
| **Prompt Learning Loop** | Alto | SallyAnn DeLucia (Arize) | Incluir em Aula 4 - como otimizar prompts |

### 2.2 Lacunas Práticas

| Lacuna | Impacto | Solução Proposta |
|--------|---------|------------------|
| **Debugging de Agentes** | Alto | Adicionar seção em Aula 2 ou 3 |
| **Evals e Benchmarks** | Médio | Naman Jain (Cursor) cobre isso - incluir em Aula 4 |
| **Custos e Otimização** | Alto | Disperso em várias palestras - consolidar em Aula 2 |

---

## 3. Redundâncias Identificadas

### 3.1 Conceitos Repetidos

| Conceito | Aulas que Cobrem | Recomendação |
|----------|------------------|--------------|
| MCP Basics | Aulas 2, 3, 5 | Concentrar em Aula 2, apenas aplicar em 3 e 5 |
| Skills vs Commands | Aulas 2, 4 | Conceito em 2, prática em 4 |
| Context Engineering | Aulas 3, 4 | Teoria em 3, aplicação em 4 |

### 3.2 Palestras com Sobreposição

| Palestras | Tema Comum | Melhor Uso |
|-----------|------------|------------|
| Dex Horthy (12 Factor + RPI) | Arquitetura | Usar RPI em Aula 4, 12 Factor em Aula 3 |
| Boris Cherny + Jared Zoneraich | Claude Code Internals | Jared para técnico, Boris para filosofia |
| Lisa Orr + Mark Myshatyn | Agentes em Produção | Lisa para Aula 5, Mark para governance |

---

## 4. Proposta de Ajustes

### Aula 1: O Fascinante Mundo dos Agentes
**Status:** OK - Bem coberta

**Manter:**
- Escala de autonomia (Assistente → Protoagente → Agente)
- Filosofia de Regência Cognitiva
- Vibe Coding vs Vibe Engineering (Kitze)

**Adicionar:**
- Dados do estudo METR (Joel Becker) - realidade vs hype
- Proactive Agents (Kath Korevec) - mental load

**Remover:**
- Detalhes técnicos de MCP (mover para Aula 2)

---

### Aula 2: Fundamentos do Claude Code
**Status:** Precisa expansão em custos e debug

**Manter:**
- Arquitetura while loop + tools
- CLAUDE.md e configuração
- Prefixos /, @, !

**Adicionar:**
- Seção de **Custos e Monitoramento** (/cost, token management)
- Seção de **Debugging Básico** (/doctor, logs)
- Extended Thinking Budget (Katelyn Lesse)

**Remover:**
- Discussão profunda de MCP (mover para seção própria ou Aula 5)

---

### Aula 3: Arquitetura de Agentes
**Status:** Mais densa - considerar split ou priorização

**Manter:**
- 12 Factor Agents (Dex Horthy)
- Smart Zone vs Dumb Zone
- Subagentes e paralelização

**Adicionar:**
- **Durabilidade** (Temporal/Vercel) - workflows que sobrevivem a falhas
- **Hierarchical Verification** (Alberto Romero) - cascata de validação

**Priorizar (se tempo limitado):**
1. Pipelines e Workflows (essencial)
2. Gates e Routers (essencial)
3. Subagentes (essencial)
4. Durabilidade (importante)
5. Meta-AC (avançado - opcional)

---

### Aula 4: Construindo os Primeiros Agentes
**Status:** OK - Foco prático bem definido

**Manter:**
- Anatomia de Skills
- Feature-dev workflow
- Criação de Commands

**Adicionar:**
- **Prompt Learning Loop** (SallyAnn) - otimização contínua
- **Spec-Driven Development** (Al Harris) - antes de codar
- **RPI Pattern** (Dex Horthy) - Research-Plan-Implement

**Projeto Prático Sugerido:**
- Criar um agente de análise de documentos (não jurídico)
- Usar skills do superpack
- Iterar com feedback

---

### Aula 5: Sistema Jurídico Agêntico
**Status:** OK - Precisa conexão clara com casos práticos

**Manter:**
- MCPs de precedentes (BNP, JULIA, CJF)
- Pipeline completo: Baixar → Converter → Relatar → Analisar → Minutar
- Revisão com subagentes paralelos

**Adicionar:**
- **Scout Agent como Analogia** (Lisa Orr - Zapier)
  - Support → Diagnosis → Codegen → Review
  - Paralelo: Triagem → Análise → Minuta → Revisão
- **Explainability e Governance** (Mark Myshatyn - Los Alamos)
- **Crawl-Walk-Run** (Asaf Bord) - abordagem incremental

**Conexões Jurídicas:**
| Conceito Técnico | Analogia Jurídica |
|------------------|-------------------|
| Scout Agent (Zapier) | CLERK - Assessor Agêntico |
| Diagnosis API | Fase de Análise Processual |
| Quality Gates | Revisão por Subagentes |
| Embedding tools | Integração com PJE |

---

## 5. Nova Estrutura Proposta

```
AULA 1: O Fascinante Mundo dos Agentes (2h)
├── O que é um agente vs assistente
├── Escala de autonomia
├── Regência Cognitiva (filosofia)
├── Realidade vs Hype (METR study)
└── Por que terminal? (Claude Code)

AULA 2: Fundamentos do Claude Code (3h)
├── Instalação e configuração
├── Anatomia da interface
├── CLAUDE.md e settings.json
├── Comandos essenciais
├── Custos e monitoramento (NOVO)
├── Debugging básico (NOVO)
└── Extended Thinking

AULA 3: Arquitetura de Agentes (3h)
├── Pipeline vs Workflow vs Agent Loop
├── Gates e Routers
├── Subagentes e paralelização
├── Gerenciamento de contexto
├── Durabilidade (Temporal/Vercel) (NOVO)
├── Hierarchical Verification (NOVO)
└── Skills, Commands, Hooks

AULA 4: Construindo os Primeiros Agentes (4h)
├── Spec-Driven Development (NOVO)
├── RPI: Research-Plan-Implement (NOVO)
├── Anatomia de Skills
├── Prompt Learning Loop (NOVO)
├── Feature-dev workflow
├── Criando Commands
├── Projeto prático
└── Debugging e iteração

AULA 5: Sistema Jurídico Agêntico (4h)
├── Analogia Scout Agent = CLERK
├── MCPs jurídicos (BNP, JULIA, CJF)
├── Integração PJE
├── Pipeline completo
├── Explainability e Governance (NOVO)
├── Crawl-Walk-Run (NOVO)
├── Revisão com subagentes
└── Projeto final
```

---

## 6. Citações-Chave para Usar no Curso

| Citação | Autor | Aula |
|---------|-------|------|
| "Give it tools and then get out of the way" | Jared Zoneraich | Aula 1 |
| "Skills are just folders" | Barry Zhang | Aula 4 |
| "The more general model always wins" | Boris Cherny | Aula 1 |
| "Embedding tools is the key to usage" | Lisa Orr | Aula 5 |
| "AI cannot replace thinking. It can only amplify the thinking you have done" | Dex Horthy | Aula 1 |
| "Clean code amplifies AI gains" | Yegor Denisov-Blanch | Aula 3 |
| "No more slop" | swyx | Aula 4 |
| "The hard part was never typing the code" | Jake Nations | Aula 3 |

---

## 7. Próximos Passos

1. **Validar com o autor** - Esta proposta de ajustes
2. **Priorizar conceitos** - Se tempo for limitado, quais cortar?
3. **Definir duração** - 2h, 3h ou 4h por aula?
4. **Iniciar Aula 1** - Após validação

---

*Refinamento concluído em 2025-01-14*
*Projeto: Curso de Sistemas Agênticos*
