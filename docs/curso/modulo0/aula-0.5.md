# 0.5 Introdução ao Modo Agêntico

**Módulo:** 0 - Preparação
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender a diferença entre assistente e agente
- Identificar as ferramentas disponíveis no Claude
- Observar quando o Claude ativa ferramentas automaticamente
- Decidir quando forçar ou impedir uso de ferramentas

---

## Por que Importa

**Para profissionais do Direito:**
- Busca web permite acessar jurisprudência atualizada
- Artefatos permitem criar documentos estruturados
- Entender o modo agêntico ajuda a interpretar respostas
- Saber a origem da informação é crucial para verificação

---

## Base Conceitual

### A Mudança de Paradigma

```
MODELO ANTIGO (Assistente)
   Você pergunta → Modelo responde
   (conhecimento interno apenas)

MODELO ATUAL (Agente)
   Você instrui → Modelo DECIDE se precisa de ferramentas
                       │
                       ├── Precisa buscar na web? → Busca
                       ├── Precisa calcular? → Calcula
                       ├── Precisa criar documento? → Cria artefato
                       └── Não precisa? → Responde direto
```

**Diferença fundamental:** O modelo decide por conta própria quando usar ferramentas.

### Ferramentas Disponíveis

| Ferramenta | O que faz | Quando ativa |
|------------|-----------|--------------|
| **Busca web** | Pesquisa informações atualizadas | Eventos recentes, normas, jurisprudência |
| **Artefatos** | Cria documentos, tabelas, código | Pedidos de criação estruturada |
| **Cálculo** | Operações matemáticas precisas | Contas complexas |
| **Análise de dados** | Processa planilhas | Documentos com dados numéricos |
| **Pensamento prolongado** | Raciocínio mais profundo | Problemas complexos |

### Transparência do Claude

O Claude **sempre informa** quando usa uma ferramenta:
- "Buscando na web..."
- "Criando artefato..."
- "Usando ferramenta de análise..."

**Isso é importante:** Você sabe a origem da informação e pode verificar.

---

## Exercício Prático

### Tarefa 1: Busca Ativada

**Passo a passo:**
1. Abra nova conversa no Claude
2. **Ative** a ferramenta de busca (ícone de globo)
3. Pergunte: `Explique as condições de uso dos LLMs segundo a Resolução 615 do CNJ.`

**O que observar:**
- Como o Claude informa que está buscando
- Como cita e referencia as fontes
- Qualidade e atualização das informações

### Tarefa 2: Busca Desativada

**Passo a passo:**
1. Abra **nova** conversa (limpar contexto)
2. **Desative** a ferramenta de busca
3. Faça a mesma pergunta

**O que observar:**
- Compare com a resposta da Tarefa 1
- Note diferenças de precisão e atualização
- Observe se o modelo reconhece limitações

### Tarefa 3: Artefatos

**Passo a passo:**
1. Abra nova conversa
2. Peça: `Crie uma tabela com os conceitos fundamentais para entender os LLMs.`

**O que observar:**
- Se o Claude ativa artefato automaticamente
- Organização e estruturação das informações

### Tarefa 4: Cálculo

**Passo a passo:**
1. Abra nova conversa
2. Pergunte: `Quanto é 9989984719 x 70989808013?`
3. Se não ativar ferramenta, peça explicitamente
4. Compare os resultados

**O que observar:**
- Diferença entre "cálculo mental" e cálculo preciso
- Quando o modelo reconhece que precisa de ferramentas

### Checklist de Verificação

```
[ ] Testei busca web ativada
[ ] Testei busca web desativada e comparei
[ ] Vi o Claude criar um artefato
[ ] Testei cálculo com e sem ferramenta
[ ] Entendo que Claude decide automaticamente quando usar ferramentas
[ ] Percebi que Claude informa quando usa ferramentas
```

---

## Dicas e Armadilhas

### Dica
> Observe as mensagens do Claude durante o processamento. Quando você vê "Buscando..." ou "Criando artefato...", está vendo o modo agêntico em ação.

### Armadilha
> **"Vou sempre ativar todas as ferramentas para respostas melhores."**
>
> Não funciona assim. Cada ferramenta tem um propósito:
> - Busca web → informações atualizadas (mas pode trazer ruído)
> - Artefatos → documentos estruturados (mas nem tudo precisa)
>
> Deixe o Claude decidir. Intervenha apenas quando quiser forçar ou impedir.

---

## Recursos

### Resumo Visual

```
ANTES: ASSISTENTE              AGORA: AGENTE
┌─────────────────────┐       ┌─────────────────────┐
│ Pergunta → Resposta │       │  Instrução          │
│                     │       │       │             │
│ (conhecimento       │       │       ▼             │
│  interno apenas)    │       │  ┌─────────────┐    │
└─────────────────────┘       │  │ FERRAMENTAS │    │
                              │  │ • Busca     │    │
                              │  │ • Artefatos │    │
                              │  │ • Cálculo   │    │
                              │  └──────┬──────┘    │
                              │         │           │
                              │         ▼           │
                              │     Resposta        │
                              └─────────────────────┘
```

### Conceito-Chave

> O **modo agêntico** permite que LLMs usem ferramentas externas **automaticamente** para respostas mais precisas e atualizadas. O modelo não espera você pedir — ele **decide** quando precisa.

---

## Conexão

Com o Módulo 0 completo, você tem:
- ✅ Conta configurada (0.1)
- ✅ Privacidade adequada (0.2)
- ✅ Interface dominada (0.3)
- ✅ Memória/Personalização configuradas (0.4)
- ✅ Noção do modo agêntico (0.5)

Você está pronto para entender **como os LLMs funcionam** no Módulo 1.

→ Próximo: **[Módulo 1 - Fundamentos dos LLMs](../modulo1/README.md)**
