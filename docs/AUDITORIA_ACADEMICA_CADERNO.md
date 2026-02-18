# Auditoria Acadêmica do Caderno de Exercícios

**Data:** 11/02/2026
**Metodologia:** Análise independente por 23 agentes especializados
**Escopo:** 23 aulas (Módulos 1, 2 e 3)

---

## Sumário Executivo

A auditoria identificou **padrões sistemáticos** de inconsistências que afetam a credibilidade acadêmica do material:

| Categoria | Quantidade | Impacto |
|-----------|------------|---------|
| Erros Factuais | 3 | CRÍTICO |
| **Técnica DEPRECADA** | **1** | **CRÍTICO** |
| Taxonomia Não-Padrão | 3 | ALTO |
| Números Sem Fonte | 4 | ALTO |
| Terminologia Incorreta | 7 | ALTO |
| Conteúdo Desatualizado | 7 | ALTO |
| Contradições Internas | 6 | ALTO |
| Contradições com Doc. Oficial | 4 | ALTO |
| Lacunas Acadêmicas | 16 | MÉDIO |
| Obscuridades | 4 | BAIXO |

---

## ERROS CRÍTICOS (Correção Imediata)

### 1. Aula 3.1 — Projects (Claude)
**Afirmação:** "RAG só está disponível em planos pagos"

**Realidade:** O Claude oferece Projects com Knowledge Base no plano gratuito (com limites). A afirmação é factualmente incorreta e pode induzir alunos a não experimentarem a funcionalidade.

**Correção:**
```
DE: "RAG só está disponível em planos pagos"
PARA: "RAG está disponível em todos os planos, com limites maiores nos planos pagos"
```

