---
{"id":"role-punchingbag","kind":"role","category":"neutral","title":{"en":"Punching Bag","zh-CN":"受虐狂"},"summary":{"zh-CN":"承受足够次数的攻击即可获胜；猜测受虐狂会被阻止，但每位猜测者的首次尝试会计为一次攻击。","en":"Win after enough attacks; guesses at the role are blocked, but each guesser's first attempt counts as an attack."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/PunchingBag.cs"}
---
<!-- zh-CN -->
## 受虐狂

普通击杀攻击受虐狂时，攻击会被取消并增加一次受攻击次数。猜测受虐狂职业也会被阻止，但每位猜测者的首次尝试会增加一次受攻击次数；同一猜测者再次尝试不会重复计数。受虐狂不能猜测自己。

## 设置

- **人数上限**：一局中可出现的受虐狂数量上限。
- **获胜所需攻击次数**：受虐狂必须承受的攻击次数。

<!-- en -->
## Punching Bag

An ordinary kill attempt against the Punching Bag is canceled and adds one attack to its count. Guessing the role is also blocked, but each guesser's first attempt adds one attack; later attempts from the same guesser do not count again. The Punching Bag cannot guess its own role.

## Settings

- **Maximum number:** Maximum number of Punching Bags in a match.
- **Attacks required to win:** Number of attacks the Punching Bag must receive.
