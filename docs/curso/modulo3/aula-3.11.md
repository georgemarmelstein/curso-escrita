# 3.11 RAG Avançado

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Sistemas Agênticos
**Tempo estimado:** 45 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender arquitetura de sistemas RAG
- Construir base de conhecimento personalizada
- Otimizar recuperação de informações
- Aplicar RAG em contexto jurídico

---

## Por que Importa

**Para profissionais do Direito:**
- Base própria de precedentes e modelos
- Conhecimento atualizado e verificado
- Respostas ancoradas em fontes confiáveis

**Princípio:**
> RAG combina o poder generativo do LLM com a precisão de fontes controladas.

---

## Base Conceitual

### Arquitetura RAG

```
┌─────────────────────────────────────────────────────────────┐
│  RAG: Retrieval-Augmented Generation                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. INDEXAÇÃO (offline)                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Documentos → Chunks → Embeddings → Vector Store      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  2. RECUPERAÇÃO (online)                                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Query → Embedding → Busca Similaridade → Chunks      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  3. GERAÇÃO (online)                                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Query + Chunks Relevantes → LLM → Resposta           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Componentes do RAG

| Componente | Função | Exemplo |
|------------|--------|---------|
| **Corpus** | Base de documentos | Jurisprudência, doutrina |
| **Chunking** | Divisão em partes | 500 tokens por chunk |
| **Embedding** | Vetorização | text-embedding-ada-002 |
| **Vector Store** | Armazenamento | Pinecone, Chroma |
| **Retriever** | Busca semântica | Top-k similaridade |
| **Generator** | Produz resposta | Claude, GPT |

### Estratégias de Chunking

```
DOCUMENTO JURÍDICO
│
├── CHUNKING POR TAMANHO FIXO
│   └── 500 tokens cada (simples, pode cortar ideias)
│
├── CHUNKING SEMÂNTICO
│   └── Por parágrafo ou seção (preserva contexto)
│
├── CHUNKING HIERÁRQUICO
│   └── Documento → Seção → Parágrafo (múltiplos níveis)
│
└── CHUNKING JUDICIAL
    └── Ementa | Relatório | Fundamentação | Dispositivo
```

### Otimizações de RAG

```
┌─────────────────────────────────────────────────────────────┐
│  TÉCNICAS DE OTIMIZAÇÃO                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. QUERY EXPANSION                                         │
│     Query original → Variações → Múltiplas buscas           │
│     "prescrição FGTS" → "prazo prescricional FGTS"          │
│                      → "decadência fundo de garantia"       │
│                                                             │
│  2. RERANKING                                               │
│     Chunks recuperados → Modelo de reranking → Top-k        │
│     (Melhor relevância que similaridade pura)               │
│                                                             │
│  3. METADATA FILTERING                                      │
│     Filtrar por: tribunal, data, área, tipo                 │
│     "STJ" AND "2023-2024" AND "tributário"                  │
│                                                             │
│  4. HYBRID SEARCH                                           │
│     Combina: busca semântica + busca por palavras-chave     │
│     Melhor recall que cada uma isolada                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Exercício Prático

### Tarefa
Projetar base de conhecimento jurídica com RAG.

### Passo a Passo

**1. Definir corpus:**

```markdown
## BASE DE CONHECIMENTO JURÍDICA

### Fontes
1. Jurisprudência STJ (últimos 5 anos)
2. Súmulas vinculantes e não-vinculantes
3. Legislação federal atualizada
4. Doutrina selecionada

### Volume Estimado
- 10.000 acórdãos
- 500 súmulas
- 50 leis principais
- 100 artigos doutrinários
```

**2. Definir estratégia de chunking:**

```markdown
## ESTRATÉGIA DE CHUNKING

### Jurisprudência
- Nível 1: Acórdão inteiro (metadados)
- Nível 2: Ementa (busca principal)
- Nível 3: Fundamentação por tema

### Legislação
- Nível 1: Lei inteira (metadados)
- Nível 2: Capítulo/Seção
- Nível 3: Artigo individual

### Metadados
| Campo | Tipo | Exemplo |
|-------|------|---------|
| tribunal | enum | STJ, STF, TRF |
| data | date | 2024-01-15 |
| area | enum | civil, penal, tributário |
| tipo | enum | acordao, sumula, lei |
| relevancia | int | 1-10 |
```

