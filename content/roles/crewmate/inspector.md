---
{"id":"role-inspector","kind":"role","category":"crewmate","title":{"zh-CN":"检查员","en":"Inspector"},"summary":{"zh-CN":"检查员可用 /cmp 比较两名玩家是否属于同一阵营，中立和转换阵营角色按规则归类。","en":"The Inspector compares two players' team alignment with /cmp, using special rules for Neutrals and converted roles."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Inspector.cs"}
---

<!-- zh-CN -->
## 职业能力

检查员可检查两名玩家是否属于同一阵营，并收到肯定或否定结果。所有中立玩家和已转换阵营的玩家按同一阵营计算；骗术师算作船员，流氓算作内鬼。

检查指令：/cmp [玩家 ID 1] [玩家 ID 2]

## 设置

- **数量上限**：设置一局中检查员的最大人数。
- **隐藏检查员指令**：开启时，模组会尝试隐藏检查员的检查指令；关闭时指令会对其他玩家可见。
- **每局检查次数上限**：设置每局可使用的最大检查次数。
- **每次会议检查次数上限**：设置每次会议可使用的最大检查次数。
- **诱饵首次会议揭示职业计为已揭示**：开启时，诱饵在第一次会议揭示职业会按已揭示处理；关闭时不计为揭示。
- **目标知道自己受检**：开启时两名目标会知道自己受到检查；关闭时不会。
- **目标知道自己与谁一起受检**：开启时目标会知道另一名受检者；关闭时不会。
- **完成任务后目标知道另一名目标的阵营**：开启时任务完成后目标会收到另一名受检者的阵营；关闭时不提供此信息。
- **每完成一个任务获得的检查次数**：设置每完成一个任务增加的次数，按 0.1 为步进。
- **自定义检查员任务**：开启时可为检查员单独设置任务数量，包含公共任务、长任务和短任务选项；关闭时任务数量与其他玩家相同。

<!-- en -->
## Role

The Inspector checks whether two players are on the same team and receives an affirmative or negative result. All Neutrals and converted players count as the same team. Trickster counts as Crew, and Rascal counts as Impostor.

Check command: /cmp [player ID 1] [player ID 2]

## Settings

- **Maximum count**: Sets the maximum number of Inspectors in a match.
- **Hide Inspector commands**: ON makes the mod attempt to hide the Inspector's check commands; OFF leaves them visible to other players.
- **Maximum inspections per game**: Sets the total number of checks allowed per game.
- **Maximum inspections per meeting**: Sets how many checks are allowed in each meeting.
- **Bait reveal on first meeting counts as revealed role**: ON counts Bait's first-meeting reveal as a role reveal; OFF does not.
- **Targets know they were checked**: ON notifies both checked targets; OFF keeps the check hidden from them.
- **Targets know who they were checked with**: ON reveals the other checked target; OFF does not.
- **Reveal the other target's team after tasks**: ON reveals the other target's team after task completion; OFF does not.
- **Ability uses gained per task**: Sets additional checks per completed task, in 0.1 increments.
- **Override Inspector tasks**: ON allows a separate task setup, including common-task availability and long and short task counts; OFF gives the Inspector the same task count as everyone else.
