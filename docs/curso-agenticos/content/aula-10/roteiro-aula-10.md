# Aula 10: Engenharia de Conexões

> **Módulo 2: Prompts Agênticos**
> Duração estimada: 75-90 minutos

## Objetivo da Aula

Capacitar o aluno a conectar agentes Claude Code com sistemas externos usando as cinco principais abordagens: MCP (Model Context Protocol), Web Search nativo, integrações via API/Bash, Automação Web (Selenium/Playwright) e Browser Automation (Claude in Chrome). Ao final, o aluno saberá escolher a abordagem correta para cada cenário.

---

## Bloco 1: O Problema da Ilha

### O Agente Isolado

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENTE ISOLADO                               │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                   Claude Code                           │   │
│   │                                                         │   │
│   │   • Conhecimento até data de corte                      │   │
│   │   • Sem acesso a dados em tempo real                    │   │
│   │   • Sem acesso a sistemas internos                      │   │
│   │   • Sem acesso a APIs privadas                          │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│                           │  ?????                              │
│                           ▼                                     │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│   │  PJE     │  │ Bancos   │  │  APIs    │  │  Web     │       │
│   │          │  │ Dados    │  │          │  │          │       │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
│   "Como o agente acessa esses recursos?"                        │
└─────────────────────────────────────────────────────────────────┘
```

### Por que Conexões São Essenciais

| Sem Conexões | Com Conexões |
|--------------|--------------|
| Conhecimento estático | Dados em tempo real |
| Responde "não sei" | Busca e encontra |
| Isolado do contexto | Integrado ao workflow |
| Limitado a texto | Executa ações reais |

### As Cinco Portas de Saída

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                           CLAUDE CODE                                          │
│                                                                                │
│        ┌─────────────────────────────────────────────────────────────┐         │
│        │                   NÚCLEO DO AGENTE                          │         │
│        │                                                             │         │
│        │       Skills │ Commands │ Prompts │ Context                 │         │
│        │                                                             │         │
│        └───┬─────────┬─────────┬─────────┬─────────┬─────────────────┘         │
│            │         │         │         │         │                           │
│            ▼         ▼         ▼         ▼         ▼                           │
│       ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│       │  MCP   │ │  Web   │ │ Bash/  │ │Selenium│ │ Chrome │                   │
│       │Servers │ │ Search │ │  API   │ │Playwrt │ │  Auto  │                   │
│       └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘                   │
│           │          │          │          │          │                        │
└───────────┼──────────┼──────────┼──────────┼──────────┼────────────────────────┘
            │          │          │          │          │
            ▼          ▼          ▼          ▼          ▼
       ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
       │Sistemas│ │Internet│ │Scripts │ │  Sites │ │Browser │
       │Externos│ │Pública │ │ & APIs │ │sem API │ │ Visual │
       └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
```

> **Citação**: "Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems."
> — Anthropic, Model Context Protocol Docs

---

## Bloco 2: MCP - Model Context Protocol

### O Padrão Universal

MCP é o protocolo aberto da Anthropic para conectar LLMs a ferramentas externas de forma padronizada.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARQUITETURA MCP                              │
│                                                                 │
│   ┌──────────────┐         ┌──────────────┐                     │
│   │              │         │              │                     │
│   │  MCP CLIENT  │◄───────►│  MCP SERVER  │                     │
│   │ (Claude Code)│  JSON   │  (Sua Tool)  │                     │
│   │              │   RPC   │              │                     │
│   └──────────────┘         └──────────────┘                     │
│                                   │                             │
│                                   ▼                             │
│                            ┌──────────────┐                     │
│                            │   RECURSO    │                     │
│                            │   EXTERNO    │                     │
│                            │  (API, BD,   │                     │
│                            │   Arquivo)   │                     │
│                            └──────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

### Três Transportes

