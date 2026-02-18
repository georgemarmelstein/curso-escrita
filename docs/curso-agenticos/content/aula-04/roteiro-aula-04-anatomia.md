# Roteiro: Anatomia de um Sistema Agêntico

> **Aula 03 - Módulo Fundamentos**
> Duração estimada: 45-60 minutos

---

## Objetivos de Aprendizagem

Ao final desta aula, o aluno será capaz de:

1. Identificar os componentes fundamentais de um sistema agêntico
2. Distinguir entre agente e subagente
3. Compreender o papel de skills, tools e MCPs
4. Reconhecer diferentes tipos de agentes e suas especializações
5. Entender padrões de workflow entre agentes
6. Saber quando usar cada tipo de componente

---

## Estrutura da Aula

| Seção | Tópico | Duração |
|-------|--------|---------|
| 0 | Abertura: O Problema | 3 min |
| 1 | O Agente: Unidade Fundamental | 8 min |
| 2 | Ferramentas: As Mãos do Agente | 7 min |
| 3 | Skills: Conhecimento Encapsulado | 8 min |
| 4 | MCPs: Extensões Padronizadas | 5 min |
| 5 | Subagentes: Delegação com Isolamento | 8 min |
| 6 | Tipos de Agentes: Especialização | 7 min |
| 7 | Workflows: Padrões de Orquestração | 8 min |
| 8 | Commands: Interface com o Usuário | 5 min |
| 9 | Síntese: Visão Integrada | 5 min |

---

# SEÇÃO 0: O Problema (3 min)

## O LLM Sozinho é Limitado

Antes de falar sobre a solução, precisamos entender o problema.

Um LLM (Large Language Model) como o Claude, sozinho, tem três limitações fundamentais:

### Limitação 1: Stateless (Sem Memória Persistente)

```
Conversa 1: "Meu nome é João"
Conversa 2: "Qual meu nome?"
LLM: "Não sei, você não me disse"
```

O LLM não lembra de nada entre sessões. Cada conversa começa do zero.

### Limitação 2: Sem Ação no Mundo

O LLM pode **falar** sobre criar um arquivo, mas não pode **criar** o arquivo.

```
Você: "Crie um arquivo chamado teste.txt"
LLM sozinho: "Claro! O arquivo teste.txt foi criado com sucesso!"
Realidade: Nenhum arquivo foi criado. O LLM apenas gerou texto.
```

### Limitação 3: Conhecimento Congelado

O LLM foi treinado até uma data específica. Ele não sabe:
- Notícias de ontem
- O conteúdo do seu código
- O estado atual do seu sistema

---

## A Solução: Sistema Agêntico

Um **sistema agêntico** resolve essas limitações adicionando camadas ao LLM:

```
┌─────────────────────────────────────────────────────────┐
│                   SISTEMA AGÊNTICO                      │
│                                                         │
│  ┌─────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   LLM   │ +│ Ferramentas │ +│    Orquestração     │ │
│  │ (cérebro)│  │   (mãos)    │  │ (agenda + memória)  │ │
│  └─────────┘  └─────────────┘  └─────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Analogia:**

O LLM sozinho é um cérebro em um tanque — pensa, mas não age.

O sistema agêntico é esse cérebro com corpo, mãos e agenda — pensa E age.

---

## Ponto de Reflexão

> "Quando você pede ao Claude Code para criar um arquivo e ele cria, não é o LLM que está criando. É o **sistema agêntico** que envolve o LLM que está agindo."

O Claude Code não é apenas o Claude. É Claude + ferramentas + orquestração.

---

# SEÇÃO 1: O Agente - Unidade Fundamental (8 min)

## Definição

Um **agente** é a unidade básica de um sistema agêntico. É composto por três elementos:

```
┌─────────────────────────────────────────┐
│               AGENTE                    │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │        SYSTEM PROMPT            │   │
│  │  (identidade + instruções)      │   │
│  └─────────────────────────────────┘   │
│                  │                      │
│                  ▼                      │
│  ┌─────────────────────────────────┐   │
│  │             LLM                 │   │
│  │    (capacidade de raciocínio)   │   │
│  └─────────────────────────────────┘   │
│                  │                      │
│                  ▼                      │
│  ┌─────────────────────────────────┐   │
│  │         FERRAMENTAS             │   │
│  │   (capacidade de ação)          │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### Componente 1: System Prompt

O system prompt define **quem** o agente é e **como** ele deve se comportar.

```markdown
# Exemplo de System Prompt

Você é um assistente especializado em análise de código Python.

## Regras:
- Sempre explique o raciocínio antes de sugerir mudanças
- Priorize legibilidade sobre performance
- Nunca sugira código sem testar mentalmente

## Personalidade:
- Didático e paciente
- Cético com soluções "mágicas"
```

