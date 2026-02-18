# Relatório de Revisão Crítica
## Seção Skills - demo-anatomia-agents.html

**Data:** 29/01/2026
**Fonte de verificação:** Documentação oficial Anthropic via claude-code-guide
**Escopo:** Análise de erros, omissões, contradições e melhorias

---

## 1. ERROS DE CONTEÚDO

### 1.1 Comando /skill-creator não existe

**Local:** `skills-criar` → aba "Passos"

**Conteúdo atual:**
```
Comando: $ /skill-creator
```

**Problema:** Não existe um comando `/skill-creator` nativo no Claude Code. O processo de criação de skills é **manual**. Existe uma *skill* chamada `skill-creator` no repositório `anthropics/skills`, mas ela precisa ser instalada primeiro e não é um comando built-in.

**Ação:** Remover referência ao comando inexistente. Explicar que a criação é manual (criar pasta + escrever SKILL.md) ou via skill externa se instalada.

**Prioridade:** CRÍTICA

---

### 1.2 mcp-builder não é "skill nativa"

**Local:** `skills-exemplos` → aba "mcp-builder"

**Conteúdo atual:**
```
Fonte: skill nativa do Claude Code
```

**Problema:** O Claude Code **não vem com skills pré-instaladas**. O `mcp-builder` vem do repositório `anthropics/skills` ou de plugins - não é built-in.

**Ação:** Corrigir badge para "Fonte: repositório anthropics/skills" ou "Fonte: plugin superpowers"

**Prioridade:** ALTA

---

### 1.3 "Plugins = Skills Externas" é impreciso

**Local:** `skills-caracteristicas` → aba "Escopo"

**Conteúdo atual:**
```
Plugins da Anthropic (como feature-dev) são essencialmente skills distribuídas que você instala.
```

**Problema:** Plugins são **mais do que skills** — incluem também agents, configurações, hooks e outros recursos. A afirmação é simplificada demais e pode induzir confusão.

**Ação:** Corrigir para: "Plugins são **pacotes** que podem incluir skills, agents, configurações e outros recursos."

**Prioridade:** MÉDIA

---

## 2. OMISSÕES IMPORTANTES

### 2.1 Campos do frontmatter YAML

**Local:** `skills-criar` e `skills-caracteristicas`

**O que falta:** O slide não documenta os campos mais importantes do frontmatter YAML:

| Campo | Função | Importância |
|-------|--------|-------------|
| `disable-model-invocation` | Impede Claude de invocar automaticamente | ALTA |
| `user-invocable` | Controla se aparece no menu `/` | ALTA |
| `allowed-tools` | Ferramentas permitidas sem pedir | MÉDIA |
| `argument-hint` | Dica no autocomplete (`[issue-number]`) | MÉDIA |
| `context: fork` | Executa em contexto isolado (subagent) | MÉDIA |
| `agent` | Tipo de subagent a usar | MÉDIA |

**Ação:** Criar aba "Frontmatter" em skills-criar com tabela de campos suportados.

**Prioridade:** ALTA

---

### 2.2 Invocação via /skill-name

**Local:** `skills-caracteristicas` → aba "Carregamento"

**O que falta:** O slide menciona "Detecção Automática" mas não explica que o usuário pode invocar diretamente com `/nome-da-skill`.

**Ação:** Adicionar explicação das duas formas de invocação:
- **Automática:** Claude detecta pela descrição
- **Manual:** Usuário digita `/skill-name` (aparece no menu `/`)

**Prioridade:** ALTA

---

### 2.3 Substituições de string ($ARGUMENTS)

**Local:** Não existe

**O que falta:** Skills podem usar variáveis como `$ARGUMENTS`, `$0`, `$1`, `${CLAUDE_SESSION_ID}`. Isso é fundamental para skills que recebem parâmetros.

**Exemplo:**
```yaml
---
name: fix-issue
description: Fix a GitHub issue
---
Fix GitHub issue $ARGUMENTS following our standards.
```

Quando o usuário invoca `/fix-issue 123`, Claude recebe: "Fix GitHub issue 123..."

**Ação:** Criar seção explicando substituições de string em skills.

**Prioridade:** ALTA

---

### 2.4 Limite de linhas do SKILL.md

**Local:** `skills-criar` → aba "Estrutura"

**O que falta:** Documentação oficial recomenda que SKILL.md tenha **menos de 500 linhas** para performance.

**Ação:** Adicionar nota sobre limite de tamanho.

**Prioridade:** MÉDIA

---

### 2.5 Descoberta em monorepos

**Local:** `skills-caracteristicas` → aba "Escopo"

