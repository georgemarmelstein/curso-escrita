# Aula 6: Engenharia de Prompt

> **Duração:** ~2h30 (versão expandida com insights de especialistas)
> **Tipo:** Teórico-Prático
> **Módulo:** 2 - Prompts Agênticos
> **Pré-requisito:** Módulo 1 (Aulas 0-5)

---

## Objetivo da Aula

Dominar a arte de escrever prompts eficazes para sistemas agênticos. Você aprenderá a transformar instruções vagas em especificações precisas que o agente executa com consistência.

**Lema:** "Se você acertar o spec, o código quase escreve a si mesmo."

### Por Que Engenharia de Prompt?

> *"If you get the spec right, the code almost writes itself."*
> — Al Harris, Amazon Kiro (AI Engineer Summit 2024)
>
> *Tradução: "Se você acertar a especificação, o código quase escreve a si mesmo."*

```
┌─────────────────────────────────────────────────────────────────┐
│              POR QUE ENGENHARIA DE PROMPT?                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PROMPT RUIM:                                                  │
│   ────────────                                                  │
│   "Analise este documento e me dê um resumo"                    │
│                                                                 │
│   RESULTADOS:                                                   │
│   • Formato inconsistente                                       │
│   • Informações omitidas                                        │
│   • Retrabalho constante                                        │
│   • Frustração com o agente                                     │
│                                                                 │
│   PROMPT ENGENHEIRADO:                                          │
│   ─────────────────────                                         │
│   "Analise este documento e gere um resumo estruturado com:     │
│    1. FATOS: Lista cronológica dos eventos                      │
│    2. PARTES: Nome e qualificação de cada parte                 │
│    3. PEDIDOS: Itemização do que é solicitado                   │
│    4. FUNDAMENTOS: Base legal citada                            │
│    SEMPRE incluir página de referência.                         │
│    NUNCA omitir valores monetários."                            │
│                                                                 │
│   RESULTADOS:                                                   │
│   • Formato consistente                                         │
│   • Informações completas                                       │
│   • Execução autônoma                                           │
│   • Confiança no sistema                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Bloco 1: Paradigma Spec-Driven (25 min)

### 1.1 O Problema do "Vibe Coding"

> *"Vibe Coding é quando você não sabe o que está fazendo e deixa a IA fazer tudo. Vibe Engineering é quando você sabe exatamente o que quer e usa IA para acelerar."*
> — Kitze (AI Engineer Summit 2025)

```
┌─────────────────────────────────────────────────────────────────┐
│              VIBE CODING vs VIBE ENGINEERING                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   VIBE CODING (Anti-padrão):                                    │
│   ─────────────────────────────                                 │
│   "Gere uma minuta de sentença para este processo de BPC"       │
│                                                                 │
│   O que acontece:                                               │
│   • Agente ADIVINHA o formato                                   │
│   • Agente INVENTA estrutura                                    │
│   • Agente OMITE informações essenciais                         │
│   • Você RETRABALHA 80% do output                               │
│                                                                 │
│   VIBE ENGINEERING (Padrão correto):                            │
│   ─────────────────────────────────────                         │
│   "Gere minuta de sentença com:                                 │
│    - Estrutura: RELATÓRIO → FUNDAMENTAÇÃO → DISPOSITIVO         │
│    - Requerente: [nome completo]                                │
│    - Fundamento: Art. 20 da Lei 8.742/93                        │
│    - Citar: Tema 1038 do STF                                    │
│    - Formato: Parágrafos numerados, sem bullets                 │
│    SEMPRE verificar se há laudo social nos autos."              │
│                                                                 │
│   O que acontece:                                               │
│   • Agente SEGUE o formato                                      │
│   • Agente USA estrutura definida                               │
│   • Agente INCLUI informações especificadas                     │
│   • Você REVISA 20% (ajustes finos)                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**A diferença fundamental:**

| Aspecto | Vibe Coding | Vibe Engineering |
|---------|-------------|------------------|
| **Você sabe** | O que quer vagamente | Exatamente o que quer |
| **Você especifica** | Resultado final | Resultado + estrutura + regras |
| **Agente faz** | Adivinhação criativa | Execução precisa |
| **Retrabalho** | 80% (frustrante) | 20% (refinamento) |

### 1.2 O Framework Spec-Driven

> *"Specs são o contrato entre você e o agente. Quanto mais claro o contrato, melhor a entrega."*

```
┌─────────────────────────────────────────────────────────────────┐
│                  FRAMEWORK SPEC-DRIVEN                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FASE 1: REQUIREMENTS (O QUE)                                  │
│   ──────────────────────────────                                │
│   Definir claramente o que deve ser feito:                      │
│   • User Story: "Como [papel], quero [ação] para [benefício]"   │
│   • Critérios de Aceitação: Lista de verificações               │
│   • Restrições: O que NÃO deve acontecer                        │
│                                                                 │
│   FASE 2: DESIGN (COMO)                                         │
│   ─────────────────────                                         │
│   Desenhar a solução antes de executar:                         │
│   • Entrada esperada: Formato, tamanho, tipo                    │
│   • Saída esperada: Template, estrutura, campos                 │
│   • Fluxo: Passos em ordem                                      │
│                                                                 │
│   FASE 3: TASKS (PASSOS)                                        │
│   ─────────────────────                                         │
│   Quebrar em tarefas atômicas:                                  │
│   • Cada tarefa: Uma ação verificável                           │
│   • Dependências: O que precisa vir antes                       │
│   • Critério de sucesso: Como saber que terminou                │
│                                                                 │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│   │REQUIREMENTS │ ──▶ │   DESIGN    │ ──▶ │   TASKS     │       │
│   │  (O quê)    │     │  (Como)     │     │  (Passos)   │       │
│   └─────────────┘     └─────────────┘     └─────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Exemplo Prático: Spec-Driven para Relatório

**Cenário:** Criar prompt para relatório de processo previdenciário

**FASE 1: REQUIREMENTS**

```markdown
## User Story
Como magistrado, quero um relatório estruturado do processo
para preparar a análise sem precisar reler todos os autos.

