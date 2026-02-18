# Guia Prático: Framework P.O.E.M.A.

> Manual didático para construção de prompts jurídicos estruturados

---

## O que é o P.O.E.M.A.?

O **P.O.E.M.A.** é um framework para construção de prompts estruturados, desenvolvido com base nas melhores práticas de engenharia de prompts da Anthropic. O acrônimo representa os cinco componentes obrigatórios:

```
┌─────────────────────────────────────────────────────────────┐
│  P  │  Persona     │  Quem o modelo deve ser               │
├─────────────────────────────────────────────────────────────┤
│  O  │  Objetivo    │  O que deve fazer + como processar    │
├─────────────────────────────────────────────────────────────┤
│  E  │  Estilo      │  Como escrever + como se comportar    │
├─────────────────────────────────────────────────────────────┤
│  M  │  Modelo      │  Metodologia + formato de saída       │
├─────────────────────────────────────────────────────────────┤
│  A  │  Adicionais  │  Restrições + critérios de qualidade  │
└─────────────────────────────────────────────────────────────┘
```

### Estrutura XML

Cada componente é delimitado por tags XML:

```xml
<persona>
[conteúdo]
</persona>

<objetivo>
[conteúdo]
</objetivo>

<estilo>
[conteúdo]
</estilo>

<modelo>
[conteúdo]
<formato_saida>
[template estruturado]
</formato_saida>
</modelo>

<adicionais>
[conteúdo]
</adicionais>
```

---

## Os 4 Tipos de Prompts

Antes de construir um prompt, identifique seu tipo. Cada tipo tem características próprias:

| Tipo | Rigidez | Foco | Autonomia do Modelo |
|------|---------|------|---------------------|
| **Análise** | Rígido | Extração, interpretação, compreensão | Baixa |
| **Escrita** | Rígido | Produção de documentos com formato específico | Baixa |
| **Criação** | Flexível | Conteúdo original, liberdade criativa | Alta |
| **Pesquisa** | Flexível | Busca e síntese de múltiplas fontes | Alta |

### Diferenças práticas

**Prompts Rígidos (Análise e Escrita):**
- Formato de saída fixo (template)
- Metodologia definida pelo prompt
- Guardrails fortes contra alucinação
- Fidelidade absoluta ao documento

**Prompts Flexíveis (Criação e Pesquisa):**
- Autonomia metodológica: "Você tem autonomia e inteligência para definir a sua própria metodologia..."
- Linguagem permissiva: "Sinta-se livre para...", "Use seu senso crítico..."
- Formato de saída adaptável ao contexto

---

## Passo 1: PERSONA

### O que é

A **Persona** define o papel que o modelo deve assumir. Funciona como uma ativação da rede neural para que o modelo circule no vocabulário, terminologia e postura adequados àquela função.

### Atenção

- **Não é o componente mais importante** — não gaste muito espaço aqui
- **Use "expertise" em vez de "habilidades"** — evita confusão com skills do sistema
- **Seja direto** — uma ou duas frases bastam

### Perguntas diretrizes

1. **Qual papel profissional** o modelo deve assumir?
2. **Quais áreas de especialização** são relevantes para a tarefa?
3. **Quais competências específicas** são necessárias?

### Template base

```xml
<persona>
Você é um [PAPEL] DE ALTO NÍVEL especializado em [ÁREA 1], [ÁREA 2] e [ÁREA 3], com expertise em [COMPETÊNCIA 1], [COMPETÊNCIA 2] e [COMPETÊNCIA 3].
</persona>
```

### Exemplos do projeto

**Para análise (firac.md):**
```xml
<persona>
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM DIREITO, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e pensamento crítico.
</persona>
```

**Para escrita (meta-escrita-prompt.md):**
```xml
<persona>
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM ESCRITA JURÍDICA, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e estilo de escrita.
</persona>
```

**Para criação (meta-criacao.md):**
```xml
<persona>
Você é um ESPECIALISTA EM CRIAÇÃO DE CONTEÚDO JURÍDICO, com expertise em [área específica], combinando rigor técnico-jurídico com capacidade criativa para produzir conteúdo original e de alta qualidade.
</persona>
```

**Para pesquisa (meta-pesquisa.md):**
```xml
<persona>
Você é um assistente especializado em PESQUISA PROFUNDA, com expertise em buscar informações confiáveis e relevantes para a PESQUISA aqui fornecida.
</persona>
```

