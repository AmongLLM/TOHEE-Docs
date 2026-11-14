---
{"id":"role-blackmailer","kind":"role","category":"impostor","title":{"zh-CN":"勒索者","en":"Blackmailer"},"summary":{"zh-CN":"变形勒索一名玩家，使其在会议中无法发言；再次勒索会解除先前目标的勒索。","en":"Shapeshifts to blackmail one player and silence them during meetings; a new target is released from the previous blackmail."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Blackmailer.cs"}
---

<!-- zh-CN -->
## 技能

变形到目标身上即可勒索，使其在会议中无法发言。任一时刻只会有一名被勒索者；勒索新目标会解除前一名目标的勒索，会议结束后勒索也会解除。被勒索者的身份会在会议中标记。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名勒索者。
- **勒索冷却**：设置再次勒索前的等待时间。
- **显示变形动画**：开启时显示变形动画；关闭时不显示。

<!-- en -->
## Ability

Shapeshift into a player to blackmail them, preventing them from speaking during meetings. Only one player can be blackmailed at a time; blackmailing another target releases the previous one, and the blackmail ends after the meeting. The blackmailed player is marked during meetings.

## Options

- **Max**: Maximum number of Blackmailers in a match.
- **Blackmail Cooldown**: Time before the Blackmailer can blackmail again.
- **Show Shapeshift Animations**: When enabled, shapeshift animations are shown; otherwise they are hidden.
