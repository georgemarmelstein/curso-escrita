# Relatório de Revisão Crítica
## Seção MCPs - demo-anatomia-agents.html

**Data:** 29/01/2026
**Fonte de verificação:** Documentação oficial Anthropic via claude-code-guide
**Escopo:** Análise de erros, omissões, contradições e melhorias

---

## 1. ERROS DE CONTEÚDO

### 1.1 Transporte limitado a "stdin/stdout"

**Local:** `mcps-caracteristicas` → aba "Protocolo"

**Conteúdo atual:**
```
MCPs rodam como processos locais na sua máquina.
O Claude se comunica com eles via stdin/stdout.
```

**Problema:** MCP suporta **3 tipos de transporte**, não apenas stdin/stdout:

| Transporte | Descrição | Uso |
|------------|-----------|-----|
| **HTTP** | Requisições HTTP/HTTPS (RECOMENDADO) | Servidores remotos, APIs cloud |
| **SSE** | Server-Sent Events (DEPRECADO) | Legacy, evitar |
| **STDIO** | stdin/stdout local | Scripts locais, ferramentas de sistema |

**Ação:** Corrigir para explicar os 3 transportes, destacando HTTP como recomendado.

**Prioridade:** CRÍTICA

---

### 1.2 Configuração apenas via settings.json

**Local:** `mcps-conceito` → aba "O que é MCP" e `mcps-criar`

**Conteúdo atual:**
```
Configurado via command + args no settings.json.
```

**Problema:** A configuração de MCPs evoluiu. Agora existem:

| Método | Arquivo | Propósito |
|--------|---------|-----------|
| **Comando CLI** | `claude mcp add` | Forma moderna e recomendada |
| **Local** | `~/.claude.json` | MCPs privados do usuário |
| **Project** | `.mcp.json` (raiz) | Compartilhado via git com o time |
| **User** | `~/.claude.json` | Disponível em todos os projetos |

**Ação:** Atualizar para mostrar o comando `claude mcp add` e os diferentes escopos.

**Prioridade:** ALTA

---

## 2. OMISSÕES IMPORTANTES

### 2.1 Resources e Prompts não mencionados

**Local:** `mcps-caracteristicas` → aba "Ferramentas"

**O que falta:** MCP servers expõem 3 tipos de recursos, não apenas Tools:

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Tools** | Funções que Claude pode chamar | `query_database`, `create_issue` |
| **Resources** | Dados acessíveis via `@mention` | `@github:issue://123` |
| **Prompts** | Comandos pré-configurados | `/mcp__github__list_prs` |

**Ação:** Criar aba ou seção explicando os 3 tipos de exposição.

**Prioridade:** ALTA

---

### 2.2 Comando `claude mcp add`

**Local:** `mcps-criar` → aba "Usar Existente"

**O que falta:** O método moderno de adicionar MCPs:

```bash
# HTTP (recomendado para serviços remotos)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# STDIO (para ferramentas locais)
claude mcp add --transport stdio postgres -- npx -y @modelcontextprotocol/server-postgres

# Com autenticação
claude mcp add --transport http api https://api.example.com \
  --header "Authorization: Bearer token"
```

**Ação:** Substituir edição manual de settings.json pelo comando CLI.

**Prioridade:** ALTA

---

### 2.3 Escopos de configuração

**Local:** Não existe

**O que falta:** Hierarquia de escopos (similar a Agents/Skills/Commands):

| Escopo | Localização | Quando usar |
|--------|-------------|-------------|
| **Local** | `~/.claude.json` | MCPs privados, experimentais |
| **Project** | `.mcp.json` | Compartilhar com time via git |
| **User** | `~/.claude.json` | Usar em todos os projetos |

**Ação:** Adicionar aba "Escopo" em mcps-caracteristicas.

**Prioridade:** MÉDIA

---

### 2.4 Autenticação OAuth

**Local:** `mcps-caracteristicas` → aba "Segurança"

**O que falta:** MCP suporta autenticação OAuth 2.0 moderna:

1. Adicionar servidor: `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`
2. Dentro Claude Code: `/mcp` → Autenticar via browser
3. Tokens armazenados e refreshed automaticamente

**Ação:** Mencionar OAuth como opção de autenticação remota.

**Prioridade:** MÉDIA

---

### 2.5 Tool Search para muitos MCPs

**Local:** Não existe

**O que falta:** Quando há muitos MCPs, Tool Search otimiza performance:

- Ativa automaticamente se tools > 10% do contexto
- Carrega tools dinamicamente, não upfront
- Configurável via `ENABLE_TOOL_SEARCH=auto:5`

**Ação:** Adicionar nota sobre performance com muitos MCPs.

**Prioridade:** BAIXA

---

### 2.6 Variáveis de ambiente em .mcp.json

**Local:** `mcps-criar`

**O que falta:** Suporte a expansão de variáveis para compartilhar configs:

