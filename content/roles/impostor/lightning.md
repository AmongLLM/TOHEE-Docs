---
{"id":"role-lightning","kind":"role","category":"impostor","title":{"zh-CN":"球状闪电","en":"Lightning"},"summary":{"zh-CN":"击中目标后延迟将其变成量子幽灵；幽灵会在被碰触或会议结束后死亡。","en":"Turns a target into a quantum ghost after a delay; the ghost dies if touched or after a meeting."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Lightning.cs"}
---

<!-- zh-CN -->
## 技能

球状闪电不能普通击杀。使用击杀键命中目标后，目标会在设定延迟后汽化为量子幽灵，名字旁会显示「■」。若非球状闪电且非量子幽灵的玩家碰到量子幽灵，它会立即死亡；若量子幽灵存活到会议，则会在会议结束后死亡。对量子幽灵再次使用击杀键无效。根据房主设置，击杀球状闪电的凶手也可能汽化为量子幽灵。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名球状闪电。
- **汽化冷却**：设置两次汽化技能之间的等待时间。
- **汽化延迟**：设置目标从被命中到变成量子幽灵所需的时间。
- **凶手汽化为量子幽灵**：开启时，击杀球状闪电的玩家也会变成量子幽灵；关闭时不会。

<!-- en -->
## Ability

Lightning cannot make ordinary kills. A successful kill-button attack turns its target into a quantum ghost after the configured delay; a 「■」 appears beside the ghost's name. The ghost dies immediately if touched by a player who is neither Lightning nor a quantum ghost. If it survives until a meeting, it dies when the meeting ends. Using the kill button on a quantum ghost has no effect. Depending on the setting, a player who kills Lightning may also become a quantum ghost.

## Options

- **Max**: Maximum number of Lightnings in a match.
- **Lightning Cooldown**: Wait between uses of the quantizing ability.
- **Duration of the Transformation to Quantum Ghost**: Delay before the target becomes a quantum ghost.
- **Killer Can Transform into Quantum Ghost**: When enabled, the player who kills Lightning also becomes a quantum ghost; otherwise they do not.