## Critérios de Aceitação
- [ ] Identifica todas as partes corretamente
- [ ] Lista pedidos com valores (se mencionados)
- [ ] Cronologia de eventos com datas
- [ ] Fundamentos jurídicos de ambas as partes
- [ ] Provas documentais listadas

## Restrições
- NÃO incluir análise jurídica (fase posterior)
- NÃO inventar fatos não presentes nos autos
- NÃO omitir contestação (se houver)
```

**FASE 2: DESIGN**

```markdown
## Entrada Esperada
- Arquivo: TXT ou PDF do processo
- Tamanho: 10-200 páginas
- Conteúdo: Petição inicial, contestação (opcional), provas

## Saída Esperada
# RELATÓRIO - Processo nº XXXXXXX

## 1. DADOS PROCESSUAIS
| Campo | Valor |
|-------|-------|
| Número | ... |
| Autor | ... |
| Réu | ... |

## 2. OBJETO
[2-3 parágrafos]

## 3. CRONOLOGIA
| Data | Evento |
|------|--------|
| ... | ... |

## 4. FUNDAMENTOS
### Do Autor
### Do Réu

## 5. PROVAS
- [Documento] (pág. X)
```

**FASE 3: TASKS**

```markdown
## Tarefas
1. [ ] Ler documento completo
2. [ ] Extrair dados processuais (número, partes, classe)
3. [ ] Identificar objeto da ação
4. [ ] Montar cronologia com datas
5. [ ] Listar fundamentos do autor
6. [ ] Listar fundamentos do réu
7. [ ] Catalogar provas com página
8. [ ] Gerar relatório no formato especificado
9. [ ] Verificar completude
```

**Resultado: Prompt Engenheirado**

O prompt final incorpora todas as 3 fases:

```
Analise o processo e gere um relatório estruturado.

ENTRADA: Arquivo TXT do processo (já fornecido)

SAÍDA ESPERADA:
[Template da Fase 2]

REGRAS:
1. SEMPRE incluir página de referência para provas
2. NUNCA incluir análise jurídica (apenas relatar)
3. NUNCA inventar fatos não presentes nos autos
4. SEMPRE verificar se há contestação

PASSOS:
[Tasks da Fase 3]
```

---

## Bloco 2: Anatomia do Prompt Eficaz (30 min)

### 2.1 Estrutura Universal do Prompt

> *"A structured prompt is like a contract. The clearer the contract, the better the delivery."*
> — Barry Zhang, Anthropic (AI Engineer Summit 2024)
>
> *Tradução: "Um prompt estruturado é como um contrato. Quanto mais claro o contrato, melhor a entrega."*

```
┌─────────────────────────────────────────────────────────────────┐
│              ESTRUTURA UNIVERSAL DO PROMPT                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───────────────────────────────────────────────────────┐     │
│   │  # NOME/TÍTULO                                        │     │
│   │                                                       │     │
│   │  > Uma linha descrevendo o propósito exato            │     │
│   │                                                       │     │
│   │  ## CONTEXTO                                          │     │
│   │  - Fato essencial 1                                   │     │
│   │  - Fato essencial 2                                   │     │
│   │  - Restrição importante                               │     │
│   │                                                       │     │
│   │  ## TAREFA                                            │     │
│   │  [O que fazer de forma clara e objetiva]              │     │
│   │                                                       │     │
│   │  ## REGRAS (CRÍTICO)                                  │     │
│   │  1. SEMPRE [requisito positivo]                       │     │
│   │  2. NUNCA [antipadrão proibido]                       │     │
│   │  3. PREFERIR [prioridade quando conflito]             │     │
│   │                                                       │     │
│   │  ## ENTRADA ESPERADA                                  │     │
│   │  [Descreva formato, tamanho, tipo de dado]            │     │
│   │                                                       │     │
│   │  ## SAÍDA ESPERADA                                    │     │
│   │  ```                                                  │     │
│   │  [Template estruturado da saída]                      │     │
│   │  ```                                                  │     │
│   │                                                       │     │
│   │  ## EXEMPLOS                                          │     │
│   │  ### Exemplo 1: [Caso simples]                        │     │
│   │  **Entrada:** [...]                                   │     │
│   │  **Saída:** [...]                                     │     │
│   │                                                       │     │
│   │  ## CHECKPOINTS                                       │     │
│   │  - [ ] Verificação 1                                  │     │
│   │  - [ ] Verificação 2                                  │     │
│   └───────────────────────────────────────────────────────┘     │
│                                                                 │
│   SEÇÕES OBRIGATÓRIAS:                                          │
│   ✓ Tarefa (o que fazer)                                        │
│   ✓ Regras (como fazer)                                         │
│   ✓ Saída esperada (formato)                                    │
│                                                                 │
│   SEÇÕES RECOMENDADAS:                                          │
│   ○ Contexto (quando necessário)                                │
│   ○ Exemplos (para tarefas complexas)                           │
│   ○ Checkpoints (para validação)                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Cada Seção em Detalhe

**CONTEXTO: O Background Necessário**

