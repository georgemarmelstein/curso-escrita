---
name: prompt-engenheiro-juridico
description: Skill para criação, validação e aprimoramento de prompts jurídicos seguindo o framework P.O.E.M.A. e as melhores práticas de prompt engineering. Deve ser usada quando o usuário solicitar criação de novos prompts, padronização de prompts existentes, ou crítica/aprimoramento de prompts jurídicos.
---

# Prompt Engenheiro Jurídico

Skill para elaboração de prompts jurídicos de alta qualidade, seguindo o framework P.O.E.M.A. e técnicas universais de prompt engineering.

## Framework P.O.E.M.A.

Estrutura padrão para todos os prompts jurídicos:

```
<persona>    → Quem o modelo deve ser (papel, expertise, especialização)
<objetivo>   → O que fazer + como processar o input
<estilo>     → Como escrever + como se comportar
<modelo>     → Formato/método de output (pode conter <formato_saida> aninhado)
<adicionais> → Restrições + critérios de qualidade + reforços
```

### Componentes Detalhados

#### 1. `<persona>`
Define o papel e expertise do modelo.

**Padrão:**
```
Você é um [ESPECIALIDADE] DE ALTO NÍVEL especializado em [ÁREA 1], [ÁREA 2] e [ÁREA 3], com expertise em [COMPETÊNCIA 1], [COMPETÊNCIA 2] e [COMPETÊNCIA 3].
```

#### 2. `<objetivo>`
Define a tarefa, finalidade e instruções de processamento do input.

**Estrutura:**
- Parágrafo 1: Tarefa principal + finalidade + metodologia
- Parágrafo 2+: Instruções de processamento do input (documentos, OCR, contexto longo)

**Padrão:**
```
Sua tarefa é [VERBO DE AÇÃO] + [OBJETO] + [QUALIFICADORES], para [FINALIDADE], visando a [OBJETIVO METODOLÓGICO].

[Instruções específicas de processamento do input...]
```

#### 3. `<estilo>`
Define tom, características de escrita e comportamento.

**Estrutura:**
- Parágrafo 1: Tom e características de escrita
- Parágrafo 2: Comportamento e postura (imparcialidade, anti-viés, etc.)

**Padrão:**
```
Adote um tom [ADJETIVO 1] e [ADJETIVO 2], sem [ELEMENTO A EVITAR]. Escreva de modo [CARACTERÍSTICA], mas [QUALIFICADOR], sem [DEFEITO]. [INSTRUÇÃO DE INÍCIO].

[Comportamento: imparcialidade, anti-viés, postura analítica...]
```

#### 4. `<modelo>`
Define o método/metodologia e formato de saída.

**Estrutura:**
```xml
<modelo>
[Instrução sobre metodologia a seguir]

<formato_saida>
[Template estruturado com headers Markdown]
</formato_saida>
</modelo>
```

#### 5. `<adicionais>`
Consolida restrições (guardrails) e critérios de qualidade.

**Estrutura:**
- Parágrafo 1: Restrições e proibições (guardrails)
- Lista numerada: Critérios de qualidade

**Padrão para restrições:**
```
[INSTRUÇÃO POSITIVA] exclusivamente [ESCOPO PERMITIDO]. **PROIBIÇÃO ABSOLUTA** de [COMPORTAMENTO INDESEJADO]. [REFORÇO] [APENAS/SOMENTE] [ESCOPO REITERADO].
```

---

## Tipos de Prompt

### 1. Prompts de Análise
**Foco:** Qualidade analítica, interpretação, extração, compreensão de contextos longos.

**Características:**
- `<persona>`: Expertise analítica e interpretativa
- `<objetivo>`: Ênfase em leitura holística e processamento de documentos
- `<estilo>`: Tom profissional, imparcialidade, anti-viés
- `<modelo>`: Metodologia estruturada (ex: FIRAC+)
- `<adicionais>`: Guardrails fortes contra alucinação e adição de material externo

**Não requer exemplos.**

### 2. Prompts de Escrita
**Foco:** Controle de estilo, formato correto, técnica de prompt pré-estruturado.

