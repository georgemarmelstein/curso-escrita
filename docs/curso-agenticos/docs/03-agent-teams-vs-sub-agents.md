# Agent Teams VS Sub Agents

**Canal:** AI Jason
**URL:** https://www.youtube.com/watch?v=S2WTTMXYcYY
**Idioma:** Ingles (auto-generated)

---

## Transcricao

[0:00] Cloud code just had a massive upgrade of
agent teams feature which is different
from the task and sub agent feature we
had before. This time it can spin up
three to five different cloud code
instance to collaboratively complete a
task and project and each cloud code
session here can communicate with each
other with different communication
protocol method. I spent a bit time to
look into the actual logs of the larger
mode call from the new agent teams
feature to understand how it actually
works compared with the previous sub
agent. And now I think I finally have a
good grasp. I'm going to take you
through how exactly does team agent
works and how each agent share contacts
with each other and how they communicate
step by step.

[0:40] But firstly, let's talk
about how do you actually install and
use agent teams. So to use cloud code
agent teams, you need to enable the experimental
feature by setting CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
in your environment or settings.json.

[3:44] Creating a list of tasks. So this is different from the
task tool which will spin up new agents.
Task create tool is to log all the to-do
for the teams which will be added to doc
clause/task folder as well where each
task will have its own JSON file to lock
the status and you can see for each one
it will including things like subject
description status and block and block
by. So this is later will be used for
identify the dependencies. So agent know
when to pick up which tasks and once
this task list is created that's where
it will run the actual task tool.

[4:17] So this task tool is same task tool as what we
have before for spin up sub agent except
it is getting some upgrades. So task tool
now has two new entities. Team name will
be used to identify which team it is and
name is actual team member name.

[7:42] When you just use one sub agent, it tends to find
one plausible explanation and stop
looking. But for some more trickier
situation, it is actually useful to have
multiple agents explore different
directions and critique share findings
with each other to conclude what is most
possible matter. And here I just tried
with the super design production
codebase that we have. And this one bug
that has been hidden pretty deep. They
can tell the agent spin up five agent
teammates to investigate different
hypothesis have them talk to each other
and try to disprove each other's theory
like scientific debate update findings
dock with whatever consensus emerge.

[1:53] You can see what each agent is doing live. And to do that, the
easiest way is you will download tmux
or if you're on Mac, you can download iTerm2, which is more advanced terminal
app. And you need to go to settings,
general, and turn on the Python API
option. Once you did that, just close it
and restart. And for the new
session, you can run cloud --teammate-mode. So this opens cloud code with
agent teams function in split view. As
team lead agents setting up new agent
team members, you will see new session
windows just popping up on the other
side. So you can see clearly what each
agent is doing just clicking inside the
session and send new message if you
want.

[5:46] This is a way how the team leads closing
or terminate sub teammates session. So
from what I understand is that the team
leads will send a shutdown request to
the sub teammate and after that request
it can send back shutdown response to
the main agent which will automatically
terminate this sub teammate session and
in the end the main agent will call this
team delete tool to actually shut down
the whole team and the message
communication protocol between different
agents is basically injecting new user
message to each other's conversation
history. So in teams folder there's a
inbox folder that is maintaining the
inbox for every single agent teammates
and it has a read status which probably
is used to identify whether the message
has been sent to the sub teammates yet.

---

## Pontos-Chave

1. **Diferenca Fundamental**:
   - Sub-agents: um agent, uma explicacao, para
   - Agent Teams: multiplos agents exploram direcoes diferentes, criticam uns aos outros

2. **Estrutura de Tasks**:
   - TaskCreate: cria lista de to-dos (JSON em .claude/tasks/)
   - Cada task tem: subject, description, status, blockedBy
   - Dependency tracking para saber quando pegar qual task

3. **Task Tool Atualizado**:
   - Novos campos: team_name (identifica o team) e name (nome do membro)

4. **Comunicacao entre Agents**:
   - Inbox folder em teams/
   - Mensagens sao injetadas no conversation history de cada agent
   - Read status para tracking

5. **Visualizacao Split View**:
   - tmux ou iTerm2 (Mac)
   - Comando: `claude --teammate-mode`
   - Ve cada agent trabalhando em pane separado

6. **Shutdown Protocol**:
   - Team lead envia shutdown request
   - Teammate responde com shutdown response
   - Main agent chama team_delete tool para encerrar
