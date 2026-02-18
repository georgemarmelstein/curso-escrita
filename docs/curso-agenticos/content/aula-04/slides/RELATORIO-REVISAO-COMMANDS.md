# Relatório de Revisão Crítica
## Seção Commands - demo-anatomia-agents.html

**Data:** 29/01/2026
**Fonte de verificação:** Documentação oficial Anthropic via claude-code-guide
**Escopo:** Análise de erros, omissões, contradições e melhorias

---

## 1. ERROS DE CONTEÚDO

### 1.1 "Sem YAML, sem configuração especial" está ERRADO

**Local:** `commands-caracteristicas` → aba "Simplicidade"

**Conteúdo atual:**
```
Commands são a forma mais simples: um arquivo .md com o prompt.
Sem YAML, sem configuração especial.
```

**Problema:** Commands **PODEM** ter frontmatter YAML com campos importantes:

| Campo | Função |
|-------|--------|
| `name` | Identificador do command |
| `description` | Quando usar (recomendado!) |
| `allowed-tools` | Ferramentas permitidas |
| `model` | Modelo específico |
| `disable-model-invocation` | Só usuário pode invocar |
| `argument-hint` | Dica no autocomplete |

**Ação:** Corrigir para explicar que YAML é opcional mas recomendado.

**Prioridade:** CRÍTICA

---

### 1.2 Commands e Skills são funcionalmente idênticos

**Local:** `commands-conceito` → aba "Insight"

**Conteúdo atual:**
```
Commands = prompts salvos para tarefas recorrentes
Skills = bibliotecas de conhecimento com recursos
```

**Problema:** A documentação oficial afirma:

> *"Custom slash commands have been merged into skills. A file at `.claude/commands/review.md` and a skill at `.claude/skills/review/SKILL.md` both create `/review` and work the same way."*

Commands e Skills são **tecnicamente idênticos** — a diferença é que Skills podem ter diretório com recursos auxiliares.

**Ação:** Ajustar a explicação para refletir que são funcionalmente equivalentes, com Skills oferecendo recursos extras (diretórios de suporte).

**Prioridade:** ALTA

---

## 2. OMISSÕES IMPORTANTES

### 2.1 Campos do frontmatter YAML

**Local:** `commands-criar`

**O que falta:** O slide não documenta os campos YAML suportados:

| Campo | Função | Importância |
|-------|--------|-------------|
| `name` | Identificador (se diferente do arquivo) | MÉDIA |
| `description` | CRÍTICO para Claude decidir quando usar | ALTA |
| `allowed-tools` | Ferramentas permitidas: Read, Grep, Bash | ALTA |
| `disable-model-invocation` | Apenas usuário invoca | ALTA |
| `model` | Modelo específico | MÉDIA |
| `argument-hint` | Dica no autocomplete | MÉDIA |

**Ação:** Criar aba "Cabeçalho" explicando os campos opcionais.

**Prioridade:** ALTA

---

### 2.2 Variáveis $0, $1, $2

**Local:** `commands-caracteristicas` → aba "Argumentos"

**O que falta:** O slide menciona $ARGUMENTS mas não explica:

| Variável | Descrição |
|----------|-----------|
| `$ARGUMENTS` | Todos os argumentos |
| `$0`, `$1`, `$2`... | Argumentos por posição |
| `$ARGUMENTS[0]` | Forma alternativa |
| `${CLAUDE_SESSION_ID}` | ID da sessão |

**Exemplo:**
```
/fix-issue 123 high
→ $0 = "123"
→ $1 = "high"
→ $ARGUMENTS = "123 high"
```

**Ação:** Adicionar explicação completa das variáveis.

**Prioridade:** ALTA

---

### 2.3 Prioridade de escopos

**Local:** `commands-caracteristicas` → aba "Escopo"

**O que falta:** A hierarquia de prioridade quando há conflito:

```
1. Enterprise (mais alta)
2. Personal (~/.claude/commands/)
3. Project (.claude/commands/)
```