| Transporte | Uso | Quando Usar |
|------------|-----|-------------|
| **STDIO** | Local | Scripts, ferramentas do sistema |
| **HTTP** | Remoto | APIs cloud, serviços web |
| **SSE** | Streaming | Dados em tempo real (legado) |

### Anatomia de um MCP Server

```python
# mcp_exemplo.py - Servidor MCP mínimo com FastMCP
from fastmcp import FastMCP

mcp = FastMCP("Meu Servidor")

@mcp.tool()
def buscar_dados(termo: str) -> str:
    """
    Busca dados no sistema externo.

    Args:
        termo: O termo a ser buscado

    Returns:
        Resultado da busca formatado
    """
    # Lógica de conexão com sistema externo
    resultado = api_externa.buscar(termo)
    return f"Encontrado: {resultado}"

if __name__ == "__main__":
    mcp.run()
```

### Configuração no Claude Code

```json
// ~/.claude/settings.json
{
  "mcpServers": {
    "meu-servidor": {
      "command": "python",
      "args": ["~/.claude/mcp-servers/meu-servidor/server.py"],
      "env": {
        "API_KEY": "sua-chave"
      }
    }
  }
}
```

### Exemplo Real: MCPs Jurídicos do CLERK

```
┌─────────────────────────────────────────────────────────────────┐
│              MCPs JURÍDICOS IMPLEMENTADOS                       │
│                                                                 │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│   │  BNP-API    │   │    CJF      │   │ JULIA-TRF5  │           │
│   │             │   │             │   │             │           │
│   │ Precedentes │   │Jurisprud.   │   │  1º e 2º    │           │
│   │ Vinculantes │   │ Unificada   │   │   Grau      │           │
│   │ (STF/STJ)   │   │ (TRFs)      │   │  (TRF5)     │           │
│   └──────┬──────┘   └──────┬──────┘   └──────┬──────┘           │
│          │                 │                 │                  │
│          └─────────────────┼─────────────────┘                  │
│                            │                                    │
│                            ▼                                    │
│                    ┌───────────────┐                            │
│                    │  Claude Code  │                            │
│                    │               │                            │
│                    │ "Busque sobre │                            │
│                    │  pensão BPC"  │                            │
│                    └───────────────┘                            │
│                                                                 │
│   USO: Linguagem natural, sem comando explícito                 │
│   "Pesquise precedentes sobre auxílio-doença" → MCP ativado     │
└─────────────────────────────────────────────────────────────────┘
```

### Vantagens do MCP

1. **Discovery**: Agente descobre ferramentas automaticamente
2. **Documentação**: Descrições ricas guiam o uso correto
3. **Padronização**: Um protocolo, múltiplas ferramentas
4. **Iteração**: Agente pode refinar buscas progressivamente

### Cinco Regras de Ouro

| Regra | Descrição |
|-------|-----------|
| **Outcomes** | Descreva o que a tool faz, não como usar |
| **Args Planos** | Parâmetros simples (strings, números) |
| **Instructions** | Use description para contexto rico |
| **Token Budget** | Respeite limites, trunce outputs |
| **Curadoria** | Menos tools = melhor escolha do agente |

---

## Bloco 3: Web Search - Busca Nativa

### Acesso Direto à Internet

O Claude Code possui ferramenta nativa de busca web, sem necessidade de MCP.

```
┌─────────────────────────────────────────────────────────────────┐
│                    WEB SEARCH NATIVO                            │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                    Claude Code                           │  │
│   │                                                          │  │
│   │   User: "Qual a última decisão do STF sobre FGTS?"       │  │
│   │                                                          │  │
│   │   Claude:                                                │  │
│   │   1. Detecta necessidade de informação atual             │  │
│   │   2. Executa WebSearch automaticamente                   │  │
│   │   3. Analisa resultados                                  │  │
│   │   4. Responde com citações                               │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
│                            │                                    │
│                            ▼                                    │
│                     ┌─────────────┐                             │
│                     │  Internet   │                             │
│                     │  (via API)  │                             │
│                     └─────────────┘                             │
│                                                                 │
│   CUSTO: $10 por 1.000 buscas (além dos tokens)                 │
│   DISPONÍVEL: Claude 3.5 Sonnet, Claude 3.5 Haiku               │
└─────────────────────────────────────────────────────────────────┘
```

