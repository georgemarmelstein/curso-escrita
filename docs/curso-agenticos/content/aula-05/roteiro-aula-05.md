# Aula 5: Sistema Juridico Agentico

> **Duracao estimada:** 4 horas
> **Pre-requisitos:** Aulas 0-4
> **Objetivo:** Aplicar todos os conceitos em um sistema juridico completo (CLERK)

---

## Sumario

1. [Bloco 1: Filosofia de Aumentacao](#bloco-1-filosofia-de-aumentacao-30-min)
2. [Bloco 2: A Analogia Scout Agent](#bloco-2-a-analogia-scout-agent-35-min)
3. [Bloco 3: MCPs Juridicos](#bloco-3-mcps-juridicos-40-min)
4. [Bloco 4: O Pipeline CLERK](#bloco-4-o-pipeline-clerk-45-min)
5. [Bloco 5: Governanca e Explainability](#bloco-5-governanca-e-explainability-35-min)
6. [Bloco 6: Revisao com Subagentes](#bloco-6-revisao-com-subagentes-40-min)
7. [Bloco 7: Projeto Final e Proximos Passos](#bloco-7-projeto-final-e-proximos-passos-35-min)

---

## Bloco 1: Filosofia de Aumentacao (30 min)

### 1.1 AUMENTACAO, Nao Automacao

> **Principio Fundamental:**
> "Nao e sobre substituir o juiz. E sobre potencializar sua analise."

**Dois paradigmas fundamentalmente diferentes:**

```
┌─────────────────────────────────────────────────────────────────┐
│                        AUTOMACAO                                │
│                                                                 │
│  Processo ───► IA ───► Sentenca                                 │
│                                                                 │
│  - IA substitui o humano                                        │
│  - Foco em eficiencia                                           │
│  - Resultado final automatico                                   │
│  - Risco: caixa-preta                                           │
│  - Juridicamente: INCONSTITUCIONAL                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        AUMENTACAO                               │
│                                                                 │
│  Processo ───► IA ───► Insumos ───► MAGISTRADO ───► Sentenca   │
│                                                                 │
│  - IA potencializa o humano                                     │
│  - Foco em qualidade decisoria                                  │
│  - Insumos qualificados para decisao humana                     │
│  - Transparencia: raciocinio explicito                          │
│  - Juridicamente: CONSTITUCIONAL (humano decide)                │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 O Papel do CLERK

**CLERK** = *Collaborative Legal Expert for Research and Knowledge*

O CLERK atua como um **assessor inteligente**:

| Funcao | O que faz | Analogia |
|--------|-----------|----------|
| **Prepara** | Organiza informacoes processuais | Assessor que le os autos |
| **Sintetiza** | Resume documentos extensos | Prepara relatorios |
| **Pesquisa** | Localiza jurisprudencia | Busca precedentes |
| **Sugere** | Apresenta minutas | Propoe texto inicial |

**A decisao judicial permanece EXCLUSIVAMENTE humana.**

### 1.3 A Metafora do Gabinete Judicial

```
┌─────────────────────────────────────────────────────────────────┐
│  GABINETE JUDICIAL TRADICIONAL                                  │
│                                                                 │
│  Processo ───► Assessor ───► Magistrado ───► Decisao            │
│               (prepara)     (decide)                            │
│                                                                 │
│  O assessor:                                                    │
│  - Le os autos                                                  │
│  - Prepara relatorios                                           │
│  - Pesquisa precedentes                                         │
│  - Sugere minutas                                               │
│  - MAS NAO DECIDE                                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  GABINETE JUDICIAL AGENTICO (CLERK)                             │
│                                                                 │
│  Processo ───► CLERK ───► Magistrado ───► Decisao               │
│               (agente)    (humano)                              │
│                                                                 │
│  O CLERK:                                                       │
│  - Le processos digitais (OCR, PDF)                             │
│  - Gera relatorios estruturados                                 │
│  - Pesquisa em bases vinculantes (BNP, CJF, JULIA)              │
│  - Sugere minutas fundamentadas                                 │
│  - MAS NAO DECIDE                                               │
└─────────────────────────────────────────────────────────────────┘
```

> **Insight:** A tecnologia muda, os papeis permanecem. O CLERK e o assessor de gabinete do seculo XXI.

### 1.4 Por Que Aumentacao Funciona

**Tres razoes fundamentais:**

1. **Legitimidade juridica:** A decisao permanece humana (Art. 5o, XXXV, CF)
2. **Qualidade superior:** Humano + IA > humano sozinho OU IA sozinha
3. **Responsabilidade clara:** Magistrado responde pela decisao

> **Citacao (Lisa Orr, Zapier):**
> "Embedding tools is the key to usage. Support loved it enough that they decided to embed it into their process."

**Traducao juridica:** O CLERK deve estar DENTRO do fluxo de trabalho, nao como ferramenta separada.

---

## Bloco 2: A Analogia Scout Agent (35 min)

### 2.1 O Padrao Scout Agent (Zapier)

> **Contexto (Lisa Orr, Zapier):**
> Zapier enfrentava "app erosion" - APIs de terceiros mudando constantemente quebravam integracoes. Time de suporte estava sobrecarregado.

**Solucao:** Scout Agent - agente que ajuda suporte a criar fixes.

```
┌─────────────────────────────────────────────────────────────────┐
│  SCOUT AGENT (ZAPIER)                                           │
│                                                                 │
│  FASE 1: DIAGNOSIS                                              │
│  ├─ Agrega: docs da API + logs internos + contexto do cliente   │
│  ├─ Output: categorizacao + avaliacao de fixabilidade           │
│  └─ [GATE: Suporte revisa diagnostico]                          │
│                                                                 │
│  FASE 2: CODEGEN                                                │
│  ├─ Roda pipeline CI/CD: plan → execute → validate              │
│  ├─ Output: merge request com fix proposto                      │
│  └─ [GATE: Suporte revisa codigo]                               │
│                                                                 │
│  FASE 3: ITERATION                                              │
│  ├─ Suporte comenta no GitLab                                   │
│  ├─ Agente re-executa com feedback                              │
│  └─ Suporte submete para engenharia                             │
└─────────────────────────────────────────────────────────────────┘
```

**Resultado:** 40% dos fixes agora gerados pelo Scout. Velocidade dobrou.

### 2.2 Mapeamento: Scout → CLERK

| Scout Agent (Suporte) | CLERK (Judicial) |
|----------------------|------------------|
| Ticket de suporte | Processo judicial |
| Diagnosis API | /analisar-caso |
| Codegen (fix) | /elaborar-minuta |
| Suporte revisa | Magistrado revisa |
| Merge request | Minuta de sentenca |

```
┌─────────────────────────────────────────────────────────────────┐
│  CLERK JUDICIAL AGENT                                           │
│                                                                 │
│  FASE 1: DIAGNOSIS (Analise do Caso)                            │
│  ├─ Agrega: autos + peticao + precedentes                       │
│  ├─ Consulta: BNP + CJF + JULIA                                 │
│  ├─ Classifica: TRIVIAL vs HARD CASE                            │
│  ├─ Output: relatorio orientador                                │
│  └─ [GATE: Magistrado revisa classificacao]                     │
│                                                                 │
│  FASE 2: CODEGEN (Elaboracao de Minuta)                         │
│  ├─ Gera: FUNDAMENTACAO + DISPOSITIVO                           │
│  ├─ Valida: consistencia interna                                │
│  └─ [GATE: Magistrado revisa minuta]                            │
│                                                                 │
│  FASE 3: ITERATION (Revisao)                                    │
│  ├─ Magistrado comenta/ajusta                                   │
│  ├─ Agente refina com feedback                                  │
│  └─ Output final: sentenca completa                             │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Os Tres Superpoderes (Por Que Funciona)

> **Insight (Lisa Orr):** Time de suporte tem tres superpoderes que os tornam ideais para usar agentes.

**Traducao para contexto judicial:**

| Superpoder | Suporte (Zapier) | Gabinete Judicial |
|------------|------------------|-------------------|
| **1. Proximo da dor** | Mais perto do cliente | Mais perto do processo |
| **2. Troubleshooting em tempo real** | Logs frescos, contexto vivo | Autos completos, questao atual |
| **3. Melhor em validacao** | Sabe se fix resolve problema | Sabe se minuta resolve caso |

**Implicacao:** O assessor/magistrado e quem VALIDA, nao a IA.

### 2.4 Embedding vs Standalone

> **Licao critica (Lisa Orr):**
> "Primeira tentativa: playground standalone = baixa adocao (janela extra para ir).
> Segunda tentativa: embedado no Jira = alta adocao."

**Para o CLERK:**

```
❌ ERRADO (Standalone):
Magistrado ──► Abre Claude Code ──► Copia processo ──► Roda comandos ──► Copia minuta ──► Cola no PJE

✅ CERTO (Embedded):
Magistrado ──► Abre processo no PJE ──► Um clique ──► CLERK executa ──► Minuta aparece no PJE
```

**Meta:** Integrar CLERK no fluxo do PJE, nao como ferramenta separada.

---

## Bloco 3: MCPs Juridicos (40 min)

### 3.1 O Que Sao MCPs

**MCP = Model Context Protocol**

MCPs sao "conectores" que dao ao Claude acesso a sistemas externos:

```
┌─────────────────────────────────────────────────────────────────┐
│  ANTES: Claude isolado                                          │
│                                                                 │
│  Claude ←─ Voce copia/cola dados ─→ Sistema externo             │
│                                                                 │
│  DEPOIS: Claude conectado via MCP                               │
│                                                                 │
│  Claude ←──── MCP Server ────→ Sistema externo                  │
│         (acesso direto)                                         │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 MCPs Oficiais vs Customizados

> **IMPORTANTE:** Antes de apresentar os MCPs juridicos, e fundamental entender a distincao entre MCPs oficiais e customizados.

**O ecossistema MCP tem tres camadas:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ECOSSISTEMA MCP                                                │
│                                                                 │
│  CAMADA 1: MCPs OFICIAIS (Documentacao Anthropic)               │
│  ├─ GitHub, Sentry, PostgreSQL, Slack, Linear...                │
│  ├─ Documentados em: https://modelcontextprotocol.io/           │
│  └─ Funcionam "out of the box" com configuracao minima          │
│                                                                 │
│  CAMADA 2: MCPs DA COMUNIDADE                                   │
│  ├─ Criados por desenvolvedores independentes                   │
│  ├─ Qualidade variavel, requerem avaliacao                      │
│  └─ Disponiveis em repositorios como mcp-servers                │
│                                                                 │
│  CAMADA 3: MCPs CUSTOMIZADOS (Este Curso)                       │
│  ├─ BNP, CJF, JULIA, Jurisdf                                    │
│  ├─ Desenvolvidos especificamente para o ecossistema juridico   │
│  ├─ NAO fazem parte da distribuicao oficial do Claude Code      │
│  └─ Requerem configuracao adicional (ver Anexo de Setup)        │
└─────────────────────────────────────────────────────────────────┘
```

**Por que essa distincao importa?**

1. **Expectativa correta:** Ao consultar a documentacao oficial do Claude Code, voce NAO encontrara os MCPs juridicos - eles sao especificos deste curso.

2. **Manutencao:** MCPs oficiais sao mantidos pela Anthropic e comunidade ampla. MCPs customizados dependem do projeto que os criou.

3. **Portabilidade:** Se voce compartilhar seu setup com colegas, precisara incluir os MCPs customizados separadamente.

**Documentacao oficial de MCPs:**
- Especificacao: https://modelcontextprotocol.io/
- Servidores populares: https://github.com/modelcontextprotocol/servers
- Guia Claude Code: https://docs.anthropic.com/en/docs/claude-code

> **Nota:** Os MCPs juridicos apresentados a seguir foram desenvolvidos para demonstrar o potencial de integracao com bases de precedentes brasileiras. Eles servem como prova de conceito e template para criar seus proprios conectores.

---

### 3.3 MCPs Juridicos Disponiveis (Customizados)

**Tres MCPs customizados para pesquisa de precedentes:**

| MCP | Fonte | Conteudo | Tools |
|-----|-------|----------|-------|
| `bnp-api` | BNP/PANGEA (CNJ) | Precedentes vinculantes STF/STJ | `buscar_precedentes` |
| `cjf-jurisprudencia` | CJF Unificada | Jurisprudencia todos TRFs | `buscar_jurisprudencia_cjf` |
| `julia-trf5` | JULIA (TRF5) | 1o e 2o grau 5a Regiao | `buscar_julia` |

### 3.4 Sintaxe de Busca por Base

**IMPORTANTE:** Cada base tem sintaxe DIFERENTE!

**BNP (Banco Nacional de Precedentes):**
```
Operadores: +termo (obrigatorio), -termo (excluir), "frase" (exata)

Exemplos:
+pensao +morte +homoafetivo
"aposentadoria especial" +EPI
+bpc +idoso -estrangeiro

NAO usar: E, OU, NAO (nao funcionam no BNP)
```

**CJF (Conselho da Justica Federal):**
```
Operadores: E, OU, NAO, ADJ[n], PROX[n], COM, MESMO (MAIUSCULO!)

Exemplos:
(pensao E morte)[EMEN] E homoafetivo
aposentadoria PROX3 invalidez
Fux[REL] E previdenciario[INDE]

Campos: [EMEN], [REL], [TRIB], [ORGA], [INDE], [ITEO]
```

**JULIA (TRF5):**
```
Operadores: e, ou, nao, prox, adj, $ (MINUSCULO!)

Exemplos:
pensao e morte e homoafetivo
aposentad$ e especial e epi
"auxilio-doenca" e cessacao e pericia

Filtros: orgao, instancia, tipos_documento, relator
```

### 3.5 Arquitetura de Pesquisa

```
┌─────────────────────────────────────────────────────────────────┐
│  ESTRATEGIA DE PESQUISA INTELIGENTE                             │
│                                                                 │
│  PASSO 1: Classificar o tema                                    │
│           ├─ COMUM (BPC, aposentadoria padrao)                  │
│           │  └─ Apenas BNP (temas vinculantes)                  │
│           │                                                     │
│           └─ RARO/COMPLEXO (questao nova, jurisprudencia)       │
│              └─ BNP → CJF → JULIA (cascata)                     │
│                                                                 │
│  PASSO 2: Formular query com operadores corretos                │
│           ├─ BNP: +termo +termo                                 │
│           ├─ CJF: termo E termo[EMEN]                           │
│           └─ JULIA: termo e termo                               │
│                                                                 │
│  PASSO 3: Executar em paralelo (quando possivel)                │
│           ├─ Fan-out: 3 subagentes (BNP, CJF, JULIA)            │
│           └─ Fan-in: consolidar resultados                      │
│                                                                 │
│  PASSO 4: Destilar (economizar tokens)                          │
│           └─ Retornar apenas: tema, tese, aplicabilidade        │
└─────────────────────────────────────────────────────────────────┘
```

### 3.6 Commands de Pesquisa

**Commands atomicos (uma fonte cada):**
```
/pesquisar-bnp "pensao morte homoafetivo"
/pesquisar-cjf "pensao E morte E homoafetivo"
/pesquisar-julia "pensao e morte e homoafetivo"
```

**Command orquestrador (fluxo completo):**
```
/pesquisar-jurisprudencia "pensao por morte para companheiro homoafetivo"
```

O orquestrador:
1. Classifica o tema (COMUM ou RARO)
2. Busca no BNP primeiro (vinculantes)
3. Se nao encontrar, expande para CJF e JULIA
4. Consolida e destila resultados

### 3.7 Exemplo Pratico: Pesquisa BPC

**Questao:** "BPC para idoso estrangeiro residente no Brasil"

**Execucao:**
```
1. BNP: +bpc +idoso +estrangeiro
   Resultado: Tema 173 - "Estrangeiro residente no pais..."

2. Se tema vinculante encontrado → PARA
   Se nao → continua para CJF

3. CJF: (BPC OU LOAS)[EMEN] E idoso E estrangeiro
   Resultado: Acordaos STJ sobre o tema

4. JULIA: bpc e idoso e estrangeiro
   Resultado: Jurisprudencia regional TRF5
```

---

## Bloco 4: O Pipeline CLERK (45 min)

### 4.1 Visao Geral do Pipeline

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  PIPELINE CLERK - 6 FASES                                                            │
│                                                                                      │
│  FASE 1       FASE 2      FASE 3        FASE 4       FASE 5      FASE 6             │
│  Preparacao   Extracao    Orquestrador  Elaboracao   MERGE       REVISAO            │
│                                                                                      │
│  PJE → TXT →  Relatorio → Classifica →  Minuta   →   Sentenca →  3 Subagentes      │
│               judicial    + Orienta     Fund+Disp    Completa    em Paralelo        │
│                                                                                      │
│  /baixar-pje  /relatar-   /analisar-    /elaborar-   /merge-     /revisar-          │
│               processo    caso          minuta       sentenca    sentenca           │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Fase 1: Preparacao (Workflow)

**Objetivo:** Baixar processo do PJE e converter para formato processavel.

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 1: PREPARACAO                                             │
│                                                                 │
│  PJE ───► Download ───► OCR/Conversao ───► TXT                  │
│                                                                 │
│  Command: /baixar-pje [numero-processo]                         │
│                                                                 │
│  Skill: pje-integration                                         │
│  ├─ Login automatizado no PJE                                   │
│  ├─ Download de todas as pecas                                  │
│  ├─ Triagem: PDF pesquisavel vs imagem                          │
│  └─ OCR quando necessario                                       │
│                                                                 │
│  Output: pasta processo-XXXXX/ com TXTs                         │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Fase 2: Extracao (Pipeline Linear)

**Objetivo:** Gerar relatorio estruturado do processo.

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 2: EXTRACAO                                               │
│                                                                 │
│  TXT ───► Triagem ───► Extracao ───► Sintese ───► Relatorio     │
│                                                                 │
│  Command: /relatar-processo [caminho]                           │
│                                                                 │
│  Skill: relatorio-judicial                                      │
│  Metodologia: Refinamento Iterativo                             │
│  ├─ Leitura em chunks de 2000 tokens                            │
│  ├─ Extracao de elementos-chave por chunk                       │
│  ├─ Consolidacao em estrutura coerente                          │
│  └─ Validacao contra checklist                                  │
│                                                                 │
│  Output: relatorio.md                                           │
│  ├─ SINTESE (3-5 linhas)                                        │
│  ├─ FATOS RELEVANTES (tabela cronologica)                       │
│  ├─ PEDIDOS                                                     │
│  └─ DOCUMENTOS PROBATORIOS                                      │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 Fase 3: Orquestrador (Bolsao Agentico + Fan-Out)

**Objetivo:** Pesquisar precedentes e classificar o caso.

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 3: ORQUESTRADOR                                           │
│                                                                 │
│  Relatorio ───► Classificar ───► Pesquisar ───► Orientar        │
│                                                                 │
│  Command: /analisar-caso [caminho]                              │
│                                                                 │
│  ETAPA 1: Identificar questao juridica central                  │
│                                                                 │
│  ETAPA 2: Classificar complexidade                              │
│  ├─ TRIVIAL: tema vinculante direto, fatos incontroversos       │
│  └─ HARD CASE: questao nova, fatos controversos                 │
│                                                                 │
│  ETAPA 3: Pesquisar (Fan-Out)                                   │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐            │
│  │     BNP     │   │     CJF     │   │    JULIA    │            │
│  │ (vinculante)│   │ (STJ/STF)   │   │   (TRF5)    │            │
│  └──────┬──────┘   └──────┬──────┘   └──────┬──────┘            │
│         └─────────────────┼─────────────────┘                   │
│                           ▼                                     │
│                    CONSOLIDADOR                                 │
│                                                                 │
│  Output: analise-orientadora.md                                 │
│  ├─ Classificacao: TRIVIAL | HARD CASE                          │
│  ├─ Precedentes aplicaveis                                      │
│  └─ Orientacao para elaboracao                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.5 GATE 3: Checkpoint Decisorio

```
┌─────────────────────────────────────────────────────────────────┐
│  CHECKPOINT DECISORIO (OBRIGATORIO)                             │
│                                                                 │
│        [Analise Orientadora]                                    │
│                │                                                │
│                ▼                                                │
│  ┌─────────────────────────────────┐                            │
│  │      MAGISTRADO DECIDE:         │                            │
│  │                                  │                            │
│  │  [ ] Concordo com classificacao  │                            │
│  │  [ ] Concordo com precedentes    │                            │
│  │  [ ] Orientacao para sentenca:   │                            │
│  │      _________________________   │                            │
│  │                                  │                            │
│  │  ( ) Procedente                  │                            │
│  │  ( ) Improcedente                │                            │
│  │  ( ) Parcialmente procedente     │                            │
│  └─────────────────────────────────┘                            │
│                                                                 │
│  SE TRIVIAL + Magistrado concorda → Fluxo automatizado          │
│  SE HARD CASE ou discorda → Analise aprofundada                 │
└─────────────────────────────────────────────────────────────────┘
```

**Este e o unico ponto onde o CLERK espera decisao humana.**

### 4.6 Fase 4-5: Elaboracao (Pipeline RPI)

**Objetivo:** Gerar minuta de sentenca.

```
┌─────────────────────────────────────────────────────────────────┐
│  FASES 4-5: ELABORACAO                                          │
│                                                                 │
│  Orientacao ───► Fundamentar ───► Dispositivo ───► Merge        │
│                                                                 │
│  Command: /sentenciar [opcoes]                                  │
│  ├─ /sentenciar-restrito   (so triviais)                        │
│  ├─ /sentenciar-irrestrito (qualquer, com red flags)            │
│  └─ /sentenciar-rapido     (gera tudo do zero)                  │
│                                                                 │
│  Skill: elaboracao-minuta                                       │
│  ├─ MODO FUNDAMENTACAO: regras anti-alucinacao                  │
│  ├─ Cita apenas precedentes do relatorio orientador             │
│  ├─ Nao inventa fatos                                           │
│  └─ Linguagem tecnica formal                                    │
│                                                                 │
│  Output:                                                        │
│  ├─ minuta-fundamentacao.md (Fase 4)                            │
│  └─ minuta.md (Fase 5 - completa)                               │
│      ├─ RELATORIO                                               │
│      ├─ FUNDAMENTACAO                                           │
│      └─ DISPOSITIVO                                             │
└─────────────────────────────────────────────────────────────────┘
```

### 4.7 Fase 6: Revisao (Fan-Out Paralelo)

**Objetivo:** Revisar minuta com multiplas perspectivas.

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 6: REVISAO PARALELA                                       │
│                                                                 │
│  Command: /revisar-sentenca [caminho]                           │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              MINUTA DE SENTENCA                         │    │
│  └───────────────────────┬─────────────────────────────────┘    │
│                          │                                      │
│          ┌───────────────┼───────────────┐                      │
│          │               │               │                      │
│          ▼               ▼               ▼                      │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐          │
│  │   ADVOGADO    │ │ CONSISTENCIA  │ │ CONSISTENCIA  │          │
│  │   DO DIABO    │ │   INTERNA     │ │   EXTERNA     │          │
│  │               │ │               │ │               │          │
│  │ Busca vicios: │ │ Confronta:    │ │ Verifica:     │          │
│  │ - Omissao     │ │ - Sentenca    │ │ - Precedentes │          │
│  │ - Contradicao │ │   vs autos    │ │ - Sumulas     │          │
│  │ - Obscuridade │ │ - Pedidos     │ │ - Leis        │          │
│  │               │ │ - Argumentos  │ │ (WebSearch)   │          │
│  └───────┬───────┘ └───────┬───────┘ └───────┬───────┘          │
│          │               │               │                      │
│          └───────────────┼───────────────┘                      │
│                          ▼                                      │
│                   CONSOLIDADOR                                  │
│                          │                                      │
│                          ▼                                      │
│               minuta-robustecida.md                             │
│                  (se houver correcoes)                          │
└─────────────────────────────────────────────────────────────────┘
```

### 4.8 Estrutura de Saida Final

```
processo-XXXXX/
├── relatorio.md                    (Fase 2)
├── minuta-fundamentacao.md         (Fase 4)
├── minuta.md                       (Fase 5)
├── minuta-robustecida.md           (Fase 6 - se correcoes)
├── pesquisa/
│   ├── analise-orientadora.md
│   ├── bnp/
│   ├── cjf/
│   └── julia/
└── revisao/
    ├── analise-advogado-diabo.md
    ├── analise-consistencia-interna.md
    ├── analise-consistencia-externa.md
    └── consolidacao.md
```

---

## Bloco 5: Governanca e Explainability (35 min)

### 5.1 Por Que Governanca Importa

> **Citacao (Barry Zhang, Anthropic):**
> "Cost of error and error discovery - If your errors are going to be high stake and very hard to discover, it's going to be very difficult for you to trust the agent."

**No contexto judicial:**
- Erro = sentenca injusta ou ilegal
- Custo = direitos fundamentais violados
- Descoberta = dificil (sentenca vira coisa julgada)

**Conclusao:** Governanca maxima e obrigatoria.

### 5.2 O Modelo de Permissoes em 5 Niveis

```
┌─────────────────────────────────────────────────────────────────┐
│  NIVEIS DE AUTONOMIA                                            │
│                                                                 │
│  L1: Pedir permissao para TODA acao                             │
│      [Mais controle, menos produtividade]                       │
│                                                                 │
│  L2: Pedir para acoes sensiveis (escrita, delete)               │
│      [Padrao recomendado]                                       │
│                                                                 │
│  L3: YOLO seletivo (pre-definir permitidos)                     │
│      [Para tarefas repetitivas bem definidas]                   │
│                                                                 │
│  L4: YOLO com restricoes minimas                                │
│      [NAO recomendado para judicial]                            │
│                                                                 │
│  L5: YOLO total                                                 │
│      [PROIBIDO para judicial]                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Para CLERK:** Usar **L3 Seletivo**
- Permitir: leitura, pesquisa, geracao de minutas
- Bloquear: exclusao, modificacao de configs, execucao arbitraria

### 5.3 Gates de Validacao

```
┌─────────────────────────────────────────────────────────────────┐
│  ARQUITETURA DE GATES (5 GATES)                                 │
│                                                                 │
│  GATE 1: INPUT VALIDATION                                       │
│  ├─ Processo esta completo?                                     │
│  ├─ Formato valido?                                             │
│  └─ Escopo definido?                                            │
│                                                                 │
│  GATE 2: RESEARCH VALIDATION                                    │
│  ├─ Precedentes encontrados sao aplicaveis?                     │
│  ├─ Classificacao (TRIVIAL/HARD) esta correta?                  │
│  └─ [Humano revisa]                                             │
│                                                                 │
│  GATE 3: PLAN APPROVAL (CHECKPOINT DECISORIO)                   │
│  ├─ Magistrado concorda com orientacao?                         │
│  ├─ Decide: procedente/improcedente/parcial                     │
│  └─ [Obrigatorio - humano decide]                               │
│                                                                 │
│  GATE 4: AUTOMATED VALIDATION (HOOKS)                           │
│  ├─ Formato correto?                                            │
│  ├─ Citacoes presentes?                                         │
│  └─ Linguagem formal?                                           │
│                                                                 │
│  GATE 5: QA CHECKPOINT (REVISAO)                                │
│  ├─ 3 subagentes verificam                                      │
│  ├─ Consolidador aponta problemas                               │
│  └─ [Humano revisa final]                                       │
└─────────────────────────────────────────────────────────────────┘
```

### 5.4 Explainability: Rastreabilidade Completa

**Principio:** Toda decisao deve ser rastreavel ate sua origem.

```
┌─────────────────────────────────────────────────────────────────┐
│  RASTREABILIDADE                                                │
│                                                                 │
│  Dispositivo: "Julgo PROCEDENTE o pedido..."                    │
│       │                                                         │
│       └─► Fundamentacao: "Conforme Tema 173 do STF..."          │
│               │                                                 │
│               └─► Pesquisa: analise-orientadora.md              │
│                       │                                         │
│                       └─► BNP: tema_173_stf.json                │
│                                                                 │
│  CADA ELEMENTO TEM ORIGEM DOCUMENTADA                           │
└─────────────────────────────────────────────────────────────────┘
```

### 5.5 Padrao Crawl-Walk-Run

**Implantacao gradual para ambientes de alto risco:**

```
┌─────────────────────────────────────────────────────────────────┐
│  CRAWL (100% Human in Loop)                                     │
│  ├─ Um tipo de caso apenas (BPC)                                │
│  ├─ Humano aprova TODAS as decisoes                             │
│  ├─ Auditoria detalhada de cada passo                           │
│  └─ Gates em INPUT, RESEARCH, PLAN, IMPLEMENTATION              │
│                                                                 │
│  WALK (Autonomia Seletiva)                                      │
│  ├─ 2-3 tipos de caso                                           │
│  ├─ Humano aprova apenas PLAN                                   │
│  ├─ Validacao automatica para formato/completude                │
│  └─ Rollback sempre disponivel                                  │
│                                                                 │
│  RUN (Pipeline Confiavel)                                       │
│  ├─ Todos os tipos de caso                                      │
│  ├─ Humano aprova PLAN ou amostragem (10%)                      │
│  ├─ Gates automatizados com monitoramento                       │
│  └─ Triggers de escalacao claros                                │
└─────────────────────────────────────────────────────────────────┘
```

**Recomendacao:** Comecar em CRAWL, avancar conforme confianca aumenta.

### 5.6 Anti-Padroes a Evitar

```
❌ ANTI-PADRAO 1: Confiar cegamente
   "A IA disse que esta certo, entao esta."
   CORRECAO: Sempre verificar, especialmente hard cases.

❌ ANTI-PADRAO 2: Trajectory Poisoning
   Agente erra → humano corrige → agente erra de novo
   CORRECAO: Limpar erros do contexto apos 3 tentativas.

❌ ANTI-PADRAO 3: Over-automation
   Automatizar 100% do processo decisorio.
   CORRECAO: 90% automatizado + 10% humano = ideal.

❌ ANTI-PADRAO 4: Caixa-preta
   Nao documentar de onde veio cada elemento.
   CORRECAO: Rastreabilidade completa.
```

---

## Bloco 6: Revisao com Subagentes (40 min)

### 6.1 Por Que Revisao Paralela

**Problema:** Um unico revisor (humano ou IA) tem pontos cegos.

**Solucao:** Multiplos revisores com perspectivas diferentes.

```
┌─────────────────────────────────────────────────────────────────┐
│  REVISAO TRADICIONAL (Linear)                                   │
│                                                                 │
│  Minuta ───► Revisor 1 ───► Revisor 2 ───► Final                │
│                                                                 │
│  Problemas:                                                     │
│  - Sequencial (lento)                                           │
│  - Revisor 2 pode ser influenciado por Revisor 1                │
│  - Cada revisor tem os mesmos pontos cegos                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  REVISAO PARALELA (Fan-Out)                                     │
│                                                                 │
│              ┌───────────────┐                                  │
│              │    MINUTA     │                                  │
│              └───────┬───────┘                                  │
│          ┌───────────┼───────────┐                              │
│          │           │           │                              │
│          ▼           ▼           ▼                              │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐                     │
│   │ Revisor A │ │ Revisor B │ │ Revisor C │                     │
│   │(perspect.)│ │(perspect.)│ │(perspect.)│                     │
│   └─────┬─────┘ └─────┬─────┘ └─────┬─────┘                     │
│         └─────────────┼─────────────┘                           │
│                       ▼                                         │
│               CONSOLIDADOR                                      │
│                                                                 │
│  Vantagens:                                                     │
│  - Paralelo (rapido)                                            │
│  - Independente (sem influencia mutua)                          │
│  - Perspectivas complementares                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Os Tres Subagentes

**Subagente 1: Advogado do Diabo**

```markdown
# Prompt: advogado-diabo.md

Voce e um advogado contratado pela parte sucumbente para
encontrar TODOS os vicios que permitam recurso.

Busque:
1. OMISSOES: argumentos nao enfrentados
2. CONTRADICOES: inconsistencias internas
3. OBSCURIDADES: trechos confusos ou ambiguos

Para cada vicio encontrado:
- Localize no texto
- Explique o problema
- Sugira correcao

Se NAO encontrar vicios graves, diga explicitamente.
```

**Subagente 2: Consistencia Interna**

```markdown
# Prompt: consistencia-interna.md

Voce verifica se a sentenca e consistente com os proprios autos.

Confronte:
1. PEDIDOS: todos os pedidos foram analisados?
2. ARGUMENTOS: todos os argumentos foram enfrentados?
3. PROVAS: todas as provas citadas existem nos autos?
4. FATOS: os fatos narrados conferem com o relatorio?

Para cada inconsistencia:
- Identifique o elemento da sentenca
- Identifique o elemento dos autos
- Explique a divergencia
```

**Subagente 3: Consistencia Externa**

```markdown
# Prompt: consistencia-externa.md

Voce verifica se as citacoes externas estao corretas.

Use WebSearch para verificar:
1. PRECEDENTES: o tema/sumula existe? A tese esta correta?
2. LEGISLACAO: o artigo citado existe? O texto confere?
3. DOUTRINA: a citacao esta correta?

Para cada citacao:
- Busque a fonte original
- Compare com o citado na sentenca
- Indique se confere ou diverge
```

### 6.3 O Consolidador

```
┌─────────────────────────────────────────────────────────────────┐
│  CONSOLIDADOR                                                   │
│                                                                 │
│  Recebe: 3 analises dos subagentes                              │
│                                                                 │
│  Executa:                                                       │
│  1. Remove duplicatas (mesmo problema visto por 2+)             │
│  2. Prioriza por gravidade:                                     │
│     - CRITICO: invalida a sentenca                              │
│     - ALTO: pode gerar reforma                                  │
│     - MEDIO: melhoria recomendada                               │
│     - BAIXO: polimento                                          │
│  3. Gera relatorio consolidado                                  │
│                                                                 │
│  Output: consolidacao.md                                        │
│  ├─ Problemas CRITICOS (se houver)                              │
│  ├─ Problemas ALTOS                                             │
│  ├─ Melhorias sugeridas                                         │
│  └─ Conclusao: APROVAR / REVISAR / REFAZER                      │
└─────────────────────────────────────────────────────────────────┘
```

### 6.4 Fluxo Completo da Revisao

```
┌─────────────────────────────────────────────────────────────────┐
│  /revisar-sentenca processo-XXXXX/minuta.md                     │
│                                                                 │
│  1. Carrega minuta                                              │
│  2. Carrega autos (para consistencia interna)                   │
│  3. Dispara 3 subagentes em PARALELO                            │
│  4. Aguarda todos completarem                                   │
│  5. Consolida resultados                                        │
│  6. Se problemas criticos:                                      │
│     └─ Gera minuta-robustecida.md com correcoes                 │
│  7. Salva em revisao/                                           │
│  8. Apresenta resumo ao magistrado                              │
└─────────────────────────────────────────────────────────────────┘
```

### 6.5 Exemplo de Output

**consolidacao.md:**
```markdown
# Consolidacao da Revisao

Data: 2024-01-15
Processo: 12345-XX.2024.4.05.8100

## Problemas Encontrados

### CRITICOS
(nenhum)

### ALTOS
1. **Omissao de argumento** (Advogado do Diabo)
   - Autor alegou prescricao intercorrente (p. 45)
   - Sentenca nao enfrentou o argumento
   - Sugestao: Adicionar paragrafo sobre prescricao

### MEDIOS
2. **Citacao imprecisa** (Consistencia Externa)
   - Tema 173 citado como "idoso acima de 65 anos"
   - Correto: "idoso acima de 65 anos OU deficiente"
   - Sugestao: Corrigir texto da tese

### BAIXOS
3. **Formatacao** (Consistencia Interna)
   - Dispositivo usa "DEFIRO" em vez de "JULGO PROCEDENTE"
   - Sugestao: Padronizar linguagem

## Conclusao

**REVISAR** - Ha um problema ALTO que precisa correcao antes de publicar.

## Minuta Robustecida

Ver: minuta-robustecida.md (correcoes aplicadas automaticamente)
```

### 6.6 Exercicio: Simule uma Revisao

**Tarefa:** Dado o seguinte trecho de minuta, identifique problemas:

```markdown
## FUNDAMENTACAO

O autor, idoso de 67 anos, pleiteia BPC.

Conforme Tema 173 do STF, o beneficio e devido a idosos
acima de 65 anos em situacao de miserabilidade.

O requisito de idade esta preenchido.

Quanto a miserabilidade, a renda per capita familiar
de R$ 350,00 esta abaixo de 1/4 do salario minimo.

## DISPOSITIVO

DEFIRO o pedido.
```

**Analise:**
- Advogado do Diabo: [identifique omissoes]
- Consistencia Interna: [verifique contra autos hipoteticos]
- Consistencia Externa: [verifique citacoes]

---

## Bloco 7: Projeto Final e Proximos Passos (35 min)

### 7.1 Opcoes de Projeto Final

**Opcao A: Pipeline Completo para BPC**

```
Escopo:
- Baixar processo de BPC do PJE
- Gerar relatorio estruturado
- Pesquisar Tema 173 no BNP
- Classificar como TRIVIAL
- Gerar minuta de sentenca
- Revisar com 3 subagentes

Entregaveis:
- processo-XXXXX/ com todos os artefatos
- Documentacao do fluxo executado
```

**Opcao B: Sistema de Pesquisa Tematica**

```
Escopo:
- Criar skill de pesquisa especializada
- Implementar busca em BNP + CJF + JULIA
- Gerar relatorio comparativo de jurisprudencia
- Incluir analise de evolucao jurisprudencial

Entregaveis:
- Skill de pesquisa
- Relatorio tematico sobre tema escolhido
```

**Opcao C: Analisador de Contratos**

```
Escopo:
- Criar pipeline para analise de contratos
- Extrair clausulas-chave
- Identificar riscos juridicos
- Gerar relatorio estruturado

Entregaveis:
- Skill de analise de contratos
- Relatorio de analise de contrato real
```

### 7.2 Checklist de Entrega

```markdown
## Projeto Final - Checklist

### Documentacao
- [ ] CLAUDE.md do projeto atualizado
- [ ] README com instrucoes de uso
- [ ] Diagramas de arquitetura

### Artefatos Tecnicos
- [ ] Pelo menos 1 skill funcional
- [ ] Pelo menos 2 commands funcionais
- [ ] Configuracao de MCPs (se aplicavel)

### Demonstracao
- [ ] Execucao do pipeline com caso real
- [ ] Output documentado
- [ ] Analise critica dos resultados

### Reflexao
- [ ] O que funcionou bem
- [ ] O que precisa melhorar
- [ ] Proximos passos planejados
```

### 7.3 Recursos para Continuar Aprendendo

**Documentacao Oficial:**
- code.claude.com - Documentacao Claude Code
- docs.anthropic.com - API e conceitos
- github.com/anthropics - Repositorios oficiais

**Comunidade:**
- Discord Anthropic
- Forum AI Engineer
- Grupos de pratica juridica + IA

**Leitura Recomendada:**
- "Building Effective Agents" (Anthropic Blog)
- "12 Factor Agents" (Dex Horthy)
- Transcricoes do AI Engineer Summit

### 7.4 O Caminho Adiante

```
┌─────────────────────────────────────────────────────────────────┐
│  JORNADA DO JURISTA AGENTICO                                    │
│                                                                 │
│  VOCE ESTA AQUI                                                 │
│       │                                                         │
│       ▼                                                         │
│  [Curso completo] ───► Projeto final                            │
│                             │                                   │
│                             ▼                                   │
│                        Uso diario do Claude Code                │
│                             │                                   │
│                             ▼                                   │
│                        Customizacao para seu contexto           │
│                             │                                   │
│                             ▼                                   │
│                        Integracao com PJE                       │
│                             │                                   │
│                             ▼                                   │
│                        Pipeline completo em producao            │
│                             │                                   │
│                             ▼                                   │
│                        Compartilhar com colegas                 │
│                             │                                   │
│                             ▼                                   │
│                        TRANSFORMAR O JUDICIARIO                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.5 Mensagem Final

> **O CLERK nao substitui o magistrado. Potencializa sua capacidade de fazer justica.**

O que voce aprendeu neste curso:
1. **Conceitos:** O que sao agentes e como funcionam
2. **Ferramentas:** Claude Code, MCPs, Skills, Commands
3. **Arquitetura:** Pipelines, workflows, gates, subagentes
4. **Construcao:** Como criar seus proprios sistemas
5. **Aplicacao:** O sistema CLERK para trabalho juridico

O proximo passo e seu. Comece pequeno, itere rapido, e lembre-se:

> **"Regencia Cognitiva: o humano dirige, a IA executa, juntos chegam mais longe."**

---

## Sintese: O Que Aprendemos

### Conceitos-Chave da Aula 5

| Conceito | O Que E | Por Que Importa |
|----------|---------|-----------------|
| **Aumentacao** | IA potencializa humano | Legitimidade juridica |
| **Scout Agent** | Padrao Diagnosis→Codegen→Iteration | Modelo para CLERK |
| **MCPs Juridicos** | Conectores para bases de precedentes | Acesso direto a jurisprudencia |
| **Pipeline CLERK** | 6 fases com gates | Fluxo completo estruturado |
| **Governanca** | Permissoes em niveis + rastreabilidade | Seguranca em alto risco |
| **Revisao Paralela** | 3 subagentes + consolidador | Multiplas perspectivas |

### Citacoes para Lembrar

> "Embedding tools is the key to usage." - Lisa Orr

> "Cost of error and error discovery - high stakes need more human-in-the-loop." - Barry Zhang

> "Nao e sobre substituir o juiz. E sobre potencializar sua analise." - Filosofia CLERK

### O Pipeline Completo

```
PJE → Download → OCR → Relatorio → Pesquisa → Checkpoint → Minuta → Revisao → Sentenca
      (Fase 1)  (F2)   (F3)       (GATE)     (F4-5)     (F6)
```

---

*Aula 5 concluida - Sistema Juridico Agentico*
*Curso de Sistemas Agenticos para Juristas*
