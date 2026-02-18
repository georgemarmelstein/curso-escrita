# Técnicas de Prompt Engineering - Anthropic (2025)

## Hierarquia de Técnicas (ordem de efetividade)

A Anthropic organiza as técnicas da mais amplamente efetiva para a mais especializada:

1. **Be clear and direct** - Clareza e objetividade
2. **Use examples (multishot)** - Exemplos demonstrativos
3. **Let Claude think (CoT)** - Cadeia de pensamento
4. **Use XML tags** - Estruturação com tags XML
5. **Give Claude a role** - Definição de papel/persona
6. **Prefill Claude's response** - Pré-preenchimento de resposta
7. **Chain complex prompts** - Encadeamento de prompts
8. **Long context tips** - Dicas para contextos longos

---

## 1. Be Clear and Direct

### Princípio
Pense em Claude como um funcionário novo e inteligente sem contexto prévio. Quanto mais explicar exatamente o que quer de forma direta, melhor será a resposta.

### Práticas
- Forneça contexto e detalhes completos
- Inclua regras específicas para conclusão correta da tarefa
- Declare exatamente o que quer ver como output
- Use linguagem simples e sem ambiguidades

### Claude 4.x Específico
- Modelos 4.x respondem bem a instruções claras e explícitas
- Comportamentos "acima e além" precisam ser explicitamente solicitados
- Adicione **contexto/motivação** para instruções (explique o porquê)

**Menos efetivo:**
```
Crie um dashboard de análise
```

**Mais efetivo:**
```
Crie um dashboard de análise. Inclua tantos recursos e interações relevantes quanto possível. Vá além do básico para criar uma implementação completa.
```

---

## 2. Use Examples (Multishot Prompting)

### Princípio
Exemplos são o "atalho secreto" para obter outputs precisos. Melhora dramaticamente acurácia, consistência e qualidade.

### Práticas
- Forneça 1-3 exemplos de alta qualidade
- Envolva exemplos em tags `<example>` (múltiplos em `<examples>`)
- Inclua exemplos desafiadores e casos de borda
- Exemplos devem ser realistas e específicos
- Peça a Claude para avaliar relevância, diversidade ou clareza dos exemplos

### Estrutura Recomendada
```xml
<examples>
  <example>
    <input>...</input>
    <output>...</output>
  </example>
  <example>
    <input>...</input>
    <output>...</output>
  </example>
</examples>
```

---

## 3. Let Claude Think (Chain of Thought)

### Princípio
Dizer a Claude para "pensar passo a passo" frequentemente melhora a precisão das respostas.

### Práticas
- Use tags `<thinking>` e `<answer>` para separar raciocínio de resposta
- Para Claude 4.x com extended thinking: guie o pensamento inicial ou intercalado
- Após tool use, peça reflexão sobre qualidade dos resultados

### Exemplo
```
Após receber resultados de ferramentas, reflita cuidadosamente sobre sua qualidade
e determine os próximos passos ideais antes de prosseguir. Use seu pensamento
para planejar e iterar com base nessas novas informações.
```

### Nota Claude 4.5
Opus 4.5 é particularmente sensível à palavra "think" quando extended thinking está desabilitado. Use alternativas: "consider", "believe", "evaluate".

---

## 4. Use XML Tags

### Princípio
Claude foi treinado com XML tags nos dados de treinamento e presta atenção especial a elas.

### Benefícios
- **Clareza**: Separa claramente partes do prompt
- **Acurácia**: Reduz erros de interpretação
- **Flexibilidade**: Facilita encontrar, adicionar, remover ou modificar partes
- **Parseabilidade**: Facilita extração de partes específicas da resposta

### Melhores Práticas
- Use nomes de tags que façam sentido com o conteúdo
- Seja **consistente** nos nomes das tags
- **Aninhe tags** para conteúdo hierárquico: `<outer><inner></inner></outer>`
- Referencie as tags ao falar do conteúdo: "Usando o contrato em `<contract>` tags..."

### Tags Comuns Sugeridas
| Tipo | Tags |
|------|------|
| Instruções | `<instructions>`, `<task>`, `<prompt>` |
| Contexto | `<context>`, `<document>`, `<text>`, `<information>` |
| Exemplos | `<example>`, `<examples>` |
| Pensamento | `<thinking>`, `<answer>` |
| Background | `<background_information>` |
| Output | `<output_description>` |

### Combinação Avançada
Combine XML tags com outras técnicas:
- Multishot prompting: `<examples>`
- Chain of thought: `<thinking>`, `<answer>`
- Formato de output: tags personalizadas

---

## 5. Give Claude a Role (System Prompts)

### Princípio
Definir um papel/persona ajuda Claude a contextualizar suas respostas.

### Práticas
- Defina expertise específica
- Inclua características comportamentais desejadas
- Especifique tom e estilo de comunicação

---

## 6. Prefill Claude's Response

### Princípio
Pré-preencher a resposta de Claude pode guiar o formato e evitar verbosidade.

### Usos
- Iniciar com `<thinking>` para forçar raciocínio
- Definir formato inicial do output
- Evitar saudações ou preâmbulos

---

## 7. Chain Complex Prompts

### Princípio
Para tarefas complexas, use o output de um prompt como input do próximo.

### Benefícios
- Melhora acurácia e consistência por etapa
- Facilita troubleshooting
- Claude foca em uma subtarefa por vez

---

## 8. Long Context Tips

### Para Contextos Longos (Claude 4.5)
- Claude 4.5 tem capacidades excepcionais de raciocínio de longo horizonte
- Mantém orientação em sessões estendidas
- Foco em progresso incremental

### Práticas
- Use formatos estruturados (JSON) para dados de estado
- Use texto não estruturado para notas de progresso
- Use git para tracking de estado entre sessões

---

## Diretrizes Específicas Claude 4.x

### Estilo de Comunicação
- Mais direto e fundamentado
- Mais conversacional e fluente
- Menos verboso (pode pular sumários)

### Uso de Ferramentas
- Seja explícito sobre ações desejadas
- "Sugira mudanças" vs "Faça as mudanças"
- Claude 4.x pode over-trigger em ferramentas se prompt for agressivo

### Controle de Formato
1. Diga o que fazer, não o que evitar
2. Use indicadores de formato XML
3. Combine estilo do prompt com output desejado
4. Use prompts detalhados para preferências específicas

### Evitar Over-engineering
```
Evite over-engineering. Faça apenas mudanças diretamente solicitadas ou
claramente necessárias. Mantenha soluções simples e focadas.

Não adicione features, refatore código ou faça "melhorias" além do pedido.
Não crie helpers, utilitários ou abstrações para operações únicas.
```

---

## Fontes

- [Prompt Engineering Overview - Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Claude 4 Best Practices](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)
- [Use XML Tags - Anthropic](https://docs.anthropic.com/en/docs/use-xml-tags)
- [Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)