### Comportamento Agêntico

O Web Search pode operar de forma agêntica:

```
┌─────────────────────────────────────────────────────────────────┐
│              BUSCA PROGRESSIVA (AGÊNTICA)                       │
│                                                                 │
│   Pergunta: "Qual o entendimento atual sobre teletrabalho?"     │
│                                                                 │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│   │ Search 1 │──►│ Analisa  │──►│ Search 2 │──►│ Search 3 │     │
│   │ "tele-   │   │ resulta- │   │ "CLT     │   │ "STF     │     │
│   │ trabalho │   │ dos      │   │ tele-    │   │ home     │     │
│   │ lei"     │   │          │   │ trabalho"│   │ office"  │     │
│   └──────────┘   └──────────┘   └──────────┘   └──────────┘     │
│        │              │              │              │            │
│        ▼              ▼              ▼              ▼            │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │              RESPOSTA CONSOLIDADA                       │   │
│   │                                                         │   │
│   │  "Com base em múltiplas fontes [1][2][3], o            │   │
│   │   entendimento atual sobre teletrabalho é..."          │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   CONTROLE: Parâmetro max_uses limita número de buscas          │
└─────────────────────────────────────────────────────────────────┘
```

### Quando Usar Web Search

| Cenário | Web Search? |
|---------|-------------|
| Informação pós-knowledge cutoff | SIM |
| Verificar citações/fontes | SIM |
| Dados de sistemas internos | NÃO (use MCP) |
| APIs privadas | NÃO (use MCP/Bash) |
| Documentação técnica atual | SIM |

### Citações Automáticas

O Web Search retorna fontes automaticamente:

```
Resposta do Claude:

"De acordo com a Lei 14.442/2022, o teletrabalho passou a ter
regulamentação específica na CLT [1]. O STF, em decisão recente,
confirmou a constitucionalidade das novas regras [2]."

Fontes:
[1] https://www.planalto.gov.br/ccivil_03/...
[2] https://portal.stf.jus.br/...
```

---

## Bloco 4: Bash e API REST

### A Terceira Via: Execução Direta

Quando MCP é demais e Web Search não resolve, use Bash/API.

```
┌─────────────────────────────────────────────────────────────────┐
│              CONEXÃO VIA BASH/SCRIPTS                           │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                    Claude Code                           │  │
│   │                                                          │  │
│   │   # Chamada direta via curl                              │  │
│   │   curl -X GET "https://api.exemplo.com/dados" \          │  │
│   │        -H "Authorization: Bearer $TOKEN"                 │  │
│   │                                                          │  │
│   │   # Script Python para integração                        │  │
│   │   python scripts/integrar_sistema.py --acao buscar       │  │
│   │                                                          │  │
│   │   # Node.js para APIs complexas                          │  │
│   │   node scripts/api-client.js                             │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
│                            │                                    │
│                            ▼                                    │
│               ┌─────────────────────────┐                       │
│               │   API REST / Sistema    │                       │
│               └─────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

### Casos de Uso para Bash/API

| Cenário | Por que Bash/API? |
|---------|-------------------|
| Integração pontual | MCP seria overhead |
| Teste rápido de API | Sem infraestrutura |
| Scripts existentes | Reaproveitar código |
| Autenticação complexa | Controle total |
| Transformação de dados | Pipes do Unix |

### Exemplo: Integração PJE via Bash

```bash
# Baixar processo do PJE (exemplo simplificado)
#!/bin/bash

PROCESSO="0000123-45.2024.4.05.8100"
TOKEN="seu_token_aqui"

