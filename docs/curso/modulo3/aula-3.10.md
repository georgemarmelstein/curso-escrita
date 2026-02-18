# 3.10 Introdução a Agentes

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Sistemas Agênticos
**Tempo estimado:** 40 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender o que são agentes de IA
- Diferenciar assistentes de agentes
- Experimentar o padrão ReAct em prática
- Identificar quando usar modo agêntico

---

## Por que Importa

**Para profissionais do Direito:**
- Agentes podem executar tarefas complexas autonomamente
- Pesquisa jurídica com busca real em tempo real
- Automação de fluxos que exigem múltiplas ferramentas

**Princípio:**
> Agentes não apenas respondem — eles planejam, executam e adaptam.

---

## Base Conceitual

### Assistente vs Agente

```
┌─────────────────────────────────────────────────────────────┐
│  ASSISTENTE vs AGENTE                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ASSISTENTE                     AGENTE                      │
│  ┌─────────────────┐            ┌─────────────────┐        │
│  │ Pergunta        │            │ Objetivo        │        │
│  │     ↓           │            │     ↓           │        │
│  │ Resposta        │            │ Planejamento    │        │
│  │                 │            │     ↓           │        │
│  │ (fim)           │            │ Ação 1          │        │
│  │                 │            │     ↓           │        │
│  │                 │            │ Observação      │        │
│  │                 │            │     ↓           │        │
│  │                 │            │ Ação 2          │        │
│  │                 │            │     ↓           │        │
│  │                 │            │ ...             │        │
│  │                 │            │     ↓           │        │
│  │                 │            │ Conclusão       │        │
│  └─────────────────┘            └─────────────────┘        │
│                                                             │
│  REATIVO                        PROATIVO                    │
│  Uma resposta                   Múltiplas etapas            │
│  Conhecimento interno           Ferramentas externas        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### O Padrão ReAct

```
ReAct = Reasoning + Acting

┌─────────────────────────────────────────────────────────────┐
│  CICLO ReAct                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. THOUGHT (Pensamento)                                    │
│     "Preciso encontrar jurisprudência sobre X..."           │
│                          │                                  │
│                          ▼                                  │
│  2. ACTION (Ação)                                           │
│     [Busca web: "jurisprudência STJ X"]                     │
│                          │                                  │
│                          ▼                                  │
│  3. OBSERVATION (Observação)                                │
│     "Encontrei 3 acórdãos relevantes..."                    │
│                          │                                  │
│                          ▼                                  │
│  4. THOUGHT (Novo ciclo ou conclusão)                       │
│     "Agora preciso analisar os acórdãos..."                 │
│              ou                                             │
│     "Tenho informação suficiente, posso concluir."          │
│                          │                                  │
│                          ▼                                  │
│  ANSWER (Resposta final quando satisfeito)                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Ferramentas de Agentes

| Ferramenta | Função | Exemplo de Uso |
|------------|--------|----------------|
| **Busca Web** | Pesquisar internet | Jurisprudência recente |
| **Leitura de Arquivo** | Acessar documentos | Analisar processo anexado |
| **Código** | Executar cálculos | Atualização monetária |
| **API** | Acessar sistemas | Consulta processual |
| **RAG** | Buscar em base própria | Base de precedentes |

### Níveis de Autonomia

```
PASSIVO          ASSISTIDO         SUPERVISIONADO      AUTÔNOMO
   │                 │                   │                 │
   ▼                 ▼                   ▼                 ▼
┌──────┐         ┌──────┐           ┌──────┐          ┌──────┐
│Só    │         │Sugere│           │Executa│          │Decide│
│respon│         │e     │           │com    │          │e     │
│de    │         │espera│           │check- │          │executa│
└──────┘         └──────┘           │points │          │sozinho│
                                    └──────┘          └──────┘
```

---

## Exercício Prático

### Tarefa
Experimentar padrão ReAct com busca web.

### Passo a Passo

**1. Ativar modo agêntico (busca web):**

No Claude, ative a busca web para permitir que o modelo
acesse informações em tempo real.

**2. Prompt que ativa ReAct:**

