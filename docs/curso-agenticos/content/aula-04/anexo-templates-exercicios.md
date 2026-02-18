# Anexo: Templates e Exercicios Praticos

> **Aula 4:** Construindo os Primeiros Agentes
> **Objetivo:** Fornecer templates prontos e exercicios guiados

---

## Parte 1: Templates Reutilizaveis

### Template 1: Spec Document

```markdown
# Spec: [Nome do Projeto]

> Data: [YYYY-MM-DD]
> Autor: [Nome]
> Versao: 1.0

---

## 1. REQUIREMENTS

### 1.1 User Story
Como [PAPEL],
quero [ACAO],
para [BENEFICIO].

### 1.2 Criterios de Aceitacao
- [ ] Criterio 1: [descricao especifica e verificavel]
- [ ] Criterio 2: [descricao especifica e verificavel]
- [ ] Criterio 3: [descricao especifica e verificavel]
- [ ] Criterio 4: [descricao especifica e verificavel]
- [ ] Criterio 5: [descricao especifica e verificavel]

### 1.3 Restricoes
- NAO fazer: [restricao 1]
- NAO fazer: [restricao 2]
- NAO fazer: [restricao 3]

### 1.4 Metricas de Sucesso
| Metrica | Alvo | Como Medir |
|---------|------|------------|
| [Metrica 1] | [valor] | [metodo] |
| [Metrica 2] | [valor] | [metodo] |

---

## 2. DESIGN

### 2.1 Visao Geral
[Paragrafo descrevendo a abordagem em alto nivel]

### 2.2 Diagrama de Arquitetura
```
ENTRADA:
└── [Descreva o input esperado]

PROCESSAMENTO:
├── Etapa 1: [descricao]
├── Etapa 2: [descricao]
└── Etapa 3: [descricao]

SAIDA:
└── [Descreva o output esperado]
```

### 2.3 Estrutura de Dados

**Entrada:**
```
[Formato da entrada - JSON, Markdown, texto livre, etc.]
```

**Saida:**
```
[Formato da saida - template exato]
```

### 2.4 Dependencias
- Depende de: [lista de sistemas/dados necessarios]
- Integra com: [lista de sistemas que consomem o output]

---

## 3. TASKS

### Fase 1: Setup
- [ ] T1.1: [tarefa atomica]
- [ ] T1.2: [tarefa atomica]

### Fase 2: Implementacao Core
- [ ] T2.1: [tarefa atomica]
- [ ] T2.2: [tarefa atomica]
- [ ] T2.3: [tarefa atomica]

### Fase 3: Testes
- [ ] T3.1: [tarefa atomica]
- [ ] T3.2: [tarefa atomica]

### Fase 4: Refinamento
- [ ] T4.1: [tarefa atomica]
- [ ] T4.2: [tarefa atomica]

---

## 4. CHECKPOINTS

| Checkpoint | Apos Task | Criterio de Aprovacao |
|------------|-----------|----------------------|
| CP1 | T1.2 | [o que deve estar funcionando] |
| CP2 | T2.3 | [o que deve estar funcionando] |
| CP3 | T3.2 | [o que deve estar funcionando] |

---

## 5. RISCOS E MITIGACOES

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| [Risco 1] | Alta/Media/Baixa | Alto/Medio/Baixo | [estrategia] |
| [Risco 2] | Alta/Media/Baixa | Alto/Medio/Baixo | [estrategia] |

---

*Spec aprovada por: [Nome]
Data de aprovacao: [YYYY-MM-DD]*
```

---

### Template 2: SKILL.md

