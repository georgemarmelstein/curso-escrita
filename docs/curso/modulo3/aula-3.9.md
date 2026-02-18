# 3.9 Hackear Estilo

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Meta-Prompts e Automação
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Capturar estilo de escrita de um autor
- Fazer LLM escrever imitando estilo específico
- Usar exemplos para calibrar tom e vocabulário
- Manter consistência de estilo em produções longas

---

## Por que Importa

**Para profissionais do Direito:**
- Consistência de estilo em escritório
- Adaptar-se ao estilo preferido de um juiz
- Manter voz autoral em textos assistidos por IA

**Princípio:**
> Estilo não é só "formal" ou "informal" — é vocabulário, estrutura, ritmo e personalidade.

---

## Base Conceitual

### Componentes do Estilo

```
┌─────────────────────────────────────────────────────────────┐
│  ANATOMIA DO ESTILO                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VOCABULÁRIO                                                │
│  → Palavras preferidas vs evitadas                          │
│  → Nível de formalidade                                     │
│  → Jargão técnico ou linguagem acessível                    │
│                                                             │
│  ESTRUTURA                                                  │
│  → Tamanho de parágrafos                                    │
│  → Uso de listas e tópicos                                  │
│  → Ordem de argumentos (dedutivo/indutivo)                  │
│                                                             │
│  RITMO                                                      │
│  → Frases curtas ou longas                                  │
│  → Variação de tamanho                                      │
│  → Pontuação característica                                 │
│                                                             │
│  PERSONALIDADE                                              │
│  → Direto ou diplomático                                    │
│  → Assertivo ou cauteloso                                   │
│  → Uso de primeira pessoa                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Técnica de Captura de Estilo

```markdown
## PASSO 1: COLETAR EXEMPLOS
- 3-5 textos do autor/estilo desejado
- Textos do mesmo tipo (se petição, outras petições)
- Mínimo 1 página cada

## PASSO 2: ANALISAR PADRÕES
Peça ao LLM para identificar:
- Vocabulário característico
- Estruturas recorrentes
- Tom predominante
- Padrões de pontuação

## PASSO 3: CRIAR PERFIL DE ESTILO
Documente as características identificadas

## PASSO 4: APLICAR EM NOVOS TEXTOS
Use o perfil como instrução de estilo
```

---

## Exercício Prático

### Tarefa
Capturar estilo de um juiz e aplicar em nova sentença.

### Passo a Passo

**1. Analisar exemplos:**

```markdown
# ANÁLISE DE ESTILO

Analise os textos abaixo e identifique:

## Vocabulário
- Palavras/expressões recorrentes
- Termos característicos
- Palavras evitadas

## Estrutura
- Tamanho típico de parágrafos
- Uso de citações
- Ordem de argumentos

## Tom
- Formal/informal
- Direto/diplomático
- Assertivo/cauteloso

## Padrões
- Frases de abertura típicas
- Transições frequentes
- Forma de concluir

---

<exemplo1>
[TEXTO 1 DO AUTOR]
</exemplo1>

<exemplo2>
[TEXTO 2 DO AUTOR]
</exemplo2>

<exemplo3>
[TEXTO 3 DO AUTOR]
</exemplo3>
```

**2. Resultado esperado (perfil de estilo):**

```markdown
# PERFIL DE ESTILO: Juiz Dr. Fulano

## Vocabulário
- Usa frequentemente: "em que pese", "não merece acolhida"
- Evita: expressões coloquiais, anglicismos
- Prefere: voz passiva em fundamentação

## Estrutura
- Parágrafos médios (5-7 linhas)
- Cada argumento em parágrafo próprio
- Sempre cita lei antes de jurisprudência
- Ordem: regra → aplicação → conclusão

## Tom
- Formal e técnico
- Direto na conclusão
- Didático na fundamentação
- Uso moderado de primeira pessoa do plural

## Padrões
- Abertura: "Trata-se de [tipo de ação]..."
- Transição: "Passo ao exame do mérito."
- Conclusão: "Ante o exposto, JULGO..."

