---
{
  "id": "role-soulless",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "没有灵魂",
    "en": "Soulless"
  },
  "summary": {
    "zh-CN": "由诅咒之人赋予，胜利结算可随原船员、内鬼或启示录队伍获胜，也可计入诅咒之人的胜利。",
    "en": "Granted by Cursed Soul; can win with its original Crewmate, Impostor, or Apocalypse team, and can also be included in Cursed Soul's win."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/CursedSoul.cs"
}
---
<!-- zh-CN -->

## 效果

诅咒之人可将符合条件的船员或内鬼转化为没有灵魂，并可设置是否能转化中立者。没有灵魂在存活人数判定中不计入阵营人数。胜利结算时，没有灵魂可随其原船员、内鬼或启示录队伍获胜；若诅咒之人自身胜利，没有灵魂也会列入其胜者。此身份不会独立随机分配。

## 相关设置

- **CursedSoulCanCurseNeutral（可诅咒中立者）**：诅咒之人设置，控制中立者能否转化为没有灵魂。
- **随机分配**：不会开局随机分配；由诅咒之人的转化能力赋予。

<!-- en -->

## Effect

Cursed Soul can convert eligible Crewmates or Impostors into Soulless, with a setting to allow Neutral targets. Soulless does not count toward team parity. At endgame it can win with its original Crewmate, Impostor, or Apocalypse team; it is also included when Cursed Soul wins. This identity is not independently assigned at random.

## Related settings

- **CursedSoulCanCurseNeutral**: Cursed Soul setting that controls whether Neutral players can become Soulless.
- **Random assignment**: Not assigned at random at game start; granted by the Cursed Soul role conversion ability.
