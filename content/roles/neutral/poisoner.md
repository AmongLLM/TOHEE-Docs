---
{"id":"role-poisoner","kind":"role","category":"neutral","title":{"en":"Poisoner","zh-CN":"投毒者"},"summary":{"zh-CN":"对目标下毒，目标在延迟结束或会议开始时死亡；内鬼阵营消灭后按中立平衡条件获胜。","en":"Poison a target so they die after a delay or when a meeting starts; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Poisoner.cs"}
---
<!-- zh-CN -->
## 投毒者

投毒者的击杀会延迟生效。使用能力给目标下毒后，目标会在设定延迟结束时死亡；若会议开始或有人报告尸体，尚未结算的中毒目标会立即结算。投毒者不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **投毒冷却**：再次下毒前的等待时间。
- **毒杀延迟**：目标中毒后死亡前的时间。
- **可使用通风口**：设置投毒者能否使用通风口。
- **内鬼视野**：设置投毒者是否拥有内鬼视野。

<!-- en -->
## Poisoner

The Poisoner's kills are delayed. Poison a target, and they die when the configured delay expires. If a meeting starts or a body is reported first, pending poison kills are resolved immediately. The Poisoner does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Poison cooldown:** Time before poisoning another player.
- **Poison kill delay:** Delay before a poisoned target dies.
- **Can vent:** Whether the Poisoner can use vents.
- **Impostor vision:** Whether the Poisoner has Impostor vision.
