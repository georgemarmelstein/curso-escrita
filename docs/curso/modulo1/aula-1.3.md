# 1.3 A Janela de Contexto

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir o que é janela de contexto
- Explicar o fenômeno "lost in the middle"
- Aplicar estratégias para gerenciar contexto
- Entender que cada conversa é um novo contexto

---

## Por que Importa

**Para profissionais do Direito:**
- Processos longos podem exceder a janela de contexto
- Informação no meio do documento pode ser "esquecida"
- Saber gerenciar contexto = melhores análises

---

## Base Conceitual

### O que é Janela de Contexto?

> É a quantidade máxima de informação que um LLM consegue "ver" e processar de uma só vez.

**Analogia:** Assim como uma calculadora tem limite de dígitos, LLMs têm limite de tokens.

### Evolução da Janela de Contexto

| Fase | Tamanho | Implicação |
|------|---------|------------|
| 4k → 32k | Engenharia de Prompt | Cabe uma petição |
| 128k → 200k | Engenharia de Contexto | Cabe um processo pequeno |
| 200k → 2M | RAG necessário | Processos grandes precisam de chunking |

### O Problema: Lost in the Middle

```
┌─────────────────────────────────────────────────────────────┐
│                    ATENÇÃO DO MODELO                        │
│                                                             │
│  ████████████                              ████████████     │
│  ████████████         ░░░░░░░░             ████████████     │
│  ████████████         ░░░░░░░░             ████████████     │
│                                                             │
│     INÍCIO           MEIO (perdido)           FIM           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

LLMs prestam mais atenção ao INÍCIO e FIM do contexto.
Informação no MEIO pode ser "esquecida".
```

**Implicação prática:** Posicione informações importantes no início ou fim do prompt.

### Nova Conversa = Novo Contexto

```
CONVERSA 1                    CONVERSA 2
┌─────────────┐              ┌─────────────┐
│ Contexto A  │              │ Contexto B  │
│             │              │             │
│ - Mensagem 1│              │ - Mensagem 1│
│ - Resposta 1│              │ - Resposta 1│
│ - Mensagem 2│              │             │
└─────────────┘              └─────────────┘

NÃO há conexão entre conversas!
Cada conversa inaugura um novo contexto.
```

### Metáfora do Mochileiro

> Imagine um mochileiro que só pode carregar X kg.
>
> - **Pouca informação:** Mochila vazia, viagem incompleta
> - **Informação certa:** Mochila otimizada, viagem perfeita
> - **Excesso de informação:** Mochila pesada, cansaço, itens perdidos

---

## Exercício Prático

### Tarefa 1: Novo Contexto

**Passo a passo:**
1. Abra uma conversa e diga: `Meu nome é João e sou juiz federal.`
2. Claude responde reconhecendo
3. **Feche** a conversa e abra uma **nova**
4. Pergunte: `Qual é o meu nome?`

**O que observar:**
- Claude não sabe seu nome
- Cada conversa é independente

### Tarefa 2: Lost in the Middle

**Passo a passo:**
1. Cole um texto longo (5+ páginas)
2. No **meio** do texto, insira: `PALAVRA SECRETA: ABACAXI`
3. Peça: `Qual é a palavra secreta no texto?`

**O que observar:**
- Claude consegue encontrar?
- Repita com a palavra no início ou fim
- Compare os resultados

### Tarefa 3: Gestão de Contexto

**Passo a passo:**
```
Prompt ruim (informação no meio):
"Analise o documento anexo. [documento longo]
A questão principal é sobre prescrição.
Considere também a jurisprudência recente."

Prompt bom (informação no início):
"TAREFA: Analisar prescrição no documento.
FOCO: Jurisprudência recente sobre o tema.

[documento]

LEMBRE-SE: Foco em prescrição."
```

### Checklist de Verificação

```
[ ] Testei que conversas são independentes
[ ] Observei o fenômeno lost in the middle
[ ] Entendo o limite da janela de contexto
[ ] Sei posicionar informação importante no início/fim
```

---

## Dicas e Armadilhas

### Dica
> Para documentos longos, use a técnica "sanduíche":
> - **Início:** Instruções claras + foco principal
> - **Meio:** Documento/contexto
> - **Fim:** Reforço das instruções + formato esperado

### Dica 2
> Se a conversa ficar muito longa, inicie uma nova com um resumo do contexto relevante. Isso "reseta" a atenção do modelo.

### Armadilha
> **"Vou colocar tudo no contexto para o modelo ter mais informação."**
>
> Mais informação nem sempre é melhor!
> - Excesso causa degradação de contexto
> - Informação irrelevante distrai o modelo
> - Seja seletivo: inclua apenas o necessário

### Armadilha 2
> **"O Claude lembra do que conversamos ontem."**
>
> Não! Cada conversa é independente.
> Use a busca para encontrar conversas antigas.
> Ou use Projetos para manter contexto persistente.

---

## Recursos

### Tamanhos de Contexto (Referência)

| Modelo | Janela | Equivalente |
|--------|--------|-------------|
| GPT-3 (2020) | 4K | ~3 páginas |
| GPT-4 (2023) | 128K | ~100 páginas |
| Claude 3 (2024) | 200K | ~150 páginas |
| Gemini 1.5 (2024) | 1M+ | ~750 páginas |

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 3 - Janela de Contexto.pptx`
- Paper: Liu et al. (2023) - "Lost in the Middle"

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  JANELA DE CONTEXTO                                         │
│  → Quantidade máxima de informação que LLM processa         │
│  → Exceder causa degradação e perda de informação           │
│                                                             │
│  NOVA CONVERSA = NOVO CONTEXTO                              │
│  → LLM não lembra de conversas passadas                     │
│  → Cada conversa é como falar com outra pessoa              │
│                                                             │
│  LOST IN THE MIDDLE                                         │
│  → Informação no meio pode ser "esquecida"                  │
│  → Posicione o importante no início e fim                   │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → O segredo é dominar a camada de conteúdo                 │
│  → Para isso, entender de onde vem o conhecimento           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

A janela de contexto limita quanto o LLM pode "ver". Mas de onde vem o que ele já "sabe"?

→ Próxima: **[1.4 O Conhecimento da Máquina](./aula-1.4.md)**
