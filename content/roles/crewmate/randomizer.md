---
{"id":"role-randomizer","kind":"role","category":"crewmate","title":{"zh-CN":"萧暮","en":"Randomizer"},"summary":{"zh-CN":"萧暮死亡时会对凶手随机施加一种效果，包括自动报告、停留在尸体旁、超长击杀冷却或随机复仇。","en":"When the Randomizer dies, their killer receives a random effect: self-reporting, staying by the body, a very long kill cooldown, or random revenge."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Randomizer.cs"}
---

<!-- zh-CN -->
## 职业能力

萧暮死亡时，其凶手会随机受到以下效果之一：

1. 自动报告萧暮的尸体。
2. 站在尸体旁。
3. 击杀冷却被设为 600 秒。
4. 随机为一名玩家复仇。

## 设置

- **数量上限**：设置一局中萧暮的最大人数。
- **提前提醒凶手**：开启时，萧暮的凶手自动报告前会听到一段提示音；关闭时不播放提示音。
- **最短报告延迟**：设置凶手自动报告前的最短延迟。
- **最长报告延迟**：设置凶手自动报告前的最长延迟。
- **冻结时间**：设置凶手杀死萧暮后被定身的时间。

<!-- en -->
## Role

When the Randomizer dies, their killer receives one random effect:

1. They self-report the Randomizer's body.
2. They stand next to the body.
3. Their kill cooldown is set to 600 seconds.
4. They randomly avenge a player.

## Settings

- **Maximum count**: Sets the maximum number of Randomizers in a match.
- **Warn the killer in advance**: ON plays a short tune for the killer before an automatic report; OFF plays no tune.
- **Minimum report delay**: Sets the shortest delay before the killer automatically reports.
- **Maximum report delay**: Sets the longest delay before the killer automatically reports.
- **Freeze time**: Sets how long the killer is frozen after killing the Randomizer.
