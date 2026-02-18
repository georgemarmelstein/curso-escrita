# 2.7 E - Estilo

**Módulo:** 2 - Engenharia de Prompt
**Componente POEMA:** E (Estilo)
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir tom e registro de comunicação
- Calibrar linguagem para diferentes públicos
- Usar técnicas anti-viés e priming
- Adaptar estilo para contextos jurídicos diversos

---

## Por que Importa

**Para profissionais do Direito:**
- Petição para juiz ≠ parecer para cliente
- Tom inadequado compromete credibilidade
- Público-alvo determina vocabulário e complexidade

**Princípio:**
> O estilo define COMO a mensagem será comunicada, não O QUE será dito.

---

## Base Conceitual

### O que é Estilo no POEMA?

```
ESTILO = Tom + Anti-Viés + Prefill

Tom:       Registro da comunicação (formal, didático, técnico)
Anti-Viés: Instruções para evitar tendenciosidade
Prefill:   Primeiras palavras para direcionar resposta
```

### Espectro de Formalidade

```
┌─────────────────────────────────────────────────────────────┐
│              ESPECTRO DE TOM                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FORMAL ◄───────────────────────────────────► INFORMAL      │
│                                                             │
│  Petição    Parecer    Artigo    E-mail    Chat             │
│  judicial   técnico    acadêmico interno   cliente          │
│                                                             │
│  "Vem,      "Conclui-  "O presente "Olá,   "Então,          │
│  respei-    -se que    estudo     segue    sobre aquela     │
│  tosamente" a tese..."  analisa"   análise" questão..."     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Calibração por Público

| Público | Tom | Vocabulário | Complexidade |
|---------|-----|-------------|--------------|
| Juiz/Tribunal | Formal, técnico | Jurídico | Alta |
| Cliente leigo | Acessível, claro | Simplificado | Baixa |
| Colega advogado | Técnico, direto | Jurídico | Média |
| Estudante | Didático, explicativo | Progressivo | Média |

### Técnicas Anti-Viés

```markdown
# Instruções Anti-Viés

1. EQUILÍBRIO
   "Apresente argumentos de AMBOS os lados antes de concluir."

2. HUMILDADE
   "Se não houver informação suficiente, diga explicitamente."

3. NEUTRALIDADE
   "Evite linguagem que favoreça qualquer das partes."

4. TRANSPARÊNCIA
   "Indique quando estiver fazendo inferências vs citando fatos."
```

### Técnica de Prefill (Priming)

O prefill "coloca palavras na boca" do modelo, direcionando o início da resposta.

```markdown
# Sem prefill
Analise o caso.

# Com prefill
Analise o caso.

Início da sua resposta:
"Analisando os aspectos jurídicos do caso, identifico os seguintes pontos:

1."
```

O modelo continuará a partir do prefill, mantendo o tom e estrutura iniciados.

---

## Exercício Prático

### Tarefa
Calibrar o mesmo conteúdo para 3 públicos diferentes.

### Conteúdo Base
```
Explicar o conceito de prescrição quinquenal em ações
contra a Fazenda Pública (Decreto 20.910/32).
```

### Passo a Passo

**1. Versão para Juiz (formal, técnico):**

```markdown
## Estilo
- Tom: formal e técnico
- Registro: linguagem jurídica processual
- Estrutura: fundamentação com citações

## Prefill
"A prescrição quinquenal, instituída pelo Decreto nº 20.910/32,
constitui-se em"
```

**2. Versão para Cliente Leigo (acessível, claro):**

```markdown
## Estilo
- Tom: acessível e acolhedor
- Registro: linguagem cotidiana, sem jargões
- Estrutura: explicação passo a passo

## Prefill
"Vou explicar de forma simples: a prescrição é como um 'prazo
de validade' para entrar com processo. No seu caso,"
```

**3. Versão para Estudante (didático, explicativo):**

```markdown
## Estilo
- Tom: didático e encorajador
- Registro: técnico mas explicado
- Estrutura: conceito + exemplo + aplicação

## Prefill
"A prescrição quinquenal é um conceito fundamental no direito
administrativo. Vamos entender por partes:

**O que é:** "
```

**4. Comparar resultados:**
- Execute os três prompts
- Note diferenças de vocabulário e complexidade

### Checklist de Verificação

```
[ ] Identifiquei o público-alvo
[ ] Defini tom adequado ao contexto
[ ] Incluí instruções anti-viés se necessário
[ ] Usei prefill para direcionar início
```

---

## Dicas e Armadilhas

### Dica
> Para manter consistência de tom em textos longos, use prefill no início E relembre o tom no meio:
> ```
> [Lembre-se: mantenha tom formal e técnico]
> ```

### Dica 2
> Combine estilo com persona:
> ```
> Você é um professor (PERSONA).
> Explique de forma didática (ESTILO).
> ```
> A persona define QUEM fala, o estilo define COMO fala.

### Armadilha
> **"Tom formal sempre é melhor."**
>
> Não! Tom inadequado ao público dificulta compreensão.
> Falar em juridiquês com cliente leigo é ineficaz.

### Armadilha 2
> **"O modelo vai manter o tom automaticamente."**
>
> Em textos longos, o tom pode variar.
> Reforce instruções de estilo ao longo do prompt.

---

## Templates Prontos

### Template de Estilo Formal
```markdown
## Estilo
- **Tom:** Formal e técnico
- **Registro:** Linguagem jurídica processual
- **Evitar:** Coloquialismos, primeira pessoa, expressões informais
- **Estrutura:** Fundamentação com citações de lei e jurisprudência

## Anti-Viés
- Apresente posições divergentes quando existirem
- Indique o grau de consolidação da jurisprudência
```

### Template de Estilo Acessível
```markdown
## Estilo
- **Tom:** Acessível e claro
- **Registro:** Linguagem cotidiana
- **Evitar:** Jargões jurídicos sem explicação, latim
- **Técnica:** Explique termos técnicos entre parênteses

## Exemplo
"A prescrição (prazo para entrar com processo) no seu caso é de 5 anos."
```

### Template de Estilo Didático
```markdown
## Estilo
- **Tom:** Didático e progressivo
- **Registro:** Técnico mas explicado
- **Estrutura:**
  1. Conceito simples
  2. Aprofundamento técnico
  3. Exemplo prático
  4. Aplicação ao caso

## Prefill
"Vamos entender [conceito] em três passos:

**Passo 1 - O básico:**"
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: ESTILO                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FÓRMULA:                                                   │
│  Estilo = Tom + Anti-Viés + Prefill                         │
│                                                             │
│  COMPONENTES:                                               │
│  → Tom: registro de comunicação (formal/informal)           │
│  → Anti-Viés: instruções de neutralidade                    │
│  → Prefill: priming para direcionar início                  │
│                                                             │
│  CALIBRAÇÃO POR PÚBLICO:                                    │
│  → Juiz: formal, técnico, fundamentado                      │
│  → Cliente: acessível, claro, sem jargões                   │
│  → Colega: técnico, direto, sem redundâncias                │
│  → Estudante: didático, progressivo, com exemplos           │
│                                                             │
│  REGRA: Tom inadequado ao público = comunicação ineficaz    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com Persona, Objetivo e Estilo definidos, o próximo passo é estruturar o Modelo (metodologia e formato).

→ Próxima: **[2.8 M - Modelo](./aula-2.8.md)**