### Checklist

- [ ] Papel profissional claro?
- [ ] Áreas de especialização relevantes?
- [ ] Competências alinhadas com a tarefa?
- [ ] Texto conciso (1-2 frases)?

---

## Passo 2: OBJETIVO

### O que é

O **Objetivo** é o componente mais importante. Define não apenas a tarefa, mas também:
- **O que fazer** (tarefa principal)
- **Como processar o input** (instruções de leitura)
- **Quais capacidades ativar** (ferramentas necessárias)

### Por que é crítico

Cada modelo processa informação de formas específicas:
- Nenhum modelo "lê" 1000 páginas de uma vez na janela de contexto
- Modelos ativam ferramentas: OCR para digitalizados, chunking para documentos longos
- Quanto mais explícito o objetivo, melhor a performance

### Perguntas diretrizes

1. **Qual é a tarefa principal?** (verbo de ação + objeto)
2. **Qual é a finalidade?** (para que serve o output)
3. **Qual metodologia usar?** (como realizar a tarefa)
4. **Como processar o input?** (instruções de leitura)
5. **Quais ferramentas ativar?** (OCR, visão multimodal, busca)

### Template base

```xml
<objetivo>
Sua tarefa é [VERBO DE AÇÃO] + [OBJETO] + [QUALIFICADORES], para [FINALIDADE], visando a [OBJETIVO METODOLÓGICO].

[INSTRUÇÕES DE PROCESSAMENTO DO INPUT]
</objetivo>
```

### Instruções de leitura (obrigatório para análise e escrita)

Sempre inclua instruções explícitas sobre como processar documentos:

```
Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações contraditórias. Por isso, faça uma leitura holística para captar todos os pontos controvertidos e todas as questões jurídicas na sua profundidade e totalidade.

Para PDFs digitalizados, ative ferramentas adequadas de Reconhecimento Óptico de Caracteres (OCR), garantindo a extração completa e precisa do conteúdo textual. Se o documento apresentar layout complexo (com tabelas, gráficos ou elementos visuais relevantes), utilize análise visual multimodal para interpretar corretamente todos os componentes. Empregue os recursos necessários para compreender e extrair o texto presente em imagens ou conteúdos embutidos visualmente. Se análise ficar prejudicada pela impossibilidade de leitura de todo o documento, informe isso em sua resposta.
```

### Níveis de leitura

| Nível | Quando usar | Instrução |
|-------|-------------|-----------|
| **Seletiva** | Processos longos com foco definido | "Leia apenas [DOCUMENTOS ESPECÍFICOS]" |
| **Integral** | Análise completa do caso | "Leia TODOS os documentos na íntegra" |
| **Dirigida** | Extração de dados pontuais | "Busque especificamente [INFORMAÇÃO]" |

### Exemplos do projeto

**Para análise (firac.md):**
```xml
<objetivo>
Sua tarefa é realizar a análise abrangente, completa e estruturada do CASO JURÍDICO FORNECIDO, para fornecer subsídios técnico-jurídicos completos que auxiliem na fundamentação de decisões judiciais, visando a **realizar análise detalhada e profunda seguindo a metodologia FIRAC+ para compreensão holística do caso e identificação de todos os pontos controvertidos e questões jurídicas**.

Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações contraditórias. Por isso, faça uma leitura holística para captar todos os pontos controvertidos e todas as questões jurídicas na sua profundidade e totalidade.

Para PDFs digitalizados, ative ferramentas adequadas de Reconhecimento Óptico de Caracteres (OCR)...
</objetivo>
```

**Para criação (meta-criacao.md) — note a autonomia:**
```xml
<objetivo>
Sua tarefa é CRIAR [TIPO DE CONTEÚDO], sobre o tema [TEMA CENTRAL], para [FINALIDADE E PÚBLICO-ALVO].

Você tem autonomia e inteligência para definir a sua própria metodologia e criar o melhor formato de saída que seja adequado à solicitação.
</objetivo>
```

### Checklist

- [ ] Tarefa principal clara (verbo + objeto)?
- [ ] Finalidade explícita?
- [ ] Metodologia indicada?
- [ ] Instruções de leitura incluídas (para análise/escrita)?
- [ ] Ferramentas ativadas quando necessário (OCR, visão)?

---

## Passo 3: ESTILO

### O que é

