---
{"id":"role-bloodmoon","kind":"role","category":"impostor","title":{"zh-CN":"嗜血之魂","en":"Bloodmoon"},"summary":{"zh-CN":"作为内鬼幽灵角色使用保护技能使目标流血；目标倒计时结束后死亡。","en":"As an Impostor ghost role, uses the protection ability to make a target bleed; they die when the timer expires."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/(Ghosts)/Impostor/Bloodmoon.cs"}
---

<!-- zh-CN -->
## 技能

嗜血之魂作为内鬼幽灵角色使用保护技能标记目标流血。目标会看到死亡倒计时，时间结束后死亡；若目标在倒计时结束前因其他原因死亡，流血会解除。每次使用消耗一次可用次数。嗜血之魂不能发动破坏。

## 选项

- **击杀冷却**：设置再次使用技能前的等待时间。
- **流血目标数量上限**：设置可造成的流血次数。
- **死亡倒计时**：设置目标流血后多久死亡。

<!-- en -->
## Ability

As an Impostor ghost role, the Bloodmoon uses its protection ability to make a target bleed. The target sees a death timer and dies when it expires; if the target dies from another cause first, the bleeding effect is removed. Each use consumes one available charge. The Bloodmoon cannot sabotage.

## Options

- **Kill Cooldown**: Time before the ability can be used again.
- **Max BloodLettings**: Maximum number of bleeding effects the Bloodmoon can apply.
- **Time Until Death**: Delay before an affected target dies.