O system prompt é como a **formação profissional** do agente. Um advogado pensa diferente de um médico, mesmo tendo o mesmo cérebro. O system prompt cria essa especialização.

### Componente 2: LLM (Modelo)

O LLM é o "cérebro" que processa linguagem e raciocina. Diferentes modelos têm diferentes capacidades:

| Modelo | Característica | Uso Típico |
|--------|----------------|------------|
| Haiku | Rápido, barato | Tarefas simples, classificação |
| Sonnet | Equilibrado | Uso geral, coding |
| Opus | Mais capaz | Raciocínio complexo, análise profunda |

**Insight importante:** O mesmo system prompt com modelos diferentes produz resultados diferentes. Escolher o modelo é parte do design do agente.

### Componente 3: Ferramentas

Ferramentas são **funções** que o agente pode invocar para agir no mundo. Sem ferramentas, o agente apenas fala. Com ferramentas, o agente age.

```
Agente sem ferramentas:
  "Vou criar o arquivo teste.txt" → (nada acontece)

Agente com ferramenta Write:
  "Vou criar o arquivo teste.txt" → [invoca Write] → arquivo criado
```

---

## A Fórmula do Agente

```
AGENTE = System Prompt + LLM + Ferramentas
```

Cada elemento pode variar independentemente:
- Mesmo prompt, modelo diferente → comportamento diferente
- Mesmo modelo, prompt diferente → especialização diferente
- Mesmos prompt e modelo, ferramentas diferentes → capacidades diferentes

---

## Exemplo Concreto: Claude Code

O Claude Code que você usa é um agente:

| Componente | No Claude Code |
|------------|----------------|
| System Prompt | Instruções extensas sobre como ajudar com código |
| LLM | Claude (Sonnet, Opus, ou Haiku conforme configurado) |
| Ferramentas | Read, Write, Edit, Bash, Glob, Grep, Task, etc. |

Quando você abre o Claude Code, você está interagindo com um **agente** pré-configurado.

---

# SEÇÃO 2: Ferramentas - As Mãos do Agente (7 min)

## O que são Ferramentas?

Ferramentas (tools) são funções que o agente pode chamar para executar ações específicas. Cada ferramenta tem:

1. **Nome:** identificador único
2. **Descrição:** o que a ferramenta faz (o LLM lê isso para decidir quando usar)
3. **Parâmetros:** inputs que a ferramenta aceita
4. **Retorno:** output que a ferramenta produz

```
┌────────────────────────────────────────┐
│           FERRAMENTA: Read             │
├────────────────────────────────────────┤
│ Descrição: Lê conteúdo de um arquivo   │
├────────────────────────────────────────┤
│ Parâmetros:                            │
│   - file_path: caminho do arquivo      │
│   - offset: linha inicial (opcional)   │
│   - limit: número de linhas (opcional) │
├────────────────────────────────────────┤
│ Retorno: conteúdo do arquivo           │
└────────────────────────────────────────┘
```

---

## Ferramentas Fundamentais do Claude Code

### Ferramentas de Leitura

| Ferramenta | Função | Quando Usar |
|------------|--------|-------------|
| **Read** | Lê conteúdo de arquivo | Ver código, configs, docs |
| **Glob** | Busca arquivos por padrão | Encontrar `*.py`, `src/**/*.ts` |
| **Grep** | Busca conteúdo em arquivos | Encontrar onde função é usada |

### Ferramentas de Escrita

| Ferramenta | Função | Quando Usar |
|------------|--------|-------------|
| **Write** | Cria/sobrescreve arquivo | Arquivos novos |
| **Edit** | Modifica trecho de arquivo | Mudanças cirúrgicas |

### Ferramentas de Execução

| Ferramenta | Função | Quando Usar |
|------------|--------|-------------|
| **Bash** | Executa comandos no terminal | Git, npm, pytest, etc. |

### Ferramentas de Delegação

| Ferramenta | Função | Quando Usar |
|------------|--------|-------------|
| **Task** | Cria subagente para tarefa | Tarefas complexas, paralelas |

---

## Como o Agente Decide Qual Ferramenta Usar?

O LLM lê a **descrição** de cada ferramenta disponível e decide qual usar baseado no contexto.

```
Usuário: "Mostre o conteúdo do arquivo config.py"

Pensamento do Agente:
  - Preciso mostrar conteúdo de arquivo
  - Ferramenta Read: "Lê conteúdo de um arquivo" ✓
  - Vou usar Read com file_path="config.py"
```

**Insight:** A qualidade da descrição da ferramenta afeta diretamente a capacidade do agente de usá-la corretamente.

---

## O Ciclo Ferramenta

