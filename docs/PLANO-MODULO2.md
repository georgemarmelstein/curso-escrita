# Plano de Trabalho: Módulo 2 - Engenharia de Prompt

**Objetivo:** Criar as 9 aulas do módulo 2 no caderno-v2.html, integrando o conteúdo das transcrições com os prompts jurídicos e exercícios práticos.

---

## Fontes de Conteúdo

| Fonte | Caminho | Uso |
|-------|---------|-----|
| Transcrições | `docs/transcricoes/modulo2-engenharia-prompt/` | Conteúdo teórico base |
| Prompts Jurídicos | `docs/prompt-juridico/` | Exemplos práticos (44 prompts) |
| Framework P.O.E.M.A. | `docs/prompt-juridico/cheat-sheet-poema.md` | Metodologia estruturada |
| Caderno Exercícios | `docs/caderno/caderno_exercicios_completo.html` | Referência de exercícios |

---

## Estrutura das Aulas

### Aula 2.1 - Introdução à Engenharia de Prompt
**Slides fonte:** 4 | **Status:** [x] Implementada

**Conteúdo:**
- Citação Kevin Kelly: "Seres humanos são para perguntas; máquinas, para respostas"
- Citação Karpathy: "A linguagem de programação mais quente é o inglês"
- Três modalidades de prompt:
  - **Vibe Prompting:** linguagem natural, conversacional, fluxo de pensamento
  - **Prompt Estruturado:** markdown, delimitadores, P.O.E.M.A., controle de output
  - **Prompt Agêntico:** orquestração, tools/skills, workflows complexos

**Exercício Prático:**
- Comparar mesma tarefa nas 3 modalidades
- Exemplo: "Resuma este texto" (vibe) vs estruturado vs agêntico

**Componentes Interativos:**
- [ ] Diagrama visual das 3 modalidades
- [ ] Exemplo lado a lado das abordagens

---

### Aula 2.2 - Fundamentos de Engenharia de Prompt
**Slides fonte:** 6 | **Status:** [x] Implementada

**Conteúdo:**
- **LLM como Máquina de Calcular Textos:**
  - Input → Cálculos → Output (não-determinístico)
  - Processo auto-regressivo (token por token)
  - Padrões linguísticos (probabilidade semântica)
  - Sem aprendizado contínuo (reset de contexto)
  - Limitado pela janela de contexto

- **LLM como Máquina Obediente:**
  - Pré-treino e Fine-tuning (RLHF)
  - Alinhamento ético (HHH)
  - Dirigibilidade (Steerability)
  - Efeito de Bajulação (Sycophancy)
  - Espelhamento de inteligência

- Citações: Umberto Eco, Ted Nelson

**Exercício Prático:**
- Testar dirigibilidade: mesma pergunta com instruções diferentes
- Testar sycophancy: discordar do modelo e ver reação

**Componentes Interativos:**
- [ ] Demo de estocasticidade (mesma pergunta, respostas diferentes)
- [ ] Exemplo de bajulação (antes/depois)

---

### Aula 2.3 - Inputs Nobres = Outputs Nobres
**Slides fonte:** 2 | **Status:** [x] Implementada

**Conteúdo:**
- A máquina pensa através de tokens
- **Few-Shot Learning:** poder dos exemplos
- **Chain of Thought (CoT):** raciocínio passo a passo
- **Pensamento Estendido (Thinking):** pensar em voz alta
- Ativando áreas nobres da rede neural
- **Efeito Priming:** surfando no contexto

**Exercício Prático:**
- Comparar zero-shot vs few-shot em tarefa jurídica
- Forçar CoT: "Pense passo a passo antes de responder"
- Usar exemplos de ementas para gerar nova ementa

**Componentes Interativos:**
- [ ] Comparativo visual: zero-shot vs few-shot
- [ ] Demo de CoT com problema jurídico

---

### Aula 2.4 - Técnicas Básicas de Vibe Prompting
**Slides fonte:** 5 | **Status:** [x] Implementada

**Conteúdo:**
- **Solicitações Polidas vs Comandos:** diferença de tom
- **Prompts Emocionais:**
  - Estímulos Positivos: "Respire fundo", "Isso é importante para minha carreira", "Acredito em você"
  - Estímulos Negativos: "Duvido que consiga", "Talvez esteja acima de suas capacidades"
- **Personas e POV:**
  - Vocabulário e repertório conceitual
  - Advogado do diabo
  - Teoria da Mente (ToM)
  - SuperTutor

