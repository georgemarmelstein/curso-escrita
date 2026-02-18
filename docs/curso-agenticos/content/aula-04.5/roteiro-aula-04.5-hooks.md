# Aula 4.5: Hooks - Automacao Deterministica

> **Duracao estimada:** 50-60 minutos
> **Pre-requisitos:** Aulas 0-4 (especialmente permissoes e estrutura de diretorios)
> **Objetivo:** Compreender e implementar hooks para automacao, validacao e auditoria

---

## Sumario

1. [Bloco 1: O Problema da Confianca](#bloco-1-o-problema-da-confianca-15-min)
2. [Bloco 2: Anatomia dos Hooks](#bloco-2-anatomia-dos-hooks-20-min)
3. [Bloco 3: Casos de Uso Juridicos](#bloco-3-casos-de-uso-juridicos-15-min)
4. [Bloco 4: Implementacao Pratica](#bloco-4-implementacao-pratica-10-min)

---

## Bloco 1: O Problema da Confianca (15 min)

### 1.1 O Dilema do Magistrado Digital

Imagine o seguinte cenario:

> Voce configurou o CLERK para auxiliar na elaboracao de minutas.
> O sistema funciona bem, mas voce percebe que:
> - As vezes ele cita precedentes desatualizados
> - Ocasionalmente edita arquivos que nao deveria
> - Nao ha registro de quais acoes foram executadas
> - Formatacao inconsistente entre minutas

**Pergunta:** Como garantir que TODAS as minutas passem por validacao, SEMPRE?

### 1.2 A Limitacao da "Boa Vontade" do Modelo

O Claude e um modelo de linguagem. Ele **tenta** seguir instrucoes, mas:

```
┌─────────────────────────────────────────────────────────────────┐
│  INSTRUCAO NO CLAUDE.md                                         │
│                                                                 │
│  "Sempre formate a minuta com Prettier apos editar"             │
│                                                                 │
│  PROBLEMA:                                                      │
│  ├─ O modelo pode "esquecer" em contextos longos                │
│  ├─ Apos compactacao, a instrucao pode se perder                │
│  ├─ Em situacoes complexas, pode priorizar outras coisas        │
│  └─ Nao ha GARANTIA de execucao                                 │
│                                                                 │
│  RESULTADO: Formatacao acontece "na maioria das vezes"          │
│             Nao e deterministico.                               │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 A Analogia do Protocolo Judicial

No mundo juridico, existem **protocolos obrigatorios**:

```
┌─────────────────────────────────────────────────────────────────┐
│  PROTOCOLO DE SENTENCA (Mundo Real)                             │
│                                                                 │
│  1. Sentenca elaborada pelo assessor                            │
│         │                                                       │
│         ▼                                                       │
│  2. OBRIGATORIO: Revisao pelo magistrado                        │
│         │         (nao e opcional, nao depende de "lembrar")    │
│         ▼                                                       │
│  3. OBRIGATORIO: Assinatura digital                             │
│         │         (sistema bloqueia se nao assinar)             │
│         ▼                                                       │
│  4. OBRIGATORIO: Registro no sistema                            │
│         │         (automatico, nao depende de acao humana)      │
│         ▼                                                       │
│  5. Publicacao                                                  │
│                                                                 │
│  CARACTERISTICA: Etapas 2, 3, 4 sao DETERMINISTICAS             │
│                  Acontecem SEMPRE, sem excecao                  │
└─────────────────────────────────────────────────────────────────┘
```

**Hooks sao o equivalente digital desses protocolos obrigatorios.**

### 1.4 O Que Sao Hooks

**Hooks** sao comandos que executam **automaticamente** em pontos especificos do ciclo de vida do Claude Code.

```
┌─────────────────────────────────────────────────────────────────┐
│  HOOKS = PROTOCOLOS DIGITAIS                                    │
│                                                                 │
│  Caracteristicas:                                               │
│  ├─ DETERMINISTICOS: Executam SEMPRE, nao "quando lembrar"      │
│  ├─ AUTOMATICOS: Nao dependem de instrucao no prompt            │
│  ├─ INTERCEPTADORES: Podem bloquear acoes antes de acontecer    │
│  └─ AUDITAVEIS: Registram o que foi feito                       │
│                                                                 │
│  Diferenca fundamental:                                         │
│                                                                 │
│  CLAUDE.md: "Por favor, formate o codigo"                       │
│             → Modelo TENTA seguir                               │
│                                                                 │
│  HOOK: "Apos cada edicao, execute prettier"                     │
│        → Sistema GARANTE execucao                               │
└─────────────────────────────────────────────────────────────────┘
```

### 1.5 Quando Usar Hooks vs Instrucoes

| Cenario | Usar Instrucao (CLAUDE.md) | Usar Hook |
|---------|---------------------------|-----------|
| Estilo de escrita | ✓ | |
| Formatacao obrigatoria | | ✓ |
| Preferencias de codigo | ✓ | |
| Validacao de seguranca | | ✓ |
| Convencoes de nomenclatura | ✓ | |
| Auditoria de acoes | | ✓ |
| Bloqueio de operacoes perigosas | | ✓ |
| Contexto do projeto | ✓ | |

**Regra pratica:**
- **Instrucoes:** Para coisas que o modelo deve "saber" e "tentar fazer"
- **Hooks:** Para coisas que DEVEM acontecer, sem excecao

---

## Bloco 2: Anatomia dos Hooks (20 min)

### 2.1 Ciclo de Vida: Quando Hooks Disparam

O Claude Code tem **14 pontos** onde hooks podem interceptar:

```
┌─────────────────────────────────────────────────────────────────┐
│  CICLO DE VIDA DO CLAUDE CODE                                   │
│                                                                 │
│  SESSAO                                                         │
│  ├─ SessionStart ──────────► Carregar contexto inicial          │
│  │                                                              │
│  │  INTERACAO                                                   │
│  │  ├─ UserPromptSubmit ──► Validar/filtrar prompt do usuario   │
│  │  │                                                           │
│  │  │  EXECUCAO DE FERRAMENTA                                   │
│  │  │  ├─ PreToolUse ─────► ANTES de executar (pode bloquear)   │
│  │  │  ├─ [Ferramenta executa]                                  │
│  │  │  ├─ PostToolUse ────► DEPOIS de executar (pode processar) │
│  │  │  └─ PostToolUseFailure ► Se ferramenta falhou             │
│  │  │                                                           │
│  │  │  PERMISSOES                                               │
│  │  │  └─ PermissionRequest ► Quando pede aprovacao             │
│  │  │                                                           │
│  │  └─ Notification ──────► Alertas para o usuario              │
│  │                                                              │
│  │  CONTEXTO                                                    │
│  │  └─ PreCompact ────────► Antes de compactar contexto         │
│  │                                                              │
│  │  AGENTES                                                     │
│  │  ├─ SubagentStart ─────► Quando subagente inicia             │
│  │  ├─ SubagentStop ──────► Quando subagente termina            │
│  │  ├─ TeammateIdle ──────► Quando teammate fica ocioso         │
│  │  └─ TaskCompleted ─────► Quando tarefa e marcada completa    │
│  │                                                              │
│  │  FINALIZACAO                                                 │
│  │  └─ Stop ──────────────► Quando Claude termina resposta      │
│  │                                                              │
│  └─ SessionEnd ───────────► Ao encerrar sessao                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Os Hooks Mais Importantes

Para uso juridico, os hooks mais relevantes sao:

| Hook | Quando Dispara | Uso Juridico |
|------|----------------|--------------|
| **PreToolUse** | Antes de executar ferramenta | Bloquear operacoes perigosas |
| **PostToolUse** | Depois de executar ferramenta | Auto-formatacao, logging |
| **SessionStart** | Ao iniciar/retomar sessao | Carregar contexto do processo |
| **Stop** | Quando Claude termina resposta | Verificar completude |
| **Notification** | Quando precisa de atencao | Alertar magistrado |

### 2.3 Estrutura de um Hook

Hooks sao configurados em `settings.json`:

```json
{
  "hooks": {
    "NomeDoEvento": [
      {
        "matcher": "padrao_regex",
        "hooks": [
          {
            "type": "command",
            "command": "script.sh",
            "timeout": 60
          }
        ]
      }
    ]
  }
}
```

**Componentes:**

| Campo | Descricao | Exemplo |
|-------|-----------|---------|
| `NomeDoEvento` | Quando disparar | `PreToolUse`, `PostToolUse` |
| `matcher` | Filtrar por ferramenta | `Bash`, `Edit`, `Write` |
| `type` | Tipo de hook | `command`, `prompt`, `agent` |
| `command` | Script a executar | `./validar.sh` |
| `timeout` | Tempo maximo (segundos) | `60` |

### 2.4 Tres Tipos de Hooks

**1. Command Hook (Script Shell)**

Executa um comando do sistema:

```json
{
  "type": "command",
  "command": "./scripts/formatar.sh",
  "timeout": 30
}
```

**Uso:** Validacao simples, formatacao, logging

**2. Prompt Hook (Decisao LLM)**

Envia para um modelo Claude decidir:

```json
{
  "type": "prompt",
  "prompt": "Analise se este comando e seguro: $ARGUMENTS",
  "model": "haiku",
  "timeout": 15
}
```

**Uso:** Decisoes que requerem julgamento, nao apenas regras

**3. Agent Hook (Verificacao Complexa)**

Spawna um subagente com acesso a ferramentas:

```json
{
  "type": "agent",
  "prompt": "Verificar se todos os testes passam antes de continuar",
  "timeout": 120
}
```

**Uso:** Validacao que requer inspecao de codigo/arquivos

### 2.5 Matchers: Filtragem Inteligente

Matchers definem **quando** um hook dispara:

```json
{
  "matcher": "Bash|Edit|Write",
  "hooks": [...]
}
```

**Exemplos de matchers:**

| Matcher | Dispara para |
|---------|-------------|
| `Bash` | Apenas comandos Bash |
| `Edit\|Write` | Edicoes ou escritas de arquivo |
| `mcp__.*` | Qualquer ferramenta MCP |
| `mcp__bnp.*` | Ferramentas do MCP BNP |
| `*` | Todas as ferramentas |

### 2.6 Localizacao dos Arquivos de Configuracao

```
~/.claude/settings.json           ← Global (todos os projetos)
.claude/settings.json             ← Projeto (commitado no git)
.claude/settings.local.json       ← Projeto local (gitignored)
```

**Hierarquia:** Local > Projeto > Global

---

## Bloco 3: Casos de Uso Juridicos (15 min)

### 3.1 Caso 1: Protecao de Arquivos Sensiveis

**Problema:** Evitar que o CLERK edite arquivos de configuracao ou credenciais.

**Analogia:** Servidor de cartorio nao pode alterar certidoes ja assinadas.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "./.claude/hooks/proteger-arquivos.sh"
          }
        ]
      }
    ]
  }
}
```

**Script `.claude/hooks/proteger-arquivos.sh`:**

```bash
#!/bin/bash
# Bloqueia edicao de arquivos protegidos

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Arquivos que NUNCA devem ser editados pelo CLERK
PROTEGIDOS=(
  ".env"
  "credentials.json"
  ".claude/settings.json"
  "package-lock.json"
)

