---
{"id":"role-huntsman","kind":"role","category":"neutral","title":{"en":"Huntsman","zh-CN":"猎人"},"summary":{"zh-CN":"击杀目标会永久缩短击杀冷却，击杀其他玩家则会永久延长冷却。","en":"Killing a target permanently reduces the kill cooldown; killing someone else permanently increases it."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Huntsman.cs"}
---
<!-- zh-CN -->
## 猎人

猎人会获得一组目标，目标名字以彩色显示，并在每次会议后重置。猎人击杀目标会永久缩短击杀冷却；击杀非目标玩家则会永久延长冷却。

### 设置

- **初始击杀冷却**：猎人的基础击杀冷却。
- **击杀目标后减少冷却**：击杀目标后，击杀冷却减少的时长。
- **击杀其他玩家后增加冷却**：击杀非目标后，击杀冷却增加的时长。
- **可使用通风口**：设置猎人能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用默认视野。
- **目标数量**：猎人每轮获得的目标数量。
- **最高击杀冷却**：猎人击杀冷却的上限。
- **最低击杀冷却**：猎人击杀冷却的下限。

<!-- en -->
## Huntsman

The Huntsman receives a set of targets. Their names appear in color, and the target list resets after each meeting. Killing a target permanently reduces the kill cooldown; killing someone who is not a target permanently increases it.

### Settings

- **Kill cooldown:** The Huntsman's base kill cooldown.
- **Cooldown decrease for killing a target:** Amount the cooldown decreases after killing a target.
- **Cooldown increase for killing others:** Amount the cooldown increases after killing someone who is not a target.
- **Can vent:** Whether the Huntsman can use vents.
- **Impostor vision:** When enabled, the Huntsman has Impostor vision; otherwise, they have default vision.
- **Number of targets:** Number of targets assigned to the Huntsman.
- **Maximum kill cooldown:** Upper limit for the Huntsman's kill cooldown.
- **Minimum kill cooldown:** Lower limit for the Huntsman's kill cooldown.
