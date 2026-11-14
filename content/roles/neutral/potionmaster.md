---
{"id":"role-potionmaster","kind":"role","category":"neutral","title":{"en":"Potion Master","zh-CN":"药剂师"},"summary":{"zh-CN":"使用揭示药水查看目标职业，双击击杀，或打开地图发动破坏；内鬼阵营消灭后按中立平衡条件获胜。","en":"Reveal a target's role, double-click to kill, or use the map to sabotage; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/PotionMaster.cs"}
---
<!-- zh-CN -->
## 药剂师

药剂师有三种药水操作：单击目标揭示其职业，双击目标进行击杀，打开破坏地图则发动破坏。揭示药水有使用次数上限；次数用尽后，击杀按钮会默认执行击杀。药剂师不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **揭示次数上限**：药剂师可揭示职业的次数。
- **可使用通风口**：设置药剂师能否使用通风口。
- **内鬼视野**：设置药剂师是否拥有内鬼视野。

<!-- en -->
## Potion Master

The Potion Master has three potion actions: single-click a target to reveal their role, double-click to kill, or open the sabotage map to sabotage. Role reveals are limited. After the reveal potions run out, the kill button defaults to killing. The Potion Master does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before killing again.
- **Maximum reveals:** Number of role reveals available.
- **Can vent:** Whether the Potion Master can use vents.
- **Impostor vision:** Whether the Potion Master has Impostor vision.
