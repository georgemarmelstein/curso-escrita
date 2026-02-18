# PLANO DE SLIDES - AULA 03
## Arquitetando Sistemas Agênticos: Do Fluxo de Trabalho ao Fluxo de Agentes

---

## Metadados do Planejamento

- **Total de slides planejados:** 18 slides
- **Paleta:** SUPER (Gold #BE9C6D, Cream #FFF4E4, Dark #0a0a12, Green #4ade80, Red #ef4444)
- **Narrativa visual:** Blocos de Lego (componentes modulares que se encaixam)
- **Filosofia:** MOSTRAR, não CONTAR - cada slide visualiza um conceito
- **Interatividade:** Hover states, clicks, animações pedagógicas
- **Padrões estabelecidos:** Mac/Windows toggle, glassmorphism, PALETA SUPER

---

## ESTRUTURA GERAL

| # | Slide | Bloco | Tipo | Duração estimada |
|---|-------|-------|------|------------------|
| 1 | Capa | - | CAPA | - |
| 2 | Quote Karpathy (Vibe Coding) | 1 | QUOTE | 1 min |
| 3 | O Caos do Vibe Coding | 1 | DEMO INTERATIVO | 3 min |
| 4 | Os 5 Problemas | 1 | VISUALIZAÇÃO | 2 min |
| 5 | Quote Al Harris | 2 | QUOTE | 1 min |
| 6 | O Ciclo Completo | 2 | DEMO INTERATIVO | 4 min |
| 7 | Analogia Judicial | 2 | VISUALIZAÇÃO | 2 min |
| 8 | Duas Noções de Workflow | 3 | DEMO INTERATIVO | 4 min |
| 9 | Quote Anthropic | 3 | QUOTE | 1 min |
| 10 | Quote Jesse Vincent | 4 | QUOTE | 1 min |
| 11 | Fluxo Superpowers | 4 | DEMO INTERATIVO | 5 min |
| 12 | Iron Laws | 4 | VISUALIZAÇÃO | 3 min |
| 13 | 5 Padrões Anthropic | 5 | DEMO INTERATIVO | 6 min |
| 14 | Quando Usar Cada Padrão | 5 | VISUALIZAÇÃO | 3 min |
| 15 | Mini-Sistema: Brainstorm | 6 | DEMO INTERATIVO | 4 min |
| 16 | Pipeline Sentença Completo | 7 | DEMO INTERATIVO | 4 min |
| 17 | O Insight Final | 8 | VISUALIZAÇÃO | 2 min |
| 18 | Resumo + Próximos Passos | 8 | FECHAMENTO | 2 min |

---

## SLIDE 1: CAPA

### Propósito
Estabelecer o tema da aula usando a metáfora de blocos/Lego que se encaixam para formar sistemas.

### Opção A: Lego Manual de Instruções
**Conceito:** Uma página de manual de instruções Lego mostrando os componentes da aula.
- Header dourado com "SET #2026-03 - Arquitetura de Agentes"
- 6-7 "peças" listadas: Workflow, Agent, Pipeline, Gate, Parallelization, etc.
- Diagrama de montagem no rodapé
- Estética familiar e educacional

**Interatividade:** Nenhuma (slide de abertura)

### Opção B: Mesa do Construtor
**Conceito:** Vista de uma mesa de trabalho com blocos Lego sendo montados.
- Blocos 3D espalhados com labels (LLM, HARNESS, TOOLS, MEMORY)
- Alguns conectados, outros soltos
- Glow onde blocos se conectam
- Baseplate no fundo

**Interatividade:** Blocos aparecem em sequência (animação de entrada)

### Opção C: Blocos Flutuantes
**Conceito:** Blocos abstratos flutuando no espaço, conectando-se.
- 6 blocos com cores distintas (WORKFLOW, AGENT, PIPELINE, etc.)
- Linhas de conexão entre eles
- Equação no rodapé: "Workflow + Agent + Gates = Sistema"

**Interatividade:** Blocos flutuam sutilmente

### RECOMENDAÇÃO: Opção A (Manual)
Mais pedagógico, estabelece expectativa de "passo a passo".

---

## SLIDE 2: QUOTE KARPATHY (Vibe Coding)

### Propósito
Introduzir o conceito de Vibe Coding com a citação que viralizou.

### Citação
> *"Vibe coding is when you're just kind of vibing with the AI and seeing what happens."*
> — Andrej Karpathy, Fevereiro 2025

### Opção A: Terminal Glitch
**Conceito:** Quote aparece como se fosse digitada em um terminal, mas com glitches visuais.
- Fundo escuro com scanlines
- Texto aparece letra por letra
- Glitches ocasionais (RGB shift)
- Vibe de "algo está errado"

### Opção B: Neon Retro
**Conceito:** Estética synthwave/retro com a quote em neon.
- Fundo gradiente roxo/rosa
- Texto em fonte neon
- Grid perspectiva no fundo
- Atmosfera de "promessa brilhante"

### Opção C: Minimalista Cinematográfico
**Conceito:** Quote grande com autor embaixo, fundo com imagem abstrata de código.
- Seguir padrão dos quotes anteriores (demo-quote-karpathy.html, demo-quote-boris.html)
- Aspas grandes douradas
- Fade-in elegante

### RECOMENDAÇÃO: Opção A (Terminal Glitch)
Antecipa o problema - algo errado por trás da promessa.

---

## SLIDE 3: O CAOS DO VIBE CODING

### Propósito
Mostrar visualmente o loop infinito de correções que Vibe Coding produz.

### Conteúdo
```
Usuário: "Faz um sistema de gestão"
   ↓
LLM: [gera código genérico]
   ↓
Usuário: "Não, quero com login"
   ↓
LLM: [adiciona auth, quebra algo]
   ↓
Usuário: "Agora o relatório não funciona"
   ↓
[LOOP INFINITO]
```

### Opção A: Chat Animado
**Conceito:** Simula uma conversa de chat que vai degenerando.
- Bolhas de chat alternando usuário/LLM
- Cada iteração adiciona mais confusão
- Scroll infinito implícito
- Indicador visual de "SPAGHETTI CHAT" no final

**Interatividade:**
- Auto-play: mensagens aparecem em sequência
- Botão "Reset" para recomeçar

### Opção B: Espiral Descendente
**Conceito:** Diagrama em espiral mostrando o loop.
- Centro: tarefa original
- Espiral expandindo com cada correção
- Cores vão de verde (início) para vermelho (caos)
- Ícones de warning acumulando

**Interatividade:**
- Hover em cada nível mostra o problema daquele estágio

### Opção C: Terminal de Erro
**Conceito:** Terminal simulado mostrando comandos falhando em sequência.
- Prompt → comando → erro → retry → erro diferente
- Stack traces aparecendo
- Contador de "TENTATIVAS: 47"
- Custo acumulado visível

**Interatividade:**
- Simula typing em tempo real

### RECOMENDAÇÃO: Opção A (Chat Animado)
Mais familiar para o público, mostra exatamente o que acontece.

---

## SLIDE 4: OS 5 PROBLEMAS DO VIBE CODING

### Propósito
Listar e visualizar os 5 problemas identificados.

### Conteúdo
1. Drift de Requisitos
2. Contexto Perdido
3. Código Espaguete
4. Débito Técnico Invisível
5. Custo de Manutenção

### Opção A: Cards com Ícones
**Conceito:** 5 cards em grid, cada um com ícone representativo.
- Cards glassmorphism
- Ícones abstratos para cada problema
- Hover revela descrição expandida
- Cores de warning (âmbar/vermelho)

**Interatividade:**
- Click em card expande descrição
- Highlight progressivo

### Opção B: Iceberg
**Conceito:** Metáfora do iceberg - problemas visíveis e ocultos.
- Acima da água: "Não funciona" (visível)
- Abaixo da água: os 5 problemas reais (invisíveis)
- Scroll vertical revela profundidade

**Interatividade:**
- Scroll/click revela problemas ocultos

### Opção C: Termômetro de Risco
**Conceito:** Medidor vertical com os 5 níveis de problema.
- De "Aceitável" a "Crítico"
- Cada nível tem cor e descrição
- Indicador animado subindo

**Interatividade:**
- Hover em cada nível destaca

### RECOMENDAÇÃO: Opção A (Cards com Ícones)
Mais versátil, permite exploração individual.

---

## SLIDE 5: QUOTE AL HARRIS

### Propósito
Introduzir a solução com a citação-chave.

### Citação
> *"If you get the spec right, the code almost writes itself."*
> — Al Harris, Amazon Kiro

### Opção A: Blueprint Style
**Conceito:** Quote como anotação em um blueprint técnico.
- Fundo azul de blueprint
- Quote como nota manuscrita
- Linhas técnicas ao redor

### Opção B: Terminal Success
**Conceito:** Contraste com slide anterior - terminal com sucesso.
- Fundo escuro
- $ sign verde
- Quote como output de comando bem-sucedido
- Checkmarks verdes

### Opção C: Cinematográfico Padrão
**Conceito:** Seguir padrão dos quotes anteriores.
- Aspas douradas
- Fonte elegante
- Background com imagem de Amazon/código

### RECOMENDAÇÃO: Opção B (Terminal Success)
Contrasta com o "caos" anterior, mostra a luz no fim do túnel.

---

## SLIDE 6: O CICLO DE DESENVOLVIMENTO COMPLETO

### Propósito
Visualizar as 9 etapas do ciclo de desenvolvimento agêntico.

### Conteúdo
1. Ideação (brainstorm)
2. Planejamento (write-plan)
3. Especificação (arquitetura)
4. Implementação (codificação)
5. Teste (validação)
6. Correção (debugging)
7. Aprimoramento (refinamento)
8. Validação Final
9. Desenvolvimento Contínuo

### Opção A: Ciclo Interativo
**Conceito:** Círculo/wheel com as 9 etapas.
- Cada etapa é um segmento do círculo
- Click em segmento expande detalhes
- Seta indicando fluxo circular
- Centro mostra "Onde você está"

**Interatividade:**
- Click em cada etapa mostra descrição
- Highlight sequencial automático
- Keyboard navigation (←/→)

### Opção B: Pipeline Vertical
**Conceito:** Diagrama vertical tipo waterfall com loops.
- Etapas empilhadas verticalmente
- Setas de progresso
- Loops de feedback visíveis
- Gates entre etapas críticas

**Interatividade:**
- Scroll revela etapas
- Hover destaca dependências

### Opção C: Blocos de Lego Encaixando
**Conceito:** 9 blocos Lego que se encaixam em sequência.
- Cada bloco é uma etapa
- Animação mostra encaixe progressivo
- Cores diferentes por tipo (planejamento=azul, execução=verde, etc.)

**Interatividade:**
- Blocos encaixam em sequência
- Click em bloco mostra detalhes

### RECOMENDAÇÃO: Opção A (Ciclo Interativo)
Melhor representa a natureza cíclica e permite exploração.

---

## SLIDE 7: ANALOGIA JUDICIAL

### Propósito
Mapear o ciclo de desenvolvimento para o processo decisório judicial.

### Conteúdo
| Ciclo de Desenvolvimento | Processo Judicial |
|-------------------------|-------------------|
| Ideação | Leitura inicial dos autos |
| Planejamento | Identificação das questões |
| Especificação | Estruturação do relatório |
| ... | ... |

### Opção A: Tabela Animada
**Conceito:** Tabela comparativa com reveal progressivo.
- Duas colunas lado a lado
- Itens aparecem em pares
- Linha conectando equivalentes
- Cores correspondentes

**Interatividade:**
- Auto-reveal ou click-to-reveal
- Hover destaca par

### Opção B: Dois Caminhos Paralelos
**Conceito:** Dois pipelines visuais paralelos mostrando correspondência.
- Pipeline Dev no topo
- Pipeline Judicial embaixo
- Linhas pontilhadas conectando equivalentes
- Ícones representativos

**Interatividade:**
- Click em etapa destaca equivalente
- Toggle entre visualizações

### Opção C: Metamorfose
**Conceito:** Uma única timeline que "transforma" de tech para jurídico.
- Toggle para alternar perspectiva
- Mesmos ícones, labels diferentes
- Transição suave entre visões

**Interatividade:**
- Toggle Tech/Jurídico
- Animação de transformação

### RECOMENDAÇÃO: Opção B (Dois Caminhos Paralelos)
Mostra claramente a correspondência 1:1.

---

## SLIDE 8: DUAS NOÇÕES DE WORKFLOW

### Propósito
Distinguir Workflow Humano-Agente de Workflow Agente-Agente.

### Conteúdo
- HUMANO-AGENTE: Colaboração (Human ↔ Agent)
- AGENTE-AGENTE: Orquestração (Orchestrator → Workers)

### Opção A: Split Screen Interativo
**Conceito:** Tela dividida ao meio, cada lado mostrando um tipo.
- Lado esquerdo: Humano + Agente dialogando
- Lado direito: Orquestrador + múltiplos workers
- Lista de "Quando usar" em cada lado
- Toggle para destacar diferenças

**Interatividade:**
- Click em lado expande
- Hover em características destaca
- "NÃO SÃO EXCLUDENTES" animado no centro

### Opção B: Evolução Temporal
**Conceito:** Timeline mostrando progressão de um para outro.
- Fase 1 (construção): Humano-Agente
- Fase 2 (operação): Agente-Agente
- Seta de evolução
- Exemplos em cada fase

**Interatividade:**
- Slider de tempo
- Exemplos mudam conforme fase

### Opção C: Venn Diagram
**Conceito:** Dois círculos parcialmente sobrepostos.
- Círculo 1: Características de Humano-Agente
- Círculo 2: Características de Agente-Agente
- Interseção: O que têm em comum
- Claro que não são excludentes

**Interatividade:**
- Hover em regiões destaca características

### RECOMENDAÇÃO: Opção A (Split Screen Interativo)
Mais visual, permite comparação direta.

---

## SLIDE 9: QUOTE ANTHROPIC

### Propósito
Citar a definição oficial da Anthropic.

### Citação
> *"Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own processes."*
> — Anthropic, "Building Effective Agents"

### Opção A: Documento Oficial
**Conceito:** Estilizado como documento/paper acadêmico.
- Fundo papel texturizado
- Logo Anthropic
- Citação como excerpt destacado
- Referência no rodapé

### Opção B: Terminal Documentation
**Conceito:** Como leitura de documentação no terminal.
- `cat building-effective-agents.md`
- Quote como markdown renderizado
- Cores de syntax highlighting

### Opção C: Cinematográfico Padrão
**Conceito:** Seguir padrão estabelecido.
- Aspas douradas
- Background abstrato tech
- Fade-in elegante

### RECOMENDAÇÃO: Opção A (Documento Oficial)
Transmite autoridade e oficialidade.

---

## SLIDE 10: QUOTE JESSE VINCENT

### Propósito
Introduzir a filosofia Superpowers.

### Citação
> *"Agents need discipline, not freedom."*
> — Jesse Vincent, Criador do Superpowers

### Opção A: Contraste Visual
**Conceito:** Split screen mostrando "Freedom" (caos) vs "Discipline" (ordem).
- Lado esquerdo: código bagunçado, vermelho
- Lado direito: código organizado, verde
- Quote no centro

### Opção B: Iron Wall
**Conceito:** Quote gravada em placa de metal.
- Textura metálica
- Fonte bold, industrial
- Parafusos nos cantos
- Sensação de "lei de ferro"

### Opção C: Cinematográfico Padrão
**Conceito:** Seguir padrão de quotes.
- Background com imagem de código estruturado

### RECOMENDAÇÃO: Opção B (Iron Wall)
Antecipa as "Iron Laws" e transmite peso.

---

## SLIDE 11: FLUXO SUPERPOWERS

### Propósito
Visualizar os 3 comandos do Superpowers em ação.

### Conteúdo
1. /superpowers:brainstorm - Ideação colaborativa
2. /superpowers:write-plan - Planejamento detalhado
3. /superpowers:execute-plan - Execução com subagentes

### Opção A: Terminal Interativo
**Conceito:** Terminal simulando execução dos 3 comandos.
- Mac/Windows toggle (consistente com Aula 02)
- Click em comando mostra output
- Exemplos de perguntas de brainstorm
- Exemplo de plano gerado

**Interatividade:**
- Click em cada comando expande
- Auto-type simulado
- Progress indicator entre fases

### Opção B: Pipeline Vertical com Gates
**Conceito:** 3 blocos conectados verticalmente com gates entre eles.
- Bloco 1: Brainstorm (perguntas iterativas)
- Gate: "Design validado?"
- Bloco 2: Write-Plan (tarefas atômicas)
- Gate: "Plano aprovado?"
- Bloco 3: Execute-Plan (subagentes)

**Interatividade:**
- Click em bloco expande detalhes
- Gates animados

### Opção C: Três Colunas
**Conceito:** Dashboard com 3 painéis lado a lado.
- Coluna 1: Brainstorm (perguntas)
- Coluna 2: Plan (tarefas)
- Coluna 3: Execute (status)
- Fluxo horizontal de dados

**Interatividade:**
- Itens fluem entre colunas animadamente

### RECOMENDAÇÃO: Opção A (Terminal Interativo)
Mais prático, mostra exatamente como usar.

---

## SLIDE 12: IRON LAWS

### Propósito
Apresentar as regras invioláveis do Superpowers.

### Conteúdo
- TDD: No production code without a failing test first
- DEBUGGING: No fixes without root cause investigation
- VERIFICAÇÃO: No completion claims without fresh verification

### Opção A: Placas de Lei
**Conceito:** 3 placas estilo "tábuas da lei" ou placas de metal.
- Cada placa com uma Iron Law
- Textura metálica/pedra
- Ícone de cadeado em cada
- "IF A SKILL APPLIES, YOU MUST USE IT"

**Interatividade:**
- Hover em placa destaca
- Click expande explicação

### Opção B: Semáforo de Compliance
**Conceito:** 3 "sinais" como semáforo de trânsito.
- Vermelho: O que NÃO fazer
- Verde: O que DEVE fazer
- Cada Iron Law como sinal

**Interatividade:**
- Click alterna entre estados
- Mostra consequência de violar

### Opção C: Checklist Judicial
**Conceito:** Analogia com súmulas vinculantes.
- Layout de documento judicial
- Cada Iron Law como súmula
- "Obrigatórias, não opcionais"

**Interatividade:**
- Checkboxes que não podem ser desmarcados

### RECOMENDAÇÃO: Opção A (Placas de Lei)
Transmite peso e obrigatoriedade.

---

## SLIDE 13: 5 PADRÕES ANTHROPIC

### Propósito
Visualizar os 5 padrões de workflow agêntico da Anthropic.

### Conteúdo
1. Prompt Chaining (Encadeamento)
2. Routing (Roteamento)
3. Parallelization (Paralelização)
4. Orchestrator-Workers
5. Evaluator-Optimizer

### Opção A: Catálogo de Padrões
**Conceito:** Grid de 5 cards, cada um representando um padrão.
- Ícone/diagrama miniatura em cada card
- Click expande para ver diagrama completo
- Ordem crescente de complexidade indicada
- Cores distintas por padrão

**Interatividade:**
- Click em card abre modal/expande
- Diagrama animado mostrando fluxo
- Exemplo jurídico em cada

### Opção B: Escada de Complexidade
**Conceito:** 5 degraus de escada, do mais simples ao mais complexo.
- Degrau 1: Chaining (mais simples)
- Degrau 5: Evaluator-Optimizer (mais complexo)
- Cada degrau mostra mini-diagrama
- "Suba conforme necessidade"

**Interatividade:**
- Click em degrau expande
- Highlight de "você está aqui"

### Opção C: Blocos de Lego Modulares
**Conceito:** 5 tipos de "blocos" que podem ser combinados.
- Cada padrão é um tipo de bloco com encaixes específicos
- Mostra como se combinam
- "Kit completo do arquiteto"

**Interatividade:**
- Drag-and-drop para montar combinações
- Exemplos de sistemas reais

### RECOMENDAÇÃO: Opção A (Catálogo de Padrões)
Mais prático para consulta, permite profundidade.

---

## SLIDE 14: QUANDO USAR CADA PADRÃO

### Propósito
Matriz de decisão para escolher o padrão correto.

### Conteúdo
| Padrão | Quando Usar | Exemplo Jurídico |
|--------|-------------|------------------|
| Chaining | Etapas sequenciais | Relatório → Análise → Fund. |
| Routing | Inputs variados | BPC vs Aposentadoria |
| Parallelization | Subtarefas independentes | 3 revisores |
| Orchestrator | Subtarefas dinâmicas | Pesquisa adaptativa |
| Evaluator | Refinamento iterativo | Maker-checker |

### Opção A: Decision Tree Interativo
**Conceito:** Árvore de decisão com perguntas.
- "Suas etapas são sequenciais?" → Sim → Chaining
- "Inputs variados?" → Sim → Routing
- Navegar pela árvore responde qual usar

**Interatividade:**
- Click em respostas navega
- Resultado final destacado

### Opção B: Matriz com Exemplos
**Conceito:** Tabela interativa com hover para exemplos.
- Colunas: Padrão, Quando, Exemplo
- Hover em linha destaca e expande
- Ícones representativos

**Interatividade:**
- Hover expande exemplos
- Click fixa seleção

### Opção C: Cenários Jurídicos
**Conceito:** Lista de cenários jurídicos com padrão recomendado.
- "Preciso analisar 3 tipos de processos diferentes" → Routing
- "Quero 3 revisores na mesma sentença" → Parallelization
- Cenários familiares ao público

**Interatividade:**
- Click em cenário revela padrão e diagrama

### RECOMENDAÇÃO: Opção A (Decision Tree)
Mais pedagógico, guia a escolha.

---

## SLIDE 15: MINI-SISTEMA - BRAINSTORM

### Propósito
Demonstrar o processo de ideação para um sistema real.

### Conteúdo
Verificador de Completude de Sentença
- Perguntas de brainstorm
- Opções de resposta
- Design emergindo

### Opção A: Quiz Interativo
**Conceito:** Simula sessão de brainstorm com perguntas.
- Pergunta aparece
- Múltiplas opções de resposta
- Usuário "escolhe"
- Próxima pergunta aparece
- Resultado: especificação completa

**Interatividade:**
- Click em opções avança
- Resultado acumula
- "Sua spec" aparece no final

### Opção B: Chat Simulado
**Conceito:** Chat entre usuário e Claude fazendo brainstorm.
- Bolhas de conversa
- Perguntas do Claude
- Respostas do usuário
- Evolução visível do entendimento

**Interatividade:**
- Auto-scroll
- Mensagens aparecem em sequência

### Opção C: Formulário Dinâmico
**Conceito:** Formulário que se adapta conforme respostas.
- Campos aparecem conforme relevância
- Preview da spec sendo gerada ao lado
- Validação em tempo real

**Interatividade:**
- Seleção em dropdowns
- Preview atualiza em tempo real

### RECOMENDAÇÃO: Opção A (Quiz Interativo)
Engaja o público, simula a experiência real.

---

## SLIDE 16: PIPELINE SENTENÇA COMPLETO

### Propósito
Mostrar a arquitetura completa do Pipeline Sentença usando todos os padrões.

### Conteúdo
- Etapa 1: Extração (Chaining)
- Etapa 2: Pesquisa (Routing + Parallelization)
- Etapa 3: Fundamentação (Evaluator-Optimizer)
- Etapa 4: Revisão (Parallelization + Chaining)

### Opção A: Diagrama Arquitetural Interativo
**Conceito:** Diagrama completo com zoom em cada etapa.
- Visão geral do pipeline
- Click em etapa faz zoom
- Mostra padrão utilizado
- Fluxo de dados animado

**Interatividade:**
- Click para zoom in/out
- Hover mostra padrão
- Animação de dados fluindo

### Opção B: Explorador de Camadas
**Conceito:** Pipeline em camadas que podem ser expandidas.
- Camada 1: Visão macro
- Camada 2: Etapas
- Camada 3: Subagentes
- Camada 4: Código/prompts

**Interatividade:**
- Click expande camada
- Breadcrumb de navegação

### Opção C: Timeline de Execução
**Conceito:** Timeline horizontal mostrando execução real.
- Tempo no eixo X
- Agentes no eixo Y
- Barras mostrando quando cada um trabalha
- Paralelismo visível

**Interatividade:**
- Play/pause da timeline
- Hover mostra o que cada agente faz

### RECOMENDAÇÃO: Opção A (Diagrama Arquitetural)
Mais completo, permite exploração em profundidade.

---

## SLIDE 17: O INSIGHT FINAL

### Propósito
Revelar a conclusão contra-intuitiva.

### Conteúdo
> "O segredo não é o agente. É o fluxo de trabalho."
>
> Sistemas agênticos de sucesso não são construídos por agentes mais inteligentes.
> São construídos por HUMANOS que sabem projetar workflows que DISCIPLINAM os agentes.

### Opção A: Revelação Dramática
**Conceito:** Texto aparece palavra por palavra com impacto.
- Fundo escuro
- Palavras-chave destacadas em dourado
- Pausa dramática entre frases
- Música/sound design (se aplicável)

**Interatividade:**
- Auto-reveal
- Click avança

### Opção B: Contraste Visual
**Conceito:** Split screen: Agente poderoso vs Workflow bem projetado.
- Esquerda: "Claude mais poderoso + workflow ruim = spaghetti"
- Direita: "Claude simples + workflow bom = sistema robusto"
- Revelação: "O que faz a diferença?"

**Interatividade:**
- Toggle entre lados
- Conclusão aparece

### Opção C: Equação Visual
**Conceito:** Equação matemática estilizada.
- Agente + Workflow ruim = Caos
- Agente + Workflow bom = Sucesso
- "Variável que importa: WORKFLOW"

**Interatividade:**
- Elementos aparecem em sequência
- Destaque na variável

### RECOMENDAÇÃO: Opção A (Revelação Dramática)
Mais impactante para fechamento.

---

## SLIDE 18: RESUMO + PRÓXIMOS PASSOS

### Propósito
Consolidar aprendizados e apontar para próxima aula.

### Conteúdo
- O que aprendemos (6 pontos)
- Próximos passos (Aula 4: Commands e Skills)
- Frase de fechamento

### Opção A: Checklist de Competências
**Conceito:** Lista de competências adquiridas com checkmarks.
- Cada item aparece com checkmark
- Progresso da jornada visível
- "Aula 4 coming soon" destacado

**Interatividade:**
- Checkmarks aparecem em sequência
- Click em item relembra conceito

### Opção B: Mapa da Jornada
**Conceito:** Mapa visual mostrando progresso no curso.
- Aulas 0-3: completadas (verde)
- Aula 4: próxima (destacada)
- Aulas 5+: futuro (cinza)

**Interatividade:**
- Hover em aula mostra conteúdo
- Animação de progresso

### Opção C: Quote de Fechamento
**Conceito:** Frase final impactante.
- "Se você acertar a especificação, o código se escreve sozinho."
- Callback para Al Harris
- "Até a próxima aula"

**Interatividade:**
- Fade-out elegante

### RECOMENDAÇÃO: Opção B (Mapa da Jornada)
Contextualiza o aprendizado no curso completo.

---

## RESUMO DAS RECOMENDAÇÕES

| Slide | Recomendação | Justificativa |
|-------|--------------|---------------|
| 1 | Manual de Instruções Lego | Estabelece expectativa pedagógica |
| 2 | Terminal Glitch | Antecipa problema |
| 3 | Chat Animado | Familiar, mostra o caos |
| 4 | Cards com Ícones | Permite exploração |
| 5 | Terminal Success | Contrasta com caos |
| 6 | Ciclo Interativo | Representa natureza cíclica |
| 7 | Dois Caminhos Paralelos | Correspondência clara |
| 8 | Split Screen | Comparação direta |
| 9 | Documento Oficial | Transmite autoridade |
| 10 | Iron Wall | Antecipa Iron Laws |
| 11 | Terminal Interativo | Mostra uso prático |
| 12 | Placas de Lei | Transmite obrigatoriedade |
| 13 | Catálogo de Padrões | Permite profundidade |
| 14 | Decision Tree | Guia escolha |
| 15 | Quiz Interativo | Engaja público |
| 16 | Diagrama Arquitetural | Exploração completa |
| 17 | Revelação Dramática | Impacto no fechamento |
| 18 | Mapa da Jornada | Contextualiza no curso |

---

## PRÓXIMOS PASSOS

1. **Aprovação do plano** - Usuário revisa e aprova direção
2. **Criação da capa** - Implementar slide 1 (já temos 3 opções criadas)
3. **Slides de quote** - Criar slides 2, 5, 9, 10
4. **Demos interativos** - Criar slides 3, 6, 8, 11, 13, 15, 16
5. **Visualizações** - Criar slides 4, 7, 12, 14, 17
6. **Fechamento** - Criar slide 18
7. **Integração** - Montar aula-03.html com todos os slides

---

*Planejamento gerado para Aula 03 - Arquitetando Sistemas Agênticos*
*Data: 2026-01-25*