# Chamada à API do PJE
curl -X GET "https://pje.trf5.jus.br/api/processos/${PROCESSO}" \
     -H "Authorization: Bearer ${TOKEN}" \
     -H "Content-Type: application/json" \
     -o "processo_${PROCESSO}.json"

# Processar resultado
python processar_pje.py "processo_${PROCESSO}.json"
```

### Trade-offs

| Aspecto | MCP | Bash/API |
|---------|-----|----------|
| Setup inicial | Maior | Menor |
| Reutilização | Alta | Baixa |
| Documentação | Automática | Manual |
| Manutenção | Centralizada | Dispersa |
| Flexibilidade | Estruturada | Total |

---

## Bloco 5: Matriz de Decisão

### Escolhendo a Conexão Certa

```
┌─────────────────────────────────────────────────────────────────┐
│              ÁRVORE DE DECISÃO: CONEXÕES                        │
│                                                                 │
│                    ┌─────────────────┐                          │
│                    │ Preciso acessar │                          │
│                    │ dados externos? │                          │
│                    └────────┬────────┘                          │
│                             │                                   │
│              ┌──────────────┴──────────────┐                    │
│              ▼                             ▼                    │
│    ┌─────────────────┐           ┌─────────────────┐            │
│    │ Dados públicos  │           │ Sistema privado │            │
│    │ da internet?    │           │ ou API interna? │            │
│    └────────┬────────┘           └────────┬────────┘            │
│             │                             │                     │
│      ┌──────┴──────┐              ┌───────┴───────┐             │
│      ▼             ▼              ▼               ▼             │
│ ┌─────────┐  ┌─────────┐   ┌──────────┐   ┌──────────┐          │
│ │   Web   │  │  MCP    │   │   MCP    │   │  Bash/   │          │
│ │ Search  │  │ público │   │ privado  │   │   API    │          │
│ └─────────┘  └─────────┘   └──────────┘   └──────────┘          │
│                                                                 │
│ • Notícias   • GitHub      • BD interno   • Teste rápido        │
│ • Docs       • Slack       • PJE          • Script único        │
│ • Artigos    • Figma       • Sistemas     • Integração          │
│                              corporativos   pontual             │
└─────────────────────────────────────────────────────────────────┘
```

### Comparativo Completo

| Critério | Web Search | MCP | Bash/API |
|----------|------------|-----|----------|
| **Setup** | Zero | Médio | Baixo |
| **Custo** | $10/1k buscas | Infraestrutura | Variável |
| **Escopo** | Internet pública | Definido pelo server | Ilimitado |
| **Reutilização** | Automática | Alta | Baixa |
| **Documentação** | N/A | Obrigatória | Manual |
| **Segurança** | Sandboxed | Controlada | Responsabilidade sua |
| **Debugging** | Limitado | MCP_DEBUG | Total |

### Padrão Híbrido: Combinando Conexões

```
┌─────────────────────────────────────────────────────────────────┐
│              EXEMPLO: SISTEMA CLERK                             │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                    Claude Code                          │   │
│   │                                                         │   │
│   │   FASE 1: Preparação                                    │   │
│   │   └── Bash: curl para baixar PDF do PJE                 │   │
│   │                                                         │   │
│   │   FASE 3: Pesquisa                                      │   │
│   │   └── MCP: BNP, CJF, JULIA para precedentes             │   │
│   │                                                         │   │
│   │   FASE 6: Revisão                                       │   │
│   │   └── Web Search: verificar citações externas           │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   PRINCÍPIO: Use a ferramenta certa para cada tarefa            │
└─────────────────────────────────────────────────────────────────┘
```

### Segurança: Alerta Importante

> **Aviso Anthropic**: "Use third party MCP servers at your own risk - Anthropic has not verified the correctness or security of all these servers. Make sure you trust MCP servers you are installing."

**Checklist de Segurança**:
- [ ] MCP server vem de fonte confiável?
- [ ] Código foi auditado?
- [ ] Credenciais estão em variáveis de ambiente?
- [ ] Permissões são mínimas necessárias?
- [ ] Logs não expõem dados sensíveis?

---

## Bloco 6: Automação Web (Selenium/Playwright)

### O Problema: Sites Sem API

Muitos sistemas legados ou sites públicos não oferecem API. Como acessá-los?

```
┌─────────────────────────────────────────────────────────────────┐
│              O DILEMA DA AUTOMAÇÃO                              │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                SITE SEM API                              │  │
│   │                                                          │  │
│   │   • Formulários HTML                                     │  │
│   │   • Login com CAPTCHA                                    │  │
│   │   • Navegação complexa                                   │  │
│   │   • Dados em tabelas dinâmicas                           │  │
│   │   • JavaScript pesado                                    │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
│                           │                                     │
│                           │  Solução?                           │
│                           ▼                                     │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │          AUTOMAÇÃO DE BROWSER                            │  │
│   │                                                          │  │
│   │   Selenium │ Playwright │ Puppeteer                      │  │
│   │                                                          │  │
│   │   "Controlar um navegador como se fosse um humano"       │  │
│   └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Frameworks de Automação

