# Anexo: Aplicação dos Conceitos ao Sistema Jurídico Agêntico

> **Propósito:** Demonstrar cada conceito arquitetural aplicado ao pipeline jurídico real
> **Caso de uso:** Sistema CLERK - Assessor(IA) Agêntico para elaboração de sentenças

---

## O Pipeline Jurídico Completo

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                        PIPELINE JURÍDICO AGÊNTICO                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐            │
│  │ BAIXAR  │──►│CONVERTER│──►│ RELATAR │──►│ EXTRAIR │──►│ANALISAR │            │
│  │  (PJE)  │   │(PDF→TXT)│   │         │   │  DADOS  │   │         │            │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘            │
│       │             │             │             │             │                  │
│    Fase 1       Fase 1        Fase 2        Fase 2        Fase 3                │
│                                                               │                  │
│                                                               ▼                  │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐            │
│  │ REVISAR │◄──│ MINUTAR │◄──│CHECKPOINT│◄──│PESQUISAR│◄──┤CLASSIFICAR          │
│  │         │   │         │   │DECISÓRIO │   │         │   │(TRIVIAL/ │          │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘   │HARD CASE)│          │
│       │             │             │             │         └─────────┘            │
│    Fase 6       Fase 5        GATE 4        Fase 3        Fase 3                │
│       │                                                                          │
│       ▼                                                                          │
│  ┌─────────┐                                                                     │
│  │SENTENÇA │                                                                     │
│  │ FINAL   │                                                                     │
│  └─────────┘                                                                     │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Workflow vs Agent no Contexto Jurídico

### 1.1 Onde Usar WORKFLOW (Determinístico)

**Processos BPC padrão (casos triviais):**

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  WORKFLOW: SENTENÇA BPC TRIVIAL                                                  │
│  (Fluxo 100% determinístico - sem decisões do agente)                            │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌───────────────┐                                                               │
│  │ Processo BPC  │                                                               │
│  │ (entrada)     │                                                               │
│  └───────┬───────┘                                                               │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ ETAPA 1: Verificar requisitos (checklist fixo)                    │           │
│  │ ├─ [ ] Idade ≥ 65 anos OU deficiência                             │           │
│  │ ├─ [ ] Renda familiar ≤ 1/4 salário mínimo                        │           │
│  │ ├─ [ ] Nacionalidade brasileira ou residência legal               │           │
│  │ └─ [ ] Não recebe outro benefício                                 │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ ETAPA 2: Aplicar precedente vinculante                            │           │
│  │ └─ Tema 1066 STF (renda per capita flexibilizada)                 │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ ETAPA 3: Gerar dispositivo (template)                             │           │
│  │ └─ "JULGO PROCEDENTE o pedido para condenar o INSS..."            │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────┐                                                               │
│  │ Sentença      │                                                               │
│  │ padronizada   │                                                               │
│  └───────────────┘                                                               │
│                                                                                  │
│  CARACTERÍSTICAS:                                                                │
│  ✓ Cada etapa tem prompt FIXO                                                    │
│  ✓ Fluxo SEMPRE igual                                                            │
│  ✓ Auditável (sabe exatamente o que aconteceu)                                   │
│  ✓ Barato (tokens previsíveis)                                                   │
│  ✓ Ideal para: 80% dos processos repetitivos                                     │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Onde Usar AGENT (Autônomo)

**Hard cases (questões de fato ou direito não triviais):**

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  AGENT: ANÁLISE DE HARD CASE                                                     │
│  (Agente decide próximos passos)                                                 │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌───────────────┐                                                               │
│  │ Processo com  │                                                               │
│  │ questão nova  │                                                               │
│  └───────┬───────┘                                                               │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ AGENTE DECIDE:                                                    │           │
│  │ "Preciso de mais informações sobre a deficiência alegada"         │           │
│  │                                                                   │           │
│  │ Opções disponíveis:                                               │           │
│  │ ├─ Tool: Pesquisar jurisprudência sobre deficiência intelectual   │           │
│  │ ├─ Tool: Buscar laudos médicos nos autos                          │           │
│  │ ├─ Tool: Verificar se há perícia judicial                         │           │
│  │ └─ Tool: Escalar para humano (juiz)                               │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ AGENTE EXECUTA: pesquisar_jurisprudencia("deficiência leve BPC")  │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ AGENTE AVALIA resultado e DECIDE:                                 │           │
│  │ "Encontrei precedente divergente. Preciso verificar se há         │           │
│  │  orientação do TRF5 específica."                                  │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ AGENTE EXECUTA: buscar_julia("deficiência leve BPC impedimento")  │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│          │                                                                       │
│          ▼                                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ AGENTE DECIDE: "Questão requer análise humana"                    │           │
│  │ → Escala para juiz com relatório das pesquisas                    │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│                                                                                  │
│  CARACTERÍSTICAS:                                                                │
│  ✓ Agente ESCOLHE qual tool usar                                                 │
│  ✓ Fluxo ADAPTA ao que encontra                                                  │
│  ✓ Pode explorar caminhos não previstos                                          │
│  ✓ Mais caro (tokens imprevisíveis)                                              │
│  ✓ Ideal para: 20% dos hard cases                                                │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 O Híbrido: Workflow com Bolsões Agênticos

**O padrão real do CLERK:**

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  HÍBRIDO: WORKFLOW JURÍDICO COM BOLSÕES AGÊNTICOS                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 1: PREPARAÇÃO (WORKFLOW - determinístico)                              │ │
│  │ ┌─────────┐    ┌─────────┐    ┌─────────┐                                   │ │
│  │ │ Baixar  │───►│ OCR se  │───►│ Salvar  │                                   │ │
│  │ │   PJE   │    │ preciso │    │  .txt   │                                   │ │
│  │ └─────────┘    └─────────┘    └─────────┘                                   │ │
│  │ (sempre igual, sem decisões)                                                │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 2: RELATÓRIO (WORKFLOW - determinístico)                               │ │
│  │ ┌─────────┐    ┌─────────┐    ┌─────────┐                                   │ │
│  │ │ Ler TXT │───►│ Extrair │───►│ Gerar   │                                   │ │
│  │ │         │    │ seções  │    │relatorio│                                   │ │
│  │ └─────────┘    └─────────┘    └─────────┘                                   │ │
│  │ (metodologia fixa de refinamento iterativo)                                 │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 3: PESQUISA (BOLSÃO AGÊNTICO)                                          │ │
│  │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│  │ │                      AGENTE DECIDE:                                     │ │ │
│  │ │                                                                         │ │ │
│  │ │  "Qual base pesquisar primeiro?"                                        │ │ │
│  │ │  ├─ Se tema vinculante óbvio → BNP direto                               │ │ │
│  │ │  ├─ Se precisa jurisprudência geral → CJF                               │ │ │
│  │ │  └─ Se específico TRF5 → JULIA                                          │ │ │
│  │ │                                                                         │ │ │
│  │ │  "Quantas buscas fazer?"                                                │ │ │
│  │ │  ├─ Se encontrou tema vinculante → PARAR                                │ │ │
│  │ │  └─ Se não encontrou → expandir busca                                   │ │ │
│  │ │                                                                         │ │ │
│  │ │  "Resultado é suficiente?"                                              │ │ │
│  │ │  ├─ Sim → Gerar relatório orientador                                    │ │ │
│  │ │  └─ Não → Mais uma rodada                                               │ │ │
│  │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│  │ (3-10 passos, agente adapta conforme encontra)                              │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ GATE: CHECKPOINT DECISÓRIO (HUMANO)                                         │ │
│  │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│  │ │  Juiz revisa:                                                           │ │ │
│  │ │  ├─ Relatório está correto?                                             │ │ │
│  │ │  ├─ Pesquisa é suficiente?                                              │ │ │
│  │ │  ├─ Qual orientação dar? (procedente/improcedente/parcial)              │ │ │
│  │ │  └─ É caso trivial ou hard case?                                        │ │ │
│  │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 4-5: ELABORAÇÃO (WORKFLOW - determinístico)                            │ │
│  │ ┌─────────┐    ┌─────────┐    ┌─────────┐                                   │ │
│  │ │Fundamentar───►│Dispositivo──►│  Merge  │                                   │ │
│  │ │(template)│    │(template)│    │sentença │                                   │ │
│  │ └─────────┘    └─────────┘    └─────────┘                                   │ │
│  │ (prompts fixos com orientação do juiz)                                      │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 6: REVISÃO (PARALELO - Fan-out/Fan-in)                                 │ │
│  │ Ver seção de Paralelização abaixo                                           │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Padrões de Orquestração no Direito