```
┌─────────────────────────────────────────────────────────────────┐
│                       CONTEXTO                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O QUE INCLUIR:                                                │
│   • Fatos essenciais que o agente precisa saber                 │
│   • Restrições do ambiente                                      │
│   • Premissas que não devem ser questionadas                    │
│                                                                 │
│   O QUE NÃO INCLUIR:                                            │
│   • Explicações longas (use referências)                        │
│   • Informações que podem ser inferidas                         │
│   • Background histórico desnecessário                          │
│                                                                 │
│   EXEMPLO BOM:                                                  │
│   ## Contexto                                                   │
│   - Jurisdição: Justiça Federal da 5ª Região                    │
│   - Tipo de processo: Previdenciário (BPC)                      │
│   - Partes: Idoso (autor) vs INSS (réu)                         │
│   - Há laudo social nos autos (pág. 45-52)                      │
│                                                                 │
│   EXEMPLO RUIM:                                                 │
│   ## Contexto                                                   │
│   O BPC é um benefício assistencial previsto na                 │
│   Lei 8.742/93, conhecida como LOAS, que garante                │
│   um salário mínimo mensal à pessoa com deficiência             │
│   ou ao idoso com 65 anos ou mais que comprove não              │
│   possuir meios de prover a própria manutenção...               │
│   [explicação de 500 palavras que o agente já sabe]             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**TAREFA: O Que Fazer**

```
┌─────────────────────────────────────────────────────────────────┐
│                        TAREFA                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CARACTERÍSTICAS DE UMA BOA TAREFA:                            │
│   • Verbo de ação claro (gere, analise, extraia, resuma)        │
│   • Escopo definido (o que está dentro, o que está fora)        │
│   • Resultado mensurável (pode verificar se completou)          │
│                                                                 │
│   EXEMPLO BOM:                                                  │
│   ## Tarefa                                                     │
│   Gere um relatório estruturado do processo que permita         │
│   ao magistrado preparar a análise sem reler os autos.          │
│   O relatório deve conter: dados processuais, objeto,           │
│   cronologia, fundamentos e provas.                             │
│                                                                 │
│   EXEMPLO RUIM:                                                 │
│   ## Tarefa                                                     │
│   Faça um resumo bom do processo.                               │
│                                                                 │
│   POR QUE É RUIM:                                               │
│   • "bom" é subjetivo                                           │
│   • "resumo" é vago (resumo de quê?)                            │
│   • não define estrutura esperada                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**REGRAS: O Coração do Prompt**

> *"Treat the model like a junior developer. Be explicit, not subtle."*
> — Dex Horthy (12 Factor Agents)
>
> *Tradução: "Trate o modelo como um desenvolvedor júnior. Seja explícito, não sutil."*

```
┌─────────────────────────────────────────────────────────────────┐
│                        REGRAS                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O PADRÃO SEMPRE/NUNCA/PREFERIR:                               │
│                                                                 │
│   SEMPRE (requisitos positivos):                                │
│   ─────────────────────────────                                 │
│   1. SEMPRE incluir página de referência para citações          │
│   2. SEMPRE verificar se há contestação nos autos               │
│   3. SEMPRE usar terceira pessoa                                │
│                                                                 │
│   NUNCA (antipadrões proibidos):                                │
│   ─────────────────────────────                                 │
│   4. NUNCA inventar fatos não presentes nos autos               │
│   5. NUNCA incluir análise jurídica nesta etapa                 │
│   6. NUNCA usar linguagem coloquial                             │
│                                                                 │
│   PREFERIR (prioridades em conflito):                           │
│   ───────────────────────────────────                           │
│   7. PREFERIR listas sobre parágrafos para fatos                │
│   8. PREFERIR citação direta sobre paráfrase                    │
│   9. PREFERIR completude sobre brevidade                        │
│                                                                 │
│   POR QUE FUNCIONA:                                             │
│   • SEMPRE: Define o que DEVE acontecer                         │
│   • NUNCA: Define o que NÃO PODE acontecer                      │
│   • PREFERIR: Resolve ambiguidades quando há conflito           │
│                                                                 │
│   COBERTURA:                                                    │
│   ┌────────────────┐                                            │
│   │    SEMPRE      │ → Requisitos positivos                     │
│   ├────────────────┤                                            │
│   │    NUNCA       │ → Restrições/proibições                    │
│   ├────────────────┤                                            │
│   │   PREFERIR     │ → Prioridades/desempate                    │
│   └────────────────┘                                            │
│                                                                 │
│   Juntas, cobrem todos os casos possíveis.                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**SAÍDA ESPERADA: O Template**

```
┌─────────────────────────────────────────────────────────────────┐
│                    SAÍDA ESPERADA                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O template define EXATAMENTE como o output deve parecer.      │
│                                                                 │
│   EXEMPLO:                                                      │
│                                                                 │
│   ## Saída Esperada                                             │
│                                                                 │
│   ```markdown                                                   │
│   # RELATÓRIO - Processo nº [NÚMERO]                            │
│                                                                 │
│   ## 1. DADOS PROCESSUAIS                                       │
│   | Campo | Valor |                                             │
│   |-------|-------|                                             │
│   | Número | [preencher] |                                      │
│   | Classe | [preencher] |                                      │
│   | Autor | [nome completo] |                                   │
│   | Réu | [nome completo] |                                     │
│   | Distribuição | [data] |                                     │
│                                                                 │
│   ## 2. OBJETO                                                  │
│   [2-3 parágrafos descrevendo o pedido]                         │
│                                                                 │
│   ## 3. CRONOLOGIA                                              │
│   | Data | Evento |                                             │
│   |------|--------|                                             │
│   | [data] | [descrição do evento] |                            │
│                                                                 │
│   ## 4. FUNDAMENTOS                                             │
│   ### 4.1 Do Autor                                              │
│   - [fundamento 1]                                              │
│   - [fundamento 2]                                              │
│                                                                 │
│   ### 4.2 Do Réu                                                │
│   - [fundamento 1]                                              │
│   - [fundamento 2]                                              │
│                                                                 │
│   ## 5. PROVAS                                                  │
│   - [Documento] (pág. X)                                        │
│   - [Documento] (pág. Y)                                        │
│   ```                                                           │
│                                                                 │
│   BENEFÍCIOS DO TEMPLATE:                                       │
│   • Formato consistente toda vez                                │
│   • Agente sabe exatamente o que preencher                      │
│   • Fácil verificar se está completo                            │
│   • Reduz ambiguidade a zero                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Prompt Fraco vs Prompt Forte

