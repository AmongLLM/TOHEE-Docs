---
{
  "id": "role-oiiai",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "OIIAI",
    "zh-CN": "OIIAI"
  },
  "summary": {
    "zh-CN": "被合格玩家击杀时会尝试抹除其主角色；是否传递 OIIAI 及中立击杀者的处理方式可设置。",
    "en": "When killed by an eligible player, attempts to erase their main role; OIIAI transfer and Neutral-killer handling are configurable."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Oiiai.cs"
}
---
<!-- zh-CN -->

## 效果

非杀戮机器击杀 OIIAI 时，击杀者可能获得 OIIAI，且其主角色会尝试被抹除；同一击杀者的主角色最多抹除一次，部分角色不能被抹除。中立击杀者选择“保持原角色”时，整个 OIIAI 效果不会触发；选择失忆者或效仿者时，有击杀按钮的中立者会转为所选角色，没有击杀按钮的中立者会转为机会主义者。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **OIIAI can pass onto the killer（OIIAI 可传给击杀者）**：控制 OIIAI 的击杀者是否会获得 OIIAI 附加身份。
- **Neutrals turn to（Neutral 击杀者转变为）**：设置击杀 OIIAI 的中立者如何处理；选择保持原角色时不会触发 OIIAI 效果。选择失忆者或效仿者时，无击杀按钮的中立者实际会转为机会主义者。

<!-- en -->

## Effect

When a player other than KillingMachine kills OIIAI, the killer may receive OIIAI and their main role is checked for erasure. Each killer's role can be erased at most once, and some roles cannot be erased. For a Neutral killer, choosing No Change prevents the OIIAI effect entirely; choosing Amnesiac or Imitator changes a Neutral with a kill button to that role, while a Neutral without one becomes Opportunist.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **OIIAI can pass onto the killer**: Whether OIIAI's killer receives the OIIAI add-on.
- **Neutrals turn to**: Choose how a Neutral killer is handled. No Change prevents the OIIAI effect; when Amnesiac or Imitator is selected, a Neutral without a kill button becomes Opportunist.
