# ROTEIRO DE SUPERAULA

## Metadados
- **Tema:** A Era dos Agentes - Do Assistente ao Sistema Agêntico
- **Duração estimada:** 2 horas (~120 min)
- **Público-alvo:** Juristas (magistrados, advogados, servidores) com experiência básica em IA
- **Pré-requisitos:** Aula 00 concluída (sensibilização)
- **Ambiente:** Claude.ai (Web) + Claude Desktop + Terminal (demonstração)
- **Estrutura Narrativa:** Gladwell (Anedota → Insight)

---

## Propósito

Esta aula revela o **padrão oculto** por trás da evolução da IA: não é sobre mais poder, é sobre uma nova **arquitetura**. O aluno vai entender por que "assistentes que colaboram" são categoricamente diferentes de "assistentes mais poderosos" — e vai ver essa diferença na prática.

---

## Objetivos

**Questões centrais a serem respondidas:**
1. Por que todos os assistentes convergiram para ter as mesmas capacidades?
2. O que os agentes trazem de novo se os assistentes já fazem quase tudo?
3. Qual é o problema fundamental que os agentes resolvem?

**Ao final desta aula, o aluno será capaz de:**
- Explicar a evolução das fontes de verdade em IA (paramétrico → contextual → externo)
- Identificar o problema da janela de contexto (degradação vs colapso)
- Distinguir arquitetura de assistente vs arquitetura agêntica
- Reconhecer as capacidades e limitações do Claude Web/Desktop
- Visualizar o resultado final que vai construir (Pipeline Sentença)

---

## Visão Geral da Estrutura

| Bloco | Título | Duração | Estrutura Gladwell |
|-------|--------|---------|-------------------|
| 1 | A História: Três Paradigmas de Conhecimento | 15 min | ANEDOTA |
| 2 | O Problema Escondido: A Janela de Contexto | 15 min | PADRÃO OCULTO |
| 3 | As Soluções Agênticas | 10 min | REVELAÇÃO |
| 4 | O Claude Web/Desktop em Modo Agêntico | 30 min | VALIDAÇÃO (o que já existe) |
| 5 | As Limitações (e o que ainda falta) | 20 min | VALIDAÇÃO (os limites) |
| 6 | Mão na Massa: Mini-Workflow no Projects | 20 min | DEMONSTRAÇÃO PRÁTICA |
| 7 | O Resultado Final: Pipeline Sentença | 15 min | CONEXÃO INESPERADA |
| 8 | Fechamento | 10 min | CONCLUSÃO CONTRA-INTUITIVA |

**Tempo total:** ~135 min (ajustar conforme ritmo da turma)

---

## Blocos da Aula

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 1: A ANEDOTA                                                                -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 1: A História - Três Paradigmas de Conhecimento (15 min)

**Abertura (tom pessoal, narrativo):**

> "Lembro quando comecei a usar o ChatGPT, no final de 2022. Ele sequer tinha botão de anexo. A proposta era simples: um chat. Você conversa, ele responde. Toda fonte de conhecimento vinha de dentro — do que a máquina aprendeu no treino. Chamamos isso de **conhecimento paramétrico**."

**A ORIGEM DA IA GEN - TRÊS PARADIGMAS:**

| ChatGPT (CHAT) | Claude (ANEXO) | Perplexity (WEB) |
|----------------|----------------|------------------|
| Conhecimento Paramétrico | Conhecimento Contextual | Conhecimento Externo |
| "O que a máquina aprendeu no treino" | "O que o usuário fornece" | "O que a web sabe em tempo real" |
| Conversa pura. Limitado ao que "sabe". | Botão de anexo. Fonte de verdade = VOCÊ. | Pesquisa ao vivo. Fonte = O MUNDO. |

> "E então assistimos algo interessante: cada modelo desenvolvendo sua própria interface, sua própria lógica. ChatGPT apostando nos parâmetros. Claude apostando no contexto fornecido. Perplexity apostando na web."

**A convergência:**

> "Mas olhem hoje. ChatGPT tem anexos E busca na web. Claude tem anexos E busca na web. Perplexity tem anexos E busca na web. **Todos convergiram.** Todos têm tudo."

**Instalação da curiosidade:**

