# Aula 7: Engenharia de Contexto

> **Duração:** ~2h30 (versão expandida com insights de especialistas)
> **Tipo:** Teórico-Prático
> **Módulo:** 2 - Prompts Agênticos
> **Pré-requisito:** Aula 6 (Engenharia de Prompt)

---

## Objetivo da Aula

Dominar a arte de gerenciar o contexto que alimenta sistemas agênticos. Você aprenderá a estruturar informações de forma que o agente tenha acesso ao que precisa, quando precisa, sem desperdiçar tokens.

**Lema:** "Contexto rico supera instruções longas."

### Por Que Engenharia de Contexto?

> *"Context is King. A well-structured context makes the model smarter than any instruction could."*
> — Dex Horthy (12 Factor Agents)
>
> *Tradução: "Contexto é Rei. Um contexto bem estruturado torna o modelo mais inteligente do que qualquer instrução poderia."*

```
┌─────────────────────────────────────────────────────────────────┐
│              POR QUE ENGENHARIA DE CONTEXTO?                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O PROBLEMA:                                                   │
│   ───────────                                                   │
│   • CLAUDE.md com 2000 linhas = tokens desperdiçados            │
│   • Informação embutida = desatualizada                         │
│   • Contexto inchado = resposta mais lenta                      │
│   • Sem estrutura = agente confuso                              │
│                                                                 │
│   A SOLUÇÃO:                                                    │
│   ───────────                                                   │
│   • CLAUDE.md enxuto (200-300 linhas)                           │
│   • Progressive Disclosure (detalhes sob demanda)               │
│   • Hierarquia clara (global → projeto → subpasta)              │
│   • Referências em vez de conteúdo embutido                     │
│                                                                 │
│   COMPARAÇÃO DE CUSTO:                                          │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                                                         │   │
│   │   CLAUDE.md INCHADO:                                    │   │
│   │   2000 linhas × ~5 tokens/linha = 10.000 tokens         │   │
│   │   × 100 requisições/dia = 1.000.000 tokens/dia          │   │
│   │                                                         │   │
│   │   CLAUDE.md OTIMIZADO:                                  │   │
│   │   300 linhas × ~5 tokens/linha = 1.500 tokens           │   │
│   │   × 100 requisições/dia = 150.000 tokens/dia            │   │
│   │                                                         │   │
│   │   ECONOMIA: 85% de redução em tokens de contexto        │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Bloco 1: O Problema do Contexto Inchado (20 min)

### 1.1 Por Que CLAUDE.md Gigante é Anti-Padrão

> *"Metadata visible, details loaded on demand."*
> — Barry Zhang, Anthropic (AI Engineer Summit 2024)
>
> *Tradução: "Metadados visíveis, detalhes carregados sob demanda."*

```
┌─────────────────────────────────────────────────────────────────┐
│              O ANTI-PADRÃO: CLAUDE.md GIGANTE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   SINTOMAS:                                                     │
│   ─────────                                                     │
│   • CLAUDE.md com mais de 500 linhas                            │
│   • Documentação inteira embutida                               │
│   • Exemplos longos inline                                      │
│   • Histórico de decisões completo                              │
│   • Logs de reuniões                                            │
│                                                                 │
│   PROBLEMAS CAUSADOS:                                           │
│   ───────────────────                                           │
│   1. CUSTO: Tokens desperdiçados em TODA requisição             │
│   2. VELOCIDADE: Resposta mais lenta (mais contexto)            │
│   3. QUALIDADE: Modelo pode se confundir com excesso            │
│   4. MANUTENÇÃO: Difícil manter atualizado                      │
│   5. DESATUALIZAÇÃO: Cópias ficam defasadas                     │
│                                                                 │
│   EXEMPLO DE CLAUDE.md INCHADO:                                 │
│   ────────────────────────────────                              │
│   # Projeto CLERK                                               │
│                                                                 │
│   ## Histórico                                                  │
│   [500 linhas de histórico]                                     │
│                                                                 │
│   ## Arquitetura                                                │
│   [200 linhas de detalhes técnicos]                             │
│                                                                 │
│   ## API Reference                                              │
│   [300 linhas de documentação de API]                           │
│                                                                 │
│   ## Exemplos de Uso                                            │
│   [400 linhas de exemplos]                                      │
│                                                                 │
│   ## Decisões de Design                                         │
│   [200 linhas de ADRs]                                          │
│                                                                 │
│   ## Logs de Reuniões                                           │
│   [400 linhas de atas]                                          │
│                                                                 │
│   TOTAL: 2000 linhas = ~10.000 tokens por requisição            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 O Custo Real do Contexto

