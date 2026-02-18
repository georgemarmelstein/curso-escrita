# 2.4 Tipos de Prompt

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Os 4 Tipos de Prompts
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Classificar prompts em 4 tipos fundamentais
- Entender o conceito de rigidez vs flexibilidade
- Escolher o tipo adequado para cada tarefa
- Calibrar expectativas de acordo com o tipo

---

## Por que Importa

**Para profissionais do Direito:**
- Análise de processo requer prompt rígido
- Brainstorming permite prompt flexível
- Usar tipo errado gera resultado inadequado

**Princípio:**
> O tipo de prompt define o grau de liberdade que o modelo tem na resposta.

---

## Base Conceitual

### Os 4 Tipos de Prompt

```
┌─────────────────────────────────────────────────────────────┐
│              ESPECTRO DE RIGIDEZ                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  RÍGIDO ◄─────────────────────────────────────► FLEXÍVEL    │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ ANÁLISE  │  │ ESCRITA  │  │ CRIAÇÃO  │  │ PESQUISA │    │
│  │          │  │          │  │          │  │          │    │
│  │ Extrair  │  │ Gerar    │  │ Produzir │  │ Buscar   │    │
│  │ dados    │  │ documento│  │ conteúdo │  │ sintetizar│   │
│  │ estrutura│  │ formato  │  │ criativo │  │ fontes   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipo 1: Análise (Rígido)

**Propósito:** Extrair informações estruturadas de um documento.

| Característica | Descrição |
|----------------|-----------|
| Rigidez | Alta - formato de saída definido |
| Liberdade | Baixa - apenas extração |
| Criatividade | Nenhuma - fidelidade ao texto |
| Exemplo | Extrair partes e pedido de petição |

**Exemplo:**
```markdown
Extraia do documento:
1. Partes (autor e réu)
2. Valor da causa
3. Pedido principal
4. Fundamentos jurídicos citados

Formato: tabela com essas 4 colunas.
```

### Tipo 2: Escrita (Rígido)

**Propósito:** Gerar documento com formato específico.

| Característica | Descrição |
|----------------|-----------|
| Rigidez | Alta - estrutura predefinida |
| Liberdade | Média - escolha de palavras |
| Criatividade | Baixa - seguir modelo |
| Exemplo | Redigir petição inicial |

**Exemplo:**
```markdown
Redija uma petição inicial com:
- Qualificação das partes
- Dos fatos
- Do direito
- Dos pedidos
- Do valor da causa

Siga o modelo anexo.
```

### Tipo 3: Criação (Flexível)

**Propósito:** Produzir conteúdo criativo ou exploratório.

| Característica | Descrição |
|----------------|-----------|
| Rigidez | Baixa - diretrizes gerais |
| Liberdade | Alta - abordagem livre |
| Criatividade | Alta - inovação esperada |
| Exemplo | Brainstorming de argumentos |

**Exemplo:**
```markdown
Sugira 5 argumentos criativos para defender
a constitucionalidade da lei X.

Considere abordagens não convencionais.
```

### Tipo 4: Pesquisa (Flexível)

**Propósito:** Buscar e sintetizar informações de fontes.

| Característica | Descrição |
|----------------|-----------|
| Rigidez | Baixa - síntese livre |
| Liberdade | Alta - curadoria de fontes |
| Criatividade | Média - conexões entre fontes |
| Exemplo | Pesquisar jurisprudência |

**Exemplo:**
```markdown
Pesquise jurisprudência recente do STJ sobre
prescrição em ações de cobrança de FGTS.