## Exemplos de Frases Típicas
- "A pretensão autoral não merece prosperar."
- "O conjunto probatório revela, de forma inequívoca, que..."
- "Data maxima venia, não assiste razão ao réu."
```

**3. Aplicar estilo:**

```markdown
# REDAÇÃO COM ESTILO CAPTURADO

Redija [tipo de texto] sobre o caso abaixo,
IMITANDO EXATAMENTE o estilo descrito.

## Perfil de Estilo a Seguir
<perfil>
[PERFIL CRIADO NA ETAPA 2]
</perfil>

## Regras de Imitação
1. Use o vocabulário característico
2. Siga a estrutura típica
3. Mantenha o tom identificado
4. Inclua frases típicas quando apropriado

## Caso
<caso>
[DADOS DO CASO]
</caso>

## Verificação
Antes de finalizar, confirme:
- [ ] Vocabulário característico presente
- [ ] Estrutura segue o padrão
- [ ] Tom está consistente
- [ ] Frases típicas foram usadas
```

### Checklist de Verificação

```
[ ] Coletei exemplos suficientes (3+)
[ ] Identifiquei padrões de vocabulário
[ ] Documentei estrutura típica
[ ] Capturei tom e personalidade
[ ] Testei aplicação em novo texto
```

---

## Dicas e Armadilhas

### Dica
> Quanto mais exemplos do mesmo tipo, melhor. 5 petições do mesmo advogado são melhores que 10 textos variados.

### Dica 2
> Guarde perfis de estilo. Você pode reutilizar o perfil do "Juiz Fulano" sempre que precisar escrever para ele.

### Armadilha
> **"Copiar frases exatas é imitar estilo."**
>
> Não! Estilo é padrão, não cópia literal.
> Capture o padrão, não as frases específicas.

### Armadilha 2
> **"Qualquer texto serve de exemplo."**
>
> Não. Use textos do mesmo tipo.
> Estilo de sentença é diferente de estilo de parecer.

---

## Templates Prontos

### Template: Análise de Estilo

```markdown
# ANÁLISE DE ESTILO

## Exemplos Fornecidos
[Lista de textos analisados]

## Vocabulário
| Categoria | Observação |
|-----------|------------|
| Frequentes | |
| Evitados | |
| Característicos | |

## Estrutura
| Aspecto | Padrão |
|---------|--------|
| Parágrafos | |
| Citações | |
| Ordem | |

## Tom
| Dimensão | Característica |
|----------|---------------|
| Formalidade | |
| Assertividade | |
| Pessoa | |

## Frases Típicas
1. [Abertura]
2. [Transição]
3. [Conclusão]
```

### Template: Aplicação de Estilo

```markdown
# REDAÇÃO COM ESTILO

## Perfil de Estilo
<perfil>
{{PERFIL CAPTURADO}}
</perfil>

## Tarefa
[O que escrever]

## Instruções
1. IMITE o vocabulário do perfil
2. SIGA a estrutura identificada
3. MANTENHA o tom característico
4. USE frases típicas naturalmente

## Verificação
Após redigir, compare com exemplos originais:
- Parece escrito pela mesma pessoa?
- Tom está consistente?
- Vocabulário está alinhado?
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: HACKEAR ESTILO                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COMPONENTES DO ESTILO:                                     │
│  → Vocabulário: palavras preferidas/evitadas                │
│  → Estrutura: parágrafos, ordem, citações                   │
│  → Ritmo: frases curtas/longas, variação                    │
│  → Personalidade: tom, assertividade                        │
│                                                             │
│  PROCESSO:                                                  │
│  1. Coletar exemplos (3-5 textos)                           │
│  2. Analisar padrões                                        │
│  3. Documentar perfil de estilo                             │
│  4. Aplicar em novos textos                                 │
│                                                             │
│  APLICAÇÕES:                                                │
│  → Consistência em escritório                               │
│  → Adaptar ao estilo de juiz                                │
│  → Manter voz autoral                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com meta-prompts, orquestradores e estilo dominados, entramos no mundo dos agentes autônomos.

→ Próxima: **[3.10 Introdução a Agentes](./aula-3.10.md)**