```
┌─────────────────────────────────────────────────────────────────┐
│                  CUSTO REAL DO CONTEXTO                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CONTA SIMPLES:                                                │
│   ──────────────                                                │
│   • CLAUDE.md é lido em TODA requisição                         │
│   • Cada linha ≈ 5 tokens                                       │
│   • Preço: $3/1M tokens (input, Claude 3.5 Sonnet)              │
│                                                                 │
│   CENÁRIO: 100 requisições/dia, 30 dias/mês                     │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                                                         │   │
│   │   CLAUDE.md INCHADO (2000 linhas):                      │   │
│   │   10.000 tokens × 100 req × 30 dias = 30M tokens/mês    │   │
│   │   Custo: $90/mês só em CLAUDE.md                        │   │
│   │                                                         │   │
│   │   CLAUDE.md OTIMIZADO (300 linhas):                     │   │
│   │   1.500 tokens × 100 req × 30 dias = 4.5M tokens/mês    │   │
│   │   Custo: $13.50/mês                                     │   │
│   │                                                         │   │
│   │   ECONOMIA: $76.50/mês (85%)                            │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   E ISSO É SÓ O CLAUDE.MD:                                      │
│   O resto do contexto (arquivos, conversa, tools)               │
│   também consome tokens.                                        │
│                                                                 │
│   IMPACTO NA QUALIDADE:                                         │
│   ─────────────────────                                         │
│   • Contexto muito grande = modelo pode ignorar partes          │
│   • Informação irrelevante = distração                          │
│   • Contexto focado = respostas mais precisas                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Bloco 2: Progressive Disclosure (30 min)

### 2.1 O Princípio

> *"Progressive Disclosure means showing the summary first, with details available on request."*
> — Barry Zhang, Anthropic
>
> *Tradução: "Progressive Disclosure significa mostrar o resumo primeiro, com detalhes disponíveis sob demanda."*

```
┌─────────────────────────────────────────────────────────────────┐
│                  PROGRESSIVE DISCLOSURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PRINCÍPIO:                                                    │
│   ──────────                                                    │
│   Metadados VISÍVEIS sempre                                     │
│   Detalhes CARREGADOS sob demanda                               │
│                                                                 │
│   ANALOGIA:                                                     │
│   ──────────                                                    │
│   • Sumário de livro (sempre visível)                           │
│   • Capítulos (abertos quando necessário)                       │
│                                                                 │
│   IMPLEMENTAÇÃO:                                                │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  CLAUDE.md (sempre carregado)                           │   │
│   │  ─────────────────────────────                          │   │
│   │  # Projeto CLERK                                        │   │
│   │                                                         │   │
│   │  Sistema de análise jurídica para casos previdenciários.│   │
│   │                                                         │   │
│   │  ## Documentação                                        │   │
│   │  - Arquitetura: Ver `docs/arquitetura.md`               │   │
│   │  - API: Ver `docs/api.md`                               │   │
│   │  - Decisões: Ver `docs/adrs/`                           │   │
│   │                                                         │   │
│   │  ## Skills Disponíveis                                  │   │
│   │  - `relatorio-judicial` - Gera relatórios               │   │
│   │  - `elaboracao-minuta` - Cria minutas                   │   │
│   │                                                         │   │
│   │  ## Convenções                                          │   │
│   │  - Arquivos: kebab-case                                 │   │
│   │  - Variáveis: camelCase                                 │   │
│   │  - Idioma docs: Português                               │   │
│   └─────────────────────────────────────────────────────────┘   │
│                    │                                            │
│                    │ Quando o Claude precisa de detalhes,       │
│                    │ ele abre o arquivo referenciado.           │
│                    ▼                                            │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  docs/arquitetura.md (carregado sob demanda)            │   │
│   │  ─────────────────────────────────────────              │   │
│   │  # Arquitetura do CLERK                                 │   │
│   │                                                         │   │
│   │  ## Visão Geral                                         │   │
│   │  [200 linhas de detalhes...]                            │   │
│   │                                                         │   │
│   │  ## Componentes                                         │   │
│   │  [150 linhas de detalhes...]                            │   │
│   │                                                         │   │
│   │  ## Fluxos                                              │   │
│   │  [100 linhas de detalhes...]                            │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   RESULTADO:                                                    │
│   ──────────                                                    │
│   • CLAUDE.md: 50 linhas (sempre lido)                          │
│   • docs/arquitetura.md: 450 linhas (só quando necessário)      │
│   • Economia: 400 linhas × ~100 req = 40.000 tokens/dia         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Estrutura Ideal do CLAUDE.md