| Framework | Linguagens | Vantagens | Desvantagens |
|-----------|------------|-----------|--------------|
| **Selenium** | Python, Java, JS, C# | Maduro, documentação vasta | Lento, setup complexo |
| **Playwright** | Python, JS, .NET | Rápido, multi-browser | Mais recente |
| **Puppeteer** | JavaScript/Node | Nativo Chrome, leve | Só Chrome/Chromium |

### Exemplo: Selenium com Python

```python
# automacao_pje.py - Exemplo de automação do PJE
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configurar o driver
driver = webdriver.Chrome()

try:
    # Acessar o site
    driver.get("https://pje.trf5.jus.br/pje")

    # Aguardar elemento carregar
    wait = WebDriverWait(driver, 10)
    campo_processo = wait.until(
        EC.presence_of_element_located((By.ID, "numeroProcesso"))
    )

    # Preencher formulário
    campo_processo.send_keys("0000123-45.2024.4.05.8100")

    # Clicar no botão de busca
    btn_buscar = driver.find_element(By.ID, "btnPesquisar")
    btn_buscar.click()

    # Extrair dados
    resultado = wait.until(
        EC.presence_of_element_located((By.CLASS_NAME, "resultadoPesquisa"))
    )
    dados = resultado.text

finally:
    driver.quit()
```

### Exemplo: Playwright (Mais Moderno)

```python
# automacao_playwright.py - Exemplo com Playwright
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # Lançar navegador (headless ou visível)
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # Navegar
    page.goto("https://pje.trf5.jus.br/pje")

    # Preencher com seletores mais simples
    page.fill("#numeroProcesso", "0000123-45.2024.4.05.8100")

    # Clicar e aguardar navegação
    page.click("#btnPesquisar")
    page.wait_for_selector(".resultadoPesquisa")

    # Extrair texto
    dados = page.text_content(".resultadoPesquisa")

    browser.close()
```

### Integração com Claude Code via Bash

O Claude Code pode orquestrar automações:

