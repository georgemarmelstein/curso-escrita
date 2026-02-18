# Relatório Final de Auditoria Acadêmica
## Caderno de Exercícios — Curso Escrita com LLMs

**Data:** 12/02/2026
**Metodologia:** 23 agentes independentes
**Aulas analisadas:** 23 (Módulos 1, 2 e 3)

---

## Sumário Executivo

| Métrica | Valor |
|---------|-------|
| **Nota Média Atual** | 7.1/10 |
| **Aulas com Problemas Críticos** | 4 |
| **Aulas com Prioridade Alta** | 8 |
| **Total de Correções Necessárias** | 40+ |

### Problemas Críticos (Correção Imediata)

| # | Problema | Aulas Afetadas |
|---|----------|----------------|
| 1 | RAG "só planos pagos" — ERRADO | 3.1 |
| 2 | "Raramente regurgita" — Subestima risco (até 15%) | 1.1 |
| 3 | Seed = "exatamente" — É aproximado | 1.3, 1.4 |
| 4 | **Prefill DEPRECADO** — Erro 400 no Claude 4.6 | 2.7, 2.9, 3.4 |

### Padrão Sistêmico Identificado

**P.O.E.M.A. e frameworks proprietários** são usados em múltiplas aulas sem declaração de origem:

| Framework | Aulas que Usam | Status |
|-----------|----------------|--------|
| P.O.E.M.A. | 2.5, 2.7, 3.3, 3.4 | Sem citação acadêmica |
| "Três Desafios" | 2.5 | Criação original, não documentada |
| Taxonomia de Alucinações | 1.9 | Não-padrão vs. literatura |

**Recomendação Global:** Adicionar disclaimer em todas as aulas:
> "Frameworks didáticos desenvolvidos para este curso, inspirados em literatura de prompt engineering."

---

## Relatório Aula a Aula

### MÓDULO 1 — Fundamentos

---

#### Aula 1.1 — O Básico
**Nota:** 6.0/10 | **Prioridade:** CRÍTICA

| Problema | Tipo | Correção |
|----------|------|----------|
| "A máquina raramente regurgita textos do treinamento" | ERRO FACTUAL | Pesquisa mostra até 15% verbatim (Carlini et al., 2021) |

**Correção proposta:**
```
DE: "raramente regurgita"
PARA: "pode reproduzir trechos do treinamento (estudos mostram até 15% em casos específicos)"
```

**Fonte:** Carlini et al. (2021) "Extracting Training Data from Large Language Models" - USENIX Security

---

#### Aula 1.2 — O Pensamento da Máquina
**Nota:** 7.0/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| Analogia JPEG não menciona alucinações | LACUNA | Adicionar que "compressão neural" gera informações inexistentes |
| Exemplo rei-rainha sem ressalvas | LACUNA | Funciona em word2vec, inconsistente em LLMs modernos |

**Adições sugeridas:**
```markdown
> **Limitação da Analogia JPEG:** Diferente de JPEG, a "compressão neural"
> pode gerar informações inexistentes (alucinações).

> **Nota sobre rei-rainha:** Este exemplo clássico demonstra o conceito,
> mas modelos modernos não garantem essa aritmética vetorial simples.
```

---

#### Aula 1.3 — Temperatura e Aleatoriedade
**Nota:** 7.0/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Com seed fixo, obtém-se exatamente a mesma resposta" | ERRO FACTUAL | Determinismo é aproximado, não absoluto |

**Correção proposta:**
```
DE: "exatamente a mesma resposta"
PARA: "respostas muito similares (determinismo aproximado)"
```

**Fonte:** OpenAI API - Reproducibility Documentation

---

#### Aula 1.4 — Parâmetros
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Mesmo problema de seed "exato" | ERRO FACTUAL | Já coberto em 1.3 |
| "Regressão à moda" | TERMINOLOGIA | Termo não-padrão na literatura |

**Correção proposta:**
```
DE: "regressão à moda"
PARA: "tendência a respostas mais prováveis" ou
      "convergência para tokens de alta probabilidade"
```

---

#### Aula 1.5 — Conhecimento Parametrizado
**Nota:** 8.0/10 | **Prioridade:** BAIXA

Sem problemas críticos identificados.

---

