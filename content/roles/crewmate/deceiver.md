---
{"id":"role-deceiver","kind":"role","category":"crewmate","title":{"zh-CN":"赝品商","en":"Deceiver"},"summary":{"zh-CN":"赝品商用击杀按钮把赝品交给玩家；没有击杀能力的目标会在会议后自杀，有击杀能力者则会在尝试击杀时自杀。","en":"The Deceiver passes a counterfeit with the kill button; a non-killer dies after the meeting, while a killer dies after attempting a kill."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Deceiver.cs"}
---

<!-- zh-CN -->
## 职业能力

赝品商可以通过击杀按钮把赝品交给其他玩家。没有击杀能力的玩家收到赝品后会在会议结束后自杀；有击杀能力的玩家会在尝试击杀他人后自杀。

## 设置

- **数量上限**：设置一局中赝品商的最大人数。
- **技能冷却**：设置再次交出赝品前的等待时间。
- **使用次数上限**：设置赝品商可以交出赝品的次数。
- **欺骗没有击杀按钮的玩家后失去技能**：开启时，向没有击杀按钮的玩家交出赝品后会失去技能；关闭时仍保留技能。

<!-- en -->
## Role

The Deceiver can pass a counterfeit to another player through the kill button. A recipient without a kill button dies after the meeting. A recipient with a kill button dies after attempting to kill someone.

## Settings

- **Maximum count**: Sets the maximum number of Deceivers in a match.
- **Ability cooldown**: Sets how long the Deceiver must wait before passing another counterfeit.
- **Maximum uses**: Sets how many counterfeits the Deceiver can pass.
- **Lose ability after deceiving a player without a kill button**: ON removes the Deceiver's ability after targeting someone without a kill button; OFF does not.