```
┌─────────────────────────────────────────────────────────────────┐
│              ESTRUTURA IDEAL DO CLAUDE.md                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   TAMANHO ALVO: 200-300 linhas                                  │
│                                                                 │
│   SEÇÕES OBRIGATÓRIAS:                                          │
│   ─────────────────────                                         │
│                                                                 │
│   1. CABEÇALHO (5-10 linhas)                                    │
│      - Nome do projeto                                          │
│      - Descrição em 1-2 frases                                  │
│      - Propósito principal                                      │
│                                                                 │
│   2. CONTEXTO ESSENCIAL (20-30 linhas)                          │
│      - Fatos que o agente PRECISA saber                         │
│      - Restrições do ambiente                                   │
│      - Premissas fundamentais                                   │
│                                                                 │
│   3. REFERÊNCIAS (30-50 linhas)                                 │
│      - Links para documentação detalhada                        │
│      - Formato: "Tema: Ver `caminho/arquivo.md`"                │
│      - Organizadas por categoria                                │
│                                                                 │
│   4. CONVENÇÕES (20-30 linhas)                                  │
│      - Nomenclatura de arquivos                                 │
│      - Padrões de código                                        │
│      - Idioma e formatação                                      │
│                                                                 │
│   5. RESTRIÇÕES (20-30 linhas)                                  │
│      - O que NÃO fazer (NUNCA)                                  │
│      - Arquivos/pastas protegidos                               │
│      - Limites de autonomia                                     │
│                                                                 │
│   6. COMMANDS DISPONÍVEIS (30-50 linhas)                        │
│      - Lista de commands com descrição curta                    │
│      - Formato: `/comando` - O que faz                          │
│                                                                 │
│   7. ESTRUTURA DO PROJETO (20-30 linhas)                        │
│      - Árvore de pastas principais                              │
│      - Descrição de cada pasta                                  │
│                                                                 │
│   SEÇÕES OPCIONAIS (se couber):                                 │
│   ────────────────────────────                                  │
│   - Status atual do projeto                                     │
│   - Próximos passos                                             │
│   - Contatos/responsáveis                                       │
│                                                                 │
│   O QUE NÃO INCLUIR:                                            │
│   ───────────────────                                           │
│   ✗ Histórico completo                                          │
│   ✗ Logs de reuniões                                            │
│   ✗ Documentação de API completa                                │
│   ✗ Exemplos extensos                                           │
│   ✗ ADRs (Architecture Decision Records)                        │
│   ✗ Tutoriais passo a passo                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Exemplo Completo: CLAUDE.md Otimizado

```markdown
# CLAUDE.md - Projeto CLERK

Sistema de assessoria jurídica agêntica para análise de processos
previdenciários na Justiça Federal da 5ª Região.

## Contexto Essencial

- **Jurisdição:** TRF5 (CE, RN, PB, PE, AL, SE)
- **Foco:** BPC, auxílio-doença, aposentadoria
- **Volume:** ~50 processos/mês
- **Prioridade:** Qualidade > Velocidade

## Documentação

| Tema | Arquivo |
|------|---------|
| Arquitetura | `docs/arquitetura.md` |
| API dos MCPs | `docs/api-mcps.md` |
| Fluxo completo | `docs/fluxo-clerk.md` |
| Decisões de design | `docs/adrs/` |

## Skills Disponíveis

- `relatorio-judicial` - Gera relatórios estruturados de processos
- `elaboracao-minuta` - Cria minutas de decisão
- `pesquisa-precedentes` - Conhecimento para pesquisa jurisprudencial

## Commands do Projeto

| Command | Descrição |
|---------|-----------|
| `/relatar-processo` | Gera relatório de processo |
| `/analisar-caso` | Pesquisa + classifica + orienta |
| `/elaborar-minuta` | Cria minuta de decisão |
| `/revisar-sentenca` | Revisão com 3 subagentes |

## Convenções

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Arquivos | kebab-case | `meu-arquivo.md` |
| Pastas | kebab-case | `minha-pasta/` |
| Variáveis | camelCase | `minhaVariavel` |
| Constantes | SCREAMING_SNAKE | `MAX_TOKENS` |
| Idioma docs | Português | |
| Idioma código | Inglês | |

## Restrições

- NUNCA inventar jurisprudência (sempre verificar)
- NUNCA modificar pasta `config/` sem aprovação
- NUNCA usar linguagem coloquial em minutas
- NUNCA decidir sem análise prévia dos autos
- NUNCA incluir dados pessoais sensíveis em logs

## Estrutura do Projeto

```
clerk/
├── processos/       # PDFs e TXTs dos processos
├── relatorios/      # Relatórios gerados
├── minutas/         # Minutas de decisão
├── pesquisas/       # Resultados de pesquisa
├── docs/            # Documentação (carregar sob demanda)
└── .claude/         # Commands e Skills
```

## Status Atual

- [x] Fase 1: Preparação (concluída)
- [x] Fase 2: Extração (concluída)
- [x] Fase 3: Pesquisa (concluída)
- [ ] Fase 4: Elaboração (em andamento)
```

**Total: ~100 linhas** (vs 2000 do anti-padrão)

### 2.4 Como Usar Referências Eficazmente

```
┌─────────────────────────────────────────────────────────────────┐
│              USANDO REFERÊNCIAS EFICAZMENTE                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   FORMATO RECOMENDADO:                                          │
│   ────────────────────                                          │
│                                                                 │
│   ## Documentação                                               │
│   - Arquitetura: Ver `docs/arquitetura.md`                      │
│   - API: Ver `docs/api.md`                                      │
│                                                                 │
│   OU EM TABELA:                                                 │
│                                                                 │
│   | Tema | Arquivo |                                            │
│   |------|---------|                                            │
│   | Arquitetura | `docs/arquitetura.md` |                       │
│   | API | `docs/api.md` |                                       │
│                                                                 │
│   O QUE ACONTECE:                                               │
│   ────────────────                                              │
│   1. Claude lê CLAUDE.md (sempre)                               │
│   2. Claude vê referência para arquitetura                      │
│   3. SE precisar de detalhes → abre `docs/arquitetura.md`       │
│   4. SE não precisar → ignora (economia de tokens)              │
│                                                                 │
│   BOAS PRÁTICAS:                                                │
│   ───────────────                                               │
│   ✓ Use caminhos relativos (`docs/arquivo.md`)                  │
│   ✓ Agrupe por categoria (API, Arquitetura, etc.)               │
│   ✓ Descrição curta do que contém                               │
│   ✓ Mantenha arquivos referenciados atualizados                 │
│                                                                 │
│   ANTI-PADRÕES:                                                 │
│   ──────────────                                                │
│   ✗ Referência quebrada (arquivo não existe)                    │
│   ✗ Referência circular (A refere B que refere A)               │
│   ✗ Referência vaga ("ver documentação")                        │
│   ✗ Muitas referências (>20 = difícil navegar)                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.5 Exercício: Refatorando CLAUDE.md