for arquivo in "${PROTEGIDOS[@]}"; do
  if [[ "$FILE_PATH" == *"$arquivo"* ]]; then
    echo '{
      "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": "Arquivo protegido: '"$FILE_PATH"'"
      }
    }' | jq -c .
    exit 0
  fi
done

exit 0
```

### 3.2 Caso 2: Auditoria de Acoes

**Problema:** Registrar TODAS as acoes do CLERK para accountability.

**Analogia:** Livro de registro do cartorio - toda acao e documentada.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "./.claude/hooks/audit-log.sh"
          }
        ]
      }
    ]
  }
}
```

**Script `.claude/hooks/audit-log.sh`:**

```bash
#!/bin/bash
# Registra todas as acoes em log de auditoria

INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.tool_name')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // "unknown"')

# Extrair detalhes relevantes por tipo de ferramenta
case "$TOOL" in
  "Bash")
    DETALHE=$(echo "$INPUT" | jq -r '.tool_input.command')
    ;;
  "Edit"|"Write")
    DETALHE=$(echo "$INPUT" | jq -r '.tool_input.file_path')
    ;;
  *)
    DETALHE=$(echo "$INPUT" | jq -c '.tool_input')
    ;;
esac

# Registrar no log
echo "[$TIMESTAMP] [$SESSION_ID] $TOOL: $DETALHE" >> ~/.claude/audit.log

exit 0
```

