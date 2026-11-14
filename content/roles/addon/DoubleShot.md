---
{
  "id": "role-doubleshot",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Double Shot",
    "zh-CN": "双重猜测"
  },
  "summary": {
    "zh-CN": "赌怪第一次猜错后可再猜一次，第二次猜错会死亡；仅能分配给可猜测身份的玩家。",
    "en": "A Guesser can survive one wrong guess and try again; the next wrong guess kills them."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/DoubleShot.cs"
}
---
<!-- zh-CN -->

## 效果

持有双重猜测的赌怪第一次猜错时不会死亡，可再猜一次；第二次猜错会死亡。只有具备角色猜测能力的玩家才符合分配条件。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。

<!-- en -->

## Effect

A Guesser with Double Shot survives their first incorrect guess and can guess again; a second incorrect guess kills them. Only players who can make role guesses are eligible.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