**Características:**
- `<persona>`: Expertise em redação e estilo específico
- `<objetivo>`: Produção de documento com especificações precisas
- `<estilo>`: Diretrizes detalhadas de tom, vocabulário, estrutura
- `<modelo>`: Template pré-estruturado do documento
- `<adicionais>`: Critérios de estilo e conformidade

**Pode incluir exemplos (com guardrails para não contaminar).**

### 3. Prompts de Pesquisa
**Foco:** Pesquisa web, bases de jurisprudência, fontes externas.

**Características:**
- `<persona>`: Expertise em pesquisa e curadoria de fontes
- `<objetivo>`: Busca, síntese e organização de informações
- `<estilo>`: Tom informativo, citação de fontes
- `<modelo>`: Formato de apresentação de resultados
- `<adicionais>`: Critérios de relevância e confiabilidade de fontes

**Não requer exemplos.**

### 4. Prompts de Criação
**Foco:** Liberdade criativa, geração de conteúdo original.

**Características:**
- `<persona>`: Expertise criativa na área específica
- `<objetivo>`: Criação com parâmetros mais abertos
- `<estilo>`: Diretrizes flexíveis
- `<modelo>`: Estrutura sugerida (não rígida)
- `<adicionais>`: Critérios de originalidade e adequação

**Pode incluir exemplos para ancorar estilo.**

### 5. Metaprompts
**Foco:** Gerar outros prompts seguindo o framework P.O.E.M.A.

**Características:**
- `<persona>`: Engenheiro de prompts sênior
- `<objetivo>`: Criar prompt do tipo especificado
- `<estilo>`: Precisão técnica
- `<modelo>`: Framework P.O.E.M.A. como template
- `<adicionais>`: Critérios de qualidade de prompts

---

## Técnicas Aplicadas (Base Anthropic)

### Hierarquia de Efetividade
1. **Be clear and direct** - Instruções claras e diretas
2. **Use examples** - Apenas para escrita/criação
3. **Chain of thought** - Implícito em análises complexas
4. **XML tags** - Framework P.O.E.M.A.
5. **Role prompting** - Seção `<persona>`
6. **Prefill response** - Em `<estilo>` ("começando com...")
7. **Long context tips** - Em `<objetivo>` (instruções de input)

### Tags XML em Português
- Nomes de tags devem ser significativos e consistentes
- Idioma da tag é irrelevante; consistência é essencial
- Tags em português mantêm o prompt 100% no idioma

### Aninhamento
Usar tags aninhadas quando necessário:
```xml
<modelo>
  <formato_saida>
    [template]
  </formato_saida>
</modelo>
```

---

## Boas Práticas Obrigatórias

### 1. Qualidade na Leitura de Documentos

**Sempre incluir em `<objetivo>` para prompts que processam documentos:**

```
Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações
contraditórias. Por isso, faça uma leitura holística para captar todos os pontos
controvertidos e todas as questões na sua profundidade e totalidade.

Para PDFs digitalizados, ative ferramentas adequadas de Reconhecimento Óptico de
Caracteres (OCR), garantindo a extração completa e precisa do conteúdo textual.
Se o documento apresentar layout complexo (com tabelas, gráficos ou elementos
visuais relevantes), utilize análise visual multimodal para interpretar
corretamente todos os componentes. Se a análise ficar prejudicada pela
impossibilidade de leitura de todo o documento, informe isso em sua resposta.
```

**Padrões de leitura:**
- Leitura integral e profunda (não superficial)
- Alerta sobre possíveis contradições entre documentos
- Ativação de OCR para PDFs digitalizados
- Uso de Vision/multimodal para layouts complexos
- Transparência quando houver limitações de leitura

---

### 2. Qualidade na Estrutura de Saída

**Para Prompts de Análise:**
- Usar metodologias estruturadas (FIRAC+, relatório técnico, etc.)
- Chain of thought organizado em seções lógicas
- Formato de saída com headers claros e hierárquicos
- Listas numeradas para fatos, argumentos e pontos controvertidos

**Estrutura recomendada para análise:**
```
DADOS → FATOS → PROBLEMA → DIREITO → ANÁLISE → CONCLUSÃO
```