```markdown
# Skill: [Nome da Skill]

> [Descricao de uma linha explicando o que esta skill faz]

## Quando Usar

Use esta skill quando:
- [Situacao 1 em que faz sentido usar]
- [Situacao 2 em que faz sentido usar]
- [Situacao 3 em que faz sentido usar]

NAO use esta skill quando:
- [Situacao em que NAO faz sentido usar]
- [Situacao em que outra skill e melhor]

## Metodologia

### Etapa 1: [Nome da Etapa]
[Descricao do que acontece nesta etapa]

### Etapa 2: [Nome da Etapa]
[Descricao do que acontece nesta etapa]

### Etapa 3: [Nome da Etapa]
[Descricao do que acontece nesta etapa]

## Regras (CRITICO)

### SEMPRE
1. SEMPRE [regra obrigatoria 1]
2. SEMPRE [regra obrigatoria 2]
3. SEMPRE [regra obrigatoria 3]

### NUNCA
1. NUNCA [proibicao 1]
2. NUNCA [proibicao 2]
3. NUNCA [proibicao 3]

### PREFERIR
1. PREFERIR [opcao A] sobre [opcao B] porque [razao]
2. PREFERIR [opcao C] sobre [opcao D] porque [razao]

## Formato de Saida

```
[Template exato do output esperado]
[Use placeholders como [CAMPO] para partes variaveis]
```

## Exemplos

### Exemplo 1: [Caso Simples]

**Entrada:**
```
[Exemplo de input]
```

**Saida Esperada:**
```
[Exemplo de output correspondente]
```

### Exemplo 2: [Caso Complexo]

**Entrada:**
```
[Exemplo de input mais complexo]
```

**Saida Esperada:**
```
[Exemplo de output correspondente]
```

## Tratamento de Erros

| Situacao | O Que Fazer |
|----------|-------------|
| [Erro comum 1] | [Como tratar] |
| [Erro comum 2] | [Como tratar] |
| [Dados faltantes] | [Como tratar] |

## Dependencias

- Requer: [lista de skills/tools necessarias]
- Complementa: [lista de skills que usam o output desta]

---

*Versao: 1.0
Ultima atualizacao: [YYYY-MM-DD]*
```

---

### Template 3: Command

```markdown
# /[nome-do-comando]

[Descricao de uma linha do que o comando faz]

---

## Contexto
[Breve contexto de quando usar este comando]

## Instrucoes

[Instrucoes detalhadas para o Claude executar]

### Etapa 1: [Nome]
[O que fazer nesta etapa]

### Etapa 2: [Nome]
[O que fazer nesta etapa]

### Etapa 3: [Nome]
[O que fazer nesta etapa]

## Formato de Saida

[Template do output esperado]

## Restricoes

- NAO [restricao 1]
- NAO [restricao 2]

## Input

$ARGUMENTS
```

---

### Template 4: Documento de Research (RPI)

```markdown
# Research Findings: [Nome do Projeto]

> Data: [YYYY-MM-DD]
> Pesquisador: [Nome/Claude]
> Status: Em andamento / Concluido

---

## 1. Contexto da Pesquisa

### 1.1 Objetivo
[O que estamos tentando entender?]

### 1.2 Escopo
- Inclui: [o que faz parte da pesquisa]
- Exclui: [o que NAO faz parte]

---

## 2. Descobertas

### 2.1 Estado Atual
[Descricao do que existe hoje]

### 2.2 Padroes Identificados
| Padrao | Onde Encontrado | Relevancia |
|--------|-----------------|------------|
| [Padrao 1] | [local] | Alta/Media/Baixa |
| [Padrao 2] | [local] | Alta/Media/Baixa |

### 2.3 Dependencias Mapeadas
```
[Diagrama de dependencias]
```

### 2.4 Lacunas Identificadas
- Lacuna 1: [descricao]
- Lacuna 2: [descricao]

---

## 3. Abordagens Possiveis

### Abordagem A: [Nome]
**Descricao:** [O que e esta abordagem]

**Pros:**
- [Vantagem 1]
- [Vantagem 2]

**Cons:**
- [Desvantagem 1]
- [Desvantagem 2]

**Esforco estimado:** [Baixo/Medio/Alto]

### Abordagem B: [Nome]
**Descricao:** [O que e esta abordagem]

**Pros:**
- [Vantagem 1]
- [Vantagem 2]

**Cons:**
- [Desvantagem 1]
- [Desvantagem 2]

**Esforco estimado:** [Baixo/Medio/Alto]

### Abordagem C: [Nome]
**Descricao:** [O que e esta abordagem]

**Pros:**
- [Vantagem 1]
- [Vantagem 2]

**Cons:**
- [Desvantagem 1]
- [Desvantagem 2]

**Esforco estimado:** [Baixo/Medio/Alto]

---

## 4. Recomendacao

### 4.1 Abordagem Recomendada
**[Abordagem X]**

### 4.2 Justificativa
[Por que esta abordagem e a melhor para este caso]

### 4.3 Riscos e Mitigacoes
| Risco | Mitigacao |
|-------|-----------|
| [Risco 1] | [Como mitigar] |
| [Risco 2] | [Como mitigar] |

---

## 5. Proximos Passos

1. [ ] [Acao 1 - aguardando aprovacao]
2. [ ] [Acao 2 - apos aprovacao]
3. [ ] [Acao 3 - apos aprovacao]

---

*Pesquisa concluida em: [YYYY-MM-DD]
Revisada por: [Nome]
Status: Aguardando aprovacao / Aprovada*
```