```
     ┌──────────────┐
     │   Usuário    │
     │   pergunta   │
     └──────┬───────┘
            ▼
     ┌──────────────┐
     │  LLM pensa   │
     │  e escolhe   │
     │  ferramenta  │
     └──────┬───────┘
            ▼
     ┌──────────────┐
     │  Ferramenta  │
     │   executa    │
     └──────┬───────┘
            ▼
     ┌──────────────┐
     │  Resultado   │
     │  volta pro   │
     │     LLM      │
     └──────┬───────┘
            ▼
     ┌──────────────┐
     │  LLM processa│
     │  resultado e │
     │   responde   │
     └──────────────┘
```

Este ciclo pode repetir múltiplas vezes em uma única interação. O agente pode:
1. Ler um arquivo (Read)
2. Processar o que leu
3. Editar o arquivo (Edit)
4. Executar teste (Bash)
5. Ler resultado do teste
6. Responder ao usuário

---

## Analogia: O Agente como Artesão

Pense no agente como um artesão:
- O **LLM** é o conhecimento e raciocínio do artesão
- As **ferramentas** são suas ferramentas físicas (martelo, serra, etc.)
- O **system prompt** é sua formação e estilo

Um marceneiro (prompt de marceneiro) com as mesmas ferramentas de um carpinteiro produz trabalhos diferentes. E um marceneiro sem ferramentas apenas descreve o que faria.

---

# SEÇÃO 3: Skills - Conhecimento Encapsulado (8 min)

## O Problema: Conhecimento Complexo

Algumas tarefas exigem conhecimento especializado que não cabe no system prompt:

- Procedimentos com muitos passos
- Regras de domínio específico
- Documentação de referência
- Scripts auxiliares

Colocar tudo no system prompt causaria:
1. Prompt gigante (caro e lento)
2. Informação irrelevante na maioria das conversas
3. Difícil manutenção

---

## A Solução: Skills

Uma **skill** é conhecimento encapsulado que o agente carrega **sob demanda**.

```
┌─────────────────────────────────────────────────────────┐
│                        SKILL                            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │               IDENTIDADE                         │   │
│  │  Quem sou, para que sirvo, quando me usar        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              INSTRUÇÕES                          │   │
│  │  Passos detalhados de como executar              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │             CONHECIMENTO                         │   │
│  │  Regras, referências, exemplos                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              SCRIPTS                             │   │
│  │  Código auxiliar (opcional)                      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Diferença Crucial: Skill vs Ferramenta

| Aspecto | Ferramenta | Skill |
|---------|------------|-------|
| Natureza | Código executável | Documentação |
| Como funciona | Agente invoca função | Agente lê e segue instruções |
| Flexibilidade | Rígida (faz exatamente o programado) | Flexível (agente interpreta) |
| Exemplo | `Read(file_path)` | "Como fazer code review" |

**Analogia:**
- Ferramenta = Calculadora (você aperta botões, ela executa)
- Skill = Manual de procedimentos (você lê e segue)

---

## Anatomia de uma Skill

Uma skill bem estruturada tem componentes claros:

```yaml
# Frontmatter (metadados)
---
name: revisor-codigo
description: Revisa código seguindo boas práticas
triggers:
  - "revisar código"
  - "code review"
tools:
  - Read
  - Grep
---
```

```xml
<!-- Corpo da Skill -->

<identidade>
Você é um revisor de código experiente, focado em encontrar
bugs, problemas de segurança e oportunidades de melhoria.
</identidade>

<proposito>
Garantir qualidade de código antes de merge, identificando
problemas que testes automatizados não pegam.
</proposito>

<quando_usar>
- Antes de criar PR
- Após implementar feature complexa
- Quando código parece "estranho"
</quando_usar>

<instrucoes>
<passo numero="1" nome="Entender Contexto">
Leia o código completo e entenda o que ele faz.
Não comece a criticar antes de entender.
</passo>

<passo numero="2" nome="Verificar Bugs">
Procure por:
- Null pointer exceptions
- Off-by-one errors
- Race conditions
</passo>

<passo numero="3" nome="Verificar Segurança">
Procure por:
- SQL injection
- XSS
- Secrets hardcoded
</passo>
</instrucoes>

<conhecimento>
## Severidade de Issues

| Nível | Descrição | Ação |
|-------|-----------|------|
| CRÍTICO | Causa crash ou vulnerabilidade | Bloqueia merge |
| ALTO | Bug provável | Deve corrigir |
| MÉDIO | Code smell | Deveria corrigir |
| BAIXO | Estilo | Opcional |
</conhecimento>
```

---

## Como Skills são Carregadas

Skills não ficam na memória o tempo todo. São carregadas quando relevantes:

```
┌─────────────────┐
│ Usuário pede    │
│ "revise esse    │
│  código"        │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Sistema detecta │
│ trigger da skill│
│ "revisor-codigo"│
└────────┬────────┘
         ▼