O **Estilo** define como o modelo deve escrever e se comportar. Inclui:
- **Tom** (profissional, didático, assertivo)
- **Características de escrita** (conciso, detalhado, técnico)
- **Comportamento** (imparcialidade, anti-viés, postura)
- **Instrução de início** (onde começar a resposta)

### Perguntas diretrizes

1. **Qual tom adotar?** (profissional, autoritativo, didático, conversacional)
2. **Qual nível de tecnicidade?** (técnico puro, técnico acessível, leigo)
3. **Qual extensão?** (conciso, moderado, exaustivo)
4. **Quais comportamentos reforçar?** (imparcialidade, anti-viés)
5. **Onde começar a resposta?** (prefill)

### Template base

```xml
<estilo>
Adote um tom [ADJETIVO 1] e [ADJETIVO 2], sem [ELEMENTO A EVITAR]. Escreva de modo [CARACTERÍSTICA], mas [QUALIFICADOR], sem [DEFEITO]. [INSTRUÇÃO DE INÍCIO].

[COMPORTAMENTO: imparcialidade, anti-viés, postura analítica...]
</estilo>
```

### Instruções anti-viés (obrigatório para análise)

```
Sua ANÁLISE é objetiva, imparcial e multifacetada, captando as sutilezas e elementos para além do óbvio. Você não é influenciado por vieses de posição, pois sabe que podem existir informações valiosas em todas as partes do documento. Você dá igual peso para todos os componentes do caso, independentemente de estarem no início, no meio ou no fim do documento. Você é capaz de perceber que a análise objetiva não pode ser influenciada por fatores irrelevantes como estrutura do documento, estilo do texto, assertividade do estilo ou adjetivos usados nos documentos.
```

### Plain language (eliminar juridiquês)

Para prompts de escrita, inclua:

```
Regras de estilo:
- Use plain language. Garanta que o estilo seja livre de juridiquês, jargões, latinismos e verbosidade
- Priorize sempre a clareza e qualidade da escrita
- Corte os clichês de IA: Elimine "é importante notar", "vale ressaltar", "em suma", "é crucial" e outras introduções vazias, rodeios e frases de preenchimento
- Conecte as ideias de modo orgânico
```

### Instrução de início (prefill)

| Tipo de Prompt | Instrução de Início |
|----------------|---------------------|
| Análise FIRAC+ | "Vá direto para a resposta, começando com **DADOS DO PROCESSO**" |
| Relatório 1º grau | "Comece o texto com 'RELATÓRIO' (sem aspas)" |
| Relatório 2º grau | "Inicie com 'R E L A T Ó R I O' com espaços" |
| Sentença | "Comece com 'RELATÓRIO'" |

### Exemplos do projeto

**Para análise (firac.md):**
```xml
<estilo>
Adote um tom **PROFISSIONAL** e **AUTORITATIVO**, sem jargões desnecessários. Escreva de modo **CONCISO**, mas completo e abrangente, sem redundância. Seja econômico, usando apenas expressões necessárias para a clareza. Você escreve de modo didático e preciso, com rigor metodológico. Vá direto para a resposta, começando o texto com **DADOS DO PROCESSO**.

Sua ANÁLISE é objetiva, imparcial e multifacetada, captando as sutilezas e elementos para além do óbvio. Você não é influenciado por vieses de posição...
</estilo>
```

**Para criação (meta-criacao.md) — note a flexibilidade:**
```xml
<estilo>
Adote um tom profissional e acessível, equilibrando precisão técnica com clareza para leigos. Evite juridiquês excessivo, mas mantenha a terminologia necessária. Seja direto nas conclusões e transparente sobre incertezas.

Sinta-se livre para adaptar o estilo conforme o fluxo natural da criação, mantendo a coerência com os parâmetros estabelecidos.
</estilo>
```

### Checklist

- [ ] Tom definido?
- [ ] Características de escrita claras?
- [ ] Instruções anti-viés incluídas (para análise)?
- [ ] Plain language (para escrita)?
- [ ] Instrução de início (prefill)?

---

## Passo 4: MODELO

### O que é

O **Modelo** define a metodologia e o formato de saída. Contém:
- **Metodologia** — como pensar/processar
- **Formato de saída** — como apresentar (template)

### A técnica do Nome Único

> **Dê à sua metodologia um nome específico e original.**

**Por que isso importa:**

