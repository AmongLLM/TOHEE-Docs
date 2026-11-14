---
{"id":"role-vampire","kind":"role","category":"impostor","title":{"zh-CN":"吸血鬼","en":"Vampire"},"summary":{"zh-CN":"咬中的玩家延迟死亡；会议开始时会立即死亡，诱饵则被正常击杀并报告。","en":"Bitten players die after a delay or immediately when a meeting starts; a Bait is killed and reported normally."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Vampire.cs"}
---

<!-- zh-CN -->
## 技能

吸血鬼使用击杀键咬中目标后，目标会在设定延迟后死亡。召开会议时，所有尚未死亡的被咬目标会立即死亡。攻击诱饵时会改为普通击杀并报告尸体。

操作模式可设为只使用咬杀，或使用双击操作：单击咬杀、双击普通击杀。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名吸血鬼。
- **咬杀延迟**：设置被咬目标延迟死亡的时间。
- **可以使用通风口**：开启时可使用通风口；关闭时不能。
- **操作模式**：选择只咬杀，或单击咬杀、双击普通击杀。

<!-- en -->
## Ability

A kill-button attack bites the target, who dies after the configured delay. Calling a meeting immediately kills any bitten target who is still alive. Attacking a Bait instead makes a normal kill and reports the body.

The action mode can be set to bite-only, or to a double-click mode: single-click to bite and double-click to make a normal kill.

## Options

- **Max**: Maximum number of Vampires in a match.
- **Bite Kill Delay**: Delay before a bitten target dies.
- **Can Vent**: When enabled, the Vampire can use vents; otherwise it cannot.
- **Action Mode**: Choose bite-only or single-click bite / double-click normal kill.
