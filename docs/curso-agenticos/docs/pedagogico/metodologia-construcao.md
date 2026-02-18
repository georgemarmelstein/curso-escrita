# Metodologia de Construção do Curso

> **Propósito:** Documentar como este curso foi construído, servindo como meta-demonstração da filosofia ensinada.
> **Insight:** O processo de construção É uma demonstração da Regência Cognitiva.
> **Última atualização:** Janeiro 2026

---

## A Meta-Demonstração

Este curso foi construído usando **exatamente as técnicas que ensina**:

- Autor humano como **Regente** (define objetivos, valida qualidade)
- Claude Code como **Orquestra** (executa pesquisa, redação, estruturação)
- Múltiplos **subagentes paralelos** para pesquisa
- **Diário de bordo** para captura de insights
- **Iteração contínua** com feedback específico

> *"O processo de construção do curso é uma demonstração da filosofia do curso."*
> — Insight #1, Diário de Bordo

---

## Fase 0: Preparação

### 0.1 Mapeamento Panorâmico

**Objetivo:** Criar índice estruturado de 77+ transcrições do AI Engineer Summit

**Método:**
1. Leitura de cada transcrição (foco em conceitos-chave)
2. Extração: palestrante, empresa, tema central, 3-5 insights
3. Categorização por relevância para cada aula
4. Consolidação em `docs/mapeamento-transcricoes.md`

**Artefato:** 291 linhas de mapeamento estruturado

### 0.2 Refinamento da Estrutura

**Objetivo:** Ajustar estrutura das aulas com base no mapeamento

**Método:**
1. Análise de distribuição de temas
2. Identificação de lacunas e redundâncias
3. Proposta de ajustes
4. Validação com autor

**Decisão-chave:** Adicionar Aula 0 (sensibilização) antes das aulas técnicas

---

## Fase 1: Construção de Aulas

### Padrão de Construção por Aula

Cada aula seguiu o mesmo processo:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PIPELINE DE CONSTRUÇÃO DE AULA                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   1. PESQUISA PARALELA (3-6 subagentes)                                 │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│   │Conceito │ │Conceito │ │Conceito │ │Conceito │                       │
│   │   A     │ │   B     │ │   C     │ │   D     │                       │
│   └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘                       │
│        │           │           │           │                            │
│        └───────────┴─────┬─────┴───────────┘                            │
│                          ▼                                              │
│   2. CONSOLIDAÇÃO                                                       │
│   ┌─────────────────────────────────────────┐                           │
│   │ Síntese de insights + citações-chave    │                           │
│   └────────────────────┬────────────────────┘                           │
│                        ▼                                                │
│   3. ESTRUTURAÇÃO EM BLOCOS                                             │
│   ┌─────────────────────────────────────────┐                           │
│   │ Bloco 1 → Bloco 2 → ... → Bloco N       │                           │
│   │ (~25-40 min cada)                       │                           │
│   └────────────────────┬────────────────────┘                           │
│                        ▼                                                │
│   4. REDAÇÃO DO ROTEIRO                                                 │
│   ┌─────────────────────────────────────────┐                           │
│   │ Diagramas ASCII + Analogias jurídicas   │                           │
│   │ + Citações formatadas + Exercícios      │                           │
│   └────────────────────┬────────────────────┘                           │
│                        ▼                                                │
│   5. VALIDAÇÃO E ITERAÇÃO                                               │
│   ┌─────────────────────────────────────────┐                           │
│   │ Feedback do autor → Ajustes → Validação │                           │
│   └─────────────────────────────────────────┘                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Exemplo: Construção da Aula 3

**Pesquisa paralela com 6 subagentes:**

| Subagente | Tema | Transcrições Analisadas |
|-----------|------|------------------------|
| 1 | Workflow vs Agent | Dex Horthy, Cornelia Davis |
| 2 | Orchestrator patterns | Michele Catasta, Alberto Romero |
| 3 | Pipeline e encadeamento | Al Harris, Jake Nations |
| 4 | Paralelização | Robert Brennan, Beyang Liu |
| 5 | Context management | Barry Zhang, Dan Shipper |
| 6 | Gates e guardrails | Aman Khan, Itamar Friedman |

**Resultado:** 7 blocos, ~3h de conteúdo, ~1000 linhas de roteiro

---

## Técnicas Aplicadas

### 1. Pesquisa com Subagentes Paralelos

**O que é:** Dividir pesquisa em tópicos independentes, cada um explorado por subagente isolado

**Por que funciona:**
- Contexto limpo por tópico
- Execução paralela (economia de tempo)
- Síntese posterior pelo agente principal

**Exemplo de uso:**

```
Sessão 4: Pesquisa para Aula 2A
├── Subagente 1: Conceitos fundamentais de agentes
├── Subagente 2: Arquitetura e design de agentes
├── Subagente 3: Paralelização e subagentes
├── Subagente 4: Tools, MCPs e integrações
├── Subagente 5: Contexto, memória e estado
└── Subagente 6: Papel do humano e supervisão
```

