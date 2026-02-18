# Aula 8: Engenharia de Capacidades

> **Módulo 2: Prompts Agênticos**
>
> Como estruturar Commands e Skills para encapsular expertise e criar capacidades reutilizáveis em sistemas agênticos.

---

## Índice

1. [Introdução](#introducao)
2. [Bloco 1: Commands - Atalhos de Prompt](#bloco-1)
3. [Bloco 2: Anatomia da Skill](#bloco-2)
4. [Bloco 3: Command vs Skill - Quando Usar Cada](#bloco-3)
5. [Bloco 4: Templates e Exemplos](#bloco-4)
6. [Bloco 5: Organização de Arquivos](#bloco-5)
7. [Síntese e Próximos Passos](#sintese)

---

## Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

1. **Criar Commands eficazes** com variáveis ($ARGUMENTS, $FILE)
2. **Estruturar Skills completas** com SKILL.md bem organizado
3. **Decidir entre Command e Skill** para cada situação
4. **Criar templates e exemplos** que guiam o comportamento
5. **Organizar arquivos** seguindo convenções e boas práticas

---

<a name="introducao"></a>
## Introdução: Capacidades Encapsuladas

Na aula anterior, aprendemos a gerenciar **contexto** de forma eficiente. Agora vamos aprender a criar **capacidades**: blocos de expertise que o agente pode usar repetidamente.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     HIERARQUIA DE CAPACIDADES                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                         PROMPTS AGÊNTICOS                           │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │                                                                     │   │
│   │   PROMPT ÚNICO                                                      │   │
│   │   └── Instrução ad-hoc na conversa                                  │   │
│   │       (não reutilizável, consome tokens toda vez)                   │   │
│   │                                                                     │   │
│   │   COMMAND                                                           │   │
│   │   └── Prompt salvo invocado com /                                   │   │
│   │       (reutilizável, consistente, < 50 linhas)                      │   │
│   │                                                                     │   │
│   │   SKILL                                                             │   │
│   │   └── Expertise encapsulada em pasta                                │   │
│   │       (complexa, com exemplos, carregada por contexto)              │   │
│   │                                                                     │   │
│   │   WORKFLOW                                                          │   │
│   │   └── Pipeline de skills e commands                                 │   │
│   │       (próxima aula)                                                │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   COMPLEXIDADE CRESCENTE ────────────────────────────────────────────────►  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### A Metáfora do Gabinete

Se o CLAUDE.md é o "manual do gabinete", as capacidades são as **especialidades da equipe**:

| Conceito | Analogia Jurídica |
|----------|-------------------|
| **Command** | Modelo de despacho padrão |
| **Skill** | Assessor especializado |
| **Workflow** | Fluxo de trabalho do gabinete |

---

<a name="bloco-1"></a>
## Bloco 1: Commands - Atalhos de Prompt (~25 min)

### 1.1 O Que São Commands

> *"Em vez de digitar o mesmo prompt toda vez, você cria um atalho."*

Commands são **prompts salvos** que você invoca com o prefixo `/`. Eles transformam instruções repetitivas em comandos simples.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           O QUE SÃO COMMANDS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   SEM COMMAND:                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Analise este documento jurídico e crie um resumo com fatos,        │   │
│   │  argumentos e conclusões. Use formato Markdown com seções           │   │
│   │  numeradas. Cite a página fonte de cada informação. Mantenha        │   │
│   │  neutralidade e não faça juízo de valor..."                         │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│   (digitado toda vez, tokens gastos repetidamente)                          │
│                                                                             │
│   COM COMMAND:                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ /resumir-processo documento.pdf                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│   (mesmo resultado, invocação simples)                                      │
│                                                                             │
│   BENEFÍCIOS:                                                               │
│   • Economia de tokens (prompt não repetido na conversa)                    │
│   • Consistência (mesmo prompt toda vez)                                    │
│   • Velocidade (menos digitação)                                            │
│   • Compartilhamento (equipe usa os mesmos commands)                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Onde Ficam os Commands

Os commands são arquivos Markdown armazenados em locais específicos:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        LOCALIZAÇÃO DOS COMMANDS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   COMMANDS GLOBAIS (disponíveis em qualquer projeto):                       │
│   ~/.claude/commands/                                                       │
│       ├── resumir-documento.md        → /resumir-documento                  │
│       ├── pesquisar-bnp.md            → /pesquisar-bnp                      │
│       └── traduzir-ingles.md          → /traduzir-ingles                    │
│                                                                             │
│   COMMANDS DO PROJETO (só neste projeto):                                   │
│   ./projeto/.claude/commands/                                               │
│       ├── relatar-processo.md         → /relatar-processo                   │
│       ├── analisar-caso.md            → /analisar-caso                      │
│       └── elaborar-minuta.md          → /elaborar-minuta                    │
│                                                                             │
│   REGRA DE NOMENCLATURA:                                                    │
│   • Nome do arquivo = nome do comando (sem extensão)                        │
│   • Use kebab-case (palavras-separadas-por-hífen)                           │
│   • Evite caracteres especiais ou espaços                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Anatomia de um Command

Estrutura completa de um arquivo de command:

```markdown
# /nome-do-comando

Descrição curta do que faz (aparece no /help)

---

[Prompt completo que será executado]

Você pode usar variáveis especiais:
- $ARGUMENTS - texto passado após o comando
- $FILE - arquivo atualmente selecionado no contexto

[Instruções detalhadas para o Claude]
```

**As Variáveis Especiais:**

| Variável | O Que Contém | Exemplo de Uso |
|----------|--------------|----------------|
| `$ARGUMENTS` | Texto após o comando | `/cmd argumento` → "argumento" |
| `$FILE` | Caminho do arquivo selecionado | Arquivo aberto no editor |

### 1.4 Exemplo Real: Command Jurídico

**Arquivo:** `.claude/commands/relatar-processo.md`

```markdown
# /relatar-processo

Gera relatório estruturado de processo judicial

---

Analise o processo e gere um relatório estruturado.

## INSTRUÇÕES

1. Leia o documento fornecido completamente
2. Extraia os dados essenciais
3. Organize nas seções abaixo
4. Cite sempre a página fonte

## FORMATO DE SAÍDA

# RELATÓRIO - Processo nº [extrair número]

## 1. DADOS PROCESSUAIS
- **Número:** [extrair]
- **Autor:** [extrair]
- **Réu:** [extrair]
- **Classe:** [extrair]
- **Data distribuição:** [extrair]

## 2. OBJETO DA AÇÃO
[Resumo do pedido em 2-3 parágrafos]

## 3. FATOS RELEVANTES
| Data | Fato | Fonte |
|------|------|-------|
| [data] | [descrição] | p. [X] |

## 4. FUNDAMENTOS JURÍDICOS
### Do Autor
[Listar argumentos]

### Do Réu
[Listar argumentos, se houver contestação]

## 5. PROVAS PRODUZIDAS
- [Documento] (p. [X])

## 6. QUESTÕES A DECIDIR
1. [Questão jurídica]
2. [Questão jurídica]

---

## REGRAS
- SEMPRE citar página fonte
- NUNCA fazer juízo de valor
- SEMPRE manter neutralidade

## ENTRADA
Documento a analisar: $ARGUMENTS
Se não fornecido, pergunte qual processo analisar.
```

### 1.5 Usando Commands na Prática

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         USANDO COMMANDS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   LISTAR COMMANDS DISPONÍVEIS:                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ claude > /help                                                      │   │
│   │                                                                     │   │
│   │ Commands disponíveis:                                               │   │
│   │   /relatar-processo    Gera relatório estruturado                   │   │
│   │   /pesquisar-bnp       Busca precedentes vinculantes                │   │
│   │   /elaborar-minuta     Cria minuta de decisão                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EXECUTAR COMMAND:                                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ claude > /relatar-processo                                          │   │
│   │ → Claude pergunta: "Qual processo devo analisar?"                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EXECUTAR COM ARGUMENTOS:                                                  │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ claude > /relatar-processo processos/0500123-45.2024.4.05.8100.txt  │   │
│   │ → Claude analisa o arquivo diretamente                              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   AUTOCOMPLETAR (tecla TAB):                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ claude > /rel[TAB]                                                  │   │
│   │ → /relatar-processo                                                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.6 Boas Práticas para Commands

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BOAS PRÁTICAS: COMMANDS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   FAZER:                                                                    │
│   ✓ Descrição clara na primeira linha (aparece no /help)                    │
│   ✓ Separar metadados do prompt com "---"                                   │
│   ✓ Incluir exemplo de uso                                                  │
│   ✓ Documentar o que $ARGUMENTS espera                                      │
│   ✓ Manter < 50 linhas (se maior, usar Skill)                               │
│                                                                             │
│   EVITAR:                                                                   │
│   ✗ Nomes genéricos ("fazer-coisa", "processar")                            │
│   ✗ Commands muito longos (fragmentar em vários)                            │
│   ✗ Dependência de outros commands                                          │
│   ✗ Lógica condicional complexa (usar Skill)                                │
│                                                                             │
│   NOMENCLATURA:                                                             │
│   ✓ verbo-substantivo: /relatar-processo, /pesquisar-bnp                    │
│   ✓ kebab-case: palavras-separadas-por-hífen                                │
│   ✗ camelCase: relatarProcesso (não funciona)                               │
│   ✗ espaços: relatar processo.md (não funciona)                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.7 Exercício Prático: Criar 3 Commands Jurídicos

**Tarefa:** Crie três commands para um gabinete jurídico.

**Command 1:** `/calcular-prazo`

```markdown
# /calcular-prazo

Calcula prazo processual considerando dias úteis

---

Calcule o prazo processual conforme as regras:

## ENTRADA
- Data inicial: $ARGUMENTS (formato DD/MM/AAAA)
- Tipo de prazo: [pergunte se não informado]

## REGRAS DE CÁLCULO
- Excluir dia do início (art. 224, CPC)
- Incluir dia do vencimento
- Considerar apenas dias úteis
- Verificar feriados nacionais

## SAÍDA
```
Prazo de [X] dias úteis
Início: [data] (não conta)
Término: [data]
Observação: [se houver feriado relevante]
```
```

**Command 2:** `/verificar-prescricao`

```markdown
# /verificar-prescricao

Analisa prescrição em matéria previdenciária

---

Analise a prescrição do caso previdenciário.

## ENTRADA
Dados do caso: $ARGUMENTS

## REGRAS APLICÁVEIS
- Prescrição quinquenal (5 anos) para parcelas
- Fundo de direito: imprescritível
- Marco inicial: data da ciência da lesão
- Causas suspensivas e interruptivas

## ANÁLISE
1. Identificar natureza do pedido
2. Verificar data da lesão ao direito
3. Calcular prazo prescricional
4. Verificar causas de suspensão/interrupção

## SAÍDA
```
ANÁLISE DE PRESCRIÇÃO
Tipo: [fundo de direito / parcelas]
Marco inicial: [data]
Prazo: [5 anos para parcelas]
Status: [prescrito / não prescrito / parcialmente prescrito]
Parcelas atingidas: [se houver]
Fundamentação: [artigos aplicáveis]
```
```

**Command 3:** `/citar-sumula`

```markdown
# /citar-sumula

Formata citação de súmula para uso em decisão

---

Formate a súmula para citação em decisão judicial.

## ENTRADA
Número da súmula: $ARGUMENTS
Formato: [STF/STJ] [Número]

## BUSCA
1. Identificar o tribunal (STF ou STJ)
2. Localizar o enunciado completo
3. Verificar se está vigente

## SAÍDA
```
"[Enunciado completo da súmula]"
(Súmula [Vinculante] nº [X] do [Tribunal])

Precedentes: [se disponível]
Aplicação: [breve orientação de uso]
```

## REGRAS
- SEMPRE usar aspas no enunciado
- SEMPRE indicar tribunal e número
- VERIFICAR vigência (se foi cancelada/revisada)
```

---

<a name="bloco-2"></a>
## Bloco 2: Anatomia da Skill (~30 min)

### 2.1 A Verdade Simples Sobre Skills

> *"Skills are just folders. That's literally all they are."*
> — Barry Zhang & Mahesh Murag, Anthropic (AI Engineer Summit 2024)
>
> *Tradução: "Skills são apenas pastas. Literalmente, é só isso."*

Esta citação desmistifica as Skills: não há magia, apenas **pastas com arquivos Markdown** contendo expertise estruturada.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           O QUE SÃO SKILLS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   DESMISTIFICANDO:                                                          │
│                                                                             │
│   Skills ≠ Magia complexa                                                   │
│   Skills ≠ Código especializado                                             │
│   Skills ≠ Plugins compilados                                               │
│                                                                             │
│   Skills = Pastas com arquivos Markdown contendo expertise                  │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ .claude/skills/                                                     │   │
│   │ └── minha-skill/                                                    │   │
│   │     ├── SKILL.md              ← Arquivo principal (obrigatório)     │   │
│   │     ├── examples/             ← Exemplos de uso (opcional)          │   │
│   │     │   ├── caso-simples.md                                         │   │
│   │     │   └── caso-complexo.md                                        │   │
│   │     └── templates/            ← Templates reutilizáveis (opcional)  │   │
│   │         └── formato-saida.md                                        │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   O Claude Code detecta automaticamente pastas com SKILL.md                 │
│   e carrega a expertise quando o contexto é relevante.                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 A Analogia: Command vs Skill

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        COMMAND vs SKILL                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   COMMAND = Receita rápida                                                  │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Faça um bolo"                                                      │   │
│   │ - Instruções diretas                                                │   │
│   │ - Resultado imediato                                                │   │
│   │ - Sem nuances                                                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   SKILL = Manual do confeiteiro                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Como fazer bolos profissionais"                                    │   │
│   │ - Metodologia completa                                              │   │
│   │ - Quando usar cada técnica                                          │   │
│   │ - O que evitar                                                      │   │
│   │ - Exemplos de diferentes tipos                                      │   │
│   │ - Templates de receitas                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ANALOGIA JURÍDICA:                                                        │
│   Command = Modelo de despacho ("Use este formato")                         │
│   Skill = Assessor especializado ("Sei analisar contratos")                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Estrutura do SKILL.md

O arquivo SKILL.md é o coração da skill. Ele segue uma estrutura que o Claude Code reconhece e respeita:

```markdown
# [Nome da Skill]

> Descrição de uma linha (o que faz)

## Quando Usar

- Situação 1 em que a skill é apropriada
- Situação 2 em que a skill é apropriada
- Situação 3 em que a skill é apropriada

## Como Funciona

[Explicação da metodologia/processo em 2-4 parágrafos]
[Descreva o passo-a-passo lógico]
[Mencione técnicas ou frameworks usados]

## Regras (CRÍTICO)

1. SEMPRE faça X
2. NUNCA faça Y
3. PREFIRA Z sobre W

## Formato de Saída

[Template ou estrutura exata esperada]
[Use blocos de código para mostrar o formato]

## Exemplos

### Exemplo 1: [Caso simples]
**Entrada:** [O que o usuário fornece]
**Saída:** [O que a skill produz]

### Exemplo 2: [Caso complexo]
**Entrada:** [O que o usuário fornece]
**Saída:** [O que a skill produz]
```

### 2.4 As Seções Obrigatórias

Cada seção tem um propósito específico:

| Seção | Propósito | Impacto |
|-------|-----------|---------|
| **Nome + Descrição** | Identificação rápida | Claude sabe quando ativar |
| **Quando Usar** | Critérios de ativação | Evita uso incorreto |
| **Como Funciona** | Metodologia | Guia o raciocínio |
| **Regras** | Restrições explícitas | Evita erros comuns |
| **Formato de Saída** | Template estruturado | Garante consistência |
| **Exemplos** | Demonstração concreta | Clarifica expectativas |

### 2.5 Exemplo Real: Skill de Relatório Judicial

**Estrutura de pastas:**

```
.claude/skills/relatorio-judicial/
├── SKILL.md
└── examples/
    └── bpc-simples.md
```

**Arquivo SKILL.md:**

```markdown
# Skill: Relatório Judicial

> Gera relatórios judiciais estruturados a partir de documentos processuais longos.

## Quando Usar

- Processo com mais de 20 páginas
- Autos digitalizados via OCR (texto pode ter erros)
- Necessidade de visão sintética antes de decidir
- Preparação para pauta de julgamento

## Como Funciona

Esta skill aplica o método de **Refinamento Iterativo**:

1. **LEITURA INICIAL:** Ler documento em chunks de ~2000 tokens
2. **EXTRAÇÃO:** Identificar elementos-chave por chunk
3. **CONSOLIDAÇÃO:** Unir extrações em estrutura coerente
4. **VALIDAÇÃO:** Verificar completude contra checklist

O método evita sobrecarga de contexto ao processar documentos
muito longos, mantendo precisão na extração de informações.

## Regras

1. SEMPRE manter neutralidade (sem juízo de valor)
2. NUNCA inventar fatos não presentes nos autos
3. SEMPRE citar página/documento fonte
4. NUNCA incluir análise jurídica (etapa posterior)
5. SEMPRE verificar completude com checklist final
6. PREFERIR citação direta quando relevante

## Formato de Saída

```
# RELATÓRIO
Processo: [NÚMERO]
Partes: [AUTOR] vs [RÉU]

## 1. SÍNTESE
[3-5 linhas resumindo o caso]

## 2. FATOS RELEVANTES
| Data | Fato | Fonte |
|------|------|-------|
| [data] | [descrição] | p. [X] |

## 3. PEDIDOS
- Pedido 1
- Pedido 2

## 4. DOCUMENTOS PROBATÓRIOS
- [Documento] (p. [X])

## 5. QUESTÕES A DECIDIR
1. [Questão jurídica]
```

## Exemplos

### Exemplo 1: Processo BPC Simples

**Entrada:** Processo de 30 páginas pedindo BPC para idoso

**Saída:**
```
# RELATÓRIO
Processo: 0500123-45.2024.4.05.8100
Partes: JOÃO DA SILVA vs INSS

## 1. SÍNTESE
Ação de concessão de BPC-LOAS ajuizada por idoso de 67 anos,
alegando hipossuficiência econômica. INSS indeferiu
administrativamente por renda per capita superior a 1/4 SM.

## 2. FATOS RELEVANTES
| Data | Fato | Fonte |
|------|------|-------|
| 10/01/2024 | Requerimento administrativo | p. 15 |
| 25/01/2024 | Indeferimento por renda | p. 18 |
| 15/02/2024 | Ajuizamento da ação | p. 2 |

## 3. PEDIDOS
- Concessão do BPC desde o requerimento administrativo
- Pagamento de parcelas atrasadas

## 4. DOCUMENTOS PROBATÓRIOS
- Certidão de nascimento (p. 8)
- Comprovante de renda (p. 12)
- Carta de indeferimento INSS (p. 18)

## 5. QUESTÕES A DECIDIR
1. A renda familiar per capita autoriza a concessão?
2. Há elementos para flexibilização do critério?
```
```

### 2.6 A Hierarquia de Três Níveis

Skills podem existir em três níveis, com precedência do mais específico:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      HIERARQUIA DE SKILLS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   NÍVEL 1: GLOBAL (disponível em todos os projetos)                         │
│   ~/.claude/skills/                                                         │
│       └── pesquisa-precedentes/                                             │
│           └── SKILL.md                                                      │
│                                                                             │
│   NÍVEL 2: PROJETO (disponível só neste projeto)                            │
│   ./projeto/.claude/skills/                                                 │
│       └── relatorio-judicial/                                               │
│           └── SKILL.md                                                      │
│                                                                             │
│   NÍVEL 3: SUBPASTA (disponível só nesta subpasta)                          │
│   ./projeto/minutas/.claude/skills/                                         │
│       └── minuta-bpc/                                                       │
│           └── SKILL.md                                                      │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    REGRA DE PRECEDÊNCIA                             │   │
│   │                                                                     │   │
│   │   Subpasta > Projeto > Global                                       │   │
│   │                                                                     │   │
│   │   Se houver conflito, a skill mais específica prevalece.            │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.7 Exercício: Projete Sua Skill

**Tarefa:** Usando a estrutura apresentada, projete uma skill para "Análise de Contratos".

```markdown
# Skill: Análise de Contratos

> [Escreva uma linha de descrição]

## Quando Usar

- [Situação 1]
- [Situação 2]
- [Situação 3]

## Como Funciona

[Descreva a metodologia em 2-3 parágrafos]

## Regras

1. SEMPRE ...
2. NUNCA ...
3. PREFIRA ...

## Formato de Saída

[Defina o template de saída]

## Exemplos

### Exemplo 1: [Caso simples]
**Entrada:** [Descrição]
**Saída:** [Resultado esperado]
```

---

<a name="bloco-3"></a>
## Bloco 3: Command vs Skill - Quando Usar Cada (~20 min)

### 3.1 A Regra Prática

A decisão entre Command e Skill segue uma regra simples:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     REGRA DOS 50 LINHAS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   < 50 linhas de instrução ──────────────────────────► COMMAND              │
│                                                                             │
│   > 50 linhas OU precisa de exemplos ─────────────────► SKILL               │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     ÁRVORE DE DECISÃO                               │   │
│   │                                                                     │   │
│   │   A tarefa é simples e direta?                                      │   │
│   │   ├── SIM → Command                                                 │   │
│   │   └── NÃO ↓                                                         │   │
│   │                                                                     │   │
│   │   Precisa de múltiplos exemplos?                                    │   │
│   │   ├── SIM → Skill                                                   │   │
│   │   └── NÃO ↓                                                         │   │
│   │                                                                     │   │
│   │   Tem metodologia complexa?                                         │   │
│   │   ├── SIM → Skill                                                   │   │
│   │   └── NÃO ↓                                                         │   │
│   │                                                                     │   │
│   │   Será usada frequentemente com variações?                          │   │
│   │   ├── SIM → Skill                                                   │   │
│   │   └── NÃO → Command                                                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Comparação Detalhada

| Aspecto | Command | Skill |
|---------|---------|-------|
| **Invocação** | Explícita (`/comando`) | Automática (por contexto) |
| **Tamanho** | Arquivo único | Pasta com múltiplos arquivos |
| **Complexidade** | Baixa a média | Alta |
| **Exemplos** | Opcional (in-line) | Recomendado (pasta separada) |
| **Templates** | Embutidos | Arquivos separados |
| **Manutenção** | Simples | Requer organização |
| **Descoberta** | `/help` lista | Carregado automaticamente |

### 3.3 Exemplos de Cada Caso

**Quando usar COMMAND:**

| Tarefa | Por quê Command? |
|--------|------------------|
| Calcular prazo processual | Fórmula simples, entrada/saída claras |
| Formatar citação de súmula | Template único, sem variações |
| Verificar prescrição | Regras fixas, resultado binário |
| Gerar despacho padrão | Texto modelo com poucas variáveis |

**Quando usar SKILL:**

| Tarefa | Por quê Skill? |
|--------|----------------|
| Gerar relatório de processo | Metodologia complexa, vários casos |
| Elaborar minuta de sentença | Múltiplos tipos, nuances, exemplos |
| Analisar contrato | Diferentes cláusulas, riscos variados |
| Pesquisar jurisprudência | Estratégias diferentes por tema |

### 3.4 Casos Limítrofes

Alguns casos não são óbvios. Use estes critérios adicionais:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CASOS LIMÍTROFES                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   SITUAÇÃO: Tarefa média (30-60 linhas)                                     │
│                                                                             │
│   PERGUNTE:                                                                 │
│                                                                             │
│   1. A qualidade varia muito entre execuções?                               │
│      SIM → Skill (exemplos ajudam a calibrar)                               │
│                                                                             │
│   2. Preciso compartilhar com equipe não-técnica?                           │
│      SIM → Command (mais fácil de invocar)                                  │
│                                                                             │
│   3. A tarefa evolui com feedback?                                          │
│      SIM → Skill (mais fácil de versionar)                                  │
│                                                                             │
│   4. Há dependência de outras capacidades?                                  │
│      SIM → Skill (pode referenciar outras skills)                           │
│                                                                             │
│   NA DÚVIDA: Comece com Command, promova para Skill se necessário           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.5 Anti-Padrões a Evitar

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ANTI-PADRÕES                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ✗ COMMAND GIGANTE                                                         │
│     Command com 200+ linhas → Deveria ser Skill                             │
│                                                                             │
│   ✗ SKILL TRIVIAL                                                           │
│     Skill com 20 linhas e sem exemplos → Deveria ser Command                │
│                                                                             │
│   ✗ SKILL SEM EXEMPLOS                                                      │
│     Skill complexa sem exemplos → Comportamento inconsistente               │
│                                                                             │
│   ✗ COMMAND COM LÓGICA                                                      │
│     Command com muitos "se/então" → Fragmentar ou usar Skill                │
│                                                                             │
│   ✗ DUPLICAÇÃO                                                              │
│     Mesma lógica em Command e Skill → Escolher um, deletar outro            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.6 Exercício: Classificar Tarefas

**Tarefa:** Para cada item abaixo, decida: Command ou Skill?

| # | Tarefa | Sua Resposta | Justificativa |
|---|--------|--------------|---------------|
| 1 | Gerar cabeçalho de petição | _____ | _____ |
| 2 | Analisar recurso de apelação | _____ | _____ |
| 3 | Converter data para formato BR | _____ | _____ |
| 4 | Elaborar parecer jurídico | _____ | _____ |
| 5 | Listar documentos de uma pasta | _____ | _____ |
| 6 | Revisar minuta de sentença | _____ | _____ |
| 7 | Calcular honorários advocatícios | _____ | _____ |
| 8 | Pesquisar precedentes vinculantes | _____ | _____ |
| 9 | Formatar número de processo | _____ | _____ |
| 10 | Gerar contestação trabalhista | _____ | _____ |

**Gabarito sugerido:**

| # | Resposta | Justificativa |
|---|----------|---------------|
| 1 | Command | Template simples, poucas variáveis |
| 2 | Skill | Metodologia complexa, vários tipos de recurso |
| 3 | Command | Transformação direta, sem nuances |
| 4 | Skill | Estrutura elaborada, exemplos necessários |
| 5 | Command | Operação simples, resultado direto |
| 6 | Skill | Checklist extenso, múltiplos aspectos |
| 7 | Command | Fórmula definida, cálculo direto |
| 8 | Skill | Estratégias variadas, economia de tokens |
| 9 | Command | Regex/formatação, sem variação |
| 10 | Skill | Documento complexo, múltiplos templates |

---

<a name="bloco-4"></a>
## Bloco 4: Templates e Exemplos (~25 min)

### 4.1 Por Que Exemplos São Essenciais

Exemplos não são opcionais em Skills complexas. Eles servem como **calibração** do comportamento esperado.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    POR QUE EXEMPLOS IMPORTAM                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   SEM EXEMPLOS:                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Gere um relatório estruturado"                                     │   │
│   │                                                                     │   │
│   │ Resultado: Cada execução produz formato diferente                   │   │
│   │ - Às vezes usa tabelas, às vezes não                                │   │
│   │ - Às vezes inclui análise, às vezes não                             │   │
│   │ - Seções variam de nome e ordem                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   COM EXEMPLOS:                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Gere um relatório como este exemplo"                               │   │
│   │                                                                     │   │
│   │ Resultado: Formato consistente em todas as execuções                │   │
│   │ - Mesma estrutura de seções                                         │   │
│   │ - Mesmo nível de detalhe                                            │   │
│   │ - Mesmo estilo de redação                                           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EXEMPLOS = CALIBRAÇÃO DO COMPORTAMENTO                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Estrutura de um Bom Exemplo

Um exemplo eficaz tem três partes:

```markdown
### Exemplo N: [Título descritivo do caso]

**Contexto:** [Breve descrição da situação]

**Entrada:**
[O que o usuário fornece - pode ser texto, arquivo, dados]

**Saída Esperada:**
[O resultado completo que a skill deve produzir]

**Notas:** [Opcional - explicações sobre decisões tomadas]
```

### 4.3 A Regra do Caso Simples + Caso Complexo

Toda skill deve ter no mínimo dois exemplos:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   MÍNIMO: DOIS EXEMPLOS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   EXEMPLO 1: CASO SIMPLES (Happy Path)                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Dados completos e bem formatados                                  │   │
│   │ • Nenhuma ambiguidade                                               │   │
│   │ • Resultado direto                                                  │   │
│   │                                                                     │   │
│   │ PROPÓSITO: Mostrar o "caso ideal"                                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EXEMPLO 2: CASO COMPLEXO (Edge Case)                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Dados incompletos ou ambíguos                                     │   │
│   │ • Situação atípica                                                  │   │
│   │ • Demonstra como lidar com exceções                                 │   │
│   │                                                                     │   │
│   │ PROPÓSITO: Mostrar como lidar com dificuldades                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   OPCIONAL: EXEMPLO 3+ (Variações específicas)                              │
│   • Diferentes tipos de entrada                                             │
│   • Casos específicos do domínio                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Templates: Estruturas Reutilizáveis

Templates são diferentes de exemplos: são **estruturas vazias** para preenchimento.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EXEMPLO vs TEMPLATE                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   EXEMPLO (mostra caso concreto):                                           │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ # RELATÓRIO                                                         │   │
│   │ Processo: 0500123-45.2024.4.05.8100                                 │   │
│   │ Autor: João da Silva                                                │   │
│   │ Réu: INSS                                                           │   │
│   │ ## SÍNTESE                                                          │   │
│   │ Ação de BPC ajuizada por idoso de 67 anos...                        │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   TEMPLATE (estrutura para preencher):                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ # RELATÓRIO                                                         │   │
│   │ Processo: [NÚMERO]                                                  │   │
│   │ Autor: [NOME]                                                       │   │
│   │ Réu: [NOME]                                                         │   │
│   │ ## SÍNTESE                                                          │   │
│   │ [3-5 linhas resumindo o caso]                                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   QUANDO USAR CADA:                                                         │
│   • Exemplo → Para calibrar estilo e profundidade                           │
│   • Template → Para garantir estrutura consistente                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.5 Organização de Exemplos e Templates

```
.claude/skills/minha-skill/
├── SKILL.md              ← Arquivo principal
├── examples/             ← Pasta de exemplos
│   ├── caso-simples.md   ← Exemplo 1
│   ├── caso-complexo.md  ← Exemplo 2
│   └── caso-especial.md  ← Exemplo 3 (opcional)
└── templates/            ← Pasta de templates
    ├── relatorio.md      ← Template de relatório
    └── analise.md        ← Template de análise
```

**Referenciando no SKILL.md:**

```markdown
## Exemplos

Veja exemplos completos em:
- `examples/caso-simples.md` - BPC padrão
- `examples/caso-complexo.md` - BPC com renda flexibilizada

## Formato de Saída

Use o template em `templates/relatorio.md`
```

### 4.6 Exercício: Criar Exemplos para Skill

**Tarefa:** Crie dois exemplos para a skill "Análise de Contratos".

**Exemplo 1: Contrato de Locação Simples**

```markdown
### Exemplo 1: Contrato de Locação Residencial

**Contexto:** Contrato padrão de locação de imóvel residencial

**Entrada:** Contrato de 5 páginas com cláusulas comuns

**Saída Esperada:**
```
# ANÁLISE DE CONTRATO

## IDENTIFICAÇÃO
- Tipo: Locação Residencial
- Partes: [Locador] e [Locatário]
- Objeto: Imóvel residencial em [endereço]
- Vigência: 30 meses

## CLÁUSULAS PRINCIPAIS
| Cláusula | Conteúdo | Observação |
|----------|----------|------------|
| 3ª | Valor do aluguel: R$ 2.000,00 | Dentro do mercado |
| 5ª | Reajuste anual pelo IGP-M | Padrão |
| 8ª | Multa por rescisão: 3 aluguéis | Proporcional |

## RISCOS IDENTIFICADOS
- [Nenhum risco significativo identificado]

## RECOMENDAÇÃO
Contrato equilibrado, pode ser assinado.
```

**Notas:** Contrato padrão sem cláusulas abusivas.
```

**Exemplo 2: Contrato com Cláusulas Abusivas**

```markdown
### Exemplo 2: Contrato com Cláusulas Problemáticas

**Contexto:** Contrato de prestação de serviços com cláusulas desequilibradas

**Entrada:** Contrato de 12 páginas com linguagem complexa

**Saída Esperada:**
```
# ANÁLISE DE CONTRATO

## IDENTIFICAÇÃO
- Tipo: Prestação de Serviços
- Partes: [Contratante] e [Contratada]
- Objeto: Desenvolvimento de software
- Vigência: Indeterminada

## CLÁUSULAS PRINCIPAIS
| Cláusula | Conteúdo | Observação |
|----------|----------|------------|
| 7ª | Rescisão unilateral só pelo contratante | ⚠️ Desequilíbrio |
| 12ª | Foro de eleição: São Paulo | Pode dificultar defesa |
| 15ª | Propriedade intelectual exclusiva | ⚠️ Verificar escopo |

## RISCOS IDENTIFICADOS
1. **ALTO:** Cláusula 7ª permite rescisão sem aviso
2. **MÉDIO:** Foro distante pode encarecer litígio
3. **MÉDIO:** PI muito ampla, incluindo melhorias futuras

## RECOMENDAÇÃO
⚠️ **NÃO ASSINAR** sem as seguintes alterações:
- Cláusula 7ª: Exigir aviso prévio de 30 dias
- Cláusula 15ª: Limitar PI ao objeto específico
```

**Notas:** Exemplo de como identificar e reportar cláusulas abusivas.
```

---

<a name="bloco-5"></a>
## Bloco 5: Organização de Arquivos (~20 min)

### 5.1 Estrutura Recomendada

Uma boa organização facilita manutenção e colaboração:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ESTRUTURA RECOMENDADA                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   projeto/                                                                  │
│   ├── CLAUDE.md                    ← Contexto do projeto                    │
│   │                                                                         │
│   ├── .claude/                     ← Capacidades do projeto                 │
│   │   ├── commands/                ← Commands específicos                   │
│   │   │   ├── relatar-processo.md                                           │
│   │   │   ├── analisar-caso.md                                              │
│   │   │   └── elaborar-minuta.md                                            │
│   │   │                                                                     │
│   │   ├── skills/                  ← Skills específicas                     │
│   │   │   ├── relatorio-judicial/                                           │
│   │   │   │   ├── SKILL.md                                                  │
│   │   │   │   ├── examples/                                                 │
│   │   │   │   └── templates/                                                │
│   │   │   │                                                                 │
│   │   │   └── elaboracao-minuta/                                            │
│   │   │       ├── SKILL.md                                                  │
│   │   │       └── examples/                                                 │
│   │   │                                                                     │
│   │   └── prompts/                 ← Prompts auxiliares                     │
│   │       └── persona-julgador.md                                           │
│   │                                                                         │
│   ├── docs/                        ← Documentação do projeto                │
│   │   ├── arquitetura.md                                                    │
│   │   └── fluxo-trabalho.md                                                 │
│   │                                                                         │
│   └── processos/                   ← Dados do projeto                       │
│       ├── entrada/                                                          │
│       └── saida/                                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Convenções de Nomenclatura

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONVENÇÕES DE NOMENCLATURA                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ARQUIVOS:                                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Tipo          │ Convenção      │ Exemplo                           │   │
│   ├───────────────┼────────────────┼───────────────────────────────────┤   │
│   │ Commands      │ kebab-case     │ relatar-processo.md               │   │
│   │ Skills        │ kebab-case     │ relatorio-judicial/               │   │
│   │ Arquivos MD   │ kebab-case     │ guia-usuario.md                   │   │
│   │ Constantes    │ SCREAMING_CASE │ SKILL.md, CLAUDE.md               │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   PASTAS:                                                                   │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Tipo          │ Convenção      │ Exemplo                           │   │
│   ├───────────────┼────────────────┼───────────────────────────────────┤   │
│   │ Skills        │ kebab-case     │ relatorio-judicial/               │   │
│   │ Exemplos      │ lowercase      │ examples/                         │   │
│   │ Templates     │ lowercase      │ templates/                        │   │
│   │ Sistema       │ .prefixo       │ .claude/                          │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EVITAR:                                                                   │
│   ✗ Espaços em nomes (usar hífen)                                           │
│   ✗ Caracteres especiais (acentos, ç)                                       │
│   ✗ Nomes muito longos (máx 30 caracteres)                                  │
│   ✗ Nomes genéricos (arquivo1.md, teste.md)                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Versionamento e Manutenção

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VERSIONAMENTO DE CAPACIDADES                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   OPÇÃO 1: VERSIONAMENTO POR GIT (Recomendado)                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Usar Git para controle de versão                                  │   │
│   │ • Commits descritivos: "skill(relatorio): add exemplo BPC"          │   │
│   │ • Branches para experimentos                                        │   │
│   │ • Tags para versões estáveis                                        │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   OPÇÃO 2: VERSIONAMENTO POR PASTA (Casos especiais)                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ skills/                                                             │   │
│   │ ├── relatorio-judicial/          ← Versão atual                     │   │
│   │ └── _archive/                                                       │   │
│   │     └── relatorio-judicial-v1/   ← Versão anterior                  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   QUANDO ATUALIZAR:                                                         │
│   • Comportamento inconsistente detectado                                   │
│   • Novos requisitos identificados                                          │
│   • Feedback de usuários                                                    │
│   • Mudança em regras de negócio                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Checklist de Organização

Use este checklist ao criar ou revisar capacidades:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CHECKLIST DE ORGANIZAÇÃO                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   COMMAND:                                                                  │
│   □ Nome segue kebab-case                                                   │
│   □ Primeira linha tem descrição clara                                      │
│   □ Separador "---" entre meta e prompt                                     │
│   □ Documenta uso de $ARGUMENTS                                             │
│   □ Inclui exemplo de invocação                                             │
│   □ Menos de 50 linhas                                                      │
│                                                                             │
│   SKILL:                                                                    │
│   □ Pasta com nome em kebab-case                                            │
│   □ SKILL.md presente                                                       │
│   □ Seção "Quando Usar" definida                                            │
│   □ Seção "Regras" com SEMPRE/NUNCA                                         │
│   □ Formato de saída documentado                                            │
│   □ Pelo menos 2 exemplos (simples + complexo)                              │
│   □ Pasta examples/ organizada                                              │
│                                                                             │
│   PROJETO:                                                                  │
│   □ CLAUDE.md na raiz                                                       │
│   □ .claude/ contém commands e skills                                       │
│   □ Estrutura de pastas documentada                                         │
│   □ Nomes consistentes em todo projeto                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.5 Exercício: Auditar Organização

**Tarefa:** Audite a estrutura abaixo e identifique problemas:

```
projeto/
├── claude.md                    ← Problema?
├── .claude/
│   ├── commands/
│   │   ├── RelatarProcesso.md   ← Problema?
│   │   └── analisar caso.md     ← Problema?
│   └── skills/
│       └── Relatorio Judicial/  ← Problema?
│           ├── skill.md         ← Problema?
│           └── exemplo.md       ← Problema?
└── docs/
```

**Resposta:**

| Item | Problema | Correção |
|------|----------|----------|
| `claude.md` | Minúsculo (deveria ser maiúsculo) | `CLAUDE.md` |
| `RelatarProcesso.md` | PascalCase (deveria ser kebab) | `relatar-processo.md` |
| `analisar caso.md` | Espaço no nome | `analisar-caso.md` |
| `Relatorio Judicial/` | Espaço e maiúscula | `relatorio-judicial/` |
| `skill.md` | Minúsculo (deveria ser maiúsculo) | `SKILL.md` |
| `exemplo.md` | Único exemplo (deveria ter pasta) | `examples/caso-simples.md` |

---

<a name="sintese"></a>
## Síntese e Próximos Passos

### Resumo da Aula

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    RESUMO: ENGENHARIA DE CAPACIDADES                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   1. COMMANDS                                                               │
│      • Prompts salvos invocados com /                                       │
│      • Variáveis: $ARGUMENTS, $FILE                                         │
│      • Local: ~/.claude/commands/ ou .claude/commands/                      │
│      • Ideal para: tarefas simples e diretas (< 50 linhas)                  │
│                                                                             │
│   2. SKILLS                                                                 │
│      • Expertise encapsulada em pastas                                      │
│      • Arquivo obrigatório: SKILL.md                                        │
│      • Seções: Quando Usar, Como Funciona, Regras, Formato, Exemplos        │
│      • Ideal para: tarefas complexas com nuances                            │
│                                                                             │
│   3. DECISÃO COMMAND vs SKILL                                               │
│      • Regra dos 50 linhas                                                  │
│      • Precisa de exemplos? → Skill                                         │
│      • Metodologia complexa? → Skill                                        │
│      • Na dúvida: começar com Command                                       │
│                                                                             │
│   4. TEMPLATES E EXEMPLOS                                                   │
│      • Exemplos calibram comportamento                                      │
│      • Mínimo: caso simples + caso complexo                                 │
│      • Templates garantem estrutura consistente                             │
│                                                                             │
│   5. ORGANIZAÇÃO                                                            │
│      • Convenções de nomenclatura (kebab-case)                              │
│      • Estrutura de pastas padronizada                                      │
│      • Versionamento via Git                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Citações-Chave

> *"Skills are just folders. That's literally all they are."*
> — Barry Zhang & Mahesh Murag, Anthropic (AI Engineer Summit 2024)

### O Que Aprendemos

| Conceito | Aplicação Prática |
|----------|-------------------|
| Commands | Criar atalhos para prompts repetitivos |
| Skills | Encapsular expertise complexa |
| Exemplos | Calibrar comportamento esperado |
| Organização | Manter projeto sustentável |

### Próxima Aula: Engenharia de Workflows

Na próxima aula, aprenderemos a **orquestrar** capacidades em pipelines:

- Pipelines vs Agência Livre
- Padrão RPI (Research → Plan → Implement)
- Checkpoints e Gates
- Error Handling Estruturado
- Framework de Custo do Erro

### Exercício de Fixação

**Desafio:** Crie um pacote completo de capacidades para um gabinete jurídico:

1. **3 Commands:**
   - `/verificar-citacao` - Verifica se citação existe
   - `/formatar-ementa` - Formata ementa para publicação
   - `/calcular-custas` - Calcula custas processuais

2. **1 Skill:**
   - `analise-recursal/` - Analisa recursos de apelação
   - Inclua SKILL.md com todas as seções
   - Crie 2 exemplos (recurso simples e complexo)
   - Defina template de saída

3. **Organização:**
   - Estruture as pastas corretamente
   - Use convenções de nomenclatura
   - Crie CLAUDE.md referenciando as capacidades

---

## Referências

### Documentação Oficial
- [Claude Code - Commands](https://docs.anthropic.com/claude-code/commands)
- [Claude Code - Skills](https://docs.anthropic.com/claude-code/skills)

### Fontes das Citações
- Barry Zhang & Mahesh Murag - AI Engineer Summit 2024, "Building with Claude Code"

### Material Complementar
- `docs/11-guia-commands-skills-agents.md` - Guia detalhado
- `docs/10-catalogo-skills-recomendadas.md` - Skills da comunidade

---

**Próxima Aula:** [Aula 9: Engenharia de Workflows](./aula-09/roteiro-aula-09.md)
