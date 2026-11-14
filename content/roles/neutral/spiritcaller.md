---
{"id":"role-spiritcaller","kind":"role","category":"neutral","title":{"en":"Spiritcaller","zh-CN":"灵魂召唤者"},"summary":{"zh-CN":"可转化的击杀目标会成为恶灵；恶灵可短暂冻结、致盲玩家或保护灵魂召唤者，并会在灵魂召唤者获胜时一同获胜。","en":"Eligible kill victims become Evil Spirits that can briefly freeze or blind players or protect the Spiritcaller; they also win when the Spiritcaller wins."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Spiritcaller.cs"}
---
<!-- zh-CN -->
## 灵魂召唤者

灵魂召唤者可以击杀玩家。若目标不是内鬼或不能被转化的角色，且恶灵数量未达到上限，目标会变为恶灵；否则击杀按普通方式处理。恶灵可以帮助灵魂召唤者：短暂冻结其他玩家、遮蔽其视野，或给予灵魂召唤者一个可短暂抵挡击杀的护盾。灵魂召唤者按其中立阵营的计数胜利规则获胜；恶灵会在灵魂召唤者获胜时一同获胜。

## 设置

- **击杀冷却**：再次使用能力前的等待时间。
- **可使用通风口**：设置灵魂召唤者能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用默认视野。
- **恶灵数量上限**：灵魂召唤者可创造的恶灵数量上限。
- **恶灵能力冷却**：恶灵再次使用能力前的等待时间。
- **恶灵冻结时间**：恶灵冻结玩家的持续时间。
- **恶灵保护时间**：恶灵提供的护盾持续时间。
- **恶灵致盲程度**：恶灵能造成的视野遮蔽程度。
- **恶灵致盲时间**：玩家被恶灵致盲的持续时间。

<!-- en -->
## Spiritcaller

The Spiritcaller can kill players. A target becomes an Evil Spirit if they are not an Impostor, are eligible for conversion, and the Spiritcaller has not reached the spirit limit; otherwise, the kill proceeds normally. Evil Spirits can briefly freeze other players, block their vision, or give the Spiritcaller a shield that blocks an attempted kill. The Spiritcaller wins under its counted Neutral team condition, and Evil Spirits win with the Spiritcaller.

## Settings

- **Kill cooldown:** Time before the Spiritcaller can use their ability again.
- **Can vent:** Whether the Spiritcaller can use vents.
- **Impostor vision:** When enabled, the Spiritcaller has Impostor vision; otherwise, they have default vision.
- **Maximum number of Evil Spirits:** Maximum number of spirits the Spiritcaller can create.
- **Evil Spirit ability cooldown:** Time before a spirit can use its ability again.
- **Freeze duration:** How long an Evil Spirit can freeze a player.
- **Protection duration:** How long an Evil Spirit's shield protects the Spiritcaller.
- **Blinding strength:** How much an Evil Spirit can reduce a player's vision.
- **Blinding duration:** How long the vision effect lasts.
