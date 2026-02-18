# 0.4 Memória e Personalização

**Módulo:** 0 - Preparação
**Tempo estimado:** 20 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender o que são memória e personalização do Claude
- Explicar por que NÃO usá-las globalmente para trabalho jurídico
- Configurar a abordagem minimalista recomendada
- Conhecer alternativas melhores (Projetos)

---

## Por que Importa

**Para profissionais do Direito:**
- Memória global pode contaminar análises entre casos diferentes
- Personalização única não serve para estilos variados (relatório vs fundamentação)
- Técnicas mais precisas existem e serão ensinadas no Módulo 2

---

## Base Conceitual

### O que é Memória?

A **memória** permite ao Claude lembrar informações de conversas anteriores:
- Extrai "lembranças" das interações
- Usa para contextualizar conversas futuras
- Aprende seus padrões e preferências

### O que é Personalização?

Instruções que valem para **todas** as conversas:
- Texto fixo que o Claude sempre considera
- Exemplo: "Sempre responda em português formal"

### Por que NÃO Usar (Abordagem Minimalista)

**Problema 1: Contaminação de Contexto**

| Situação | Risco |
|----------|-------|
| Manhã: analisa caso de família | Memória registra termos |
| Tarde: analisa caso tributário | Claude "contamina" com contexto anterior |

**Problema 2: Estilo Único Não Serve**

| Tarefa | Estilo Necessário |
|--------|-------------------|
| Relatório | Neutro, descritivo |
| Fundamentação | Argumentativo, técnico |
| Despacho | Direto, objetivo |

**Problema 3: Técnicas Melhores Existem**

No Módulo 2 você aprenderá:
- **Persona por prompt** — papel específico para cada tarefa
- **Projetos** — contexto isolado por tipo de trabalho
- **Templates POEMA** — estrutura completa de customização

### A Alternativa: Projetos

```
SEM PROJETOS (ruim):
Memória Global → Todas as conversas → Contaminação

COM PROJETOS (bom):
Projeto "Análise FIRAC"  → Conversas de análise
Projeto "Relatórios"     → Conversas de relatório
Projeto "Pesquisa"       → Conversas de pesquisa

Cada projeto com suas próprias instruções, isolado.
```

---

## Exercício Prático

### Tarefa
Verificar e configurar abordagem minimalista.

### Passo a Passo

**1. Verificar Memória:**
- Acesse: Configurações → Privacidade
- Clique em "Preferências de memória" → Gerenciar
- Se houver lembranças, avalie se quer mantê-las
- **Recomendação:** Limpar lembranças existentes

**2. Verificar Personalização:**
- Acesse: Configurações → Geral
- Localize o campo de preferências pessoais
- **Recomendação:** Deixar em branco

**3. Confirmar configuração:**
- Memória: vazia ou desativada
- Personalização: campo em branco

### Checklist de Verificação

```
[ ] Acessei as configurações de memória
[ ] Entendo o que a memória faz
[ ] Memória está limpa ou desativada
[ ] Campo de personalização está em branco
[ ] Entendo por que não usar personalização global
```

---

## Quando USAR Memória/Personalização?

| Cenário | Usar? | Por quê |
|---------|-------|---------|
| Uso pessoal casual | Pode | Não há risco profissional |
| Um único tipo de trabalho | Pode | Contexto consistente |
| Trabalho jurídico variado | **Não** | Risco de contaminação |
| Múltiplos estilos | **Não** | Estilo único atrapalha |

---

## Dicas e Armadilhas

### Dica
> Pense na memória como um "assistente que anota tudo". Em contexto profissional, você não quer que anotações de um cliente vazem para outro.

### Armadilha
> **"Vou configurar 'Sou juiz federal, responda de forma técnica'."**
>
> Parece eficiente, mas causa problemas:
> - Quando quiser texto acessível, Claude insiste no técnico
> - Quando quiser perspectiva do autor, mantém perspectiva de julgador
>
> **Solução:** Defina a persona em cada prompt, não globalmente.

---

## Recursos

### Configuração Recomendada

```
CONFIGURAÇÃO MINIMALISTA

Memória:
  └── Preferências de memória: LIMPAR/DESATIVAR

Personalização:
  └── Preferências pessoais: [DEIXAR EM BRANCO]

Por quê:
  └── Customização será feita por PROJETO e por PROMPT
  └── Evita contaminação de contexto
  └── Mantém flexibilidade de estilo
```

### Links
- Configurações: `https://claude.ai/settings/general`
- Privacidade: `https://claude.ai/settings/data-privacy-controls`

---

## Conexão

Com a configuração minimalista, você está pronto para conhecer o modo agêntico — quando o Claude usa ferramentas automaticamente.

→ Próxima: **[0.5 Introdução ao Modo Agêntico](./aula-0.5.md)**
