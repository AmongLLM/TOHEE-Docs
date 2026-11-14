---
{"id":"role-medic","kind":"role","category":"crewmate","title":{"zh-CN":"医生","en":"Medic"},"summary":{"zh-CN":"医生用击杀按钮给一名玩家施加护盾，护盾与击杀尝试的提示、死亡后失效和职业猜测交互均可配置。","en":"The Medic uses the kill button to shield one player, with configurable shield visibility, kill-attempt alerts, death behavior, and guessing interaction."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Medic.cs"}
---

<!-- zh-CN -->
## 职业能力

医生可对目标使用击杀按钮施加护盾，一整局只能施加一个护盾。根据房主设置，医生或被保护者可看到护盾提示；医生也可以得知有人试图击破护盾。医生死亡后护盾是否失效取决于设置。

## 设置

- **数量上限**：设置一局中医生的最大人数。
- **谁能看到护盾**：可选无人、医生与被保护者都能看到、仅医生能看到，或仅被保护者能看到。
- **谁能看到击杀尝试**：可选无人、医生与被保护者都能看到、仅医生能看到，或仅被保护者能看到。
- **医生死亡时护盾失效**：开启时医生死亡会使护盾失效；关闭时护盾在医生死亡后仍保留。
- **护盾失效提示可见**：在护盾会因医生死亡而失效时，可设置是否显示失效提示。提示可立即显示、在下一次会议后显示，或关闭提示显示。
- **击杀尝试后重置凶手冷却**：设置护盾遭遇击杀尝试后，攻击者的击杀冷却重置为多少。
- **猜测时忽略医生护盾**：开启时护盾不会阻止对被保护者进行职业猜测；关闭时护盾会保护其免遭猜测。

<!-- en -->
## Role

The Medic uses the kill button to place a shield on a target and can give only one shield for the entire game. Depending on settings, the Medic or the shielded player can see the shield indicator. The Medic can also learn when someone tries to break the shield. Whether the shield ends when the Medic dies is configurable.

## Settings

- **Maximum count**: Sets the maximum number of Medics in a match.
- **Who can see the shield**: Choose no one, Medic and shielded player, Medic only, or shielded player only.
- **Who can see a kill attempt**: Choose no one, Medic and shielded player, Medic only, or shielded player only.
- **Shield deactivates when the Medic dies**: ON removes the shield when the Medic dies; OFF leaves it in place after their death.
- **Shield deactivation is visible**: When the shield deactivates on the Medic's death, choose whether to show the deactivation immediately, after the next meeting, or not at all.
- **Reset murderer's cooldown on kill attempt**: Sets the attacker's kill cooldown after an attempt to break the shield.
- **Guessing ignores Medic shield**: ON lets players guess the shielded target despite the shield; OFF lets the shield protect the target from being guessed.