┌─────────────────┐
│ Skill é lida    │
│ e adicionada    │
│ ao contexto     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Agente segue    │
│ instruções da   │
│ skill           │
└─────────────────┘
```

Isso é chamado **progressive disclosure** — o agente só recebe informação quando precisa.

---

## Vantagens das Skills

1. **Modularidade:** Cada skill é independente
2. **Manutenibilidade:** Atualizar skill não afeta o resto
3. **Eficiência:** Só carrega quando precisa
4. **Especialização:** Skills podem ser muito detalhadas em seu domínio
5. **Reutilização:** Mesma skill usada em diferentes contextos

---

## Skills no Claude Code

No Claude Code, skills ficam em `.claude/skills/`:

```
.claude/skills/
├── pje-download/
│   ├── SKILL.md          # Instruções principais
│   ├── references/       # Documentação de apoio
│   └── scripts/          # Código auxiliar
├── converter-pdf/
│   ├── SKILL.md
│   └── scripts/
└── revisor-slides/
    ├── SKILL.md
    └── references/
```

Cada pasta é uma skill completa e auto-contida.

---

# SEÇÃO 4: MCPs - Extensões Padronizadas (5 min)

## O Problema: Integração com Sistemas Externos

Às vezes o agente precisa interagir com sistemas externos:
- APIs de terceiros
- Bancos de dados
- Serviços web
- Dispositivos

Criar ferramentas customizadas para cada integração é trabalhoso e não-padronizado.

---

## A Solução: Model Context Protocol (MCP)

**MCP** é um protocolo padronizado que permite ao agente se conectar a **servidores de ferramentas**.

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   AGENTE    │────▶│   MCP       │────▶│  SISTEMA    │
│             │◀────│   Server    │◀────│  EXTERNO    │
└─────────────┘     └─────────────┘     └─────────────┘
                    (intermediário)
```

O MCP Server:
1. Expõe ferramentas em formato padronizado
2. Traduz chamadas do agente para o sistema externo
3. Retorna resultados em formato que o agente entende

---

## Diferença: MCP vs Ferramenta Nativa

| Aspecto | Ferramenta Nativa | MCP |
|---------|-------------------|-----|
| Onde roda | Dentro do agente | Servidor separado |
| Quem cria | Desenvolvedor do agente | Qualquer pessoa |
| Protocolo | Específico do agente | Padronizado |
| Exemplos | Read, Write, Bash | Slack, GitHub, Databases |

**Analogia:**
- Ferramenta nativa = Órgão interno (coração, pulmão)
- MCP = Dispositivo externo conectado (smartwatch, prótese)

---

## Exemplo: MCPs no SuperJurista

O SuperJurista usa MCPs para acessar bases jurídicas:

| MCP Server | Sistema Externo | Ferramentas Expostas |
|------------|-----------------|----------------------|
| `bnp-api` | Banco Nacional de Precedentes | buscar_precedentes, gerar_relatorio |
| `cjf-jurisprudencia` | Portal CJF | buscar_jurisprudencia_cjf |
| `julia-trf5` | Sistema JULIA | buscar_julia, relatorio_segundo_grau |
| `claude-in-chrome` | Navegador Chrome | navigate, click, read_page |

Quando o agente precisa pesquisar jurisprudência:

```
Agente: "Preciso buscar precedentes sobre dano moral"
        ↓
[Chama mcp__bnp-api__buscar_precedentes]
        ↓
MCP Server traduz para API do BNP
        ↓
Resultado volta em formato padronizado
        ↓
Agente processa e usa
```

---

## Por que MCP é Importante?

1. **Ecossistema:** Qualquer pessoa pode criar MCP servers
2. **Reutilização:** Um MCP server serve múltiplos agentes
3. **Separação:** Lógica de integração fica fora do agente
4. **Padronização:** Todos MCPs funcionam da mesma forma

---

# SEÇÃO 5: Subagentes - Delegação com Isolamento (8 min)

## O Problema: Tarefas Complexas

Algumas tarefas são complexas demais para o agente principal:
- Exigem muitos passos
- Precisam de especialização diferente
- Podem ser paralelizadas
- Precisam de contexto isolado

---

## A Solução: Subagentes

Um **subagente** é um agente criado pelo agente principal para executar uma tarefa específica.

```
┌────────────────────────────────────────┐
│          AGENTE PRINCIPAL              │
│                                        │
│   "Preciso analisar 3 arquivos"        │
│                                        │
│         ┌─────────────┐                │
│         │  Task tool  │                │
│         └──────┬──────┘                │
│                │                       │
└────────────────┼───────────────────────┘
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
   ┌────────┐ ┌────────┐ ┌────────┐
   │ Sub 1  │ │ Sub 2  │ │ Sub 3  │
   │arq1.py │ │arq2.py │ │arq3.py │
   └────────┘ └────────┘ └────────┘
   (isolado)  (isolado)  (isolado)
```

---

## Diferença Fundamental: Agente vs Subagente

Esta é uma das distinções mais importantes em sistemas agênticos:

