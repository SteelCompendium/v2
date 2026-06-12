---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "14"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 5
might: 1
movement: Fly, hover
name: Hobgoblin Smokebinder
organization: Platoon
presence: 0
reason: 2
role: Ambusher
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-smokebinder
size: 1M
speed: 7
stability: 0
stamina: "70"
type: statblock
---

# Hobgoblin Smokebinder

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-smokebinder","name":"Hobgoblin Smokebinder","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"5","role":"Platoon Ambusher","roleKey":"ambusher","ev":"14","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Choking Bolt","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"17 fire damage; R \u003c 3 slowed (save ends)","low":"9 fire damage","mid":"14 fire damage"}},"sections":[{"label":"Effect","text":"If this ability gains an edge or has a double edge, the target can't communicate with anyone until the end of their next turn."}]},{"kind":"ability","action":"maneuver","name":"Smoke Bomb","cost":"3 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"5 damage","low":"11 damage; the target has a double bane on their next power roll","mid":"9 damage; the target takes a bane on their next power roll"}},"sections":[{"label":"Effect","text":"Each target makes a Might test."}]},{"kind":"passive","action":"passive","name":"Essence of Smoke","body":"The smokebinder can move through spaces as if they were size 1T and can occupy another creature or object's space. At the end of their turn, the smokebinder can attempt to hide if they haven't taken any damage since their last turn."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the smokebinder is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the smokebinder takes 3 fire damage."}]}
</script></div>
