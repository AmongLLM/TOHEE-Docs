---
{"id":"role-amnesiac","kind":"role","category":"neutral","title":{"en":"Amnesiac","zh-CN":"失忆者"},"summary":{"zh-CN":"报告尸体并记住死者的身份；根据死者阵营与兼容性转变为相应职业。","en":"Report a body to remember the victim's role, then become a role determined by their team and compatibility."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Amnesiac.cs"}
---
<!-- zh-CN -->
## 失忆者

失忆者可以报告尸体并记住死者的职业：

- 死者属于内鬼阵营，或拥有背叛者附加职业时，失忆者会变为逃亡者。
- 死者属于船员阵营时，若职业兼容，失忆者会变为该职业；否则会变为工程师。
- 对于代码列出的部分中立职业，失忆者会直接变为死者的职业；其他被标记为不兼容的中立职业会使用设置指定的替代职业。
- 不在这两类识别列表中的中立职业不会触发上述转变，失忆者仍保持原职业。

## 设置

- **人数上限**：一局中可出现的失忆者数量上限。
- **中立职业不兼容时的转变职业**：可选择失忆者、起诉人、赌徒、独行者或效仿者。
- **显示尸体箭头**：设置失忆者是否会看到指向尸体的箭头。

<!-- en -->
## Amnesiac

The Amnesiac can report a body to remember the victim's role:

- If the victim was an Impostor or had the Madmate add-on, the Amnesiac becomes a Refugee.
- If the victim was a Crewmate, the Amnesiac becomes that role when compatible; otherwise, they become an Engineer.
- For certain Neutral roles listed by the implementation, the Amnesiac directly takes the victim's role. Other Neutral roles designated as incompatible use the fallback role selected in the settings.
- Neutral roles outside those recognized groups do not trigger either transformation, so the Amnesiac keeps their role.

## Settings

- **Maximum number:** Maximum number of Amnesiacs in a match.
- **Role for an incompatible Neutral role:** Choose Amnesiac, Pursuer, Follower, Maverick, or Imitator.
- **Arrows to bodies:** Whether the Amnesiac receives arrows pointing to dead bodies.