**Tarefa:** Dado o CLAUDE.md inchado abaixo, refatore usando Progressive Disclosure.

**ANTES (inchado):**
```markdown
# Projeto de Análise de Contratos

Este projeto analisa contratos jurídicos para identificar
cláusulas abusivas, riscos e oportunidades de negociação.

## Histórico do Projeto

Em janeiro de 2024, o escritório XYZ identificou a necessidade
de automatizar a análise de contratos. Após reuniões com a
equipe de tecnologia, decidiu-se usar IA para acelerar o
processo. O projeto foi iniciado em fevereiro com...
[200 linhas de histórico]

## Arquitetura Técnica

O sistema é composto por três módulos principais:

### Módulo de Extração
O módulo de extração utiliza PyPDF2 e pdfplumber para...
[150 linhas de detalhes técnicos]

### Módulo de Análise
O módulo de análise utiliza Claude para...
[100 linhas de detalhes]

### Módulo de Relatório
O módulo de relatório gera documentos em...
[100 linhas de detalhes]

## Tipos de Contrato Suportados

### Contrato de Locação
- Cláusulas típicas: ...
- Riscos comuns: ...
- Checklist de análise: ...
[50 linhas]

### Contrato de Prestação de Serviços
[50 linhas]

### Contrato de Compra e Venda
[50 linhas]

## Exemplos de Análise

### Exemplo 1: Locação Residencial
[100 linhas de exemplo completo]

### Exemplo 2: Prestação de Serviços
[100 linhas de exemplo completo]

... [mais 500 linhas]
```

**DEPOIS (otimizado):** Escreva a versão refatorada.

---

## Bloco 3: Hierarquia de CLAUDE.md (25 min)

### 3.1 Os 3 Níveis de Contexto

```
┌─────────────────────────────────────────────────────────────────┐
│                 HIERARQUIA DE CLAUDE.md                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O Claude Code procura CLAUDE.md em 3 níveis:                  │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                                                         │   │
│   │   NÍVEL 1: GLOBAL                                       │   │
│   │   Localização: ~/.claude/CLAUDE.md                      │   │
│   │   Escopo: TODOS os projetos                             │   │
│   │   Conteúdo: Preferências pessoais, idioma, estilo       │   │
│   │                                                         │   │
│   │   ────────────────────────────────────────────────────  │   │
│   │                                                         │   │
│   │   NÍVEL 2: PROJETO                                      │   │
│   │   Localização: ./CLAUDE.md (raiz do projeto)            │   │
│   │   Escopo: Este projeto específico                       │   │
│   │   Conteúdo: Regras do projeto, arquitetura, commands    │   │
│   │                                                         │   │
│   │   ────────────────────────────────────────────────────  │   │
│   │                                                         │   │
│   │   NÍVEL 3: SUBPASTA                                     │   │
│   │   Localização: ./pasta/CLAUDE.md                        │   │
│   │   Escopo: Apenas esta subpasta                          │   │
│   │   Conteúdo: Regras específicas da pasta                 │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ORDEM DE LEITURA:                                             │
│   ──────────────────                                            │
│   Global → Projeto → Subpasta                                   │
│                                                                 │
│   REGRA DE PRECEDÊNCIA:                                         │
│   ──────────────────────                                        │
│   Mais específico SOBRESCREVE mais geral.                       │
│                                                                 │
│   EXEMPLO:                                                      │
│   - Global: "Idioma: Inglês"                                    │
│   - Projeto: "Idioma: Português"                                │
│   → Resultado: Português (projeto sobrescreve global)           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 O Que Colocar em Cada Nível

```
┌─────────────────────────────────────────────────────────────────┐
│              CONTEÚDO POR NÍVEL                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   NÍVEL 1: GLOBAL (~/.claude/CLAUDE.md)                         │
│   ──────────────────────────────────────                        │
│   Suas preferências pessoais que valem para TODOS os projetos:  │
│                                                                 │
│   ```markdown                                                   │
│   # Preferências Globais                                        │
│                                                                 │
│   ## Idioma                                                     │
│   - Documentação: Português brasileiro                          │
│   - Código: Inglês                                              │
│                                                                 │
│   ## Estilo                                                     │
│   - Evitar emojis salvo pedido explícito                        │
│   - Respostas didáticas e contextualizadas                      │
│   - Priorizar clareza sobre completude técnica                  │
│                                                                 │
│   ## Convenções Universais                                      │
│   - Arquivos: kebab-case                                        │
│   - Variáveis: camelCase                                        │
│   ```                                                           │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   NÍVEL 2: PROJETO (./CLAUDE.md)                                │
│   ──────────────────────────────                                │
│   Regras específicas DESTE projeto:                             │
│                                                                 │
│   ```markdown                                                   │
│   # CLAUDE.md - Projeto CLERK                                   │
│                                                                 │
│   ## Contexto                                                   │
│   Sistema jurídico para TRF5.                                   │
│                                                                 │
│   ## Commands                                                   │
│   - `/relatar-processo` - Gera relatório                        │
│   - `/elaborar-minuta` - Cria minuta                            │
│                                                                 │
│   ## Restrições                                                 │
│   - NUNCA inventar jurisprudência                               │
│   - NUNCA modificar pasta config/                               │
│   ```                                                           │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   NÍVEL 3: SUBPASTA (./pasta/CLAUDE.md)                         │
│   ─────────────────────────────────────                         │
│   Regras específicas DESTA pasta:                               │
│                                                                 │
│   ```markdown                                                   │
│   # CLAUDE.md - Pasta de Minutas                                │
│                                                                 │
│   ## Regras Específicas                                         │
│   - SEMPRE usar template de `templates/minuta.md`               │
│   - NUNCA incluir nome real das partes (usar iniciais)          │
│   - Formato: parágrafos numerados                               │
│   ```                                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Exemplo de Hierarquia Completa

