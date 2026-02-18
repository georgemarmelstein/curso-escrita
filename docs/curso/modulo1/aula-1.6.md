# 1.6 Alucinações

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir o que são alucinações em LLMs
- Identificar os diferentes tipos de alucinação
- Aplicar técnicas para mitigar alucinações
- Entender por que alucinação é característica, não bug

---

## Por que Importa

**Para profissionais do Direito:**
- Citações jurídicas inventadas podem comprometer processos
- Jurisprudência fabricada pode gerar sanções éticas
- Entender o fenômeno permite uso responsável

**Contexto crítico:**
Advogados nos EUA já foram sancionados por citar casos inexistentes gerados por ChatGPT. Conhecer alucinações é essencial para uso profissional.

---

## Base Conceitual

### Definição

**Alucinação:** Geração de conteúdo factualmente incorreto ou sem base, apresentado com alta confiança pelo modelo.

> "Todas as respostas factuais de um LLM são palpites probabilísticos."

### Por que LLMs Alucinam?

```
CAUSAS ESTRUTURAIS:
├── Treinamento em dados com erros
├── Pressão para sempre responder (não dizer "não sei")
├── Objetivo de fluência > factualidade
├── Interpolação de padrões para lacunas
└── Natureza probabilística (estatística, não factual)
```

### Tipos de Alucinação

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Factual** | Erros em fatos | "A Lei 8.666 foi revogada em 2020" (foi 2021) |
| **Fabricação** | Cita o que não existe | "Conforme STF, RE 999.999..." (RE inexistente) |
| **Contradição** | Inconsistência interna | "O réu estava presente" e depois "O réu não compareceu" |
| **Extrapolação** | Extrapola além do conhecido | Detalhes de caso sigiloso |

### A Metáfora do Concurseiro

> Imagine um concurseiro que estudou muito, mas não sabe tudo.
>
> Na prova, ele nunca deixa questão em branco.
>
> Quando não sabe, inventa algo plausível com confiança.
>
> O LLM faz o mesmo: prefere "chutar" a admitir ignorância.

### O Trade-off Fundamental

```
        UTILIDADE                    SEGURANÇA
            │                            │
            ▼                            ▼
┌────────────────────┐      ┌────────────────────┐
│ Responder sempre   │ VS   │ Recusar quando     │
│ (mais útil, mais   │      │ incerto (mais      │
│ alucinações)       │      │ seguro, menos útil)│
└────────────────────┘      └────────────────────┘
```

---

## Técnicas de Mitigação

### 1. RAG (Retrieval-Augmented Generation)
```
Âncora respostas em documentos reais.
O modelo cita fontes verificáveis.
```

### 2. Chain-of-Thought
```
Raciocínio explícito é mais verificável.
"Mostre seu trabalho" permite detectar erros.
```

### 3. Self-Consistency
```
Gere múltiplas respostas.
Vote na mais frequente.
Divergência indica incerteza.
```

### 4. Prompt Engineering
```
"Se você não tem certeza, diga 'não tenho informação suficiente'."
"Cite apenas fontes que você tem certeza que existem."
"Prefira dizer 'não sei' a inventar."
```

### 5. Verificação Externa
```
Sempre confirme citações jurídicas em fontes oficiais.
Use bases de jurisprudência reais (JusBrasil, STF, STJ).
Nunca confie em RE, REsp ou súmulas sem verificar.
```

---

## Exercício Prático

### Tarefa
Identificar e mitigar alucinações em resposta de LLM.

### Passo a Passo

**1. Provocar alucinação:**
```
Prompt: "Cite 5 precedentes do STJ sobre responsabilidade civil
em casos de vazamento de dados pessoais, incluindo número do
recurso e ementa resumida."

(Alta probabilidade de fabricação)
```

**2. Verificar fabricações:**
- Pesquise cada número de REsp citado no site do STJ
- Anote quais existem e quais foram inventados

**3. Aplicar mitigação:**
```
Prompt melhorado:
"Sobre responsabilidade civil em vazamento de dados pessoais,
o que você sabe sobre a jurisprudência do STJ?

IMPORTANTE:
- NÃO cite números de recursos específicos
- Se não tem certeza de um caso, diga 'há discussão sobre'
- Prefira descrever tendências gerais a citar casos específicos"
```

**4. Comparar resultados:**
- Versão 1: provavelmente contém fabricações
- Versão 2: mais genérica, mas mais confiável

### Checklist de Verificação

```
[ ] Identifiquei ao menos uma alucinação na versão 1
[ ] Verifiquei citações em fonte oficial
[ ] O prompt melhorado reduziu fabricações
[ ] Entendi o trade-off utilidade vs segurança
```

---

## Dicas e Armadilhas

### Dica
> Nunca confie em citações jurídicas específicas (RE, REsp, súmulas, artigos). Use o LLM para entender conceitos e tendências, mas SEMPRE verifique referências em fontes oficiais.

### Armadilha
> **"O modelo respondeu com muita confiança, então deve estar certo."**
>
> LLMs SEMPRE respondem com confiança, mesmo quando inventam.
> A confiança aparente não é indicador de veracidade.
> Desconfie especialmente de detalhes específicos (números, datas, nomes).

### Armadilha 2
> **"Se eu pedir para não alucinar, ele não vai alucinar."**
>
> Instruções ajudam, mas não eliminam o problema.
> Alucinação é estrutural, não comportamental.
> Verificação externa continua necessária.

---

## Recursos

### Papers de Referência
- Ji et al. (2023) - "Survey of Hallucination in Natural Language Generation"
- Manakul et al. (2023) - "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection"

### Material de Aula
- Slides: `docs/modulo1-slides/Aula 6 - Alucinações.pptx`
- Papers: `docs/modulo1-slides/Material de Aula/Aula 6 - Alucinacoes/`

### Ferramentas de Verificação
- [STF - Jurisprudência](https://portal.stf.jus.br/jurisprudencia/)
- [STJ - Jurisprudência](https://scon.stj.jus.br/SCON/)
- [JusBrasil](https://www.jusbrasil.com.br)

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ALUCINAÇÃO = CARACTERÍSTICA, NÃO BUG                       │
│  → LLMs são máquinas de palpites probabilísticos            │
│  → Pressão para responder > admitir ignorância              │
│                                                             │
│  TIPOS: Factual, Fabricação, Contradição, Extrapolação      │
│                                                             │
│  MITIGAÇÃO:                                                 │
│  → RAG (ancorar em documentos)                              │
│  → Prompt engineering (permitir "não sei")                  │
│  → Verificação externa (SEMPRE!)                            │
│                                                             │
│  REGRA DE OURO:                                             │
│  → Use LLM para entender, não para citar                    │
│  → Verifique TODA referência específica                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Alucinações são uma limitação. Mas como os LLMs são "ensinados" a se comportar melhor? Isso nos leva ao alinhamento ético.

→ Próxima: **[1.7 HHH - Alinhamento Ético](./aula-1.7.md)**
