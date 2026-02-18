# 1.11 RAG e a Lógica dos Anexos

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Explicar o que é RAG (Retrieval Augmented Generation)
- Entender as duas técnicas de processamento de anexos
- Saber quando usar busca web vs anexo direto
- Aplicar boas práticas para análise de documentos

---

## Por que Importa

**Para profissionais do Direito:**
- Análise de processos depende de como o LLM processa documentos
- Entender RAG evita erros de interpretação
- Saber as limitações permite estratégias de mitigação

---

## Base Conceitual

### O que é RAG?

**RAG = Retrieval Augmented Generation**
(Geração Aumentada por Recuperação)

> Técnica que permite ao LLM buscar conteúdo relevante em uma base de conhecimento antes de gerar a resposta.

### Vantagens do RAG

| Vantagem | Descrição |
|----------|-----------|
| **Mitigar alucinações** | Respostas ancoradas em documentos reais |
| **Personalização** | Base de conhecimento específica |
| **Controle de fonte** | Você sabe de onde vem a informação |
| **Atualização dinâmica** | Não depende do cutoff |
| **Otimização de tokens** | Busca apenas o relevante |

### Duas Técnicas de Processamento de Anexos

```
┌─────────────────────────────────────────────────────────────┐
│                    JUST-IN-TIME                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 Documento INTEIRO → [Janela de Contexto] → Resposta     │
│                                                             │
│  ✓ Vantagem: Analisa TODO o texto com detalhes              │
│  ✗ Desvantagem: Limitado pela janela de contexto            │
│  📝 Uso: Documentos pequenos/médios (default)               │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    JUST-IN-CASE                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 Documento → [Índice] → Busca fragmentos → Resposta      │
│                                                             │
│  ✓ Vantagem: Processa documentos maiores que a janela       │
│  ✗ Desvantagem: Pode perder detalhes                        │
│  📝 Uso: Documentos grandes (ativado automaticamente)       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Falhas Comuns do RAG

| Falha | Descrição |
|-------|-----------|
| **Fragmentação** | Sistema vê apenas pedaços, não o todo |
| **Busca inadequada** | LLM pode não ativar busca corretamente |
| **Interpretação** | Pode haver erro na compreensão do texto |
| **Degradação** | Documentos longos perdem qualidade |

### Fontes de Conhecimento Externo

```
1. ANEXO DO USUÁRIO
   └── Documento fornecido diretamente
   └── TXT ou MD é o padrão ouro
   └── Desative busca web para análises de processo

2. BUSCA NA WEB
   └── Busca simples: rápida, superficial
   └── Deep research: profunda, demorada

3. RESOURCES (MCP)
   └── Bases de conhecimento personalizadas
   └── APIs externas conectadas
   └── Serviços de nuvem integrados
```

---

## Exercício Prático

### Tarefa 1: Testar Just-in-Time vs Just-in-Case

**Passo a passo:**
```
1. Anexe um documento PEQUENO (2-3 páginas)
2. Pergunte: "Cite textualmente uma frase do documento."
3. Observe: ele consegue citar com precisão?

4. Repita com documento GRANDE (50+ páginas)
5. Faça a mesma pergunta
6. Compare: a precisão é a mesma?
```

### Tarefa 2: Usar Prompt de Controle

**Passo a passo:**
```
Prompt recomendado para análise de documentos:

"Consulte todos os documentos fornecidos na íntegra.
USE EXCLUSIVAMENTE as informações contidas no documento.
PROIBIÇÃO ABSOLUTA de incorporar elementos de fontes externas.
Se a análise ficar prejudicada pela impossibilidade de leitura
completa, informe isso na resposta."

Teste com e sem esse prompt e compare os resultados.
```

### Tarefa 3: Comparar com Busca Web

**Passo a passo:**
```
1. Pergunte sobre jurisprudência recente COM busca ativada
2. Pergunte sobre o MESMO tema COM documento anexado
3. Compare: qual resposta é mais precisa e confiável?
```

### Checklist de Verificação

```
[ ] Entendo a diferença entre just-in-time e just-in-case
[ ] Testei análise de documento pequeno vs grande
[ ] Usei prompt de controle para análise precisa
[ ] Sei quando usar busca web vs anexo direto
```

---

## Dicas e Armadilhas

### Dica
> Para análise de processos judiciais, **desative a busca web** e use apenas o documento anexado. Isso evita que o modelo misture informações externas com o caso concreto.

### Dica 2
> Use formato TXT ou Markdown para anexos quando possível. PDFs escaneados podem ter problemas de OCR que propagam erros.

### Dica 3
> Para documentos muito longos, divida em partes e analise separadamente. Depois, peça uma síntese consolidada.

### Armadilha
> **"Anexei 500 páginas, o Claude vai analisar tudo."**
>
> Não necessariamente! Com documentos muito grandes:
> - O sistema usa just-in-case (fragmentado)
> - Detalhes podem ser perdidos
> - A análise pode ser superficial

### Armadilha 2
> **"O documento está anexado, então o Claude sabe tudo dele."**
>
> Nem sempre! Dependendo do processamento:
> - Pode ver apenas fragmentos
> - Pode não ter "lido" partes específicas
> - Sempre teste se ele encontra informações específicas

---

## Recursos

### Prompt Modelo para Análise de Documentos

```markdown
Consulte todos os documentos fornecidos na íntegra.

Sua análise deve se basear EXCLUSIVAMENTE nos documentos
fornecidos. PROIBIÇÃO ABSOLUTA de incorporar elementos
factuais de fontes externas.

Para PDFs digitalizados, use OCR para extrair o texto.
Se o documento tiver layout complexo, use análise visual.

Se a análise ficar prejudicada pela impossibilidade de
leitura completa, informe isso na resposta.
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 11 - RAG e Anexos.pptx`
- Papers: Lewis et al. (2020) - "RAG: Retrieval-Augmented Generation"

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  RAG (Retrieval Augmented Generation)                       │
│  → Busca conhecimento externo para enriquecer contexto      │
│  → Reduz alucinações, permite atualização dinâmica          │
│                                                             │
│  DUAS TÉCNICAS DE ANEXOS                                    │
│  → Just-in-time: documento inteiro no contexto              │
│  → Just-in-case: busca fragmentos sob demanda               │
│                                                             │
│  FONTES EXTERNAS                                            │
│  → Anexo do usuário (preferível para processos)             │
│  → Busca web (para informações atualizadas)                 │
│  → Resources/MCP (bases personalizadas)                     │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → Entenda como o modelo processa seus documentos           │
│  → Use prompts de controle para garantir precisão           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido como LLMs processam conhecimento externo, a próxima fronteira é: quando eles começam a agir de forma autônoma?

→ Próxima: **[1.12 Introdução ao Mundo dos Agentes](./aula-1.12.md)**
