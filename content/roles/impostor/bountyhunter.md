---
{"id":"role-bountyhunter","kind":"role","category":"impostor","title":{"zh-CN":"赏金猎人","en":"Bounty Hunter"},"summary":{"zh-CN":"击杀当前悬赏目标可缩短下一次击杀冷却，击杀其他人则会延长冷却；目标会定时更换。","en":"Killing the assigned target shortens the next kill cooldown; killing someone else lengthens it, and the target changes over time."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/BountyHunter.cs"}
---

<!-- zh-CN -->
## 技能

赏金猎人会获得一名悬赏目标。限时内击杀该目标会缩短下一次击杀冷却；击杀其他玩家会延长冷却。目标会在设定时间后更换；每次会议结束后，目标更换倒计时会重新开始。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名赏金猎人。
- **目标更换时间**：设置悬赏目标保持多久后更换。
- **击杀悬赏目标后的冷却**：设置成功击杀当前目标后的击杀冷却。
- **击杀其他玩家后的冷却**：设置未击杀当前目标时的击杀冷却。
- **显示目标箭头**：开启时显示指向目标的箭头；关闭时不显示。

<!-- en -->
## Ability

The Bounty Hunter receives an assigned target. Killing that target before the deadline shortens the next kill cooldown; killing someone else lengthens it. The target changes after the configured time, and its change timer restarts after each meeting.

## Options

- **Max**: Maximum number of Bounty Hunters in a match.
- **Time Until Target Swaps**: How long the current target remains assigned.
- **Kill Cooldown After Killing Bounty**: Cooldown after killing the assigned target.
- **Kill Cooldown After Killing Others**: Cooldown after killing someone who is not the assigned target.
- **Show Arrow Pointing Towards Target**: When enabled, an arrow points to the target; otherwise no arrow appears.