**Para Prompts de Escrita:**
- Template pré-estruturado com placeholders entre backticks
- Texto fixo escrito diretamente
- Texto variável em `INSTRUÇÕES EM MAIÚSCULAS`
- Conexão orgânica entre ideias

---

### 3. Prevenção de Alucinação

**Guardrails obrigatórios em `<adicionais>`:**

```
Sua análise deve se basear exclusivamente nos documentos fornecidos.
**USE EXCLUSIVAMENTE** as evidências, fatos e informações contidos no documento.
**PROIBIÇÃO ABSOLUTA** de incorporar elementos probatórios ou factuais de fontes externas.
**JAMAIS ACRESCENTE FATOS, PRECEDENTES OU NORMAS QUE NÃO ESTEJAM NO DOCUMENTO.**
```

**Regras para citações:**
| Tipo | Regra |
|------|-------|
| Fatos | Citar apenas do documento, com riqueza de detalhes |
| Datas/Nomes/IDs | Usar APENAS os existentes no documento, NUNCA inventar |
| Precedentes | Citar de forma INDIRETA (sem aspas), apenas se consultados na internet ou no documento |
| Legislação | Referenciar apenas se mencionada no documento |
| Fontes externas | Sempre mencionar a fonte quando usar busca web |

**NUNCA incluir no prompt:**
- Instrução para citar precedentes específicos
- Instrução para citar doutrina
- Instrução para citar legislação não referenciada no documento

---

### 4. Combate a Vieses

**Sempre incluir em `<estilo>` para prompts de análise:**

```
Sua ANÁLISE é objetiva, imparcial e multifacetada, captando as sutilezas e
elementos para além do óbvio. Você não é influenciado por vieses de posição,
pois sabe que podem existir informações valiosas em todas as partes do documento.
Você dá igual peso para todos os componentes do caso, independentemente de estarem
no início, no meio ou no fim do documento. Você é capaz de perceber que a análise
objetiva não pode ser influenciada por fatores irrelevantes como estrutura do
documento, estilo do texto, assertividade do estilo ou adjetivos usados nos documentos.
```

**Vieses a combater:**
- **Position bias**: Dar mais peso ao início/fim do documento
- **Style bias**: Ser influenciado por estilo assertivo ou adjetivos
- **Confirmation bias**: Buscar apenas evidências que confirmam uma tese
- **Authority bias**: Dar mais peso a argumentos de "autoridades"

---

### 5. Qualidade de Estilo e Redação

**Princípios de plain language:**
- Livre de juridiquês, jargões e latinismos
- Priorizar clareza sobre formalismo
- Vocabulário acessível sem perder precisão técnica

**Eliminar clichês de IA:**
- ❌ "É importante notar..."
- ❌ "Vale ressaltar..."
- ❌ "Em suma..."
- ❌ "É crucial..."
- ❌ "Não obstante..."
- ❌ Introduções vazias e rodeios

**Tom recomendado:**
```
Adote um tom **PROFISSIONAL** e **AUTORITATIVO**, sem jargões desnecessários.
Escreva de modo **CONCISO**, mas completo e abrangente, sem redundância.
Seja econômico, usando apenas expressões necessárias para a clareza.
```

---

### 6. Disclaimers e Transparência

**Para análises que subsidiam decisões:**
```
⚠️ Esta análise representa uma avaliação preliminar baseada nas informações
disponíveis e nas instruções fornecidas. Não deve ser considerada uma verdade
absoluta ou definitiva. Podem existir: a) Limitações na compreensão completa
do contexto jurídico; b) Possíveis vieses interpretativos; c) Influências
sutis das instruções de análise. Use com prudência: é um mero instrumento
de apoio decisório. ⚠️
```

**Quando usar disclaimers:**
- Análises para subsídio decisório
- Sugestões de encaminhamento
- Conclusões que envolvem juízo de valor

---

### 7. Critérios de Qualidade Padrão

**Lista padrão para `<adicionais>` em prompts de análise:**