**Exercício Prático:**
- Testar estímulos positivos vs negativos na mesma tarefa
- Usar persona de juiz vs advogado para analisar caso
- Aplicar "advogado do diabo" em argumento próprio

**Componentes Interativos:**
- [ ] Galeria de estímulos emocionais com exemplos
- [ ] Seletor de personas com resultados

---

### Aula 2.5 - Os Três Desafios da Engenharia de Prompt
**Slides fonte:** 4 | **Status:** [x] Implementada

**Conteúdo:**

**Desafio 1: DIRIGIBILIDADE**
- Clareza (escrita e mental)
- Estrutura (P.O.E.M.A., markdown, delimitadores)
- CoT explícito
- Mecanismos de atenção e reforço
- Placeholders e prompts encadeados
- Orquestradores

**Desafio 2: QUALIDADE DO CONHECIMENTO**
- Controle da fonte (anexos, RAG)
- Curadoria de conhecimento
- Ativando humildade ("Eu não sei")
- Chain of Thought
- Palavras de ativação cognitiva
- Análise multi-agêntica

**Desafio 3: QUALIDADE DO ESTILO**
- Modelagem cognitiva e de estilo
- Instruções vs Exemplos
- Delimitação de público-alvo
- Personas e referências literárias
- Formatação de output
- Priming (colocar palavras na boca)

**Exercício Prático:**
- Aplicar P.O.E.M.A. em prompt simples
- Testar controle de fonte com documento anexo
- Comparar output com/sem formatação definida

**Componentes Interativos:**
- [ ] Builder de P.O.E.M.A. interativo
- [ ] Checklist dos 3 desafios

---

### Aula 2.6 - O Prompt de Sistema
**Slides fonte:** 4 | **Status:** [x] Implementada

**Conteúdo:**
- **Hierarquia de Prompts:**
  1. **Prompt de Sistema (Desenvolvedor):** identidade, capacidades, limites
  2. **Prompt de Customização (Operador):** comportamentos específicos
  3. **Prompt do Usuário:** mensagem direta

- **Características do System Prompt:**
  - Contrato de comportamento
  - Invisível ao usuário comum
  - Opera como "diretor de cena"
  - Define funções, ferramentas, limitações, alinhamento

- Análise do prompt de sistema do Claude

**Exercício Prático:**
- Criar system prompt simples para tarefa específica
- Comparar comportamento com/sem system prompt
- Analisar trechos do prompt do Claude

**Componentes Interativos:**
- [ ] Diagrama da hierarquia de prompts
- [ ] Visualizador do system prompt do Claude (trechos)

---

### Aula 2.7 - Técnicas de Prompt Estruturado
**Slides fonte:** Cheat-Sheet P.O.E.M.A. | **Status:** [x] Implementada

**Conteúdo:**
- **Por que Estruturar Prompts:** previsibilidade, consistência, auditabilidade
- **Formatação Markdown:** headers, listas, negrito, código, tabelas, citações
- **Delimitadores XML:** tags P.O.E.M.A. (<persona>, <objetivo>, etc.) e auxiliares
- **Técnicas para Chamar Atenção:** hierarquia de ênfase (MAIÚSCULAS > **negrito** > prefixos)
- **Técnicas Avançadas:**
  - Nome Único (FIRAC+ vs FIRAC genérico)
  - M&M Marrom / Van Halen (marcadores verificáveis)
  - Prefill (instrução de início)
- **Dicas Poderosas:**
  - Guardrails Anti-Alucinação
  - Instruções Anti-Viés
  - Plain Language
  - Placeholders Claros

**Exercício Prático:**
- Transformar prompt vibe em estruturado
- Comparar resultados antes/depois

---

### Aula 2.8 - Prompt FIRAC (Análise Jurídica)
**Slides fonte:** Prompts de Análise | **Status:** [x] Implementada

**Conteúdo:**
- Metodologia FIRAC+ explicada em detalhes
- Anatomia completa do prompt
- Guardrails de fidelidade documental
- Casos de uso e exemplos práticos

**Exercício Prático:**
- Usar FIRAC+ para analisar documento real
- Comparar análise manual vs assistida

---

### Aula 2.9 - Prompt Relatório (Escrita Jurídica)
**Slides fonte:** Prompts de Escrita | **Status:** [x] Implementada

