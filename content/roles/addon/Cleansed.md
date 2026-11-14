---
{
  "id": "role-cleansed",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "干净",
    "en": "Cleansed"
  },
  "summary": {
    "zh-CN": "清洗者在会议后移除目标的所有附加身份，并留下干净标记。",
    "en": "Cleanser removes all of a target's add-ons after the meeting and leaves the Cleansed marker."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Cleanser.cs"
}
---
<!-- zh-CN -->

## 效果

清洗者可在会议中选择目标；会议结束后会移除目标的所有附加身份，并赋予干净标记。此标记不会独立随机分配。默认情况下，带有干净的玩家不能获得新的附加身份；清洗者设置 `CleansedCanGetAddon` 可允许其之后获得附加身份。

## 相关设置

- **CleansedCanGetAddon（Cleansed 玩家可获得附加身份）**：清洗者设置，控制干净玩家被清洗后能否获得新的附加身份。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

Cleanser can select a target during a meeting. After the meeting, all of that player's add-ons are removed and the Cleansed marker is applied. This marker is not randomly assigned. By default, a Cleansed player cannot receive new add-ons; Cleanser's `CleansedCanGetAddon` setting can allow them to receive add-ons afterward.

## Related settings

- **CleansedCanGetAddon**: Cleanser setting that controls whether Cleansed players can receive new add-ons after being cleansed.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
