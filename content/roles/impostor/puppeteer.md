---
{"id":"role-puppeteer","kind":"role","category":"impostor","title":{"zh-CN":"傀儡师","en":"Puppeteer"},"summary":{"zh-CN":"单击操纵目标；傀儡会自动攻击范围内最近的非内鬼玩家，双击则普通击杀。","en":"Single-clicks to puppeteer a target; the puppet automatically attacks the nearest non-Impostor in range, while double-clicking kills normally."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Puppeteer.cs"}
---

<!-- zh-CN -->
## 技能

单击击杀键操纵目标；双击则普通击杀。被操纵者会自动攻击击杀范围内最近的非内鬼目标，攻击成功后解除操纵。会议开始会解除所有尚未结束的操纵。懒惰者以及幼年 Mini 不会执行操纵。根据选项，傀儡击杀目标后也会死亡；瘟疫之源不会因该选项死亡。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名傀儡师。
- **傀儡与受害者同归于尽**：开启时，傀儡击杀受害者后也会死亡；关闭时傀儡存活。

<!-- en -->
## Ability

Single-click the kill button to puppeteer a target; double-click to make a normal kill. The puppet automatically attacks the nearest non-Impostor within kill range and is released after a successful attack. A meeting ends any active puppeteering. Lazy players and a Mini who has not grown up will not obey. Depending on the setting, the puppet also dies after its victim is killed; Pestilence is exempt from that death.

## Options

- **Max**: Maximum number of Puppeteers in a match.
- **Puppet Dies Alongside Victim**: When enabled, the puppet also dies after killing its victim; otherwise the puppet survives.