### 2. Diário de Bordo

**O que é:** Registro estruturado de cada sessão de trabalho

**Seções:**
- **Validações:** Conceitos aprovados para o curso
- **Insights:** Descobertas não óbvias
- **Dúvidas:** Questões em aberto
- **Artefatos:** Arquivos criados/modificados

**Resultado:** 68+ insights capturados ao longo de 11 sessões

### 3. Detecção e Correção de Tautologia

**Problema detectado:** Aula 0 (sensibilização) "engoliu" conteúdo previsto para Aula 1

**Solução aplicada:** Reformular TIPO de aula, não cortar conteúdo
- Aula 0 → Sensibilização teórica ("Por que mudar?")
- Aula 1 → Demonstração prática ("O que existe hoje?")

**Insight:** Reformular tipo de aula resolve tautologia melhor que cortar conteúdo

### 4. Analogias Jurídicas Sistemáticas

**Princípio:** Cada conceito técnico recebe analogia do domínio jurídico

**Exemplos:**

| Conceito Técnico | Analogia Jurídica |
|------------------|-------------------|
| CLAUDE.md | Instruções do gabinete para assessor novo |
| Commands | Macros de petições recorrentes |
| Skills | Manuais de procedimento do gabinete |
| Subagentes | Assessores paralelos pesquisando temas diferentes |
| MCPs | Credenciais de acesso a sistemas externos |
| Modo YOLO | Deixar o assessor trabalhar a noite toda |
| Progressive Disclosure | Constituição > Lei > Portaria |

### 5. Formato de Citações

**Padrão estabelecido:**

```markdown
> *"Citação original em inglês."*
> — Nome, Empresa (AI Engineer Summit 20XX)
>
> *Tradução: "Tradução em português."*
```

**Rationale:**
- Inglês original preserva precisão
- Tradução garante acessibilidade
- Fonte completa permite verificação

---

## Métricas de Construção

### Módulo 1 (Aulas 0-5)

| Aula | Linhas | Blocos | Subagentes usados |
|------|--------|--------|-------------------|
| 0 | ~500 | 8 | 6 |
| 1 | ~600 | 6 | 4 |
| 2A | ~400 | 5 | 6 |
| 2B | ~700 | 8 | 6 |
| 3 | ~1000 | 7 | 6 |
| 4 | ~1500 | 7 | 3 |
| 5 | ~1200 | 7 | 2 |

**Total Módulo 1:** ~5.900 linhas de roteiro

### Módulo 2 (Aulas 6-9)

| Aula | Tema | Status |
|------|------|--------|
| 6 | Engenharia de Prompt | Em desenvolvimento |
| 7 | Engenharia de Contexto | Planejado |
| 8 | Engenharia de Capacidades | Planejado |
| 9 | Engenharia de Workflows | Planejado |

---

## Padrões de Qualidade

### Checklist por Aula

- [ ] Objetivo claro e mensurável
- [ ] Blocos de 25-40 minutos
- [ ] Pelo menos 3 citações de especialistas
- [ ] Diagramas ASCII para conceitos complexos
- [ ] Analogias jurídicas onde aplicável
- [ ] Exercícios práticos em cada bloco
- [ ] Fontes verificáveis

### Validação Cruzada

Cada conceito importante é validado por pelo menos duas fontes independentes antes de inclusão.

### Revisão de Consistência

- Terminologia alinhada com glossário
- Referências cruzadas entre aulas
- Progressão lógica de complexidade

---

## Lições Aprendidas

### O Que Funcionou Bem

1. **Pesquisa paralela com subagentes:** Acelera significativamente a fase de pesquisa
2. **Diário de bordo:** Captura insights que seriam perdidos
3. **Blocos de tempo definido:** Força estruturação adequada
4. **Analogias jurídicas:** Aumenta retenção do público-alvo

### O Que Exigiu Ajuste

1. **Tautologia entre aulas:** Detectada e corrigida na Aula 1
2. **Densidade de conteúdo:** Algumas aulas precisaram ser divididas (Aula 2)
3. **Citações excessivas:** Foco nas mais impactantes

### Recomendações para Extensões

1. Manter padrão de pesquisa paralela
2. Atualizar diário de bordo a cada sessão
3. Validar terminologia contra glossário
4. Testar exercícios antes de publicar

---

## Conclusão

Este curso foi construído como **demonstração viva** da Regência Cognitiva:

- **Humano define:** Estrutura, objetivos, validação
- **Sistema executa:** Pesquisa, redação, formatação
- **Iteração refina:** Feedback específico, ajustes precisos

O resultado é um curso que **pratica o que prega**.

---

*Metodologia documentada para o Curso de Sistemas Agênticos*
*"O processo é o produto"*