---

### Template 5: Plano de Implementacao (RPI)

```markdown
# Plano de Implementacao: [Nome do Projeto]

> Data: [YYYY-MM-DD]
> Baseado em: [link para Research Findings]
> Abordagem escolhida: [Nome da abordagem]

---

## 1. Visao Geral

### 1.1 Objetivo
[O que sera construido]

### 1.2 Arquitetura
```
[Diagrama ASCII da arquitetura]
```

### 1.3 Tecnologias
- [Tecnologia 1]: [para que]
- [Tecnologia 2]: [para que]

---

## 2. Tarefas

### Task 1: [Nome]
**Arquivos:**
- Criar: `path/to/new/file.md`
- Modificar: `path/to/existing/file.md:linhas`

**Descricao:**
[O que fazer nesta task]

**Verificacao:**
- [ ] [Como saber que funcionou]

**Rollback:**
[Como desfazer se der errado]

---

### Task 2: [Nome]
**Arquivos:**
- Criar: `path/to/new/file.md`
- Modificar: `path/to/existing/file.md:linhas`

**Descricao:**
[O que fazer nesta task]

**Verificacao:**
- [ ] [Como saber que funcionou]

**Rollback:**
[Como desfazer se der errado]

---

### Task 3: [Nome]
[Mesmo formato]

---

## 3. Ordem de Execucao

```
Task 1 (sem dependencias)
    |
    v
Task 2 (depende de Task 1)
    |
    +---> Task 3 (paralelo com Task 4)
    |
    +---> Task 4 (paralelo com Task 3)
    |
    v
Task 5 (depende de Task 3 e Task 4)
```

---

## 4. Checkpoints

| # | Apos Task | O Que Validar | Quem Aprova |
|---|-----------|---------------|-------------|
| CP1 | Task 2 | [descricao] | [Humano/Auto] |
| CP2 | Task 4 | [descricao] | [Humano/Auto] |
| CP3 | Task 5 | [descricao] | [Humano/Auto] |

---

## 5. Criterios de Sucesso

- [ ] Todos os testes passando
- [ ] Documentacao atualizada
- [ ] Nenhum erro critico
- [ ] Performance dentro do esperado

---

*Plano aprovado por: [Nome]
Data: [YYYY-MM-DD]
Pronto para execucao: [Sim/Nao]*
```

---

## Parte 2: Exercicios Guiados

### Exercicio 1: Sua Primeira Spec (20 min)

**Objetivo:** Praticar a escrita de especificacoes antes de construir.

**Cenario:** Voce precisa criar um sistema que analisa peticoes iniciais e extrai informacoes estruturadas.

**Tarefa:** Preencha o template abaixo:

```markdown
# Spec: Extrator de Peticoes

## 1. REQUIREMENTS

### User Story
Como ________________,
quero ________________,
para ________________.

### Criterios de Aceitacao
- [ ] ________________
- [ ] ________________
- [ ] ________________

### Restricoes
- NAO fazer: ________________
- NAO fazer: ________________

## 2. DESIGN

### Entrada
[Descreva o que o sistema recebe]

### Saida
[Descreva o que o sistema produz]

### Diagrama
```
[Desenhe o fluxo]
```

## 3. TASKS
- [ ] T1: ________________
- [ ] T2: ________________
- [ ] T3: ________________
- [ ] T4: ________________
```

**Dica:** Seja especifico nos criterios de aceitacao. "Extrair dados" e vago. "Extrair numero do processo no formato XXXXXXX-XX.XXXX.X.XX.XXXX" e especifico.

---

### Exercicio 2: Anatomia de Skill (30 min)

**Objetivo:** Criar uma skill completa seguindo o template.

**Cenario:** Voce precisa de uma skill para classificar a urgencia de processos.

**Tarefa:** Complete a skill abaixo:

