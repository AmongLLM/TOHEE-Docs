---
{"id":"role-copycat","kind":"role","category":"crewmate","title":{"zh-CN":"模仿者","en":"Copycat"},"summary":{"zh-CN":"模仿者使用击杀按钮复制部分船员职业；复制的职业在会议结束后重置，且模仿者不能参与职业猜测。","en":"The Copycat uses the kill button to copy selected Crewmate roles; the copied role resets after meetings, and the Copycat cannot guess roles."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/CopyCat.cs"}
---

<!-- zh-CN -->
## 职业能力

模仿者使用击杀按钮复制目标职业，但只能复制部分船员职业；部分内鬼或中立职业可按对应船员变体被复制。复制成功后获得该职业，会议结束后通常恢复为模仿者。若复制的目标拥有叛徒、魅惑、感染、跟班等阵营转换附加职业，可按设置一并复制。模仿者不能参与职业猜测。

## 设置

- **数量上限**：设置一局中模仿者的最大人数。
- **复制冷却**：设置再次复制职业前的等待时间。
- **可以复制邪恶职业的船员变体**：开启时可将部分内鬼职业按其船员变体复制；关闭时不复制这些变体。
- **可以复制阵营转换附加职业**：开启时可复制目标的叛徒、魅惑、感染、跟班、传染或无魂等阵营转换附加职业；关闭时不复制这些附加职业。

<!-- en -->
## Role

The Copycat uses the kill button to copy a target's role, but only selected Crewmate roles are copyable. Some Impostor or Neutral roles can be copied as their Crewmate variants. The copied role usually resets to Copycat after a meeting. A setting can also copy team-changing add-ons such as Madmate, Charmed, Infected, Recruit, Contagious, or Soulless. The Copycat cannot guess roles.

## Settings

- **Maximum count**: Sets the maximum number of Copycats in a match.
- **Copy cooldown**: Sets how long the Copycat must wait before copying again.
- **Can copy Crewmate variants of Evil roles**: ON allows selected Impostor roles to be copied as Crewmate variants; OFF does not.
- **Can copy team-changing add-ons**: ON copies supported team-changing add-ons from the target; OFF leaves them behind.