> "E então surge a era dos agentes. Mas espera... se todos já têm anexos, busca na web, raciocínio expandido... **o que os agentes trazem de novo?**"

(Pausa dramática)

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 2: O PADRÃO OCULTO                                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 2: O Problema Escondido - A Janela de Contexto (15 min)

**Revelação:**

> "O que ninguém percebeu é que, por trás de toda essa evolução, há um problema fundamental que permanece. E esse problema explica por que agentes são necessários."

**O diagrama (referência ao Excalidraw):**

```
┌─────────────────────────────────────────────────────────────────┐
│                    MODO ASSISTENTE                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Human ──▶ Input ──▶ System Prompt ──▶ Context ──▶ Output     │
│                              │                                  │
│                         User Prompt                             │
│                           + Anexo                               │
│                           + Texto                               │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │              UMA JANELA DE CONTEXTO                      │  │
│   │                                                          │  │
│   │   Tudo entra aqui: instruções, anexos, histórico,       │  │
│   │   respostas anteriores, conhecimento da web...          │  │
│   │                                                          │  │
│   │   E essa janela TEM LIMITE.                             │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**O problema revelado:**

> "Tudo no modo assistente implica no gerenciamento de **uma única janela de contexto**. Você tem ali um assistente responsável por fornecer respostas dentro de um contexto. E quando esse contexto atinge o limite?"

**Duas consequências:**

```
┌─────────────────────────────────────────────────────────────────┐
│  QUANDO O CONTEXTO ATINGE O LIMITE                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │     DEGRADAÇÃO      │   ou    │      COLAPSO        │       │
│  ├─────────────────────┤         ├─────────────────────┤       │
│  │                     │         │                     │       │
│  │  Memória móvel      │         │  "Não podemos mais  │       │
│  │  vai sendo          │         │   prosseguir."      │       │
│  │  esquecida.         │         │                     │       │
│  │                     │         │  A conversa         │       │
│  │  O início da        │         │  simplesmente       │       │
│  │  conversa se        │         │  PARA.              │       │
│  │  apaga.             │         │                     │       │
│  │                     │         │  (Claude antigo)    │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
│  Nos dois casos: PERDA DE INFORMAÇÃO CRÍTICA                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Analogia jurídica:**

> "Imaginem um assessor que você instrui no início do dia. Ele anota tudo. Mas conforme o dia avança e você dá mais instruções, as primeiras anotações vão sendo apagadas. No final do dia, ele esqueceu o que você pediu de manhã. É assim que funciona o modo assistente."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 3: A REVELAÇÃO                                                              -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 3: As Soluções Agênticas (10 min)

**A virada:**

> "E é aqui que entram os agentes. Não como 'assistentes mais poderosos', mas como uma **arquitetura diferente** para resolver exatamente esse problema."

**Solução 1: Destilação de Contexto**

```
┌─────────────────────────────────────────────────────────────────┐
│  SOLUÇÃO 1: DESTILAÇÃO                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Em vez de uma janela gigante, criar "batches" (terminais):    │
│                                                                 │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐                │
│  │ Subagente │   │ Subagente │   │ Subagente │                │
│  │ Context A │   │ Context B │   │ Context C │                │
│  └─────┬─────┘   └─────┬─────┘   └─────┬─────┘                │
│        │               │               │                       │
│        └───────────────┼───────────────┘                       │
│                        ▼                                        │
│              ┌─────────────────┐                               │
│              │  ORQUESTRADOR   │                               │
│              │                 │                               │
│              │  Recebe apenas  │                               │
│              │  CAMINHOS (paths)│                              │
│              │  não o conteúdo │                               │
│              └─────────────────┘                               │
│                                                                 │
│  Contexto longo → DESTILADO → Essência para o orquestrador    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

> "O orquestrador não recebe o conhecimento inteiro. Recebe apenas o **caminho** — onde está a informação. Cada subagente trabalha com seu contexto isolado. A destilação permite escala."

**Solução 2: Compact**

```
┌─────────────────────────────────────────────────────────────────┐
│  SOLUÇÃO 2: COMPACT                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Compactação inteligente quando o contexto enche:              │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Conversa original (100K tokens)                         │    │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │    │
│  └────────────────────────────────────────────────────────┘    │
│                          ↓ /compact                            │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Resumo estruturado (20K tokens)                         │    │
│  │ ████████████                                            │    │
│  │ + CLAUDE.md re-injetado                                 │    │
│  │ + Decisões críticas preservadas                         │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  Não é "eternização", mas CONTINUAÇÃO CONTROLADA               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

