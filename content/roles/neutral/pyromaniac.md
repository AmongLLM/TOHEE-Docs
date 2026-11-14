---
{"id":"role-pyromaniac","kind":"role","category":"neutral","title":{"en":"Pyromaniac","zh-CN":"焚烧狂"},"summary":{"zh-CN":"涂油后可直接击杀目标；内鬼阵营消灭后按中立平衡条件获胜。","en":"Douse and directly kill targets; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pyromaniac.cs"}
---
<!-- zh-CN -->
## 焚烧狂

对未涂油的目标，单击击杀按钮会在触发等待结束后涂油；双击则正常击杀。已涂油的目标会被单次点击直接击杀，并应用专用的焚烧冷却。焚烧狂不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **涂油冷却**：再次涂油前的等待时间。
- **击杀已涂油玩家后的冷却**：击杀已涂油玩家后使用的击杀冷却。
- **可使用通风口**：设置焚烧狂能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用船员视野。

<!-- en -->
## Pyromaniac

Against an undoused target, a single click douses them after the trigger window expires; double-clicking kills them normally. A doused target is killed directly with one click and uses the separate burn cooldown. The Pyromaniac does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before killing again.
- **Douse cooldown:** Time before dousing another player.
- **Kill cooldown after killing a doused player:** Cooldown applied after killing a doused player.
- **Can vent:** Whether the Pyromaniac can use vents.
- **Impostor vision:** Whether the Pyromaniac has Impostor vision.
