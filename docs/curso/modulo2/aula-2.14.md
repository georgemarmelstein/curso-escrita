# 2.14 Super Dicas

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Aplicação Prática
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Reconhecer erros comuns em prompts
- Aplicar boas práticas consolidadas
- Evitar armadilhas frequentes
- Refinar prompts com base em padrões de falha

---

## Por que Importa

**Para profissionais do Direito:**
- Erros de prompt custam tempo e qualidade
- Conhecer armadilhas previne problemas
- Boas práticas aceleram resultados

**Princípio:**
> Aprender com erros comuns é mais eficiente que descobri-los sozinho.

---

## Base Conceitual

### Os 10 Erros Mais Comuns

```
┌─────────────────────────────────────────────────────────────┐
│  TOP 10 ERROS EM PROMPTS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. OBJETIVO VAGO                                           │
│     "Analise isso" → O quê analisar? Como?                  │
│                                                             │
│  2. AUSÊNCIA DE FORMATO                                     │
│     Sem definir saída → Resposta inconsistente              │
│                                                             │
│  3. SEM GUARDRAILS                                          │
│     Permite invenções → Alucinações                         │
│                                                             │
│  4. DOCUMENTO MAL DELIMITADO                                │
│     Confunde instrução com conteúdo                         │
│                                                             │
│  5. EXCESSO DE INSTRUÇÕES                                   │
│     Prompt gigante → Instruções ignoradas                   │
│                                                             │
│  6. INSTRUÇÕES CONTRADITÓRIAS                               │
│     "Seja breve" + "Seja detalhado"                         │
│                                                             │
│  7. PERSONA INADEQUADA                                      │
│     Persona errada para a tarefa                            │
│                                                             │
│  8. IGNORAR LIMITAÇÕES DO MODELO                            │
│     Pedir fatos específicos sem fonte                       │
│                                                             │
│  9. NÃO TESTAR                                              │
│     Usar prompt sem validação                               │
│                                                             │
│  10. NÃO ITERAR                                             │
│      Aceitar primeira resposta sem refinar                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Correções Rápidas

| Erro | Correção |
|------|----------|
| Objetivo vago | Adicione verbo de ação + especificidade |
| Sem formato | Defina template ou exemplo de saída |
| Sem guardrails | Adicione "PROIBIDO" e "OBRIGATÓRIO" |
| Documento confuso | Use tags XML ou Markdown claro |
| Excesso | Divida em prompts menores |
| Contradição | Revise para consistência |
| Persona errada | Alinhe persona com objetivo |
| Limitação ignorada | Forneça contexto necessário |
| Não testado | Execute antes de confiar |
| Não iterado | Refine com base no resultado |

---

## Exercício Prático: Quiz de Erros

### Tarefa
Identificar erros em prompts problemáticos.

### Prompt 1
```
Faça uma análise completa e detalhada do contrato,
mas seja breve e objetivo, cobrindo todos os aspectos
legais relevantes sem se estender muito.
```

**Qual o erro?**
<details>
<summary>Ver resposta</summary>

**Erro: Instruções contraditórias**
- "completa e detalhada" vs "breve"
- "todos os aspectos" vs "sem se estender"

**Correção:**
```markdown
Analise o contrato focando em:
1. Cláusulas abusivas
2. Lacunas contratuais
3. Riscos principais

Para cada item: máximo 3 linhas.
```
</details>

---

### Prompt 2
```
Você é um advogado. Analise o caso e cite a
jurisprudência relevante do STJ sobre o tema.
O caso é sobre um contrato de locação que
foi rescindido unilateralmente pelo locador
e o locatário quer indenização.
```

**Qual o erro?**
<details>
<summary>Ver resposta</summary>

**Erro: Pedir fatos específicos sem fonte (alucinação)**
- "cite jurisprudência relevante do STJ" sem fornecer
- Modelo pode inventar precedentes

**Correção:**
```markdown
## Tarefa
Analise o caso de rescisão unilateral de locação.

## Sobre Jurisprudência
ATENÇÃO: NÃO cite jurisprudência específica.
Em vez disso:
- Indique teses jurídicas aplicáveis
- Sugira termos de busca para pesquisa
- Recomende: "Pesquisar no STJ: [termos]"

## Caso
[descrição do caso]
```
</details>

---

### Prompt 3
```
Analise.
```

**Qual o erro?**
<details>
<summary>Ver resposta</summary>

**Erro: Objetivo completamente vago**
- Analisar o quê?
- De que forma?
- Para quê?

**Correção:**
```markdown
# Objetivo
Analise a petição inicial anexada.

# Extraia
1. Partes e qualificação
2. Causa de pedir
3. Pedidos
4. Valor da causa

# Formato
Apresente em tabela estruturada.

<documento>
[petição]
</documento>
```
</details>

---

### Prompt 4
```
Você é um juiz federal especializado em direito
tributário com 20 anos de experiência.