Quando você usa um nome genérico como "FIRAC", o modelo pode assumir que já "sabe" o que fazer — e ignorar suas instruções específicas. Ele ativa o conhecimento prévio do treinamento e pode não prestar atenção às suas customizações.

Quando você usa um nome único como "FIRAC+" ou "SUPER FIRAC", o modelo:
- Não tem pré-concepções sobre o que significa
- É forçado a ler e seguir suas instruções
- Trata sua metodologia como algo novo a aprender

**Isso é especialmente crítico em prompts agênticos**, onde os agentes têm mais liberdade de ação.

### Estratégias de nomenclatura

| Estratégia | Padrão | Exemplo do Projeto |
|------------|--------|-------------------|
| **Intensificador** | PREFIXO + Base | SUPER FIRAC (superfirac.md) |
| | Base + SUFIXO | FIRAC+ (firac.md) |
| **Ancoragem teórica** | Método (Autor) | Análise Causal (Judea Pearl) |
| | Teoria + Aplicação | Foundherentista (Susan Haack) |
| **Metáfora evocativa** | Nome expressivo | Crítica Matadora |
| **Importação externa** | Metodologia de outra área | Smart Brevity, Cross-Examination |

### Template base

```xml
<modelo>
Use a metodologia [NOME ÚNICO DA METODOLOGIA], conforme instruções a seguir:

<formato_saida>
### **[SEÇÃO 1]**
`[INSTRUÇÃO EM MAIÚSCULAS SOBRE O QUE INCLUIR]`

### **[SEÇÃO 2]**
`[INSTRUÇÃO EM MAIÚSCULAS SOBRE O QUE INCLUIR]`

### **[SEÇÃO 3]**
`[INSTRUÇÃO EM MAIÚSCULAS SOBRE O QUE INCLUIR]`
</formato_saida>
</modelo>
```

### Placeholders

Use placeholders entre backticks para indicar o que deve ser preenchido:

```
`TEXTO EM MAIÚSCULAS EXPLICANDO O QUE INSERIR`
```

**Exemplo real (meta-escrita-template.md):**
```
`NOME DA PARTE AUTORA EM MAIÚSCULAS` propôs a presente ação `TIPO DE AÇÃO JUDICIAL EM MINÚSCULAS` contra `NOME DA PARTE REQUERIDA EM MAIÚSCULAS`, alegando que `RESUMIR EM DETALHES OS FATOS ALEGADOS PELA PARTE AUTORA EM ORDEM CRONOLÓGICA, INCLUINDO DATAS, NOMES E EVENTOS`.
```

### Técnica M&M Marrom (Van Halen)

Insira diretrizes específicas e verificáveis que permitem identificar rapidamente se as regras foram cumpridas.

**Exemplos de sinalizadores:**

```markdown
# Emojis como verificadores
- "Use ✅ para requisitos presentes e ❌ para ausentes"

# Palavras-chave obrigatórias
- "Sempre inicie a conclusão com 'Em síntese'"

# Estruturas fixas
- "Cada requisito deve ter: Nome | Status | Fundamentação"
```

### Exemplos do projeto

**Para análise (firac.md):**
```xml
<modelo>
Use a metodologia e o formato de análise **FIRAC+**, conforme instruções a seguir:

<formato_saida>
### **DADOS DO PROCESSO**
`TRIBUNAL - TIPO DE RECURSO OU AÇÃO - NÚMERO DO PROCESSO - RELATOR - DATA DE JULGAMENTO - NOME DAS PARTES - NOME DOS ADVOGADOS POR PARTES`

### **FATOS**
`ESCREVA UMA LISTA NUMERADA com todos os fatos, em ordem cronológica, com PROFUNDIDADE, DETALHES e MINÚCIAS, descrevendo os eventos, as datas e os nomes para a compreensão holística do caso. Esse é o componente mais importante da análise. Então extraia todos os fatos em detalhes para a máxima compreensão`

### **PROBLEMA JURÍDICO**
#### **QUESTÃO CENTRAL**
`ESTABELEÇA COM PROFUNDIDADE a questão central, enriquecendo a pergunta para respostas mais profundas`

#### **PONTOS CONTROVERTIDOS**
`ESCREVA UMA LISTA NUMERADA delimitando os pontos controvertidos com base nas nuances do caso`

### **DIREITO APLICÁVEL**
`LISTE as normas relevantes, referenciadas nos documentos, de modo sumarizado`

### **ANÁLISE E APLICAÇÃO**
#### **ARGUMENTOS E PROVAS DO AUTOR**
`ESCREVA UMA LISTA NUMERADA com todos os argumentos e provas do autor COM INFERÊNCIA LÓGICA`

#### **ARGUMENTOS E PROVAS DO RÉU**
`ESCREVA UMA LISTA NUMERADA com todos os argumentos e provas do réu COM INFERÊNCIA LÓGICA`

### **CONCLUSÃO**
`INFORME se o caso já possui decisão proferida. Em caso AFIRMATIVO, DESCREVA detalhadamente a solução adotada, indicando a RATIO DECIDENDI e as JUSTIFICATIVAS utilizadas pelo julgador. Quando NÃO houver decisão estabelecida, mantenha-se IMPARCIAL e apenas sugira possíveis direcionamentos técnico-jurídicos, apresentando os prós e contras de cada alternativa decisória em sua melhor luz`
</formato_saida>
</modelo>
```