```
┌─────────────────────────────────────────────────────────────────┐
│              CLAUDE CODE + SELENIUM                             │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                    Claude Code                           │  │
│   │                                                          │  │
│   │   User: "Baixe os dados do processo 123 do PJE"          │  │
│   │                                                          │  │
│   │   Claude:                                                │  │
│   │   1. Prepara parâmetros                                  │  │
│   │   2. Executa: python automacao_pje.py --processo 123     │  │
│   │   3. Lê arquivo de saída                                 │  │
│   │   4. Analisa e responde                                  │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
│                            │                                    │
│                            ▼                                    │
│               ┌─────────────────────────┐                       │
│               │   Script Selenium       │                       │
│               │   (execução externa)    │                       │
│               └─────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

### Quando Usar Automação Web

| Cenário | Automação Web? | Motivo |
|---------|----------------|--------|
| Site sem API | **SIM** | Única opção |
| Sistema legado com interface web | **SIM** | Simular usuário |
| Scraping de dados públicos | **SIM** | Extrair informações |
| API disponível e documentada | **NÃO** | Use MCP ou Bash |
| Dados em tempo real | **NÃO** | Lento demais |

### Limitações e Riscos

> **Aviso**: Automação web pode violar termos de serviço de alguns sites. Sempre verifique as políticas antes de automatizar.

**Desafios comuns**:
- CAPTCHAs e verificações anti-bot
- Sites com JavaScript pesado
- Mudanças frequentes na estrutura HTML
- Performance (cada ação é lenta)
- Manutenção de seletores

---

## Bloco 7: Browser Automation - Claude in Chrome

### A Fronteira: Computer Use

O Claude in Chrome representa a evolução máxima da automação: o agente **vê** e **interage** com o navegador como um humano.

```
┌─────────────────────────────────────────────────────────────────┐
│              COMPUTER USE - A NOVA FRONTEIRA                    │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │           AUTOMAÇÃO TRADICIONAL vs COMPUTER USE          │  │
│   │                                                          │  │
│   │   SELENIUM/PLAYWRIGHT            COMPUTER USE            │  │
│   │   ┌─────────────────┐          ┌─────────────────┐       │  │
│   │   │ Seletores CSS   │          │  Visão + Ação   │       │  │
│   │   │ IDs/Classes     │          │  Screenshot     │       │  │
│   │   │ XPath           │          │  Click (x,y)    │       │  │
│   │   │                 │          │  Type           │       │  │
│   │   │ FRÁGIL          │          │  ROBUSTO        │       │  │
│   │   │ (depende HTML)  │          │  (visual)       │       │  │
│   │   └─────────────────┘          └─────────────────┘       │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│   "O agente vê a tela como você vê"                             │
└─────────────────────────────────────────────────────────────────┘
```

### Arquitetura do Claude in Chrome

```
┌─────────────────────────────────────────────────────────────────┐
│              CLAUDE IN CHROME - ARQUITETURA                     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                    Claude Code (CLI)                     │  │
│   │                          │                               │  │
│   │                          │ MCP Protocol                  │  │
│   │                          ▼                               │  │
│   │   ┌──────────────────────────────────────────────────┐   │  │
│   │   │            Chrome Extension (MCP Server)         │   │  │
│   │   │                                                  │   │  │
│   │   │   Tools disponíveis:                             │   │  │
│   │   │   • read_page - Ler árvore de acessibilidade     │   │  │
│   │   │   • computer - Screenshots, clicks, typing       │   │  │
│   │   │   • navigate - Ir para URLs                      │   │  │
│   │   │   • find - Buscar elementos por descrição        │   │  │
│   │   │   • form_input - Preencher formulários           │   │  │
│   │   │   • javascript_tool - Executar JS                │   │  │
│   │   │                                                  │   │  │
│   │   └──────────────────────────────────────────────────┘   │  │
│   │                          │                               │  │
│   │                          ▼                               │  │
│   │   ┌──────────────────────────────────────────────────┐   │  │
│   │   │              Chrome Browser                      │   │  │
│   │   │                                                  │   │  │
│   │   │   Qualquer site, qualquer aplicação web          │   │  │
│   │   │                                                  │   │  │
│   │   └──────────────────────────────────────────────────┘   │  │
│   │                                                          │  │
│   └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Ferramentas Disponíveis

| Tool | Função | Exemplo de Uso |
|------|--------|----------------|
| `read_page` | Ler estrutura da página | Entender layout, encontrar elementos |
| `computer` | Ações de mouse/teclado | Cliques, digitação, scroll |
| `navigate` | Navegar para URL | Abrir sites, voltar/avançar |
| `find` | Buscar por descrição | "Encontre o botão de login" |
| `form_input` | Preencher campos | Input de texto, selects |
| `javascript_tool` | Executar JavaScript | Extrair dados, manipular DOM |
| `screenshot` | Capturar tela | Ver estado visual atual |