**Resultado:** Log com todas as acoes:
```
[2026-02-09 14:30:15] [abc123] Edit: /processo-12345/minuta.md
[2026-02-09 14:30:18] [abc123] Bash: npx prettier --write minuta.md
[2026-02-09 14:31:02] [abc123] mcp__bnp__buscar_precedentes: +bpc +idoso
```

### 3.3 Caso 3: Validacao de Citacoes

**Problema:** Garantir que toda minuta tenha citacoes verificadas antes de finalizar.

**Analogia:** Conferencia de certidao antes de expedicao.

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "agent",
            "prompt": "Verificar se a ultima minuta editada tem citacoes validas. Para cada precedente citado (Tema X, Sumula Y), confirmar que existe e a tese esta correta. Relatar problemas encontrados.",
            "timeout": 120
          }
        ]
      }
    ]
  }
}
```

### 3.4 Caso 4: Auto-Formatacao de Minutas

**Problema:** Garantir formatacao consistente em todas as minutas.

**Analogia:** Padrao de formatacao de pecas processuais.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs -I {} sh -c 'if [[ \"{}\" == *.md ]]; then npx prettier --write \"{}\"; fi'"
          }
        ]
      }
    ]
  }
}
```

### 3.5 Caso 5: Bloqueio de Comandos Destrutivos

