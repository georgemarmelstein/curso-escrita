# 2.2 Tags XML como Delimitadores

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Ferramentas Básicas
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Usar tags XML para delimitar seções do prompt
- Separar instruções de conteúdo de forma inequívoca
- Criar estruturas hierárquicas com tags aninhadas
- Evitar confusão entre instrução e dado

---

## Por que Importa

**Para profissionais do Direito:**
- Tags XML separam claramente o texto do documento da instrução
- Evita que o modelo confunda citação com comando
- Permite estruturas complexas de análise

**Princípio:**
> Tags XML criam fronteiras claras entre instrução e conteúdo.

---

## Base Conceitual

### O que são Tags XML?

Tags XML são marcadores que delimitam início e fim de uma seção.

```xml
<tag>conteúdo</tag>
```

### Sintaxe Básica

```xml
TAG DE ABERTURA     TAG DE FECHAMENTO
    ↓                     ↓
<documento>         </documento>
    └─────────────────────┘
           CONTEÚDO
```

### Tags Comuns em Prompts

| Tag | Uso |
|-----|-----|
| `<documento>` | Texto a ser analisado |
| `<instrucoes>` | Comandos ao modelo |
| `<contexto>` | Informações de fundo |
| `<exemplo>` | Demonstração de formato |
| `<output>` | Formato de saída esperado |
| `<restricoes>` | Limitações e proibições |

### Por que Tags Funcionam Melhor que Aspas?

```
PROBLEMA COM ASPAS:
"Analise o texto: 'João disse: "Eu não concordo"'"
                         ↑ Confuso! Onde termina o quê?

SOLUÇÃO COM TAGS:
<instrucao>Analise o texto</instrucao>
<documento>João disse: "Eu não concordo"</documento>
                         ↑ Claro! Aspas são parte do conteúdo
```

### Exemplo Completo

**Sem tags (ambíguo):**
```
Analise o seguinte contrato e identifique cláusulas abusivas:
O contrato estabelece que o locatário deve pagar multa de 50%
em caso de rescisão. Esta cláusula é válida?
```
*Problema: onde termina o contrato e começa a pergunta?*

**Com tags (inequívoco):**
```xml
<instrucao>
Analise o contrato abaixo e identifique cláusulas abusivas.
</instrucao>

<contrato>
O contrato estabelece que o locatário deve pagar multa de 50%
em caso de rescisão.
</contrato>

<pergunta>
Esta cláusula é válida?
</pergunta>
```

### Tags Aninhadas

```xml
<analise>
  <documento>
    <peticao_inicial>
      [texto da petição]
    </peticao_inicial>
    <contestacao>
      [texto da contestação]
    </contestacao>
  </documento>

  <tarefa>
    Compare os argumentos de ambas as peças.
  </tarefa>
</analise>
```

---

## Exercício Prático

### Tarefa
Estruturar um prompt caótico usando tags XML.

### Prompt Original (caótico)
```
Preciso que você analise esta petição inicial onde o autor João
Silva pede indenização de R$ 50.000 contra a empresa XYZ por danos
morais. O autor alega que foi humilhado publicamente pelo gerente
da loja. A empresa contestou dizendo que o autor é que foi
agressivo. Quero que você identifique os pontos fortes e fracos
de cada lado e sugira uma decisão fundamentada.
```

### Passo a Passo

**1. Identificar elementos:**
- Contexto: partes e valor
- Documento 1: alegações do autor
- Documento 2: defesa da empresa
- Tarefas: análise de ambos + decisão

**2. Estruturar com tags:**

```xml
<contexto>
  <partes>
    <autor>João Silva</autor>
    <reu>Empresa XYZ</reu>
  </partes>
  <valor>R$ 50.000,00</valor>
  <tipo>Indenização por danos morais</tipo>
</contexto>

<alegacoes_autor>
Foi humilhado publicamente pelo gerente da loja.
</alegacoes_autor>

<defesa_reu>
O autor é que foi agressivo.
</defesa_reu>

<tarefas>
  <tarefa1>Identifique pontos fortes e fracos do AUTOR</tarefa1>
  <tarefa2>Identifique pontos fortes e fracos do RÉU</tarefa2>
  <tarefa3>Sugira decisão fundamentada</tarefa3>
</tarefas>

<formato_output>
## Análise do Autor
- Pontos fortes:
- Pontos fracos:

## Análise do Réu
- Pontos fortes:
- Pontos fracos:

## Decisão Sugerida
[Fundamentação]
</formato_output>
```

**3. Testar e comparar:**
- Execute ambas as versões
- Note a diferença na organização da resposta

### Checklist de Verificação

```
[ ] Separei instrução de conteúdo com tags
[ ] Usei tags com nomes descritivos
[ ] Fechei todas as tags abertas
[ ] A estrutura está clara e lógica
```

---

## Dicas e Armadilhas

### Dica
> Use nomes de tags descritivos em português: `<documento>`, `<instrucoes>`, `<contexto>`. Nomes claros ajudam você a manter e editar o prompt.

### Dica 2
> Combine Markdown dentro de tags XML:
> ```xml
> <instrucoes>
> ## Tarefa Principal
> - Analisar documento
> - Extrair informações
> </instrucoes>
> ```

### Armadilha
> **"Tags são só para programadores."**
>
> Não! Tags são para qualquer prompt complexo.
> Elas criam fronteiras claras que o modelo respeita.

### Armadilha 2
> **"Esquecer de fechar tags."**
>
> Sempre feche: `<tag>` precisa de `</tag>`.
> Tags não fechadas confundem a estrutura.

---

## Templates Prontos

### Template de Análise de Documento
```xml
<instrucoes>
[O que fazer com o documento]
</instrucoes>

<documento>
[Conteúdo a ser analisado]
</documento>

<formato>
[Como apresentar o resultado]
</formato>
```

### Template de Comparação
```xml
<contexto>
[Informações de fundo]
</contexto>

<documento_a>
[Primeiro documento]
</documento_a>

<documento_b>
[Segundo documento]
</documento_b>

<tarefa>
Compare os documentos acima considerando:
- [Critério 1]
- [Critério 2]
</tarefa>
```

### Template de Análise Jurídica
```xml
<caso>
  <partes>
    <autor>[Nome]</autor>
    <reu>[Nome]</reu>
  </partes>
  <fatos>[Descrição dos fatos]</fatos>
  <pedido>[O que o autor pede]</pedido>
</caso>

<instrucoes>
Analise o caso aplicando o método FIRAC.
</instrucoes>

<restricoes>
- Baseie-se apenas nos fatos apresentados
- Cite legislação aplicável
</restricoes>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: TAGS XML COMO DELIMITADORES                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SINTAXE:                                                   │
│  <tag>conteúdo</tag>                                        │
│                                                             │
│  VANTAGENS:                                                 │
│  → Fronteiras claras entre seções                           │
│  → Separa instrução de conteúdo                             │
│  → Permite aninhamento hierárquico                          │
│  → Evita ambiguidade com aspas e citações                   │
│                                                             │
│  TAGS COMUNS:                                               │
│  → <documento>, <instrucoes>, <contexto>                    │
│  → <exemplo>, <output>, <restricoes>                        │
│                                                             │
│  REGRA: Use tags quando precisar separar claramente         │
│         o que é instrução do que é dado/conteúdo            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com Markdown e XML dominados, o próximo passo é aprender técnicas para chamar a atenção do modelo para instruções importantes.

→ Próxima: **[2.3 Chamando a Atenção do Modelo](./aula-2.3.md)**