```
1. **Completude**: Analise INTEGRALMENTE todos os documentos fornecidos
2. **Imparcialidade**: Não demonstre preferência por qualquer das partes
3. **Profundidade**: Vá além da superfície, captando nuances e sutilezas
4. **Sistematicidade**: Siga rigorosamente a estrutura estabelecida
5. **Precisão**: Use terminologia jurídica adequada e precisa
6. **Objetividade**: Baseie-se exclusivamente nos elementos dos documentos
7. **Integridade**: Cite dados estritamente referenciados no caso
8. **Detalhamento**: Prover riqueza de detalhes em fatos e argumentos
```

---

### 8. Instruções de Início (Prefill)

**Sempre especificar onde começar a resposta:**

| Tipo de Prompt | Instrução de Início |
|----------------|---------------------|
| Análise FIRAC+ | "Vá direto para a resposta, começando com **DADOS DO PROCESSO**" |
| Relatório | "Comece o texto com 'RELATÓRIO' (sem aspas)" |
| Relatório 2º grau | "Inicie com 'R E L A T Ó R I O' com espaços" |
| Sentença | "Comece com 'RELATÓRIO'" |

**Benefícios:**
- Evita preâmbulos desnecessários
- Padroniza o formato de saída
- Facilita extração programática

---

### 9. Formato de Saída em Metaprompts

**Todo prompt gerado deve ser entregue em BLOCO DE CÓDIGO:**

```markdown
[prompt gerado aqui]
```

**Benefícios:**
- Facilita cópia
- Preserva formatação
- Distingue prompt de explicações

---

### 10. Flexibilidade e Autonomia Criativa (Pesquisa e Criação)

**Aplicável a:** Prompts de Pesquisa e Prompts de Criação

Diferentemente dos prompts de análise e escrita (que exigem rigor e fidelidade), os prompts de pesquisa e criação devem **conceder autonomia ao modelo** para adaptar metodologia e formato.

**Padrões de flexibilidade para `<objetivo>`:**
```
Você tem autonomia e inteligência para definir a sua própria metodologia e
criar o melhor formato de saída que seja adequado à solicitação do USUÁRIO.
```

**Padrões de flexibilidade para `<modelo>`:**
```
- Conceda autonomia para reinterpretação criativa quando necessário,
  inclusive para expandir o escopo ou garantir profundidade
- Fique à vontade para [AÇÃO ESPECÍFICA] quando apropriado
- Use seu senso crítico para definir [PARÂMETRO] com base na natureza da solicitação
```

**Padrões de flexibilidade para `<adicionais>`:**
```
- Você é livre para experimentar abordagens não convencionais
- Tem autorização para buscar perspectivas e insights para além dessas regras
- Tenha liberdade para incluir insights adicionais relevantes
- Tenha liberdade para conexões interdisciplinares reveladoras
```

**Quando usar flexibilidade:**
| Tipo de Prompt | Nível de Flexibilidade | Justificativa |
|----------------|------------------------|---------------|
| Análise | ❌ Baixo | Fidelidade ao documento é crítica |
| Escrita | ❌ Baixo | Template deve ser seguido rigorosamente |
| Pesquisa | ✅ Alto | Fontes e metodologia variam por tópico |
| Criação | ✅ Alto | Criatividade é o objetivo |

**Elementos flexíveis em pesquisa:**
- Estratégia de busca (acadêmica vs prática)
- Delimitação temporal (conforme natureza do tema)
- Formato de saída (conforme perfil do usuário)
- Idioma de raciocínio vs idioma de entrega
- Profundidade e escopo

**Exemplo de instrução flexível:**
```
Use seu senso crítico para definir uma delimitação temporal com base na
natureza da solicitação e do tópico. Se o tema for tecnologia emergente,
priorize fontes posteriores a 2022. Se o tema for mais consolidado,
foque nas fontes a partir de 2010. Fique à vontade para estender o
marco temporal sempre que necessário.
```

**Contraste com prompts rígidos (análise/escrita):**
| Aspecto | Prompt Rígido | Prompt Flexível |
|---------|---------------|-----------------|
| Metodologia | Definida no prompt | Definida pelo modelo |
| Formato | Template fixo | Adaptável ao contexto |
| Escopo | Delimitado | Expansível |
| Fontes | Documento fornecido | Múltiplas fontes |
| Criatividade | Restrita | Encorajada |

