# Claude Code Agent Teams (Full Tutorial): The BEST FEATURE of Claude Code is HERE!

**Canal:** AICodeKing
**URL:** https://www.youtube.com/watch?v=zm-BBZIAJ0c
**Idioma:** Ingles (auto-generated)

---

## Transcricao

[0:02] [music]
[0:04] Hi, welcome to another video.
[0:08] So, Claude Code just got what might be
[0:11] its most significant feature yet. It's
[0:14] called agent teams, and it basically
[0:17] lets you run multiple Claude Code
[0:18] instances that work together as a
[0:21] coordinated team.
[0:23] One session acts as the team lead. It
[0:26] spawns teammates, assigns tasks, and the
[0:29] teammates work independently in their
[0:32] own context windows while messaging each
[0:34] other directly.
[0:36] And if you've been following my channel,
[0:38] you know I've been covering this exact
[0:40] trajectory.
[0:42] I talked about tasks, which gave Claude
[0:45] code persistent task management and
[0:48] coordination across sessions.
[0:51] I talked about Ralphie which was the
[0:53] community solution for running multiple
[0:55] AI agents in parallel with git work
[0:58] trees.
[1:00] Well, agent teams is anthropic official
[1:03] answer to all of that and it goes
[1:05] further than either of them. So, let's
[1:08] get right into it.

[1:10] Now, before I explain how agent teams work,
[1:12] let me first clarify why this is different from sub agents.
[1:16] Because I know a lot of people are going to ask.
[1:19] Sub agents are spawned by the main Claude code session
[1:23] and they report back to it. It's hierarchical.
[1:26] The main session is the boss, the sub agents are the workers.
[1:30] Agent teams are different. There's still a lead,
[1:33] but teammates can talk to each other directly.
[1:36] They're peers, not subordinates.
[1:39] The lead coordinates and synthesizes, but the teammates
[1:42] can share findings, challenge each other, and collaborate
[1:45] without going through the lead for every message.
[1:48] This is a fundamental architectural difference
[1:51] that enables much more sophisticated workflows.

[3:56] teammates, and
[3:59] each teammate is a full independent
[4:01] Claude code instance with its own
[4:03] context window. This is the key insight
[4:06] here. Each agent gets a clean, narrow
[4:08] context, which means better reasoning.
[4:12] The more stuff you cram into one context
[4:14] window, the worse the model performs.
[4:18] By splitting work across multiple
[4:20] agents, each one can focus on its
[4:23] specific domain without getting
[4:25] distracted by everything else.
[4:28] The teammates share a task list with
[4:30] dependency tracking. So you can have
[4:33] task A and task B running in parallel,
[4:36] but task C waits until both are done.
[4:40] This is the same concept we saw with the
[4:42] tasks feature, but now it's being used
[4:45] to coordinate actual separate agents.
[4:48] For communication, there's an
[4:50] inbox-based messaging system. The team
[4:53] lead can send messages to specific
[4:56] teammates or broadcast to everyone.
[4:59] Teammates can message each other directly.

[5:01] This is that peer-to-peer messaging I
[5:04] mentioned earlier. When the security
[5:07] reviewer finds something concerning, it
[5:10] can message the test coverage reviewer
[5:12] directly and say, "Hey, check if there
[5:15] are tests covering this authentication
[5:17] edge case."
[5:19] Now, there are two backends for how
[5:21] these teammates actually run. By
[5:24] default, it uses inprocess mode, which
[5:28] works in any terminal, but you can't see
[5:30] what each agent is doing. If you want
[5:33] visibility, you can switch to tmux mode
[5:36] by setting claude code
[5:40] spawn_backend
[5:42] equals tmux. In tmux mode, you get
[5:46] split panes where you can actually watch
[5:48] each teammate working in real time. The
[5:51] team lead gets the left pane and the
[5:54] workers stack up on the right. It's like
[5:57] watching a little army of coders, which
[5:59] is honestly pretty fun to watch.
[6:02] One thing to note though, split panes require tmux or iTerm2.

