---
{"id":"role-mortician","kind":"role","category":"crewmate","title":{"zh-CN":"入殓师","en":"Mortician"},"summary":{"zh-CN":"入殓师可查看指向尸体的箭头；当前源码未实现可靠的最后接触线索，报告提示存在错误。","en":"The Mortician can see arrows to bodies; the current source does not provide a reliable last-contact clue and has an error in the report notification path."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Mortician.cs"}
---

<!-- zh-CN -->
## 职业能力

入殓师可以按设置查看指向尸体的箭头。当前版本的报告提示存在实现错误，无法可靠提供死者的最后接触者或凶手信息，请勿将该提示作为有效线索。

## 设置

- **数量上限**：设置一局中入殓师的最大人数。
- **显示指向尸体的箭头**：开启时显示指向所有尸体的箭头；关闭时不显示。

<!-- en -->
## Role

The Mortician can see arrows pointing to bodies when enabled. The current version has an implementation error in its report notice and cannot reliably identify the victim's last contact or killer. Do not treat that notice as a reliable clue.

## Settings

- **Maximum count**: Sets the maximum number of Morticians in a match.
- **Arrows pointing to bodies**: ON shows arrows pointing to all dead bodies; OFF hides them.