```
┌─────────────────────────────────────────────────────────────────┐
│              HIERARQUIA COMPLETA - EXEMPLO                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ~/.claude/CLAUDE.md (GLOBAL)                                  │
│   ─────────────────────────────                                 │
│   # Preferências Globais                                        │
│                                                                 │
│   ## Idioma                                                     │
│   - Documentação: Português                                     │
│   - Código: Inglês                                              │
│                                                                 │
│   ## Estilo                                                     │
│   - Respostas didáticas                                         │
│   - Evitar emojis                                               │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   ~/projetos/clerk/CLAUDE.md (PROJETO)                          │
│   ────────────────────────────────────                          │
│   # CLAUDE.md - CLERK                                           │
│                                                                 │
│   ## Contexto                                                   │
│   Sistema jurídico TRF5.                                        │
│   Foco: BPC, auxílio-doença.                                    │
│                                                                 │
│   ## Restrições                                                 │
│   - NUNCA inventar jurisprudência                               │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   ~/projetos/clerk/minutas/CLAUDE.md (SUBPASTA)                 │
│   ─────────────────────────────────────────────                 │
│   # CLAUDE.md - Minutas                                         │
│                                                                 │
│   ## Regras da Pasta                                            │
│   - Usar template `templates/minuta.md`                         │
│   - Parágrafos numerados                                        │
│   - NUNCA nome real (usar iniciais)                             │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   CONTEXTO FINAL (quando trabalhando em ~/projetos/clerk/minutas/):
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ GLOBAL:                                                 │   │
│   │ - Idioma: Português                                     │   │
│   │ - Estilo: Didático, sem emojis                          │   │
│   │                                                         │   │
│   │ + PROJETO:                                              │   │
│   │ - Contexto: TRF5, BPC                                   │   │
│   │ - Restrição: Não inventar jurisprudência                │   │
│   │                                                         │   │
│   │ + SUBPASTA:                                             │   │
│   │ - Template específico                                   │   │
│   │ - Parágrafos numerados                                  │   │
│   │ - Usar iniciais                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4 Exercício: Configurando Hierarquia

**Tarefa:** Configure a hierarquia de CLAUDE.md para um escritório de advocacia com:

1. **Preferências do usuário** (global):
   - Idioma português
   - Estilo formal
   - Sem emojis

2. **Projeto: Contencioso Trabalhista**
   - Foco em reclamações trabalhistas
   - Jurisdição: TRT15
   - Commands: `/analisar-reclam`, `/calcular-verbas`

3. **Subpasta: Recursos**
   - Formato específico de recurso ordinário
   - SEMPRE incluir prequestionamento
   - Limite de 15 páginas

---

## Bloco 4: Context Window Management (25 min)

### 4.1 O Que é a Context Window

```
┌─────────────────────────────────────────────────────────────────┐
│                    CONTEXT WINDOW                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   DEFINIÇÃO:                                                    │
│   ───────────                                                   │
│   Context Window é o "espaço de memória" do modelo.             │
│   Tudo que o Claude pode "ver" ao mesmo tempo.                  │
│                                                                 │
│   LIMITES (Claude 3.5 Sonnet):                                  │
│   ─────────────────────────────                                 │
│   • Máximo: 200.000 tokens (~150.000 palavras)                  │
│   • Prático: 100.000 tokens (além disso, qualidade cai)         │
│   • Ideal: 20.000-50.000 tokens                                 │
│                                                                 │
│   O QUE CONSOME A CONTEXT WINDOW:                               │
│   ────────────────────────────────                              │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                                                         │   │
│   │   ┌──────────────────────┐                              │   │
│   │   │     CLAUDE.md        │  ~1.000-5.000 tokens         │   │
│   │   └──────────────────────┘                              │   │
│   │   ┌──────────────────────┐                              │   │
│   │   │   System Prompt      │  ~500-2.000 tokens           │   │
│   │   └──────────────────────┘                              │   │
│   │   ┌──────────────────────┐                              │   │
│   │   │  Histórico Conversa  │  Cresce a cada mensagem      │   │
│   │   └──────────────────────┘                              │   │
│   │   ┌──────────────────────┐                              │   │
│   │   │  Arquivos Abertos    │  Varia muito                 │   │
│   │   └──────────────────────┘                              │   │
│   │   ┌──────────────────────┐                              │   │
│   │   │  Resultados de Tools │  Depende das tools           │   │
│   │   └──────────────────────┘                              │   │
│   │                                                         │   │
│   │   TOTAL = Context Window usada                          │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   QUANDO ESTÁ CHEIO:                                            │
│   ──────────────────                                            │
│   • Mensagens antigas são descartadas                           │
│   • Qualidade pode cair                                         │
│   • Custo aumenta                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 O Comando /compact

