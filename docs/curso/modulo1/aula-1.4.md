# 1.4 O Conhecimento da Máquina

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Identificar as 4 fontes de conhecimento dos LLMs
- Entender limitações do conhecimento paramétrico (cutoff)
- Decidir quando usar cada tipo de conhecimento
- Aplicar a fonte correta para cada tarefa

---

## Por que Importa

**Para profissionais do Direito:**
- Saber que conhecimento paramétrico tem data de corte evita erros
- Entender quando usar busca web vs conhecimento interno
- Distinguir quando anexar documento vs confiar na "memória"

---

## Base Conceitual

### As 4 Fontes de Conhecimento

```
┌─────────────────────────────────────────────────────────────┐
│                   FONTES DE CONHECIMENTO                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. PARAMÉTRICO        "O que está na cabeça"               │
│     └── Aprendido no treinamento                            │
│     └── Congelado, datado (cutoff)                          │
│                                                             │
│  2. DE SISTEMA         "O código de conduta"                │
│     └── Prompt de sistema, guardrails                       │
│     └── Configurado pela empresa                            │
│                                                             │
│  3. DO USUÁRIO         "O que você fornece"                 │
│     └── Via prompt ou anexos                                │
│     └── Dinâmico, controlado por você                       │
│                                                             │
│  4. BUSCADO            "O que ele vai buscar"               │
│     └── Internet, APIs, bases de dados                      │
│     └── Tempo real, mas pode ter ruído                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Características do Conhecimento Paramétrico

| Característica | Implicação |
|----------------|------------|
| **Probabilístico** | Pode errar fatos específicos |
| **Frequentista** | Sabe mais sobre temas comuns |
| **Estático** | Não se atualiza após treino |
| **Congelado** | Data de corte (cutoff) |
| **Datado** | Não sabe eventos recentes |

### Data de Corte (Cutoff)

```
CONHECIMENTO PARAMÉTRICO = JORNAL ANTIGO

GPT-4:     setembro 2023
Claude 3:  abril 2024
Claude 4:  maio 2025

Eventos após essa data: modelo NÃO sabe
(a menos que busque na web)
```

### Quando Usar Cada Fonte

| Tarefa | Fonte Recomendada |
|--------|-------------------|
| Conceitos jurídicos estáveis | Paramétrico |
| Lei específica atualizada | Usuário (anexo) |
| Jurisprudência recente | Buscado (web) |
| Análise de processo | Usuário (anexo) |
| Redação de texto | Paramétrico + Usuário |

---

## Exercício Prático

### Tarefa 1: Testar Conhecimento Paramétrico

**Passo a passo:**
```
Pergunta: "Quem é o atual presidente do STF?"

Faça com busca DESATIVADA.
Observe: a resposta está correta ou desatualizada?
```

### Tarefa 2: Comparar com Busca

**Passo a passo:**
```
Mesma pergunta com busca ATIVADA.
Compare as respostas.
```

| Aspecto | Sem Busca | Com Busca |
|---------|-----------|-----------|
| Velocidade | Mais rápido | Mais lento |
| Atualização | Pode estar errado | Atualizado |
| Fonte | Parâmetros | Web |

### Tarefa 3: Conhecimento do Usuário

**Passo a passo:**
```
1. Encontre uma lei recente (após o cutoff do modelo)
2. Cole o texto da lei no prompt
3. Pergunte sobre ela

Observe: o modelo consegue analisar corretamente
algo que não estava no treinamento.
```

### Checklist de Verificação

```
[ ] Testei conhecimento paramétrico (pergunta sem busca)
[ ] Testei conhecimento buscado (pergunta com busca)
[ ] Testei conhecimento do usuário (anexei documento)
[ ] Sei a data de corte do modelo que uso
[ ] Entendo quando usar cada fonte
```

---

## Dicas e Armadilhas

### Dica
> Para informações que mudam (leis, jurisprudência, composição de tribunais), sempre use busca web ou anexe o documento atualizado. Nunca confie apenas no conhecimento paramétrico.

### Dica 2
> O conhecimento paramétrico é excelente para:
> - Estrutura de textos
> - Conceitos jurídicos consolidados
> - Padrões de argumentação
> - Formatação e estilo

### Armadilha
> **"O Claude sabe tudo sobre direito brasileiro."**
>
> Sabe muito, mas com vieses:
> - **Frequentista:** sabe mais sobre temas comuns na internet
> - **Datado:** não sabe mudanças recentes
> - **Probabilístico:** pode errar detalhes específicos

### Armadilha 2
> **"Vou perguntar sobre a Lei X de 2025."**
>
> Se a lei é posterior ao cutoff, o modelo não conhece.
> Ele pode inventar (alucinar) ou admitir que não sabe.
> Sempre anexe leis recentes.

---

## Recursos

### Analogia com o Cérebro

```
CONHECIMENTO PARAMÉTRICO = Memória de longo prazo
→ O que está "na cabeça" do LLM
→ Aprendido no treinamento
→ Base para linguagem

CONHECIMENTO DO USUÁRIO = Documento na mão
→ Inserido no prompt ou anexo
→ Você controla

CONHECIMENTO BUSCADO = Consulta à biblioteca
→ Busca na web em tempo real
→ Atualizado mas pode ter ruído
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 4 - Conhecimento da Máquina.pptx`

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  4 FONTES DE CONHECIMENTO:                                  │
│  1. Paramétrico (treinamento, datado)                       │
│  2. De Sistema (guardrails, configurações)                  │
│  3. Do Usuário (prompt, anexos)                             │
│  4. Buscado (web, APIs)                                     │
│                                                             │
│  CONHECIMENTO PARAMÉTRICO:                                  │
│  → Probabilístico, frequentista, estático                   │
│  → Data de corte (cutoff)                                   │
│  → Bom para linguagem, ruim para fatos recentes             │
│                                                             │
│  IMPLICAÇÃO:                                                │
│  → O segredo é saber quando usar cada fonte                 │
│  → Para isso, entender como parâmetros são construídos      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido de onde vem o conhecimento, a próxima pergunta é: como esses parâmetros são construídos?

→ Próxima: **[1.5 Como Treinar um LLM](./aula-1.5.md)**
