---
{"id":"role-cleanser","kind":"role","category":"crewmate","title":{"zh-CN":"清洗者","en":"Cleanser"},"summary":{"zh-CN":"清洗者在会议中投票指定一名存活的其他玩家（不能是固执者），会议结束后移除其附加职业；被清洗者之后能否获得附加职业可设置。","en":"The Cleanser votes for another living player, except a Stubborn, to remove their add-ons after the meeting; whether they can receive add-ons afterward is configurable."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Cleanser.cs"}
---

<!-- zh-CN -->
## 职业能力

清洗者可在会议中投票给一名存活的其他玩家，以清除目标的附加职业；不能选择自己或固执者。清除在会议结束后生效。根据设置，被清洗的玩家之后可能无法再获得附加职业。

## 设置

- **数量上限**：设置一局中清洗者的最大人数。
- **清洗次数上限**：设置清洗者最多能清除附加职业的次数。
- **被清洗者仍可获得附加职业**：开启时，被清洗者之后仍可获得附加职业；关闭时不能再获得。

<!-- en -->
## Role

During a meeting, the Cleanser can vote for another living player to erase that player's add-ons; the Cleanser cannot target themself or a Stubborn. The erasure takes effect after the meeting. Depending on settings, a cleansed player may be unable to receive add-ons afterward.

## Settings

- **Maximum count**: Sets the maximum number of Cleansers in a match.
- **Maximum cleanses**: Sets how many times the Cleanser can cleanse a target.
- **Cleansed player can get add-ons**: ON allows the cleansed player to receive add-ons afterward; OFF prevents it.