```
┌─────────────────────────────────────────────────────────────────┐
│              PROMPT FRACO vs PROMPT FORTE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PROMPT FRACO:                                                 │
│   ─────────────                                                 │
│   "Resuma este documento jurídico"                              │
│                                                                 │
│   PROBLEMAS:                                                    │
│   • Resumo de quê? (fatos? argumentos? tudo?)                   │
│   • Em que formato? (parágrafos? bullets? tabela?)              │
│   • Com quanto detalhe? (1 página? 1 parágrafo?)                │
│   • O que é importante? (autor? réu? juiz?)                     │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   PROMPT FORTE:                                                 │
│   ─────────────                                                 │
│   "Gere um resumo executivo deste processo com:                 │
│                                                                 │
│   ## Estrutura                                                  │
│   1. SÍNTESE (1 parágrafo): O que é pedido e por quem           │
│   2. FATOS (bullets): Cronologia dos eventos                    │
│   3. CONTROVÉRSIA: Onde autor e réu discordam                   │
│   4. QUESTÃO CENTRAL: O que precisa ser decidido                │
│                                                                 │
│   ## Regras                                                     │
│   - SEMPRE incluir valores monetários mencionados               │
│   - NUNCA incluir análise de mérito                             │
│   - PREFERIR citação direta sobre paráfrase                     │
│                                                                 │
│   ## Formato                                                    │
│   - Máximo 1 página                                             │
│   - Bullets para fatos                                          │
│   - Parágrafos para síntese e controvérsia"                     │
│                                                                 │
│   RESULTADO:                                                    │
│   • Agente sabe exatamente o que fazer                          │
│   • Output consistente toda vez                                 │
│   • Verificação objetiva de qualidade                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.4 Exercício: Transforme Prompts Fracos em Fortes

**Exercício 1:** Transforme este prompt fraco:

```
"Analise a petição inicial e me diga os pontos importantes"
```

**Exercício 2:** Transforme este prompt fraco:

```
"Faça uma pesquisa de jurisprudência sobre pensão por morte"
```

**Exercício 3:** Transforme este prompt fraco:

```
"Elabore uma minuta de decisão"
```

---

## Bloco 3: Regras Explícitas (25 min)

### 3.1 O Problema das Instruções Vagas

> *"Be explicit, not subtle. The model is smart but not psychic."*
> — Dex Horthy (12 Factor Agents)
>
> *Tradução: "Seja explícito, não sutil. O modelo é inteligente, mas não é vidente."*

```
┌─────────────────────────────────────────────────────────────────┐
│              INSTRUÇÕES VAGAS vs EXPLÍCITAS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   VAGO (interpretável):                                         │
│   ─────────────────────                                         │
│   "Seja formal"                                                 │
│   "Inclua informações relevantes"                               │
│   "Mantenha qualidade alta"                                     │
│   "Seja completo mas conciso"                                   │
│                                                                 │
│   PROBLEMAS:                                                    │
│   • O que é "formal"? (jurídico? corporativo? acadêmico?)       │
│   • O que é "relevante"? (para quem? para quê?)                 │
│   • O que é "alta qualidade"? (critérios?)                      │
│   • "Completo mas conciso" é contradição (qual prevalece?)      │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   EXPLÍCITO (executável):                                       │
│   ──────────────────────                                        │
│   "SEMPRE use terceira pessoa"                                  │
│   "SEMPRE inclua: data, partes, pedido, fundamento"             │
│   "NUNCA exceda 500 palavras"                                   │
│   "PREFERIR completude sobre brevidade em fundamentos"          │
│                                                                 │
│   BENEFÍCIOS:                                                   │
│   • Sem ambiguidade                                             │
│   • Verificável objetivamente                                   │
│   • Consistente entre execuções                                 │
│   • Conflitos resolvidos a priori                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 O Padrão SEMPRE/NUNCA/PREFERIR em Profundidade

**SEMPRE: Requisitos Positivos**

