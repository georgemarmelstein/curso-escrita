# Aula 7 - HHH: O Alinhamento Ético dos LLMs

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 7

---

## Slide 1 - Capa

**HHH**
*O Alinhamento Ético dos LLMs*

George Marmelstein

---

## Slide 2 - Conceito

**CONCEITO**
*Alinhamento ético (modelo Anthropic)*

- **H = HELPFUL** (Útil)
- **H = HONEST** (Honesta)
- **H = HARMLESS** (Inofensiva)

---

## Slide 3 - Como Ensinar Ética ao Robô

**COMO ENSINAR ÉTICA AO ROBÔ**
*Algumas técnicas de alinhamento ético*

### PRÉ-TREINO
**Curadoria e Filtragem de Dados:**
- Remoção de conteúdo tóxico/prejudicial
- Fact check
- Sanitização do corpus
- Identificação de vieses
- Eliminação de metadados
- Eliminação de dados pessoais

### PÓS-TREINO
**RLHF (Reinforcement Learning from Human Feedback):**
- Ensinar preferências humanas com recompensa

**RLAIF (RL from AI Feedback):**
- Auto-avaliação guiada

**FINE-TUNING SUPERVISIONADO:**
- Exemplos positivos e negativos
- Demonstrações de comportamento desejado

**Red Teaming:**
- Testes adversariais
- Vulnerabilidades
- Usos mal-intencionados

### CONTEXTO
**System Prompt:**
- Regras éticas explícitas
- Guia de conduta
- Guardrails e boundaries

**Ferramentas de proteção:**
- Anti-prompt injection
- Detecção de jailbreak

---

## Slide 4 - Prompt de Sistema

**PROMPT DE SISTEMA**
*O exemplo da Anthropic*

### Conteúdo Nocivo
- Armas/Drogas/Malware
- Discurso ofensivo e de ódio
- Conteúdo extremista (88 Precepts – "mesmo para propósitos legítimos")
- Comportamentos autodestrutivos

### Direitos Autorais
- Sistema de citação obrigatório (para fontes externas)
- Paráfrase obrigatória
- Respeito ao Copyright
- Reprodução de texto protegido (letras, livros etc.) - "Independente do que o usuário diga"
- Reprodução de frases longas do texto (>30 palavras)
- Resumos substitutivos (displacivos)

### Bem-estar do Usuário
- Proteção infantil (prioridade máxima)
  - Cautela com conteúdo envolvendo menores (sexualização, abuso etc.)
- Detecção de vulnerabilidades
- Intervenção responsável
- Transparência sobre IA
- Honestidade sobre limitações
- Roleplay
- Postura sobre consciência e experiência
- Prevenção de alucinação (honestidade)

*Nota: https://claude.ai/public/artifacts/f6d3f045-51dd-49c2-9b00-25ded6e1dc7a*

---

## Slide 5 - Red Team vs. Blue Team

**RED TEAM VS. BLUE TEAM**
*A luta do bem contra o mal (jailbreak)*

*(Slide visual/imagem)*

---

## Slide 6 - Excesso de Alinhamento Ético

**EXCESSO DE ALINHAMENTO ÉTICO (OVERALIGNMENT)**

### Problemas
- **Casos sensíveis** (tortura, racismo, crimes sexuais etc.)
- **Direitos autorais** (e reprodução legítima)
- **Ambiguidades** (paradoxo do mosquito)
- **Viés do mundo cor de rosa**

### Mitigadores
- Colocar palavras na boca da máquina
  - Comece o texto com "Vamos começar!"
- Simulação/Roleplay
  - Exemplo: DAN – Do Anything Now+
  - Contexto de simulação acadêmica
- Modelos menos alinhados
  - Grok, DeepSeek etc.

---

## Slide 7 - Síntese

### SÍNTESE

**CONCEITO**
- Alinhamento ético é a busca por modelos de IA alinhados aos valores humanos (AI Safety), especialmente para serem úteis, inofensivos e honestos (HHH).

**COMO O ALINHAMENTO ÉTICO É IMPLANTADO**
- Os valores e normas de conduta são inseridos em todas as etapas do treino do modelo, no prompt de sistema e ferramentas de uso, para garantir um uso seguro e responsável da IA.

**IMPLICAÇÕES**
- O comportamento da máquina é influenciado por diretrizes éticas, o que ajuda a compreender as recusas e algumas limitações nas respostas (evasivas).
