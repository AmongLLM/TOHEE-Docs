---
{"id":"role-pickpocket","kind":"role","category":"neutral","title":{"en":"Pickpocket","zh-CN":"小偷"},"summary":{"zh-CN":"每次击杀都会增加额外投票权，且可对其他玩家隐藏；内鬼阵营消灭后按中立平衡条件获胜。","en":"Gain extra voting power for kills and optionally hide it; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pickpocket.cs"}
---
<!-- zh-CN -->
## 小偷

小偷会根据自己造成的击杀获得额外投票权；这些额外票数不会从目标身上扣除。根据设置，额外票数会对其他玩家隐藏。小偷不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：再次击杀并偷取投票权前的等待时间。
- **可使用通风口**：设置小偷能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用船员视野。
- **每次击杀获得的票数**：设置每次击杀增加的投票权，按 0.1 递增；累计结果会截为整数票。
- **隐藏额外票数**：设置偷来的票数是否对其他玩家隐藏。

<!-- en -->
## Pickpocket

The Pickpocket gains extra voting power for kills; these votes are added rather than taken from the killed player. A setting controls whether the extra votes are hidden. The Pickpocket does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before the Pickpocket can kill and steal votes again.
- **Can vent:** Whether the Pickpocket can use vents.
- **Impostor vision:** Whether the Pickpocket has Impostor vision.
- **Votes gained per kill:** Extra voting power added per kill, in increments of 0.1; the total is truncated to whole votes.
- **Hide additional votes:** Whether the stolen votes are hidden from other players.