**Conteúdo:**
- **O que é um Relatório Judicial:** dupla função (sumarizar e orientar)
- **Diferença Análise vs. Escrita:** FIRAC+ extrai; Relatório transforma
- **Características do Prompt:** Transformação, Pré-estruturado, Cláusula de Pureza, Verbosidade Controlada
- **Anatomia P.O.E.M.A.:** cada seção com "Por que funciona"
- **Dicas Práticas:** Tamanho do anexo, Peça por peça, Robustez do modelo, Tipo de PDF
- **Modo Incremental:** construção progressiva do relatório
- **Fundamentação:** Art. 489 CPC, Context Rot, Guia Anthropic

**Exercício Prático:**
- Transformar petição inicial em relatório judicial
- Verificar fidelidade (IDs, datas, fatos cronológicos)

---

### Aula 2.10 - IA e Prova: Limites e Possibilidades
**Slides fonte:** Resolução 615/2025 CNJ | **Status:** [x] Implementada

**Conteúdo:**
- **Marco Regulatório:** Resolução 615/2025 CNJ
  - Classificação de riscos: alto risco vs baixo risco
  - Vedação: valoração de provas por IA (Art. 11, AR2)
  - Permitido: funções descritivas e organizacionais (BR1-BR8)
- **Distinção Fundamental:** Valoração vs. Descrição
  - Valoração (vedada): emitir juízo sobre força probante
  - Descrição (permitida): organizar, catalogar, identificar lacunas
- **Três Aplicações Lícitas:**
  - Inventário Probatório
  - Linha do Tempo Processual
  - Mapeamento de Riscos Probatórios
- **Prompts Práticos:**
  - Prompt Inventário Probatório (Framework P.O.E.M.A.)
  - Prompt Linha do Tempo Processual (Framework P.O.E.M.A.)
- **Fundamentação:** Art. 371 CPC, Art. 93 IX CF

**Exercício Prático:**
- Usar prompts de Inventário e Linha do Tempo em caso real
- Verificar neutralidade (teste da perspectiva)

---

## Recursos Adicionais por Aula

### Prompts Jurídicos para Exemplos

| Aula | Prompts Recomendados |
|------|---------------------|
| 2.1 | `smart-brevity.md` (vibe), `firac.md` (estruturado) |
| 2.3 | `ementa-cnj.md` (few-shot), qualquer análise (CoT) |
| 2.4 | `hackear-estilo.md` (persona) |
| 2.5 | Todos P.O.E.M.A. como exemplos |
| 2.6 | `pronunciamento-judicial.md` (system prompt) |
| 2.7 | `cheat-sheet-poema.md` (técnicas estruturadas) |
| 2.8 | `firac.md`, `superfirac.md` (análise jurídica) |
| 2.9 | `relatorio-marmelstein.md` (escrita jurídica) |
| 2.10 | Inventário Probatório, Linha do Tempo (prompts próprios da aula) |

---

## Ordem de Implementação

1. [x] **Fase 1:** Estrutura base no caderno-v2.html (navegação, placeholders)
2. [x] **Fase 2:** Aula 2.1 (introdução conceitual)
3. [x] **Fase 3:** Aulas 2.2 e 2.3 (fundamentos teóricos)
4. [x] **Fase 4:** Aula 2.4 (vibe prompting - prático)
5. [x] **Fase 5:** Aula 2.5 (3 desafios - síntese)
6. [x] **Fase 6:** Aula 2.6 (system prompt - avançado)
7. [x] **Fase 7:** Aula 2.7 (técnicas de prompt estruturado)
8. [x] **Fase 8:** Aula 2.8 (prompt FIRAC - análise)
9. [x] **Fase 9:** Aula 2.9 (prompt Relatório - escrita)
10. [x] **Fase 10:** Aula 2.10 (IA e Prova - limites regulatórios)
11. [ ] **Fase 11:** Componentes interativos (demos, builders)
12. [ ] **Fase 12:** Revisão e integração final

---

## Notas de Implementação

### Estilo Visual
- Manter consistência com módulo 1 (caderno-v2.html)
- Cores: `--primary: #194A68`, `--gold: #BE9C6D`, `--cream: #FFF4E4`
- Tipografia: Crimson Pro (títulos), Source Sans 3 (corpo)

### Componentes Reutilizáveis
- Callouts (info, warning, tip)
- Code blocks para prompts
- Tabelas comparativas
- Blocos de exercício

### Prioridades de Interatividade
1. **Alta:** Builder P.O.E.M.A., comparador few-shot
2. **Média:** Diagrama 3 modalidades, hierarquia prompts
3. **Baixa:** Demos de estocasticidade (complexo)

---

*Plano criado em: 11 de fevereiro de 2026*
*Última atualização: 11 de fevereiro de 2026 — Adicionada aula 2.10 (IA e Prova)*
