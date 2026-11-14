---
{"id":"role-medusa","kind":"role","category":"neutral","title":{"en":"Medusa","zh-CN":"美杜莎"},"summary":{"zh-CN":"通过报告按钮石化尸体，使尸体无法再次被报告；内鬼阵营消灭后按中立平衡条件获胜。","en":"Stone bodies with the report button so they cannot be reported again; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Medusa.cs"}
---
<!-- zh-CN -->
## 美杜莎

美杜莎可以用报告按钮石化尸体。石化后，尸体无法被报告。美杜莎不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **石化尸体后的击杀冷却**：石化尸体后应用的冷却时间。
- **可使用通风口**：设置美杜莎能否使用通风口。
- **内鬼视野**：设置美杜莎是否拥有内鬼视野。

<!-- en -->
## Medusa

The Medusa can stone a body with the report button. A stoned body cannot be reported. The Medusa does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before killing again.
- **Kill cooldown after stone gaze:** Cooldown applied after stoning a body.
- **Can vent:** Whether Medusa can use vents.
- **Impostor vision:** Whether Medusa has Impostor vision.
