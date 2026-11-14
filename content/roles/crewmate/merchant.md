---
{"id":"role-merchant","kind":"role","category":"crewmate","title":{"zh-CN":"商人","en":"Merchant"},"summary":{"zh-CN":"商人每完成任务会向随机玩家出售随机附加职业并获得金钱；达到门槛后可贿赂攻击者，使其本局后续无法击杀商人。","en":"The Merchant sells a random add-on to a random player per task and earns money; after reaching the threshold, they can bribe an attacker to block that player's later kill attempts against them for the rest of the game."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Merchant.cs"}
---

<!-- zh-CN -->
## 职业能力

商人每完成一个任务会向随机玩家出售随机附加职业并获得金钱。金钱达到门槛后，针对商人的击杀会贿赂该攻击者；同一攻击者本局之后针对商人的击杀也会被挡下。商人可用积累的金钱贿赂其他攻击者，不会得知攻击者身份。

## 设置

- **数量上限**：设置一局中商人的最大人数。
- **可出售附加职业数量上限**：设置商人最多出售多少个附加职业。
- **每次出售获得的金钱**：设置每售出一个附加职业商人获得的金额。
- **贿赂杀手所需金钱**：设置商人需要攒够多少金钱才能贿赂杀手。
- **杀手被贿赂时通知商人**：开启时，商人会收到其贿赂触发的提示；关闭时不显示此提示。
- **可出售给船员阵营/内鬼阵营/中立阵营**：分别设置商人是否可以向对应阵营出售附加职业。
- **可出售帮助类/有害类/混合类附加职业**：分别设置是否允许出售对应类型。
- **有害类仅售给邪恶阵营**：当前实现中，开启此项会将帮助类附加职业限定为售给船员阵营，与选项名称相反。
- **帮助类仅售给船员阵营**：当前实现中，开启此项会将有害类附加职业限定为售给内鬼或中立阵营，与选项名称相反。
- **只出售已启用的附加职业**：开启时只会出售已启用的附加职业；关闭时不受此限制。
- **自定义商人任务**：开启时可单独设置任务数量；关闭时商人与其他玩家任务数量相同。自定义选项包括公共任务、长任务和短任务的设置。

<!-- en -->
## Role

For each task completed, the Merchant sells a random add-on to a random player and earns money. Once the required amount is available, an attack against the Merchant bribes that attacker; their later kill attempts against the Merchant are also blocked for the rest of the game. The Merchant can spend more earned money to bribe other attackers but does not learn their identities.

## Settings

- **Maximum count**: Sets the maximum number of Merchants in a match.
- **Maximum add-ons to sell**: Sets how many add-ons the Merchant can sell.
- **Money earned per sale**: Sets how much money the Merchant receives for each add-on sold.
- **Money required to bribe a killer**: Sets how much money the Merchant must have to bribe a killer.
- **Inform Merchant when a killer is bribed**: ON notifies the Merchant when their bribe takes effect; OFF suppresses that notice.
- **Can sell to Crewmates, Impostors, and Neutrals**: Each setting controls whether the Merchant may sell add-ons to that team.
- **Can sell Helpful, Harmful, and Mixed add-ons**: Each setting controls whether add-ons of that type may be sold.
- **Sell Harmful add-ons only to Evil**: In the current implementation, ON restricts Helpful add-ons to Crewmates, opposite to the option label.
- **Sell Helpful add-ons only to Crew**: In the current implementation, ON restricts Harmful add-ons to Impostors or Neutrals, opposite to the option label.
- **Sell only enabled add-ons**: ON restricts sales to enabled add-ons; OFF does not.
- **Override Merchant tasks**: ON allows a separate task setup; OFF gives the Merchant the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
