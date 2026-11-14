---
{"id":"role-penguin","kind":"role","category":"impostor","title":{"zh-CN":"企鹅","en":"Penguin"},"summary":{"zh-CN":"单击束缚并拖拽目标，再次击杀或拖拽时间结束时将其杀死；双击可直接击杀。","en":"Restrains and drags a target; a second kill-button press or the drag timer kills them. Double-clicking kills directly."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Penguin.cs"}
---

<!-- zh-CN -->
## 技能

单击击杀键束缚并拖拽目标。拖拽期间再次按击杀键可杀死目标；到达拖拽时限后目标也会死亡。双击可直接击杀。拖拽期间开始会议时，目标是否死亡由选项决定；若拖拽时限已到，会议开始时仍会杀死目标。

## 选项

- **拖拽时间**：设置企鹅可拖拽目标多久。
- **拖拽期间开始会议时杀死目标**：开启时，报告尸体或召开紧急会议会杀死正在被拖拽的目标；关闭时，会议本身不会杀死目标，但已到期的拖拽仍会将其杀死。

<!-- en -->
## Ability

Press the kill button once to restrain and drag a target. Press it again while dragging to kill the target; the target also dies when the drag timer expires. Double-click to kill directly. If a meeting starts during a drag, the setting determines whether the target is killed; if the drag timer has already expired, the target is killed when the meeting starts regardless.

## Options

- **Dragging Time**: How long the Penguin can drag a player.
- **Kill the Target if a Meeting Starts During Dragging**: When enabled, reporting a body or calling an emergency meeting kills the dragged target. When disabled, a meeting alone does not kill the target, but an already-expired drag timer still does.
