---
{"id":"role-veteran","kind":"role","category":"crewmate","title":{"zh-CN":"老兵","en":"Veteran"},"summary":{"zh-CN":"老兵通过通风口进入戒备状态，期间多数击杀者会被反杀；任务执行者、十字军、保镖和捕快例外，瘟疫、战争者和扫把星会触发特殊处理。","en":"The Veteran vents to enter Alert and retaliates against most attackers; Taskinator, Crusader, Bodyguard, and Deputy are exempt, while Pestilence, War, and Jinx use special handling."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Veteran.cs"}
---

<!-- zh-CN -->
## 职业能力

老兵可以通过通风口进入戒备状态。戒备期间，多数玩家尝试击杀老兵时会被反杀；任务执行者、十字军、保镖和捕快不会触发反击。瘟疫与战争者可以在戒备期间击杀老兵；扫把星会按自身“击杀攻击者”选项处理这次交互，开启时可能击杀老兵。进入和退出戒备时还会看到护盾动画及头顶提示。

## 设置

- **数量上限**：设置一局中老兵的最大人数。
- **戒备冷却**：设置再次进入戒备前的等待时间。
- **戒备持续时间**：设置每次戒备状态持续多久。
- **戒备次数上限**：设置老兵最多可进入戒备状态的次数。
- **每完成一个任务获得的戒备次数**：设置每完成一个任务增加的次数，按 0.1 为步进。

<!-- en -->
## Role

The Veteran can vent to enter Alert. Most attackers are killed when they try to kill the Veteran during Alert, but Taskinator, Crusader, Bodyguard, and Deputy do not trigger retaliation. Pestilence and War can kill the Veteran during Alert. Jinx follows its own **Kill Attacker** option and can kill the Veteran when that option is enabled. Shield animations and an overhead notice remind the Veteran when Alert starts and ends.

## Settings

- **Maximum count**: Sets the maximum number of Veterans in a match.
- **Alert cooldown**: Sets how long the Veteran must wait before entering Alert again.
- **Alert duration**: Sets how long the Veteran remains on Alert.
- **Maximum alerts**: Sets how many times the Veteran can enter Alert.
- **Ability uses gained per task**: Sets the alerts gained for each completed task, in 0.1 increments.