> "O Compact permite continuar a conversa sem perda crítica. É uma compactação na medida em que o contexto vai chegando ao final. Você mantém o essencial, descarta o ruído."

**O insight central:**

> "Percebem? Agentes não são assistentes com mais memória. São assistentes que **trabalham em equipe**, cada um com seu próprio contexto, coordenados por um orquestrador que só precisa saber **onde** está a informação, não **toda** a informação."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 4: VALIDAÇÃO - O QUE JÁ EXISTE                                              -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 4: O Claude Web/Desktop em Modo Agêntico (30 min)

**Transição:**

> "Agora que entendemos o problema e as soluções, vamos ver o que já existe no Claude Web e Desktop. Porque já há capacidades agênticas reais ali — mesmo com limitações."

#### 4.1 Capacidades Agênticas Atuais

| Capacidade | Web | Desktop | O que faz |
|------------|-----|---------|-----------|
| **Artifacts** | ✅ | ✅ | Gera documentos, código, visualizações |
| **Projects** | ✅ | ✅ | Contexto persistente (200K tokens) |
| **Conectores** | ✅ | ✅ | Integrações nativas com serviços |
| **MCPs** | ❌ | ✅ | Conexões customizadas |
| **Extended Thinking** | ✅ | ✅ | Raciocínio profundo |
| **Research** | ✅ | ✅ | Pesquisa na web em tempo real |
| **Análise de PDF** | ✅ | ✅ | Até 30MB, 20 arquivos |

**Demonstração:**
- Criar um novo chat
- Pedir algo que gere um Artifact
- Mostrar o Artifact sendo gerado em tempo real

#### 4.2 Conectores Nativos

> "Em 2025, o Claude ganhou conectores nativos. Ele pode acessar seus sistemas SEM que você precise copiar e colar."

| Categoria | Serviços |
|-----------|----------|
| **Google Workspace** | Gmail, Drive, Docs, Sheets, Calendar |
| **Produtividade** | Notion, Asana, Linear, Jira |
| **Comunicação** | Slack |
| **Desenvolvimento** | GitHub |
| **Design** | Figma |
| **Automação** | Zapier (3.500+ integrações) |

**Analogia jurídica:**
> "É como se seu assessor tivesse credencial para acessar o SEI, o e-mail do gabinete, e o sistema de processos — tudo ao mesmo tempo."

#### 4.3 Projects: O Proto-CLAUDE.md

> "Projects são espaços de trabalho com memória persistente. É o mais próximo que o Web chega do CLAUDE.md do terminal."

| Conceito | Projects (Web) | CLAUDE.md (Terminal) |
|----------|----------------|----------------------|
| Instruções persistentes | ✅ Custom instructions | ✅ CLAUDE.md |
| Arquivos de contexto | ✅ Anexos (200K tokens) | ✅ Arquivos do projeto (ilimitado) |
| Memória entre sessões | ⚠️ Limitada ao Project | ✅ Completa + memory.md |
| Acesso ao sistema | ❌ Não | ✅ Total |
| Execução de código | ❌ Preview apenas | ✅ Executa de verdade |

**Demonstração:**
1. Criar um novo Project
2. Adicionar instruções personalizadas
3. Anexar um arquivo de contexto
4. Mostrar a persistência entre conversas

#### 4.4 MCPs no Desktop

> "No Desktop, já podemos começar a 'dar o computador para o Claude'."

| MCP | O que faz |
|-----|-----------|
| **Filesystem** | Ler/escrever pastas e arquivos locais |
| **Chrome Extension** | Navegar, extrair dados, preencher formulários |
| **Git MCP** | Commits, branches, histórico |

**Demonstração (se disponível):**
- Mostrar o Filesystem MCP lendo uma pasta local
- Explicar: "Isso é o começo do que faremos no terminal"

---

### Bloco 5: As Limitações (20 min)

**Reconhecimento:**

> "Antes de criticar, reconhecer: o Claude Web e Desktop evoluíram muito. Conectores, análise de PDF, Extended Thinking, Research — são capacidades agênticas reais. Mas ainda há um teto."

