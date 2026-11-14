---
{
  "id": "role-oblivious",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Oblivious",
    "zh-CN": "胆小鬼"
  },
  "summary": {
    "zh-CN": "无法报告尸体；可设置诱饵强制报告对胆小鬼的影响，且与多种调查或报告角色不兼容。",
    "en": "Cannot report bodies; settings govern Bait's forced report, and the add-on is incompatible with several investigation or reporting roles."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Oblivious.cs"
}
---
<!-- zh-CN -->

## 效果

胆小鬼无法报告尸体。它与侦探（Detective）、秃鹫（Vulture）、侦察员（Sleuth）、清理工（Cleaner）、失忆者（Amnesiac）、验尸官（Coroner）、美杜莎（Medusa）、入殓师（Mortician）、灵媒（Medium）、击杀机器（KillingMachine）、GuardianAngelTOHE 和利他者（Altruist）不兼容。启用诱饵免疫后，击杀诱饵不会触发强制自动报告，但胆小鬼也不能手动报告该尸体；关闭时按诱饵的正常报告机制处理。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员和中立者是否可以获得此附加身份。
- **ObliviousBaitImmune（免疫诱饵自动报告）**：控制是否对胆小鬼击杀诱饵后的强制报告免疫；开启后，胆小鬼也不能手动报告该诱饵尸体。

<!-- en -->

## Effect

Oblivious cannot report bodies. It is incompatible with Detective, Vulture, Sleuth, Cleaner, Amnesiac, Coroner, Medusa, Mortician, Medium, KillingMachine, GuardianAngelTOHE, and Altruist. With Bait immunity enabled, killing Bait does not force an automatic report, and Oblivious also cannot report that body manually. With immunity disabled, Bait's normal report behavior applies.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, and Neutrals can receive this add-on.
- **ObliviousBaitImmune**: Whether Bait's forced report is suppressed for an Oblivious killer; enabled immunity also prevents them from manually reporting that Bait body.
