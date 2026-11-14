---
{
  "id": "role-charmed",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "魅魔小弟",
    "en": "Charmed"
  },
  "summary": {
    "zh-CN": "由魅魔转化获得；会按魅魔阵营的设置计入胜负，并与魅魔一同获胜。",
    "en": "Converted by Cultist; its team count follows Cultist settings and it wins with the Cultist."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Cultist.cs"
}
---
<!-- zh-CN -->

## 效果

魅魔可将符合条件的船员或内鬼转化为魅魔小弟；主持人可允许中立者被转化。魅魔小弟会随魅魔一同获胜。胜负人数可设置为不计人数、计入魅魔阵营或保持原阵营。魅魔小弟始终能识别魅魔；`CultistKnowTargetRole` 控制魅魔是否能识别魅魔小弟，而魅魔小弟之间互相识别需要同时启用 `CultistKnowTargetRole` 和 `CultistTargetKnowOtherTarget`。此身份不会开局随机分配。

## 相关设置

- **Cultist_CharmedCountMode（Charmed 计入阵营）**：设置魅魔小弟玩家不计人数、计入魅魔阵营，或保留原阵营。
- **CultistCanCharmNeutral（中立者可被魅惑）**：控制魅魔能否转化中立者。
- **CultistKnowTargetRole / CultistTargetKnowOtherTarget（魅魔与 Charmed 互相识别）**：前者控制魅魔是否能识别魅魔小弟；后者控制魅魔小弟之间能否互相识别，且只有启用前者后才生效。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

Cultist can convert eligible Crewmates or Impostors into Charmed; the host can allow Neutrals to be converted. Charmed wins with Cultist. Its game-counting mode can be set to count as nobody, count as Cultist, or keep its original team. Charmed players always recognize Cultist. `CultistKnowTargetRole` controls whether Cultist recognizes Charmed players; Charmed players recognize one another only when both `CultistKnowTargetRole` and `CultistTargetKnowOtherTarget` are enabled. This identity is not randomly assigned at game start.

## Related settings

- **Cultist_CharmedCountMode**: Set Charmed players to count as nobody, as Cultist, or as their original team.
- **CultistCanCharmNeutral**: Whether Cultist can convert Neutral players.
- **CultistKnowTargetRole / CultistTargetKnowOtherTarget**: The first option controls whether Cultist recognizes Charmed players. The second controls whether Charmed players recognize one another, and only takes effect when the first option is enabled.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
