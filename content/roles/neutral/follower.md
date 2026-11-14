---
{"id":"role-follower","kind":"role","category":"neutral","title":{"en":"Follower","zh-CN":"赌徒"},"summary":{"zh-CN":"用击杀按钮选择目标；每次选择或更换都会消耗次数。目标获胜时，赌徒即使已死亡也能一同获胜。","en":"Choose a target with the kill button; each initial choice or change uses a charge. If the target wins, the Follower wins even after death."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Follower.cs"}
---
<!-- zh-CN -->
## 赌徒

赌徒可以使用击杀按钮选择一名目标，也可以再次使用来更换目标。首次选择目标也会消耗一次次数。赌徒会与目标一同获胜，而且死亡后仍可获胜。

### 设置

- **目标选择次数上限**：可选择目标的总次数，包括首次选择和之后的更换。
- **下注冷却**：再次选择目标前的基础等待时间。
- **每名死亡玩家增加的冷却**：场上每多一名死亡玩家，下注冷却增加的时长。
- **最高下注冷却**：下注冷却的上限。
- **知道目标职业**：开启后，赌徒能看到目标职业；关闭后看不到。
- **目标知道自己被跟随**：开启后，目标会知道赌徒是谁；关闭后目标不会知道。

<!-- en -->
## Follower

The Follower can use the kill button to choose a target, then use it again to switch targets. Choosing the first target also uses one charge. The Follower wins with their target and can still win after death.

### Settings

- **Maximum target selections:** Total number of target choices, including the first target and later changes.
- **Follow cooldown:** Base cooldown before choosing or changing a target.
- **Cooldown increase per dead player:** The cooldown increases by this amount for each dead player in the game.
- **Maximum follow cooldown:** Upper limit for the increased cooldown.
- **Knows target's role:** When enabled, the Follower sees the target's role.
- **Target knows who the Follower is:** Whether the target is told who is following them.
