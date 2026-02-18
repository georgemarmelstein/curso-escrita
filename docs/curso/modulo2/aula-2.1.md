# 2.1 Markdown para Prompts

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Ferramentas Básicas
**Tempo estimado:** 20 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Usar formatação Markdown para estruturar prompts
- Aplicar headers, listas e blocos de código
- Melhorar a clareza e leitura dos prompts
- Transformar texto corrido em prompt formatado

---

## Por que Importa

**Para profissionais do Direito:**
- Prompts formatados são mais fáceis de ler e manter
- Markdown ajuda a separar instruções de conteúdo
- Estrutura clara reduz ambiguidade na interpretação

**Princípio:**
> Prompts bem formatados produzem respostas mais estruturadas.

---

## Base Conceitual

### O que é Markdown?

Markdown é uma linguagem de marcação leve que permite formatar texto usando caracteres simples.

### Elementos Essenciais

```
HEADERS (Títulos)
# Título 1
## Título 2
### Título 3

LISTAS
- Item 1
- Item 2
  - Subitem

LISTAS NUMERADAS
1. Primeiro
2. Segundo
3. Terceiro

ÊNFASE
**negrito**
*itálico*
`código inline`

BLOCOS DE CÓDIGO
```linguagem
código aqui
```

CITAÇÕES
> Texto citado
```

### Antes e Depois

**Antes (texto corrido):**
```
Analise o documento abaixo. Extraia as partes, o pedido, os argumentos do autor e os argumentos do réu. Apresente no formato de tópicos. O documento é uma petição inicial de ação de cobrança.
```

**Depois (formatado):**
```markdown
# Tarefa
Analise o documento abaixo.

# Extraia
- Partes
- Pedido
- Argumentos do autor
- Argumentos do réu

# Formato
Apresente em tópicos organizados.

# Documento
[petição inicial de ação de cobrança]
```

### Por que Markdown Funciona?

```
┌─────────────────────────────────────────────────────────────┐
│  VANTAGENS DO MARKDOWN EM PROMPTS                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. SEPARAÇÃO VISUAL                                        │
│     → Headers criam seções distintas                        │
│     → Listas organizam itens relacionados                   │
│                                                             │
│  2. HIERARQUIA                                              │
│     → Níveis de headers indicam importância                 │
│     → Indentação mostra relações                            │
│                                                             │
│  3. ATENÇÃO                                                 │
│     → Negrito destaca palavras-chave                        │
│     → Blocos de código isolam exemplos                      │
│                                                             │
│  4. MANUTENÇÃO                                              │
│     → Fácil editar e reutilizar                             │
│     → Estrutura clara para templates                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Exercício Prático

### Tarefa
Transformar texto corrido em prompt formatado.

### Prompt Original (caótico)
```
Quero que você analise este contrato de locação e me diga se há cláusulas abusivas, calcule o valor total do aluguel no período de 12 meses considerando o reajuste de 10% no sexto mês, liste as obrigações do locador e do locatário, e finalmente sugira modificações para proteger melhor o locatário. O contrato está em anexo.
```

### Passo a Passo

**1. Identificar os elementos:**
- Tarefa principal: analisar contrato
- Subtarefas: cláusulas abusivas, cálculo, obrigações, sugestões
- Contexto: contrato em anexo

**2. Estruturar com Markdown:**

```markdown
# Tarefa
Analise o contrato de locação em anexo.

## 1. Cláusulas Abusivas
Identifique e explique quaisquer cláusulas abusivas.

## 2. Cálculo Financeiro
- Período: 12 meses
- Reajuste: 10% no 6º mês
- Calcule o valor total

## 3. Obrigações
Liste separadamente:
- **Locador:** obrigações do proprietário
- **Locatário:** obrigações do inquilino

## 4. Sugestões
Proponha modificações para proteger melhor o locatário.

---
[CONTRATO EM ANEXO]
```

**3. Testar:**
- Execute ambas as versões
- Compare a qualidade das respostas

### Checklist de Verificação

```
[ ] Usei headers para separar seções
[ ] Usei listas para itens relacionados
[ ] Usei negrito para palavras-chave
[ ] A estrutura está clara e lógica
```

---

## Dicas e Armadilhas

### Dica
> Use headers (`#`, `##`, `###`) para criar hierarquia clara. O modelo interpreta headers como indicadores de importância e organização.

### Dica 2
> Listas com marcadores (`-`) são melhores para itens sem ordem específica. Listas numeradas (`1.`, `2.`) são melhores para sequências ou passos.

### Armadilha
> **"Formatação excessiva atrapalha."**
>
> Não exagere. Markdown demais pode poluir o prompt.
> Use formatação apenas onde ela adiciona clareza.

### Armadilha 2
> **"Markdown não faz diferença."**
>
> Faz sim, especialmente em prompts complexos.
> A estrutura visual ajuda o modelo a organizar a resposta.

---

## Templates Prontos

### Template de Análise
```markdown
# Tarefa
[Descrição da análise]

# Documento
[Tipo de documento]

# Extrair
- [Item 1]
- [Item 2]
- [Item 3]

# Formato de Saída
[Como quer a resposta]
```

### Template de Instrução Multi-Etapa
```markdown
# Objetivo
[O que você quer alcançar]

## Etapa 1: [Nome]
[Instruções detalhadas]

## Etapa 2: [Nome]
[Instruções detalhadas]

## Etapa 3: [Nome]
[Instruções detalhadas]

# Observações
- [Restrição 1]
- [Restrição 2]
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: MARKDOWN PARA PROMPTS                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ELEMENTOS ESSENCIAIS:                                      │
│  → # Headers: criam seções                                  │
│  → - Listas: organizam itens                                │
│  → **Negrito**: destaca importante                          │
│  → `código`: isola exemplos                                 │
│                                                             │
│  BENEFÍCIOS:                                                │
│  → Clareza visual                                           │
│  → Hierarquia de informações                                │
│  → Facilidade de manutenção                                 │
│  → Respostas mais estruturadas                              │
│                                                             │
│  REGRA: Formatação serve à clareza, não à estética          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com Markdown dominado, o próximo passo é aprender delimitadores ainda mais poderosos: tags XML.

→ Próxima: **[2.2 Tags XML como Delimitadores](./aula-2.2.md)**
