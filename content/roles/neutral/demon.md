---
{"id":"role-demon","kind":"role","category":"neutral","title":{"en":"Demon","zh-CN":"玩家"},"summary":{"zh-CN":"以生命值互相消耗进行攻击；内鬼消失后，若玩家阵营是唯一存活的计数中立阵营且人数不少于船员，即可获胜。","en":"Drain health to attack and defend; after Impostors are gone, the Demon wins when it is the only surviving counted Neutral team and at least as numerous as Crew."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Demon.cs"}
---
<!-- zh-CN -->
## 玩家（Demon）

内鬼阵营消失后，若玩家（Demon）是唯一存活的计数中立阵营，且其人数不少于船员人数，玩家阵营即可获胜。玩家视角下，所有玩家名字旁都会显示当前/最大生命值。每次攻击都会消耗目标生命值，生命值归零后目标才会死亡；攻击玩家则会消耗玩家自身生命值。若攻击未能耗尽玩家的生命值，攻击者会看到护盾动画。

### 设置

- **攻击冷却**：再次攻击前的等待时间。
- **可使用通风口**：设置玩家能否使用通风口。
- **内鬼视野**：设置玩家是否拥有内鬼视野。
- **玩家最大生命值**：其他玩家的最大生命值。
- **攻击伤害**：每次攻击造成的伤害。
- **玩家最大生命值（自身）**：该项固定为 100 点。
- **受到的伤害**：他人试图击杀该角色时造成的生命值损失。

<!-- en -->
## Demon

After Impostors are gone, the Demon wins when it is the only surviving counted Neutral team and is at least as numerous as Crew. The Demon sees current/max health beside each player's name. Each attack drains the target's health; a target dies only when their health reaches zero. Attacks against a Demon drain the Demon's own health. If an attack does not deplete that health, the attacker sees a shield animation.

### Settings

- **Attack cooldown:** Time between attacks.
- **Can vent:** Whether the Demon can use vents.
- **Impostor vision:** Whether the Demon has Impostor vision.
- **Player maximum health:** Maximum health of other players.
- **Damage:** Damage dealt per attack.
- **Demon maximum health:** Fixed at 100 health.
- **Demon damage received:** Health the Demon loses when someone tries to kill them.
