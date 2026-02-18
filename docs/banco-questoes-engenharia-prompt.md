# BANCO DE QUESTÕES - ENGENHARIA DE PROMPTS

**Módulo:** 2 - Engenharia de Prompt
**Nível:** Fácil
**Total:** 10 Questões (múltipla escolha)

---

## Questão 1 - As Três Modalidades de Prompt

Existem três formas principais de interagir com LLMs. O **Vibe Prompting** usa linguagem natural conversacional. O **Prompt Estruturado** organiza as instruções com marcadores e tags. A terceira modalidade é o **Prompt Agêntico**.

O que caracteriza o Prompt Agêntico?

a) Comunicação apenas por comandos de voz
b) Uso exclusivo de emojis para transmitir instruções
c) Orquestração de tarefas complexas com ferramentas, skills e workflows encadeados
d) Prompts escritos em linguagem de programação tradicional como Python

**Gabarito:** C

---

## Questão 2 - Processo Auto-regressivo

Os LLMs funcionam como "máquinas de calcular textos" e geram suas respostas de forma **auto-regressiva**.

O que significa dizer que um LLM é auto-regressivo?

a) O modelo aprende e melhora automaticamente a cada conversa
b) O modelo gera o texto um token (palavra) de cada vez, onde cada novo token depende dos anteriores
c) O modelo corrige automaticamente seus próprios erros antes de exibir a resposta
d) O modelo regride para versões anteriores quando comete erros

**Gabarito:** B

---

## Questão 3 - Espelhamento de Inteligência

Há um conceito importante na engenharia de prompt chamado **espelhamento de inteligência**, que sugere uma correlação entre a qualidade do prompt e a qualidade da resposta.

O que esse conceito significa na prática?

a) O LLM sempre supera a inteligência do usuário
b) Todos os usuários obtêm resultados idênticos, independente de como escrevem
c) Prompts vagos e mal formulados tendem a gerar respostas igualmente fracas
d) O modelo imita fisicamente as expressões do usuário

**Gabarito:** C

---

## Questão 4 - Few Shot Learning

Uma técnica poderosa em engenharia de prompt é o **Few Shot Learning** (aprendizado com poucos exemplos), baseada na ideia de que "inputs nobres geram outputs nobres".

Como funciona essa técnica?

a) Fornecer exemplos do padrão desejado no próprio prompt para que o modelo aprenda o formato esperado
b) Treinar o modelo do zero com milhões de dados novos
c) Usar o mínimo possível de palavras para economizar tokens
d) Desligar o raciocínio do modelo para respostas mais diretas

**Gabarito:** A

---

## Questão 5 - Cadeia de Pensamento (Chain of Thought)

A técnica **Chain of Thought** (Cadeia de Pensamento) é frequentemente ativada com frases como "Respire fundo e pense passo a passo" ou "Vamos resolver isso etapa por etapa".

Qual é o objetivo dessa técnica?

a) Fazer o modelo responder mais rápido, pulando etapas desnecessárias
b) Estimular o modelo a verbalizar seu raciocínio intermediário antes de chegar à resposta final
c) Reduzir o consumo de tokens limitando o tamanho da resposta
d) Forçar o modelo a usar apenas frases curtas e objetivas

**Gabarito:** B

---

## Questão 6 - Prompts Emocionais

Em engenharia de prompt, é possível usar **estímulos emocionais** para influenciar o desempenho do modelo. Existem estímulos positivos (como "Isso é muito importante para minha carreira") e estímulos negativos.

Qual frase representa um **estímulo negativo**?

a) "Acredito no seu potencial. Dê o seu melhor."
b) "Você tem muito orgulho da tarefa que realiza."
c) "Vou te dar 100 dólares se alcançar um resultado excelente."
d) "Talvez essa tarefa esteja acima de suas capacidades."

**Gabarito:** D

---

## Questão 7 - Degradação de Contexto (Context Rot)

Os LLMs possuem uma **janela de contexto** limitada. Quando fornecemos textos muito longos, ocorre um fenômeno chamado **degradação de contexto**, também conhecido como "Lost in the Middle".

O que acontece nesse fenômeno?

a) O modelo processa todo o texto com a mesma atenção e qualidade
b) O modelo tende a ignorar ou perder informações localizadas no meio de textos longos
c) O modelo automaticamente cria um resumo perfeito do conteúdo
d) O modelo exibe uma mensagem de erro e para de funcionar

**Gabarito:** B

---

## Questão 8 - Qualidade do Estilo

Um dos três grandes desafios da engenharia de prompt é a **Qualidade do Estilo** — garantir que o modelo produza respostas no formato e tom desejados.

Como se alcança a Qualidade do Estilo em um prompt?

a) Aumentando o tamanho do modelo para versões mais caras
b) Usando instruções de formatação, exemplos de referência e indicação de público-alvo
c) Conectando o modelo à internet para buscar estilos atualizados
d) Removendo todas as instruções e deixando o modelo livre para criar

**Gabarito:** B

---

## Questão 9 - Prompt de Sistema

Os LLMs modernos operam com diferentes camadas de instruções. Uma delas é o **Prompt de Sistema**, que funciona como um "contrato de comportamento" definido pelo desenvolvedor, estabelecendo a identidade e os limites do modelo.

Qual a principal característica do Prompt de Sistema?

a) É a mensagem digitada pelo usuário final em cada conversa
b) É visível e editável pelo usuário comum a qualquer momento
c) Define identidade, capacidades, comportamentos e limites do modelo antes de qualquer interação
d) Serve apenas para exibir mensagens de erro técnico

**Gabarito:** C

---

## Questão 10 - Reset de Contexto

Os LLMs, em seu modo tradicional, não possuem **aprendizado contínuo**. Isso significa que sofrem um "reset de contexto" entre conversas.

O que isso implica para o usuário?

a) Cada nova conversa começa do zero, sem memória das conversas anteriores
b) O modelo acumula conhecimento e melhora progressivamente com cada interação
c) O modelo guarda um histórico permanente de todas as conversas do usuário
d) O usuário precisa reinstalar o modelo a cada nova sessão

**Gabarito:** A

---

## Resumo do Gabarito

| Questão | Resposta | Tema |
|---------|----------|------|
| 1 | C | Prompt Agêntico |
| 2 | B | Processo Auto-regressivo |
| 3 | C | Espelhamento de Inteligência |
| 4 | A | Few Shot Learning |
| 5 | B | Chain of Thought |
| 6 | D | Prompts Emocionais |
| 7 | B | Degradação de Contexto |
| 8 | B | Qualidade do Estilo |
| 9 | C | Prompt de Sistema |
| 10 | A | Reset de Contexto |

**Distribuição:** A (2), B (4), C (3), D (1)
