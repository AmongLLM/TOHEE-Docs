---
{"id":"role-eviltracker","kind":"role","category":"impostor","title":{"zh-CN":"邪恶追踪者","en":"Evil Tracker"},"summary":{"zh-CN":"追踪目标并通过变形更换目标；队友击杀时可显示击杀闪光。","en":"Tracks a target and changes targets by shapeshifting; can see a kill flash when a teammate kills."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/EvilTracker.cs"}
---

<!-- zh-CN -->
## 技能

邪恶追踪者会追踪一名玩家；名字下方的箭头指向目标。变形到另一名玩家后会立即解除变形，并将追踪目标切换为该玩家。队友击杀时也可按设置显示击杀闪光。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名邪恶追踪者。
- **查看击杀闪光**：开启时，队友击杀会产生提示；关闭时不显示。
- **更换目标频率**：可设为从不、每局一次、每次会议或随时更换。
- **会议中查看目标最后所在房间**：开启时显示目标在会议前所在的房间；关闭时不显示。

<!-- en -->
## Ability

The Evil Tracker follows a target; an arrow below the tracker’s name points toward them. Shapeshifting into another player immediately unshifts and changes the tracking target to that player. Depending on settings, the tracker also sees a kill flash when a teammate kills.

## Options

- **Max**: Maximum number of Evil Trackers in a match.
- **Can See Kill-Flash**: When enabled, a teammate’s kill produces a notification; otherwise no flash is shown.
- **Can Set Target**: Choose how often the target can be changed: never, once per game, every meeting, or at any time.
- **Can See Target’s Last Room in Meeting**: When enabled, shows the room the target was in immediately before the meeting; otherwise this information is hidden.
