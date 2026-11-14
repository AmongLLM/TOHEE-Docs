---
{"id":"role-pelican","kind":"role","category":"neutral","title":{"en":"Pelican","zh-CN":"鹈鹕"},"summary":{"zh-CN":"使用击杀按钮活吞玩家并将其移出地图；会议或报告尸体会使被吞者立即死亡。","en":"Swallow players alive and remove them from the map; a meeting or body report immediately kills swallowed players."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pelican.cs"}
---
<!-- zh-CN -->
## 鹈鹕

鹈鹕使用击杀按钮活吞玩家。被吞者会被传送到地图外，无法与游戏互动。召开紧急会议或报告尸体时，所有被吞玩家都会立即死亡；若鹈鹕死亡或断线，被吞者会返回鹈鹕死亡的位置。吞人不是普通击杀，因此保镖、老兵等职业技能不会生效。

仅剩鹈鹕与船员阵营，且鹈鹕人数不少于船员时，鹈鹕获胜。

### 设置

- **吞食冷却**：再次吞食玩家前的等待时间。
- **可使用通风口**：设置鹈鹕能否使用通风口。
- **内鬼视野**：设置鹈鹕是否拥有内鬼视野。

<!-- en -->
## Pelican

The Pelican uses the kill button to swallow a player alive. The swallowed player is teleported off the map and cannot interact with the game. An emergency meeting or a body report immediately kills swallowed players. If the Pelican dies or disconnects, swallowed players return to the Pelican's death location. Swallowing is not a normal kill, so abilities such as Bodyguard and Veteran do not trigger.

The Pelican team wins after all Impostors are gone when all living counted neutrals share one count type and Pelicans are at least as numerous as Crewmates.

### Settings

- **Eat cooldown:** Time before the Pelican can swallow another player.
- **Can vent:** Whether the Pelican can use vents.
- **Impostor vision:** Whether the Pelican has Impostor vision.
