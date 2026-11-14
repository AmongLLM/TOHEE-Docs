---
{"id":"role-antiadminer","kind":"role","category":"impostor","title":{"zh-CN":"监管者","en":"Anti Adminer"},"summary":{"zh-CN":"侦测摄像头、管理室地图、生命体征仪和门禁记录等设备附近的船员或中立玩家，但无法确认对方正在使用设备。","en":"Detects Crewmates or Neutrals near cameras, Admin, vitals, DoorLog, and similar devices, but cannot tell whether they are using them."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/AntiAdminer.cs"}
---

<!-- zh-CN -->
## 技能

可随时获知船员或中立玩家是否靠近摄像头、管理室地图、生命体征仪、门禁记录等设备。只能判断有人靠近，无法确认其是否正在使用设备。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名监管者。
- **追踪摄像头附近玩家**：开启时可收到有人靠近摄像头的提示；关闭时不提供此信息。

<!-- en -->
## Ability

Can detect whether a Crewmate or Neutral is near cameras, the Admin table, vitals, DoorLog, or similar devices. The Anti Adminer can tell that someone is nearby, but cannot confirm that the person is using the device.

## Options

- **Max**: Maximum number of Anti Adminers in a match.
- **Can Track Camera Usage**: When enabled, the Anti Adminer is informed when players are near cameras; otherwise this information is not shown.