**Problema:** Impedir que o CLERK execute comandos perigosos.

**Analogia:** Trava de seguranca em sistemas criticos.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "./.claude/hooks/bloquear-destrutivos.sh"
          }
        ]
      }
    ]
  }
}
```

**Script `.claude/hooks/bloquear-destrutivos.sh`:**

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

# Comandos proibidos
PROIBIDOS=(
  "rm -rf"
  "DROP TABLE"
  "DELETE FROM"
  "git push --force"
  "git reset --hard"
)

for proibido in "${PROIBIDOS[@]}"; do
  if echo "$COMMAND" | grep -qiE "$proibido"; then
    echo '{
      "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": "Comando destrutivo bloqueado: '"$proibido"'"
      }
    }' | jq -c .
    exit 0
  fi
done

exit 0
```

### 3.6 Caso 6: Notificacao ao Magistrado

**Problema:** Alertar quando o CLERK precisa de atencao humana.

**Analogia:** Campainha do gabinete quando assessor precisa de despacho.

**Windows (PowerShell):**
```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "permission_prompt",
        "hooks": [
          {
            "type": "command",
            "command": "powershell.exe -Command \"[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('CLERK precisa de sua atencao', 'Claude Code')\""
          }
        ]
      }
    ]
  }
}
```

**macOS:**
```json
{
  "command": "osascript -e 'display notification \"CLERK precisa de atencao\" with title \"Claude Code\"'"
}
```

**Linux:**
```json
{
  "command": "notify-send 'Claude Code' 'CLERK precisa de atencao'"
}
```

---

## Bloco 4: Implementacao Pratica (10 min)

### 4.1 Configurando Hooks via Menu Interativo

A forma mais facil de configurar hooks:

```bash
# No terminal Claude Code
/hooks
```

O menu interativo permite:
- Ver todos os hooks configurados
- Adicionar novo hook
- Deletar hook existente
- Escolher escopo (user/project/local)

### 4.2 Estrutura de Arquivos Recomendada

```
projeto/
├── .claude/
│   ├── settings.json          ← Configuracao de hooks
│   ├── settings.local.json    ← Overrides locais (gitignored)
│   └── hooks/                  ← Scripts de hooks
│       ├── proteger-arquivos.sh
│       ├── audit-log.sh
│       ├── bloquear-destrutivos.sh
│       └── validar-minuta.sh
```

### 4.3 Exemplo Completo: settings.json para CLERK

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/proteger-arquivos.sh",
            "statusMessage": "Verificando permissoes..."
          }
        ]
      },
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/bloquear-destrutivos.sh",
            "statusMessage": "Validando comando..."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/audit-log.sh",
            "async": true
          }
        ]
      },
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs -I {} sh -c 'if [[ \"{}\" == *.md ]]; then npx prettier --write \"{}\"; fi'",
            "statusMessage": "Formatando..."
          }
        ]
      }
    ],
    "Notification": [
      {
        "matcher": "permission_prompt",
        "hooks": [
          {
            "type": "command",
            "command": "powershell.exe -Command \"[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('CLERK precisa de sua atencao', 'Claude Code')\""
          }
        ]
      }
    ]
  }
}
```

### 4.4 Debugging de Hooks

**Ativar modo verbose:**
```bash
claude --debug
```

**Output esperado:**
```
[DEBUG] Executing hooks for PreToolUse:Bash
[DEBUG] Found 1 hook matchers in settings
[DEBUG] Matched 1 hooks for query "Bash"
[DEBUG] Executing hook command: ... with timeout 600000ms
[DEBUG] Hook command completed with status 0
```

**Problemas comuns:**

| Problema | Causa | Solucao |
|----------|-------|---------|
| Hook nao dispara | Matcher incorreto | Verificar regex e case |
| "command not found" | Path relativo | Usar `$CLAUDE_PROJECT_DIR` |
| "jq: not found" | jq nao instalado | Instalar jq no sistema |
| JSON parse error | Echo no shell profile | Condicionar echo a `[[ $- == *i* ]]` |

### 4.5 Seguranca de Hooks

**IMPORTANTE:** Hooks executam com suas permissoes de sistema.

```
┌─────────────────────────────────────────────────────────────────┐
│  CHECKLIST DE SEGURANCA                                         │
│                                                                 │
│  [ ] Scripts de hook tem permissao de execucao (chmod +x)       │
│  [ ] Validar inputs antes de usar (evitar injection)            │
│  [ ] Usar paths absolutos ou $CLAUDE_PROJECT_DIR                │
│  [ ] Testar hooks em ambiente seguro primeiro                   │
│  [ ] Revisar hooks antes de commitar no repositorio             │
│  [ ] Nao confiar em dados de $ARGUMENTS sem sanitizacao         │
└─────────────────────────────────────────────────────────────────┘
```

**Exemplo de sanitizacao:**

```bash
#!/bin/bash
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Bloquear path traversal
if [[ "$FILE_PATH" == *".."* ]]; then
  echo "Path traversal detectado" >&2
  exit 2