### 2.1 Rule-Based Routing: Classificação de Processos

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ROUTER BASEADO EM REGRAS: TRIAGEM DE PROCESSOS                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Processo Novo                                                                   │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │  CLASSIFICADOR (regras predefinidas)                              │           │
│  │                                                                   │           │
│  │  if "BPC" in assunto AND idade >= 65:                             │           │
│  │      → Pipeline BPC Idoso                                         │           │
│  │                                                                   │           │
│  │  if "BPC" in assunto AND "deficiência" in petição:                │           │
│  │      → Pipeline BPC Deficiente                                    │           │
│  │                                                                   │           │
│  │  if "auxílio-doença" in assunto:                                  │           │
│  │      → Pipeline Auxílio-Doença                                    │           │
│  │                                                                   │           │
│  │  if "aposentadoria" in assunto AND "especial" in petição:         │           │
│  │      → Pipeline Aposentadoria Especial                            │           │
│  │                                                                   │           │
│  │  else:                                                            │           │
│  │      → Fila de Análise Manual (hard case)                         │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ├──────────────┬──────────────┬──────────────┐                             │
│       ▼              ▼              ▼              ▼                             │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐                           │
│  │Pipeline │   │Pipeline │   │Pipeline │   │  Fila   │                           │
│  │BPC Idoso│   │BPC Def. │   │Aux-Doença│  │ Manual  │                           │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘                           │
│                                                                                  │
│  VANTAGENS:                                                                      │
│  ✓ Rápido (sem chamada LLM para classificar)                                     │
│  ✓ Previsível (mesma entrada = mesma rota)                                       │
│  ✓ Auditável (regras explícitas)                                                 │
│                                                                                  │
│  DESVANTAGENS:                                                                   │
│  ✗ Rígido (casos novos vão para manual)                                          │
│  ✗ Manutenção (precisa atualizar regras)                                         │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 LLM-Decided Routing: Classificação Inteligente

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ROUTER LLM: CLASSIFICAÇÃO TRIVIAL vs HARD CASE                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Relatório do Processo                                                           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │  LLM CLASSIFICADOR                                                │           │
│  │                                                                   │           │
│  │  System Prompt:                                                   │           │
│  │  "Você é um classificador de processos previdenciários.           │           │
│  │   Analise o relatório e classifique como:                         │           │
│  │                                                                   │           │
│  │   TRIVIAL se:                                                     │           │
│  │   - Questão de fato está clara (provas suficientes)               │           │
│  │   - Questão de direito tem precedente vinculante aplicável        │           │
│  │   - Não há controvérsia sobre os requisitos                       │           │
│  │                                                                   │           │
│  │   HARD_CASE se:                                                   │           │
│  │   - Questão de fato é controversa (provas conflitantes)           │           │
│  │   - Questão de direito não tem precedente claro                   │           │
│  │   - Há peculiaridades que exigem análise humana                   │           │
│  │                                                                   │           │
│  │   Retorne JSON: {classe: 'TRIVIAL'|'HARD_CASE', motivo: '...'}"   │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ├────────────────────────┬────────────────────────┐                        │
│       ▼                        ▼                        │                        │
│  ┌─────────────────┐    ┌─────────────────┐             │                        │
│  │    TRIVIAL      │    │   HARD_CASE     │             │                        │
│  │                 │    │                 │             │                        │
│  │ → Modo RESTRITO │    │ → Modo IRRESTRITO            │                        │
│  │ (automático com │    │ (com red flags) │             │                        │
│  │  checkpoint)    │    │ OU              │             │                        │
│  │                 │    │ → Escalar para  │             │                        │
│  │                 │    │   juiz          │             │                        │
│  └─────────────────┘    └─────────────────┘             │                        │
│                                                         │                        │
│  VANTAGENS:                                             │                        │
│  ✓ Flexível (adapta a casos novos)                      │                        │
│  ✓ Nuançado (entende contexto)                          │                        │
│                                                         │                        │
│  DESVANTAGENS:                                          │                        │
│  ✗ Custo extra (uma chamada LLM)                        │                        │
│  ✗ Menos previsível                                     │                        │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Supervised Routing: Checkpoint Decisório

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ROUTER SUPERVISIONADO: O CHECKPOINT DECISÓRIO                                   │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Após Fase 3 (Pesquisa):                                                         │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │  SISTEMA APRESENTA AO JUIZ:                                       │           │
│  │                                                                   │           │
│  │  ┌─────────────────────────────────────────────────────────────┐  │           │
│  │  │ RELATÓRIO DO PROCESSO                                       │  │           │
│  │  │ ├─ Autor: João da Silva, 67 anos                            │  │           │
│  │  │ ├─ Pedido: BPC/LOAS                                         │  │           │
│  │  │ ├─ Renda declarada: R$ 200/mês per capita                   │  │           │
│  │  │ └─ Provas: CNIS, declaração de composição familiar          │  │           │
│  │  └─────────────────────────────────────────────────────────────┘  │           │
│  │                                                                   │           │
│  │  ┌─────────────────────────────────────────────────────────────┐  │           │
│  │  │ ANÁLISE ORIENTADORA                                         │  │           │
│  │  │ ├─ Classificação: TRIVIAL                                   │  │           │
│  │  │ ├─ Tema aplicável: 1066 STF                                 │  │           │
│  │  │ ├─ Sugestão: PROCEDÊNCIA                                    │  │           │
│  │  │ └─ Confiança: 95%                                           │  │           │
│  │  └─────────────────────────────────────────────────────────────┘  │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │  DECISÃO DO JUIZ (obrigatória):                                   │           │
│  │                                                                   │           │
│  │  ┌─────────────────────────────────────────────────────────────┐  │           │
│  │  │ ○ APROVAR sugestão (procedência)                            │  │           │
│  │  │ ○ MODIFICAR orientação (improcedência/parcial)              │  │           │
│  │  │ ○ ESCALAR para análise manual (hard case)                   │  │           │
│  │  │ ○ SOLICITAR mais pesquisa                                   │  │           │
│  │  └─────────────────────────────────────────────────────────────┘  │           │
│  │                                                                   │           │
│  │  Observações do juiz: ________________________________            │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ├──────────────────┬──────────────────┬──────────────────┐                 │
│       ▼                  ▼                  ▼                  ▼                 │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐              │
│  │Minutar   │      │Minutar   │      │ Análise  │      │ Voltar   │              │
│  │Procedente│      │Improcedente     │  Manual  │      │Pesquisa  │              │
│  └──────────┘      └──────────┘      └──────────┘      └──────────┘              │
│                                                                                  │
│  PRINCÍPIO:                                                                      │
│  "A IA sugere, o JUIZ decide. Nunca o contrário."                                │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Pipelines no Contexto Jurídico