```
┌─────────────────────────────────────────────────────────────────┐
│                       SEMPRE                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FUNÇÃO: Definir o que DEVE acontecer                          │
│                                                                 │
│   CARACTERÍSTICAS:                                              │
│   • Obrigatório (não opcional)                                  │
│   • Verificável (pode checar se foi feito)                      │
│   • Específico (não genérico)                                   │
│                                                                 │
│   EXEMPLOS BONS:                                                │
│   ✓ SEMPRE citar página de referência para fatos               │
│   ✓ SEMPRE incluir data de cada evento na cronologia            │
│   ✓ SEMPRE verificar se há contestação nos autos                │
│   ✓ SEMPRE usar formato de data DD/MM/AAAA                      │
│                                                                 │
│   EXEMPLOS RUINS:                                               │
│   ✗ SEMPRE ser completo (vago)                                  │
│   ✗ SEMPRE manter qualidade (não verificável)                   │
│   ✗ SEMPRE fazer o melhor possível (genérico)                   │
│                                                                 │
│   TESTE: Consigo verificar objetivamente se foi feito?          │
│   Se não, reescreva.                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**NUNCA: Antipadrões Proibidos**

```
┌─────────────────────────────────────────────────────────────────┐
│                        NUNCA                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FUNÇÃO: Definir o que NÃO PODE acontecer                      │
│                                                                 │
│   CARACTERÍSTICAS:                                              │
│   • Proibitivo (bloqueio total)                                 │
│   • Específico (caso concreto)                                  │
│   • Verificável (pode detectar violação)                        │
│                                                                 │
│   EXEMPLOS BONS:                                                │
│   ✓ NUNCA inventar fatos não presentes nos autos                │
│   ✓ NUNCA incluir análise jurídica nesta etapa                  │
│   ✓ NUNCA usar primeira pessoa                                  │
│   ✓ NUNCA omitir valores monetários mencionados                 │
│                                                                 │
│   EXEMPLOS RUINS:                                               │
│   ✗ NUNCA errar (impossível garantir)                           │
│   ✗ NUNCA ser ruim (vago)                                       │
│   ✗ NUNCA fazer coisas erradas (genérico)                       │
│                                                                 │
│   TESTE: Consigo detectar se foi violado?                       │
│   Se não, reescreva.                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**PREFERIR: Prioridades em Conflito**

```
┌─────────────────────────────────────────────────────────────────┐
│                       PREFERIR                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FUNÇÃO: Resolver ambiguidades quando há conflito              │
│                                                                 │
│   CARACTERÍSTICAS:                                              │
│   • Comparativo (A sobre B)                                     │
│   • Contextual (quando há conflito)                             │
│   • Flexível (permite exceções justificadas)                    │
│                                                                 │
│   EXEMPLOS BONS:                                                │
│   ✓ PREFERIR completude sobre brevidade em fatos                │
│   ✓ PREFERIR citação direta sobre paráfrase                     │
│   ✓ PREFERIR listas sobre parágrafos para cronologia            │
│   ✓ PREFERIR precisão sobre velocidade                          │
│                                                                 │
│   QUANDO USAR:                                                  │
│   • Quando duas instruções podem conflitar                      │
│   • Quando há trade-off inevitável                              │
│   • Quando contexto determina a escolha                         │
│                                                                 │
│   EXEMPLO DE CONFLITO RESOLVIDO:                                │
│   "Seja completo" + "Seja conciso" = conflito                   │
│   Solução: "PREFERIR completude sobre brevidade em fatos,       │
│            PREFERIR brevidade sobre completude em descrições"   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Cobertura Completa com as 3 Categorias

```
┌─────────────────────────────────────────────────────────────────┐
│              COBERTURA DE CASOS COM REGRAS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CENÁRIO: Relatório de Processo Previdenciário                 │
│                                                                 │
│   SEMPRE (o que DEVE fazer):                                    │
│   ───────────────────────────                                   │
│   1. SEMPRE incluir número do processo e partes                 │
│   2. SEMPRE citar página de referência                          │
│   3. SEMPRE verificar existência de contestação                 │
│   4. SEMPRE listar provas documentais                           │
│   5. SEMPRE usar formato de data DD/MM/AAAA                     │
│                                                                 │
│   NUNCA (o que NÃO PODE fazer):                                 │
│   ────────────────────────────                                  │
│   6. NUNCA inventar fatos não presentes nos autos               │
│   7. NUNCA incluir análise de mérito                            │
│   8. NUNCA omitir pedidos do autor                              │
│   9. NUNCA usar linguagem coloquial                             │
│   10. NUNCA pular seções do template                            │
│                                                                 │
│   PREFERIR (quando há conflito):                                │
│   ─────────────────────────────                                 │
│   11. PREFERIR completude sobre brevidade em fatos              │
│   12. PREFERIR citação direta sobre paráfrase                   │
│   13. PREFERIR ordem cronológica sobre temática                 │
│   14. PREFERIR tabelas sobre parágrafos para dados              │
│   15. PREFERIR clareza sobre elegância textual                  │
│                                                                 │
│   COBERTURA:                                                    │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  ┌─────────┐                                            │   │
│   │  │ SEMPRE  │ ← O que deve acontecer (5 regras)          │   │
│   │  └────┬────┘                                            │   │
│   │       │                                                 │   │
│   │  ┌────┴────┐                                            │   │
│   │  │  NUNCA  │ ← O que não pode acontecer (5 regras)      │   │
│   │  └────┬────┘                                            │   │
│   │       │                                                 │   │
│   │  ┌────┴────┐                                            │   │
│   │  │PREFERIR │ ← Prioridades em conflito (5 regras)       │   │
│   │  └─────────┘                                            │   │
│   │                                                         │   │
│   │  TOTAL: 15 regras = cobertura completa                  │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4 Exercício: Escrevendo 10 Regras

**Tarefa:** Escreva 10 regras (usando SEMPRE/NUNCA/PREFERIR) para:

"Skill que elabora minuta de sentença de procedência em BPC"

**Template:**

```markdown
## Regras

### SEMPRE (requisitos positivos)
1. SEMPRE [...]
2. SEMPRE [...]
3. SEMPRE [...]

### NUNCA (antipadrões proibidos)
4. NUNCA [...]
5. NUNCA [...]
6. NUNCA [...]
7. NUNCA [...]

### PREFERIR (prioridades)
8. PREFERIR [...] sobre [...]
9. PREFERIR [...] sobre [...]
10. PREFERIR [...] sobre [...]
```

---

## Bloco 4: Prompt Learning Loop (30 min)

### 4.1 O Ciclo de Aprendizado

