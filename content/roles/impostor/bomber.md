---
{"id":"role-bomber","kind":"role","category":"impostor","title":{"zh-CN":"自爆兵","en":"Bomber"},"summary":{"zh-CN":"变形会引爆周围区域并使范围内玩家死亡；可设置自爆兵和其他内鬼是否能在爆炸中存活。","en":"Shapeshifting detonates an area bomb; settings determine whether the Bomber and other Impostors survive the blast."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Bomber.cs"}
---

<!-- zh-CN -->
## 技能

变形会引爆周围区域，范围内玩家会收到击杀闪光。根据选项，自爆兵本人和其他内鬼可以在爆炸中存活，也可以被炸死。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名自爆兵。
- **爆炸半径**：设置炸弹范围；源文档说明约 5 倍范围相当于半个食堂。
- **可以普通击杀**：开启时可按设置使用普通击杀，并可设置击杀冷却；关闭时只能通过炸弹击杀。
- **炸弹冷却**：设置再次引爆前的等待时间。
- **内鬼在爆炸中存活**：开启时其他内鬼不会被炸死；关闭时会死亡。
- **自爆兵在自己的爆炸中存活**：开启时自爆兵不会被炸死；关闭时会死亡。

<!-- en -->
## Ability

Shapeshifting detonates a bomb around the Bomber. Players receive a kill flash when the Bomber self-destructs. Settings determine whether the Bomber and other Impostors survive the explosion.

## Options

- **Max**: Maximum number of Bombers in a match.
- **Bomb Radius**: Blast radius; the source notes that a value of about 5x covers roughly half of Cafeteria.
- **Can Kill**: When enabled, the Bomber can also make normal kills, with a configurable kill cooldown; when disabled, it can kill only by bombing.
- **Bomb Cooldown**: Time before the Bomber can use another bomb.
- **Impostors Survive Bombs**: When enabled, other Impostors survive; when disabled, they die in the blast.
- **Bomber Dies in Their Explosion**: When enabled, the Bomber survives; when disabled, the Bomber dies.
