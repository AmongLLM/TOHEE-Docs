---
{"id":"role-telecommunication","kind":"role","category":"crewmate","title":{"zh-CN":"通信员","en":"Telecommunication"},"summary":{"zh-CN":"存活玩家走近监控、生命监测仪、门禁日志或管理室定位设备时，通信员会收到位置提示；代码检测的是接近设备，不是打开界面。","en":"The Telecommunication receives a proximity warning when living players approach cameras, Vitals, door logs, or Admin devices; the source checks proximity, not whether a UI was opened."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Telecommunication.cs"}
---

<!-- zh-CN -->
## 职业能力

存活玩家进入监控摄像头、生命监测仪、门禁日志或管理室定位设备的使用范围时，通信员会看到提示标记。当前实现按玩家与设备的距离检测接近状态，不检测玩家是否打开了设备界面。

## 设置

- **数量上限**：设置一局中通信员的最大人数。
- **可以追踪监控使用**：开启时可追踪摄像头使用情况；关闭时不能。
- **可以使用通风口**：开启时通信员可以使用通风口；关闭时不能。

<!-- en -->
## Role

The Telecommunication sees a warning when a living player enters the usable range of cameras, Vitals, door logs, or Admin devices. The current implementation checks player distance to each device, not whether the player opened its UI.

## Settings

- **Maximum count**: Sets the maximum number of Telecommunication roles in a match.
- **Can track camera usage**: ON allows tracking camera use; OFF disables it.
- **Can vent**: ON allows venting; OFF does not.