fi

# Continuar com operacao segura
```

---

## Sintese: O Que Aprendemos

### Conceitos-Chave

| Conceito | Definicao | Analogia Juridica |
|----------|-----------|-------------------|
| **Hook** | Comando que executa automaticamente | Protocolo obrigatorio |
| **PreToolUse** | Intercepta ANTES da acao | Conferencia previa |
| **PostToolUse** | Executa APOS a acao | Registro em ata |
| **Matcher** | Filtro de quando disparar | Competencia por materia |
| **Auditoria** | Log de todas as acoes | Livro de registro |

### A Analogia Central

```
┌─────────────────────────────────────────────────────────────────┐
│  INSTRUCOES NO CLAUDE.md = "Por favor, faca isso"               │
│                            (modelo TENTA seguir)                │
│                                                                 │
│  HOOKS = "Isso DEVE acontecer, sempre"                          │
│          (sistema GARANTE execucao)                             │
│                                                                 │
│  Analogia:                                                      │
│  - Instrucao = Orientacao verbal ao assessor                    │
│  - Hook = Protocolo formal do cartorio                          │
└─────────────────────────────────────────────────────────────────┘
```

### Fluxo de Decisao

```
┌─────────────────────────────────────────────────────────────────┐
│  QUANDO CLAUDE QUER USAR UMA FERRAMENTA                         │
│                                                                 │
│  1. Hook PreToolUse dispara                                     │
│     ├─ Se NEGA → Ferramenta bloqueada                           │
│     ├─ Se APROVA → Continua para 2                              │
│     └─ Se PERGUNTA → Vai para sistema de permissoes             │
│                                                                 │
│  2. Sistema de permissoes verifica                              │
│     ├─ Se NEGA → Bloqueada                                      │
│     └─ Se APROVA → Ferramenta executa                           │
│                                                                 │
│  3. Ferramenta EXECUTA                                          │
│                                                                 │
│  4. Hook PostToolUse dispara (ja executou)                      │
│     └─ Logging, formatacao, notificacao                         │
└─────────────────────────────────────────────────────────────────┘
```

### Citacao para Lembrar

> *"Hooks are the mechanism of determinism in Claude Code: they guarantee that project rules always execute, regardless of model decisions."*
> — Documentacao Anthropic
>
> *Traducao: "Hooks sao o mecanismo de determinismo no Claude Code: garantem que regras do projeto sempre executem, independente de decisoes do modelo."*

### Exercicio Pratico

**Tarefa:** Crie um hook que:
1. Intercepte toda edicao de arquivo `.md`
2. Verifique se o arquivo contem a palavra "RASCUNHO"
3. Se contiver, bloqueie a edicao com mensagem explicativa

**Dica:** Use `PreToolUse` com matcher `Edit|Write` e um script bash que verifica o conteudo.

**Solucao:**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "./.claude/hooks/verificar-rascunho.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# verificar-rascunho.sh

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Verificar se e arquivo .md
if [[ "$FILE_PATH" == *.md ]]; then
  # Verificar se contem RASCUNHO
  if grep -q "RASCUNHO" "$FILE_PATH" 2>/dev/null; then
    echo '{
      "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": "Arquivo marcado como RASCUNHO. Remova a marcacao antes de editar."
      }
    }' | jq -c .
    exit 0
  fi
fi

exit 0
```

---

## Recursos Adicionais

**Documentacao oficial:**
- https://code.claude.com/docs/en/hooks-guide.md
- https://code.claude.com/docs/en/hooks.md

**Comando util:**
- `/hooks` - Menu interativo para gerenciar hooks

---

*Aula 4.5 concluida - Hooks: Automacao Deterministica*
*Curso de Sistemas Agenticos para Juristas*
