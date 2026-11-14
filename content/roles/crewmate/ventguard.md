---
{"id":"role-ventguard","kind":"role","category":"crewmate","title":{"zh-CN":"阻碍者","en":"Ventguard"},"summary":{"zh-CN":"阻碍者进入通风口即可封堵它；封堵期间能否由船员进入以及会议后是否重置均可设置。","en":"The Ventguard blocks a vent by entering it, with settings for Crew access to blocked vents and whether blocks reset after meetings."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Ventguard.cs"}
---

<!-- zh-CN -->
## 职业能力

阻碍者可进入通风口将其封堵。封堵的通风口不能进入；是否允许船员进入由设置决定。若开启重置选项，封堵会在每次会议后解除。

## 设置

- **数量上限**：设置一局中阻碍者的最大人数。
- **封堵次数上限**：设置阻碍者最多可封堵通风口的次数。
- **封堵冷却**：设置再次封堵前的等待时间。
- **船员可使用被封堵的通风口**：开启时船员仍可使用被封堵的通风口；关闭时船员也不能进入。
- **每次会议重置封堵**：开启时会议后解除所有通风口封堵；关闭时封堵保留。

<!-- en -->
## Role

The Ventguard blocks a vent by entering it. Blocked vents cannot be entered, except by Crewmates when the corresponding setting allows it. If meeting resets are enabled, blocks are cleared after each meeting.

## Settings

- **Maximum count**: Sets the maximum number of Ventguards in a match.
- **Maximum vent blocks**: Sets how many times the Ventguard can block vents.
- **Block vent cooldown**: Sets how long the Ventguard must wait before using the ability again.
- **Crewmates can use blocked vents**: ON lets Crewmates enter blocked vents; OFF blocks Crewmates as well.
- **Reset blocked vents every meeting**: ON clears all vent blocks after each meeting; OFF leaves them in place.
