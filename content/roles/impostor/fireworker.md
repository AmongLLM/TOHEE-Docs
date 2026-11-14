---
{"id":"role-fireworker","kind":"role","category":"impostor","title":{"zh-CN":"烟花爆破者","en":"Fireworker"},"summary":{"zh-CN":"变形可放置房主设定数量的烟花；全部放置且成为最后一名内鬼后，变形引爆所有烟花。","en":"Shapeshifts to plant the configured number of fireworks; once all are planted and it is the last Impostor, shapeshifting detonates them all."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Fireworker.cs"}
---

<!-- zh-CN -->
## 技能

变形会在当前位置布置一枚烟花。烟花全部放置后，若烟花爆破者成为最后一名内鬼，再次变形即可引爆全部烟花，炸死爆炸范围内的玩家。若烟花爆破者也在范围内会自杀；若它是场上最后一名存活玩家则不会自杀。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名烟花爆破者。
- **烟花数量**：设置要布置的烟花总数。
- **烟花爆炸半径**：设置爆炸范围倍率。
- **可以击杀**：开启时，在布置等待阶段也可普通击杀；关闭时只在允许普通击杀的阶段可击杀。

<!-- en -->
## Ability

Shapeshifting plants a firework at the current location. After all fireworks are planted, the Fireworker can detonate them by shapeshifting again once it is the last Impostor. Players in the blast radius die. The Fireworker also dies if caught in the blast, unless it is the last living player.

## Options

- **Max**: Maximum number of Fireworkers in a match.
- **Firework Count**: Total number of fireworks to plant.
- **Firework Explosion Radius**: Blast-radius multiplier.
- **Can Kill**: When enabled, normal kills are available while waiting to detonate; when disabled, normal kills are limited to the setup and post-detonation states.