[7:43] If one finds evidence that eliminates
[7:45] another's hypothesis, it can share that
[7:48] immediately.
[7:50] This is the kind of workflow that
[7:52] Ralphie was enabling with parallel
[7:54] execution and git work trees. But agent
[7:58] teams handle the coordination natively.
[8:01] You don't need to set up YML files with
[8:03] parallel groups. You don't need git work
[8:06] trees. You don't need the d-max parallel
[8:10] flag. You just describe what you want
[8:12] and Claude handles the rest. Now that
[8:16] said, Ralphie still has its place.
[8:19] Ralphie gives you branch per task
[8:21] isolation, automatic PR creation, and
[8:25] support for multiple AI engines like
[8:28] Open Code and Codex CLI.
[8:32] Agent teams are Claude-only. So if you need branch isolation
[8:41] or if you want to use different AI
[8:42] backends, Ralphie is still the better
[8:45] choice for that.
[8:47] Now, I do have to talk about the
[8:49] elephant in the room, token usage. Agent
[8:53] teams use significantly more tokens than single sessions.

[10:00] So, make sure your claude.md is solid
[10:03] because that's doing a lot of heavy
[10:05] lifting for your teammates.
[10:07] Now, let me talk about the current
[10:09] limitations because this is still
[10:11] experimental and the rough edges are
[10:13] real. First, there's no session
[10:16] resumption for inprocess teammates. If
[10:20] you use the /resume commands, your
[10:24] teammates won't come back. That's a
[10:26] pretty significant limitation for longer
[10:28] running work. Second, the lead sometimes
[10:32] implements instead of delegating.
[10:35] This is annoying. You tell it to create
[10:37] a team and sometimes it just starts
[10:40] doing the work itself instead of
[10:42] spawning teammates. The workaround is to
[10:45] explicitly tell it to wait for teammates
[10:47] to complete their tasks. You can also
[10:50] use delegate mode by pressing shift plus
[10:53] tab, which restricts the lead to
[10:56] coordination only tools.

[11:27] Fourth, and this is something a lot of
[11:30] people won't think about, your task
[11:32] definitions matter a lot. Each
[11:35] teammate's task needs to be
[11:37] self-contained enough that it can work
[11:39] independently.
[11:41] If you define tasks with heavy
[11:43] dependencies on each other, you'll get
[11:46] failures because the code one teammate
[11:48] needs doesn't exist yet.
[11:51] Structure your tasks so that parallel
[11:54] work is actually independent.
[11:57] Use the dependency tracking for things
[11:59] that genuinely need to wait.
[12:02] So where does this leave us? If I look
[12:05] at the progression, we went from todos
[12:08] which were just in-memory checklists to
[12:11] tasks which gave us persistent
[12:14] file-based task management with
[12:16] dependency tracking to agent teams which
[12:20] give us actual multi-agent orchestration
[12:23] with peer-to-peer communication.
[12:27] This is the AI as a team future I talked
[12:30] about. It's happening now.

---

## Pontos-Chave

1. **Agent Teams vs Sub-agents**: Sub-agents sao hierarquicos (reportam ao main). Agent Teams sao peers que se comunicam diretamente.

2. **Contexto Isolado**: Cada teammate tem sua propria context window, o que melhora o raciocinio.

3. **Task List Compartilhada**: Dependency tracking permite paralelismo com sincronizacao.

4. **Dois Backends**:
   - `inprocess` (padrao): funciona em qualquer terminal
   - `tmux`: split panes para visualizar cada agent

5. **Limitacoes**:
   - Sem session resumption para teammates
   - Lead as vezes executa em vez de delegar (usar Shift+Tab para delegate mode)
   - Tasks precisam ser self-contained

6. **CLAUDE.md importa**: Teammates herdam configuracoes do CLAUDE.md