Escreva um poema sobre o amor.
```

**Qual o erro?**
<details>
<summary>Ver resposta</summary>

**Erro: Persona inadequada para a tarefa**
- Juiz tributarista para escrever poema?
- Desperdício de persona

**Correção:**
```markdown
# Para poema:
Você é um poeta contemporâneo brasileiro.

# Para tarefa jurídica:
[manter a persona de juiz]
```
</details>

---

### Prompt 5
```
Com base no seu conhecimento, qual foi o resultado
do julgamento do RE 123456 no STF em dezembro de 2024?
```

**Qual o erro?**
<details>
<summary>Ver resposta</summary>

**Erro: Ignorar limitações do modelo**
- Pedir fato específico do conhecimento paramétrico
- Alto risco de alucinação

**Correção:**
```markdown
# Opção 1: Busca web
[Ativar busca web]
Pesquise o resultado do RE 123456 no STF.

# Opção 2: Documento
Analise o acórdão anexado do RE 123456:
<acordao>
[inserir texto do acórdão]
</acordao>

# Opção 3: Honestidade
Se não souber, diga: "Não tenho informação
verificável sobre este julgamento específico."
```
</details>

---

## As 10 Super Dicas

### Dica 1: Comece pelo Objetivo
> Antes de escrever qualquer coisa, responda: "O que exatamente eu quero que o modelo faça?" Se você não sabe, o modelo também não saberá.

### Dica 2: Um Prompt, Uma Tarefa
> Prompts complexos demais confundem. Se tem 5 tarefas diferentes, considere 5 prompts separados ou etapas claras.

### Dica 3: Mostre, Não Apenas Diga
> Em vez de "seja formal", dê exemplo do tom desejado. Exemplos são mais eficazes que descrições.

### Dica 4: Guardrails no Início e Fim
> Instruções críticas devem aparecer no início (primacy) E no final (recency) do prompt.

### Dica 5: Use Tags para Documentos
> Sempre delimite documentos com `<documento>` ou similar. Nunca misture instrução com conteúdo.

### Dica 6: Defina o Formato de Saída
> "Responda em tabela com 3 colunas" é melhor que "organize bem a resposta".

### Dica 7: Teste com Casos Extremos
> Se funciona com caso simples, teste com caso complexo. Prompts robustos funcionam em ambos.

### Dica 8: Itere Sempre
> Primeiro resultado raramente é o melhor. Refine com base no que funcionou e o que não funcionou.

### Dica 9: Documente Seus Prompts
> Prompts que funcionam devem ser salvos com frontmatter. Você vai precisar deles de novo.

### Dica 10: Menos é Mais (Às Vezes)
> Nem todo prompt precisa de POEMA completo. Tarefas simples requerem prompts simples.

---

## Checklist Final do Módulo

```
┌─────────────────────────────────────────────────────────────┐
│  VOCÊ COMPLETOU O MÓDULO 2!                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FERRAMENTAS DOMINADAS:                                     │
│  [✓] Markdown para estruturação                             │
│  [✓] Tags XML para delimitação                              │
│  [✓] Técnicas de ênfase                                     │
│                                                             │
│  CONCEITOS APRENDIDOS:                                      │
│  [✓] 4 tipos de prompt (análise, escrita, criação, pesquisa)│
│  [✓] Framework POEMA completo                               │
│  [✓] Metaprompts e YAML frontmatter                         │
│                                                             │
│  HABILIDADES DESENVOLVIDAS:                                 │
│  [✓] Construir prompts estruturados                         │
│  [✓] Auditar prompts existentes                             │
│  [✓] Identificar e corrigir erros                           │
│  [✓] Criar prompt FIRAC profissional                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: SUPER DICAS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TOP 3 ERROS A EVITAR:                                      │
│  1. Objetivo vago ("analise isso")                          │
│  2. Sem guardrails (permite alucinações)                    │
│  3. Pedir fatos específicos sem fonte                       │
│                                                             │
│  TOP 3 PRÁTICAS A ADOTAR:                                   │
│  1. Sempre definir formato de saída                         │
│  2. Usar tags para separar documento de instrução           │
│  3. Testar e iterar antes de confiar                        │
│                                                             │
│  REGRA DE OURO:                                             │
│  Se você não sabe exatamente o que quer,                    │
│  o modelo também não saberá.                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão: Fim do Módulo 2

Parabéns! Você concluiu a **Engenharia de Prompt**.

### O que você aprendeu:
- Ferramentas de formatação (Markdown, XML, ênfase)
- Framework P.O.E.M.A. completo
- Técnicas avançadas (frontmatter, metaprompts)
- Aplicação prática (FIRAC, checklist)
- Erros comuns e como evitá-los

### Próximo passo:
Com a engenharia de prompt dominada, você está pronto para **técnicas avançadas e aplicações especializadas**.

→ Próximo: **[Módulo 3 - Aplicações Avançadas](../modulo3/README.md)**
