# Transcricoes: Claude Code Agent Teams

> Colecao de transcricoes de videos do YouTube sobre Agent Teams no Claude Code.
> Extraido em: 2026-02-07

---

## Indice de Videos

| # | Titulo | Canal | Foco Principal |
|---|--------|-------|----------------|
| 01 | [Full Tutorial: The BEST FEATURE](01-claude-code-agent-teams-full-tutorial.md) | AICodeKing | Tutorial completo, diferenca sub-agents vs teams |
| 02 | [Agent Teams Are Insane (Opus 4.6)](02-claude-code-agent-teams-insane-opus46.md) | Bart Slodyczka | Experimento comparativo single vs team |
| 03 | [Agent Teams VS Sub Agents](03-agent-teams-vs-sub-agents.md) | AI Jason | Analise tecnica profunda, logs, comunicacao |
| 04 | [First Look at Opus 4.6](04-claude-code-agent-teams-first-look-opus46.md) | Build at Scale | Benchmarks, tasks vs todos |
| 05 | [Anthropic Just Dropped Agent Swarms](05-anthropic-just-dropped-agent-swarms.md) | Ray Amjad | Navegacao, estrutura no disco |
| 06 | [Agent Teams Change Everything](06-claude-opus-46-agent-teams-change-everything.md) | Creator Magic | Design competition entre agents |
| 07 | [Native Agent Teams Changed EVERYTHING](07-claude-code-v3-native-agent-teams.md) | Income Stream Surfers | Setup, opiniao critica |

---

## Conceitos-Chave Consolidados

### 1. Sub-agents vs Agent Teams

| Aspecto | Sub-agents | Agent Teams |
|---------|------------|-------------|
| Hierarquia | Hierarquico (boss/worker) | Peers (colegas) |
| Comunicacao | Reportam ao main | Conversam entre si |
| Contexto | Compartilham com main | Cada um tem seu proprio |
| Coordenacao | Via main agent | Direta via mailbox |

### 2. Como Habilitar

```json
// ~/.claude/settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

### 3. Modos de Visualizacao

| Modo | Comando | Requisito |
|------|---------|-----------|
| In-process | (padrao) | Nenhum |
| Split panes | `claude --teammate-mode` | tmux ou iTerm2 |

### 4. Navegacao

| Acao | Atalho |
|------|--------|
| Selecionar teammate | Shift+Up/Down |
| Ver sessao | Enter |
| Toggle task list | Ctrl+T |
| Delegate mode | Shift+Tab |

### 5. Estrutura no Disco

```
~/.claude/
├── teams/          # Configuracao dos teams
│   └── {team-name}/
│       └── config.json
├── tasks/          # Task list compartilhada
│   └── {team-name}/
│       └── {task-id}.json
└── settings.json   # Feature flag
```

### 6. Comunicacao entre Teammates

- Inbox folder em `~/.claude/teams/{team}/inbox/`
- Mensagens injetadas no conversation history
- Read status para tracking
- Broadcast para todos ou message para um especifico

### 7. Task Dependencies

```json
{
  "id": "task-3",
  "subject": "Implement feature X",
  "status": "pending",
  "blockedBy": ["task-1", "task-2"]
}
```

### 8. Limitacoes Conhecidas

- Sem session resumption para teammates
- Lead as vezes executa em vez de delegar
- Tasks precisam ser self-contained
- Mais tokens que single session

---

## Casos de Uso Ideais

1. **Debugging com Hipoteses Multiplas**
   - Cada agent investiga uma teoria
   - Debatem entre si como cientistas

2. **Code Review Multi-Perspectiva**
   - Seguranca, performance, testes
   - Cada um com sua lente

3. **Criacao com Debate**
   - Propostas competem entre si
   - Melhor sobrevive ao escrutinio

4. **Feature Development Paralelo**
   - Frontend, backend, testes
   - Trabalham em paralelo, sincronizam

---

## Fontes Originais

- [Documentacao Oficial](https://code.claude.com/docs/en/agent-teams)
- [Anthropic Blog: Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)