**3. Definir prompt de recuperação:**

```markdown
## PROMPT RAG JURÍDICO

Você é um assistente jurídico com acesso a uma base
de conhecimento de jurisprudência e legislação.

### Contexto Recuperado
<contexto>
{{CHUNKS_RELEVANTES_DO_RAG}}
</contexto>

### Instruções
1. Responda APENAS com base no contexto fornecido
2. Cite as fontes específicas (número do acórdão, artigo)
3. Se o contexto não tiver a informação, diga claramente
4. NÃO invente jurisprudência ou legislação

### Pergunta do Usuário
{{QUERY}}

### Formato de Resposta
- Resposta direta à pergunta
- Fontes citadas (lista)
- Nível de confiança (alto/médio/baixo)
```

**4. Testar recuperação:**

```markdown
## TESTE DE RECUPERAÇÃO

### Query
"Qual o prazo prescricional para ação de cobrança de FGTS?"

### Chunks Esperados
1. Súmula 210/STJ: "A ação de cobrança das contribuições
   para o FGTS prescreve em trinta anos."
2. Tema 608/STF: "É quinquenal a prescrição para cobrança
   de valores não depositados no FGTS..."
3. Art. 23, Lei 8.036/90 (se houver na base)

### Resposta Esperada
"O prazo prescricional para ação de cobrança de FGTS
foi alterado pelo STF no Tema 608: atualmente é de 5 anos.
A Súmula 210/STJ (30 anos) foi superada.

Fontes:
- Tema Repetitivo 608/STF (2014)
- Súmula 210/STJ (superada)

Confiança: Alta"
```

### Checklist de Verificação

```
[ ] Defini corpus e fontes
[ ] Estabeleci estratégia de chunking
[ ] Defini metadados para filtragem
[ ] Criei prompt que ancora no contexto
[ ] Testei recuperação com queries reais
```

---

## Dicas e Armadilhas

### Dica
> Invista tempo no chunking. Chunks mal definidos = recuperação ruim = respostas ruins. É a fundação do RAG.

### Dica 2
> Use metadados para filtragem. Buscar "prescrição tributária" em toda a base é menos eficiente que filtrar por área="tributário" primeiro.

### Armadilha
> **"Quanto mais documentos, melhor."**
>
> Não necessariamente. Documentos irrelevantes
> adicionam ruído. Qualidade > quantidade.

### Armadilha 2
> **"RAG elimina alucinações."**
>
> Reduz, mas não elimina. O LLM ainda pode
> interpretar mal o contexto recuperado.

---

## Arquitetura de Referência

```
┌─────────────────────────────────────────────────────────────┐
│  ARQUITETURA RAG JURÍDICA                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INGESTÃO                                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Tribunais → Scraping → Parsing → Chunking → Embed   │   │
│  │      ↓         ↓          ↓         ↓         ↓     │   │
│  │   APIs      HTML→MD    Extração   Semântico  Vector │   │
│  │            JSON→MD    Metadados   Judicial    DB    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  CONSULTA                                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Query → Expansão → Filtro → Busca → Rerank → LLM    │   │
│  │   ↓        ↓         ↓        ↓        ↓       ↓    │   │
│  │ User   Variações  Metadata  Vector  Cross-  Claude  │   │
│  │        Query      (área,    Search  Encoder         │   │
│  │                   data)                             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: RAG AVANÇADO                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COMPONENTES:                                               │
│  → Corpus: base de documentos                               │
│  → Chunking: divisão inteligente                            │
│  → Embedding: vetorização semântica                         │
│  → Retriever: busca por similaridade                        │
│  → Generator: LLM produz resposta                           │
│                                                             │
│  OTIMIZAÇÕES:                                               │
│  → Query expansion: múltiplas variações                     │
│  → Reranking: ordenação por relevância                      │
│  → Metadata filtering: filtros estruturados                 │
│  → Hybrid search: semântico + keyword                       │
│                                                             │
│  PARA JURÍDICO:                                             │
│  → Chunk por estrutura (ementa, fundamentação)              │
│  → Metadados: tribunal, data, área, tipo                    │
│  → Prompt que ancora e cita fontes                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

RAG busca em bases próprias. E quando você precisa de pesquisa profunda na internet?

→ Próxima: **[3.12 Deep Research](./aula-3.12.md)**