| Aspecto | Agente | Subagente |
|---------|--------|-----------|
| **Contexto** | Vê toda a conversa | Contexto isolado |
| **Interação** | Fala com usuário | Fala só com agente pai |
| **Vida** | Persiste na sessão | Nasce, executa, morre |
| **Propósito** | Geral | Tarefa específica |
| **Criação** | Existe desde o início | Criado sob demanda |

**Analogia:**

- **Agente** = Gerente de projeto (conhece tudo, coordena, fala com cliente)
- **Subagente** = Especialista contratado (recebe briefing específico, entrega resultado, vai embora)

---

## O Isolamento de Contexto

O isolamento é proposital e crucial:

```
AGENTE PRINCIPAL
  Contexto: [mensagem1, mensagem2, mensagem3, ...]

  Cria subagente com Task tool:
    prompt: "Analise o arquivo X e retorne os bugs"

SUBAGENTE
  Contexto: [apenas o prompt recebido]

  NÃO vê: mensagem1, mensagem2, mensagem3...
  APENAS vê: "Analise o arquivo X e retorne os bugs"
```

### Por que isolar?

1. **Foco:** Subagente não se distrai com contexto irrelevante
2. **Segurança:** Informações sensíveis não vazam
3. **Eficiência:** Menos tokens processados
4. **Paralelismo:** Subagentes independentes podem rodar em paralelo

---

## Como Criar Subagentes no Claude Code

A ferramenta **Task** cria subagentes:

```
Task(
  prompt: "Explore o diretório src/ e liste todos os
           componentes React",
  subagent_type: "Explore",
  model: "haiku"  # opcional
)
```

Parâmetros importantes:
- **prompt:** A tarefa a executar
- **subagent_type:** Tipo de agente especializado
- **model:** Modelo a usar (herda do pai se omitido)

---

## Tipos de Subagentes no Claude Code

| Tipo | Especialização | Ferramentas |
|------|----------------|-------------|
| `Explore` | Busca e descobre informação | Glob, Grep, Read |
| `Plan` | Desenha estratégia | Read, Glob, Grep |
| `Bash` | Executa comandos | Bash |
| `general-purpose` | Uso geral | Todas |

---

## Padrão: Orquestrador + Subagentes

Em sistemas mais complexos, temos um padrão recorrente:

```
┌─────────────────────────────────────────┐
│            ORQUESTRADOR                 │
│                                         │
│  - Não executa tarefas                  │
│  - Delega para subagentes               │
│  - Coordena sequência                   │
│  - Valida resultados                    │
│                                         │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────┼─────────┐
         ▼         ▼         ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ Etapa 1 │ │ Etapa 2 │ │ Etapa 3 │
    │ (sub)   │ │ (sub)   │ │ (sub)   │
    └─────────┘ └─────────┘ └─────────┘
```

O orquestrador é um agente que **só coordena** — ele não faz o trabalho, ele delega.

---

## Exemplo Concreto: Pipeline de Sentença

No SuperJurista, o pipeline de sentença usa este padrão:

```
/pipeline-sentenca
      │
      ▼
┌─────────────────┐
│  Orquestrador   │
│  (command)      │
└────────┬────────┘
         │
         ├──▶ [Sub] Linha do Tempo
         │         ↓
         ├──▶ [Sub] Relatório
         │         ↓
         ├──▶ [Sub] Análise
         │         ↓
         ├──▶ [Sub] Fundamentação
         │         ↓
         └──▶ [Sub] Merge Final
```

Cada subagente:
- Recebe apenas o que precisa
- Produz um artefato específico
- Não conhece os outros subagentes

---

# SEÇÃO 6: Tipos de Agentes - Especialização (7 min)

## Por que Especializar?

Assim como humanos se especializam em profissões, agentes podem ser especializados para tarefas específicas. A especialização traz:

1. **Melhor desempenho:** Prompt otimizado para a tarefa
2. **Ferramentas certas:** Só as necessárias
3. **Modelo adequado:** Haiku para simples, Opus para complexo

---

## Tipos Comuns de Agentes

### 1. Explorador (Explorer)

**Função:** Busca e descobre informação no codebase.

```
┌─────────────────────────────────────┐
│          EXPLORADOR                 │
├─────────────────────────────────────┤
│ Prompt: "Você é especialista em     │
│ navegação de código. Encontre       │
│ informações sem modificar nada."    │
├─────────────────────────────────────┤
│ Ferramentas: Glob, Grep, Read, LS   │
├─────────────────────────────────────┤
│ Modelo típico: Haiku (rápido)       │
└─────────────────────────────────────┘
```

**Quando usar:**
- "Onde está a função X?"
- "Quais arquivos importam Y?"
- "Como funciona o módulo Z?"

---

### 2. Planejador (Planner)

**Função:** Analisa problema e desenha estratégia antes de agir.

