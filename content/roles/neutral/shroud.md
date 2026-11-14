---
{"id":"role-shroud","kind":"role","category":"neutral","title":{"en":"Shroud","zh-CN":"裹尸布"},"summary":{"zh-CN":"给玩家披上裹尸布后，该玩家会自动尝试击杀附近目标；未消耗的标记会在会议结束时杀死标记玩家，前提是裹尸布仍存活。","en":"Shroud a player to make them automatically attempt to kill nearby targets; an unused mark kills its holder after a meeting if the Shroud is alive."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Shroud.cs"}
---
<!-- zh-CN -->
## 裹尸布

裹尸布不会直接击杀目标，而是使用击杀按钮给玩家披上裹尸布。裹尸布存活时，被标记玩家会自动尝试击杀正常击杀范围内最近的存活玩家（不包括裹尸布和已转化的末日阵营角色）；成功击杀后标记会被消耗。裹尸布、被标记玩家或最近目标处于通风口或移动平台上时不会执行这次自动击杀。未消耗的标记会在会议结束时杀死仍存活的标记玩家，前提是裹尸布仍存活。未成年小小船员不能被标记。

裹尸布可以在被披上裹尸布玩家的名字旁看到「◈」标记。会议中，若裹尸布仍存活，带有「◈」标记且尚未造成击杀的玩家会死亡。

## 设置

- **裹尸布冷却**：再次使用能力前的等待时间。
- **可使用通风口**：设置裹尸布能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用船员视野。

<!-- en -->
## Shroud

The Shroud does not kill normally. Instead, they use the kill button to shroud a player, causing that player to kill others. A shrouded player who does not make a kill suicides after a meeting.

While the Shroud is alive, a marked player automatically tries to kill the nearest living player within normal kill range, excluding Shrouds and transformed Neutral Apocalypse roles. A successful kill consumes the mark. The automatic kill does not happen while the Shroud, marked player, or nearest target is in a vent or on a moving platform. Nice Mini players under 18 cannot be marked.

The Shroud sees a “◈” beside shrouded players' names. In meetings, shrouded players marked “◈” who have not made a kill die if the Shroud is still alive when the meeting ends.

The Shroud is a separate Neutral team. After the Impostors are gone, it can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. The Shroud does not have to be the last player alive.

## Settings

- **Shroud cooldown:** Time before using the ability again.
- **Can vent:** Whether the Shroud can use vents.
- **Impostor vision:** When enabled, the Shroud has Impostor vision; otherwise, they have Crewmate vision.
