---
{"id":"role-traitor","kind":"role","category":"neutral","title":{"en":"Traitor","zh-CN":"背叛者"},"summary":{"zh-CN":"背叛者能识别内鬼但不能击杀他们；内鬼出局后，背叛者按独立中立阵营的计数胜利规则获胜。","en":"The Traitor can identify but cannot kill Impostors; after they are gone, the Traitor wins under its separate Neutral team count rule."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Traitor.cs"}
---
<!-- zh-CN -->
## 背叛者

背叛者曾是内鬼，但背叛了内鬼阵营。背叛者知道内鬼是谁，内鬼却不知道背叛者的身份。内鬼可以击杀背叛者，但背叛者不能击杀内鬼。

背叛者属于独立的中立阵营。内鬼出局后，若船员人数不多于仍计入胜负的中立玩家，且这些中立玩家都属于同一阵营，背叛者即可获胜；不必击杀所有其他玩家。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **可使用通风口**：设置背叛者能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用船员视野。
- **可使用破坏**：设置背叛者能否发动破坏。
- **知道叛徒类附加职业**：设置背叛者能否识别 Madmate 等叛徒类附加职业。

<!-- en -->
## Traitor

The Traitor was an Impostor who betrayed the Impostors. The Traitor knows who the Impostors are, but they do not know the Traitor. Impostors can kill the Traitor, but the Traitor cannot kill them.

The Traitor is a separate Neutral team. After the Impostors are gone, the Traitor team can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. The Traitor does not have to kill every other player.

### Settings

- **Kill cooldown:** Time before killing again.
- **Can vent:** Whether the Traitor can use vents.
- **Impostor vision:** When enabled, the Traitor has Impostor vision; otherwise, they have Crewmate vision.
- **Can sabotage:** Whether the Traitor can sabotage.
- **Knows Madmates:** Whether the Traitor can identify Madmates.