> *"The human instructions of why it failed... that text is actually very valuable."*
> — SallyAnn DeLucia, Arize (AI Engineer Summit 2024)
>
> *Tradução: "As instruções humanas de por que falhou... esse texto é realmente muito valioso."*

```
┌─────────────────────────────────────────────────────────────────┐
│                  PROMPT LEARNING LOOP                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│           ┌─────────────┐                                       │
│           │  ESCREVER   │ ← Prompt inicial                      │
│           │   prompt    │                                       │
│           └──────┬──────┘                                       │
│                  │                                              │
│                  ▼                                              │
│           ┌─────────────┐                                       │
│           │   RODAR     │ ← Executar com exemplos               │
│           │  exemplos   │   (3-5 casos de teste)                │
│           └──────┬──────┘                                       │
│                  │                                              │
│                  ▼                                              │
│           ┌─────────────┐                                       │
│           │  AVALIAR    │ ← O que funcionou?                    │
│           │ resultados  │   O que falhou?                       │
│           └──────┬──────┘                                       │
│                  │                                              │
│          ┌───────┴───────┐                                      │
│          ▼               ▼                                      │
│    ┌──────────┐    ┌──────────┐                                 │
│    │ SUCESSO  │    │  FALHA   │                                 │
│    │ (5 em 5) │    │(qualquer)│                                 │
│    └────┬─────┘    └────┬─────┘                                 │
│         │               │                                       │
│         ▼               ▼                                       │
│    ┌──────────┐    ┌──────────┐                                 │
│    │  PRONTO  │    │ REFINAR  │ ← Ajustar baseado               │
│    │  (usar)  │    │  prompt  │   em falhas específicas         │
│    └──────────┘    └────┬─────┘                                 │
│                         │                                       │
│                         └───────────────┐                       │
│                                         │                       │
│           ┌─────────────────────────────┘                       │
│           │                                                     │
│           ▼                                                     │
│    [Volta para RODAR]                                           │
│                                                                 │
│   CRITÉRIO DE CONVERGÊNCIA:                                     │
│   5 sucessos consecutivos = prompt pronto                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Feedback Fraco vs Feedback Forte

```
┌─────────────────────────────────────────────────────────────────┐
│              FEEDBACK FRACO vs FEEDBACK FORTE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FEEDBACK FRACO (inútil para aprendizado):                     │
│   ─────────────────────────────────────────                     │
│   "O resumo não está bom. Tente de novo."                       │
│   "Faltam informações importantes."                             │
│   "Não era isso que eu queria."                                 │
│   "Ficou incompleto."                                           │
│                                                                 │
│   PROBLEMAS:                                                    │
│   • Não diz O QUE está errado                                   │
│   • Não diz O QUE faltou                                        │
│   • Não diz O QUE era esperado                                  │
│   • Agente repete o mesmo erro                                  │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   FEEDBACK FORTE (acelera aprendizado):                         │
│   ────────────────────────────────────                          │
│   "Faltam:                                                      │
│    1) Valor dos danos (R$ 50.000) — mencione em PEDIDOS         │
│    2) Data do acidente (15/03/2023) — adicione em CRONOLOGIA    │
│    3) Nome completo do autor — está só 'J.S.', escreva José     │
│       Silva dos Santos"                                         │
│                                                                 │
│   "Erros:                                                       │
│    1) Usou 1ª pessoa ('analisei') — use 3ª ('foi analisado')    │
│    2) Inventou fundamento (Art. 927 CC não está nos autos)      │
│    3) Omitiu contestação (págs. 45-52)"                         │
│                                                                 │
│   BENEFÍCIOS:                                                   │
│   • Diz EXATAMENTE o que corrigir                               │
│   • Aponta ONDE corrigir                                        │
│   • Mostra COMO deveria ser                                     │
│   • Agente aprende e não repete                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Estrutura do Feedback Eficaz

