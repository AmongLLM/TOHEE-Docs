---
{"id":"role-addict","kind":"role","category":"crewmate","title":{"zh-CN":"瘾君子","en":"Addict"},"summary":{"zh-CN":"瘾君子必须在自杀计时结束前及时使用通风口，否则会死亡；每次钻出后还会经历短暂无敌和定身阶段。","en":"The Addict must vent before a suicide timer expires or die, then passes through brief invulnerability and immobilization after venting."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Addict.cs"}
---

<!-- zh-CN -->
## 职业能力

瘾君子有一个自杀计时器；计时结束时会自杀。通风口冷却会显示计时进度：冷却归零后仍有一小段时间可以钻入通风口，成功使用会重置自杀计时，未能及时使用则会死亡。钻出通风口后，瘾君子会在一段时间内无敌；无敌结束后还会定身一段时间，期间不能报告尸体。

## 设置

- **数量上限**：设置一局中瘾君子的最大人数。
- **通风口冷却**：设置瘾君子再次使用通风口前的等待时间。
- **自杀倒计时**：设置瘾君子距离自杀的时间。
- **无敌时间**：设置瘾君子钻出通风口后的无敌时长。
- **无敌后的定身时间**：设置无敌结束后瘾君子被定身多久。

<!-- en -->
## Role

The Addict has a suicide timer and dies when it expires. The vent cooldown indicates the timer's progress. When the cooldown reaches zero, the Addict still has a short window to vent; doing so resets the suicide timer, while failing to vent in time causes death. After venting, the Addict is invulnerable for a set period, then remains immobilized for another period and cannot report bodies.

## Settings

- **Maximum count**: Sets the maximum number of Addicts in a match.
- **Vent cooldown**: Sets how long the Addict must wait before venting again.
- **Time until suicide**: Sets how long the Addict has before they die.
- **Invulnerability time**: Sets how long the Addict is invulnerable after venting.
- **Frozen time after invulnerability**: Sets how long the Addict is immobilized after invulnerability ends.
