# Anthropic Just Dropped Agent Swarms

**Canal:** Ray Amjad
**URL:** https://www.youtube.com/watch?v=DWiYdXrxSwg
**Idioma:** Ingles (auto-generated)

---

## Transcricao (trechos principais)

[0:00] Okay, so we have a pretty big feature
that was just added to Cloud Code that
may change the way that you use the tool
going forwards and that is idea of
multi-agent collaboration. I'll be going
through everything to do with that in
this video and a few other updates as
well.

[0:38] So we now have a brand new feature called Agent Teams.
This is a research preview feature that allows you to
spin up multiple Claude Code instances that work together
as a coordinated team.

[3:57] Member to run with. Anyways, if we press
shift up, then I can see the team lead
here, the other team members. So I can
press shift up and down to see which
ones are available. Go to the implementer
for example and then I can see what the
implementer is doing right over here and
you can see it's just waiting for task
three to be completed. If I go back and
go to the Windows researcher, this is
essentially what the Windows researcher
is seeing.

[4:21] So this can be pretty handy
to like send an additional message to
any teams. So I can say "say hi". So I
can pass in a message whilst that
particular team member is running.

[4:34] So whilst we're waiting for this to
continue, I want to show you what it
looks like behind the scenes. So in your
.claude folder in your home directory,
you have a teams folder and this is the
feature parity team. We can see what's inside.

[8:17] Anthropic employee did mention that Opus
4.6 has improved sub agent
orchestration, recognizing when tasks
would benefit from delegating work to
specialized sub agents. So, I imagine
they kind of did some reinforcement
learning on top of Opus 4.6 to make it
better at being able to come up
with teammates and come up with task
lists that would be assigned between
them and so forth.

[8:38] Opus 4.6 is now also
better at long context tasks. So, we
have a graph right over here that shows
a benchmark and we can see that Sonnet 4.5 is
pretty bad down here and then Opus 4.6 is
getting almost perfect scores. And I
think the 1 million over here is when it
has a 1 million token context window.

---

## Pontos-Chave

1. **Multi-Agent Collaboration**: Feature que muda a forma de usar Claude Code

2. **Navegacao entre Teammates**:
   - `Shift+Up/Down`: ver membros do team
   - Pode enviar mensagens enquanto teammate roda

3. **Estrutura no Disco**:
   - `~/.claude/teams/` - pasta com dados dos teams
   - Cada team tem sua configuracao

4. **Opus 4.6 Melhorado para Orchestration**:
   - Reinforcement learning para melhor delegacao
   - Reconhece quando tasks se beneficiam de sub-agents
   - Melhor em criar task lists e atribuir entre teammates

5. **Long Context**: Opus 4.6 quase perfeito em benchmarks de 1M tokens
