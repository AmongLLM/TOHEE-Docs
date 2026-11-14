---
{
  "id": "guide-presets",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "预设与设置文件",
    "en": "Presets and Settings Files"
  },
  "summary": {
    "zh-CN": "使用预设槽、备份当前配置，并了解当前 JSONC 与本地分享文件。",
    "en": "Use preset slots, back up settings, and understand current JSONC and local share files."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/PresetSharing.cs",
  "order": 6
}
---
<!-- zh-CN -->
## 预设槽

房间设置按预设槽保存。你可以在游戏设置界面选择槽位，为不同人数或玩法保留多套规则。切换槽位后，确认游戏内显示的是想使用的那一套设置，再开始游戏。

TOHEE 将设置写入 `TOHEE-DATA/SaveData/`：`GlobalOptions.jsonc` 保存全局设置，`Preset1.jsonc` 至 `Preset8.jsonc` 保存各槽位选项。JSONC 允许注释和末尾逗号；文件中的数字 ID 对应模组内部选项索引，不是屏幕上显示的设置值。建议通过游戏菜单编辑，不要直接手工修改这些文件。

## 导出和载入可分享预设

房主可在大厅使用以下命令：

```text
/save 休闲标准局
/load 休闲标准局
```

`/save` 会把当前选项写入 `TOHEE-DATA/Presets/<名称>.json`；将文件发给朋友后，对方把它放入自己同一目录，再在房间大厅运行 `/load <名称>`，即可把选项导入**当前预设槽**。命令仅限房主在大厅中使用，文件名可包含字母、数字、空格、连字符和下划线。

分享文件带有游戏、模组和选项格式版本信息。载入时会检查版本和选项兼容性；版本不匹配或内容无效时不会应用。加载成功后检查菜单中的选项，再开始游戏。不要从不可信来源运行或修改未知预设文件。

游戏设置菜单里的 **Copy** 按钮还可在本地槽位之间复制，或复制上一位房主同步给房间的预设；该按钮仅供房主在大厅使用。复制会覆盖目标槽位，确认提示后再继续。

## 旧版数据

旧上游教程要求把下载的 `Options.json` 放入 `TOHE-DATA/SaveData`，并改名后选择。当前 TOHEE 已改用 `GlobalOptions.jsonc` 与各槽位的 `PresetN.jsonc`，本地分享文件则由 `/save` 和 `/load` 管理。旧 `Options.json` 只用于程序迁移旧配置，不是当前推荐的分享格式。

更新模组前备份整个 `TOHEE-DATA` 文件夹。升级说明见[更新 TOHEE](/docs/guide-updating)。

<!-- en -->
## Preset slots

Room settings are stored in preset slots. Choose a slot in the game settings menu to keep separate rule sets for different group sizes or play styles. After switching, confirm the game shows the settings you intend to use before starting.

TOHEE stores settings in `TOHEE-DATA/SaveData/`: `GlobalOptions.jsonc` contains global settings and `Preset1.jsonc` through `Preset8.jsonc` contain slot options. JSONC permits comments and trailing commas. The numeric IDs in the files map to internal option indexes, not the values shown in the menu. Edit settings through the game menu instead of changing these files by hand.

## Export and load a shareable preset

The host can use these commands in the lobby:

```text
/save Casual Standard
/load Casual Standard
```

`/save` writes the current options to `TOHEE-DATA/Presets/<name>.json`. After sending that file to a friend, they put it in the same directory and run `/load <name>` in their own lobby to import the options into the **current preset slot**. Only the host can use these commands in the lobby. File names may contain letters, digits, spaces, hyphens, and underscores.

Share files include game, mod, and option-format versions. Loading checks version and option compatibility; incompatible versions or invalid content are not applied. Review the resulting menu settings before starting. Do not use or edit preset files from sources you do not trust.

The **Copy** button in the game settings menu can also copy between local slots or copy the previous host's preset shared with the room. Only the host can use this button in the lobby. Copying overwrites the target slot, so review the confirmation before proceeding.

## Legacy data

Old upstream instructions told players to download `Options.json`, place it in `TOHE-DATA/SaveData`, and select it. Current TOHEE uses `GlobalOptions.jsonc` and one `PresetN.jsonc` per slot; `/save` and `/load` manage local share files. The old `Options.json` is read only to migrate legacy settings and is not the recommended sharing format.

Back up the entire `TOHEE-DATA` folder before updating. See [updating TOHEE](/docs/guide-updating).
