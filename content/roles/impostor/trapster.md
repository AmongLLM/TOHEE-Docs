---
{"id":"role-trapster","kind":"role","category":"impostor","title":{"zh-CN":"诡雷","en":"Trapster"},"summary":{"zh-CN":"诡雷击杀的尸体会杀死报告者；击杀诱饵会让诡雷立即死亡。","en":"Bodies from Trapster kills kill the reporter; killing a Bait immediately kills the Trapster."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Trapster.cs"}
---

<!-- zh-CN -->
## 技能

诡雷击杀玩家后，该尸体会设下陷阱，杀死试图报告它的玩家。击杀诱饵会让诡雷立即死亡。若启用连锁陷阱，报告者死亡后其尸体也会触发下一道陷阱。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名诡雷。
- **击杀冷却**：设置击杀冷却。
- **连续尸体触发陷阱**：开启时，报告陷阱尸体的玩家也会被设为陷阱目标；关闭时不会连锁。
- **诡雷自己的尸体也设陷阱**：开启时，报告诡雷尸体也会触发陷阱。
  - **诡雷尸体触发连锁陷阱**：开启时，报告者尸体继续触发陷阱；关闭时不会。

<!-- en -->
## Ability

A body from a Trapster kill is trapped: anyone who tries to report it dies. Killing a Bait immediately kills the Trapster. If consecutive traps are enabled, the reporter’s body also becomes trapped.

## Options

- **Max**: Maximum number of Trapsters in a match.
- **Kill Cooldown**: Time before the Trapster can kill again.
- **Trap Consecutive Bodies**: When enabled, the reporter’s body also triggers a trap; otherwise traps do not chain.
- **Trap the Trapster’s Body**: When enabled, reporting the Trapster’s own body triggers a trap.
  - **Trap Consecutive Trapster Bodies**: When enabled, the reporter’s body triggers another trap; otherwise it does not.
