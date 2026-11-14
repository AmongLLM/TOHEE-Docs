---
{
  "id": "role-recruit",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "招募",
    "en": "Recruit"
  },
  "summary": {
    "zh-CN": "由豺狼招募获得；加入豺狼阵营并与豺狼一同获胜。",
    "en": "Granted by Jackal recruitment; joins Jackal's team and wins with Jackal."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Jackal.cs"
}
---
<!-- zh-CN -->

## 效果

豺狼可将符合条件的非中立玩家招募为招募。招募与豺狼同属豺狼阵营并一同获胜。豺狼可设置为同时使用跟班和招募、只使用跟班或只使用招募。胜负人数设置可让招募计入豺狼、完全不计人数或保留原阵营。此身份不会独立随机分配。

## 相关设置

- **Jackal_SidekickCountMode（Recruit 计入阵营）**：豺狼设置，控制招募计入豺狼、不计人数或保留原阵营。
- **Jackal_SidekickAssignMode（跟班分配模式）**：控制豺狼分配模式为跟班与招募、仅跟班或仅招募。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

Jackal can recruit eligible non-Neutral players as Recruit. Recruit joins Jackal's team and wins with Jackal. Jackal can be configured to grant Sidekick and Recruit, Sidekick only, or Recruit only. The sidekick count-mode setting can make Recruit count as Jackal, count as nobody, or retain its original team. This identity is not independently assigned at random.

## Related settings

- **Jackal_SidekickCountMode**: Jackal setting that controls whether Recruit counts as Jackal, nobody, or its original team.
- **Jackal_SidekickAssignMode**: Controls whether Jackal can grant Sidekick and Recruit, Sidekick only, or Recruit only.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