```
┌─────────────────────────────────────────────────────────────────┐
│                      /compact                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   O QUE FAZ:                                                    │
│   ──────────                                                    │
│   Compacta o histórico da conversa, removendo detalhes          │
│   e mantendo apenas informações essenciais.                     │
│                                                                 │
│   QUANDO USAR:                                                  │
│   ─────────────                                                 │
│   • Conversa longa (>50 mensagens)                              │
│   • Custo acumulado alto                                        │
│   • Respostas ficando lentas                                    │
│   • Claude começa a "esquecer" contexto antigo                  │
│                                                                 │
│   COMO USAR:                                                    │
│   ────────────                                                  │
│   claude > /compact                                             │
│                                                                 │
│   RESULTADO:                                                    │
│   ──────────                                                    │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ Conversa compactada.                                    │   │
│   │ Antes: 45.000 tokens                                    │   │
│   │ Depois: 8.000 tokens                                    │   │
│   │ Economia: 82%                                           │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   O QUE É PRESERVADO:                                           │
│   ────────────────────                                          │
│   • Decisões importantes                                        │
│   • Arquivos modificados                                        │
│   • Contexto essencial                                          │
│                                                                 │
│   O QUE É REMOVIDO:                                             │
│   ──────────────────                                            │
│   • Detalhes de implementação                                   │
│   • Tentativas falhas                                           │
│   • Mensagens redundantes                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Estratégias de Economia de Tokens

```
┌─────────────────────────────────────────────────────────────────┐
│              ESTRATÉGIAS DE ECONOMIA DE TOKENS                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. CLAUDE.MD ENXUTO                                           │
│   ─────────────────────                                         │
│   • Máximo 300 linhas                                           │
│   • Usar referências em vez de conteúdo                         │
│   • Economia: ~5.000 tokens/requisição                          │
│                                                                 │
│   2. /COMPACT REGULAR                                           │
│   ────────────────────                                          │
│   • Usar a cada ~20-30 mensagens                                │
│   • Ou quando custo > $0.50/sessão                              │
│   • Economia: 50-80% do histórico                               │
│                                                                 │
│   3. SESSÕES FOCADAS                                            │
│   ────────────────────                                          │
│   • Uma tarefa por sessão                                       │
│   • Nova sessão para novo assunto                               │
│   • Evita acúmulo de contexto irrelevante                       │
│                                                                 │
│   4. ARQUIVOS SOB DEMANDA                                       │
│   ──────────────────────                                        │
│   • Não pré-carregar arquivos grandes                           │
│   • Deixar Claude abrir quando precisar                         │
│   • Usar @arquivo só quando necessário                          │
│                                                                 │
│   5. RESULTADOS DE PESQUISA                                     │
│   ───────────────────────                                       │
│   • Salvar em arquivo, não no contexto                          │
│   • Resumir antes de adicionar ao contexto                      │
│   • Usar subagentes para pesquisas pesadas                      │
│                                                                 │
│   6. MODELO CERTO PARA TAREFA                                   │
│   ────────────────────────────                                  │
│   • Haiku para tarefas simples (mais barato)                    │
│   • Sonnet para tarefas complexas                               │
│   • Opus para análise profunda                                  │
│                                                                 │
│   COMPARATIVO DE CUSTO:                                         │
│   ─────────────────────                                         │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ Estratégia                │ Economia estimada           │   │
│   ├───────────────────────────┼─────────────────────────────┤   │
│   │ CLAUDE.md otimizado       │ 85% do contexto fixo        │   │
│   │ /compact regular          │ 50-80% do histórico         │   │
│   │ Sessões focadas           │ 30-50% por sessão           │   │
│   │ Arquivos sob demanda      │ 20-40% variável             │   │
│   │ Haiku para tarefas leves  │ 70-80% por requisição       │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 Quando Iniciar Nova Sessão

