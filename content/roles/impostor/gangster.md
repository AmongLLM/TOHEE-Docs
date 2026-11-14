---
{"id":"role-gangster","kind":"role","category":"impostor","title":{"zh-CN":"歹徒","en":"Gangster"},"summary":{"zh-CN":"用击杀键尝试招募玩家；次数耗尽或目标不符合招募条件时，转入普通击杀判定。","en":"Uses the kill button to recruit players; exhausted uses or an ineligible target trigger the normal kill checks instead."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Gangster.cs"}
---

<!-- zh-CN -->
## 技能

有招募次数时，使用击杀键尝试将合格目标转为叛徒（Madmate）；招募成功时双方会收到提示。招募次数耗尽后，击杀键恢复普通击杀；遇到不符合招募条件的目标时会转入普通击杀判定。未成年 Mini 不能被招募；针对其的普通击杀判定仍会被 Mini 的年龄免疫拦截。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名歹徒。
- **招募冷却**：设置招募期间击杀键的冷却；招募次数用尽后使用默认击杀冷却。
- **招募人数上限**：设置可招募的玩家数。
- **警长可以成为叛徒**：开启时可招募警长。
- **市长可以成为叛徒**：开启时可招募市长。
- **正义赌怪可以成为叛徒**：开启时可招募正义赌怪。
- **正义法官可以成为叛徒**：开启时可招募正义法官。
- **展现者可以成为叛徒**：开启时可招募展现者。
- **惩罚者可以成为叛徒**：开启时可招募惩罚者。
- **预言家可以成为叛徒**：开启时可招募预言家。

<!-- en -->
## Ability

While recruitment uses remain, use the kill button to try to convert an eligible target into a Madmate. A successful conversion is confirmed to both players. Once recruit uses run out, the button returns to normal kills; an ineligible target falls back to the normal kill check. A Mini under 18 cannot be recruited, and Mini’s age immunity still blocks the ordinary kill check.

## Options

- **Max**: Maximum number of Gangsters in a match.
- **Recruit Cooldown**: Cooldown while recruitment uses remain; after they run out, the default kill cooldown applies.
- **Recruit Limit**: Number of players the Gangster can recruit.
- **Sheriff Can Be Converted**: When enabled, Sheriff can be recruited.
- **Mayor Can Be Converted**: When enabled, Mayor can be recruited.
- **Nice Guesser Can Be Converted**: When enabled, Nice Guesser can be recruited.
- **Judge Can Be Converted**: When enabled, Judge can be recruited.
- **Marshall Can Be Converted**: When enabled, Marshall can be recruited.
- **Retributionist Can Be Converted**: When enabled, Retributionist can be recruited.
- **Overseer Can Be Converted**: When enabled, Overseer can be recruited.
