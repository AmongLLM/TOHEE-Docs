---
{"id":"role-nemesis","kind":"role","category":"impostor","title":{"zh-CN":"黑手党","en":"Nemesis"},"summary":{"zh-CN":"其他内鬼存活时不能击杀；死亡后可按 `/rv [玩家编号]` 复仇，且独自成为存活内鬼时可以正常击杀。","en":"Cannot kill while another Impostor is alive; after death can use `/rv [player ID]` to take revenge, and can kill normally when the last living Impostor."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Nemesis.cs"}
---

<!-- zh-CN -->
## 技能

黑手党在其他内鬼存活时不能使用击杀键；当没有其他存活内鬼时，才可像内鬼一样击杀。死亡后可输入 `/rv [玩家编号]` 复仇击杀一名存活玩家，会议中的玩家名牌也会提供目标按钮。复仇次数有限。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名黑手党。
- **复仇人数上限**：设置黑手党死后最多可复仇击杀多少名玩家。
- **使用旧版本**：开启旧版模式；此模式使用变形者基础职业，并启用下列变形选项。
  - **变形冷却**：设置旧版模式下的变形冷却。
  - **变形持续时间**：设置旧版模式下的变形持续时间。

<!-- en -->
## Ability

The Nemesis cannot use the kill button while another Impostor is alive. It can kill normally once it is the only living Impostor. After the Nemesis dies, it can enter `/rv [player ID]` to kill a living target as revenge; dead Nemesis players also get target buttons during meetings. The number of revenge kills is limited.

## Options

- **Max**: Maximum number of Nemeses in a match.
- **Max Number of Revenges**: Maximum number of revenge kills after death.
- **Use Legacy Version**: Enables the legacy mode, which uses the Shapeshifter base role and the following shapeshift settings.
  - **Shapeshift Cooldown**: Cooldown in legacy mode.
  - **Shapeshift Duration**: Duration in legacy mode.