```
┌─────────────────────────────────────────────────────────────────┐
│              QUANDO INICIAR NOVA SESSÃO                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   SINAIS DE QUE PRECISA NOVA SESSÃO:                            │
│   ───────────────────────────────────                           │
│   • Claude começa a "esquecer" instruções anteriores            │
│   • Respostas ficam inconsistentes                              │
│   • Custo da sessão > $1.00                                     │
│   • Mais de 100 mensagens                                       │
│   • Mudança de assunto/tarefa                                   │
│                                                                 │
│   COMO DECIDIR:                                                 │
│   ──────────────                                                │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                                                         │   │
│   │   MESMA SESSÃO:                                         │   │
│   │   • Continuação da mesma tarefa                         │   │
│   │   • Contexto anterior é necessário                      │   │
│   │   • Menos de 50 mensagens                               │   │
│   │                                                         │   │
│   │   NOVA SESSÃO:                                          │   │
│   │   • Nova tarefa independente                            │   │
│   │   • Contexto anterior não ajuda                         │   │
│   │   • Sessão atual muito longa                            │   │
│   │   • /compact não resolveu                               │   │
│   │                                                         │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   PRESERVANDO CONTEXTO ENTRE SESSÕES:                           │
│   ────────────────────────────────────                          │
│   • Salvar resumo em arquivo (docs/sessao-XXXX.md)              │
│   • Atualizar CLAUDE.md com decisões importantes                │
│   • Usar /resume para continuar sessão anterior                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Bloco 5: Context is King (20 min)

### 5.1 Contexto Rico vs Instruções Longas

> *"A well-structured context makes the model smarter than any instruction could."*
> — Dex Horthy (12 Factor Agents)

```
┌─────────────────────────────────────────────────────────────────┐
│              CONTEXTO RICO vs INSTRUÇÕES LONGAS                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ABORDAGEM 1: INSTRUÇÕES LONGAS (menos eficaz)                 │
│   ──────────────────────────────────────────────                │
│   "Ao analisar um processo de BPC, você deve verificar          │
│    se o requerente é idoso (65+) ou pessoa com deficiência.     │
│    Se for idoso, verifique se completou 65 anos antes do        │
│    requerimento administrativo. Se for PCD, verifique se há     │
│    laudo médico que comprove a deficiência. O laudo deve        │
│    indicar se a deficiência é de longo prazo (mais de 2 anos).  │
│    Verifique também o critério de miserabilidade: renda         │
│    per capita familiar deve ser inferior a 1/4 do salário       │
│    mínimo, salvo flexibilização jurisprudencial..."             │
│    [500 palavras de instruções]                                 │
│                                                                 │
│   PROBLEMA:                                                     │
│   • Modelo precisa "lembrar" de tudo                            │
│   • Fácil ignorar algum item                                    │
│   • Difícil de manter atualizado                                │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   ABORDAGEM 2: CONTEXTO RICO (mais eficaz)                      │
│   ─────────────────────────────────────────                     │
│   "Analise este processo de BPC usando o checklist em           │
│    `docs/checklist-bpc.md`"                                     │
│                                                                 │
│   ONDE `docs/checklist-bpc.md` CONTÉM:                          │
│   ```markdown                                                   │
│   # Checklist BPC                                               │
│                                                                 │
│   ## Requisitos                                                 │
│   - [ ] Idade 65+ OU deficiência de longo prazo                 │
│   - [ ] Renda per capita < 1/4 SM                               │
│   - [ ] Requerimento administrativo prévio                      │
│                                                                 │
│   ## Documentos Necessários                                     │
│   - [ ] Laudo social (se miserabilidade)                        │
│   - [ ] Laudo médico (se PCD)                                   │
│   ```                                                           │
│                                                                 │
│   VANTAGENS:                                                    │
│   • Estrutura clara (checklist)                                 │
│   • Fácil verificar completude                                  │
│   • Arquivo atualizado = contexto atualizado                    │
│   • Instrução curta + contexto rico                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Transformando Instruções em Contexto

