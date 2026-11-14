---
{"id":"role-arsonist","kind":"role","category":"neutral","title":{"en":"Arsonist","zh-CN":"纵火犯"},"summary":{"zh-CN":"跟随玩家为其涂油；除自己外的所有存活玩家都涂油后可点火获胜，开启随时点火后也可提前点燃已涂油玩家。","en":"Douse players by following them; ignite after dousing all other living players, or ignite doused players earlier when anytime ignition is enabled."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Arsonist.cs"}
---
<!-- zh-CN -->
## 纵火犯

纵火犯使用击杀按钮开始为一名玩家涂油；需要持续待在目标附近直到计时结束，离开范围会取消当前涂油。名字旁显示「△」表示正在涂油，「▲」表示已完成涂油。

所有存活玩家都被涂油后，纵火犯可以进入通风口点燃他们并单独获胜。开启“可随时点火”后，达到最低涂油人数即可点燃所有已涂油的存活玩家；若仍有其他存活玩家，点火不会获胜。

## 设置

- **人数上限**：一局中可出现的纵火犯数量上限。
- **涂油持续时间**：跟随玩家多久才能完成涂油。
- **涂油冷却**：再次涂油前的等待时间。
- **可随时点火**：开启后，达到最低涂油人数即可点燃所有已涂油的存活玩家；最多人数选项限制可涂油人数。关闭后，需涂油所有其他存活玩家才能点火获胜。

<!-- en -->
## Arsonist

The Arsonist uses the kill button to start dousing a player and must stay near them until the timer finishes; moving out of range cancels the douse. A triangle (△) beside a name means they are being doused; a filled triangle (▲) means they are fully doused.

After dousing all other living players, the Arsonist can vent to ignite them and win alone. When “Can ignite anytime” is enabled, reaching the minimum doused count lets the Arsonist ignite all living doused players; if other players remain alive, that ignition does not win.

## Settings

- **Maximum number:** Maximum number of Arsonists in a match.
- **Douse duration:** Time the Arsonist must stay near a player to douse them.
- **Cooldown:** Time before dousing another player.
- **Can ignite anytime:** When enabled, the Arsonist can ignite all living doused players after reaching the minimum; the maximum limits how many players can be doused. When disabled, all other living players must be doused before the Arsonist can ignite and win.