Sintetize as principais teses encontradas.
```

### Matriz de Decisão

| Tarefa | Tipo | Rigidez |
|--------|------|---------|
| Extrair dados de documento | Análise | Rígido |
| Redigir petição | Escrita | Rígido |
| Gerar argumentos | Criação | Flexível |
| Buscar jurisprudência | Pesquisa | Flexível |
| Resumir processo | Análise | Rígido |
| Redigir parecer | Escrita | Rígido |
| Brainstorming teses | Criação | Flexível |
| Comparar doutrinas | Pesquisa | Flexível |

---

## Exercício Prático

### Tarefa
Classificar 10 prompts por tipo e rigidez.

### Prompts para Classificar

**Prompt 1:**
```
Extraia do acórdão: número, relator, data, ementa e dispositivo.
```

**Prompt 2:**
```
Redija contestação para ação de cobrança com prescrição.
```

**Prompt 3:**
```
Sugira teses defensivas criativas para o caso.
```

**Prompt 4:**
```
Pesquise sobre a evolução da responsabilidade civil objetiva.
```

**Prompt 5:**
```
Liste os argumentos do autor no documento anexo.
```

**Prompt 6:**
```
Elabore cláusulas contratuais para acordo trabalhista.
```

**Prompt 7:**
```
Proponha soluções para resolver o impasse na negociação.
```

**Prompt 8:**
```
Compare as posições doutrinárias sobre o tema.
```

**Prompt 9:**
```
Identifique inconsistências no depoimento da testemunha.
```

**Prompt 10:**
```
Crie uma estratégia de argumentação para o tribunal.
```

### Gabarito

| # | Tipo | Rigidez | Justificativa |
|---|------|---------|---------------|
| 1 | Análise | Rígido | Extração de dados específicos |
| 2 | Escrita | Rígido | Documento com estrutura definida |
| 3 | Criação | Flexível | Brainstorming criativo |
| 4 | Pesquisa | Flexível | Busca e síntese |
| 5 | Análise | Rígido | Extração de argumentos |
| 6 | Escrita | Rígido | Documento com formato |
| 7 | Criação | Flexível | Proposta de soluções |
| 8 | Pesquisa | Flexível | Comparação de fontes |
| 9 | Análise | Rígido | Identificação de dados |
| 10 | Criação | Flexível | Estratégia criativa |

### Checklist de Verificação

```
[ ] Sei diferenciar os 4 tipos de prompt
[ ] Entendo o conceito de rigidez
[ ] Consigo classificar prompts corretamente
[ ] Sei escolher o tipo para cada tarefa
```

---

## Dicas e Armadilhas

### Dica
> Para tarefas jurídicas que exigem precisão (análise de processo, redação de peça), use prompts rígidos com formato definido. Isso reduz variação e aumenta consistência.

### Dica 2
> Combine tipos em prompts complexos:
> 1. Análise: extraia os fatos
> 2. Pesquisa: busque jurisprudência
> 3. Escrita: redija a petição

### Armadilha
> **"Usar prompt flexível para extração de dados."**
>
> Prompts flexíveis para tarefas de análise geram
> respostas inconsistentes e difíceis de processar.

### Armadilha 2
> **"Usar prompt rígido para brainstorming."**
>
> Rigidez excessiva em tarefas criativas limita
> a capacidade do modelo de gerar alternativas.

---

## Templates por Tipo

### Template de Análise
```markdown
# Tipo: ANÁLISE (Rígido)

Extraia do documento as seguintes informações:
1. [Campo 1]
2. [Campo 2]
3. [Campo 3]

Formato de saída: [tabela/lista/JSON]

<documento>
[Conteúdo]
</documento>
```

### Template de Escrita
```markdown
# Tipo: ESCRITA (Rígido)

Redija [tipo de documento] contendo:

## Estrutura Obrigatória
1. [Seção 1]
2. [Seção 2]
3. [Seção 3]

## Tom e Estilo
[Especificações]

## Dados de Entrada
<dados>
[Informações para usar]
</dados>
```

### Template de Criação
```markdown
# Tipo: CRIAÇÃO (Flexível)

Gere [quantidade] [tipo de conteúdo] sobre [tema].

## Diretrizes Gerais
- [Diretriz 1]
- [Diretriz 2]

## Liberdade
Explore abordagens não convencionais.
Priorize originalidade.
```

### Template de Pesquisa
```markdown
# Tipo: PESQUISA (Flexível)

Pesquise sobre [tema].

## Foco
- [Aspecto 1]
- [Aspecto 2]

## Síntese
Apresente as principais descobertas de forma
organizada, conectando as fontes encontradas.
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: TIPOS DE PROMPT                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  4 TIPOS:                                                   │
│  1. ANÁLISE: extrair dados (rígido)                         │
│  2. ESCRITA: gerar documento (rígido)                       │
│  3. CRIAÇÃO: produzir conteúdo criativo (flexível)          │
│  4. PESQUISA: buscar e sintetizar (flexível)                │
│                                                             │
│  CONCEITO-CHAVE: RIGIDEZ                                    │
│  → Rígido = formato definido, baixa variação                │
│  → Flexível = diretrizes gerais, alta variação              │
│                                                             │
│  REGRA: Escolha o tipo adequado à tarefa.                   │
│         Rigidez para precisão, flexibilidade para criação.  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com os tipos de prompt entendidos, agora vamos aprender o framework P.O.E.M.A. para construir prompts completos.

→ Próxima: **[2.5 P - Persona](./aula-2.5.md)**