#### 5.1 O Que o Web AINDA NÃO Consegue Fazer

| Limitação | Impacto Prático |
|-----------|-----------------|
| **Sem fluxo contínuo** | Cada tarefa é isolada, você é o middleware |
| **Sem acesso ao filesystem** | Não lê/escreve arquivos locais diretamente |
| **Sem execução de código real** | Preview apenas, não roda scripts de produção |
| **Sem paralelização** | Uma tarefa por vez, sem subagentes |
| **Sem automação completa** | Você precisa estar presente e clicar |
| **Sem subagentes verdadeiros** | Não delega para especialistas em paralelo |

#### 5.2 Demonstração das Limitações

**Cenário: Pipeline jurídico completo**

> "Vamos tentar fazer o que um sistema agêntico faz: baixar processo, converter, analisar, pesquisar precedentes, gerar minuta."

```
No Web:

1. "Baixe o processo 123 do PJE"
   → ❌ "Não tenho acesso ao PJE"

2. "Aqui está o PDF" [anexa]
   → ⚠️ Funciona, mas VOCÊ precisou baixar manualmente

3. "Analise e pesquise precedentes"
   → ⚠️ Analisa, mas pesquisa é genérica

4. "Agora gere a minuta"
   → ✅ Gera, mas sem os precedentes reais

5. "Salve no meu computador"
   → ❌ "Não tenho acesso ao seu sistema de arquivos"

O PROBLEMA: Você é o MIDDLEWARE.
Cada etapa depende de você copiar, colar, baixar, anexar.
```

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 5: DEMONSTRAÇÃO PRÁTICA                                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 6: Mão na Massa - Mini-Workflow no Projects (20 min)

**Introdução:**

> "Agora vamos colocar a mão na massa. Vamos construir um mini sistema de workflow usando Projects do Claude. A ideia é mimetizar o Pipeline Sentença — mostrar que é possível, mas com limitações."

#### 6.1 Criando o Proto-Sistema

**Passo 1: Criar um Project "Assessor Previdenciário"**

```
Custom Instructions:

Você é um assessor jurídico especializado em direito previdenciário.

WORKFLOW PADRÃO:
1. Quando receber um processo, primeiro faça o RELATÓRIO
2. Depois identifique as QUESTÕES JURÍDICAS
3. Então pesquise PRECEDENTES relevantes
4. Por fim, elabore a MINUTA

FORMATO DE SAÍDA:
- Use headers claros (## Relatório, ## Questões, etc.)
- Cite artigos de lei com precisão
- Indique quando precisar de mais informação
```

**Passo 2: Anexar contexto**
- Adicionar PDF de processo de exemplo
- Adicionar documento com template de sentença

**Passo 3: Executar o workflow**
- Pedir: "Inicie o workflow para este processo"
- Mostrar o Claude seguindo as etapas
- Apontar onde ele PARA e precisa de input manual

#### 6.2 As Limitações do Proto-Sistema

> "Funciona? Funciona. Mas observem:"

| Aspecto | Proto-Sistema (Projects) | Sistema Agêntico Real |
|---------|--------------------------|----------------------|
| Quem baixa o processo? | VOCÊ | O agente (via MCP) |
| Quem salva os arquivos? | VOCÊ (copiar/colar) | O agente (filesystem) |
| Pesquisa de precedentes | Genérica (web) | Específica (BNP, CJF, JULIA) |
| Execução | Conversa única | Pipeline com checkpoints |
| Escalabilidade | 1 processo por vez | N processos em paralelo |
| Controle | Manual | Automático com validação |

> "Este é um **proto-sistema agêntico**. Já se comporta como agente, mas com muitas limitações — em escalabilidade, controle e adaptação."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 6: CONEXÃO INESPERADA                                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 7: O Resultado Final - Pipeline Sentença (15 min)

**A conexão:**

> "Agora vou mostrar o mesmo workflow, mas no terminal. Não para ensinar — isso vem nas próximas aulas. Mas para vocês VEREM a diferença de arquitetura."

#### 7.1 O Pipeline Sentença em Ação

