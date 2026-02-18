# Aula 12 - Introdução ao Mundo dos Agentes

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 7

---

## Slide 1 - Capa

**INTRODUÇÃO AO MODO AGÊNTICO**

George Marmelstein

---

## Slide 2 - Evolução Histórica

**EVOLUÇÃO HISTÓRICA**

1. Lançamento do ChatGPT 3.5 (Assistente – Chatbot)
2. Plugins e GPTs Customizados
3. Perplexity (busca)
4. NotebookLM
5. N8N (e outros)
6. Manus e Deep Research
7. ChatGPT 5
8. Claude Sonnet 4.5 e Claude Code

---

## Slide 3 - Modelos Simples

**MODELOS SIMPLES**

**LARGE LANGUAGE MODEL**

- **Entrada/Saída:** Texto → Texto
- **Comportamento:** Conversacional (reativo)
- **Limitação:** Limitado pela janela de contexto

---

## Slide 4 - Superagentes

**SUPERAGENTES**

- **Entrada/Saída:** Texto → Orquestrador → Artefato
- **Comportamento:** Planeja - Realiza – Executa
- **Característica:** Certa autonomia (agência), Proativo

### Componentes
- Tools (Ferramentas)
- Skills (Habilidades)
- Resources (Aplicativos)
- Multimodalidade
- Extended Thinking
- Artefatos
- Deep Research
- MCP

---

## Slide 5 - Arquitetura Agêntica

**ARQUITETURA AGÊNTICA**

### 1. PLANEJAMENTO E AÇÃO
**ReAct:**
- Pensamento
- Ação
- Observação
- Resposta final

### 2. FERRAMENTAS (TOOLS)
- Busca WEB
- Busca API
- Código
- Cálculo

### 3. MEMÓRIA E RESOURCES (RAG)
- Memória persistente
- Acesso a banco de dados (MCP)
- Pensamento extendido

### 4. SKILLS (HABILIDADES)
- Instruções condicionais
- Ativadas quando necessário
- Otimização de tokens

### 5. AGENTICIDADE (AUTONOMIA)
- Passivo (baixa autonomia)
- Human-in-the-loop
- Autonomia total

---

## Slide 6 - Qual o Papel do Jurista na Justiça Aumentada?

**QUAL O PAPEL DO JURISTA NA JUSTIÇA AUMENTADA?**

1. **ENGENHARIA DE PROMPT** (Conversar com a máquina)
2. **ENGENHARIA DE CONTEXTO** (Curadoria de conhecimento)
3. **ENGENHARIA DE WORKFLOW** (Design de sistema decisórios)
4. **METACOGNIÇÃO** (Modelagem cognitiva)
5. **CURADORIA DE VALORES** (Modelagem ética)
6. **AUDITORIA EPISTÊMICA** (Melhoria contínua)
7. **DECISOR ESTRATÉGICO** (Reserva de humanidade)

---

## Slide 7 - Dos Assistentes aos Agentes

**DOS ASSISTENTES AOS AGENTES**

### ASSISTENTES SIMPLES
- Uma tarefa de cada vez
- Uma ferramenta por solicitação
- Um único modelo trabalhando
- Reativo
- Segue instruções sem autonomia

### MULTI AGENTES
- Múltiplos modelos orquestrados
- Tarefas paralelas e em sequência
- Várias ferramentas por solicitação
- Proativo
- Reflete, Planeja e age com certa autonomia
