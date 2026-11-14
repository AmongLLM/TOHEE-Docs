---
{"id":"role-captain","kind":"role","category":"crewmate","title":{"zh-CN":"舰长","en":"Captain"},"summary":{"zh-CN":"舰长每完成任务可减慢一名随机非船员玩家，船员可能看到其标记；投票驱逐舰长会失去附加职业。","en":"Each completed task lets the Captain slow a random non-Crew player; Crewmates may see a marker, and voting the Captain out costs an add-on."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Captain.cs"}
---

<!-- zh-CN -->
## 职业能力

舰长每完成一个任务，就会获得减慢一名随机非船员玩家的能力。根据设置，船员会在舰长名字旁看到星形标记。投票驱逐舰长的玩家会失去一个附加职业。

## 设置

- **数量上限**：设置一局中舰长的最大人数。
- **船员可以发现舰长**：开启时船员可发现舰长；关闭时不能。此项开启后，可另行设置叛徒是否也能发现舰长。
- **降低后的速度**：设置目标受到减速后的速度。
- **减速持续时间**：设置目标保持减速多久。
- **减速目标所需任务数**：设置完成多少任务后可减慢随机非船员目标。
- **公开舰长所需任务数**：设置完成多少任务后舰长会向船员公开身份。
- **可以选择友善中立/混乱中立/邪恶中立/带刀中立/灾厄中立**：分别设置舰长能否选中对应中立职业类别。
- **自定义舰长任务**：开启时可单独设置任务；关闭时舰长与其他玩家任务相同。自定义内容包括是否有公共任务，以及长任务、短任务数量。

<!-- en -->
## Role

For each task completed, the Captain gains the ability to slow a random non-Crew player. Depending on settings, Crewmates see a star beside the Captain's name. A player who votes the Captain out loses an add-on.

## Settings

- **Maximum count**: Sets the maximum number of Captains in a match.
- **Crewmates can find Captain**: ON lets Crewmates identify the Captain; OFF does not. When enabled, a separate setting controls whether Madmates can also find the Captain.
- **Reduced speed**: Sets the speed of a targeted player while slowed.
- **Reduced-speed duration**: Sets how long the slowdown lasts.
- **Tasks required before reducing a target's speed**: Sets how many tasks the Captain must complete to slow a random non-Crew target.
- **Tasks required before revealing the Captain**: Sets how many tasks must be completed before the Captain is revealed to the Crew.
- **Captain can target Neutral Benign / Neutral Chaos / Neutral Evil / Neutral Killing / Neutral Apocalypse**: Each option controls whether the Captain may target that Neutral category.
- **Override Captain tasks**: ON allows a separate task setup; OFF gives the Captain the same tasks as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
