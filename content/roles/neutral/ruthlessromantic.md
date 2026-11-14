---
{"id":"role-ruthlessromantic","kind":"role","category":"neutral","title":{"en":"Ruthless Romantic","zh-CN":"无情浪漫者"},"summary":{"zh-CN":"恋人作为带刀中立死亡，或其死亡没有可确认的凶手时，浪漫者会转为无情浪漫者；达到该中立阵营的胜利条件后，已死亡的恋人也会获胜。","en":"Become Ruthless Romantic when a Neutral Killer partner dies or a partner dies without a recorded killer; the dead partner also wins when the Ruthless Romantic team meets its neutral parity condition."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Romantic.cs"}
---
<!-- zh-CN -->
## 无情浪漫者

当浪漫者的恋人属于带刀中立并死亡时，浪漫者会转变为无情浪漫者。若恋人属于船员或不带刀中立，但死亡时没有可确认的凶手，浪漫者也会转变为无情浪漫者；若恋人属于内鬼，浪漫者会转为 Refugee。

无情浪漫者属于独立的中立阵营。内鬼出局后，若船员人数不多于仍计入胜负的中立玩家，且这些中立玩家都属于同一阵营，无情浪漫者即可获胜；不必成为最后存活的玩家。已死亡的恋人会一同获胜。

## 设置

- **击杀冷却**：再次击杀前的等待时间。
- **可使用通风口**：设置无情浪漫者能否使用通风口。

<!-- en -->
## Ruthless Romantic

The Romantic becomes a Ruthless Romantic when their Neutral Killer partner dies. They also become Ruthless Romantic if a Crewmate or non-killing Neutral partner dies without a recorded killer; an Impostor partner instead changes the Romantic into a Refugee.

The Ruthless Romantic is a separate Neutral team. After the Impostors are gone, they can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. They do not have to be the last player alive. Their dead partner wins with them.

## Settings

- **Kill cooldown:** Time before killing again.
- **Can vent:** Whether the Ruthless Romantic can use vents.