**Ação:** Adicionar explicação de prioridade, similar às seções de Agents e Skills.

**Prioridade:** MÉDIA

---

### 2.4 Commands built-in

**Local:** Não existe

**O que falta:** O slide não menciona os commands nativos do Claude Code:

| Command | Função |
|---------|--------|
| `/compact` | Compacta histórico de conversa |
| `/clear` | Limpa conversa e inicia nova sessão |
| `/help` | Ajuda geral |
| `/commands` | Lista todos os commands disponíveis |
| `/context` | Mostra status de contexto |

**Ação:** Criar seção ou aba mencionando os built-in.

**Prioridade:** MÉDIA

---

### 2.5 Toggle EN/PT-BR nos exemplos

**Local:** `commands-exemplos`

**O que falta:** Os exemplos de commands não têm versão em inglês, diferente dos exemplos de Agents e Skills que têm toggle EN/PT-BR.

**Ação:** Adicionar toggle de idioma para consistência.

**Prioridade:** BAIXA (os exemplos são didáticos, não oficiais)

---

## 3. INCONSISTÊNCIAS

### 3.1 "O mais simples dos três"

**Local:** `commands-conceito` → aba "Insight"

**Problema:** Diz que Commands são "o mais simples", mas na prática:
- Commands e Skills usam o mesmo formato (Markdown + YAML opcional)
- A diferença real é que Skills podem ter diretório de recursos

**Ação:** Reformular para explicar que Commands são a forma **mais direta** (um arquivo, sem recursos extras), mas tecnicamente equivalentes às Skills.

**Prioridade:** MÉDIA

---

## 4. MELHORIAS SUGERIDAS

### 4.1 Adicionar aba "Cabeçalho" em commands-criar

Similar ao que foi feito em skills-criar, explicar os campos YAML opcionais de forma didática.

### 4.2 Expandir aba "Argumentos"

Incluir $0, $1, $2 e ${CLAUDE_SESSION_ID} com exemplos.

### 4.3 Adicionar aba "Built-in" em commands-caracteristicas

Listar os commands nativos do Claude Code.

### 4.4 Ajustar relação Commands vs Skills

Explicar que são funcionalmente equivalentes, com Skills oferecendo recursos extras.

---

## 5. RESUMO EXECUTIVO

| # | Tipo | Local | Descrição | Prioridade |
|---|------|-------|-----------|------------|
| 1.1 | Erro | commands-caracteristicas | "Sem YAML" está errado | **CRÍTICA** |
| 1.2 | Erro | commands-conceito | Commands ≠ Skills desatualizado | **ALTA** |
| 2.1 | Omissão | commands-criar | Campos do frontmatter YAML | **ALTA** |
| 2.2 | Omissão | commands-caracteristicas | $0, $1, $2 e outras variáveis | **ALTA** |
| 2.3 | Omissão | commands-caracteristicas | Prioridade de escopos | MÉDIA |
| 2.4 | Omissão | — | Commands built-in | MÉDIA |
| 2.5 | Omissão | commands-exemplos | Toggle EN/PT-BR | BAIXA |
| 3.1 | Inconsistência | commands-conceito | "O mais simples" impreciso | MÉDIA |

---

## 6. DESCOBERTA IMPORTANTE

A documentação oficial indica que **Commands foram integrados às Skills**. Tecnicamente:

- `.claude/commands/review.md` → cria `/review`
- `.claude/skills/review/SKILL.md` → também cria `/review`

Ambos funcionam da mesma forma. A diferença é que Skills podem ter diretório com recursos auxiliares (scripts/, references/, assets/).

**Recomendação didática:** Manter a distinção no curso para facilitar o aprendizado, mas explicar que internamente são equivalentes.

---

## 7. FONTES

- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills.md)
- [Claude Agent SDK - Slash Commands](https://platform.claude.com/docs/en/agent-sdk/slash-commands)
- [Claude Code Interactive Mode](https://code.claude.com/docs/en/interactive-mode.md)

---

*Relatório gerado em 29/01/2026 via claude-code-guide*
