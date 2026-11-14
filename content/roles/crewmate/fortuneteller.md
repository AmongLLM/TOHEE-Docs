---
{"id":"role-fortuneteller","kind":"role","category":"crewmate","title":{"zh-CN":"调查员","en":"Fortune Teller"},"summary":{"zh-CN":"调查员会议投票后会获得目标职业线索，完成全部任务后可看到目标的确切职业。","en":"The Fortune Teller gets a role clue after voting for a player and can see the exact role after completing all tasks."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/FortuneTeller.cs"}
---

<!-- zh-CN -->
## 职业能力

调查员在会议中投票给玩家后，会收到关于该玩家职业的线索。完成全部任务后再投票，可以得知目标的确切职业。

## 设置

- **数量上限**：设置一局中调查员的最大人数。
- **技能使用次数上限**：设置调查员最多可以使用技能多少次。
- **随机显示已启用职业**：开启时，提示会在目标真实职业与已启用职业间混合显示；此模式下不能重复调查同一目标。
- **未完成任务时可知道确切职业**：开启时，即使任务未完成也可能看到玩家的确切职业；关闭时须完成任务才能看到。
- **完成任务后可知道确切职业**：开启时，完成任务后可以看到玩家的确切职业；关闭时完成任务也不能看到确切职业。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的技能次数，按 0.1 为步进。
- **自定义调查员任务**：开启时可为调查员设置不同的任务数量；关闭时与其他玩家的任务数量相同。另有公共任务开关以及长任务、短任务数量选项。

<!-- en -->
## Role

When the Fortune Teller votes for a player during a meeting, they receive a clue about that player's role. After completing all tasks, voting for a player reveals the target's exact role.

## Settings

- **Maximum count**: Sets the maximum number of Fortune Tellers in a match.
- **Maximum ability uses**: Sets how many times the Fortune Teller can use the ability.
- **Show random active roles in hints**: ON mixes the target's actual role with active roles in the hint, and prevents checking the same player multiple times; OFF does not.
- **Can know exact roles before tasks are complete**: ON permits exact-role results before completing tasks; OFF requires task completion.
- **Know exact roles on task completion**: ON allows exact-role results after completing tasks; OFF prevents exact-role results even after completion.
- **Ability uses gained per task**: Sets the uses gained for each completed task, in 0.1 increments.
- **Override Fortune Teller tasks**: ON permits a separate task count; OFF gives the role the same count as everyone else. The settings also include common-task availability and the number of long and short tasks.