### 3.1 Pipeline Linear: Relatório Processual

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  PIPELINE: GERAÇÃO DE RELATÓRIO (Metodologia Refinamento Iterativo)              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ENTRADA: processo.txt (50-200 páginas convertidas)                          │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 1: Extração Estrutural                                                │ │
│  │                                                                             │ │
│  │ Prompt fixo:                                                                │ │
│  │ "Identifique e extraia as seguintes seções do processo:                     │ │
│  │  - Petição inicial (autor, pedidos, causa de pedir)                         │ │
│  │  - Contestação (teses defensivas)                                           │ │
│  │  - Provas documentais (lista)                                               │ │
│  │  - Laudo pericial (se houver)                                               │ │
│  │  - Manifestações das partes"                                                │ │
│  │                                                                             │ │
│  │ Output: estrutura.json                                                      │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 2: Síntese por Seção                                                  │ │
│  │                                                                             │ │
│  │ Prompt fixo (para cada seção):                                              │ │
│  │ "Resuma esta seção em no máximo 500 palavras, preservando:                  │ │
│  │  - Datas relevantes                                                         │ │
│  │  - Valores mencionados                                                      │ │
│  │  - Argumentos jurídicos principais                                          │ │
│  │  - Conclusões periciais (se aplicável)"                                     │ │
│  │                                                                             │ │
│  │ Output: secoes_resumidas.json                                               │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 3: Composição do Relatório                                            │ │
│  │                                                                             │ │
│  │ Prompt fixo:                                                                │ │
│  │ "Componha um relatório judicial estruturado com:                            │ │
│  │  1. PARTES (qualificação)                                                   │ │
│  │  2. PEDIDOS (numerados)                                                     │ │
│  │  3. CAUSA DE PEDIR (resumo)                                                 │ │
│  │  4. CONTESTAÇÃO (resumo)                                                    │ │
│  │  5. PROVAS PRODUZIDAS (lista comentada)                                     │ │
│  │  6. É O RELATÓRIO. DECIDO."                                                 │ │
│  │                                                                             │ │
│  │ Output: relatorio.md                                                        │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 4: Validação                                                          │ │
│  │                                                                             │ │
│  │ Prompt fixo:                                                                │ │
│  │ "Verifique se o relatório contém:                                           │ │
│  │  [ ] Todos os pedidos da inicial                                            │ │
│  │  [ ] Todas as teses da contestação                                          │ │
│  │  [ ] Conclusão do laudo pericial                                            │ │
│  │  [ ] Datas corretas                                                         │ │
│  │  [ ] Valores corretos                                                       │ │
│  │                                                                             │ │
│  │  Se faltar algo, indique o que."                                            │ │
│  │                                                                             │ │
│  │ Output: validacao.json {completo: true/false, pendencias: [...]}            │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ SAÍDA: relatorio.md (validado)                                              │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Pipeline RPI: Research-Plan-Implement Jurídico

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  PIPELINE RPI: ELABORAÇÃO DE SENTENÇA                                            │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ RESEARCH (Pesquisa)                                                         │ │
│  │                                                                             │ │
│  │ Entradas:                                                                   │ │
│  │ ├─ relatorio.md (do processo)                                               │ │
│  │ ├─ orientacao_juiz: "procedente"                                            │ │
│  │ └─ tipo_acao: "BPC"                                                         │ │
│  │                                                                             │ │
│  │ Ações:                                                                      │ │
│  │ ├─ Pesquisar BNP: temas vinculantes sobre BPC                               │ │
│  │ ├─ Pesquisar CJF: jurisprudência recente                                    │ │
│  │ └─ Identificar: legislação aplicável                                        │ │
│  │                                                                             │ │
│  │ Saída: analise-orientadora.md                                               │ │
│  │ ├─ Temas vinculantes aplicáveis                                             │ │
│  │ ├─ Jurisprudência relevante                                                 │ │
│  │ └─ Legislação a citar                                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                    [CHECKPOINT HUMANO]                                           │
│            "A pesquisa está correta e suficiente?"                               │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ PLAN (Planejamento da Fundamentação)                                        │ │
│  │                                                                             │ │
│  │ Entradas:                                                                   │ │
│  │ ├─ relatorio.md                                                             │ │
│  │ ├─ analise-orientadora.md                                                   │ │
│  │ └─ orientacao_juiz                                                          │ │
│  │                                                                             │ │
│  │ Ações:                                                                      │ │
│  │ ├─ Definir estrutura argumentativa                                          │ │
│  │ │   1. Questão prejudicial (se houver)                                      │ │
│  │ │   2. Mérito - requisito 1                                                 │ │
│  │ │   3. Mérito - requisito 2                                                 │ │
│  │ │   4. Conclusão                                                            │ │
│  │ ├─ Mapear: qual prova fundamenta qual conclusão                             │ │
│  │ └─ Mapear: qual precedente sustenta qual tese                               │ │
│  │                                                                             │ │
│  │ Saída: plano-fundamentacao.md                                               │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                    [CHECKPOINT HUMANO - opcional]                                │
│               "O plano de fundamentação está adequado?"                          │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ IMPLEMENT (Redação)                                                         │ │
│  │                                                                             │ │
│  │ Entradas:                                                                   │ │
│  │ ├─ plano-fundamentacao.md                                                   │ │
│  │ ├─ analise-orientadora.md                                                   │ │
│  │ └─ relatorio.md                                                             │ │
│  │                                                                             │ │
│  │ Ações:                                                                      │ │
│  │ ├─ Redigir fundamentação (seguindo plano)                                   │ │
│  │ ├─ Inserir citações (precedentes, leis)                                     │ │
│  │ └─ Redigir dispositivo                                                      │ │
│  │                                                                             │ │
│  │ Saída: minuta.md                                                            │ │
│  │ ├─ FUNDAMENTAÇÃO                                                            │ │
│  │ └─ DISPOSITIVO                                                              │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ VERIFY (Validação)                                                          │ │
│  │ → Ver seção de Gates abaixo                                                 │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Paralelização no Direito