### Fluxo Típico de Uso

```
┌─────────────────────────────────────────────────────────────────┐
│              FLUXO: CLAUDE IN CHROME                            │
│                                                                 │
│   1. CONTEXTO                                                   │
│      └── tabs_context_mcp: "Quais abas estão abertas?"          │
│                                                                 │
│   2. NAVEGAR                                                    │
│      └── navigate: "Vá para https://site.com"                   │
│                                                                 │
│   3. OBSERVAR                                                   │
│      └── computer(screenshot) ou read_page                      │
│      └── "O que há na página?"                                  │
│                                                                 │
│   4. ENCONTRAR                                                  │
│      └── find: "Encontre o campo de busca"                      │
│      └── Retorna: ref_1, ref_2... (referências)                 │
│                                                                 │
│   5. INTERAGIR                                                  │
│      └── form_input(ref_1, "meu texto")                         │
│      └── computer(left_click, [x, y])                           │
│                                                                 │
│   6. VERIFICAR                                                  │
│      └── computer(screenshot): "Funcionou?"                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Exemplo Prático: Preencher Formulário

```
┌─────────────────────────────────────────────────────────────────┐
│   DIÁLOGO CLAUDE IN CHROME                                      │
│                                                                 │
│   User: "Acesse o site do tribunal e busque o processo 123"     │
│                                                                 │
│   Claude:                                                       │
│   1. navigate(url="https://tribunal.jus.br")                    │
│   2. computer(action="screenshot") → analisa a tela             │
│   3. find(query="campo de busca de processo")                   │
│      → ref_1 identificado                                       │
│   4. form_input(ref="ref_1", value="123")                       │
│   5. find(query="botão pesquisar")                              │
│      → ref_2 identificado                                       │
│   6. computer(action="left_click", ref="ref_2")                 │
│   7. computer(action="wait", duration=2)                        │
│   8. computer(action="screenshot") → mostra resultado           │
│                                                                 │
│   "Encontrei o processo. Aqui está o resultado..."              │
└─────────────────────────────────────────────────────────────────┘
```

### Vantagens do Computer Use

| Vantagem | Descrição |
|----------|-----------|
| **Robustez** | Não depende de seletores CSS/XPath |
| **Flexibilidade** | Funciona em qualquer site |
| **Naturalidade** | Interação visual como humano |
| **Adaptabilidade** | Menos quebra com mudanças de layout |
| **Acessibilidade** | Usa árvore de acessibilidade |

### Limitações e Considerações

| Limitação | Descrição |
|-----------|-----------|
| **Velocidade** | Mais lento que APIs diretas |
| **Custo** | Screenshots consomem tokens |
| **Segurança** | Não digita senhas automaticamente |
| **CAPTCHAs** | Não resolve verificações anti-bot |
| **Estabilidade** | Depende da extensão estar ativa |

### Quando Usar Cada Abordagem

```
┌─────────────────────────────────────────────────────────────────┐
│              MATRIZ: SELENIUM vs COMPUTER USE                   │
│                                                                 │
│   ┌────────────────────────┬────────────────────────┐           │
│   │       SELENIUM         │     COMPUTER USE       │           │
│   ├────────────────────────┼────────────────────────┤           │
│   │ • Tarefas repetitivas  │ • Tarefas exploratórias│           │
│   │ • Estrutura conhecida  │ • Sites desconhecidos  │           │
│   │ • Alta performance     │ • Flexibilidade máxima │           │
│   │ • Ambiente controlado  │ • Ambiente variável    │           │
│   │ • Scripts batch        │ • Interação ad-hoc     │           │
│   └────────────────────────┴────────────────────────┘           │
│                                                                 │
│   REGRA PRÁTICA:                                                │
│   • Conhece a estrutura + repetitivo → Selenium/Playwright      │
│   • Exploratório + visual + ad-hoc → Computer Use               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Exercício Prático

