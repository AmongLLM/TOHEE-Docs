---
{"id":"role-jinx","kind":"role","category":"neutral","title":{"en":"Jinx","zh-CN":"扫把星"},"summary":{"zh-CN":"受到攻击时可用有限次数的厄运反击；内鬼阵营消灭后按中立平衡条件获胜。","en":"Counter eligible attacks with limited jinxes; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Jinx.cs"}
---
<!-- zh-CN -->
## 扫把星

扫把星受到符合条件的击杀攻击时，会消耗一次厄运次数并取消这次攻击。开启对应选项后，攻击者也会被反杀；变为瘟疫等天启职业的攻击者不会触发反击。扫把星不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：扫把星再次击杀前的等待时间。
- **可使用通风口**：设置扫把星能否使用通风口。
- **内鬼视野**：设置扫把星是否拥有内鬼视野。
- **厄运次数**：扫把星可反击的次数。
- **能力尚有次数时击杀攻击者**：设置扫把星能否在能力次数未耗尽时击杀攻击者。

<!-- en -->
## Jinx

An eligible kill attempt against the Jinx consumes one limited jinx charge and is canceled. When the corresponding option is enabled, the attacker is also killed. Attacks from transformed Apocalypse roles bypass the counter. The Jinx does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before the Jinx can kill again.
- **Can vent:** Whether the Jinx can use vents.
- **Impostor vision:** Whether the Jinx has Impostor vision.
- **Jinx spell count:** Number of jinxes available.
- **Kill attacker while ability remains:** Whether the Jinx kills the attacker while ability uses remain.
