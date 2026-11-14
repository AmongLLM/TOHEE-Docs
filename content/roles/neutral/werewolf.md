---
{"id":"role-werewolf","kind":"role","category":"neutral","title":{"en":"Werewolf","zh-CN":"月下狼人"},"summary":{"zh-CN":"击杀目标时会同时杀死狼人附近的玩家；狼人属于独立中立阵营，按中立阵营人数结算规则获胜。","en":"Killing a target also kills nearby players around the Werewolf; it is a separate Neutral team that wins under the counted-neutral endgame rule."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Werewolf.cs"}
---
<!-- zh-CN -->
## 月下狼人

月下狼人可以像其他带刀角色一样击杀目标，但击杀后，狼人附近的其他玩家也会死亡，死因标记为“撕咬”。作为平衡，月下狼人的击杀冷却较长。月下狼人属于独立的中立阵营；内鬼出局后，若船员人数不多于仍计入胜负的中立玩家，且这些中立玩家都属于同一阵营，月下狼人即可获胜，不必成为最后存活的玩家。

## 设置

- **击杀冷却**：月下狼人的击杀冷却时间。
- **撕咬范围**：以月下狼人为中心的波及范围。
- **可使用通风口**：设置月下狼人能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后不拥有内鬼视野。

<!-- en -->
## Werewolf

The Werewolf can kill like other killing roles, but other living players near it also die after a successful kill. These nearby deaths use the “Mauled” death reason. The Werewolf has a longer kill cooldown to balance this effect. The Werewolf is a separate Neutral team; after the Impostors are gone, it can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. It does not have to be the last player alive.

## Settings

- **Kill cooldown:** The Werewolf's kill cooldown.
- **Maul radius:** Radius around the Werewolf in which other players are also killed.
- **Can vent:** Whether the Werewolf can use vents.
- **Impostor vision:** When enabled, the Werewolf has Impostor vision.