```
┌─────────────────────────────────────────────────────────────────┐
│                    PIPELINE SENTENÇA                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Human ──▶ /pipeline-sentenca 0000123-45.2024.4.05.8100        │
│                        │                                        │
│                        ▼                                        │
│              ┌─────────────────┐                               │
│              │  ORQUESTRADOR   │                               │
│              │  (calcula paths)│                               │
│              └────────┬────────┘                               │
│                       │                                         │
│         ┌─────────────┼─────────────┐                          │
│         ▼             ▼             ▼                          │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐                   │
│   │ Subagente │ │ Subagente │ │ Subagente │                   │
│   │ Extração  │ │ Pesquisa  │ │ Pesquisa  │                   │
│   │ linha-tempo│ │ BNP       │ │ CJF       │  ← EM PARALELO   │
│   └─────┬─────┘ └─────┬─────┘ └─────┬─────┘                   │
│         │             │             │                          │
│         └─────────────┼─────────────┘                          │
│                       ▼                                         │
│              ┌─────────────────┐                               │
│              │  CONSOLIDAÇÃO   │                               │
│              │  (merge paths)  │                               │
│              └────────┬────────┘                               │
│                       ▼                                         │
│              ┌─────────────────┐                               │
│              │  FUNDAMENTAÇÃO  │                               │
│              │  + MINUTA       │                               │
│              └────────┬────────┘                               │
│                       ▼                                         │
│                    ARTEFATO ──▶ Human (revisão)                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 7.2 A Diferença Arquitetural

> "Observem: o humano aparece nas DUAS PONTAS. No início (dá o comando) e no final (revisa). No meio, os agentes trabalham sozinhos, em paralelo, cada um com seu contexto isolado."

```
MODO ASSISTENTE:
Human → Claude → Human → Claude → Human → Claude → Output
       (você é o middleware, ping-pong constante)

MODO AGÊNTICO:
Human → Orquestrador → [Subagentes em paralelo] → Artefato → Human
       (você é o REGENTE, não o operador)