```
┌─────────────────────────────────────┐
│          PLANEJADOR                 │
├─────────────────────────────────────┤
│ Prompt: "Você analisa problemas e   │
│ cria planos de implementação.       │
│ Não implemente, apenas planeje."    │
├─────────────────────────────────────┤
│ Ferramentas: Read, Glob, Grep       │
│ (sem Write, Edit)                   │
├─────────────────────────────────────┤
│ Modelo típico: Sonnet ou Opus       │
└─────────────────────────────────────┘
```

**Quando usar:**
- Antes de mudanças grandes
- Quando há múltiplas abordagens possíveis
- Para validar viabilidade

---

### 3. Executor (Implementer)

**Função:** Implementa código seguindo um plano.

```
┌─────────────────────────────────────┐
│           EXECUTOR                  │
├─────────────────────────────────────┤
│ Prompt: "Você implementa código     │
│ seguindo planos definidos.          │
│ Foque em código limpo e testável."  │
├─────────────────────────────────────┤
│ Ferramentas: Read, Write, Edit, Bash│
├─────────────────────────────────────┤
│ Modelo típico: Sonnet               │
└─────────────────────────────────────┘
```

**Quando usar:**
- Após planejamento aprovado
- Para implementar features
- Para corrigir bugs

---

### 4. Revisor (Reviewer)

**Função:** Valida qualidade e identifica problemas.

```
┌─────────────────────────────────────┐
│           REVISOR                   │
├─────────────────────────────────────┤
│ Prompt: "Você revisa código com     │
│ olhar crítico. Identifique bugs,    │
│ vulnerabilidades e melhorias."      │
├─────────────────────────────────────┤
│ Ferramentas: Read, Grep             │
│ (sem escrita - só lê)               │
├─────────────────────────────────────┤
│ Modelo típico: Opus (análise prof.) │
└─────────────────────────────────────┘
```

**Quando usar:**
- Antes de merge/PR
- Após implementação complexa
- Para auditoria de segurança

---

## Composição de Tipos

Tipos podem ser combinados em workflows:

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│ Explorador │────▶│ Planejador │────▶│  Executor  │
│ (entende)  │     │ (desenha)  │     │(implementa)│
└────────────┘     └────────────┘     └─────┬──────┘
                                            │
                                            ▼
                                     ┌────────────┐
                                     │  Revisor   │
                                     │ (valida)   │
                                     └────────────┘
```

Cada tipo contribui com sua especialização.

---

# SEÇÃO 7: Workflows - Padrões de Orquestração (8 min)

## O que é um Workflow?

Um **workflow** define como múltiplos agentes colaboram para completar uma tarefa. É a "coreografia" do sistema.

---

## Padrão 1: Pipeline (Sequencial)

Agentes executam em sequência, cada um passando resultado para o próximo.

```
┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐
│  A  │────▶│  B  │────▶│  C  │────▶│  D  │
└─────┘     └─────┘     └─────┘     └─────┘
  │           │           │           │
  ▼           ▼           ▼           ▼
 out1       out2        out3       out4
```

**Características:**
- Ordem importa
- Cada etapa depende da anterior
- Fácil de debugar (etapa por etapa)
- Determinístico

**Exemplo:** Pipeline de sentença
```
Extração → Relatório → Análise → Fundamentação → Merge
```

**Quando usar:**
- Tarefas com dependências claras
- Quando ordem de execução é crítica
- Para garantir rastreabilidade

---

## Padrão 2: Fan-Out/Fan-In (Paralelo)

Múltiplos agentes trabalham em paralelo, resultados são consolidados.

```
                    ┌─────┐
               ┌───▶│  A  │───┐
               │    └─────┘   │
┌─────────┐    │    ┌─────┐   │    ┌─────────┐
│ Dispatch│────┼───▶│  B  │───┼───▶│ Collect │
└─────────┘    │    └─────┘   │    └─────────┘
               │    ┌─────┐   │
               └───▶│  C  │───┘
                    └─────┘
```

**Características:**
- Execução paralela
- Reduz tempo total
- Agentes independentes
- Precisa de consolidação

**Exemplo:** Pesquisa em múltiplas bases
```
Dispatch ──┬──▶ Pesquisar BNP    ──┬──▶ Consolidar
           ├──▶ Pesquisar CJF    ──┤
           └──▶ Pesquisar JULIA  ──┘
```

**Quando usar:**
- Tarefas independentes
- Quando tempo é crítico
- Para agregar múltiplas fontes

---

## Padrão 3: Roteador (Router)

Um agente decide qual especialista deve tratar a tarefa.

```
                    ┌─────┐
               ┌───▶│  A  │
               │    └─────┘
┌─────────┐    │    ┌─────┐
│ Router  │────┼───▶│  B  │  (apenas 1 é acionado)
└─────────┘    │    └─────┘
               │    ┌─────┐
               └───▶│  C  │
                    └─────┘