```markdown
# Skill: Classificador de Urgencia

> [Complete com descricao de uma linha]

## Quando Usar

Use quando:
- ________________
- ________________
- ________________

## Metodologia

### Etapa 1: Identificar Indicadores
[Descreva como identificar indicadores de urgencia]

Indicadores de ALTA urgencia:
- ________________
- ________________
- ________________

Indicadores de BAIXA urgencia:
- ________________
- ________________

### Etapa 2: Classificar
[Descreva o criterio de classificacao]

### Etapa 3: Justificar
[Descreva como justificar a classificacao]

## Regras

### SEMPRE
1. SEMPRE ________________
2. SEMPRE ________________

### NUNCA
1. NUNCA ________________
2. NUNCA ________________

## Formato de Saida

```
# CLASSIFICACAO DE URGENCIA

Processo: [NUMERO]
Data analise: [DATA]

## Classificacao
**[ALTA/MEDIA/BAIXA]**

## Justificativa
[Explicacao]

## Indicadores Identificados
- [Indicador 1]
- [Indicador 2]

## Recomendacao
[Proximos passos]
```

## Exemplos

### Exemplo 1: Urgencia Alta
**Entrada:** [Descreva um caso de urgencia alta]

**Saida:**
[Complete o output]

### Exemplo 2: Urgencia Baixa
**Entrada:** [Descreva um caso de urgencia baixa]

**Saida:**
[Complete o output]
```

---

### Exercicio 3: Criando Command (15 min)

**Objetivo:** Criar um command util para seu fluxo de trabalho.

**Tarefa:** Identifique uma tarefa que voce repete frequentemente e crie um command para ela.

```markdown
# /[escolha-um-nome]

[Descricao do que faz]

---

## Contexto
[Quando usar este command]

## Instrucoes

[Escreva as instrucoes completas que voce normalmente digitaria]

[Inclua:]
- O que analisar
- Como estruturar o output
- Restricoes importantes

## Formato de Saida

[Template do output esperado]

## Input

$ARGUMENTS
```

**Perguntas para ajudar:**
1. Que prompt voce digitou mais de 3 vezes esta semana?
2. Que instrucao voce sempre copia de algum lugar?
3. Que tarefa voce delega frequentemente com as mesmas instrucoes?

---

### Exercicio 4: RPI Completo (45 min)

**Objetivo:** Praticar o ciclo Research → Plan → Implement.

**Cenario:** Criar um sistema para verificar se uma sentenca cita precedentes corretamente.

**FASE 1: RESEARCH (15 min)**

```markdown
# Research: Verificador de Precedentes

## 1. Objetivo da Pesquisa
O que preciso entender para construir este sistema?

## 2. Descobertas

### Fontes de Precedentes
- BNP: [o que oferece]
- CJF: [o que oferece]
- JULIA: [o que oferece]

### Formatos de Citacao
[Como precedentes sao citados em sentencas]

### Erros Comuns
[Que tipos de erros de citacao existem]

## 3. Abordagens

### A: Verificar apenas existencia
[Pros/cons]

### B: Verificar existencia + aplicabilidade
[Pros/cons]

### C: Verificar + sugerir correcoes
[Pros/cons]

## 4. Recomendacao
[Qual abordagem e por que]
```

**FASE 2: PLAN (15 min)**

```markdown
# Plano: Verificador de Precedentes

## Arquitetura
```
[Diagrama]
```

## Tasks

### T1: Extrair citacoes da sentenca
- Arquivos: [quais]
- Descricao: [o que fazer]
- Verificacao: [como testar]

### T2: Consultar base de precedentes
- Arquivos: [quais]
- Descricao: [o que fazer]
- Verificacao: [como testar]

### T3: Comparar e gerar relatorio
- Arquivos: [quais]
- Descricao: [o que fazer]
- Verificacao: [como testar]

## Checkpoints
[Quando parar para validar]
```

**FASE 3: IMPLEMENT (15 min)**

```markdown
# Implementacao: Verificador de Precedentes

## Task 1: Extrair citacoes
[Escreva a skill/command para esta task]

## Task 2: Consultar base
[Escreva a logica para esta task]

## Task 3: Gerar relatorio
[Escreva o formato do relatorio]

## Teste
[Descreva 2-3 casos de teste]
```

---

### Exercicio 5: Prompt Learning Loop (30 min)

**Objetivo:** Praticar a iteracao de prompts com feedback especifico.

**Cenario:** Voce tem uma skill que gera resumos, mas os resumos estao inconsistentes.

**ITERACAO 1:**