#### Aula 1.6 — Janela de Contexto
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Ausência do paper "Lost in the Middle" | LACUNA ACADÊMICA | Adicionar Liu et al. (2023) |
| Curva U não explicada | LACUNA | Explicar primacy + recency bias, queda >20% |
| "200K tokens = ~500 páginas" | ERRO PRECISÃO | Correto: ~300-400 páginas |
| Gemini 2.0 "2M estendido" | DESATUALIZADO | 2M era do Gemini 1.5 Pro |
| Claude Opus 4 | DESATUALIZADO | Opus 4.6 já tem 1M tokens |

**Adição sugerida:**
```markdown
### Curva U de Desempenho (Lost in the Middle)

Liu et al. (2023) demonstraram que LLMs prestam mais atenção ao início
e fim do contexto, com queda de precisão >20% para informações no meio.

**Implicação:** Posicione informações críticas no início ou final do prompt.
```

**Fonte:** Liu et al. (2023) "Lost in the Middle" - TACL 2024

---

#### Aula 1.7 — O Conhecimento da Máquina
**Nota:** 7.5/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Frequentista" usado incorretamente | TERMINOLOGIA | Não é estatística frequentista no sentido técnico |
| Usa "páginas" em vez de "tokens" | DESATUALIZADO | Tokens são a métrica correta |

**Correção proposta:**
```
DE: "abordagem frequentista"
PARA: "baseado em frequência de ocorrência nos dados de treinamento"
```

---

#### Aula 1.8 — Treinamento
**Nota:** 7.5/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Não menciona DPO | DESATUALIZADO | Direct Preference Optimization substituiu parcialmente RLHF |

**Adição sugerida:**
```markdown
### Evolução do Alinhamento

| Técnica | Período | Uso Atual |
|---------|---------|-----------|
| RLHF | 2020-2023 | Ainda usado |
| DPO | 2023+ | Preferido por eficiência |
| RLAIF | 2024+ | Emergente |
```

**Fonte:** Rafailov et al. (2023) "Direct Preference Optimization"

---

#### Aula 1.9 — Alucinações
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Taxonomia não-padrão (6 tipos) | TAXONOMIA | Adotar Intrinsic/Extrinsic + Factuality/Faithfulness |
| Misturas linguísticas como alucinação | ERRO | Code-switching não é alucinação |
| Falhas de ferramentas como alucinação | ERRO | São problemas de agenticidade |
| Metáfora do concurseiro imprecisa | CONTRADIÇÃO | É propriedade estatística, não "preferência" |

**Correção proposta:**
```markdown
### Taxonomia Acadêmica de Alucinações

| Tipo | Definição | Exemplo Jurídico |
|------|-----------|------------------|
| **Intrinsic** | Contradiz o contexto fornecido | Citar artigo diferente do pedido |
| **Extrinsic** | Não verificável externamente | Inventar jurisprudência |
| **Factuality** | Contradiz fatos do mundo | Data de lei errada |
| **Faithfulness** | Diverge do prompt do usuário | Ignorar instrução específica |
```

**Fontes:**
- Ji et al. (2022) "Survey of Hallucination in NLG" - arXiv:2202.03629
- Huang et al. (2024) "A Survey on Hallucination in LLMs" - ACM TOIS

---

### MÓDULO 2 — Engenharia de Prompt

---

#### Aula 2.1 — Vibe Prompting
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| Termo "Vibe Prompting" | TERMINOLOGIA | Deriva de "vibe coding" (conotação negativa) |

**Correção proposta:**
```
DE: "Vibe Prompting"
PARA: "Prompt Intuitivo" ou "Prompt Espontâneo"
```

---

#### Aula 2.2 — A Compreensão da Máquina
**Nota:** 7.0/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| "A máquina não tem sabedoria intrínseca" | DESATUALIZADO | Afirmação categórica demais para modelos de raciocínio |

**Correção proposta:**
```
DE: "não tem sabedoria intrínseca"
PARA: "não possui sabedoria no sentido humano, embora demonstre
       capacidades emergentes de raciocínio em contextos específicos"
```

**Fonte:** Bubeck et al. (2023) "Sparks of AGI"

---

#### Aula 2.3 — Chain of Thought
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| Confunde "Pensamento Estendido" com Zero-Shot CoT | TERMINOLOGIA | São conceitos distintos |

**Correção proposta:**
```markdown
| Técnica | Descrição | Disponibilidade |
|---------|-----------|-----------------|
| Zero-Shot CoT | "Pense passo a passo" | Universal |
| Few-Shot CoT | Exemplos com raciocínio | Universal |
| Extended Thinking | Tokens de raciocínio ocultos | Claude API (thinking) |
```

