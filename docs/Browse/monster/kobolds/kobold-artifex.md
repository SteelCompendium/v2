---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 0
name: Kobold Artifex
organization: Horde
presence: 0
reason: 1
role: Controller
scc: mcdm.monsters.v1/monster.kobolds.statblock/kobold-artifex
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Kobold Artifex

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-artifex","name":"Kobold Artifex","ancestry":"Humanoid, Kobold","level":"1","role":"Horde Controller","roleKey":"controller","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Chain Hook","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; pull 3","low":"3 damage; pull 1","mid":"4 damage; pull 2"}},"sections":[{"label":"Effect","text":"If this [forced movement](../../../movement/forced-movement/) triggers a trap that uses a power roll, that roll has a double edge."}]},{"kind":"ability","action":"maneuver","name":"Activate Trap","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"One trap or other terrain object","sections":[{"label":"Effect","text":"The trap or terrain object instantly triggers."}],"enhancements":[{"cost":"3 [Malice](../../rule/monster/malice.md)","text":"The artifex places a new trap in the encounter and can instantly trigger it. The artifex prefers working with angry beehives, flammable oil, snare traps, and spike traps (see Dynamic Terrain)."}]},{"kind":"passive","action":"passive","name":"Shield? Shield!","body":"While [adjacent](../../../rule/combat/adjacent/) to an ally who also has this trait, the artifex has stability 1, has cover, and grants cover to allies."}]}
</script></div>