```

**Características:**
- Classificação antes de execução
- Só um caminho é seguido
- Otimiza recursos
- Requer boa classificação

**Exemplo:** Roteador de complexidade
```
Router analisa caso:
  - TRIVIAL → Pipeline simples
  - PADRÃO  → Pipeline completo
  - COMPLEXO → Pipeline + revisão humana
```

**Quando usar:**
- Casos com tratamentos diferentes
- Para otimizar recursos
- Quando especialização importa

---

## Padrão 4: Worker Pool

Fila de tarefas processada por pool de workers idênticos.

```
┌───────────────────────────────────────────┐
│              TASK QUEUE                   │
│  [task1] [task2] [task3] [task4] [task5]  │
└─────────────────────┬─────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   ┌─────────┐   ┌─────────┐   ┌─────────┐
   │ Worker  │   │ Worker  │   │ Worker  │
   └─────────┘   └─────────┘   └─────────┘
```

**Características:**
- Workers idênticos e intercambiáveis
- Escala horizontalmente
- Balanceamento automático
- Tolerante a falhas

**Exemplo:** Processar múltiplos documentos
```
Queue: [doc1, doc2, doc3, doc4, ...]
Workers pegam da fila e processam independentemente
```

**Quando usar:**
- Muitas tarefas similares
- Necessidade de escalabilidade
- Processamento em batch

---

## Padrão 5: Supervisor (Hierárquico)

Supervisor monitora workers e intervém quando necessário.

```
          ┌────────────┐
          │ Supervisor │
          └─────┬──────┘
                │ monitora
        ┌───────┼───────┐
        ▼       ▼       ▼
   ┌────────┐ ┌────────┐ ┌────────┐
   │Worker 1│ │Worker 2│ │Worker 3│
   └────────┘ └────────┘ └────────┘
```

**Características:**
- Supervisor não executa, supervisiona
- Pode realocar tarefas
- Trata erros e exceções
- Garante completude

**Quando usar:**
- Tarefas que podem falhar
- Necessidade de monitoramento
- Workflows longos

---

## Comparativo de Padrões

| Padrão | Quando Usar | Trade-off |
|--------|-------------|-----------|
| Pipeline | Dependências sequenciais | Simples, mas sem paralelismo |
| Fan-Out | Tarefas independentes | Rápido, mas precisa consolidar |
| Router | Casos com tratamentos diferentes | Eficiente, mas precisa classificar bem |
| Workers | Muitas tarefas similares | Escalável, mas overhead de coordenação |
| Supervisor | Tarefas que podem falhar | Robusto, mas mais complexo |

---

# SEÇÃO 8: Commands - Interface com o Usuário (5 min)

## O que são Commands?

**Commands** são os pontos de entrada que o usuário usa para acionar funcionalidades do sistema. São a "interface" do sistema agêntico.

```
┌──────────┐     ┌─────────────┐     ┌────────────────┐
│ Usuário  │────▶│  /comando   │────▶│  Orquestrador  │
│          │     │             │     │  ou Agente     │
└──────────┘     └─────────────┘     └────────────────┘
```

---

## Commands no Claude Code

No Claude Code, commands são definidos em `.claude/commands/`:

```
.claude/commands/
├── pipeline-sentenca.md      # /pipeline-sentenca
├── relatar-processo.md       # /relatar-processo
├── criar-agente.md           # /criar-agente
└── pipeline-pesquisa.md      # /pipeline-pesquisa
```

O nome do arquivo (sem extensão) vira o comando.

---

## Anatomia de um Command

```markdown
---
# Frontmatter (metadados opcionais)
description: Pipeline completo de sentença judicial
---

# Corpo do Command

$ARGUMENTS representa os argumentos passados pelo usuário.

## Instruções

1. Calcule o workspace baseado em $ARGUMENTS
2. Execute etapa 1: Linha do Tempo
3. Valide resultado
4. Execute etapa 2: Relatório
...
```

---

## Commands vs Skills

| Aspecto | Command | Skill |
|---------|---------|-------|
| Como aciona | `/nome` explícito | Detecção automática ou manual |
| Propósito | Entry point de workflow | Conhecimento/comportamento |
| Complexidade | Geralmente orquestra | Geralmente executa |
| Localização | `.claude/commands/` | `.claude/skills/` |

**Analogia:**
- Command = Botão no painel (usuário aperta)
- Skill = Habilidade do operador (usada quando necessário)

---

## Exemplo: /pipeline-sentenca

```
Usuário digita: /pipeline-sentenca 0800123-45.2024.4.05.8100