### 4.1 Fan-Out: Revisão Paralela da Sentença

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  FAN-OUT: REVISÃO PARALELA COM 3 SUBAGENTES                                      │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ENTRADA: minuta.md (sentença a revisar)                                     │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│            ┌──────────────┼──────────────┐                                       │
│            │              │              │                                       │
│            ▼              ▼              ▼                                       │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │ SUBAGENTE 1     │ │ SUBAGENTE 2     │ │ SUBAGENTE 3     │                     │
│  │ Advogado Diabo  │ │ Consistência    │ │ Consistência    │                     │
│  │                 │ │ Interna         │ │ Externa         │                     │
│  │ Contexto:       │ │ Contexto:       │ │ Contexto:       │                     │
│  │ - minuta.md     │ │ - minuta.md     │ │ - minuta.md     │                     │
│  │ - prompt crítico│ │ - relatorio.md  │ │ - WebSearch     │                     │
│  │                 │ │ - autos         │ │                 │                     │
│  │ Tarefa:         │ │ Tarefa:         │ │ Tarefa:         │                     │
│  │ Buscar vícios:  │ │ Verificar:      │ │ Verificar:      │                     │
│  │ - Omissão      │ │ - Pedidos       │ │ - Precedentes   │                     │
│  │ - Contradição  │ │   respondidos?  │ │   citados       │                     │
│  │ - Obscuridade  │ │ - Provas        │ │   existem?      │                     │
│  │ - Citra/ultra  │ │   analisadas?   │ │ - Súmulas       │                     │
│  │   petita       │ │ - Argumentos    │ │   corretas?     │                     │
│  │                │ │   enfrentados?  │ │ - Leis          │                     │
│  │                 │ │                 │ │   vigentes?     │                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           ▼                   ▼                   ▼                              │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │ analise-adv-    │ │ analise-consist-│ │ analise-consist-│                     │
│  │ diabo.md        │ │ interna.md      │ │ externa.md      │                     │
│  │                 │ │                 │ │                 │                     │
│  │ Vícios:         │ │ Inconsistências:│ │ Erros:          │                     │
│  │ - Argumento X   │ │ - Pedido 3 não  │ │ - Súmula 123    │                     │
│  │   não enfrentado│ │   respondido    │ │   não existe    │                     │
│  │ - Contradição   │ │ - Prova Y não   │ │ - Tema 456      │                     │
│  │   no §5         │ │   mencionada    │ │   superado      │                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           └───────────────────┼───────────────────┘                              │
│                               │                                                  │
│                               ▼                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FAN-IN: CONSOLIDADOR                                                        │ │
│  │                                                                             │ │
│  │ Entradas:                                                                   │ │
│  │ ├─ analise-adv-diabo.md                                                     │ │
│  │ ├─ analise-consist-interna.md                                               │ │
│  │ └─ analise-consist-externa.md                                               │ │
│  │                                                                             │ │
│  │ Tarefa:                                                                     │ │
│  │ ├─ Consolidar todas as críticas                                             │ │
│  │ ├─ Priorizar por gravidade                                                  │ │
│  │ ├─ Gerar minuta corrigida (se necessário)                                   │ │
│  │ └─ Ou aprovar minuta original (se sem erros graves)                         │ │
│  │                                                                             │ │
│  │ Saída: consolidacao.md + minuta-robustecida.md (se houver correções)        │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
│  BENEFÍCIOS:                                                                     │
│  ✓ Velocidade: 3 análises simultâneas (~30s vs ~90s sequencial)                  │
│  ✓ Isolamento: cada subagente tem contexto limpo                                 │
│  ✓ Especialização: cada um foca em um tipo de erro                               │
│  ✓ Resiliência: se um falhar, os outros continuam                                │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Fan-Out: Pesquisa Multi-Base

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  FAN-OUT: PESQUISA PARALELA EM MÚLTIPLAS BASES                                   │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ENTRADA: query = "BPC deficiência intelectual leve"                         │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│            ┌──────────────┼──────────────┐                                       │
│            │              │              │                                       │
│            ▼              ▼              ▼                                       │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │ SUBAGENTE BNP   │ │ SUBAGENTE CJF   │ │ SUBAGENTE JULIA │                     │
│  │                 │ │                 │ │                 │                     │
│  │ Query adaptada: │ │ Query adaptada: │ │ Query adaptada: │                     │
│  │ +BPC +deficiência│ │ BPC E deficiência│ │ bpc e deficiência│                    │
│  │ +intelectual    │ │ E intelectual   │ │ e intelectual   │                     │
│  │                 │ │ [EMEN]          │ │                 │                     │
│  │ Foco:           │ │ Foco:           │ │ Foco:           │                     │
│  │ Temas STF/STJ   │ │ STJ + TRFs      │ │ TRF5 específico │                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           ▼                   ▼                   ▼                              │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │ bnp-results.md  │ │ cjf-results.md  │ │ julia-results.md│                     │
│  │                 │ │                 │ │                 │                     │
│  │ Tema 1066       │ │ 15 acórdãos STJ │ │ 8 acórdãos TRF5 │                     │
│  │ Súmula 48 TNU   │ │ 23 acórdãos TRFs│ │ Tendência: 2ª   │                     │
│  │                 │ │                 │ │ Turma favorável │                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           └───────────────────┼───────────────────┘                              │
│                               │                                                  │
│                               ▼                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FAN-IN: CONSOLIDADOR DE PESQUISA                                            │ │
│  │                                                                             │ │
│  │ Tarefa:                                                                     │ │
│  │ ├─ Identificar tema vinculante (se houver)                                  │ │
│  │ ├─ Consolidar jurisprudência relevante                                      │ │
│  │ ├─ Identificar divergências entre tribunais                                 │ │
│  │ └─ Gerar relatório orientador                                               │ │
│  │                                                                             │ │
│  │ Saída: analise-orientadora.md                                               │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
│  ECONOMIA:                                                                       │
│  - Sequencial: BNP (10s) + CJF (15s) + JULIA (10s) = 35s                         │
│  - Paralelo: max(10s, 15s, 10s) = 15s                                            │
│  - Ganho: ~57% mais rápido                                                       │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Processamento em Lote de Processos

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  FAN-OUT: PROCESSAMENTO EM LOTE (Exemplo: 20 processos BPC)                      │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ENTRADA: 20 processos de BPC na fila                                        │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ DECOMPOSIÇÃO: Identificar processos independentes                           │ │
│  │                                                                             │ │
│  │ Critério: Processos sem conexão entre si podem rodar em paralelo            │ │
│  │                                                                             │ │
│  │ Resultado: 20 processos independentes                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│            ┌──────────────┼──────────────┬──────────────┐                        │
│            │              │              │              │                        │
│            ▼              ▼              ▼              ▼                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                 │
│  │ WORKER 1    │ │ WORKER 2    │ │ WORKER 3    │ │ WORKER 4    │                 │
│  │             │ │             │ │             │ │             │                 │
│  │ Processo 1  │ │ Processo 2  │ │ Processo 3  │ │ Processo 4  │                 │
│  │ Processo 5  │ │ Processo 6  │ │ Processo 7  │ │ Processo 8  │                 │
│  │ Processo 9  │ │ Processo 10 │ │ Processo 11 │ │ Processo 12 │                 │
│  │ Processo 13 │ │ Processo 14 │ │ Processo 15 │ │ Processo 16 │                 │
│  │ Processo 17 │ │ Processo 18 │ │ Processo 19 │ │ Processo 20 │                 │
│  │             │ │             │ │             │ │             │                 │
│  │ Pipeline:   │ │ Pipeline:   │ │ Pipeline:   │ │ Pipeline:   │                 │
│  │ Relatar →   │ │ Relatar →   │ │ Relatar →   │ │ Relatar →   │                 │
│  │ Pesquisar → │ │ Pesquisar → │ │ Pesquisar → │ │ Pesquisar → │                 │
│  │ Minutar     │ │ Minutar     │ │ Minutar     │ │ Minutar     │                 │
│  └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘                 │
│         │               │               │               │                        │
│         └───────────────┴───────────────┴───────────────┘                        │
│                                   │                                              │
│                                   ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FAN-IN: FILA DE REVISÃO HUMANA                                              │ │
│  │                                                                             │ │
│  │ Minutas prontas para checkpoint decisório:                                  │ │
│  │ ├─ processo-001/minuta.md ✓                                                 │ │
│  │ ├─ processo-002/minuta.md ✓                                                 │ │
│  │ ├─ processo-003/minuta.md (hard case - escalar)                             │ │
│  │ ├─ processo-004/minuta.md ✓                                                 │ │
│  │ └─ ... (juiz revisa conforme capacidade)                                    │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
│  NÚMEROS REAIS:                                                                  │
│  - Sequencial: 20 processos × 30min = 10 horas                                   │
│  - Paralelo (4 workers): 20 ÷ 4 × 30min = 2.5 horas                              │
│  - Ganho: 75% mais rápido                                                        │
│                                                                                  │
│  REGRA DOS 90%:                                                                  │
│  - Se 2 processos falharem (hard cases): 18 prontos automaticamente              │
│  - Juiz resolve os 2 manualmente                                                 │
│  - Ainda assim: produtividade muito superior ao manual                           │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Gerenciamento de Contexto no Direito