```
┌─────────────────────────────────────────────────────────────────┐
│               ESTRUTURA DO FEEDBACK EFICAZ                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   TEMPLATE DE FEEDBACK:                                         │
│                                                                 │
│   ## O que funcionou                                            │
│   - [Aspecto positivo 1]                                        │
│   - [Aspecto positivo 2]                                        │
│                                                                 │
│   ## O que falhou                                               │
│                                                                 │
│   ### Omissões (faltou)                                         │
│   1. [O que faltou] — [onde deveria estar] — [valor correto]    │
│   2. [O que faltou] — [onde deveria estar] — [valor correto]    │
│                                                                 │
│   ### Erros (estava errado)                                     │
│   1. [O que estava errado] — [como deveria ser]                 │
│   2. [O que estava errado] — [como deveria ser]                 │
│                                                                 │
│   ### Formato (estrutura)                                       │
│   1. [Problema de formato] — [como deveria ser]                 │
│                                                                 │
│   ## Ação para próxima iteração                                 │
│   [Ajuste específico no prompt]                                 │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   EXEMPLO:                                                      │
│                                                                 │
│   ## O que funcionou                                            │
│   - Estrutura do relatório está correta                         │
│   - Cronologia em ordem                                         │
│                                                                 │
│   ## O que falhou                                               │
│                                                                 │
│   ### Omissões                                                  │
│   1. Faltou valor do benefício (R$ 1.412,00) — PEDIDOS          │
│   2. Faltou laudo social (pág. 45-52) — PROVAS                  │
│                                                                 │
│   ### Erros                                                     │
│   1. Data errada (15/03/2023, não 15/03/2022) — CRONOLOGIA      │
│   2. Nome incompleto (é José Silva, não J. Silva) — PARTES      │
│                                                                 │
│   ## Ação para próxima iteração                                 │
│   Adicionar regra: "SEMPRE verificar valores e datas duas       │
│   vezes antes de finalizar"                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 Exemplo de Iteração Completa

```
┌─────────────────────────────────────────────────────────────────┐
│                ITERAÇÃO COMPLETA (3 ciclos)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ITERAÇÃO 1:                                                   │
│   ────────────                                                  │
│   Prompt v1:                                                    │
│   "Gere relatório do processo"                                  │
│                                                                 │
│   Resultado: Relatório genérico, sem estrutura                  │
│                                                                 │
│   Feedback:                                                     │
│   - Faltou estrutura (seções definidas)                         │
│   - Faltou template                                             │
│                                                                 │
│   Ajuste: Adicionar template de saída                           │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   ITERAÇÃO 2:                                                   │
│   ────────────                                                  │
│   Prompt v2:                                                    │
│   "Gere relatório do processo com:                              │
│    1. DADOS                                                     │
│    2. OBJETO                                                    │
│    3. CRONOLOGIA                                                │
│    4. FUNDAMENTOS                                               │
│    5. PROVAS"                                                   │
│                                                                 │
│   Resultado: Estrutura ok, mas inventou fatos                   │
│                                                                 │
│   Feedback:                                                     │
│   - Inventou fundamento (Art. 927 CC não está nos autos)        │
│   - Omitiu contestação existente                                │
│                                                                 │
│   Ajuste: Adicionar regras NUNCA/SEMPRE                         │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   ITERAÇÃO 3:                                                   │
│   ────────────                                                  │
│   Prompt v3:                                                    │
│   "Gere relatório do processo com:                              │
│    [estrutura]                                                  │
│                                                                 │
│    Regras:                                                      │
│    - NUNCA inventar fatos não presentes nos autos               │
│    - SEMPRE verificar se há contestação                         │
│    - SEMPRE citar página de referência"                         │
│                                                                 │
│   Resultado: Correto! 5/5 testes passaram.                      │
│                                                                 │
│   → Prompt pronto para uso.                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.5 Exercício: Iterando até Convergência

**Tarefa:** Dado o prompt inicial abaixo, itere 3 vezes com os feedbacks fornecidos.

**Prompt v1:**
```
"Pesquise jurisprudência sobre pensão por morte"
```

**Feedback 1:**
```
- Resultados muito genéricos (500+ casos)
- Sem filtro de período
- Sem especificação de tribunal
```

**Tarefa:** Escreva o Prompt v2.

**Feedback 2:**
```
- Ainda muitos resultados
- Faltou especificar a controvérsia específica
- Formato de saída não definido
```

**Tarefa:** Escreva o Prompt v3.

**Feedback 3:**
```
- Pesquisa ok, mas citações incompletas
- Faltou link ou número do processo
- Ementas muito longas
```

**Tarefa:** Escreva o Prompt v4 (final).

---

## Bloco 5: Os 10 Erros Mais Comuns (20 min)

### 5.1 Catálogo de Anti-Padrões

```
┌─────────────────────────────────────────────────────────────────┐
│              OS 10 ERROS MAIS COMUNS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. VIBE CODING                                                │
│   ──────────────                                                │
│   ❌ "Gere uma minuta para BPC"                                 │
│   ✓ "Gere minuta com: Requerente [X], Art. [Y], Tema [Z]"       │
│                                                                 │
│   2. SEM CHECKPOINT                                             │
│   ─────────────────                                             │
│   ❌ Deixar agente escrever docs críticos sem revisão           │
│   ✓ Inserir gate de aprovação antes de finalizar                │
│                                                                 │
│   3. STACK TRACES NO FEEDBACK                                   │
│   ────────────────────────────                                  │
│   ❌ Incluir 500 linhas de erro no feedback                     │
│   ✓ Resumir em 2-3 linhas: "Erro X porque Y"                    │
│                                                                 │
│   4. CLAUDE.MD INCHADO                                          │
│   ─────────────────────                                         │
│   ❌ 2000 linhas de docs embutidas                              │
│   ✓ 250 linhas + referências externas                           │
│                                                                 │
│   5. PULAR PLANEJAMENTO                                         │
│   ──────────────────────                                        │
│   ❌ "Gere tudo de uma vez"                                     │
│   ✓ Research → Plan → Implement                                 │
│                                                                 │
│   6. SEM SPEC                                                   │
│   ──────────                                                    │
│   ❌ "Construa um sistema"                                      │
│   ✓ "Construa com specs: A, B, C"                               │
│                                                                 │
│   7. PROMPT MONOLÍTICO                                          │
│   ─────────────────────                                         │
│   ❌ Uma tarefa de 500 linhas                                   │
│   ✓ Múltiplos prompts focados                                   │
│                                                                 │
│   8. TESTAR SÓ NO FINAL                                         │
│   ─────────────────────                                         │
│   ❌ Construir tudo → Testar → 10 bugs                          │
│   ✓ Testar após cada passo                                      │
│                                                                 │
│   9. CONFIAR SEM VERIFICAÇÃO                                    │
│   ────────────────────────────                                  │
│   ❌ L5 autonomia sem justificativa                             │
│   ✓ Começar L2 → evoluir com sucesso                            │
│                                                                 │
│   10. NÃO DOCUMENTAR FALHAS                                     │
│   ──────────────────────────                                    │
│   ❌ Agente falha → Deletar → Repetir                           │
│   ✓ Agente falha → Documentar → Ajustar → Aprender              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Checklist de Validação de Prompt

```
┌─────────────────────────────────────────────────────────────────┐
│              CHECKLIST DE VALIDAÇÃO                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ANTES DE USAR O PROMPT, VERIFIQUE:                            │
│                                                                 │
│   ESTRUTURA:                                                    │
│   [ ] Tem tarefa clara? (verbo de ação específico)              │
│   [ ] Tem regras explícitas? (SEMPRE/NUNCA/PREFERIR)            │
│   [ ] Tem template de saída? (formato definido)                 │
│   [ ] Tem exemplos? (pelo menos 1 caso)                         │
│                                                                 │
│   REGRAS:                                                       │
│   [ ] Pelo menos 3 regras SEMPRE?                               │
│   [ ] Pelo menos 3 regras NUNCA?                                │
│   [ ] Pelo menos 2 regras PREFERIR?                             │
│   [ ] Todas verificáveis objetivamente?                         │
│                                                                 │
│   SAÍDA:                                                        │
│   [ ] Template completo definido?                               │
│   [ ] Formato especificado? (markdown, tabela, lista)           │
│   [ ] Tamanho máximo definido? (palavras, páginas)              │
│                                                                 │
│   TESTES:                                                       │
│   [ ] Testou com pelo menos 3 exemplos?                         │
│   [ ] Passou em 5 consecutivos?                                 │
│   [ ] Documentou falhas e ajustes?                              │
│                                                                 │
│   CONTEXTO:                                                     │
│   [ ] Contexto necessário incluído?                             │
│   [ ] Contexto desnecessário removido?                          │
│   [ ] Referências externas em vez de texto embutido?            │
│                                                                 │
│   TOTAL: [ ] / 15 itens                                         │
│                                                                 │
│   APROVADO SE: 12+ itens checados                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Exercício: Identificando Erros

