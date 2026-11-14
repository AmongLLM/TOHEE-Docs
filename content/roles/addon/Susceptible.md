---
{
  "id": "role-susceptible",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Susceptible",
    "zh-CN": "易感者"
  },
  "summary": {
    "zh-CN": "死亡原因会随机抽选；已启用角色选项会限制可替换的原因。",
    "en": "Gets a randomly selected death reason; an option limits replacements to reasons tied to enabled roles."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Susceptible.cs"
}
---
<!-- zh-CN -->

## 效果

易感者的死亡原因会随机抽选。若开启“仅使用已启用的死亡原因”，只有对应角色已启用时才会替换原死亡原因；若关闭，则可使用不在禁用列表中的死亡原因。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **Only Enabled Death Reasons（仅使用已启用的死亡原因）**：开启时，只有对应角色已启用，随机原因才会替换原原因；关闭时，可替换为不在禁用列表中的原因。

<!-- en -->

## Effect

Susceptible receives a randomly selected death reason. With "Only Enabled Death Reasons" on, the reason replaces the original only when its associated role is enabled. With it off, any reason outside the banned list can be used.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **Only Enabled Death Reasons**: ON replaces the original reason only when its associated role is enabled; OFF allows any reason outside the banned list.
