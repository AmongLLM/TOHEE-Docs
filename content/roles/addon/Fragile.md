---
{
  "id": "role-fragile",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Fragile",
    "zh-CN": "脆弱者"
  },
  "summary": {
    "zh-CN": "可被击杀按钮直接击杀；是否触发及击杀者是否冲刺由阵营设置控制。",
    "en": "Can be killed by a kill-button attempt; team settings control whether the kill works and whether the killer lunges."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Fragile.cs"
}
---
<!-- zh-CN -->

## 效果

对脆弱者使用击杀按钮时，若击杀者所属阵营的设置允许，脆弱者会立即死亡，即使攻击者平时不能直接击杀。可分别设置内鬼、船员和中立者能否击杀脆弱者，并设置击杀时是否冲刺。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **ImpCanKillFragile（内鬼可击杀 Fragile）**：控制内鬼能否击杀脆弱者。
- **CrewCanKillFragile（船员可击杀 Fragile）**：控制船员能否击杀脆弱者。
- **NeutralCanKillFragile（中立者可击杀 Fragile）**：控制中立者能否击杀脆弱者。
- **FragileKillerLunge（击杀 Fragile 时冲刺）**：控制成功击杀脆弱者时击杀者是否向目标冲刺。

<!-- en -->

## Effect

A kill-button attempt kills Fragile if the attacker's team is allowed to kill it, even when that role normally cannot kill directly. The host can separately allow Impostors, Crewmates, and Neutrals to kill Fragile, and choose whether the killer lunges.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **ImpCanKillFragile**: Whether Impostors can kill Fragile.
- **CrewCanKillFragile**: Whether Crewmates can kill Fragile.
- **NeutralCanKillFragile**: Whether Neutrals can kill Fragile.
- **FragileKillerLunge**: Whether the killer lunges toward Fragile when the kill succeeds.
