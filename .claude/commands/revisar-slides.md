# Comando: revisar-slides

Orquestra o processo de revisão colaborativa de slides usando a skill `revisor-slides`.

## Uso

```
/revisar-slides <caminho-da-pasta-slides>
```

Exemplo: `/revisar-slides content/aula-02/slides`

## Filosofia

> **Duas Mentes, Uma Obra**
>
> A revisão de slides é ARTESANIA, não automação.
> O humano contribui julgamento estético; a IA contribui execução técnica.
> Ambos constroem juntos a melhor solução visual.

## Workflow Obrigatório

Para CADA slide, seguir rigorosamente:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PROCESSO DE REVISÃO SLIDE-A-SLIDE                    │
└─────────────────────────────────────────────────────────────────────────┘

  1. APRESENTAR      Ler e descrever o slide atual
     │               → Tipo, elementos, técnicas usadas
     │
  2. DISCUTIR        Perguntar ao usuário
     │               → "O que está funcionando?"
     │               → "O que não está funcionando?"
     │               → "Qual sensação você quer causar?"
     │
  3. PROPOR          Criar 2-3 propostas contrastantes
     │               → Descrição visual de cada
     │               → Trade-offs explicados
     │               → Recomendação com justificativa
     │
  4. ESCOLHER        Aguardar escolha EXPLÍCITA
     │               → "Qual prefere: A, B ou C?"
     │               → Confirmar: "Entendi que você quer [X]. Correto?"
     │
  5. IMPLEMENTAR     Criar APENAS a escolha aprovada
     │               → Arquivo demo-*.html ou edição do existente
     │
  6. VALIDAR         Pedir visualização no browser
     │               → "Abra [caminho] e me diga o que acha."
     │               → Se aprovado: próximo
     │               → Se ajustes: voltar ao passo 3
     │
  7. PRÓXIMO         Só avançar após aprovação explícita
                     → "Slide aprovado. Qual é o próximo?"
```

## Regras Invioláveis

| DEVE | NUNCA |
|------|-------|
| Trabalhar slide-a-slide | Modificar múltiplos de uma vez |
| Propor 2-3 alternativas | Implementar sem escolha |
| Aguardar aprovação explícita | Prosseguir sem checkpoint |
| Preservar PALETA SUPER | Usar cores aleatórias |
| Testar embed mode | Criar demos que não funcionam em iframe |

## Técnicas de Variação

Para gerar propostas genuinamente diferentes:

| Dimensão | Polo A | Polo B |
|----------|--------|--------|
| Densidade | Minimalista | Rico em detalhes |
| Movimento | Estático | Animado |
| Layout | Simétrico | Assimétrico |
| Tipografia | Playfair (serifada) | Inter (sans) |

## Critérios de Reprovação

Reprovar e refazer se:
- Texto narrativo que deveria ser FALADO
- Mais de 7 elementos competindo por atenção
- Cores fora da PALETA SUPER
- Não funciona em embed mode
- Contraste insuficiente (texto ilegível)

## Documentação de Padrões

Se descobrir novo padrão visual durante revisão:
1. Perguntar: "Esse padrão pode ser útil para outras aulas?"
2. Se sim, documentar em `.claude/skills/slides-web/references/`
3. Adicionar ao catálogo de demos se for template reutilizável

## Instruções de Execução

1. Ler a skill `revisor-slides/SKILL.md` para carregar conhecimento
2. Listar todos os arquivos HTML na pasta especificada
3. Apresentar ao usuário: "Encontrei X slides. Por qual começamos?"
4. Executar o processo para cada slide escolhido
5. Manter registro de slides aprovados vs pendentes
