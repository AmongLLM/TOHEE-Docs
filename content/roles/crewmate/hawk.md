---
{"id":"role-hawk","kind":"role","category":"crewmate","title":{"zh-CN":"猎鹰","en":"Hawk"},"summary":{"zh-CN":"猎鹰可以有限次数地尝试击杀玩家，但有概率失手；对同一目标多次出手会提高成功率。","en":"The Hawk can attempt a limited number of kills but may miss; repeated attacks against the same target increase the chance of success."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/(Ghosts)/Crewmate/Hawk.cs"}
---

<!-- zh-CN -->
## 职业能力

猎鹰可以击杀有限数量的玩家，但每次都有概率失手；对同一玩家多次出手会提高成功率。

## 设置

- **击杀冷却**：设置猎鹰再次尝试击杀前的等待时间。
- **切击次数上限**：设置猎鹰最多可进行的切击（击杀）次数。
- **失手机率**：设置猎鹰击杀失手的概率。
- **击杀所需的存活人数下限**：设置猎鹰能够尝试击杀时场上至少需要存活多少人。
- **船员被转换时增加击杀次数**：开启时，报告尸体时若转换人数增加，猎鹰会尝试提高切击次数上限；当前源码先更新计数再计算增量，可能少加一次，不能保证每名新转换的船员都增加一次；关闭时不增加。

<!-- en -->
## Role

The Hawk can kill a limited number of players, but each attempt may miss. Repeatedly attacking the same player increases the chance of success.

## Settings

- **Kill cooldown**: Sets how long the Hawk must wait before trying to kill again.
- **Maximum slices**: Sets the maximum number of slices (kill attempts) the Hawk can make.
- **Chance to miss**: Sets the chance that a kill attempt misses.
- **Minimum players alive to kill**: Sets how many players must be alive for the Hawk to attempt a kill.
- **Increase kill count when a Crewmate is converted**: ON attempts to raise the maximum slices when a body is reported and the converted-player count has increased. The current source updates its counter before calculating the bonus, so it can undercount and does not reliably add one use per newly converted Crewmate; OFF does not add uses.