```json
{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer ${API_KEY}"
      }
    }
  }
}
```

**Ação:** Mencionar uso de variáveis de ambiente.

**Prioridade:** BAIXA

---

### 2.7 Nota sobre Windows

**Local:** Não existe

**O que falta:** Em Windows nativa, MCPs STDIO com npx requerem wrapper:

```bash
# Windows (CORRETO)
claude mcp add --transport stdio myserver -- cmd /c npx -y @pacote

# Windows (ERRADO - causa "Connection closed")
claude mcp add --transport stdio myserver -- npx -y @pacote
```

**Prioridade:** BAIXA (público específico)

---

## 3. INCONSISTÊNCIAS

### 3.1 "Servidor Local" para todos os MCPs

**Local:** `mcps-caracteristicas` → aba "Protocolo"

**Problema:** Diz que MCPs "rodam como processos locais", mas MCPs HTTP rodam remotamente (ex: `https://mcp.notion.com/mcp`).

**Ação:** Distinguir entre MCPs locais (STDIO) e remotos (HTTP).

**Prioridade:** MÉDIA

---

### 3.2 Exemplos usam formato antigo

**Local:** `mcps-exemplos`

**Problema:** Os exemplos mostram edição manual de settings.json com formato `"command": "npx"`, que é o formato antigo STDIO. Não mostram:
- Formato HTTP (mais comum agora)
- Comando `claude mcp add` (método moderno)

**Ação:** Atualizar exemplos para refletir práticas atuais.

**Prioridade:** MÉDIA

---

## 4. MELHORIAS SUGERIDAS

### 4.1 Adicionar aba "Componentes" em mcps-caracteristicas

Explicar os 3 tipos de exposição:
- **Tools** (funções)
- **Resources** (@mentions)
- **Prompts** (/mcp__server__comando)

### 4.2 Adicionar aba "Transportes" em mcps-caracteristicas

Explicar HTTP vs STDIO vs SSE com casos de uso.

### 4.3 Atualizar mcps-criar para comando CLI

Mostrar `claude mcp add` como método principal, edição manual como alternativa.

### 4.4 Adicionar aba "Escopo" em mcps-caracteristicas

Similar às seções de Agents/Skills/Commands.

### 4.5 Mostrar exemplo HTTP nos exemplos

O formato HTTP é mais comum para serviços populares (Sentry, GitHub, Notion).

---

## 5. RESUMO EXECUTIVO

| # | Tipo | Local | Descrição | Prioridade |
|---|------|-------|-----------|------------|
| 1.1 | Erro | mcps-caracteristicas | Só menciona STDIO, falta HTTP/SSE | **CRÍTICA** |
| 1.2 | Erro | mcps-conceito, mcps-criar | Só settings.json, falta CLI e .mcp.json | **ALTA** |
| 2.1 | Omissão | mcps-caracteristicas | Resources e Prompts não mencionados | **ALTA** |
| 2.2 | Omissão | mcps-criar | Comando `claude mcp add` | **ALTA** |
| 2.3 | Omissão | — | Escopos (local, project, user) | MÉDIA |
| 2.4 | Omissão | mcps-caracteristicas | OAuth para autenticação remota | MÉDIA |
| 2.5 | Omissão | — | Tool Search para performance | BAIXA |
| 2.6 | Omissão | mcps-criar | Variáveis de ambiente | BAIXA |
| 2.7 | Omissão | — | Nota sobre Windows | BAIXA |
| 3.1 | Inconsistência | mcps-caracteristicas | "Servidor Local" para MCPs HTTP | MÉDIA |
| 3.2 | Inconsistência | mcps-exemplos | Formato antigo, sem HTTP | MÉDIA |

---

## 6. DESCOBERTAS IMPORTANTES

### 6.1 MCP é um Padrão Aberto

MCP não é apenas uma feature do Claude Code — é um **padrão aberto** como HTTP. Pode ser usado por outros LLMs e ferramentas.

### 6.2 Três Tipos de Exposição

MCPs não expõem apenas "ferramentas". Expõem:
1. **Tools** (funções executáveis)
2. **Resources** (dados via @mention)
3. **Prompts** (comandos pré-configurados)

### 6.3 Transporte HTTP é o Recomendado

Para serviços remotos, HTTP é o transporte moderno e recomendado. SSE está deprecado. STDIO é para ferramentas locais.

### 6.4 Registro Oficial de MCPs

Centenas de MCPs disponíveis em:
- GitHub: `https://github.com/modelcontextprotocol/servers`
- Registro API: `https://api.anthropic.com/mcp-registry/docs`

---

## 7. FONTES

- [Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp.md)
- [Model Context Protocol - Official Site](https://modelcontextprotocol.io/)
- [MCP Servers Registry - GitHub](https://github.com/modelcontextprotocol/servers)

---

*Relatório gerado em 29/01/2026 via claude-code-guide*