```
┌─────────────────────────────────────────────────────────────────┐
│           TRANSFORMANDO INSTRUÇÕES EM CONTEXTO                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   TÉCNICA:                                                      │
│   ─────────                                                     │
│   Em vez de DIZER o que fazer, MOSTRE exemplos e estruturas.    │
│                                                                 │
│   ANTES (instrução):                                            │
│   ───────────────────                                           │
│   "O relatório deve ter seções para fatos, argumentos e         │
│    provas. Os fatos devem estar em ordem cronológica. Os        │
│    argumentos devem ser separados por parte (autor/réu).        │
│    As provas devem indicar página de referência."               │
│                                                                 │
│   DEPOIS (contexto):                                            │
│   ────────────────────                                          │
│   "Gere relatório usando o template em `templates/relatorio.md`"│
│                                                                 │
│   ONDE O TEMPLATE É:                                            │
│   ```markdown                                                   │
│   # RELATÓRIO - Processo nº [NÚMERO]                            │
│                                                                 │
│   ## FATOS (ordem cronológica)                                  │
│   | Data | Evento |                                             │
│   |------|--------|                                             │
│                                                                 │
│   ## ARGUMENTOS                                                 │
│   ### Do Autor                                                  │
│   ### Do Réu                                                    │
│                                                                 │
│   ## PROVAS                                                     │
│   - [Documento] (pág. X)                                        │
│   ```                                                           │
│                                                                 │
│   POR QUE FUNCIONA MELHOR:                                      │
│   ─────────────────────────                                     │
│   • Modelo VÊ a estrutura (não precisa inferir)                 │
│   • Exemplo concreto > descrição abstrata                       │
│   • Template pode ser reutilizado                               │
│   • Fácil de atualizar em um só lugar                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Tipos de Contexto Útil

```
┌─────────────────────────────────────────────────────────────────┐
│                  TIPOS DE CONTEXTO ÚTIL                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. TEMPLATES                                                  │
│   ─────────────                                                 │
│   Estruturas vazias que o modelo preenche.                      │
│   Uso: `templates/relatorio.md`, `templates/minuta.md`          │
│                                                                 │
│   2. EXEMPLOS                                                   │
│   ───────────                                                   │
│   Casos completos (entrada + saída esperada).                   │
│   Uso: `exemplos/relatorio-bpc.md`, `exemplos/minuta-procedente.md`
│                                                                 │
│   3. CHECKLISTS                                                 │
│   ─────────────                                                 │
│   Listas de verificação para garantir completude.               │
│   Uso: `docs/checklist-bpc.md`, `docs/checklist-revisao.md`     │
│                                                                 │
│   4. GLOSSÁRIOS                                                 │
│   ─────────────                                                 │
│   Definições de termos específicos do domínio.                  │
│   Uso: `docs/glossario.md`                                      │
│                                                                 │
│   5. FLUXOS                                                     │
│   ─────────                                                     │
│   Diagramas de processo (ASCII ou Mermaid).                     │
│   Uso: `docs/fluxo-analise.md`                                  │
│                                                                 │
│   6. REFERÊNCIAS                                                │
│   ──────────────                                                │
│   Links para legislação, jurisprudência, doutrina.              │
│   Uso: `docs/referencias/tema-1038.md`                          │
│                                                                 │
│   ESTRUTURA DE PASTAS SUGERIDA:                                 │
│   ─────────────────────────────                                 │
│   docs/                                                         │
│   ├── templates/       # Estruturas vazias                      │
│   ├── exemplos/        # Casos completos                        │
│   ├── checklists/      # Listas de verificação                  │
│   ├── glossario.md     # Definições                             │
│   ├── fluxos/          # Diagramas                              │
│   └── referencias/     # Links externos                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.4 Exercício: Transformando Instruções em Contexto

**Tarefa:** Transforme as instruções abaixo em contexto estruturado.

**INSTRUÇÕES ORIGINAIS:**
```
"Ao elaborar uma minuta de sentença de procedência em BPC para
idoso, você deve incluir: relatório com síntese do pedido e dos
fatos, fundamentação citando o art. 20 da Lei 8.742/93 e o
Tema 1038 do STF, e dispositivo julgando procedente o pedido.
Na fundamentação, sempre mencione o requisito etário (65 anos)
e o requisito de miserabilidade (renda per capita). Se houver
laudo social favorável, cite-o. Se houver contestação do INSS
argumentando renda superior, refute com base na flexibilização
jurisprudencial. O dispositivo deve condenar o INSS a implantar
o benefício e pagar atrasados desde o requerimento administrativo."
```

**TAREFA:** Crie:
1. Um template (`templates/minuta-bpc-procedente.md`)
2. Um checklist (`checklists/minuta-procedente.md`)
3. Uma instrução curta que use esses arquivos

---

## Fechamento: Resumo e Próximos Passos (5 min)

### Checklist Final da Aula

Ao final desta aula, você deve saber:

- [ ] Por que CLAUDE.md inchado é anti-padrão
- [ ] O princípio de Progressive Disclosure
- [ ] Como estruturar CLAUDE.md em 200-300 linhas
- [ ] A hierarquia de contextos (global, projeto, subpasta)
- [ ] Como usar o comando /compact
- [ ] Estratégias de economia de tokens
- [ ] Quando iniciar nova sessão
- [ ] Como transformar instruções em contexto

### Próxima Aula

Na **Aula 8** (Engenharia de Capacidades), você aprenderá:
- Anatomia de Commands eficazes
- Estrutura completa de Skills (SKILL.md)
- Quando usar Command vs Skill
- Organização de arquivos e templates

---

## Material de Apoio

### Especialistas Citados

| Especialista | Afiliação | Contribuição |
|-------------|-----------|--------------|
| **Barry Zhang** | Anthropic | Progressive Disclosure |
| **Dex Horthy** | HumanLayer | Context is King |
| **Mahesh Murag** | Anthropic | Hierarquia de contextos |

### Referências

- [Anthropic Context Management Guide](https://docs.anthropic.com/claude/docs/context-management)
- [12 Factor Agents - Context](https://12factor.net/agents)

---

*Aula 7 - Engenharia de Contexto*
*Módulo 2: Prompts Agênticos*
*Próxima: Aula 8 - Engenharia de Capacidades*
