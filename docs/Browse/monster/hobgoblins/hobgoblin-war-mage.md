---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "28"
free_strike: 6
immunities:
    - Fire 5
intuition: 2
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 5
might: 0
movement: Hover, teleport
name: Hobgoblin War Mage
organization: Elite
presence: 2
reason: 3
role: Controller
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-war-mage
size: 1M
speed: 5
stability: 0
stamina: "120"
type: statblock
---

# Hobgoblin War Mage

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-war-mage","name":"Hobgoblin War Mage","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"5","role":"Elite Controller","roleKey":"controller","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Hellfire","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"11 fire damage; M \u003c 3 [weakened](../../../condition/weakened/) (save ends)","low":"5 fire damage; M \u003c 1 [weakened](../../../condition/weakened/) (save ends)","mid":"9 fire damage; M \u003c 2 [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"Before using this ability, the war mage can [teleport](../../../movement/teleport/) a creature within 10 squares of them up to 2 squares."}]},{"kind":"ability","action":"main","name":"Enchantments of War","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Two allies","sections":[{"label":"Effect","text":"Each target gains 10 temporary [Stamina](../../../rule/health/stamina/) and has a double edge on their next power roll. The war mage can spend any amount of their current [Stamina](../../../rule/health/stamina/) to increase the temporary [Stamina](../../../rule/health/stamina/) each target gains by an equivalent amount."}]},{"kind":"ability","action":"maneuver","name":"Unhallowed Ground","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"5 cube within 10","target":"Special","sections":[{"label":"Effect","text":"The war mage consecrates the area and causes it to smolder until the end of the encounter. The area is [difficult terrain](../../../movement/difficult-terrain/) and an enemy in the area has fire weakness 10."}]},{"kind":"ability","action":"triggered","name":"Magic Siphon","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance uses a magic ability."},{"label":"Effect","text":"Any damage dealt or [Stamina](../../../rule/health/stamina/) regained from the creature's ability is halved. The war mage regains [Stamina](../../../rule/health/stamina/) equal to the remaining damage dealt or [Stamina](../../../rule/health/stamina/) regained."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the war mage is reduced to 0 [Stamina](../../../rule/health/stamina/), they spray burning blood. Each creature [adjacent](../../../rule/combat/adjacent/) to the war mage takes 3 fire damage."},{"kind":"passive","action":"passive","name":"Despair, You Who Face Death","body":"Any enemy within 2 squares of the war mage has a −2 penalty to saving throws."}]}
</script></div>
