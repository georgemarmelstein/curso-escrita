# Aula 11 - RAG e a Lógica dos Anexos

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 7

---

## Slide 1 - Capa

**RAG: BUSCA WEB, RESOURCES E A LÓGICA DOS ANEXOS**

George Marmelstein

---

## Slide 2 - O Conhecimento da Máquina

**O CONHECIMENTO DA MÁQUINA**

### Conhecimento Paramétrico
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

### Conhecimento de Sistema
- "Código de conduta"
- Recursos
- Guardrails

### Conhecimento Externo
- Contextual
- Dinâmico
- Limitado (tamanho)

---

## Slide 3 - RAG – Retrieval Augmented Generation

**RAG – RETRIEVAL AUGMENTED GENERATION**
*(Geração Aumentada por Recuperação)*

### 1. CONCEITO
- É a técnica que permite que o LLM busque conteúdo relevante em uma base de conhecimento para usá-lo como contexto da geração de texto.

### 2. BASE DE CONHECIMENTO
- O RAG pode envolver uma base de conhecimento anexada pelo usuário ou uma base externa na web ou em APIs proprietárias (MCP).

### 3. VANTAGENS
- Mitigar alucinações
- Personalização
- Controle de fonte
- Atualização dinâmica
- Otimização de tokens

### 4. FALHAS COMUNS
- O Sistema vê apenas fragmentos e não documentos inteiros.
- O LLM pode não ativar a busca adequadamente
- Pode haver interpretação equivocada do texto
- Quanto mais longo o documento, maior a degradação do contexto

---

## Slide 4 - Duas Técnicas de Anexos

**DUAS TÉCNICAS ANEXOS**

### Just-in-time
- Todas as "cartas" são abertas e jogadas na janela de contexto.
- **Vantagem:** analisa com detalhes todo o texto com perda mínima.
- **Desvantagem:** limitado à janela de contexto.
- **Uso:** para documentos pequenos, o LLM tende a usar essa técnica por padrão.

### Just-in-case
- As "cartas" ficam fechadas e são consultadas sob demanda.
- **Vantagem:** analisa textos maiores do que a janela de contexto.
- **Desvantagem:** pode perder detalhes.
- **Uso:** para documentos grandes, o LLM tende a usar essa técnica por padrão.

---

## Slide 5 - Fontes de Conhecimento

**FONTES DE CONHECIMENTO**

### Anexo do Usuário
- Cada modelo tem a própria lógica de anexos, nem sempre de forma transparente.
- A técnica de análise pode mudar com tipo e com o tamanho do documento. TXT ou MD é o padrão ouro.
- Bons prompts são essenciais para garantir precisão na análise.
- O ideal é desativar a ferramenta de busca para análises de processo.

### Busca na Web
- Cada modelo tem sua própria técnica de busca web, com mais ou menos autonomia.
- Há dois tipos de busca: busca simples e deep research.

### Resources (MCP)
- Resource é uma técnica cada vez melhor de personalizar a base de conhecimento.
- O ideal é estruturar as bases de conhecimento em formato MD para otimizar a busca.
- Quase todos os serviços de nuvem podem ser acoplados nos LLMs.

---

## Slide 6 - Prompt para Anexos

**PROMPT - ANEXOS**

> Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações contraditórias. Por isso, faça uma leitura holística para captar todos os pontos controvertidos e todas as questões jurídicas na sua profundidade e totalidade.
>
> Sua análise deve se basear exclusivamente nos documentos fornecidos. Você escreve de modo didático e preciso, com rigor metodológico. **USE EXCLUSIVAMENTE** as evidências, fatos e informações contidos no documento fornecido. **PROIBIÇÃO ABSOLUTA** de incorporar elementos probatórios ou factuais de fontes externas. SOMENTE USE OS ELEMENTOS PROBATÓRIOS DO CASO FORNECIDO.
>
> Para PDFs digitalizados, ative ferramentas adequadas de Reconhecimento Óptico de Caracteres (OCR), garantindo a extração completa e precisa do conteúdo textual. Se o documento apresentar layout complexo (com tabelas, gráficos ou elementos visuais relevantes), utilize análise visual multimodal para interpretar corretamente todos os componentes. Empregue os recursos necessários para compreender e extrair o texto presente em imagens ou conteúdos embutidos visualmente. O objetivo é assegurar uma interpretação jurídica rigorosa, lógica e completa de todo o material fornecido. Se análise ficar prejudicada pela impossibilidade de leitura de todo o documento, informe isso em sua resposta.

---

## Slide 7 - Síntese

### SÍNTESE

**RAG**
- RAG é uma técnica para buscar conhecimento de uma base externa para enriquecer o contexto antes da resposta.

**MCP**
- O MCP ou Model Context Protocol é um protocolo para modelos de IA conectarem-se a bases externas, de forma padronizada.

**IMPLICAÇÕES**
- É preciso entender qual o tipo de processamento da informação o modelo está fazendo. Isso nem sempre fica claro, mas é uma condição necessária para controlar a máquina.
