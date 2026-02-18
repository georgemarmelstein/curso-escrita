# Instruções do Projeto prompt-juridico

## Visão Geral

Este projeto contém uma coleção de prompts jurídicos estruturados seguindo o framework **P.O.E.M.A.** (Persona, Objetivo, Estilo, Modelo, Adicionais), desenvolvidos para auxiliar profissionais do Direito em tarefas de análise, escrita e criação.

## Idioma e Formatação

### Ortografia e Acentuação
- SEMPRE escrever em português brasileiro correto e formal
- SEMPRE usar acentuação adequada: á, é, í, ó, ú, â, ê, ô, ã, õ, à
- SEMPRE usar cedilha (ç) quando necessário
- NUNCA omitir acentos ou cedilhas
- Seguir o Acordo Ortográfico da Língua Portuguesa vigente

### Exemplos de palavras que devem estar corretas
- ação, decisão, petição, sentença, análise
- será, está, já, até, também
- período, específico, jurídico, técnico
- função, execução, conclusão, fundamentação

## Framework P.O.E.M.A.

Todos os prompts deste projeto seguem a estrutura:

```
<persona>    → Quem o modelo deve ser
<objetivo>   → O que deve fazer
<estilo>     → Como deve escrever
<modelo>     → Estrutura de saída (<formato_saida>)
<adicionais> → Informações complementares, guardrails, checklists
```

### Tipos de Prompts

| Tipo | Rigidez | Características |
|------|---------|-----------------|
| **Análise** | Rígido | Formato de saída fixo, estrutura padronizada |
| **Escrita** | Rígido | Template de documento, fidelidade documental |
| **Criação** | Flexível | Autonomia criativa, adaptação ao contexto |

## Padrões de Código dos Prompts

### Estrutura de Arquivo
```markdown
---
name: nome-do-prompt
description: Descrição concisa do propósito
tipo: analise | escrita | criacao
uso: Instruções de como usar o prompt
---

# Prompt: [Título]

<persona>...</persona>
<objetivo>...</objetivo>
<estilo>...</estilo>
<modelo>
  <formato_saida>...</formato_saida>
</modelo>
<adicionais>...</adicionais>
```

### Convenções
- Nomes de arquivo: `kebab-case.md`
- Títulos de seção: `## MAIÚSCULAS` ou `### Title Case`
- Placeholders: `` `TEXTO EM MAIÚSCULAS` `` ou `[TEXTO ENTRE COLCHETES]`
- Emojis: Usar apenas quando especificado no prompt (✅, ❌, ⚠️)

## Guardrails de Fidelidade

### Para Prompts de Escrita
- USE APENAS dados dos documentos fornecidos
- NÃO invente IDs, datas, valores ou nomes
- Lacunas devem ser marcadas: `[NÃO CONSTA NOS AUTOS]`
- Transcrições literais sempre entre aspas duplas

### Para Prompts de Análise
- Cite fontes quando disponíveis
- Identifique contradições nos documentos
- Mantenha imparcialidade na exposição

### Para Prompts de Criação
- Adapte ao contexto fornecido pelo usuário
- Mantenha flexibilidade criativa
- Ofereça variações quando apropriado

## Estrutura de Diretórios

```
prompt-juridico/
├── CLAUDE.md              # Este arquivo
├── README.md              # Documentação do usuário
└── prompts/
    ├── analise/           # Prompts de análise
    ├── escrita/           # Prompts de escrita
    └── criacao/           # Prompts de criação
```

## Comandos Frequentes

```bash
# Listar todos os prompts
ls prompts/**/*.md

# Buscar prompt específico
grep -r "name: termo" prompts/
```

## Checklist para Novos Prompts

- [ ] Seguir framework P.O.E.M.A.
- [ ] Incluir YAML frontmatter (name, description, tipo, uso)
- [ ] Definir persona adequada à tarefa
- [ ] Especificar formato de saída claro
- [ ] Incluir guardrails de fidelidade
- [ ] Adicionar checklist de qualidade
- [ ] Testar com caso real antes de finalizar

## Regras de Workflow — OBRIGATÓRIO

### Ao Criar um Novo Prompt

**SEMPRE, IMEDIATAMENTE após criar um novo prompt, você DEVE atualizar o README.md:**

1. **Atualizar contagem total** no início do arquivo:
   ```markdown
   Este repositório contém **XX prompts** organizados em três categorias
   ```

2. **Atualizar contagem da categoria** (Análise/Escrita/Criação):
   ```markdown
   ### 🔍 Análise (XX prompts)
   ### ✍️ Escrita (XX prompts)
   ### 🎨 Criação (XX prompts)
   ```

3. **Adicionar entrada no índice visual** na subcategoria apropriada:
   ```markdown
   | 🆕 | [nome-do-prompt.md](prompts/tipo/nome-do-prompt.md) | Descrição curta |
   ```

4. **Atualizar estrutura do repositório** no final do README:
   ```
   └── nome-do-prompt.md
   ```

### Escolha do Emoji para o Índice

| Tipo | Emojis Sugeridos |
|------|------------------|
| Análise | 📊 🔍 🔎 ⚡ 🎭 📝 📚 🎙️ ⚖️ 💀 🛡️ ⬆️ |
| Escrita | 📋 🏷️ 📄 🛡️ ↩️ ⚖️ ⬆️ ⚔️ 📖 🤖 |
| Criação | 🎯 💬 🔬 🎤 📜 🖼️ 📱 |

### Ordem no Fluxo Processual Cível

Se o prompt fizer parte do fluxo processual, inserir na ordem correta:
```
📄 Inicial → 🛡️ Contestação → ↩️ Réplica → ⚖️ Saneador → ⚖️ Sentença → ⬆️ Apelação
```

**Esta regra é OBRIGATÓRIA e não deve ser ignorada.**

## Regras de Segurança

- NUNCA incluir dados reais de processos nos prompts
- Prompts são templates genéricos, não documentos jurídicos
- Usuário é responsável pela revisão final de qualquer documento gerado
- Disclaimers devem ser incluídos em análises e pareceres
