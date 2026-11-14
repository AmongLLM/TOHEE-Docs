---
{
  "id": "guide-updating",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "更新 TOHEE",
    "en": "Update TOHEE"
  },
  "summary": {
    "zh-CN": "安全替换发行文件，并保留本地设置和模板。",
    "en": "Replace release files safely while keeping local settings and templates."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/packaging/INSTALL.txt",
  "order": 3
}
---
<!-- zh-CN -->
## 更新前

先关闭 Among Us 和启动器中正在运行的游戏进程。备份游戏目录里的 `TOHEE-DATA` 文件夹；它保存预设、模板和本地标签。不要把旧版模组 DLL 与新版本加载器或其他商店的 interop 文件混在一起。

## 安装新版本

1. 打开 [TOHEE GitHub Releases](https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/releases)，查看最新版本的发行说明和支持的 Among Us 版本。
2. 下载与当前商店及架构相符的发行包。Steam、Epic Games、Microsoft Store / Xbox App 通常使用 x64；Windows itch.io 客户端使用 x86。若游戏本体升级了，优先使用该游戏版本对应的完整发行包。
3. 在游戏关闭时将发行包中的文件解压到 `Among Us.exe` 所在目录，并按提示覆盖模组文件。保留 `TOHEE-DATA`，不要用旧备份整个覆盖新安装目录。
4. 从较早的整合包升级时，请查看随当前发行包提供的说明，确认是否还需替换 patcher 或其他加载器文件。若首次初始化要求重启，按发行说明重新启动游戏。
5. 启动游戏并确认主菜单显示当前 TOHEE 版本。若加载失败，检查 `BepInEx/LogOutput.log` 并查看[故障排查](/docs/guide-troubleshooting)。

对于相同 Among Us 版本、相同架构和相同 BepInEx 6 `be.755` 环境的常规小版本更新，发行包说明允许只替换 `BepInEx/plugins/TOHE.dll`。若发行说明要求更新加载器或 patcher，或你不确定当前环境，则使用完整发行包更新。

## 设置文件

TOHEE 当前把游戏选项保存为 `TOHEE-DATA/SaveData/GlobalOptions.jsonc` 和 `Preset1.jsonc` 至 `Preset8.jsonc`。这些本地文件和 `TOHEE-DATA/Presets/` 中用于分享的 JSON 文件用途不同。更新后不要把旧版网站下载流程中的 `Options.json` 当成当前预设格式；旧 `Options.json` 只在程序迁移旧数据时使用。更多信息见[预设指南](/docs/guide-presets)。

上游旧教程曾介绍内置更新器和 Discord 测试版下载。当前建议通过 GitHub Releases 获取 TOHEE 发行包；不要依赖旧版频道名称或旧下载地址。

<!-- en -->
## Before updating

Close Among Us and any running game process from the launcher. Back up the `TOHEE-DATA` folder in the game directory; it holds presets, templates, and local tags. Do not mix an old mod DLL with a new loader or interop files from another store installation.

## Install the new version

1. Open [TOHEE GitHub Releases](https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/releases) and read the newest release notes and supported Among Us version.
2. Download the package for your store and architecture. Steam, Epic Games, and Microsoft Store / Xbox App normally use x64; the Windows itch.io client uses x86. If the game itself was updated, prefer the full release package for that game version.
3. With the game closed, extract the package into the directory containing `Among Us.exe` and allow it to replace mod files as prompted. Keep `TOHEE-DATA`; do not replace the entire new installation directory with an old backup.
4. When upgrading an older bundled release, check the current package instructions for any patcher or loader files that must also be replaced. If first initialization requires a restart, follow the release notes and relaunch the game.
5. Launch the game and confirm the main menu shows the current TOHEE version. If loading fails, inspect `BepInEx/LogOutput.log` and see [troubleshooting](/docs/guide-troubleshooting).

For a routine mod-only update on the same Among Us version, architecture, and BepInEx 6 `be.755` environment, the release instructions allow replacing only `BepInEx/plugins/TOHE.dll`. Use the full release package if the notes require a loader or patcher update, or if you are unsure about the current setup.

## Settings files

Current TOHEE saves game options in `TOHEE-DATA/SaveData/GlobalOptions.jsonc` and `Preset1.jsonc` through `Preset8.jsonc`. These local files differ from the JSON files used for sharing presets in `TOHEE-DATA/Presets/`. Do not treat `Options.json` from an old website download flow as the current preset format; the old `Options.json` is read only when the program migrates legacy data. See the [preset guide](/docs/guide-presets).

Older upstream instructions described a built-in updater and Discord beta downloads. The current recommendation is to get TOHEE release packages from GitHub Releases; do not rely on old channel names or download links.