**O que falta:** Claude busca skills em diretórios aninhados. Se você edita `packages/frontend/`, Claude descobre skills em `packages/frontend/.claude/skills/`.

**Ação:** Adicionar nota sobre descoberta automática em monorepos.

**Prioridade:** BAIXA

---

## 3. LACUNAS DE INFORMAÇÃO

### 3.1 Prioridade de escopos não explicada

**Local:** `skills-caracteristicas` → aba "Escopo"

**Problema:** O slide menciona escopos mas não explica a **hierarquia de prioridade** quando há conflitos de nome.

**Hierarquia correta (documentação oficial):**
1. Enterprise (mais alta)
2. Pessoal (`~/.claude/skills/`)
3. Projeto (`.claude/skills/`)
4. Plugin (mais baixa)

**Ação:** Adicionar explicação de prioridade similar à seção de Agents.

**Prioridade:** MÉDIA

---

### 3.2 Controle de invocação incompleto

**Local:** `skills-caracteristicas` → aba "Carregamento"

**Problema:** O slide menciona "Detecção Automática" mas não explica como controlar esse comportamento.

**O que falta:** Tabela de controle de invocação:

| Campos | Você invoca | Claude invoca |
|--------|-------------|---------------|
| (padrão) | Sim | Sim |
| `disable-model-invocation: true` | Sim | Não |
| `user-invocable: false` | Não | Sim |

**Ação:** Adicionar explicação dos campos de controle.

**Prioridade:** ALTA

---

## 4. INCONSISTÊNCIAS

### 4.1 Relação Skill-Agent confusa

**Local:** `skills-conceito` → aba "Insight"

**Conteúdo atual:**
```
O agent é o especialista. A skill é a biblioteca de conhecimento que ele consulta.
```

**Problema:** Embora a analogia seja útil, ela pode confundir porque:
- Skills também podem ter comportamentos ativos (não apenas conhecimento passivo)
- Agents podem carregar skills como referência
- Skills com `context: fork` executam como subagents

**Ação:** Refinar a explicação para incluir que skills podem ser tanto conhecimento passivo quanto comportamento ativo.

**Prioridade:** BAIXA

---

## 5. MELHORIAS SUGERIDAS

### 5.1 Adicionar aba "Invocação" em skills-caracteristicas

Similar ao que foi feito em agents-criar, explicar:
- Invocação automática (via descrição)
- Invocação manual (`/skill-name`)
- Campos de controle

### 5.2 Adicionar aba "Frontmatter" em skills-criar

Documentar os campos YAML suportados com exemplos.

### 5.3 Adicionar exemplo com $ARGUMENTS

Mostrar uma skill que recebe parâmetros do usuário.

### 5.4 Corrigir passos de criação

```
# Passos corretos:
1. Criar pasta: mkdir .claude/skills/minha-skill/
2. Criar arquivo: SKILL.md com frontmatter + instruções
3. Salvar — skill fica disponível imediatamente
4. Testar com /minha-skill ou deixar Claude detectar
```

---

## 6. RESUMO EXECUTIVO

| # | Tipo | Local | Descrição | Prioridade |
|---|------|-------|-----------|------------|
| 1.1 | Erro | skills-criar | /skill-creator não existe | **CRÍTICA** |
| 1.2 | Erro | skills-exemplos | mcp-builder não é nativo | **ALTA** |
| 1.3 | Erro | skills-caracteristicas | Plugins ≠ Skills | MÉDIA |
| 2.1 | Omissão | skills-criar | Campos do frontmatter | **ALTA** |
| 2.2 | Omissão | skills-caracteristicas | Invocação via /skill-name | **ALTA** |
| 2.3 | Omissão | — | Substituições $ARGUMENTS | **ALTA** |
| 2.4 | Omissão | skills-criar | Limite 500 linhas | MÉDIA |
| 2.5 | Omissão | skills-caracteristicas | Monorepos | BAIXA |
| 3.1 | Lacuna | skills-caracteristicas | Prioridade de escopos | MÉDIA |
| 3.2 | Lacuna | skills-caracteristicas | Controle de invocação | **ALTA** |
| 4.1 | Inconsistência | skills-conceito | Relação Skill-Agent | BAIXA |

---

## 7. FONTES

- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [GitHub - anthropics/skills](https://github.com/anthropics/skills)
- [Inside Claude Code Skills: Structure, prompts, invocation](https://mikhail.io/2025/10/claude-code-skills/)
- [Claude Agent Skills: A First Principles Deep Dive](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/)

---

*Relatório gerado em 29/01/2026 via claude-code-guide*
