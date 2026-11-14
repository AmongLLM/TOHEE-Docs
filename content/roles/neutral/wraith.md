---
{"id":"role-wraith","kind":"role","category":"neutral","title":{"en":"Wraith","zh-CN":"魅影"},"summary":{"zh-CN":"通过通风口暂时隐身；冷却期间能否正常使用通风口由设置决定。","en":"Use vents to become temporarily invisible; settings control normal vent use during cooldown."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Wraith.cs"}
---
<!-- zh-CN -->
## 魅影

魅影可以通过通风口暂时隐身。再次使用通风口会解除隐身；隐身时击杀玩家仍会正常击杀。隐身冷却期间是否可正常使用通风口由设置决定。魅影属于独立的中立阵营；内鬼出局后，若船员人数不多于仍计入胜负的中立玩家，且这些中立玩家都属于同一阵营，魅影即可获胜，不必成为最后存活的玩家。

### 设置

- **隐身冷却**：再次隐身前的等待时间。
- **隐身持续时间**：每次隐身持续的时间。
- **隐身冷却期间可正常使用通风口**：开启后，隐身能力冷却时可正常使用通风口；关闭后无法进入。
- **内鬼视野**：设置魅影是否拥有内鬼视野。

<!-- en -->
## Wraith

The Wraith uses vents to become temporarily invisible. Using a vent again ends invisibility. The Wraith can still kill while invisible. Whether they can use vents normally while invisibility is on cooldown depends on a setting. The Wraith is a separate Neutral team; after the Impostors are gone, it can win when the living Crew count is no greater than the remaining counted Neutral players and those Neutrals all belong to the same team. The Wraith does not have to be the last player alive.

### Settings

- **Vanish cooldown:** Time before becoming invisible again.
- **Vanish duration:** How long each vanish lasts.
- **Vent normally while invisibility is on cooldown:** When enabled, normal vent use is allowed during the invisibility cooldown; otherwise, vent entry is blocked.
- **Impostor vision:** Whether the Wraith has Impostor vision.
