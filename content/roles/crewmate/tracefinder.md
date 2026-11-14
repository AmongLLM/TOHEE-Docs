---
{"id":"role-tracefinder","kind":"role","category":"crewmate","title":{"zh-CN":"寻迹者","en":"Tracefinder"},"summary":{"zh-CN":"寻迹者可以使用生命监测仪，并会获得指向尸体的箭头；监测仪和箭头的时序均可调整。","en":"The Tracefinder can use Vitals and receives arrows pointing to dead bodies, with configurable Vitals and arrow timing."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Tracefinder.cs"}
---

<!-- zh-CN -->
## 职业能力

寻迹者可以使用便携生命监测仪，并会收到指向尸体的箭头。

## 设置

- **数量上限**：设置一局中寻迹者的最大人数。
- **生命监测仪冷却**：设置再次查看生命监测仪前的等待时间。
- **生命监测仪持续时间**：设置每次查看生命监测仪可持续多久。
- **箭头最短出现延迟**：设置箭头出现前至少等待的时间。
- **箭头最长出现延迟**：设置箭头出现前可能等待的最长时间。

<!-- en -->
## Role

The Tracefinder can access portable Vitals and receives arrows pointing to dead bodies.

## Settings

- **Maximum count**: Sets the maximum number of Tracefinders in a match.
- **Vitals cooldown**: Sets how long the Tracefinder must wait before checking Vitals again.
- **Vitals duration**: Sets how long each Vitals check lasts.
- **Minimum arrow show-up delay**: Sets the shortest delay before an arrow appears.
- **Maximum arrow show-up delay**: Sets the longest possible delay before an arrow appears.
