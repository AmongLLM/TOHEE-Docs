---
{"id":"role-alchemist","kind":"role","category":"crewmate","title":{"zh-CN":"炼金术士","en":"Alchemist"},"summary":{"zh-CN":"炼金术士完成任务会获得随机药水，可用于护盾、传送、加速、修复破坏、嗜血、夜视、隐身或使自己中毒。","en":"The Alchemist gains a random potion for each completed task, with effects including a shield, teleport, speed, sabotage repair, bloodthirst, night vision, invisibility, or self-poisoning."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Alchemist.cs"}
---

<!-- zh-CN -->
## 职业能力

炼金术士每完成一个任务都会获得一瓶随机药水，药水名称和说明显示在职业名称下方。钻通风口可使用当前药水。药水效果包括：获得临时护盾、在短暂延迟后自杀、传送到随机玩家、加速、立即修复下一次破坏、嗜血击杀目标、暂时增强视野，或暂时隐身。

## 设置

- **通风口冷却**：设置炼金术士再次使用通风口前的等待时间。
- **抗性药水持续时间**：设置抗性药水效果持续多久。
- **夜视药水视野**：设置使用夜视药水时的视野。
- **停电期间夜视药水视野**：设置停电破坏期间夜视药水的视野。
- **夜视药水持续时间**：设置夜视效果持续多久。
- **速度药水加成**：设置速度药水提高的移动速度。
- **隐身药水持续时间**：设置隐身药水的持续时间。
- **自定义炼金术士任务**：开启时可单独设置任务数量；关闭时炼金术士与船员使用相同的任务数量。自定义选项包括公共任务、长任务和短任务的设置。

<!-- en -->
## Role

The Alchemist receives a random potion whenever they complete a task. The potion's name and description appear under the role name. Vent to use the current potion. Effects include a temporary shield, self-poisoning, teleporting to a random player, increased speed, instantly fixing the next sabotage, bloodthirst, temporary night vision, and temporary invisibility.

## Settings

- **Vent cooldown**: Sets how long the Alchemist must wait before venting again.
- **Resistance Potion duration**: Sets how long the Resistance Potion lasts.
- **Night Vision**: Sets the Alchemist's vision while the Night Vision Potion is active.
- **Night Vision during lights sabotage**: Sets vision from the potion during a lights sabotage.
- **Night Vision Potion duration**: Sets how long the Night Vision effect lasts.
- **Speed Potion boost**: Sets the speed increase from the Speed Potion.
- **Invisibility Potion duration**: Sets how long the Invisibility Potion lasts.
- **Override Alchemist tasks**: ON allows a separate task setup; OFF gives the Alchemist the same task count as a Crewmate. The custom setup includes common-task availability and the number of long and short tasks.