```markdown
## Prompt Inicial
"Gere um resumo do documento fornecido."

## Teste com 3 documentos
- Doc 1: [resultado - bom/ruim e por que]
- Doc 2: [resultado - bom/ruim e por que]
- Doc 3: [resultado - bom/ruim e por que]

## Analise de Falhas
O que deu errado:
- Falha 1: ________________
- Falha 2: ________________

## Refinamento
Nova versao do prompt:
"________________"
```

**ITERACAO 2:**

```markdown
## Prompt Refinado
[Cole o prompt da iteracao anterior]

## Teste com mesmos 3 documentos
- Doc 1: [resultado]
- Doc 2: [resultado]
- Doc 3: [resultado]

## Ainda tem problemas?
- [ ] Sim → Mais uma iteracao
- [ ] Nao → Testar com novos documentos

## Se sim, o que ajustar:
________________
```

**ITERACAO 3:**

```markdown
## Prompt Final
[Cole o prompt otimizado]

## Teste expandido (5 documentos)
- Doc 1: [resultado]
- Doc 2: [resultado]
- Doc 3: [resultado]
- Doc 4 (novo): [resultado]
- Doc 5 (novo): [resultado]

## Taxa de sucesso
[X]/5 = [Y]%

## Criterios de convergencia
- [ ] 5 sucessos consecutivos?
- [ ] Taxa > 90%?
- [ ] Formato consistente?

## Status
[ ] Continuar iterando
[ ] Prompt estavel - pronto para uso
```

---

## Parte 3: Checklists de Referencia

### Checklist: Antes de Construir

```markdown
## Pre-Construcao

### Spec
- [ ] User story clara?
- [ ] Criterios de aceitacao especificos?
- [ ] Restricoes documentadas?
- [ ] Design com entrada/saida?
- [ ] Tasks atomicas listadas?

### Decisao Skill vs Command
- [ ] Mais de 50 linhas de instrucao? → Skill
- [ ] Precisa de exemplos? → Skill
- [ ] Invocacao explicita? → Command
- [ ] Tarefa simples e repetida? → Command

### Research (se projeto complexo)
- [ ] Entendi o espaco do problema?
- [ ] Mapeei dependencias?
- [ ] Identifiquei abordagens possiveis?
- [ ] Tenho recomendacao justificada?
```

### Checklist: Durante a Construcao

```markdown
## Durante Construcao

### Skill
- [ ] SKILL.md tem todas as secoes?
  - [ ] Quando usar
  - [ ] Metodologia
  - [ ] Regras (SEMPRE/NUNCA)
  - [ ] Formato de saida
  - [ ] Exemplos
- [ ] Exemplos sao realistas?
- [ ] Regras sao explicitas (nao vagas)?

### Command
- [ ] Descricao de uma linha?
- [ ] Instrucoes completas?
- [ ] $ARGUMENTS usado corretamente?
- [ ] Formato de saida definido?

### Testes
- [ ] Testei com 3+ casos?
- [ ] Documentei resultados?
- [ ] Identifiquei falhas?
```

### Checklist: Pos-Construcao

```markdown
## Pos-Construcao

### Qualidade
- [ ] Taxa de sucesso > 80%?
- [ ] Formato consistente?
- [ ] Sem erros criticos nas ultimas 5 execucoes?

### Documentacao
- [ ] CLAUDE.md atualizado com referencia?
- [ ] Exemplos de uso documentados?
- [ ] Falhas conhecidas documentadas?

### Manutencao
- [ ] Sei como iterar se precisar?
- [ ] Tenho casos de teste salvos?
- [ ] Versao inicial commitada?
```

### Checklist: Debugging

```markdown
## Quando Algo Falha

### Passo 1: Entender
- [ ] Qual era a tarefa?
- [ ] O que foi produzido?
- [ ] O que deveria ter sido produzido?
- [ ] Qual a diferenca?

### Passo 2: Isolar
- [ ] E problema de prompt?
- [ ] E problema de contexto?
- [ ] E problema de ferramenta?
- [ ] E problema de dados de entrada?

### Passo 3: Testar
- [ ] Testei com input simplificado?
- [ ] Testei cada componente separadamente?
- [ ] Consigo reproduzir o erro?

### Passo 4: Corrigir
- [ ] Identifiquei a causa raiz?
- [ ] Ajuste proposto e especifico?
- [ ] Ajuste nao quebra outros casos?

### Passo 5: Verificar
- [ ] Correcao funcionou?
- [ ] Testei casos que funcionavam antes?
- [ ] Adicionei teste para prevenir regressao?

### Passo 6: Documentar
- [ ] Documentei a causa raiz?
- [ ] Documentei a solucao?
- [ ] Atualizei a skill/command se necessario?
```

