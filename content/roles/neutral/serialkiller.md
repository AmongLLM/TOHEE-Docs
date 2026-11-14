---
{"id":"role-serialkiller","kind":"role","category":"neutral","title":{"en":"Serial Killer","zh-CN":"连环杀手"},"summary":{"zh-CN":"连环杀手属于独立的中立阵营，按中立阵营的计数胜利规则获胜；队友开关目前没有额外效果。","en":"The Serial Killer is a separate Neutral team that wins under the counted-neutral endgame rule; the buddy toggle currently has no additional effect."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/SerialKiller.cs"}
---
<!-- zh-CN -->
## 连环杀手

连环杀手属于独立的中立阵营。内鬼出局后，若船员人数不多于仍计入胜负的中立玩家，且这些中立玩家都属于同一阵营，连环杀手即可获胜；不必成为最后存活的玩家。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **可使用通风口**：设置连环杀手能否使用通风口。
- **内鬼视野**：设置连环杀手是否拥有内鬼视野。
- **拥有连环杀手队友**：当前配置中保留此开关；角色代码没有为该选项定义额外行为。

<!-- en -->
## Serial Killer

The Serial Killer is a separate Neutral team. After the Impostors are gone, they can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. The Serial Killer does not have to be the last player alive.

### Settings

- **Kill cooldown:** Time before killing again.
- **Can vent:** Whether the Serial Killer can use vents.
- **Impostor vision:** Whether the Serial Killer has Impostor vision.
- **Has Serial Killer buddy:** This toggle exists in the settings, but the current role code does not define a buddy effect.
