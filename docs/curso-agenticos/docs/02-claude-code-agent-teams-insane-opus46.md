# Claude Code's New Agent Teams Are Insane (Opus 4.6)

**Canal:** Bart Slodyczka
**URL:** https://www.youtube.com/watch?v=VWngYUC63po
**Idioma:** Ingles (auto-generated)

---

## Transcricao

[0:00] Hello legends. In this video, we're
going to be diving into the new Claude
Opus 4.6 and we'll be explicitly
exploring the new agent teams. So, I'm
going to be running an experiment in
this video where I'm going to be
spooling up a Claude code instance using
the Opus 4.6 model, getting one agent to
build out a certain project for us, and
then I'm going to be spooling up another
Cloud Code instance, enabling the agent
teams mode, then giving the exact same
prompt, and then comparing the results.

[0:24] So I want to quickly touch on the
anatomy of an agent team versus what we
previously had which was a sub agent. So
sub agents work by receiving a very
specific prompt. Then that prompt is
actioned and completed and then only the
results of the completion are shared
back with the main context window.
Whereas agent teams are a little bit
more sophisticated.

[2:43] You can give each of
those members in a team a different
distinct area to focus on. Therefore,
each of these areas will get an
appropriate coverage from each agent.
And the second example from anthropic is
in a very similar light where if you
want to understand a complex issue,
typically one agent would again just
find one possible explanation, one key
theme, latch on to it. So then you
actually want to prompt up an agent team
and then give different members of the
team distinct areas to explore and to
look at. So I've got two instances of
cursor open up. I've got a normal
instance where I'll just be using one
agent to build out this prompt for us
and then another instance where I'll be
spooling up an agent team and giving it
the exact same prompt.

[5:34] Create a team to build out this task
manager app in parallel. Let me set up
the team and then break down the work.
So, we'll first be building out the plan
of what we need built and then we'll be
assigning each of those items from the
plan to a separate agent on our team.
So, now we're sporting up the teammates
for each task that we created. So, the
first task is to create the HTML and
CSS. So, the UI builder is going to be
working on the HTML and CSS. Once that's
done, I'll spawn up the JS developer to
add the application logic. Let me wait
for the first task to complete. So,
after each task was defined, then Claude
Code was able to spin up the teammates.
So, it span up the very first teammate
which is building out the front end, the HTML and CSS. And
then on the bottom over here, we can see
that there's two teammate agents.

[8:32] That's nice. And let me just see
if I right click on here. Okay, we have
edit, reopen. Wow, this functionality is
actually insane. I actually I can't
believe that I can change priority by
doing the right click on here. Move to
inbox, move to work, move to personal.
Okay, so we have different views over
here. So, personal view shows that
project. Let's move it across to inbox
now.
And it moves. This is beautiful. This is
really nice. This is Opus 4.6 on its
own. And that is very impressive. And if
we delete that and let's go to create a
new project as well. I'm going to call
this dinner. Let's click enter. There we
go. So, as this stands, this is actually
very impressive. It looks really
good. It doesn't look like it's been
made by a botch AI like a lot of the
older apps that we've been building
across the last few months.

[11:34] Lead. I'm just going to say, can you
confirm the JavaScript is working
because some of the buttons which was
settings or board view, they don't work.
So, let's see what happens when we
try and fix this. So, there we
go. Looks like we have a fix. Now, the
board view and the settings buttons
will actually do something. So, now
coming back to our task manager, if I
click on board view, nice. Actually,
looks like we can drag and drop between
here as well. So the board view now
works and it changes the status as we
drag it to a different section of our
pipeline between urgent to high to
medium. It actually applies that to the
task as well. And now let's check out
the settings panel. So over here we have
light mode or dark mode. Okay, default
view and then we have export data as
JSON or import and then clear all data.

---

## Pontos-Chave

1. **Experimento Comparativo**: O video compara single agent vs agent team com o mesmo prompt.

2. **Sub-agents vs Agent Teams**:
   - Sub-agents: recebem prompt especifico, completam, retornam resultado
   - Agent Teams: membros com areas distintas, cobertura mais ampla

3. **Workflow com Teams**:
   - Primeiro: criar plano do que precisa ser construido
   - Segundo: atribuir cada item do plano a um agent separado
   - Terceiro: spawnar teammates para cada task

4. **Resultado**: Task manager com funcionalidades completas (drag-drop, views, settings, dark mode)

5. **Comunicacao com Lead**: Possivel enviar mensagens para o lead para corrigir problemas
