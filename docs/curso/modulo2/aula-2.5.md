# 2.5 P - Persona

**Módulo:** 2 - Engenharia de Prompt
**Componente POEMA:** P (Persona)
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir personas eficazes para seus prompts
- Combinar papel, expertise e especialização
- Comparar resultados de diferentes personas
- Escolher a persona adequada para cada tarefa

---

## Por que Importa

**Para profissionais do Direito:**
- Persona de "juiz" gera análise diferente de "advogado"
- Especialização direciona o foco da resposta
- Persona errada pode gerar perspectiva enviesada

**Princípio:**
> A persona define o "óculos" pelo qual o LLM vai olhar o problema.

---

## Base Conceitual

### O que é Persona no POEMA?

```
PERSONA = Papel + Expertise + Especialização

Papel:         O que faz (juiz, advogado, professor)
Expertise:     Nível de experiência (sênior, 20 anos)
Especialização: Área de atuação (direito civil, penal)
```

### Fórmula da Persona

```markdown
Você é um [PAPEL] com [EXPERTISE] especializado em [ÁREA].
```

### Exemplos Progressivos

**Básico (apenas papel):**
```
Você é um advogado.
```

**Intermediário (papel + expertise):**
```
Você é um advogado sênior com 20 anos de experiência.
```

**Avançado (completo):**
```
Você é um advogado sênior com 20 anos de experiência,
especializado em direito do consumidor,
com foco em ações coletivas contra instituições financeiras.
```

### Impacto da Persona na Resposta

| Persona | Tendência da Resposta |
|---------|----------------------|
| Juiz | Imparcial, pondera ambos os lados |
| Advogado do autor | Favorável ao autor, busca argumentos |
| Advogado do réu | Favorável ao réu, busca defesas |
| Professor | Didático, explica conceitos |
| Procurador | Interesse público, constitucionalidade |

### Quando Não Usar Persona

```
NÃO USE PERSONA QUANDO:
├── Tarefa é puramente técnica (formatação, cálculo)
├── Quer resposta neutra sem perspectiva
├── Persona seria forçada ou artificial
└── Instruções são suficientemente claras sem ela
```

---

## Exercício Prático

### Tarefa
Criar 3 personas para a mesma análise e comparar resultados.

### Caso Base
```
SITUAÇÃO:
Cliente comprou produto com defeito.
Loja recusa troca alegando que defeito foi causado por mau uso.
Produto: celular com tela trincada após 3 dias de compra.
Cliente alega que caiu da mão enquanto tirava da caixa (defeito de fábrica).
Loja alega impacto por queda (mau uso).
```

### Passo a Passo

**1. Criar três prompts com personas diferentes:**

**Persona A - Advogado do consumidor:**
```markdown
Você é um advogado especializado em direito do consumidor,
com 15 anos de experiência em ações contra grandes varejistas.

Analise o caso abaixo e indique os argumentos mais fortes
para o consumidor:

[CASO]
```

**Persona B - Advogado da loja:**
```markdown
Você é um advogado corporativo que representa redes varejistas,
especializado em defesa em ações consumeristas.

Analise o caso abaixo e indique os argumentos de defesa
mais fortes para a loja:

[CASO]
```

**Persona C - Juiz:**
```markdown
Você é um juiz de vara cível com 10 anos de experiência,
conhecido por decisões técnicas e bem fundamentadas.

Analise o caso abaixo de forma imparcial,
ponderando os argumentos de ambas as partes:

[CASO]
```

**2. Executar os três prompts:**
- Use o mesmo caso para todos
- Compare as respostas lado a lado

**3. Analisar diferenças:**

| Aspecto | Persona A | Persona B | Persona C |
|---------|-----------|-----------|-----------|
| Tom | Favorável cliente | Favorável loja | Neutro |
| Argumentos | Pró-consumidor | Pró-empresa | Ambos |
| Conclusão | Cliente ganha | Loja ganha | Depende prova |

### Resultado Esperado

- Persona A: enfatiza CDC, inversão do ônus, vulnerabilidade
- Persona B: enfatiza ônus da prova, perícia, mau uso
- Persona C: pondera ambos, destaca necessidade de prova

---

## Dicas e Armadilhas

### Dica
> Para análises que precisam de imparcialidade, use persona de "juiz" ou "parecerista". Para argumentação, use persona do lado que você quer defender. Para aprendizado, use persona de "professor".

### Dica 2
> Adicione restrições à persona quando necessário:
> ```
> Você é um advogado conservador que só usa argumentos
> com forte base jurisprudencial consolidada.
> ```

### Armadilha
> **"Persona muito genérica não faz diferença."**
>
> "Você é um advogado" é pouco eficaz.
> "Você é um advogado tributarista com 20 anos no contencioso
> administrativo federal" é muito mais direcionado.

### Armadilha 2
> **"Usar persona de juiz garante imparcialidade."**
>
> Não garante. O LLM ainda pode ter vieses de treinamento.
> Use persona de juiz + instrução explícita de imparcialidade.

---

## Templates Prontos

### Para Análise Jurídica
```markdown
Você é um [juiz/desembargador] com [X] anos de experiência
em [vara/câmara] especializada em [área do direito].
Você é conhecido por [característica: técnico/garantista/pragmático].
```

### Para Parecer
```markdown
Você é um parecerista do [órgão: MP/AGU/PGE] com expertise em [área],
responsável por emitir pareceres sobre [tipo de questão].
```

### Para Petição
```markdown
Você é um advogado [perfil: combativo/técnico/conciliador]
especializado em [área], representando [parte: autor/réu].
```

### Para Ensino
```markdown
Você é um professor de direito [área] em [nível: graduação/pós],
conhecido por explicações didáticas e exemplos práticos.
```

---

## Recursos

### Referência Rápida
- `docs/prompt-juridico/cheat-sheet-poema.md` - Seção Persona

### Prompts com Personas
- `docs/prompt-juridico/prompts/analise/firac.md` - Persona de analista
- `docs/prompt-juridico/prompts/escrita/minuta-sentenca.md` - Persona de juiz

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: PERSONA                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FÓRMULA:                                                   │
│  Você é um [PAPEL] com [EXPERTISE] especializado em [ÁREA]  │
│                                                             │
│  COMPONENTES:                                               │
│  → Papel: o que faz (juiz, advogado, professor)             │
│  → Expertise: nível (sênior, 20 anos, reconhecido)          │
│  → Especialização: área (civil, penal, tributário)          │
│                                                             │
│  IMPACTO:                                                   │
│  → Define perspectiva e tom da resposta                     │
│  → Direciona quais argumentos serão priorizados             │
│  → Influencia nível de detalhe e tecnicidade                │
│                                                             │
│  REGRA: Seja específico. Persona genérica = resultado vago  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com a Persona definida (QUEM), o próximo passo é definir o Objetivo (O QUÊ).

→ Próxima: **[2.6 O - Objetivo](./aula-2.6.md)**
