---
{"id":"role-romantic","kind":"role","category":"neutral","title":{"en":"Romantic","zh-CN":"浪漫者"},"summary":{"zh-CN":"选择一名恋人并可为其提供临时护盾；恋人死亡后，浪漫者按恋人阵营及凶手转变职业。","en":"Choose a partner and grant temporary protection; if they die, the Romantic's role changes based on their team and killer."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Romantic.cs"}
---
<!-- zh-CN -->
## 浪漫者

浪漫者使用击杀按钮选择一名恋人；未满18岁的迷你船员或迷你内鬼不能成为恋人。选定恋人后，浪漫者可以再次使用击杀按钮，为恋人提供一段时间的护盾以抵挡攻击。

恋人死亡时，浪漫者会按恋人职业转变：

- 恋人属于内鬼阵营：浪漫者变为逃亡者。
- 恋人属于带刀中立：浪漫者变为无情浪漫者。
- 恋人属于船员或不带刀的中立：若有真实凶手，浪漫者变为复仇浪漫者；若没有真实凶手，则变为无情浪漫者。

复仇浪漫者必须击杀恋人的真实凶手才能获胜；攻击其他玩家会让其自杀。无情浪漫者拥有中立杀手的常规平衡胜利条件。

浪漫者会在恋人获胜时随获胜阵营获胜。若职业发生转变，获胜条件也会相应改变。

## 设置

- **选择恋人冷却**：选择恋人前的等待时间。
- **保护冷却**：再次为恋人提供保护前的等待时间。
- **保护持续时间**：护盾持续的时间。
- **知道恋人职业**：开启后，浪漫者能看到恋人职业；关闭后只知道恋人是谁。
- **恋人知道浪漫者身份**：设置恋人是否会知道谁选择了自己。
- **转变后的复仇浪漫者 / 无情浪漫者设置**：分别设置对应职业的击杀冷却和通风口权限。

<!-- en -->
## Romantic

The Romantic uses the kill button to choose a partner; a Nice Mini or Evil Mini under 18 cannot be selected. After choosing, the Romantic can use the kill button again to give their partner a temporary shield against attacks.

If the partner dies, the Romantic changes role based on the partner's role:

- If the partner was an Impostor, the Romantic becomes a Refugee.
- If the partner was a Neutral Killer, the Romantic becomes a Ruthless Romantic.
- If the partner was a Crewmate or non-killing Neutral, the Romantic becomes a Vengeful Romantic if the partner has a real killer; otherwise, they become a Ruthless Romantic.

The Vengeful Romantic must kill the partner's real killer to win; trying to kill anyone else causes a misfire. The Ruthless Romantic uses the standard Neutral Killing parity win condition.

The Romantic wins with the winning team if their partner wins. A role change also changes the Romantic's win condition.

## Settings

- **Partner selection cooldown:** Time before choosing a partner.
- **Protection cooldown:** Time before protecting the partner again.
- **Protection duration:** How long the shield lasts.
- **Knows partner's role:** When enabled, the Romantic sees the partner's role.
- **Partner knows who the Romantic is:** Whether the partner is told who chose them.
- **Converted Vengeful / Ruthless Romantic settings:** Set the kill cooldown and vent access for each converted role.
