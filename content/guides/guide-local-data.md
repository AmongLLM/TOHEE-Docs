---
{
  "id": "guide-local-data",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "本地数据文件",
    "en": "Local Data Files"
  },
  "summary": {
    "zh-CN": "认识 TOHEE-DATA 中的设置、模板、预设和标签文件。",
    "en": "Find settings, templates, presets, and tag files under TOHEE-DATA."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/DataDirectoryMigration.cs",
  "order": 10
}
---
<!-- zh-CN -->
## TOHEE-DATA

当前 TOHEE 将本地数据保存在游戏目录的 `TOHEE-DATA` 文件夹。首次启动可能会创建缺少的文件。旧版数据目录名为 `TOHE-DATA`；模组会在适用时迁移已有文件，但更新前仍建议先备份。

| 路径 | 内容 |
| --- | --- |
| `TOHEE-DATA/SaveData/GlobalOptions.jsonc` | 全局选项及当前预设选择。 |
| `TOHEE-DATA/SaveData/Preset1.jsonc` 至 `Preset8.jsonc` | 本地预设槽的选项。 |
| `TOHEE-DATA/Presets/` | `/save` 导出的、可分享的 JSON 预设文件。 |
| `TOHEE-DATA/template.txt` | 欢迎消息和自定义聊天模板。 |
| `TOHEE-DATA/CustomSoundsVolumeConfig.json` | 自定义音效的总音量、单项音量和开关，由[音效管理界面](/docs/guide-custom-sounds)自动保存。 |
| `TOHEE-DATA/Tags/` 与 `TOHEE-DATA/tags.txt` | 房主本地玩家标签与外观后备标签；不等于 Cloud 网页标签。 |
| `TOHEE-DATA/BanList.txt`、`DenyName.txt`、`WhiteList.txt` | 房间使用的封禁、名称过滤与允许列表数据。 |

不要把 `GlobalOptions.jsonc` 或 `PresetN.jsonc` 改成旧版 `Options.json` 格式；使用游戏菜单修改设置。分享预设的命令和版本校验见[预设指南](/docs/guide-presets)，模板格式见[聊天模板](/docs/guide-templates)，本地标签见[玩家标签](/docs/guide-tags)。

## 备份和迁移

关闭游戏后，复制整个 `TOHEE-DATA` 文件夹到安全位置。若从旧安装恢复设置，只恢复需要的配置文件，不要把旧的加载器、插件或 interop 文件复制到新游戏目录。遇到文件丢失或格式错误时，保留副本并检查日志；不要删除原始数据后再尝试恢复。

<!-- en -->
## TOHEE-DATA

Current TOHEE stores local data in the `TOHEE-DATA` folder beside the game. The mod may create missing files on first launch. Older releases used the `TOHE-DATA` directory name; the mod migrates existing files when applicable, but back up the folder before updating.

| Path | Contents |
| --- | --- |
| `TOHEE-DATA/SaveData/GlobalOptions.jsonc` | Global options and the current preset selection. |
| `TOHEE-DATA/SaveData/Preset1.jsonc` through `Preset8.jsonc` | Settings for local preset slots. |
| `TOHEE-DATA/Presets/` | Shareable JSON preset files exported with `/save`. |
| `TOHEE-DATA/template.txt` | Welcome messages and custom chat templates. |
| `TOHEE-DATA/CustomSoundsVolumeConfig.json` | Master/per-effect volumes and switches, saved automatically by the [sound manager](/docs/guide-custom-sounds). |
| `TOHEE-DATA/Tags/` and `TOHEE-DATA/tags.txt` | Host-local player tags and cosmetic fallback tags; these are not Cloud web tags. |
| `TOHEE-DATA/BanList.txt`, `DenyName.txt`, `WhiteList.txt` | Ban, name-filter, and allow-list data used by the room. |

Do not convert `GlobalOptions.jsonc` or `PresetN.jsonc` to the old `Options.json` format; change settings in the game menu. See the [preset guide](/docs/guide-presets) for sharing commands and version checks, [chat templates](/docs/guide-templates) for template syntax, and [player tags](/docs/guide-tags) for the local tag system.

## Back up and migrate

Close the game and copy the whole `TOHEE-DATA` folder to a safe location. When restoring settings from an older installation, restore only the configuration files you need; do not copy old loader, plugin, or interop files into the new game directory. If files are missing or invalid, keep a backup and inspect the log before making changes.
