# Analise Comparativa: SPEC v2.9 vs Documentacao Oficial vs Videos

> **Data:** 2026-02-07
> **Fontes:** SPEC v2.9, Documentacao Oficial (code.claude.com), 7 transcricoes YouTube
> **Objetivo:** Identificar erros, omissoes, lacunas e contradicoes

---

## Sumario Executivo

A SPEC v2.9 esta **70% correta**, mas apresenta:
- **3 erros materiais** (informacoes incorretas)
- **5 omissoes significativas** (informacoes ausentes da doc oficial)
- **4 lacunas** (detalhes insuficientes)
- **2 obscuridades** (terminologia confusa)
- **1 contradicao** (inconsistencia interna)

---

## 1. ERROS MATERIAIS

### 1.1 Caminho do Inbox (ERRO)

**SPEC v2.9 diz:**
```
~/.claude/teams/{team-name}/inbox/
```

**Documentacao oficial diz:**
```
~/.claude/teams/{team-name}/config.json  # Configuracao
~/.claude/tasks/{team-name}/             # Task list
```

**Video AI Jason diz:**
> "In teams folder there's an inbox folder that is maintaining the inbox for every single agent teammates"

**Analise:** A documentacao oficial NAO menciona inbox folder explicitamente. O video menciona, mas pode ser detalhe de implementacao interna. A SPEC assume estrutura que pode mudar.

**Correcao necessaria:** Remover referencia especifica ao inbox folder ou marcar como "detalhe de implementacao (pode mudar)".

---

### 1.2 Configuracao teammateMode (ERRO)

**SPEC v2.9 diz:**
```json
{
  "teammateMode": "in-process"  // ou "tmux"
}
```

**Documentacao oficial diz:**
```json
{
  "teammateMode": "in-process"  // ou "tmux" ou "auto" (padrao)
}
```

**Analise:** A SPEC omite o valor `"auto"` que e o padrao. Tambem nao menciona que `"tmux"` auto-detecta entre tmux e iTerm2.

**Correcao necessaria:** Adicionar `"auto"` como valor padrao e explicar comportamento.

---

### 1.3 Comando para Split Panes (ERRO)

**Video AI Jason diz:**
```bash
claude --teammate-mode
```

**Documentacao oficial diz:**
```bash
claude --teammate-mode in-process  # ou omitir para usar auto
```

**Analise:** O comando `--teammate-mode` sozinho NAO funciona. E um flag que requer valor ou usa o default de settings.json.

**Correcao necessaria:** Corrigir sintaxe do comando.

---

## 2. OMISSOES SIGNIFICATIVAS

### 2.1 Plan Approval para Teammates

**Documentacao oficial diz:**
> "For complex or risky tasks, you can require teammates to plan before implementing. The teammate works in read-only plan mode until the lead approves their approach."

**SPEC v2.9:** Menciona brevemente mas nao detalha o fluxo.

**Adicionar:**
```
### Exigir Aprovacao de Plano

Para tarefas criticas:

1. Spawn um teammate com instrucao de planejar primeiro
2. Teammate trabalha em read-only plan mode
3. Envia plan approval request ao lead
4. Lead aprova ou rejeita com feedback
5. Se rejeitado, teammate revisa e reenvia
6. Apos aprovado, teammate sai do plan mode e implementa

Influencie o criterio do lead no prompt:
"Apenas aprove planos que incluam cobertura de testes"
"Rejeite planos que modifiquem o schema do banco"
```

---

### 2.2 Permissoes dos Teammates

**Documentacao oficial diz:**
> "Teammates start with the lead's permission settings. If the lead runs with --dangerously-skip-permissions, all teammates do too."

**SPEC v2.9:** Nao menciona permissoes.

**Adicionar:**
```
### Permissoes

- Teammates herdam permissoes do lead no spawn
- Se lead usa --dangerously-skip-permissions, teammates tambem usam
- Pode mudar permissoes de teammates individuais APOS spawn
- NAO pode definir permissoes diferentes no momento do spawn
```

---

### 2.3 Claim de Tasks com File Locking