---

#### Aula 2.4 — Prompts Emocionais
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Personas malignas: -10% a -12%" | NÚMERO SEM FONTE | Paper mostra ~19%, não esses números |
| "Jailbreaks: até -90%" | NÚMERO EXAGERADO | Sem fonte para esse valor |
| "Gorjetas: sem efeito" | INCORRETO | Resultados inconclusivos (até 45% melhoria em alguns estudos) |
| Contradição polidez vs. Mind Your Tone | CONTRADIÇÃO INTERNA | Não reconciliada |

**Correções propostas:**
```
DE: "Gorjetas altas: Sem efeito"
PARA: "Gorjetas: Resultados mistos (0% a 45% dependendo do estudo)"

DE: "-10% a -12%" e "-90%"
PARA: Remover números sem fonte ou citar papers específicos
```

---

#### Aula 2.5 — Os Três Desafios
**Nota:** 7.5/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Três Desafios" sem precedente acadêmico | TAXONOMIA | Criação original do autor |
| P.O.E.M.A. sem fundamentação | FRAMEWORK | Não documentado na literatura |
| CoT duplicado (Desafio 1 e 2) | CONTRADIÇÃO | Consolidar em um lugar |
| "Persona = Conhecimento" | ERRO | Persona é estilo, não garante conhecimento |
| Falta limites de steerability | LACUNA | Paper mostra "models resist steering" |
| Ausência de Safety como dimensão | LACUNA | Literatura inclui Safety Control |

**Correção proposta:**
```markdown
> **Nota:** O framework "Três Desafios" e P.O.E.M.A. são frameworks didáticos
> desenvolvidos para este curso, inspirados em literatura de CTG e prompt
> engineering. Para taxonomias acadêmicas, consulte The Prompt Report.
```

---

#### Aula 2.6 — Prompt de Sistema
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Prompt de Sistema" atribuído à Anthropic | ERRO | System prompt da API é definido pelo operador |
| "Prompt de Customização" como nível | TERMINOLOGIA | Termo não existe na documentação |
| Hierarquia em 3 níveis | SIMPLIFICAÇÃO | OpenAI usa 5 níveis |
| Falta hardcoded vs softcoded | LACUNA | Conceitos críticos de segurança |

**Correção proposta:**
```markdown
### Hierarquia Correta

| Nível | Quem Define | Descrição |
|-------|-------------|-----------|
| Diretrizes de Treinamento | Anthropic | Vêm do treinamento, não de prompts |
| System Prompt | Operador | Campo `system` na API |
| Mensagem do Usuário | Usuário | Input direto na conversa |
```

