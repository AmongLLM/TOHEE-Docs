---
{"id":"cloud-sharing","kind":"guide","category":"cloud","title":{"zh-CN":"分享你的房间","en":"Share your room"},"summary":{"zh-CN":"房主在网站与模组两端开启分享，让玩家发现当前房间。","en":"Enable sharing on the website and in the mod to help players discover your room."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/main/Modules/Cloud/CloudService.cs","order":4}
---
<!-- zh-CN -->
## 分享前需要什么

你需要已绑定且具备分享资格的 Among Us 账号、有效的游戏在线登录，以及当前在线房间的房主身份。离线本地游戏、非房主玩家或不受支持的模组版本不会正常上报共享房间。

分享后，房间码会向符合资格的 Cloud 用户和获授权的 API 调用方可见。请仅在愿意让这些玩家加入时开启。

## 开启分享

1. 在网站 [游戏账号](/accounts) 中，找到房主正在使用的好友代码，开启“房间分享”。
2. 在 TOHEE 的 Cloud 菜单开启本地分享，也可以使用 `/cloud share on`。
3. 作为房主进入在线房间。查看 Cloud 菜单的账号资格、房间分享状态和提示信息。
4. 如果当前房间之前手动停止了分享，在菜单中重新选择分享当前房间。

网站开关是账号层面的许可，模组开关决定当前客户端是否发送房间信息，两端都需要开启。修改网站设置后，可以在模组中刷新账户状态，或使用 `/cloud account refresh`。

## 私人房间

私人房间需要明确确认分享当前房间。在模组 Cloud 菜单选择分享当前私人房间，或使用 `/cloud private confirm`。确认的是当前房间，不代表以后所有私人房间都自动公开。

Among Us 的“私人”状态不等于 Cloud 已停止展示房间码。请核对 Cloud 的分享状态；不愿继续展示时，明确停止当前房间分享或关闭分享开关。

## 停止分享

在 Cloud 菜单停止当前房间分享，可以保留本地分享总开关；使用 `/cloud share off` 则关闭本地分享并请求撤下房间。在网站关闭账号的房间分享也会阻止继续分享。

列表更新存在刷新间隔。查看者已复制的房间码不能通过关闭分享撤回。房主离开、断线或服务不可用时，列表中的状态也可能暂时落后；不能把列表记录当作实时在线保证。

## 房间没有出现

先检查是否为房主、是否完成游戏登录、是否绑定了正确账号、两端开关是否开启，以及私人房间是否确认。账号资格、服务器信息和模组版本也会影响上报。按照 Cloud 菜单的具体原因处理，详见 [常见问题](/docs/cloud-help)。

<!-- en -->
## Requirements

You need a linked Among Us account eligible to share, a valid online game login and host authority in the current online room. Offline local games, non-host players and unsupported mod versions cannot report a shared room normally.

Sharing makes your room code visible to eligible Cloud users and authorised API clients. Enable it when you want those players to discover and join your room.

## Enable sharing

1. Under [Game accounts](/accounts), find the friend code currently used by the host and enable room sharing.
2. Enable local sharing in the TOHEE Cloud menu, or use `/cloud share on`.
3. Host an online room. Check account eligibility, room-sharing status and messages in the Cloud menu.
4. If you manually stopped sharing this room earlier, choose to share the current room again.

The website switch permits sharing for the account. The mod switch controls whether this client sends room information. Both must be enabled. After changing website settings, refresh account status in the mod or use `/cloud account refresh`.

## Private rooms

A private room requires explicit confirmation for the current room. Choose to share the current private room in the mod's Cloud menu, or use `/cloud private confirm`. This confirms the current room, not all future private rooms.

The game's Private status does not mean Cloud has stopped showing its code. Check Cloud's sharing status. Explicitly stop sharing the current room or disable sharing when you no longer want the code displayed.

## Stop sharing

Stopping the current room in the Cloud menu preserves the local sharing preference. `/cloud share off` disables local sharing and requests room removal. Turning off account sharing on the website also prevents continued sharing.

The room list has a refresh interval. Stopping sharing cannot recall codes that viewers have already copied. After host departure, disconnection or a service outage, listed status may briefly lag behind. A listing does not guarantee a host is online now.

## If your room is missing

Check that you are the host, have finished signing in to the game, linked the right account, enabled both switches and confirmed any private room. Account eligibility, server information and mod version also affect reporting. Follow the specific Cloud menu message; see [troubleshooting](/docs/cloud-help).