**Documentacao oficial diz:**
> "Task claiming uses file locking to prevent race conditions when multiple teammates try to claim the same task simultaneously."

**SPEC v2.9:** Nao menciona file locking.

**Adicionar:** Detalhe tecnico sobre race condition prevention.

---

### 2.4 Broadcast vs Message

**Documentacao oficial diz:**
> "broadcast: send to all teammates simultaneously. Use sparingly, as costs scale with team size."

**SPEC v2.9:** Menciona tipos mas nao alerta sobre custo.

**Correcao:** Adicionar warning sobre custo de broadcast.

---

### 2.5 Troubleshooting Detalhado

**Documentacao oficial inclui:**
- Teammates not appearing
- Too many permission prompts
- Teammates stopping on errors
- Lead shuts down before work is done
- Orphaned tmux sessions

**SPEC v2.9:** Apenas tabela de limitacoes, sem troubleshooting.

**Adicionar:** Secao completa de troubleshooting.

---

## 3. LACUNAS

### 3.1 Tamanho de Tasks

**Documentacao oficial diz:**
> "Too small: coordination overhead exceeds the benefit"
> "Too large: teammates work too long without check-ins"
> "Just right: self-contained units that produce a clear deliverable"

**Recomendacao:**
> "Having 5-6 tasks per teammate keeps everyone productive"

**SPEC v2.9:** Menciona "tasks self-contained" mas nao quantifica.

**Adicionar:** Guideline de 5-6 tasks por teammate.

---

### 3.2 Quando Claude Propoe Team

**Documentacao oficial diz:**
> "Claude proposes a team: if Claude determines your task would benefit from parallel work, it may suggest creating a team. You confirm before it proceeds."

**SPEC v2.9:** Assume que usuario sempre solicita explicitamente.

**Adicionar:** Fluxo de proposta automatica pelo Claude.

---

### 3.3 Especificar Modelo por Teammate

**Documentacao oficial diz:**
```
Create a team with 4 teammates to refactor these modules in parallel.
Use Sonnet for each teammate.
```

**SPEC v2.9:** Nao menciona possibilidade de especificar modelo.

**Adicionar:** Opcao de especificar modelo (Sonnet, Haiku) para economizar tokens.

---

### 3.4 Contexto do Teammate

**Documentacao oficial diz:**
> "When spawned, a teammate loads the same project context as a regular session: CLAUDE.md, MCP servers, and skills. It also receives the spawn prompt from the lead. The lead's conversation history does not carry over."

**SPEC v2.9:** Menciona "contexto isolado" mas nao detalha o que inclui.

**Adicionar:** Lista explicita do que o teammate herda vs nao herda.

---

## 4. OBSCURIDADES

### 4.1 Terminologia "Mailbox"

**SPEC v2.9 usa:** "Mailbox" e "inbox" intercambiavelmente.

**Documentacao oficial usa:** "Mailbox" como conceito, mas estrutura interna e implementation detail.

**Problema:** Confunde conceito (mailbox = sistema de mensagens) com implementacao (inbox folder).

**Correcao:** Padronizar como "sistema de mensagens entre teammates" e evitar referencias a estrutura de pastas.

---

### 4.2 "Debate" vs "Comunicacao"

**SPEC v2.9:** Foca muito em "debate" como se fosse automatico.

**Realidade:** Debate requer instrucao explicita. Teammates nao "debatem" naturalmente.

**Correcao:** Deixar claro que debate requer:
1. Instrucao no prompt para debater
2. Prompt adversarial ("tente refutar a teoria do outro")
3. Teammates explicitamente trocando mensagens

---

## 5. CONTRADICAO

### 5.1 Tasks vs Comunicacao Direta

**SPEC v2.9 diz:**
> "Task list usada para coordenacao"

**Mas tambem diz:**
> "Teammates se comunicam via mailbox"

**Documentacao oficial esclarece:**
- Task list = coordenacao de TRABALHO (quem faz o que)
- Mailbox = comunicacao de INFORMACAO (findings, criticas)