### 5.1 O Problema: Processos Grandes

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  PROBLEMA: PROCESSO DE 500 PÁGINAS                                               │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Cenário: Ação previdenciária com histórico longo                                │
│  - Petição inicial: 30 páginas                                                   │
│  - Contestação: 20 páginas                                                       │
│  - Laudos médicos: 50 páginas                                                    │
│  - CNIS/CNIS: 100 páginas                                                        │
│  - Perícia judicial: 80 páginas                                                  │
│  - Manifestações: 120 páginas                                                    │
│  - Recursos/decisões: 100 páginas                                                │
│  - TOTAL: ~500 páginas = ~250K tokens                                            │
│                                                                                  │
│  PROBLEMA:                                                                       │
│  - Context window: 200K tokens                                                   │
│  - Processo: 250K tokens                                                         │
│  - NÃO CABE!                                                                     │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Solução 1: Pipeline de Refinamento

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  SOLUÇÃO: REFINAMENTO ITERATIVO                                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 1: Triagem (ler documento inteiro)                                    │ │
│  │                                                                             │ │
│  │ Prompt: "Liste os documentos deste processo com:                            │ │
│  │         - Tipo (petição, laudo, decisão...)                                 │ │
│  │         - Páginas                                                           │ │
│  │         - Relevância (ALTA/MÉDIA/BAIXA)"                                    │ │
│  │                                                                             │ │
│  │ Output: indice.json                                                         │ │
│  │ - Petição inicial: p.1-30 (ALTA)                                            │ │
│  │ - Contestação: p.31-50 (ALTA)                                               │ │
│  │ - CNIS histórico: p.51-150 (MÉDIA) ← resumir                                │ │
│  │ - Perícia: p.151-230 (ALTA)                                                 │ │
│  │ - Manifestações repetitivas: p.231-350 (BAIXA) ← descartar                  │ │
│  │ - Decisões anteriores: p.351-450 (MÉDIA) ← resumir                          │ │
│  │ - Sentença embargada: p.451-500 (ALTA)                                      │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ ETAPA 2: Processamento Seletivo                                             │ │
│  │                                                                             │ │
│  │ ALTA RELEVÂNCIA: Ler integral                                               │ │
│  │ ├─ Petição inicial (30 páginas)                                             │ │
│  │ ├─ Contestação (20 páginas)                                                 │ │
│  │ ├─ Perícia (80 páginas)                                                     │ │
│  │ └─ Sentença embargada (50 páginas)                                          │ │
│  │ Subtotal: 180 páginas = ~90K tokens ✓                                       │ │
│  │                                                                             │ │
│  │ MÉDIA RELEVÂNCIA: Resumir                                                   │ │
│  │ ├─ CNIS (100 páginas → resumo 2 páginas)                                    │ │
│  │ └─ Decisões anteriores (100 páginas → resumo 5 páginas)                     │ │
│  │ Subtotal: 7 páginas = ~3.5K tokens ✓                                        │ │
│  │                                                                             │ │
│  │ BAIXA RELEVÂNCIA: Descartar                                                 │ │
│  │ └─ Manifestações repetitivas (120 páginas → 0)                              │ │
│  │                                                                             │ │
│  │ TOTAL FINAL: ~95K tokens (cabe no contexto!)                                │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Solução 2: Subagentes Especializados

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  SOLUÇÃO: SUBAGENTES COM CONTEXTO ISOLADO                                        │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ COORDENADOR (contexto limpo)                                                │ │
│  │ Context: 30K tokens (só o necessário)                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│        ┌──────────────────┼──────────────────┐                                   │
│        │                  │                  │                                   │
│        ▼                  ▼                  ▼                                   │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐                           │
│  │ SUBAGENTE 1   │ │ SUBAGENTE 2   │ │ SUBAGENTE 3   │                           │
│  │ Analista de   │ │ Analista de   │ │ Analista de   │                           │
│  │ Petição       │ │ Perícia       │ │ Jurisprudência│                           │
│  │               │ │               │ │               │                           │
│  │ Contexto:     │ │ Contexto:     │ │ Contexto:     │                           │
│  │ - Petição     │ │ - Laudo       │ │ - Relatório   │                           │
│  │   (30 pág)    │ │   pericial    │ │   resumido    │                           │
│  │ - Contestação │ │   (80 pág)    │ │ - MCPs        │                           │
│  │   (20 pág)    │ │               │ │               │                           │
│  │               │ │               │ │               │                           │
│  │ Output:       │ │ Output:       │ │ Output:       │                           │
│  │ resumo-       │ │ resumo-       │ │ precedentes-  │                           │
│  │ peticao.md    │ │ pericia.md    │ │ aplicaveis.md │                           │
│  │ (2 páginas)   │ │ (3 páginas)   │ │ (2 páginas)   │                           │
│  └───────┬───────┘ └───────┬───────┘ └───────┬───────┘                           │
│          │                 │                 │                                   │
│          └─────────────────┼─────────────────┘                                   │
│                            │                                                     │
│                            ▼                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ COORDENADOR recebe resumos (7 páginas = ~3.5K tokens)                       │ │
│  │                                                                             │ │
│  │ Context final:                                                              │ │
│  │ ├─ resumo-peticao.md (2 pág)                                                │ │
│  │ ├─ resumo-pericia.md (3 pág)                                                │ │
│  │ ├─ precedentes-aplicaveis.md (2 pág)                                        │ │
│  │ └─ instruções do juiz                                                       │ │
│  │                                                                             │ │
│  │ Total: ~5K tokens (contexto MUITO limpo!)                                   │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
│  BENEFÍCIO:                                                                      │
│  - Processo de 500 páginas (250K tokens)                                         │
│  - Coordenador trabalha com 5K tokens                                            │ │
│  - Qualidade MUITO melhor (contexto limpo)                                       │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Context Zones no Pipeline Jurídico

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  MONITORAMENTO DE CONTEXT ZONES                                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Durante elaboração de sentença:                                                 │
│                                                                                  │
│  0%────────────────40%────────────────80%────────────100%                        │
│  │                  │                  │               │                         │
│  │   SMART ZONE     │  DIMINISHING     │   DUMB ZONE   │                         │
│  │                  │   RETURNS        │               │                         │
│  │                  │                  │               │                         │
│  │  ┌─────────┐     │                  │               │                         │
│  │  │Relatório│     │                  │               │                         │
│  │  │ (10K)   │     │                  │               │                         │
│  │  └─────────┘     │                  │               │                         │
│  │  ┌─────────┐     │                  │               │                         │
│  │  │Pesquisa │     │                  │               │                         │
│  │  │ (15K)   │     │                  │               │                         │
│  │  └─────────┘     │                  │               │                         │
│  │  ┌─────────┐     │                  │               │                         │
│  │  │Histórico│     │                  │               │                         │
│  │  │ (10K)   │     │                  │               │                         │
│  │  └─────────┘     │                  │               │                         │
│  │                  │                  │               │                         │
│  │  TOTAL: 35K      │                  │               │                         │
│  │  (17.5%)         │                  │               │                         │
│  │  ✓ OK            │                  │               │                         │
│  │                  │                  │               │                         │
│  └──────────────────┴──────────────────┴───────────────┘                         │
│                                                                                  │
│  SE ATINGIR 40%:                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ GATE: CONTEXT COMPACTION                                                    │ │
│  │                                                                             │ │
│  │ /compact preservar: relatório, pesquisa, orientação do juiz                 │ │
│  │                                                                             │ │
│  │ Resultado:                                                                  │ │
│  │ - Histórico de conversa → resumido                                          │ │
│  │ - Tentativas anteriores → descartadas                                       │ │
│  │ - Contexto essencial → preservado                                           │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Gates e Guardrails no Direito