---

## Parte 4: Exemplos Completos

### Exemplo 1: Skill de Extracao de Fatos

**Arquivo:** `.claude/skills/extracao-fatos/SKILL.md`

```markdown
# Skill: Extracao de Fatos Processuais

> Extrai fatos relevantes de documentos processuais em ordem cronologica.

## Quando Usar

Use esta skill quando:
- Precisar de visao cronologica dos fatos
- Documento tiver mais de 10 paginas
- Preparando relatorio para decisao

NAO use quando:
- Documento for muito curto (< 5 paginas)
- Precisar apenas de metadados (use /extrair-metadados)

## Metodologia

### Etapa 1: Leitura Inicial
Ler documento identificando:
- Datas mencionadas
- Eventos descritos
- Personagens envolvidos

### Etapa 2: Ordenacao Cronologica
Organizar fatos por data, do mais antigo ao mais recente.
Se data exata nao disponivel, usar aproximacao ou marcar como "data indefinida".

### Etapa 3: Verificacao de Fonte
Para cada fato extraido, registrar:
- Pagina/paragrafo onde foi encontrado
- Documento fonte (peticao, contestacao, laudo, etc.)

### Etapa 4: Validacao de Completude
Verificar se todos os fatos relevantes foram capturados:
- Fato gerador do processo
- Eventos intermediarios
- Estado atual

## Regras

### SEMPRE
1. SEMPRE incluir a pagina/fonte de cada fato
2. SEMPRE manter ordem cronologica
3. SEMPRE distinguir entre fatos incontroversos e controversos
4. SEMPRE usar linguagem neutra (sem juizo de valor)

### NUNCA
1. NUNCA inventar fatos nao presentes no documento
2. NUNCA incluir argumentos juridicos (so fatos)
3. NUNCA omitir fatos relevantes mesmo se desfavoraveis
4. NUNCA usar linguagem emotiva ou tendenciosa

### PREFERIR
1. PREFERIR datas exatas sobre aproximacoes
2. PREFERIR citacao direta sobre parafrases quando importante
3. PREFERIR brevidade sobre completude excessiva

## Formato de Saida

```
# EXTRACAO DE FATOS

Processo: [NUMERO]
Data extracao: [DATA]
Documento fonte: [NOME DO DOCUMENTO]

## Linha do Tempo

| Data | Fato | Fonte | Status |
|------|------|-------|--------|
| [DATA] | [DESCRICAO] | p. [X] | Incontroverso/Controverso |
| [DATA] | [DESCRICAO] | p. [X] | Incontroverso/Controverso |
| [DATA] | [DESCRICAO] | p. [X] | Incontroverso/Controverso |

## Fatos Principais

### Fato Gerador
[Descricao do evento que deu origem ao processo]
Fonte: [pagina/documento]

### Estado Atual
[Descricao da situacao atual]
Fonte: [pagina/documento]

## Observacoes
- [Observacao sobre lacunas ou inconsistencias, se houver]

---
*Extracao automatica - verificar antes de usar*
```

## Exemplos

### Exemplo 1: Auxilio-Doenca

**Entrada:**
Peticao inicial de auxilio-doenca com 15 paginas, relatando:
- Contrato de trabalho desde 2015
- Afastamento por doenca em marco/2023
- Pericia INSS negando incapacidade em abril/2023

**Saida:**
```
# EXTRACAO DE FATOS

Processo: 0001234-56.2023.4.05.8100
Data extracao: 2024-01-15
Documento fonte: Peticao Inicial

## Linha do Tempo

| Data | Fato | Fonte | Status |
|------|------|-------|--------|
| 01/03/2015 | Inicio do contrato de trabalho como operador de maquinas | p. 3 | Incontroverso |
| 15/03/2023 | Afastamento do trabalho por dores lombares | p. 5 | Incontroverso |
| 20/03/2023 | Entrada de requerimento administrativo NB 123456 | p. 6 | Incontroverso |
| 10/04/2023 | Pericia medica do INSS | p. 8 | Incontroverso |
| 15/04/2023 | Indeferimento do beneficio - conclusao: sem incapacidade | p. 9 | Controverso |

## Fatos Principais

### Fato Gerador
Autor trabalha como operador de maquinas desde 2015. Em marco/2023, apresentou dores lombares que o impossibilitaram de continuar trabalhando. Requereu auxilio-doenca ao INSS.
Fonte: p. 3-6