### Cenário: Escolha a Conexão

Para cada necessidade, indique a melhor abordagem:

1. **Verificar se uma súmula ainda está vigente**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

2. **Buscar processos no PJE interno**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

3. **Consultar API do GitHub para issues**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

4. **Pesquisar notícias recentes sobre uma lei**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

5. **Preencher formulário em site legado sem API**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

6. **Navegar site desconhecido para explorar funcionalidades**
   - [ ] Web Search
   - [ ] MCP
   - [ ] Bash/API
   - [ ] Selenium/Playwright
   - [ ] Computer Use

### Gabarito

1. **Web Search** - Informação pública, atualizada
2. **MCP** - Sistema recorrente, precisa de estrutura (ou Selenium se não houver API)
3. **MCP** - Existe MCP oficial do GitHub
4. **Web Search** - Notícias públicas, sem API específica
5. **Selenium/Playwright** - Estrutura conhecida, repetitivo, sem API
6. **Computer Use** - Exploratório, visual, flexibilidade máxima

---

## Resumo da Aula

```
┌─────────────────────────────────────────────────────────────────┐
│              ENGENHARIA DE CONEXÕES                             │
│                                                                 │
│   1. PROBLEMA DA ILHA                                           │
│      • Agentes isolados são limitados                           │
│      • Conexões habilitam ação no mundo real                    │
│                                                                 │
│   2. MCP (Model Context Protocol)                               │
│      • Padrão universal "USB-C para IA"                         │
│      • Discovery + Documentação + Padronização                  │
│      • Use para: integrações recorrentes, sistemas internos     │
│                                                                 │
│   3. WEB SEARCH                                                 │
│      • Busca nativa, sem setup                                  │
│      • Comportamento agêntico (múltiplas buscas)                │
│      • Use para: informação pública, verificação de fontes      │
│                                                                 │
│   4. BASH/API                                                   │
│      • Flexibilidade total                                      │
│      • Menor overhead de setup                                  │
│      • Use para: integrações pontuais, scripts existentes       │
│                                                                 │
│   5. SELENIUM/PLAYWRIGHT                                        │
│      • Automação via seletores (CSS, XPath)                     │
│      • Controle programático do browser                         │
│      • Use para: sites sem API, tarefas repetitivas             │
│                                                                 │
│   6. COMPUTER USE (Claude in Chrome)                            │
│      • Automação visual (screenshots + clicks)                  │
│      • Mais robusto, menos dependente de estrutura HTML         │
│      • Use para: exploração, sites desconhecidos, ad-hoc        │
│                                                                 │
│   7. DECISÃO - AS 5 PORTAS DE SAÍDA                             │
│      • Web Search → Internet pública                            │
│      • MCP → Sistemas recorrentes                               │
│      • Bash → Integrações pontuais                              │
│      • Selenium → Sites sem API, estrutura conhecida            │
│      • Computer Use → Exploração visual, flexibilidade máxima   │
│                                                                 │
│   PRINCÍPIO: Combine conexões conforme a necessidade            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Leitura Complementar

- [MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)
- [Web Search Tool - Claude Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)
- [Introducing MCP - Anthropic](https://www.anthropic.com/news/model-context-protocol)
- [Building Agents with Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)
- [Selenium Documentation](https://www.selenium.dev/documentation/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Computer Use - Anthropic](https://www.anthropic.com/news/developing-computer-use)
- [Claude in Chrome Extension](https://chromewebstore.google.com/detail/claude-in-chrome)

---

## Navegação

← [Aula 9: Engenharia de Workflows](aula-09/roteiro-aula-09.md)
→ [Glossário](../docs/glossario-taxonomia-agentes.md)