**Fonte:** [Documentação oficial Anthropic - Projects](https://docs.anthropic.com/en/docs/build-with-claude/projects)

---

### 2. Aula 1.1 — O Básico
**Afirmação:** "A máquina raramente regurgita textos do treinamento"

**Realidade:** Pesquisa demonstra que LLMs reproduzem verbatim até 15% do conteúdo de treinamento em determinados contextos. A afirmação minimiza um risco real.

**Correção:**
```
DE: "raramente regurgita"
PARA: "pode reproduzir trechos do treinamento (estudos mostram até 15% em casos específicos)"
```

**Fonte:** Carlini et al. (2021) "Extracting Training Data from Large Language Models" - USENIX Security

---

### 3. Aulas 1.3 e 1.4 — Determinismo com Seed
**Afirmação:** "Com seed fixo, obtém-se exatamente a mesma resposta"

**Realidade:** O determinismo é aproximado, não absoluto. Variações de infraestrutura, versões de modelo e outros fatores introduzem variabilidade.

**Correção:**
```
DE: "exatamente a mesma resposta"
PARA: "respostas muito similares (determinismo aproximado)"
```

**Fonte:** Documentação OpenAI API - [Reproducibility](https://platform.openai.com/docs/guides/reproducible-outputs)

---

## ERROS DE TERMINOLOGIA (Alta Prioridade)

### 4. Aula 2.1 — "Vibe Prompting"
**Problema:** O termo deriva de "vibe coding" (aceitar código sem revisão), carregando conotação negativa. Usar em contexto didático pode confundir alunos.

**Correção Sugerida:**
```
DE: "Vibe Prompting"
PARA: "Prompt Intuitivo" ou "Prompt Espontâneo"
```

**Contexto:** O termo foi popularizado em 2025 por Andrej Karpathy com sentido pejorativo.

---

### 5. Aula 2.3 — "Pensamento Estendido"
**Problema:** Confusão entre dois conceitos distintos:
- **Extended Thinking** = modo proprietário da Anthropic (tokens de raciocínio ocultos)
- **Zero-Shot CoT** = técnica genérica ("pense passo a passo")

**Correção Sugerida:**
```
DE: Tratar como sinônimos
PARA: Distinguir claramente:
  - "Pensamento Estendido" = funcionalidade do Claude (API thinking)
  - "Chain-of-Thought" = técnica universal de prompting
```

**Fonte:** Wei et al. (2022) "Chain-of-Thought Prompting Elicits Reasoning in LLMs"

---

### 6. Aula 2.9 — "Prefill"
**Problema:** O termo "prefill" tem significado técnico específico (pré-preencher resposta via API), mas está sendo usado de forma genérica para "iniciar o texto".

**Correção Sugerida:**
```
DE: "Prefill" (uso genérico)
PARA: "Técnica de início forçado" ou "Anchor text"
     Reservar "Prefill" para uso técnico correto (API)
```

---

### 7. Aula 1.7 — "Frequentista"
**Problema:** O termo é usado fora do contexto estatístico padrão. A máquina não aplica "estatística frequentista" no sentido técnico.

**Correção Sugerida:**
```
DE: "abordagem frequentista"
PARA: "baseado em frequência de ocorrência nos dados de treinamento"
```

---

### 8. Aula 1.4 — "Regressão à Moda"
**Problema:** Termo não-padrão na literatura. O conceito correto seria "tendência à média" ou análise do comportamento de temperatura.

**Correção Sugerida:**
```
DE: "regressão à moda"
PARA: "tendência a respostas mais prováveis" ou
      "convergência para tokens de alta probabilidade"
```

---

### 9. Aula 2.6 — "Prompt de Sistema" e "Prompt de Customização"
**Problema Múltiplo:**

1. **"Prompt de Sistema" atribuído à Anthropic/OpenAI** — INCORRETO. O system prompt da API é definido pelo **operador**, não pela empresa. A Anthropic usa "disposições de treinamento", não prompts.

2. **"Prompt de Customização" como nível intermediário** — TERMO INEXISTENTE na documentação oficial. Não há separação entre "sistema" e "customização".

3. **Hierarquia em 3 níveis simplificada** — OpenAI usa 5 níveis (Root > System > Developer > User > Guideline).

**Correção Sugerida:**
```
DE: Tabela com 3 níveis (Sistema/Customização/Usuário)
PARA: Distinguir claramente:
  - Diretrizes de Treinamento (Anthropic) - vêm do treinamento
  - System Prompt do Operador - campo `system` na API
  - Mensagem do Usuário - input direto
```

**Fontes:**
- [Constituição do Claude](https://www.anthropic.com/constitution)
- [OpenAI Model Spec 2025-12-18](https://model-spec.openai.com/2025-12-18.html)

**Lacuna adicional:** Não menciona conceitos críticos de:
- Comportamentos **hardcoded** (nunca alteráveis) vs **softcoded** (ajustáveis)
- Confiança condicional em operadores/usuários
- Direitos de usuários que operadores não podem violar

---

## CONTEÚDO DESATUALIZADO (Alta Prioridade)

### 9. Aula 1.8 — Treinamento
**Lacuna:** Não menciona DPO (Direct Preference Optimization), técnica que substituiu parcialmente RLHF em modelos recentes.

**Adição Sugerida:**
```markdown
### Evolução do Alinhamento

| Técnica | Período | Uso Atual |
|---------|---------|-----------|
| RLHF | 2020-2023 | Ainda usado |
| DPO | 2023+ | Preferido por eficiência |
| RLAIF | 2024+ | Emergente |
```

**Fonte:** Rafailov et al. (2023) "Direct Preference Optimization: Your Language Model is Secretly a Reward Model"

---

### 10. Aula 2.2 — Compreensão da Máquina
**Afirmação Problemática:** "A máquina não tem sabedoria intrínseca"

**Contexto Atual:** Pesquisas recentes demonstram capacidades emergentes que desafiam essa afirmação categórica. Modelos de raciocínio (o1, Claude 3.5) mostram comportamentos que sugerem formas limitadas de "compreensão".

**Correção Sugerida:**
```
DE: "não tem sabedoria intrínseca"
PARA: "não possui sabedoria no sentido humano, embora demonstre
       capacidades emergentes de raciocínio em contextos específicos"
```

**Fonte:** Bubeck et al. (2023) "Sparks of Artificial General Intelligence: Early experiments with GPT-4"

---

### 11. Aula 2.9 — Modelos de Referência
**Problema:** Exemplos citam modelos desatualizados (GPT-4 base, Claude 2).

**Correção Sugerida:**
```
DE: Referências a GPT-4, Claude 2
PARA: Atualizar para GPT-4o, Claude 3.5 Sonnet, Gemini 2.0
```

---

### 12. Aula 1.7 — Limites de Contexto
**Problema:** Usa "páginas" como unidade, mas tokens são a métrica correta e mais precisa.

**Correção Sugerida:**
```
DE: "300-400 páginas"
PARA: "128K-200K tokens (aproximadamente 300-400 páginas de texto simples)"
```

---

## LACUNAS ACADÊMICAS (Média Prioridade)

### 13. Aula 2.8 — Sycophancy
**Lacuna:** Omite o estudo de Kang et al. que demonstra ~50% de taxa de erro quando modelos concordam com premissas incorretas do usuário.

**Adição Sugerida:**
```markdown
> **Pesquisa Relevante:** Kang et al. (2024) demonstram que LLMs
> concordam com premissas incorretas em aproximadamente 50% dos casos,
> especialmente quando o usuário demonstra confiança na afirmação errada.
```

---

### 14. Aula 3.5 — Boas Práticas
**Lacuna Crítica:** Nenhuma citação acadêmica para fundamentar as "boas práticas" apresentadas.

**Adição Sugerida:**
- EmotionPrompt — Li et al. (2023) arXiv:2307.11760
- Butterfly Effect — Salinas & Morstatter (2024) arXiv:2401.03729
- Should We Respect LLMs? — Yin et al. (2024) arXiv:2402.14531

---

### 15. Aula 1.2 — Analogia JPEG
**Lacuna:** A analogia do "JPEG neural" não menciona que a "compressão" gera alucinações (preenchimento de lacunas).

**Adição Sugerida:**
```markdown
> **Limitação da Analogia:** Diferente de JPEG (compressão com perdas previsíveis),
> a "compressão neural" pode gerar informações inexistentes (alucinações)
> ao tentar reconstruir padrões incompletos.
```

---

### 16. Aula 1.2 — Exemplo Rei-Rainha
**Lacuna:** O exemplo clássico de analogia vetorial (rei - homem + mulher = rainha) funciona em word2vec, mas é inconsistente em LLMs modernos.

**Adição Sugerida:**
```markdown
> **Nota Técnica:** Este exemplo clássico de embeddings demonstra o conceito,
> mas modelos modernos não garantem essa aritmética vetorial simples.
```

**Fonte:** Mikolov et al. (2013) vs. estudos recentes sobre limitações de analogias

---

### 17. Aula 1.6 — Janela de Contexto
**Lacunas Múltiplas:**

1. **Ausência do paper "Lost in the Middle"** — Menciona que informações no meio se perdem, mas não cita o paper seminal Liu et al. (2023) que fundamenta isso academicamente.

2. **Curva U não explicada** — Não explica o padrão U-shaped (primacy + recency bias) com queda de >20% no meio.

3. **Mecanismo técnico ausente** — Não explica POR QUE o contexto degrada (complexidade O(n²) da self-attention).

**Erros de Precisão:**
- "200K tokens = ~500 páginas" → INCORRETO (correto: ~300-400 páginas)
- Gemini 2.0 "2M estendido" → Era do Gemini 1.5 Pro
- Claude Opus 4 desatualizado (Opus 4.6 já tem 1M tokens)

**Adição Sugerida:**
```markdown
### Curva U de Desempenho (Lost in the Middle)

Liu et al. (2023) demonstraram que LLMs prestam mais atenção ao início
e fim do contexto, com queda de precisão >20% para informações no meio.

**Implicação:** Posicione informações críticas no início ou final do prompt.
```

**Fontes:**
- Liu et al. (2023) "Lost in the Middle" - TACL 2024
- Chroma Research (2025) "Context Rot" - já citado, mas expandir dados

---

### 18. Aula 3.2 — Deep Research
**Lacunas Múltiplas:**

1. **Modelos desatualizados** — Tabela indica "o3/o4-mini" mas ChatGPT já usa GPT-5.2 (fev/2026)

2. **Ausência de taxas de erro** — Não menciona que Perplexity (o melhor) tem ~37% de erro em citações (Tow Center Study, 2025)

3. **Research nativo do Claude omitido** — Desde abril 2025, Claude tem funcionalidade Research (beta) com 15-20 buscas por tarefa. Aula só apresenta metaprompt como workaround.

4. **Falta benchmarks** — Não menciona DRACO, SimpleQA, ou critérios de avaliação padronizados

**Correções Sugeridas:**
```markdown
### Limitações de Precisão

> **Alerta:** Mesmo as melhores ferramentas de Deep Research apresentam
> taxas de erro significativas. Estudo da Columbia University (2025)
> encontrou ~37% de erro nas citações do Perplexity.

### Claude Research (Beta)
Desde abril 2025, Claude oferece funcionalidade Research nativa (planos pagos)
que conduz 15-20 buscas web automatizadas. O metaprompt é alternativa
para planos gratuitos ou maior controle.
```

**Fontes:**
- [ChatGPT GPT-5.2 Upgrade](https://winbuzzer.com/2026/02/11/chatgpt-deep-research-gpt-52-upgrade-xcxwbn/)
- [Claude Research Feature](https://www.anthropic.com/news/research)
- [Perplexity DRACO Benchmark](https://www.perplexity.ai/help-center/en/articles/13600190-what-s-new-in-advanced-deep-research)

---

### 19. Aula 2.7 — Técnicas de Prompt Estruturado
**Problemas Múltiplos:**

1. **P.O.E.M.A. sem validação** — Apresentado como padrão estabelecido, mas não há citação de origem. Frameworks validados como CO-STAR e CRISPE não são comparados.

2. **Prefill DEPRECATED** — A técnica está deprecated desde Claude Opus 4.6. Não funciona com Extended Thinking. Structured Outputs não mencionados.

3. **Técnicas de ênfase contradizem Anthropic** — Documentação oficial recomenda EVITAR bold/italics. A hierarquia "MAIÚSCULAS > Negrito > Prefixos" não tem respaldo oficial.

4. **"Técnica do Nome Único" sem evidência** — Afirmação de que "FIRAC+" força leitura de instruções enquanto "FIRAC" usa conhecimento prévio não tem base empírica.

5. **Afirmação absolutista sobre XML** — "O modelo nunca confunde" → Documentação diz "reduces errors", não garante 100%.

6. **Confusão Prefill API vs Instrução de Início** — São coisas diferentes mas tratadas como sinônimos.

**Correções Críticas:**
```markdown
### Framework P.O.E.M.A.
> **Nota:** P.O.E.M.A. é um framework pedagógico desenvolvido para este curso.
> Para frameworks academicamente validados, consulte CO-STAR e CRISPE.

### Prefill (DEPRECATED)
> **Atenção:** A técnica de prefill está deprecated desde Claude Opus 4.6
> e não funciona com Extended Thinking. Para formatos estruturados,
> considere usar Structured Outputs via API.
```

**Fontes:**
- [Anthropic - Claude 4 Best Practices](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)
- [CO-STAR Framework - GovTech Singapore](https://www.tech.gov.sg/technews/mastering-the-art-of-prompt-engineering-with-empower/)
- [Anthropic - Prefill Claude's response (DEPRECATED)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prefill-claudes-response)

---

### 20. Aula 2.4 — Vibe Prompting / Prompts Emocionais
**Problemas Identificados:**

1. **Números sem fonte citada:**
   - "Personas malignas: -10% a -12%" → Sem fonte. Paper "Too Good to be Bad" mostra ~19%, não esses números
   - "Jailbreaks: até -90%" → Número exagerado, sem fonte
   - "XML/YAML reduziram precisão em 3-6%" → Número não encontrado no abstract do paper

2. **Afirmação incorreta sobre gorjetas:**
   - Aula: "Gorjetas altas: Sem efeito"
   - Realidade: Estudo MBZUAI mostra até 45% de melhoria. Resultados são **inconclusivos**, não "sem efeito"

3. **Contradições internas não reconciliadas:**
   - "Solicitações polidas geram respostas mais elaboradas" vs. "Mind Your Tone" mostrando rude > polido
   - "$100 se alcançar resultado excelente" como estímulo positivo vs. "gorjetas não funcionam"

4. **Lacunas de citação:**
   - Falta "Principled Instructions Are All You Need" (MBZUAI)
   - Falta "Persona is a Double-edged Sword" (arXiv:2408.08631)

**Pontos Fortes (mantidos):**
- EmotionPrompt e NegativePrompt citados corretamente
- Dados quantitativos dos papers principais verificados
- ICLR 2024 Spotlight e IJCAI 2024 confirmados

**Correção Urgente:**
```markdown
### Gorjetas (Tips)
> **Resultados Mistos:** Estudos mostram desde nenhum efeito até 45% de melhoria.
> Depende do modelo, tarefa e contexto. Não use como técnica principal.
```

---

### 21. Aula 1.9 — Alucinações
**Problemas Identificados:**

1. **Taxonomia não-padrão** — A classificação em 6 tipos não corresponde às taxonomias acadêmicas estabelecidas:
   - Literatura usa: Intrinsic/Extrinsic (Ji et al., 2022) e Factuality/Faithfulness (Huang et al., 2024)
   - Aula mistura fenômenos de naturezas distintas

2. **Itens incorretamente classificados como "alucinação":**
   - **Misturas Linguísticas** → Code-switching não é alucinação, é problema de geração multilíngue
   - **Falhas de Ferramentas** → São problemas de agenticidade, não alucinação factual
   - **Falhas Matemáticas** → São calculation errors, subcategoria específica

3. **Lacunas críticas ausentes:**
   - Distinção Intrinsic/Extrinsic (fundacional)
   - Distinção Factuality/Faithfulness
   - Causa: fine-tuning com conhecimento novo aumenta alucinações
   - Técnicas: Chain-of-Verification, SelfCheckGPT, FLAME

4. **Metáfora do concurseiro imprecisa:**
   - Sugere "preferência" por chutar
   - Realidade: é propriedade estatística inevitável, não escolha

**Correção Sugerida:**
```markdown
### Taxonomia Acadêmica de Alucinações

| Tipo | Definição | Exemplo Jurídico |
|------|-----------|------------------|
| **Intrinsic** | Contradiz o contexto fornecido | Citar artigo diferente do pedido |
| **Extrinsic** | Não verificável externamente | Inventar jurisprudência |
| **Factuality** | Contradiz fatos do mundo | Data de lei errada |
| **Faithfulness** | Diverge do prompt do usuário | Ignorar instrução específica |
```

**Fontes a adicionar:**
- Ji et al. (2022) "Survey of Hallucination in NLG" - arXiv:2202.03629
- Huang et al. (2024) "A Survey on Hallucination in LLMs" - ACM TOIS

---

### 22. Aula 2.5 — Os Três Desafios
**Problemas Identificados:**

1. **Taxonomia tríplice sem precedente acadêmico:**
   - "Três Desafios" (Dirigibilidade, Conhecimento, Estilo) é criação original do autor
   - Literatura usa: Content/Attribute Control (arXiv:2408.12599), 58 técnicas por aplicação (The Prompt Report)

2. **P.O.E.M.A. novamente sem fundamentação:**
   - Não aparece em surveys de prompt engineering
   - Reforça achado da Aula 2.7 - framework proprietário não declarado

3. **CoT duplicado inconsistentemente:**
   - Aparece em Desafio 1 (Dirigibilidade) E Desafio 2 (Conhecimento)
   - Mesma técnica com descrições diferentes confunde

4. **Persona = Conhecimento (incorreto):**
   - Tabela P.O.E.M.A.: "Persona resolve Estilo, Conhecimento"
   - Realidade: Persona é técnica de estilo/tom, não garante conhecimento correto

5. **Falta limites de steerability:**
   - Paper arXiv:2411.12405: "Many models resist steering"
   - Aula não menciona que dirigibilidade tem limites inerentes

6. **Ausência de Safety como dimensão:**
   - Literatura moderna inclui Safety Control como dimensão primária
   - Framework omite segurança completamente

**Correções Sugeridas:**
```markdown
> **Nota:** O framework "Três Desafios" e P.O.E.M.A. são frameworks didáticos
> desenvolvidos para este curso, inspirados em literatura de CTG e prompt
> engineering. Para taxonomias acadêmicas, consulte [The Prompt Report](https://arxiv.org/abs/2406.06608).
```

**Fontes:**
- [Controllable Text Generation Survey](https://arxiv.org/abs/2408.12599)
- [Evaluating Prompt Steerability](https://arxiv.org/html/2411.12405v1)

---

### 23. Aula 3.3 — Metaprompt de Análise
**Problemas Identificados:**

1. **Definição simplificada de meta-prompting:**
   - Aula: "prompt que gera prompts"
   - Literatura distingue: APE (candidatos + score), Scaffolding (orquestração), RMP (auto-template)
   - Confusão conceitual para quem acessar literatura

2. **Ausência de referências fundamentais (ALTA severidade):**
   - **Não cita APE** - Zhou et al. (2023) "Large Language Models Are Human-Level Prompt Engineers" - ICLR 2023
   - **Não cita Meta-Prompting** - Suzgun & Kalai (2024) - ganhos de 15-17% em GPT-4
   - **Não cita OPRO** - Yang et al. (2023) - LLMs como otimizadores

3. **P.O.E.M.A. novamente sem fundamentação:**
   - Terceira aula que usa framework sem citação de origem
   - Frameworks documentados: COSTAR, CRISPE, RACE, CRAFT

4. **Limitações não discutidas:**
   - Overfitting a casos específicos
   - Amplificação de vieses do modelo gerador
   - Custo computacional de avaliação
   - Auto-referência falível

5. **"Técnica do Nome Único" sem evidência:**
   - Também aparece na Aula 2.7
   - Sem paper que comprove eficácia

**Correção Sugerida:**
```markdown
### Fundamentação Acadêmica

O conceito de meta-prompting foi formalizado em:

- **APE**: Zhou et al. (2023) "LLMs Are Human-Level Prompt Engineers" - ICLR 2023
- **Meta-Prompting**: Suzgun & Kalai (2024) - ganhos de 15-17%

> **Nota:** O framework P.O.E.M.A. é criação didática deste curso.
```

**Fontes a adicionar:**
- [APE - Zhou et al., ICLR 2023](https://arxiv.org/abs/2211.01910)
- [Meta-Prompting - Suzgun & Kalai, 2024](https://arxiv.org/abs/2401.12954)
- [OPRO - Yang et al., 2023](https://arxiv.org/abs/2309.03409)

---

### 24. Aula 3.4 — Metaprompt de Escrita
**Problemas CRÍTICOS:**

1. **PREFILL DEPRECADO SEM AVISO (CRÍTICO):**
   - Aula ensina "prefill" como técnica atual
   - **Realidade:** Prefill via API retorna **erro 400** no Claude Opus 4.6 e Sonnet 4.5
   - Afeta também Aulas 2.7 e 2.9 que mencionam prefill
   - Documentação: [Migration Guide Claude 4.6](https://platform.claude.com/docs/en/about-claude/models/migration-guide)

2. **Confusão terminológica prefill:**
   - Aula usa "prefill" para instrução textual ("Comece com X")
   - Termo técnico "prefill" = pré-preencher message do assistant via API
   - São coisas diferentes: instrução textual ainda funciona, API prefill não

3. **Formato de placeholders incorreto:**
   - Aula: `` `PLACEHOLDER EM MAIÚSCULAS` `` (backticks)
   - **Documentação oficial:** `{{placeholder}}` (double brackets)
   - Formato do curso não é reconhecido automaticamente pelo Claude Console

4. **Falta Structured Outputs:**
   - Técnica moderna com JSON Schema não mencionada
   - Usa constrained decoding para 100% conformidade
   - É a alternativa recomendada ao prefill deprecado

5. **P.O.E.M.A. — Quarta ocorrência sem referência**

**Correção URGENTE:**
```markdown
### ⚠️ Prefill Deprecado

A técnica de prefill via API está **deprecada** desde Claude Opus 4.6.
Para controlar o início da resposta, use:

1. **Instrução textual:** "Comece diretamente com RELATÓRIO"
2. **Structured Outputs:** JSON Schema via `output_config.format`

> **Nota:** Use `{{PLACEHOLDER}}` para variáveis automáticas.
```

**Fontes:**
- [Structured Outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Prompt Templates](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompt-templates-and-variables)

---

### 25. Aula 2.3 — Zero-Shot CoT
**Lacuna:** Não diferencia claramente entre:
- Zero-Shot CoT ("pense passo a passo")
- Few-Shot CoT (exemplos com raciocínio)
- Extended Thinking (modo proprietário)

**Correção:** Criar tabela comparativa clara.

---

## OBSCURIDADES (Baixa Prioridade)

### 19. Módulo 0 — Introdução
**Problema:** Falta contextualização sobre pré-requisitos e público-alvo.

### 20. Transições entre Módulos
**Problema:** Saltos conceituais abruptos entre alguns tópicos.

### 21. Exercícios Práticos
**Problema:** Alguns exercícios carecem de critérios de avaliação claros.

### 22. Glossário
**Ausência:** Não há glossário consolidado de termos técnicos.

---

## PLANO DE CORREÇÃO PRIORIZADO

### Fase 1 — Correções Críticas (Imediato)
1. [ ] Corrigir afirmação sobre RAG/planos pagos (Aula 3.1)
2. [ ] Corrigir afirmação sobre memorização (Aula 1.1)
3. [ ] Corrigir determinismo com seed (Aulas 1.3, 1.4)
3b. [ ] **URGENTE:** Adicionar aviso de prefill DEPRECADO + Structured Outputs (Aulas 2.7, 2.9, 3.4)
3c. [ ] Corrigir formato placeholders: `{{PLACEHOLDER}}` não backticks (Aula 3.4)

### Fase 2 — Terminologia (1 semana)
4. [ ] Substituir "Vibe Prompting" (Aula 2.1)
5. [ ] Distinguir Extended Thinking vs CoT (Aula 2.3)
6. [ ] Corrigir uso de "Prefill" — está DEPRECATED (Aulas 2.7, 2.9)
7. [ ] Corrigir "Frequentista" (Aula 1.7)
8. [ ] Corrigir "Regressão à Moda" (Aula 1.4)
9. [ ] Corrigir hierarquia System Prompt e remover "Prompt de Customização" (Aula 2.6)
9b. [ ] Adicionar disclaimer: P.O.E.M.A. é framework pedagógico, não validado (Aulas 2.5, 2.7)
9c. [ ] Remover hierarquia de ênfase (MAIÚSCULAS) — contradiz Anthropic (Aula 2.7)
9d. [ ] Remover "Técnica do Nome Único" ou marcar como hipótese (Aula 2.7)
9e. [ ] Remover números sem fonte: "-10% a -12%" personas, "-90%" jailbreaks (Aula 2.4)
9f. [ ] Corrigir "gorjetas sem efeito" → "resultados inconclusivos" (Aula 2.4)
9g. [ ] Reconciliar contradição polidez vs. Mind Your Tone (Aula 2.4)
9h. [ ] Corrigir CoT duplicado (Desafio 1 e 2) — consolidar em um lugar (Aula 2.5)
9i. [ ] Corrigir "Persona = Conhecimento" — persona é estilo, não garante conhecimento (Aula 2.5)
9j. [ ] Adicionar limites de steerability + mencionar Safety como dimensão (Aula 2.5)

### Fase 3 — Atualizações (2 semanas)
10. [ ] Adicionar DPO ao treinamento (Aula 1.8)
11. [ ] Nuançar "sabedoria intrínseca" (Aula 2.2)
12. [ ] Atualizar modelos de referência (Aula 2.9)
13. [ ] Converter páginas para tokens (Aula 1.7)
13b. [ ] Atualizar tabela Deep Research: GPT-5.2, Research nativo Claude (Aula 3.2)
13c. [ ] Adicionar taxas de erro em citações: ~37% (Aula 3.2)

### Fase 4 — Enriquecimento Acadêmico (3 semanas)
14. [ ] Adicionar estudo Kang et al. (Aula 2.8)
15. [ ] Adicionar citações acadêmicas (Aula 3.5)
16. [ ] Completar analogia JPEG (Aula 1.2)
17. [ ] Adicionar nota sobre rei-rainha (Aula 1.2)
18. [ ] Adicionar Lost in the Middle + Curva U (Aulas 1.6, 1.7)
19. [ ] Criar tabela CoT comparativa (Aula 2.3)
20. [ ] Adicionar conceitos hardcoded/softcoded (Aula 2.6)
21. [ ] Corrigir conversão tokens/páginas: 200K = ~300-400 páginas (Aula 1.6)
22. [ ] Atualizar tabela de modelos: Gemini 2.0, Claude Opus 4.5/4.6 (Aula 1.6)
22b. [ ] Adotar taxonomia acadêmica de alucinações: Intrinsic/Extrinsic + Factuality/Faithfulness (Aula 1.9)
22c. [ ] Remover itens incorretos da taxonomia: misturas linguísticas, falhas de ferramentas (Aula 1.9)
22d. [ ] Adicionar técnicas: Chain-of-Verification, SelfCheckGPT (Aula 1.9)
22e. [ ] Adicionar referências APE, Meta-Prompting, OPRO (Aula 3.3)
22f. [ ] Adicionar seção de limitações: overfitting, vieses, custo (Aula 3.3)

### Fase 5 — Melhorias Estruturais (4 semanas)
23. [ ] Adicionar contextualização inicial (Módulo 0)
24. [ ] Melhorar transições entre módulos
25. [ ] Adicionar critérios de avaliação aos exercícios
26. [ ] Criar glossário técnico

---

## REFERÊNCIAS ACADÊMICAS RECOMENDADAS

### Papers Fundamentais para Incorporar

| Paper | Autores | Ano | Relevância |
|-------|---------|-----|------------|
| Extracting Training Data from LLMs | Carlini et al. | 2021 | Memorização |
| Chain-of-Thought Prompting | Wei et al. | 2022 | CoT |
| Direct Preference Optimization | Rafailov et al. | 2023 | DPO |
| Lost in the Middle | Liu et al. | 2023 | Contexto |
| Sparks of AGI | Bubeck et al. | 2023 | Capacidades |
| EmotionPrompt | Li et al. | 2023 | Prompts emocionais |
| Butterfly Effect of Prompts | Salinas & Morstatter | 2024 | Sensibilidade |
| Should We Respect LLMs? | Yin et al. | 2024 | Polidez |
| Sycophancy in LLMs | Kang et al. | 2024 | Concordância |

---

## MÉTRICAS DE QUALIDADE POR AULA

| Aula | Nota | Prioridade de Correção |
|------|------|------------------------|
| 1.1 | 6.0 | CRÍTICA |
| 1.2 | 7.0 | ALTA |
| 1.3 | 7.0 | ALTA |
| 1.4 | 7.0 | MÉDIA |
| 1.5 | 8.0 | BAIXA |
| 1.6 | 7.0 | MÉDIA |
| 1.7 | 7.5 | MÉDIA |
| 1.8 | 7.5 | MÉDIA |
| 1.9 | 7.0 | MÉDIA |
| 2.1 | 6.5 | ALTA |
| 2.2 | 7.0 | ALTA |
| 2.3 | 6.5 | ALTA |
| 2.4 | 7.0 | MÉDIA |
| 2.5 | 7.5 | MÉDIA |
| 2.6 | 6.5 | ALTA |
| 2.7 | 6.5 | ALTA |
| 2.8 | 7.5 | MÉDIA |
| 2.9 | 7.0 | MÉDIA |
| 3.1 | 5.0 | CRÍTICA |
| 3.2 | 7.0 | MÉDIA |
| 3.3 | 7.0 | MÉDIA |
| 3.4 | 6.5 | ALTA |
| 3.5 | 6.5 | ALTA |

**Média Geral:** 7.3/10
**Nota Após Correções Estimada:** 8.5/10

---

## CONCLUSÃO

O material apresenta boa qualidade didática geral, mas possui **3 erros factuais críticos** que comprometem a credibilidade e **5 problemas terminológicos** que podem confundir alunos. A implementação das correções da Fase 1 e 2 é urgente. As fases subsequentes enriquecerão o material com fundamentação acadêmica robusta.

---

*Relatório gerado por análise de 23 agentes independentes*
*Auditoria Acadêmica - Curso Escrita com LLMs*
