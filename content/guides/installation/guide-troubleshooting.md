---
{
  "id": "guide-troubleshooting",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "故障排查",
    "en": "Troubleshooting"
  },
  "summary": {
    "zh-CN": "按安装、登录、版本和游戏运行问题检查常见原因。",
    "en": "Check common installation, sign-in, version, and gameplay problems."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/README.md",
  "order": 12
}
---
<!-- zh-CN -->
## 模组没有加载，游戏仍像原版

1. 确认你启动的是装有 TOHEE 文件的 Among Us 安装目录，而不是另一个商店目录或原版副本。
2. 检查发行包是否完整解压到 `Among Us.exe` 所在目录，并确认选对架构：Steam、Epic、Microsoft Store / Xbox App 用 x64，Windows itch.io 用 x86。
3. 让首次启动完成；BepInEx 需要为当前游戏安装生成 interop 文件，初始化可能比平常更久。具体联网要求和首次启动步骤以当前发行包说明为准。
4. 若目录内曾安装其他模组，尝试使用干净副本重新安装当前完整发行包。不要直接从其他安装复制 `interop` 文件夹。
5. 查看 `BepInEx/LogOutput.log`。如需重新安装，请先备份 `TOHEE-DATA`。

## 无法登录或登录一直等待

Steam 版可以直接运行游戏目录中的 `Among Us.exe`，但登录时需要保持已登录的 Steam 客户端在后台运行；Epic 版必须通过 Epic Games Launcher 启动才能登录。确认网络连接稳定；Xbox App / Microsoft Store 版本也应先从商店客户端启动一次。若只有模组副本无法登录，确认启动参数、商店目录及包内 `steam_appid.txt`（仅 Steam 适用）没有被删改。第三方登录服务故障时，重启游戏不能修复服务端问题；稍后重试并查看游戏服务状态。

## 提示 Among Us 版本不匹配

确认游戏本体已更新，房主使用支持该版本的 TOHEE 完整发行包，加入者也运行兼容的游戏版本。Steam 玩家应检查是否意外加入公开测试分支。可在[发行页](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/releases)核对当前版本说明；旧上游 Discord notice 链接可能已经变更。

## 启动时黑屏、卡住或崩溃

首次启动需要初始化 interop，可能比平时慢；先等待加载完成，再启动一次。若每次都失败，记录错误发生的时机，检查 `BepInEx/LogOutput.log`，并尝试在干净游戏副本中安装匹配架构的完整发行包。重装前备份 `TOHEE-DATA`。如果黑屏发生在对局内，退出该局并保留日志；在当前版本的帮助中检查是否提供黑屏修复命令，不要盲目使用旧版快捷键。

## 被踢出房间或连接中断

检查房间代码、服务器地区、网络连接和客户端游戏版本。若只有某一房间出现问题，请确认房主是否设置了等级、名单或平台限制，或主动踢出了玩家。若多个房间同时无法连接，可能是 Among Us 官方服务或网络暂时异常；稍后重试。不要把单次断线直接判断为模组故障。

## 一局游戏意外结束或无法结束

胜利条件取决于当前模式、存活阵营、任务和角色目标。检查标准模式的角色胜利条件、任务结束条件、“禁止正常结束游戏”（`No Game End`）一类系统选项，以及当前模式自己的计时规则。若会议无法正常结束，使用当前版本 `/help` 中提供的房主功能；旧上游快捷键不一定适用于当前版本。

## 收集日志并反馈

如果仍能进入游戏，运行 `/dump` 或按 `Ctrl` + `F1` 导出日志；否则复制 `BepInEx/LogOutput.log`。记录 Among Us 和 TOHEE 版本、商店、架构、复现步骤，以及是否能在干净安装中复现。公开反馈前请移除账号凭据、访问令牌或其他私人信息。

<!-- en -->
## TOHEE did not load and the game still looks vanilla

1. Confirm that you launched the Among Us installation containing TOHEE files, not a different store directory or an unmodded copy.
2. Check that the entire release package was extracted beside `Among Us.exe` and that you chose the right architecture: x64 for Steam, Epic, and Microsoft Store / Xbox App; x86 for Windows itch.io.
3. Let first launch finish. BepInEx must generate interop files for this game installation, and initialization may take longer than usual. Follow the current release notes for any first-launch or network requirements.
4. If other mods were installed in that directory, try a clean game copy with the current full release package. Do not copy an `interop` folder from another installation.
5. Inspect `BepInEx/LogOutput.log`. Back up `TOHEE-DATA` before reinstalling.

## Sign-in failed or is taking a long time

The Steam version can be launched directly from `Among Us.exe` in the game directory, but the signed-in Steam client must remain running in the background for game sign-in. The Epic version must be launched through Epic Games Launcher to sign in. Make sure the network is stable, and start an Xbox App / Microsoft Store game once from its store client as well. If only the modded copy cannot sign in, check the launch method, store directory, and the bundled `steam_appid.txt` (Steam only). Restarting the game will not fix a third-party sign-in outage; retry later and check the game service status.

## The game reports a version mismatch

Make sure Among Us itself is updated, the host uses a full TOHEE release that supports that game version, and joining players use a compatible version too. Steam players should check that they are not on a public beta branch by mistake. Compare the current notes on the [release page](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/releases); old upstream Discord notice links may have changed.

## Black screen, hang, or crash on startup

First launch initializes interop and can take longer than usual. Wait for it to finish, then launch once more. If it fails every time, note when the error occurs, inspect `BepInEx/LogOutput.log`, and try the full release package for the matching architecture in a clean game copy. Back up `TOHEE-DATA` before reinstalling. If a black screen occurs during a round, leave the game and keep the log; check the current build's help for a black-screen fix command rather than relying on an old shortcut.

## Kicked from a room or disconnected

Check the room code, server region, network connection, and client game version. If the problem occurs in only one room, ask whether the host configured level, allow-list, or platform limits, or removed the player. If several rooms fail at once, Among Us services or the network may be temporarily unavailable; retry later. Do not assume one disconnect proves a mod bug.

## A round ended unexpectedly or will not end

Win conditions depend on the mode, living factions, tasks, and role objectives. Check Standard role victory conditions, task completion, system options such as No Game End, and the selected mode's own timer rules. If a meeting does not finish, use a host feature listed in the current `/help`; old upstream shortcuts may not apply to the current build.

## Collect logs and report the problem

If the game still opens, run `/dump` or press `Ctrl` + `F1` to export the log. Otherwise, copy `BepInEx/LogOutput.log`. Include the Among Us and TOHEE versions, store, architecture, reproduction steps, and whether the issue happens in a clean installation. Remove account credentials, access tokens, and other private information before sharing a report publicly.