---

## Checklist de Validação de Prompts

### Para TODOS os prompts:
- [ ] Segue estrutura P.O.E.M.A. completa?
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
- [ ] Inclui instruções de flexibilidade ("fique à vontade", "use seu senso crítico")?
- [ ] Autoriza expansão de escopo quando relevante?
- [ ] Encoraja insights e conexões interdisciplinares?

---

## YAML Frontmatter para Prompts

Todo prompt e metaprompt deve incluir um **YAML frontmatter** no início do arquivo para documentação e catalogação.

### Estrutura Base

```yaml
---
name: identificador-unico-sem-espacos
description: Descrição concisa do que o prompt faz (1-2 frases)
tipo: [tipo do prompt]
uso: Instruções práticas de como usar o prompt
---
```

### Campos Obrigatórios

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `name` | Identificador único (kebab-case) | `firac-plus`, `meta-analise` |
| `description` | O que o prompt faz (1-2 frases) | "Prompt de análise jurídica usando metodologia FIRAC+" |
| `tipo` | Categoria do prompt | Ver tabela abaixo |
| `uso` | Como usar na prática | "Anexe o documento e o prompt irá..." |

### Tipos Disponíveis

| Tipo | Quando Usar |
|------|-------------|
| `analise` | Prompts de análise de documentos |
| `escrita` | Prompts de escrita/redação jurídica |
| `pesquisa` | Prompts de pesquisa em fontes externas |
| `criacao` | Prompts de criação livre |
| `metaprompt` | Metaprompts independentes |
| `metaprompt-orquestrador` | Metaprompts que coordenam subagentes |
| `metaprompt-subagente` | Metaprompts subordinados a um orquestrador |

### Campos Opcionais

```yaml
---
# Para metaprompts-subagente:
orquestrador: meta-escrita.md

# Para prompts com dependências:
dependencia: Requer template gerado por meta-escrita-template.md

# Para metaprompts-orquestrador:
subagentes:
  - meta-escrita-template.md
  - meta-escrita-prompt.md

# Para uso multilinhas:
uso: |
  Linha 1 da instrução
  Linha 2 da instrução
  Linha 3 da instrução
---
```

### Exemplos Completos

**Prompt simples (análise):**
```yaml
---
name: firac-plus
description: Prompt de análise jurídica completa usando metodologia FIRAC+. Gera relatório estruturado com dados do processo, fatos, questão central, direito aplicável e conclusão.
tipo: analise
uso: Anexe o documento processual (PDF ou texto) e o prompt irá gerar análise estruturada seguindo FIRAC+.
---
```

**Metaprompt orquestrador:**
```yaml
---
name: meta-escrita
description: Metaprompt orquestrador para criação de prompts de escrita jurídica. Coordena fluxo de duas etapas (template → prompt).
tipo: metaprompt-orquestrador
uso: |
  Fluxo 0: Descreva a peça desejada → busca modelos → gera template → gera prompt
  Fluxo 1: Anexe modelo de referência → gera template → gera prompt
  Fluxo 2: Forneça template pronto → gera apenas prompt
  Fluxo 3: Solicite apenas template → gera template sem prompt
subagentes:
  - meta-escrita-template.md
  - meta-escrita-prompt.md
---
```

**Metaprompt subagente:**
```yaml
---
name: meta-escrita-template
description: Metaprompt para gerar templates pré-estruturados de peças jurídicas (Etapa 1 do fluxo de escrita).
tipo: metaprompt-subagente
orquestrador: meta-escrita.md
uso: Anexe um modelo de peça jurídica ou descreva a estrutura desejada.
---
```

### Boas Práticas

1. **name**: Use kebab-case, sem acentos, descritivo
2. **description**: Comece com "Prompt de..." ou "Metaprompt para..."
3. **uso**: Seja prático - diga o que o usuário deve fazer e o que vai receber
4. **tipo**: Use exatamente um dos tipos da tabela

---

## Referências

Consultar arquivos em `references/` para detalhes:
- `tecnicas-anthropic.md` - Técnicas oficiais consolidadas
- `analise-prompt-referencia.md` - Análise do prompt FIRAC+ original