**Fonte:** [Constituição do Claude](https://www.anthropic.com/constitution)

---

#### Aula 2.7 — Técnicas de Prompt Estruturado
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| P.O.E.M.A. sem validação | FRAMEWORK | Frameworks validados: CO-STAR, CRISPE |
| **Prefill DEPRECATED** | CRÍTICO | Não funciona no Claude Opus 4.6 |
| Hierarquia de ênfase contradiz Anthropic | CONTRADIÇÃO DOC | Anthropic recomenda EVITAR bold/italics |
| "Técnica do Nome Único" sem evidência | SEM FONTE | Não há paper que comprove |
| "Nunca confunde" XML | ABSOLUTISMO | Documentação diz "reduces errors", não 100% |

**Correções propostas:**
```markdown
### ⚠️ Prefill Deprecado

A técnica de prefill via API está **deprecada** desde Claude Opus 4.6.
Alternativas:
1. Instrução textual: "Comece diretamente com X"
2. Structured Outputs: JSON Schema via API

### Framework P.O.E.M.A.
> **Nota:** Framework didático deste curso. Para frameworks validados,
> consulte CO-STAR (GovTech Singapore) e CRISPE.
```

---

#### Aula 2.8 — FIRAC+
**Nota:** 7.5/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Omite estudo Kang et al. (~50% sycophancy) | LACUNA | Adicionar dados sobre concordância com premissas incorretas |

**Adição sugerida:**
```markdown
> **Pesquisa:** Kang et al. (2024) demonstram que LLMs concordam com
> premissas incorretas em ~50% dos casos quando o usuário demonstra confiança.
```

---

#### Aula 2.9 — Técnicas Avançadas
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| "Prefill" usado incorretamente | TERMINOLOGIA | Confunde instrução textual com API prefill |
| Modelos desatualizados | DESATUALIZADO | Referências a GPT-4, Claude 2 |

**Correção:** Atualizar para GPT-4o, Claude 3.5 Sonnet, Gemini 2.0

---

### MÓDULO 3 — Técnicas Avançadas

---

#### Aula 3.1 — Projects (Claude)
**Nota:** 5.0/10 | **Prioridade:** CRÍTICA

| Problema | Tipo | Correção |
|----------|------|----------|
| "RAG só está disponível em planos pagos" | **ERRO FACTUAL** | Projects com Knowledge Base disponível no plano gratuito |

**Correção proposta:**
```
DE: "RAG só está disponível em planos pagos"
PARA: "RAG está disponível em todos os planos, com limites maiores nos planos pagos"
```

**Fonte:** [Documentação Anthropic - Projects](https://docs.anthropic.com/en/docs/build-with-claude/projects)

---

#### Aula 3.2 — Deep Research
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Modelos desatualizados (o3/o4-mini) | DESATUALIZADO | ChatGPT usa GPT-5.2 desde fev/2026 |
| Ausência de taxas de erro | LACUNA | Perplexity tem ~37% erro em citações |
| Research nativo Claude omitido | LACUNA | Existe desde abril 2025 |
| Falta benchmarks (DRACO, SimpleQA) | LACUNA | Critérios de avaliação não mencionados |

**Adição sugerida:**
```markdown
### Limitações de Precisão

> **Alerta:** Mesmo as melhores ferramentas de Deep Research apresentam
> taxas de erro significativas. Estudo Columbia University (2025):
> ~37% de erro nas citações do Perplexity.

### Claude Research (Beta)
Desde abril 2025, Claude oferece funcionalidade Research nativa (planos pagos)
com 15-20 buscas web automatizadas.
```

---

#### Aula 3.3 — Metaprompt de Análise
**Nota:** 7.0/10 | **Prioridade:** MÉDIA

| Problema | Tipo | Correção |
|----------|------|----------|
| Definição simplificada de meta-prompting | LACUNA | Literatura distingue APE, Scaffolding, RMP |
| Não cita APE (Zhou et al., ICLR 2023) | LACUNA CRÍTICA | Paper fundacional não mencionado |
| Não cita Meta-Prompting (Suzgun & Kalai, 2024) | LACUNA | Ganhos de 15-17% documentados |
| P.O.E.M.A. novamente sem fundamentação | FRAMEWORK | Terceira ocorrência |
| Limitações não discutidas | LACUNA | Overfitting, vieses, custo |

**Adição sugerida:**
```markdown
### Fundamentação Acadêmica

- **APE**: Zhou et al. (2023) "LLMs Are Human-Level Prompt Engineers" - ICLR 2023
- **Meta-Prompting**: Suzgun & Kalai (2024) - ganhos de 15-17%
```

---

#### Aula 3.4 — Metaprompt de Escrita
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| **Prefill DEPRECATED sem aviso** | CRÍTICO | Retorna erro 400 no Claude Opus 4.6 |
| Confusão prefill API vs instrução textual | TERMINOLOGIA | São coisas diferentes |
| Formato placeholders incorreto | ERRO | Usar `{{PLACEHOLDER}}` não backticks |
| Falta Structured Outputs | LACUNA | Alternativa moderna não mencionada |
| P.O.E.M.A. — 4ª ocorrência | FRAMEWORK | Sem referência |

**Correção URGENTE:**
```markdown
### ⚠️ Prefill Deprecado

A técnica de prefill via API está **deprecada** desde Claude Opus 4.6.
Para controlar formato de saída:

1. **Instrução textual:** "Comece diretamente com RELATÓRIO"
2. **Structured Outputs:** JSON Schema via `output_config.format`

> **Placeholders:** Use `{{PLACEHOLDER}}` para variáveis automáticas.
```

---

#### Aula 3.5 — Erros Comuns e Boas Práticas
**Nota:** 6.5/10 | **Prioridade:** ALTA

| Problema | Tipo | Correção |
|----------|------|----------|
| Zero citações acadêmicas | LACUNA CRÍTICA | Nenhum paper referenciado |

**Adição sugerida:**
```markdown
### Referências Acadêmicas

- EmotionPrompt — Li et al. (2023) arXiv:2307.11760
- Butterfly Effect — Salinas & Morstatter (2024) arXiv:2401.03729
- Should We Respect LLMs? — Yin et al. (2024) arXiv:2402.14531
- Lost in the Middle — Liu et al. (2023) TACL 2024
```

---

## Tabela de Notas e Prioridades

| Aula | Título | Nota | Prioridade |
|------|--------|------|------------|
| 1.1 | O Básico | 6.0 | CRÍTICA |
| 1.2 | O Pensamento da Máquina | 7.0 | ALTA |
| 1.3 | Temperatura e Aleatoriedade | 7.0 | ALTA |
| 1.4 | Parâmetros | 7.0 | MÉDIA |
| 1.5 | Conhecimento Parametrizado | 8.0 | BAIXA |
| 1.6 | Janela de Contexto | 7.0 | MÉDIA |
| 1.7 | O Conhecimento da Máquina | 7.5 | MÉDIA |
| 1.8 | Treinamento | 7.5 | MÉDIA |
| 1.9 | Alucinações | 7.0 | MÉDIA |
| 2.1 | Vibe Prompting | 6.5 | ALTA |
| 2.2 | A Compreensão da Máquina | 7.0 | ALTA |
| 2.3 | Chain of Thought | 6.5 | ALTA |
| 2.4 | Prompts Emocionais | 7.0 | MÉDIA |
| 2.5 | Os Três Desafios | 7.5 | MÉDIA |
| 2.6 | Prompt de Sistema | 6.5 | ALTA |
| 2.7 | Técnicas de Prompt Estruturado | 6.5 | ALTA |
| 2.8 | FIRAC+ | 7.5 | MÉDIA |
| 2.9 | Técnicas Avançadas | 7.0 | MÉDIA |
| 3.1 | Projects (Claude) | 5.0 | CRÍTICA |
| 3.2 | Deep Research | 7.0 | MÉDIA |
| 3.3 | Metaprompt de Análise | 7.0 | MÉDIA |
| 3.4 | Metaprompt de Escrita | 6.5 | ALTA |
| 3.5 | Erros Comuns e Boas Práticas | 6.5 | ALTA |

**Média Geral:** 7.0/10
**Nota Estimada Após Correções:** 8.5/10

---

## Ordem de Correção Recomendada

### Fase 1 — Correções CRÍTICAS (fazer primeiro)

1. **Aula 3.1** — Corrigir "RAG só planos pagos"
2. **Aula 1.1** — Corrigir "raramente regurgita"
3. **Aulas 1.3, 1.4** — Corrigir "exatamente a mesma resposta"
4. **Aulas 2.7, 2.9, 3.4** — Adicionar aviso PREFILL DEPRECADO
5. **Aula 3.4** — Corrigir formato placeholders

### Fase 2 — Terminologia (segunda prioridade)

6. Substituir "Vibe Prompting" (2.1)
7. Distinguir Extended Thinking vs CoT (2.3)
8. Corrigir hierarquia System Prompt (2.6)
9. Adicionar disclaimer P.O.E.M.A. (2.5, 2.7, 3.3, 3.4)
10. Remover números sem fonte (2.4)

### Fase 3 — Atualizações

11. Adicionar DPO ao treinamento (1.8)
12. Atualizar modelos de referência (2.9, 3.2)
13. Corrigir conversão tokens/páginas (1.6)
14. Atualizar tabela Deep Research (3.2)

### Fase 4 — Enriquecimento Acadêmico

15. Adicionar Lost in the Middle (1.6, 1.7)
16. Adicionar taxonomia alucinações (1.9)
17. Adicionar referências APE/Meta-Prompting (3.3)
18. Adicionar citações acadêmicas (3.5)
19. Adicionar estudo Kang et al. (2.8)

### Fase 5 — Melhorias Estruturais

20. Glossário técnico
21. Transições entre módulos
22. Critérios de avaliação dos exercícios

---

## Próximos Passos

Quando estiver pronto para começar, podemos:

1. **Opção A:** Corrigir todas as aulas CRÍTICAS de uma vez
2. **Opção B:** Corrigir aula por aula, começando pela 3.1
3. **Opção C:** Corrigir por tipo de problema (ex: todos os prefills primeiro)

Aguardo sua decisão para iniciarmos juntos.

---

*Relatório gerado em 12/02/2026*
*Auditoria Acadêmica — Curso Escrita com LLMs*