```markdown
# PESQUISA JURISPRUDENCIAL AGÊNTICA

## Tarefa
Pesquise jurisprudência recente do STJ sobre
prescrição em ações de cobrança de FGTS.

## Metodologia ReAct
Mostre seu raciocínio:
1. THOUGHT: O que você está pensando
2. ACTION: O que vai fazer (buscar, ler, etc.)
3. OBSERVATION: O que encontrou
4. Repita até ter informação suficiente

## Entrega Final
Após pesquisar, apresente:
- 3-5 precedentes relevantes com ementas
- Tese jurídica consolidada
- Observação sobre eventual divergência
```

**3. Observar o comportamento:**

O agente deve:
- Pensar: "Preciso buscar jurisprudência do STJ..."
- Agir: [Realizar busca web]
- Observar: "Encontrei os seguintes resultados..."
- Pensar: "Preciso verificar se há tese repetitiva..."
- Agir: [Nova busca]
- Observar: "Tema repetitivo 608..."
- Concluir: [Apresentar síntese]

**4. Comparar com modo não-agêntico:**

Faça a mesma pergunta SEM busca web ativada.
Compare:
- Precisão das informações
- Atualidade dos dados
- Citação de fontes

### Checklist de Verificação

```
[ ] Ativei busca web
[ ] Observei ciclo ReAct em ação
[ ] Identifiquei thoughts, actions, observations
[ ] Comparei com modo não-agêntico
```

---

## Quando Usar Agentes

### Use Agentes Quando:

```
✓ Informação precisa ser atual (jurisprudência recente)
✓ Tarefa exige múltiplas fontes
✓ Precisa de verificação externa
✓ Cálculos complexos são necessários
✓ Fluxo tem múltiplas etapas dependentes
```

### Não Use Agentes Quando:

```
✗ Tarefa é simples e direta
✗ Conhecimento paramétrico é suficiente
✗ Velocidade é prioridade máxima
✗ Precisa de controle total sobre o processo
✗ Informação sensível não deve sair do ambiente
```

---

## Dicas e Armadilhas

### Dica
> Peça para o agente MOSTRAR seu raciocínio. Isso permite que você acompanhe e corrija o curso se necessário.

### Dica 2
> Use checkpoints em tarefas longas. Peça: "Antes de continuar, mostre o que encontrou até agora."

### Armadilha
> **"Agente sempre é melhor."**
>
> Não. Agentes são mais lentos e caros.
> Use quando a tarefa realmente exige.

### Armadilha 2
> **"Posso confiar cegamente no agente."**
>
> Não! Agentes podem errar em qualquer etapa.
> Revise resultados intermediários e finais.

---

## Exemplos de Uso Agêntico

### Pesquisa Jurisprudencial

```markdown
Pesquise e sintetize:
1. [BUSCA] Jurisprudência do STJ sobre [tema]
2. [BUSCA] Temas repetitivos relacionados
3. [ANÁLISE] Compare posições encontradas
4. [SÍNTESE] Apresente tese consolidada
```

### Verificação de Informação

```markdown
Verifique a informação abaixo:
"O prazo prescricional para X é de 5 anos"

1. [BUSCA] Legislação atual sobre prazo prescricional
2. [BUSCA] Jurisprudência recente
3. [COMPARAÇÃO] Está correto?
4. [RESPOSTA] Confirme ou corrija com fontes
```

### Análise com Dados Externos

```markdown
Analise o processo anexado considerando:
1. [LEITURA] Ler processo anexado
2. [BUSCA] Jurisprudência aplicável
3. [ANÁLISE] Aplicar precedentes ao caso
4. [SÍNTESE] Parecer fundamentado
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: INTRODUÇÃO A AGENTES                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DIFERENÇA FUNDAMENTAL:                                     │
│  → Assistente: pergunta → resposta                          │
│  → Agente: objetivo → plano → ações → resultado             │
│                                                             │
│  PADRÃO ReAct:                                              │
│  → Thought: pensar sobre o que fazer                        │
│  → Action: executar ação (busca, código, etc.)              │
│  → Observation: observar resultado                          │
│  → Repetir até conclusão                                    │
│                                                             │
│  FERRAMENTAS:                                               │
│  → Busca web, leitura de arquivos, código, APIs             │
│                                                             │
│  QUANDO USAR:                                               │
│  → Informação atual, múltiplas fontes, verificação          │
│                                                             │
│  QUANDO NÃO USAR:                                           │
│  → Tarefas simples, velocidade crítica, controle total      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Agentes usam ferramentas. Uma das mais poderosas é RAG — busca em bases de conhecimento próprias.

→ Próxima: **[3.11 RAG Avançado](./aula-3.11.md)**