### 6.1 Gate 1: Validação de Entrada (Processo)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  GATE: INPUT VALIDATION - VALIDAÇÃO DO PROCESSO                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Processo baixado do PJE                                                         │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ VALIDAÇÕES AUTOMÁTICAS (hooks):                                   │           │
│  │                                                                   │           │
│  │ [ ] Arquivo existe e não está corrompido                          │           │
│  │ [ ] Tamanho > 0 bytes                                             │           │
│  │ [ ] Formato PDF válido                                            │           │
│  │ [ ] OCR necessário? (PDF escaneado vs digital)                    │           │
│  │ [ ] Conversão TXT bem-sucedida                                    │           │
│  │ [ ] TXT contém texto legível (não lixo)                           │           │
│  │                                                                   │           │
│  │ Se FALHA em qualquer validação:                                   │           │
│  │ → Rejeitar com mensagem clara                                     │           │
│  │ → "PDF corrompido" / "OCR falhou" / etc.                          │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ VALIDAÇÕES SEMÂNTICAS (LLM):                                      │           │
│  │                                                                   │           │
│  │ [ ] É um processo judicial? (não outro documento)                 │           │
│  │ [ ] Tem petição inicial identificável?                            │           │
│  │ [ ] É matéria previdenciária? (escopo do sistema)                 │           │
│  │ [ ] Está em fase de julgamento? (não em instrução)                │           │
│  │                                                                   │           │
│  │ Se FALHA em qualquer validação:                                   │           │
│  │ → Rejeitar com motivo                                             │           │
│  │ → "Processo em fase de instrução - aguardar perícia"              │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Gate 2: Validação do Relatório

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  GATE: RESEARCH VALIDATION - VALIDAÇÃO DO RELATÓRIO                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Relatório gerado                                                                │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ EVAL AUTOMÁTICO (LLM-as-judge):                                   │           │
│  │                                                                   │           │
│  │ Prompt: "Avalie se este relatório contém:                         │           │
│  │                                                                   │           │
│  │ OBRIGATÓRIOS:                                                     │           │
│  │ [ ] Qualificação das partes                                       │           │
│  │ [ ] Todos os pedidos da inicial                                   │           │
│  │ [ ] Resumo da causa de pedir                                      │           │
│  │ [ ] Teses da contestação                                          │           │
│  │ [ ] Conclusão da perícia (se houver)                              │           │
│  │                                                                   │           │
│  │ QUALIDADE:                                                        │           │
│  │ [ ] Datas estão no formato correto                                │           │
│  │ [ ] Valores monetários estão claros                               │           │
│  │ [ ] Não há contradições internas                                  │           │
│  │                                                                   │           │
│  │ Classifique: GOOD / ACCEPTABLE / NEEDS_REVIEW"                    │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ├───────────────────┬───────────────────┐                                  │
│       ▼                   ▼                   ▼                                  │
│  ┌─────────┐         ┌─────────┐         ┌─────────┐                             │
│  │  GOOD   │         │ACCEPTABLE        │NEEDS_    │                             │
│  │         │         │         │         │REVIEW   │                             │
│  │ → Pass  │         │ → Pass  │         │ → Fail  │                             │
│  │   gate  │         │ + warn  │         │ → retry │                             │
│  │         │         │         │         │ ou      │                             │
│  │         │         │         │         │ escalar │                             │
│  └─────────┘         └─────────┘         └─────────┘                             │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Gate 3: Checkpoint Decisório (o mais importante)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  GATE: PLAN APPROVAL - CHECKPOINT DECISÓRIO                                      │
│  (Ponto onde a decisão HUMANA é OBRIGATÓRIA)                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Após pesquisa e classificação:                                                  │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │ PAINEL APRESENTADO AO JUIZ:                                               │   │
│  │                                                                           │   │
│  │ ┌─────────────────────────────────────────────────────────────────────┐   │   │
│  │ │ PROCESSO: 0001234-56.2024.4.05.8100                                 │   │   │
│  │ │                                                                     │   │   │
│  │ │ RESUMO DO RELATÓRIO:                                                │   │   │
│  │ │ Autor pleiteia BPC/LOAS alegando deficiência. Idade: 45 anos.       │   │   │
│  │ │ Laudo pericial atesta incapacidade parcial e permanente.            │   │   │
│  │ │ Renda familiar declarada: R$ 300,00 per capita.                     │   │   │
│  │ │                                                                     │   │   │
│  │ │ ANÁLISE DO SISTEMA:                                                 │   │   │
│  │ │ ├─ Classificação: TRIVIAL (85% confiança)                           │   │   │
│  │ │ ├─ Tema aplicável: 1066 STF (renda flexibilizada)                   │   │   │
│  │ │ ├─ Jurisprudência: TRF5 favorável em casos similares                │   │   │
│  │ │ └─ Sugestão: PROCEDÊNCIA                                            │   │   │
│  │ │                                                                     │   │   │
│  │ │ RED FLAGS (se houver):                                              │   │   │
│  │ │ ⚠ Laudo não é conclusivo sobre impedimento de longo prazo           │   │   │
│  │ └─────────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                           │   │
│  │ ┌─────────────────────────────────────────────────────────────────────┐   │   │
│  │ │ DECISÃO DO JUIZ (obrigatória):                                      │   │   │
│  │ │                                                                     │   │   │
│  │ │ ○ APROVAR sugestão → Minutar PROCEDÊNCIA                            │   │   │
│  │ │                                                                     │   │   │
│  │ │ ○ MODIFICAR → Minutar: ○ Improcedência ○ Parcial procedência        │   │   │
│  │ │   Motivo: _______________________________________________            │   │   │
│  │ │                                                                     │   │   │
│  │ │ ○ HARD CASE → Não minutar, analisar manualmente                     │   │   │
│  │ │   Motivo: _______________________________________________            │   │   │
│  │ │                                                                     │   │   │
│  │ │ ○ MAIS PESQUISA → Buscar: _________________________________         │   │   │
│  │ └─────────────────────────────────────────────────────────────────────┘   │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│       │                                                                          │
│       │  PRINCÍPIOS:                                                             │
│       │  1. Sistema NUNCA minuta sem aprovação                                   │
│       │  2. Juiz SEMPRE vê análise antes de decidir                              │
│       │  3. Red flags são OBRIGATÓRIOS quando existem                            │
│       │  4. Decisão fica REGISTRADA para auditoria                               │
│       │                                                                          │
│       ▼                                                                          │
│  [Próxima fase conforme decisão do juiz]                                         │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Gate 4: Validação da Minuta (Hooks)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  GATE: AUTOMATED VALIDATION - VALIDAÇÃO DA MINUTA (Hooks)                        │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Minuta gerada                                                                   │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ HOOK 1: Validação de Formato                                      │           │
│  │                                                                   │           │
│  │ Verificar:                                                        │           │
│  │ [ ] Estrutura correta (FUNDAMENTAÇÃO + DISPOSITIVO)               │           │
│  │ [ ] Sem markdown incorreto (**, #, etc.)                          │           │
│  │ [ ] Acentuação correta (português)                                │           │
│  │ [ ] Tamanho adequado (não muito curto nem muito longo)            │           │
│  │                                                                   │           │
│  │ Se FALHA: Corrigir automaticamente e re-validar                   │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ HOOK 2: Anti-Alucinação                                           │           │
│  │                                                                   │           │
│  │ Verificar:                                                        │           │
│  │ [ ] Datas citadas existem no relatório                            │           │
│  │ [ ] Valores citados existem no relatório                          │           │
│  │ [ ] Nomes das partes estão corretos                               │           │
│  │ [ ] Número do processo está correto                               │           │
│  │                                                                   │           │
│  │ Se FALHA: Marcar como NEEDS_REVIEW, listar discrepâncias          │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ HOOK 3: Verificação de Citações (Consistência Externa)            │           │
│  │                                                                   │           │
│  │ Para cada citação de precedente:                                  │           │
│  │ [ ] Verificar via WebSearch se existe                             │           │
│  │ [ ] Verificar se está vigente                                     │           │
│  │ [ ] Verificar se a tese citada está correta                       │           │
│  │                                                                   │           │
│  │ Se FALHA: Listar citações problemáticas para revisão humana       │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│                                                                                  │
│  RESULTADO:                                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ ✓ PASS: Todos os hooks passaram → Prosseguir para revisão         │           │
│  │                                                                   │           │
│  │ ⚠ WARN: Hooks passaram com advertências → Prosseguir com alerta   │           │
│  │                                                                   │           │
│  │ ✗ FAIL: Hooks falharam → Retry ou escalar para humano             │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 6.5 Gate 5: QA Final (Revisão Paralela)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  GATE: QA CHECKPOINT - REVISÃO FINAL                                             │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Minuta após hooks                                                               │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ REVISÃO PARALELA (3 subagentes)                                   │           │
│  │ Ver seção de Paralelização acima                                  │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ▼                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ CONSOLIDAÇÃO:                                                     │           │
│  │                                                                   │           │
│  │ Críticas encontradas:                                             │           │
│  │ ├─ Advogado do Diabo: 2 pontos (1 grave, 1 leve)                  │           │
│  │ ├─ Consistência Interna: 1 ponto (médio)                          │           │
│  │ └─ Consistência Externa: 0 pontos                                 │           │
│  │                                                                   │           │
│  │ Avaliação global: ACCEPTABLE (precisa correções menores)          │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│       │                                                                          │
│       ├───────────────────┬───────────────────┐                                  │
│       ▼                   ▼                   ▼                                  │
│  ┌─────────┐         ┌─────────┐         ┌─────────┐                             │
│  │  GOOD   │         │ACCEPTABLE        │NEEDS_    │                             │
│  │(0 erros)│         │(erros    │         │REVIEW   │                             │
│  │         │         │ menores) │         │(erros   │                             │
│  │ → Usar  │         │ → Gerar  │         │ graves) │                             │
│  │ minuta  │         │ minuta   │         │         │                             │
│  │ original│         │ robustecida       │ → Escalar│                             │
│  │         │         │         │         │ p/ juiz │                             │
│  └─────────┘         └─────────┘         └─────────┘                             │
│                                                                                  │
│  SE NEEDS_REVIEW:                                                                │
│  ┌───────────────────────────────────────────────────────────────────┐           │
│  │ CHECKPOINT HUMANO ADICIONAL:                                      │           │
│  │                                                                   │           │
│  │ "Juiz, a revisão automatizada encontrou os seguintes problemas:   │           │
│  │                                                                   │           │
│  │ 1. [GRAVE] Argumento do réu sobre prescrição não foi enfrentado   │           │
│  │ 2. [MÉDIO] Pedido de danos morais não foi respondido              │           │
│  │                                                                   │           │
│  │ Opções:                                                           │           │
│  │ ○ Corrigir automaticamente (sistema tenta resolver)               │           │
│  │ ○ Eu corrijo manualmente (juiz edita)                             │           │
│  │ ○ Rejeitar minuta (começar de novo)"                              │           │
│  └───────────────────────────────────────────────────────────────────┘           │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Arquitetura Completa Integrada

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                    CLERK: ARQUITETURA COMPLETA                                   │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 1: PREPARAÇÃO (Workflow)                                               │ │
│  │ PJE → Download → OCR? → TXT                                                 │ │
│  │                  │                                                          │ │
│  │            [GATE 1: Input Validation]                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 2: RELATÓRIO (Pipeline Linear)                                         │ │
│  │ TXT → Triagem → Extração → Síntese → Relatório.md                           │ │
│  │                                        │                                    │ │
│  │                                  [GATE 2: Research Validation]              │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 3: ANÁLISE (Bolsão Agêntico + Fan-Out)                                 │ │
│  │                                                                             │ │
│  │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│  │ │ AGENTE PESQUISADOR (decide quantas buscas, em quais bases)             │ │ │
│  │ │      │                                                                  │ │ │
│  │ │      ├──────────┬──────────┬──────────┐ (Fan-Out)                       │ │ │
│  │ │      ▼          ▼          ▼          │                                 │ │ │
│  │ │   ┌─────┐   ┌─────┐   ┌─────┐         │                                 │ │ │
│  │ │   │ BNP │   │ CJF │   │JULIA│         │                                 │ │ │
│  │ │   └──┬──┘   └──┬──┘   └──┬──┘         │                                 │ │ │
│  │ │      └─────────┴─────────┘            │ (Fan-In)                        │ │ │
│  │ │               │                       │                                 │ │ │
│  │ │               ▼                       │                                 │ │ │
│  │ │      Análise Orientadora.md           │                                 │ │ │
│  │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│  │                          │                                                  │ │
│  │                    [GATE 3: CHECKPOINT DECISÓRIO] ← JUIZ OBRIGATÓRIO        │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│               ┌───────────┼───────────┐                                          │
│               ▼           ▼           ▼                                          │
│          PROCEDENTE  IMPROCEDENTE  HARD CASE                                     │
│               │           │           │                                          │
│               └───────────┴───────────┘                                          │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 4-5: ELABORAÇÃO (Pipeline RPI)                                         │ │
│  │                                                                             │ │
│  │ Research (já feito) → Plan (estrutura) → Implement (redigir)                │ │
│  │                                                │                            │ │
│  │                                          [GATE 4: Hooks]                    │ │
│  │                                          - Formato                          │ │
│  │                                          - Anti-alucinação                  │ │
│  │                                          - Citações                         │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FASE 6: REVISÃO (Fan-Out Paralelo)                                          │ │
│  │                                                                             │ │
│  │      ┌──────────────┬──────────────┬──────────────┐                         │ │
│  │      ▼              ▼              ▼              │                         │ │
│  │  Advogado      Consistência   Consistência       │                         │ │
│  │  do Diabo      Interna        Externa            │                         │ │
│  │      │              │              │              │                         │ │
│  │      └──────────────┴──────────────┘              │                         │ │
│  │                     │                             │                         │ │
│  │                     ▼                             │                         │ │
│  │              Consolidador                         │                         │ │
│  │                     │                             │                         │ │
│  │               [GATE 5: QA]                        │                         │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                           │                                                      │
│               ┌───────────┼───────────┐                                          │
│               ▼           ▼           ▼                                          │
│             GOOD     ACCEPTABLE   NEEDS_REVIEW                                   │
│               │           │           │                                          │
│               │    Minuta         Checkpoint                                     │
│               │    Robustecida    Humano                                         │
│               │           │           │                                          │
│               └───────────┴───────────┘                                          │
│                           │                                                      │
│                           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ SAÍDA: Sentença Final                                                       │ │
│  │                                                                             │ │
│  │ processo-XXX/                                                               │ │
│  │ ├── relatorio.md                                                            │ │
│  │ ├── pesquisa/                                                               │ │
│  │ │   ├── bnp-results.md                                                      │ │
│  │ │   ├── cjf-results.md                                                      │ │
│  │ │   └── analise-orientadora.md                                              │ │
│  │ ├── minuta.md                                                               │ │
│  │ ├── revisao/                                                                │ │
│  │ │   ├── adv-diabo.md                                                        │ │
│  │ │   ├── consist-interna.md                                                  │ │
│  │ │   └── consist-externa.md                                                  │ │
│  │ └── sentenca-final.md                                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Tabela Resumo: Conceito → Aplicação Jurídica

| Conceito | Aplicação no CLERK | Exemplo Concreto |
|----------|-------------------|------------------|
| **Workflow** | Fases determinísticas | Preparação, Relatório, Elaboração |
| **Agent** | Bolsões de decisão | Pesquisa (quantas buscas?) |
| **Híbrido** | Pipeline com bolsões | Workflow geral + agente de pesquisa |
| **Rule-based routing** | Triagem por tipo de ação | BPC → Pipeline BPC |
| **LLM routing** | Classificação TRIVIAL/HARD | Agente decide complexidade |
| **Supervised routing** | Checkpoint decisório | Juiz aprova orientação |
| **Pipeline linear** | Geração de relatório | TXT → Extração → Síntese → Relatório |
| **Pipeline RPI** | Elaboração de sentença | Research → Plan → Implement |
| **Fan-out** | Pesquisa multi-base | BNP + CJF + JULIA em paralelo |
| **Fan-in** | Consolidação | Merge de resultados de pesquisa |
| **Fan-out revisão** | Revisão paralela | 3 subagentes simultâneos |
| **Subagentes** | Isolamento de contexto | Analista de perícia isolado |
| **Context zones** | Processos grandes | Monitorar 40% threshold |
| **Compactação** | Sessões longas | /compact após elaboração |
| **Gate input** | Validação do processo | PDF válido? OCR ok? |
| **Gate research** | Validação do relatório | Tem todos os pedidos? |
| **Gate plan** | Checkpoint decisório | Juiz aprova orientação |
| **Gate automated** | Hooks de validação | Anti-alucinação, formato |
| **Gate QA** | Revisão final | 3 subagentes + consolidação |

---

*Anexo: Aplicação dos Conceitos ao Sistema Jurídico Agêntico*
*Curso de Sistemas Agênticos - 2026*
