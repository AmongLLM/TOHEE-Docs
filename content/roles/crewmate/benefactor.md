---
{"id":"role-benefactor","kind":"role","category":"crewmate","title":{"zh-CN":"恩人","en":"Benefactor"},"summary":{"zh-CN":"恩人完成任务后会标记该任务，其他玩家完成被标记的任务时会获得只能抵挡直接击杀的临时护盾。","en":"The Benefactor marks completed tasks so that another player finishing one receives a temporary shield against direct kills."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Benefactor.cs"}
---

<!-- zh-CN -->
## 职业能力

恩人完成任务后会标记该任务。其他玩家完成被标记的任务时会获得临时护盾；护盾只能抵挡直接击杀。

## 设置

- **数量上限**：设置一局中恩人的最大人数。
- **每轮可标记的任务数**：设置恩人每轮可以标记多少个任务。
- **护盾持续时间**：设置护盾持续多久。
- **护盾在一次击杀尝试后破碎**：开启时，护盾承受一次击杀尝试后破碎；关闭时不会因此消耗。
- **自定义恩人任务**：开启时可为恩人单独设置任务数量；关闭时恩人与其他玩家使用相同的任务数量。相关选项可设置恩人是否有公共任务，以及长任务、短任务数量。

<!-- en -->
## Role

The Benefactor marks each task they complete. When another player completes a marked task, that player receives a temporary shield. The shield protects only against direct kill attacks.

## Settings

- **Maximum count**: Sets the maximum number of Benefactors in a match.
- **Tasks markable per round**: Sets how many tasks the Benefactor can mark in one round.
- **Shield duration**: Sets how long the shield lasts.
- **Shield breaks after one kill attempt**: ON makes the shield break on the first contact; OFF prevents it from breaking on that first contact.
- **Override Benefactor tasks**: ON allows a separate task setup; OFF gives the Benefactor the same task count as everyone else. The custom setup includes whether the role gets common tasks and the number of long and short tasks.