**Para criação (meta-criacao.md) — note a flexibilidade:**
```xml
<modelo>
**ESTRUTURA SUGERIDA:**

`Proponha uma estrutura flexível, não rígida, que sirva como guia:
- Para pareceres: contexto → análise → conclusão
- Para material didático: introdução → conceitos → exemplos → exercícios
- Adapte conforme o tipo de conteúdo solicitado`

<formato_saida>
`Determine o formato de saída de acordo com a natureza do conteúdo.

Fique à vontade para propor formatos híbridos ou inovadores quando adequado.`
</formato_saida>
</modelo>
```

### Checklist

- [ ] Nome único para a metodologia?
- [ ] Metodologia clara (passos ou estrutura)?
- [ ] Formato de saída estruturado?
- [ ] Placeholders entre backticks?
- [ ] Sinalizadores M&M Marrom (quando aplicável)?

---

## Passo 5: ADICIONAIS

### O que é

Os **Adicionais** consolidam:
- **Guardrails** — restrições e proibições
- **Critérios de qualidade** — lista verificável
- **Reforços de instrução** — regras críticas repetidas
- **Regras específicas** — adaptações para o contexto

### Guardrails obrigatórios (análise e escrita)

**Prevenção de alucinação:**
```
Sua análise deve se basear exclusivamente nos documentos fornecidos. **USE EXCLUSIVAMENTE** as evidências, fatos e informações contidos no documento fornecido. **PROIBIÇÃO ABSOLUTA** de incorporar elementos probatórios ou factuais de fontes externas. SOMENTE USE OS ELEMENTOS PROBATÓRIOS DO CASO FORNECIDO. **JAMAIS ACRESCENTE FATOS, PRECEDENTES OU NORMAS QUE NÃO ESTEJAM NO DOCUMENTO ANEXADO PELO USUÁRIO.**
```

**Regras para citações:**

| Tipo | Regra |
|------|-------|
| Fatos | Citar apenas do documento, com riqueza de detalhes |
| Datas/Nomes/IDs | Usar APENAS os existentes no documento, NUNCA inventar |
| Precedentes | Citar de forma INDIRETA, apenas se consultados ou no documento |
| Legislação | Referenciar apenas se mencionada no documento |

**Proibições absolutas:**
- NUNCA incluir instrução para citar precedentes específicos
- NUNCA incluir instrução para citar doutrina
- NUNCA incluir instrução para citar legislação não referenciada

### Critérios de qualidade padrão

```
**Critérios de qualidade:**
1. **Completude**: Analise INTEGRALMENTE todos os documentos fornecidos
2. **Imparcialidade**: Não demonstre preferência por qualquer das partes
3. **Profundidade**: Vá além da superfície, captando nuances e sutilezas
4. **Sistematicidade**: Siga rigorosamente a estrutura estabelecida
5. **Precisão**: Use terminologia jurídica adequada e precisa
6. **Objetividade**: Baseie-se exclusivamente nos elementos constantes dos documentos
7. **Integridade**: Cite dados e informações estritamente referenciados no caso em análise
8. **Detalhamento**: Ao detalhar os FATOS, assegure-se de prover uma riqueza de detalhes
```

### Reforços de instrução

Para regras críticas, use repetição com ênfase:

```
IMPORTANTE: [Regra crítica]
ATENÇÃO: [Regra crítica]
NUNCA: [Proibição absoluta]
SEMPRE: [Obrigação absoluta]
```