### Estado Atual
Beneficio indeferido administrativamente. Autor alega que continua incapacitado para o trabalho.
Fonte: p. 9-10

## Observacoes
- Autor menciona laudo medico particular, mas documento nao consta nos autos analisados
- Data exata do inicio dos sintomas nao especificada

---
*Extracao automatica - verificar antes de usar*
```

### Exemplo 2: BPC/LOAS

**Entrada:**
Processo de BPC para idoso com documentacao de renda familiar.

**Saida:**
```
# EXTRACAO DE FATOS

Processo: 0005678-90.2023.4.05.8200
Data extracao: 2024-01-15
Documento fonte: Peticao Inicial + Documentos Anexos

## Linha do Tempo

| Data | Fato | Fonte | Status |
|------|------|-------|--------|
| 15/05/1955 | Nascimento do requerente | p. 12 (RG) | Incontroverso |
| 2018 | Obito do conjuge | p. 15 (Certidao) | Incontroverso |
| 10/01/2023 | Requerimento administrativo do BPC | p. 3 | Incontroverso |
| 25/01/2023 | Avaliacao social do INSS | p. 18 | Incontroverso |
| 05/02/2023 | Indeferimento - renda per capita acima de 1/4 SM | p. 20 | Controverso |

## Fatos Principais

### Fato Gerador
Requerente, 68 anos, idoso, requereu BPC alegando miserabilidade. Reside com filha desempregada e neto menor.
Fonte: p. 2-4

### Estado Atual
INSS indeferiu alegando que renda per capita familiar supera 1/4 do salario minimo. Autor contesta o calculo, alegando que renda da filha e eventual.
Fonte: p. 20, p. 5

## Observacoes
- Composicao familiar: Requerente + filha (40 anos) + neto (12 anos)
- Renda declarada: R$ 600,00 de bicos da filha (controverso)

---
*Extracao automatica - verificar antes de usar*
```
```

---

### Exemplo 2: Command de Verificacao

**Arquivo:** `.claude/commands/verificar-formato.md`

```markdown
# /verificar-formato

Valida se um documento segue o formato esperado antes de finalizar

---

## Contexto
Use este comando para verificar documentos antes de salvar ou enviar.
Util para garantir padronizacao em minutas, relatorios e sentencas.

## Instrucoes

Analise o documento fornecido e verifique:

### 1. Estrutura
- [ ] Tem todas as secoes obrigatorias?
- [ ] Secoes estao na ordem correta?
- [ ] Cabecalhos estao formatados corretamente?

### 2. Conteudo
- [ ] Informacoes de identificacao presentes?
- [ ] Referencias/citacoes formatadas corretamente?
- [ ] Sem informacoes faltantes obrigatorias?

### 3. Formatacao
- [ ] Markdown valido?
- [ ] Tabelas formatadas corretamente?
- [ ] Listas consistentes?

### 4. Linguagem
- [ ] Linguagem formal apropriada?
- [ ] Sem erros gramaticais obvios?
- [ ] Terminologia juridica correta?

## Formato de Saida

```
# VERIFICACAO DE FORMATO

Documento: [nome]
Data: [data]

## Resultado: [APROVADO / REPROVADO]

## Checklist

### Estrutura
- [x] ou [ ] Item 1
- [x] ou [ ] Item 2

### Conteudo
- [x] ou [ ] Item 1
- [x] ou [ ] Item 2

### Formatacao
- [x] ou [ ] Item 1
- [x] ou [ ] Item 2

### Linguagem
- [x] ou [ ] Item 1
- [x] ou [ ] Item 2

## Problemas Encontrados
1. [Problema - onde - como corrigir]
2. [Problema - onde - como corrigir]

## Sugestoes de Correcao
[Se reprovado, liste as correcoes necessarias]
```

## Input

$ARGUMENTS
```

---

## Conclusao

Estes templates e exercicios fornecem a base pratica para construir seus primeiros agentes. Lembre-se:

1. **Sempre comece com spec** - Nao construa sem saber o que quer
2. **Itere com feedback especifico** - Prompt Learning Loop
3. **Documente tudo** - Falhas sao aprendizado
4. **Teste incrementalmente** - Nao deixe para testar so no final

---

*Anexo da Aula 4 - Construindo os Primeiros Agentes*
*Curso de Sistemas Agenticos para Juristas*