O que acontece:
1. Claude Code encontra .claude/commands/pipeline-sentenca.md
2. Lê o conteúdo do command
3. Substitui $ARGUMENTS pelo número do processo
4. Executa as instruções (orquestração)
5. Cada etapa cria subagente via Task tool
6. Resultado final é entregue ao usuário
```

---

## Boas Práticas para Commands

1. **Nome descritivo:** `/pipeline-sentenca` não `/ps`
2. **Documentar parâmetros:** O que $ARGUMENTS espera?
3. **Validar entrada:** Verificar se argumentos são válidos
4. **Feedback progressivo:** Informar usuário sobre progresso
5. **Tratamento de erro:** O que fazer se etapa falha?

---

# SEÇÃO 9: Síntese - Visão Integrada (5 min)

## O Mapa Completo

Agora que vimos cada componente, vejamos como se integram:

```
┌─────────────────────────────────────────────────────────────────┐
│                     SISTEMA AGÊNTICO                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    INTERFACE                             │   │
│  │  /commands ──────────────────────────────────────────▶  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│                              ▼                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               AGENTE PRINCIPAL                           │   │
│  │  ┌──────────┐  ┌─────────┐  ┌─────────────────────────┐ │   │
│  │  │  Prompt  │  │   LLM   │  │      FERRAMENTAS        │ │   │
│  │  └──────────┘  └─────────┘  │  Read, Write, Edit,     │ │   │
│  │                             │  Bash, Glob, Grep,      │ │   │
│  │                             │  Task, WebFetch...      │ │   │
│  │                             └─────────────────────────┘ │   │
│  └────────────────────────────────┬────────────────────────┘   │
│                                   │                             │
│            ┌──────────────────────┼───────────────────┐        │
│            │                      │                   │        │
│            ▼                      ▼                   ▼        │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐  │
│  │     SKILLS       │  │   SUBAGENTES     │  │    MCPs     │  │
│  │                  │  │                  │  │             │  │
│  │ .claude/skills/  │  │   Task tool      │  │ Servidores  │  │
│  │                  │  │   spawns:        │  │ externos    │  │
│  │ - revisor-slides │  │   - Explorador   │  │             │  │
│  │ - pje-download   │  │   - Planejador   │  │ - bnp-api   │  │
│  │ - converter-pdf  │  │   - Executor     │  │ - cjf       │  │
│  │                  │  │   - Revisor      │  │ - julia     │  │
│  └──────────────────┘  └──────────────────┘  └─────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    WORKFLOWS                             │   │
│  │                                                          │   │
│  │  Pipeline ─────▶ Fan-Out ─────▶ Router ─────▶ Workers   │   │
│  │  (sequencial)    (paralelo)     (decisão)    (pool)     │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Resumo dos Componentes

| Componente | O que é | Para que serve |
|------------|---------|----------------|
| **Agente** | LLM + Prompt + Tools | Unidade que pensa e age |
| **Ferramenta** | Função invocável | Ação específica no mundo |
| **Skill** | Documentação estruturada | Conhecimento especializado |
| **MCP** | Servidor de ferramentas | Integração com externos |
| **Subagente** | Agente delegado | Tarefa específica isolada |
| **Tipo de Agente** | Especialização | Otimização para função |
| **Workflow** | Padrão de colaboração | Orquestração de agentes |
| **Command** | Entry point | Interface com usuário |

---

## A Metáfora Final: A Empresa

Pense no sistema agêntico como uma empresa:

| Empresa | Sistema Agêntico |
|---------|------------------|
| CEO | Agente principal |
| Funcionários | Subagentes |
| Departamentos | Tipos de agentes |
| Processos | Workflows |
| Ferramentas | Tools |
| Manuais | Skills |
| Fornecedores | MCPs |
| Recepção | Commands |

O CEO (agente principal) recebe demandas pela recepção (commands), consulta manuais (skills) quando precisa, delega para funcionários especializados (subagentes), que usam ferramentas (tools) e contratam fornecedores (MCPs) quando necessário, tudo seguindo processos definidos (workflows).

---

## Próximos Passos

Com essa anatomia clara, você pode:

1. **Identificar componentes** em sistemas existentes
2. **Desenhar arquiteturas** para novos sistemas
3. **Escolher padrões** adequados para cada problema
4. **Debugar** entendendo onde cada parte atua

Na próxima aula, veremos como **implementar** cada um desses componentes na prática.

---

## Checklist de Compreensão

Antes de prosseguir, verifique se consegue responder:

- [ ] Qual a diferença entre agente e subagente?
- [ ] Quando usar skill vs ferramenta?
- [ ] O que é MCP e quando usar?
- [ ] Quais os tipos de agentes e quando usar cada um?
- [ ] Quais os padrões de workflow e seus trade-offs?
- [ ] Como commands se relacionam com o resto?

Se algum ponto ficou nebuloso, revisite a seção correspondente.

---

## Referências

- Anthropic: Building Effective Agents (2024)
- LlamaIndex: Files Are All You Need
- Vercel: How to Build Agents with Filesystems and Bash
- Claude Code Documentation
