# Processo de Brainstorming Visual

Guia detalhado para conduzir sessões de brainstorming colaborativo de design de slides.

## Filosofia

O brainstorming de slides é um **diálogo criativo** entre humano e IA, não uma entrega unilateral de designs. O objetivo é explorar o espaço de possibilidades juntos.

## Estrutura de uma Sessão

### Fase 1: Observação (5 min)

**Perguntas para o slide atual:**
- O que está comunicando visualmente?
- Qual é o propósito (MOSTRAR, TOPIFICAR, CITAR)?
- Que técnicas estão sendo usadas?
- O que funciona bem?
- O que gera atrito visual?

**Output:** Diagnóstico compartilhado do estado atual

### Fase 2: Exploração de Intenção (3 min)

**Perguntas para o usuário:**
- "Que sensação você quer que o aluno tenha ao ver isso?"
- "Isso deve ser minimalista ou impactante?"
- "Há elementos que DEVEM ser preservados?"
- "Esse slide será falado longamente ou é passagem rápida?"

**Output:** Briefing claro de intenção

### Fase 3: Geração de Alternativas (10 min)

Criar 2-3 propostas **contrastantes**, não variações sutis:

| Proposta | Foco | Quando Usar |
|----------|------|-------------|
| A | Minimalista | Conteúdo denso, fala longa |
| B | Alto impacto | Conceito-chave, momento WOW |
| C | Editorial | Citações, storytelling |

**Para cada proposta, documentar:**
1. Nome/título (1-2 palavras)
2. Descrição visual (2-3 frases)
3. Técnicas específicas (CSS, animação)
4. Trade-offs (prós e contras)
5. Contexto ideal de uso

### Fase 4: Deliberação (5 min)

**Apresentar ao usuário:**
- Resumo visual de cada proposta
- Comparação lado a lado (se possível)
- Recomendação com justificativa

**Aguardar escolha:**
- "Qual prefere: A, B ou C?"
- "Ou quer combinar elementos?"
- "Ou quer explorar outra direção?"

### Fase 5: Implementação (10-15 min)

**Executar APENAS o aprovado:**
- Criar arquivo `-proposta-X.html` se testando
- Ou modificar original se já aprovado
- Testar embed-mode
- Verificar responsividade

### Fase 6: Validação (3 min)

**Checkpoint obrigatório:**
- Usuário visualiza no browser
- Feedback coletado
- Se OK: próximo slide
- Se ajustes: voltar à fase 3

## Técnicas de Geração de Alternativas

### Variação por Contraste

| Dimensão | Polo A | Polo B |
|----------|--------|--------|
| Densidade | Minimalista | Rico em detalhes |
| Movimento | Estático | Animado |
| Cor | Monocromático | Policromático |
| Layout | Simétrico | Assimétrico |
| Tipografia | Serifada (Playfair) | Sans (Inter) |

Escolher 1-2 dimensões para variar entre propostas.

### Variação por Metáfora

Para o mesmo conteúdo, explorar metáforas visuais diferentes:

- **Arquitetural:** blocos, camadas, estrutura
- **Orgânico:** fluxo, crescimento, conexões
- **Narrativo:** jornada, timeline, antes/depois
- **Técnico:** código, diagrama, processo

### Variação por Técnica

Mesmo layout, técnicas diferentes:

| Técnica | Efeito | Quando |
|---------|--------|--------|
| Glassmorphism | Profundidade, camadas | Cards sobre imagem |
| Spotlight | Foco narrativo | Revelação progressiva |
| Parallax | Dinamismo | Transições de seção |
| Gradient | Suavidade | Backgrounds, overlays |

## Anti-patterns no Brainstorming

### Não fazer:
- Propor 3 variações quase idênticas
- Implementar antes de aprovar
- Ignorar feedback do usuário
- Forçar uma proposta específica
- Pular a fase de observação

### Fazer:
- Propostas genuinamente diferentes
- Explicar trade-offs honestamente
- Incorporar preferências do usuário
- Estar aberto a híbridos
- Documentar padrões descobertos

## Exemplo de Sessão

```
SLIDE: Citação do Karpathy sobre agentes

FASE 1 - OBSERVAÇÃO:
"Slide atual usa layout split-screen: foto à esquerda, citação à direita.
Glassmorphism no card de texto. Funciona, mas a foto parece secundária."

FASE 2 - INTENÇÃO:
Usuário: "Quero mais impacto. A foto é de alguém famoso, precisa ter destaque."

FASE 3 - ALTERNATIVAS:
A) Editorial Magazine - Foto full-screen, citação sobreposta em faixa
B) Hero Central - Foto circular grande com glow, citação abaixo
C) Cinematic - Foto em background blur, card flutuante centralizado

FASE 4 - ESCOLHA:
Usuário: "B parece interessante, mas a glow pode ser exagerada?"
"Podemos fazer glow sutil. Confirmo: Hero Central com glow dourado suave?"
Usuário: "Sim!"

FASE 5 - IMPLEMENTAÇÃO:
[criar demo-quote-karpathy-proposta-b.html]

FASE 6 - VALIDAÇÃO:
"Abra no browser: [caminho]. O que acha?"
Usuário: "Ficou ótimo! Aprovado."

PRÓXIMO: "Qual slide revisamos agora?"
```

## Métricas de Sucesso

Uma sessão de brainstorming foi bem-sucedida se:

- [ ] Usuário participou ativamente das decisões
- [ ] Propostas foram genuinamente diferentes
- [ ] Trade-offs foram discutidos
- [ ] Resultado final reflete preferência do usuário
- [ ] Padrão foi documentado (se novo)
- [ ] Ambos (humano e IA) contribuíram para o resultado
