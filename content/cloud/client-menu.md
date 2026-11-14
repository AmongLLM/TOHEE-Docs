---
{"id":"cloud-client-menu","kind":"guide","category":"cloud","title":{"zh-CN":"模组内 Cloud 界面","en":"The in-mod Cloud interface"},"summary":{"zh-CN":"认识客户端 TOHEE Cloud 面板的按钮、状态、分享控制与网页协议流程。","en":"Use the TOHEE Cloud panel's buttons, status messages, sharing controls and website policy flow."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/Cloud/CloudMenu.cs","order":1.5}
---
<!-- zh-CN -->
## 从哪里打开

在模组客户端选项中选择“**TOHEE Cloud…**”，或点击主菜单的 Cloud 入口。主菜单入口会等待游戏登录流程完成后显示；入口显示不代表账号已经绑定，仍需查看面板的账户状态。

面板顶部显示当前房间的分享状态，并提示房间码的可见范围；下方显示游戏账号的绑定或资格状态，以及最近一次操作结果。关闭面板可点击返回或按 `Esc`。

## 注册与 policy

**完整的 Cloud policy（信息收集协议）未包含在模组内。** 模组面板中的房间码分享提示不替代网页协议。注册或登录到 Cloud 时，在网页打开的 [信息收集协议](/policy) 中阅读完整内容，并同意后继续。

首次注册时，通过模组“绑定账号”打开网页，先完成 Cloud 注册及协议同意流程，再完成游戏账号绑定。注册/登录页面在当前浏览器尚未记录同意时会先跳转到协议页。模组内不重复要求点击同意；打开 Cloud 面板也不会替你完成网页的同意操作。

## 按钮说明

| 按钮 | 实际作用 |
| --- | --- |
| 绑定账号 | 为当前游戏账号发起绑定并打开浏览器，按网页步骤完成验证。已绑定或正在请求时可能不可用。 |
| 刷新账户状态 | 重新检查当前游戏账号的绑定及分享资格。网页改了账号设置后可使用。 |
| 前往网站管理 | 在浏览器打开“游戏账号”，管理标签、分享开关和解绑。 |
| 开启分享 / 关闭分享 | 切换当前客户端的分享总开关。开启仍需要网站端允许分享，并满足账户资格。 |
| 分享当前房间 / 停止分享房间 | 对当前在线房间执行操作，需要房主身份。当前私人房间的分享确认也通过这里完成。 |
| 使用云标签 | 允许此客户端使用缓存的云端玩家标签；与分享房间独立。 |
| 刷新云标签 | 从 Cloud 重新获取标签。先开启“使用云标签”。 |
| 使用系统代理 | 为模组发往 Cloud 的 HTTP 请求选择系统代理或直接连接，默认开启。 |

“使用系统代理”只控制模组的 Cloud 网络请求，不会为浏览器、Among Us 游戏服务器或其他应用设置代理。根据自己的网络环境选择；相关请求进行中时暂时不能更改。

## 分享总开关与当前房间

“开启分享”是客户端偏好，“分享当前房间”是对这一个房间的操作。网站上的游戏账号分享开关也需要开启。私人房间需要明确确认当前房间，不能因为以前分享过另一个私人房间就认为新房间已经展示。

停止当前房间分享会保留本地分享总开关；关闭分享总开关则同时请求撤下房间。状态显示“正在停止分享”或“等待停止或过期”时，不能认为已立即撤下。等到显示已撤下或未分享，再按需要核对网页列表。详见 [分享你的房间](/docs/cloud-sharing)。

## 按钮变灰或操作失败

面板会在账户、标签或房间请求进行中暂时禁用部分按钮。未完成游戏在线登录、尚未绑定、账户不具备资格、非房主、没有当前在线房间等，也会限制对应操作。

先读账户与房间状态，以及最近一次操作提示，再尝试刷新账户状态。网页 Cloud 登录、游戏账号登录、游戏账号绑定是不同步骤。具体排查见 [Cloud 常见问题](/docs/cloud-help)。

<!-- en -->
## Open the panel

Choose **TOHEE Cloud…** in the mod's client options, or use the Cloud entry on the main menu. The main-menu entry waits for the game's login flow to finish. Its presence does not establish that the account is linked; check the panel's account status.

The panel shows room-sharing status and room-code visibility guidance at the top, followed by account linking or eligibility status and the latest operation result. Close it with Back or `Esc`.

## Registration and policy

**The full Cloud policy is not included in the mod.** The room-code sharing notice in the panel does not replace the website agreement. When registering or signing in to Cloud, read the full [information collection policy](/policy) on the website and agree before continuing.

For first-time registration, use Link account in the mod to open the website, complete Cloud registration and policy consent, then finish linking the game account. Registration and sign-in redirect to the policy page if this browser has not recorded consent. The mod does not repeat that agreement step, and opening its Cloud panel does not accept the website policy for you.

## Buttons

| Button | What it does |
| --- | --- |
| Link account | Start linking the current game account and open the browser for verification. It may be unavailable when already linked or a request is running. |
| Refresh account status | Recheck the current account's linking status and sharing eligibility; useful after changing website settings. |
| Manage on website | Open Game accounts in the browser to manage tags, sharing preferences and unlinking. |
| Enable / Disable sharing | Toggle sharing for this client. Website permission and account eligibility are still required. |
| Share / Stop sharing current room | Act on the current online room as its host. This also provides confirmation for sharing a private room. |
| Use cloud tags | Allow this client to apply cached cloud player tags, independently of room sharing. |
| Refresh cloud tags | Fetch tags again from Cloud. Enable Use cloud tags first. |
| Use system proxy | Select the system proxy or a direct connection for mod-to-Cloud HTTP requests; enabled by default. |

Use system proxy affects only the mod's Cloud HTTP requests. It does not configure the browser, Among Us game-server connection or other applications. Choose according to your network. It cannot be changed while related requests are running.

## Sharing preference and the current room

Enable sharing is a client preference; Share current room acts on this particular room. Account sharing must also be enabled on the website. A private room needs explicit confirmation for that room; confirmation for an earlier private room does not publish every new private room.

Stopping the current room keeps the local sharing preference. Disabling the sharing preference also requests removal. Stopping or Waiting for stop or expiry does not mean removal is complete. Wait for a removed/not-shared result and check the website list as needed. See [Share your room](/docs/cloud-sharing).

## Disabled buttons or failed actions

Account, tag or room requests temporarily disable some buttons. Incomplete online game sign-in, an unlinked or ineligible account, non-host status or no current online room also restrict the relevant actions.

Read account status, room status and the latest operation message before refreshing account status. Cloud website sign-in, game sign-in and game-account linking are separate steps. See [Cloud troubleshooting](/docs/cloud-help).