**Tarefa:** Identifique os erros no prompt abaixo:

```
Você é um assistente jurídico muito bom e experiente.

Por favor, analise o documento que eu vou te enviar e faça
um resumo completo mas também conciso dele. Inclua todas
as informações importantes e relevantes, mantendo alta
qualidade e precisão.

Seja formal mas acessível, técnico mas compreensível.
O resumo deve ser bom e útil para um advogado usar.

Se tiver dúvidas, use seu melhor julgamento para decidir
o que incluir.
```

**Erros a identificar:**
1. [ ] Erro: _______________________
2. [ ] Erro: _______________________
3. [ ] Erro: _______________________
4. [ ] Erro: _______________________
5. [ ] Erro: _______________________

---

## Fechamento: Template Universal (5 min)

### Síntese: O Prompt Production-Ready

```markdown
# [Nome do Prompt/Skill]

> Uma linha descrevendo o propósito exato

## Contexto
- [Fato essencial 1]
- [Fato essencial 2]
- [Restrição importante]

## Tarefa
[O que fazer de forma clara e objetiva]

## Regras

### SEMPRE (requisitos positivos)
1. SEMPRE [requisito verificável 1]
2. SEMPRE [requisito verificável 2]
3. SEMPRE [requisito verificável 3]

### NUNCA (antipadrões proibidos)
4. NUNCA [proibição verificável 1]
5. NUNCA [proibição verificável 2]
6. NUNCA [proibição verificável 3]

### PREFERIR (prioridades em conflito)
7. PREFERIR [opção A] sobre [opção B]
8. PREFERIR [opção C] sobre [opção D]

## Entrada Esperada
- Formato: [tipo de arquivo/dado]
- Tamanho: [limites]
- Conteúdo: [o que deve conter]

## Saída Esperada
```
[Template estruturado completo]
```

## Exemplos

### Exemplo 1: [Caso simples]
**Entrada:** [descrição breve]
**Saída:** [resultado esperado]

### Exemplo 2: [Caso complexo]
**Entrada:** [descrição breve]
**Saída:** [resultado esperado]

## Checkpoints
- [ ] [Verificação 1]
- [ ] [Verificação 2]
- [ ] [Verificação 3]
```

### Checklist Final da Aula

Ao final desta aula, você deve saber:

- [ ] Diferença entre Vibe Coding e Vibe Engineering
- [ ] As 3 fases do Spec-Driven (Requirements, Design, Tasks)
- [ ] Estrutura universal do prompt (7 seções)
- [ ] O padrão SEMPRE/NUNCA/PREFERIR
- [ ] Como dar feedback forte (específico e acionável)
- [ ] O Prompt Learning Loop (5 sucessos consecutivos)
- [ ] Os 10 erros mais comuns e como evitá-los
- [ ] Como usar o checklist de validação

### Próxima Aula

Na **Aula 7** (Engenharia de Contexto), você aprenderá:
- Progressive Disclosure: metadados visíveis, detalhes sob demanda
- Hierarquia de CLAUDE.md (global, projeto, subpasta)
- Gerenciamento da Context Window
- Otimização de tokens

---

## Material de Apoio

### Especialistas Citados

| Especialista | Afiliação | Contribuição |
|-------------|-----------|--------------|
| **Al Harris** | Amazon Kiro | Paradigma Spec-Driven |
| **Kitze** | Developer Advocate | Vibe Engineering vs Vibe Coding |
| **Dex Horthy** | HumanLayer | 12 Factor Agents, tratamento de erros |
| **Barry Zhang** | Anthropic | Estrutura de prompts, regras explícitas |
| **SallyAnn DeLucia** | Arize | Prompt Learning Loop, feedback específico |

### Referências

- [12 Factor Agents](https://12factor.net/agents) - Princípios de design
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)
- AI Engineer Summit 2024/2025 - Transcrições

---

*Aula 6 - Engenharia de Prompt*
*Módulo 2: Prompts Agênticos*
*Próxima: Aula 7 - Engenharia de Contexto*
