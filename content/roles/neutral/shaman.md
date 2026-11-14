---
{"id":"role-shaman","kind":"role","category":"neutral","title":{"en":"Shaman","zh-CN":"萨满"},"summary":{"zh-CN":"每轮选择一名玩家作为巫毒娃娃；选定后，对萨满使用击杀按钮的互动会转移到娃娃。","en":"Choose a player as a voodoo doll each round; while one is selected, kill-button attacks directed at the Shaman are redirected to the doll."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Shaman.cs"}
---
<!-- zh-CN -->
## 萨满

萨满每轮可以使用击杀按钮选择一名玩家作为巫毒娃娃。选定娃娃后，有人使用击杀按钮攻击萨满时，攻击会转移到娃娃身上；尚未选择娃娃时，攻击可以直接击杀萨满。若攻击者无法击杀被选目标，这次击杀会取消；再次尝试时仍可能击杀萨满。

萨满存活到游戏结束后会随获胜阵营获胜。

### 设置

- **人数上限**：一局中可出现的萨满数量上限。
- **巫毒冷却**：再次选择巫毒娃娃前的等待时间。

<!-- en -->
## Shaman

Once per round, the Shaman can use the kill button to choose a player as a voodoo doll. While a doll is selected, kill-button attacks on the Shaman are redirected to it; before a doll is chosen, an attack can kill the Shaman directly. If the attacker cannot kill the chosen target, the attack is canceled; trying again can still kill the Shaman.

The Shaman wins with the winning team if they survive until the end.

### Settings

- **Maximum number:** Maximum number of Shamans in a match.
- **Voodoo cooldown:** Time before choosing a voodoo doll again.
