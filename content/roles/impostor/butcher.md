---
{"id":"role-butcher","kind":"role","category":"impostor","title":{"zh-CN":"肢解者","en":"Butcher"},"summary":{"zh-CN":"击杀会产生多个尸体干扰报告判断；被击杀者会重复播放击杀动画，并且击杀复仇者会触发其群体复仇。","en":"Kills create multiple bodies that confuse reports; victims repeat the kill animation, and killing an Avenger triggers their group revenge."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Butcher.cs"}
---

<!-- zh-CN -->
## 技能

肢解者的击杀（包括被动击杀）会在目标处留下多个尸体，使报告者难以判断实际死者。目标会反复播放被击杀动画；动画期间无法跳过，也不能正常参加会议，会议开始时会中止剩余动画。若肢解者击杀复仇者，复仇者会愤怒地报复所有人。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名肢解者。

<!-- en -->
## Ability

Butcher kills, including passive kills, create multiple dead bodies at the target, making it difficult to identify the actual victim when reporting. The victim repeatedly plays the kill animation; it cannot be skipped, and the victim cannot participate in a meeting normally during this period. A meeting stops the remaining animations. If the Butcher kills an Avenger, the Avenger takes revenge on everyone.

## Options

- **Max**: Maximum number of Butchers in a match.
