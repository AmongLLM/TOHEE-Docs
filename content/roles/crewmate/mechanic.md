---
{"id":"role-mechanic","kind":"role","category":"crewmate","title":{"zh-CN":"修理工","en":"Mechanic"},"summary":{"zh-CN":"修理工可随时使用通风口，并能按设置独自处理特定破坏。","en":"The Mechanic can vent at any time and can handle selected sabotages alone, depending on settings."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Mechanic.cs"}
---

<!-- zh-CN -->
## 职业能力

修理工可随时使用通风口，也可根据设置独自修复特定破坏。

## 设置

- **数量上限**：设置一局中修理工的最大人数。
- **初始修理次数上限**：设置修理工开局拥有的修理技能次数。
- **可一次打开一组门**：开启时，在 Polus 与 Airship 的门禁破坏中，一次操作会打开同一门禁组内的所有门；不会打开全地图所有门。关闭时不能。
- **可独自修复双反应堆**：开启时可独自完成需要两处操作的反应堆修复；关闭时不能。
- **可独自修复双氧气点**：开启时可独自完成需要两处操作的氧气修复；关闭时不能。
- **可独自修复通讯破坏**：开启时可独自修复通讯破坏，当前实现支持米拉总部和蘑菇岛（Fungle）；关闭时不能。
- **可用一个开关修复照明**：开启时可通过一个开关修复照明破坏；关闭时不能。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的次数，按 0.1 为步进。
- **修复反应堆/氧气所需次数**：设置修复反应堆或氧气破坏消耗的技能次数，按 0.1 为步进。
- **修复照明/通讯所需次数**：设置修复照明或通讯破坏消耗的技能次数，按 0.1 为步进。

<!-- en -->
## Role

The Mechanic can use vents at any time and can fix selected sabotages alone, depending on settings.

## Settings

- **Maximum count**: Sets the maximum number of Mechanics in a match.
- **Initial repair use limit**: Sets the Mechanic's starting number of repair uses.
- **Can open a door group at once**: ON lets one interaction open all doors in the same group during door sabotages on Polus and Airship; it does not open every door on the map. OFF disables this.
- **Can fix both reactors alone**: ON lets the Mechanic complete the two-point reactor repair alone; OFF does not.
- **Can fix both O2 points alone**: ON lets the Mechanic complete the two-point O2 repair alone; OFF does not.
- **Can fix Communications alone**: ON lets the Mechanic fix communications sabotage alone; the current implementation supports MIRA HQ and Fungle. OFF does not.
- **Can fix lights with one switch**: ON lets the Mechanic fix the lights sabotage with one switch; OFF does not.
- **Ability uses gained per task**: Sets additional repair uses per completed task, in 0.1 increments.
- **Uses required for Reactor/O2**: Sets the repair uses consumed for Reactor or O2, in 0.1 increments.
- **Uses required for Lights/Comms**: Sets the repair uses consumed for Lights or Comms, in 0.1 increments.