### Flexibilidade (para criação e pesquisa)

```
**Regras de criação:**
- Você é livre para experimentar abordagens não convencionais quando isso agregar valor ao conteúdo
- Tem autorização para fazer conexões interdisciplinares e incluir insights relevantes
- Use seu senso crítico para equilibrar criatividade e rigor técnico-jurídico
- Adapte a extensão e profundidade conforme a complexidade do tema
```

### Exemplos do projeto

**Para análise (firac.md):**
```xml
<adicionais>
Sua análise deve se basear exclusivamente nos documentos fornecidos. **USE EXCLUSIVAMENTE** as evidências, fatos e informações contidos no documento fornecido. **PROIBIÇÃO ABSOLUTA** de incorporar elementos probatórios ou factuais de fontes externas. SOMENTE USE OS ELEMENTOS PROBATÓRIOS DO CASO FORNECIDO. **JAMAIS ACRESCENTE FATOS, PRECEDENTES OU NORMAS QUE NÃO ESTEJAM NO DOCUMENTO ANEXADO PELO USUÁRIO.**

**Critérios de qualidade:**
1. **Completude**: Analise INTEGRALMENTE todos os documentos fornecidos
2. **Imparcialidade**: Não demonstre preferência por qualquer das partes
3. **Profundidade**: Vá além da superfície, captando nuances e sutilezas
4. **Sistematicidade**: Siga rigorosamente a estrutura FIRAC+ estabelecida
5. **Precisão**: Use terminologia jurídica adequada e precisa
6. **Objetividade**: Baseie-se exclusivamente nos elementos constantes dos documentos
7. **Integridade**: Cite dados e informações estritamente referenciados no caso em análise
8. **Detalhamento**: Ao detalhar os FATOS, assegure-se de prover uma riqueza de detalhes. A QUESTÃO JURÍDICA deve ser claramente delineada como uma questão principal, seguida de pontos controvertidos
</adicionais>
```

**Para escrita (meta-escrita-template.md):**
```xml
<adicionais>
**Regras de elaboração:**
1. Adapte e inclua critérios e diretrizes mais precisos para facilitar a realização da tarefa
2. Faça o template de modo a conectar as ideias de modo orgânico
3. Observe estritamente os delimitadores e placeholders do modelo
4. Sempre insira sua resposta em um **BLOCO DE CÓDIGO**

**PROIBIÇÕES:**
- **NUNCA INCLUA** no template instrução para inserir precedentes, doutrina ou legislação
- O template não aceita esse tipo de instrução
</adicionais>
```

### Checklist

- [ ] Guardrails contra alucinação?
- [ ] Critérios de qualidade listados?
- [ ] Proibições claras?
- [ ] Reforços de instrução para regras críticas?
- [ ] Flexibilidade adequada ao tipo de prompt?

---

## Metaprompts

### O que são

**Metaprompts** são prompts que geram outros prompts. São prompts de segundo nível que analisam uma solicitação e produzem como saída um novo prompt estruturado.

### Tipos de metaprompts

| Tipo | Descrição |
|------|-----------|
| **Independente** | Gera prompts sozinho (meta-analise.md) |
| **Orquestrador** | Coordena subagentes (meta-escrita.md) |
| **Subagente** | Executa parte de um fluxo (meta-escrita-template.md) |

### Estrutura de um metaprompt

Um metaprompt contém:

1. **`<prompt_template>`** — Template base para o prompt gerado
2. **`<exemplo>`** — Exemplo completo de prompt gerado
3. **Regras de elaboração** — Como adaptar o template
4. **Formato de início obrigatório** — Como o prompt gerado deve começar

### Exemplo: meta-analise.md

