---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 2
immunities:
    - Poison 2
intuition: 0
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 1
movement: Climb, swim
name: Angulotl Slink
organization: Horde
presence: 0
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-slink
size: 1S
speed: 5
stability: 0
stamina: "15"
type: statblock
---

# Angulotl Slink

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-slink","name":"Angulotl Slink","ancestry":"Angulotl, Humanoid","level":"1","role":"Horde Ambusher","roleKey":"ambusher","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Tonguelash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 6","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage; [pull](../../../movement/forced-movement/) 6","low":"4 damage; [pull](../../../movement/forced-movement/) 2","mid":"6 damage; [pull](../../../movement/forced-movement/) 4"}},"sections":[{"label":"Effect","text":"The target is wet (save ends). Any ally targeted by this ability ignores the damage, is wet until the end of the encounter, and is [pulled](../../../movement/forced-movement/) up to 6 squares, ignoring stability."}]},{"kind":"ability","action":"maneuver","name":"Hop To It","cost":"2 Malice","usage":"Free maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The slink jumps up to 3 squares. If they have [cover](../../../rule/combat/cover/) or [concealment](../../../rule/combat/concealment/) when they land, they can attempt to hide."}]},{"kind":"passive","action":"passive","name":"Adhesive","body":"The slink excretes a sticky residue into their square at the end of each of their turns. Any non-angulotl who enters or leaves the square is stuck, and must use a maneuver to break free or be [restrained](../../../condition/restrained/) until the end of their turn. Objects are likewise affected, and a creature must use a maneuver to remove an object from the square."},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy [grabs](../../../feature/common/maneuvers/grab/) the slink or uses a melee ability against them, that enemy takes 2 poison damage."}]}
</script></div>