```

**Demonstração (se possível):**
- Executar o pipeline com um processo de exemplo
- Mostrar cada etapa acontecendo automaticamente
- Mostrar os arquivos sendo gerados no filesystem

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 7: CONCLUSÃO CONTRA-INTUITIVA                                               -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 8: Fechamento (10 min)

#### 8.1 O Insight Final

> "Voltemos à pergunta do início: se todos os assistentes já têm anexos, busca na web, raciocínio expandido... o que os agentes trazem de novo?"

**A conclusão contra-intuitiva:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     AGENTES NÃO SÃO ASSISTENTES MAIS PODEROSOS.                │
│                                                                 │
│     SÃO ASSISTENTES QUE COLABORAM ENTRE SI.                    │
│                                                                 │
│     E colaboram via FILESYSTEM (paths), não via                │
│     contexto compartilhado.                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

> "A diferença não é MAIS poder. É outra ARQUITETURA. Em vez de uma janela de contexto gigante que degrada ou colapsa, temos múltiplas janelas pequenas coordenadas por caminhos de arquivo."

#### 8.2 Resumo da Jornada

| O Que Aprendemos | Insight |
|------------------|---------|
| A evolução | Paramétrico → Contextual → Externo → Convergência |
| O problema | Uma janela de contexto que degrada ou colapsa |
| A solução | Destilação + Compact + Subagentes |
| O que já existe | Projects, Conectores, MCPs (Desktop) |
| O que falta | Filesystem, paralelização, automação real |
| O resultado | Pipeline com subagentes coordenados por paths |

#### 8.3 Próximos Passos

```
AULA 0: Por que mudar?                    ✅ Concluída
AULA 1: O problema e a solução            ✅ Hoje
AULA 2: Como instalar e usar o terminal   → Próxima
AULA 3: Como arquitetar sistemas
AULA 4: Como construir commands e skills
AULA 5: Como aplicar ao trabalho jurídico
```

#### 8.4 Frase de Fechamento

> "Hoje vocês viram o padrão oculto: o problema não era 'falta de poder', era 'arquitetura errada'. Na próxima aula, vamos instalar o Claude Code e entrar no mundo onde assistentes colaboram via filesystem. Onde você não é mais o middleware. Onde você é o regente."

---

## Metáforas e Analogias

| Conceito | Metáfora | Por que funciona |
|----------|----------|------------------|
| Janela de contexto | Assessor que apaga anotações antigas | Juristas entendem perda de informação |
| Destilação | Resumo executivo em vez de processo inteiro | Prática comum em gabinetes |
| Subagentes | Equipe de assessores especializados | Modelo mental familiar |
| Paths (caminhos) | Número do processo, não o processo físico | Abstração conhecida |
| Orquestrador | Juiz coordenador que distribui tarefas | Hierarquia judicial |

---

## Citações Memoráveis (Para Slides)

> "Agentes não são assistentes mais poderosos. São assistentes que colaboram."

> "O problema não era falta de poder. Era arquitetura errada."

> "Uma janela de contexto que degrada ou colapsa — esse é o problema que os agentes resolvem."

> "O orquestrador recebe CAMINHOS, não conhecimento. Essa é a destilação."

> "No modo assistente, você é o middleware. No modo agêntico, você é o regente."

---

## SuperDicas

1. **Comece pela história pessoal**
   A anedota do ChatGPT sem anexo humaniza e cria conexão. Todos viveram essa evolução.

2. **O diagrama do Excalidraw é âncora visual**
   Use-o para mostrar a diferença arquitetural. Uma imagem vale mais que explicação.

3. **O mini-workflow no Projects é crucial**
   Mostra que "dá para fazer" mas revela as limitações na prática. Aprendizado por frustração controlada.

4. **Não ensine o terminal ainda**
   Esta aula é sobre ENTENDER o problema e a solução. A prática vem na Aula 02.

---

## Erros Comuns a Evitar

| Erro | Por que acontece | Como evitar |
|------|------------------|-------------|
| Começar pela solução | Ansiedade de mostrar o terminal | Seguir a estrutura Gladwell: anedota primeiro |
| Pular o problema do contexto | Parece "técnico demais" | Usar analogia do assessor que apaga anotações |
| Demo muito longa do Web | O Web é familiar, tende a se estender | Focar nas limitações, não nas capacidades |
| Prometer demais sobre agentes | Entusiasmo excessivo | Ser honesto: é outra arquitetura, não magia |

---

## Material de Apoio

### Demonstrações Preparadas

| Demo | Recurso Necessário | Bloco |
|------|-------------------|-------|
| Evolução das interfaces | Slides com screenshots históricos | 1 |
| Diagrama Assistente vs Agêntico | Excalidraw ou versão em slides | 2 |
| Conectores em ação | Conta com Google Drive configurado | 4 |
| Project configurado | Template de instruções previdenciárias | 4 |
| Mini-workflow | Processo de exemplo + instruções | 6 |
| Pipeline Sentença | Terminal com sistema configurado | 7 |

### Checklist de Preparação do Instrutor

- [ ] Slides com a evolução ChatGPT → Claude → Perplexity
- [ ] Diagrama Excalidraw (ou versão em slides)
- [ ] Claude.ai acessível (conta Pro ou Max)
- [ ] Project "Assessor Previdenciário" pré-configurado
- [ ] PDF de processo de exemplo (10-20 páginas)
- [ ] Terminal com Pipeline Sentença pronto para demo
- [ ] Backup: gravações das demos caso falhem ao vivo

---

## Correspondência com Estrutura Gladwell

| Fase Gladwell | Bloco da Aula | Conteúdo |
|---------------|---------------|----------|
| ANEDOTA | Bloco 1 | História dos 3 paradigmas |
| CURIOSIDADE | Final do Bloco 1 | "O que os agentes trazem de novo?" |
| PADRÃO OCULTO | Bloco 2 | Problema da janela de contexto |
| REVELAÇÃO | Bloco 3 | Destilação + Compact |
| VALIDAÇÃO | Blocos 4-5 | Web/Desktop: o que existe e limites |
| DEMONSTRAÇÃO | Bloco 6 | Mini-workflow no Projects |
| CONEXÃO INESPERADA | Bloco 7 | Pipeline Sentença (a mesma tarefa, outra arquitetura) |
| CONCLUSÃO CONTRA-INTUITIVA | Bloco 8 | "Não é mais poder, é outra arquitetura" |

---

*Roteiro de SUPERAULA gerado por tutor-roteiro*
*Curso: Sistemas Agênticos para Juristas*
*Estrutura Narrativa: Gladwell (Anedota → Insight)*
*Data: 2025-01-23*