```xml
<modelo>
Use como base de estilo e estrutura o TEMPLATE abaixo:

<prompt_template>
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM DIREITO, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e pensamento crítico.

Sua tarefa é realizar a análise abrangente, completa e estruturada do CASO JURÍDICO FORNECIDO, para fornecer subsídios técnico-jurídicos completos que auxiliem na fundamentação de decisões judiciais, visando a `DEFINIR A TAREFA ESPECÍFICA SOLICITADA PELO USUÁRIO`.

[...]
</prompt_template>

<exemplo>
[PROMPT COMPLETO DE EXEMPLO]
</exemplo>
</modelo>

<adicionais>
**Regras de elaboração:**
1. Use como base tudo o que estiver na tag `<prompt_template>`
2. Inclua critérios de análise mais precisos para facilitar a realização da tarefa
3. Lembre-se que o modelo que irá executar o prompt gerado não tem conhecimento de legislação nem de precedentes. Qualquer critério deverá ser claro, direto e explícito
4. Toda instrução fornecida dentro do prompt a ser elaborado deve ser desenvolvida de forma clara e explicativa
5. Insira TODO O PROMPT em um **BLOCO DE CÓDIGO**

**Formato de início obrigatório:**
```
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM DIREITO, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e pensamento crítico.
Sua tarefa é realizar a análise abrangente, completa e estruturada do CASO JURÍDICO FORNECIDO, para fornecer subsídios técnico-jurídicos completos que auxiliem na fundamentação de decisões judiciais, visando a...
```
</adicionais>
```

### Saída de metaprompts

Todo prompt gerado por um metaprompt deve ser entregue em **BLOCO DE CÓDIGO**:

```markdown
[prompt gerado aqui]
```

---

## YAML Frontmatter

Todo prompt deve incluir um cabeçalho YAML para documentação:

```yaml
---
name: identificador-unico-em-kebab-case
description: Descrição concisa do que o prompt faz (1-2 frases)
tipo: analise | escrita | criacao | pesquisa | metaprompt
uso: Instruções práticas de como usar o prompt
---
```

### Exemplo

```yaml
---
name: firac-plus
description: Prompt de análise jurídica completa usando metodologia FIRAC+. Gera relatório estruturado com dados do processo, fatos, questão central, direito aplicável e conclusão.
tipo: analise
uso: Anexe o documento processual (PDF ou texto) e o prompt irá gerar análise estruturada seguindo FIRAC+.
---
```

---

## Checklist Final de Validação

### Para TODOS os prompts:

- [ ] Segue estrutura P.O.E.M.A. completa?
- [ ] Tem YAML frontmatter?
- [ ] Nome único para a metodologia (não genérico)?
- [ ] Tem instrução de início (prefill)?
- [ ] Está livre de clichês de IA?
- [ ] Está em plain language?

### Para prompts de ANÁLISE e ESCRITA (rígidos):

- [ ] Tem instruções de leitura profunda de documentos?
- [ ] Tem guardrails contra alucinação?
- [ ] Tem instruções anti-viés?
- [ ] Tem formato de saída estruturado/template?
- [ ] Tem critérios de qualidade listados?
- [ ] Proíbe citação direta de precedentes/doutrina?

### Para prompts de PESQUISA e CRIAÇÃO (flexíveis):

- [ ] Concede autonomia metodológica ao modelo?
- [ ] Permite adaptação do formato de saída?
- [ ] Inclui instruções de flexibilidade ("sinta-se livre", "use seu senso crítico")?
- [ ] Autoriza expansão de escopo quando relevante?
- [ ] Encoraja insights e conexões interdisciplinares?

### Para METAPROMPTS:

- [ ] Tem `<prompt_template>` com template base?
- [ ] Tem `<exemplo>` com prompt completo?
- [ ] Tem regras de elaboração?
- [ ] Tem formato de início obrigatório?
- [ ] Instrui entrega em bloco de código?

---

## Referência Rápida

```
┌─────────────────────────────────────────────────────────────┐
│ P.O.E.M.A. EM UMA LINHA                                     │
├─────────────────────────────────────────────────────────────┤
│ PERSONA   → Quem (papel + expertise)                        │
│ OBJETIVO  → O quê (tarefa + leitura + ferramentas)          │
│ ESTILO    → Como comunica (tom + anti-viés + prefill)       │
│ MODELO    → Como pensa e entrega (metodologia + template)   │
│ ADICIONAIS→ Proteções (guardrails + qualidade + reforços)   │
└─────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────┐
│ TIPOS DE PROMPT                                             │
├───────────────┬─────────────────────────────────────────────┤
│ Análise       │ Rígido. Fidelidade total ao documento.      │
│ Escrita       │ Rígido. Template pré-estruturado.           │
│ Criação       │ Flexível. Autonomia criativa.               │
│ Pesquisa      │ Flexível. Múltiplas fontes.                 │
│ Metaprompt    │ Gera outros prompts.                        │
└───────────────┴─────────────────────────────────────────────┘
```

---

*Framework P.O.E.M.A. — Versão 2.0*
*Material didático para engenharia de prompts jurídicos*