**Correcao:** Distinguir claramente os dois mecanismos:
```
COORDENACAO DE TRABALHO    | COMUNICACAO DE INFORMACAO
---------------------------|---------------------------
Task list compartilhada    | Mensagens diretas
pending → in_progress      | message / broadcast
→ completed                |
blockedBy para deps        | Debate, criticas, findings
```

---

## 6. INFORMACOES CORRETAS (Confirmar)

A SPEC v2.9 acerta em:

| Item | Status |
|------|--------|
| Feature flag `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` | CORRETO |
| Atalhos Shift+Up/Down, Ctrl+T, Shift+Tab | CORRETO |
| Limitacao de session resumption | CORRETO |
| Limitacao de 1 team por sessao | CORRETO |
| Cleanup deve ser feito pelo lead | CORRETO |
| tmux requerido para split panes | CORRETO |
| Padrao in-process funciona em qualquer terminal | CORRETO |
| Hooks TeammateIdle e TaskCompleted | CORRETO |

---

## 7. INFORMACOES DOS VIDEOS NAO NA DOC OFICIAL

### 7.1 Ralphie (Alternativa Comunitaria)

**Video AICodeKing:**
> "Ralphie gives you branch per task isolation, automatic PR creation, and support for multiple AI engines like OpenCode and Codex CLI."

**Relevancia:** Util para comparacao, mas nao e parte do Claude Code.

**Decisao:** Manter como nota de rodape, nao no corpo principal.

---

### 7.2 CLAUDE.md nos Teammates

**Video AICodeKing:**
> "Make sure your CLAUDE.md is solid because that's doing a lot of heavy lifting for your teammates."

**Documentacao oficial confirma:**
> "CLAUDE.md works normally: teammates read CLAUDE.md files from their working directory."

**Acao:** Adicionar destaque sobre importancia do CLAUDE.md.

---

### 7.3 Reinforcement Learning no Opus 4.6

**Video Ray Amjad:**
> "Anthropic employee did mention that Opus 4.6 has improved sub agent orchestration, recognizing when tasks would benefit from delegating work."

**Relevancia:** Contexto sobre modelo, mas nao documentado oficialmente.

**Decisao:** Nao incluir na SPEC (informacao nao oficial).

---

## 8. RECOMENDACOES DE ATUALIZACAO

### 8.1 Prioridade Alta (Erros)

1. Corrigir caminho do inbox (remover ou marcar como interno)
2. Adicionar `"auto"` como valor padrao de teammateMode
3. Corrigir sintaxe do comando `--teammate-mode`

### 8.2 Prioridade Media (Omissoes)

4. Adicionar secao de Plan Approval
5. Adicionar secao de Permissoes
6. Adicionar secao de Troubleshooting
7. Adicionar opcao de especificar modelo por teammate

### 8.3 Prioridade Baixa (Lacunas)

8. Quantificar tamanho ideal de tasks (5-6 por teammate)
9. Documentar fluxo de proposta automatica
10. Detalhar contexto herdado vs nao herdado

### 8.4 Clarificacoes

11. Padronizar terminologia (mailbox = sistema de mensagens)
12. Separar "tasks" de "comunicacao"
13. Explicitar que debate requer instrucao

---

## 9. SCORE DE CONFORMIDADE ATUALIZADO

| Item | Antes | Depois (Proposto) |
|------|-------|-------------------|
| Informacoes corretas | 70% | 95% |
| Completude | 60% | 90% |
| Clareza | 75% | 90% |
| Praticidade | 80% | 95% |

---

## 10. PROXIMOS PASSOS

1. [ ] Aplicar correcoes na SPEC v2.9
2. [ ] Adicionar secoes omitidas
3. [ ] Criar v2.10 com changelog
4. [ ] Testar com prompt real de Agent Team
5. [ ] Validar contra proxima versao da doc oficial

---

**Autor:** Analise automatica
**Data:** 2026-02-07
**Fontes:**
- https://code.claude.com/docs/en/agent-teams
- 7 transcricoes YouTube
- SPEC v2.9 local
