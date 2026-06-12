---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: 3 for 4 minions
free_strike: 1
immunities:
    - Poison 2
intuition: -2
keywords:
    - Angulotl
level: 1
might: 0
movement: Climb, swim
name: Angulotl Pollywog
organization: Minion
presence: 0
reason: -2
role: Harrier
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-pollywog
size: 1S
speed: 6
stability: 0
stamina: "4"
type: statblock
with_captain: +2 bonus to speed
---

# Angulotl Pollywog

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-pollywog","name":"Angulotl Pollywog","ancestry":"Angulotl","level":"1","role":"Minion Harrier","roleKey":"harrier","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"4"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"-2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Nip","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"3 poison damage; the pollywog [shifts](../../../movement/shifting/) up to 3 squares","low":"1 poison damage","mid":"2 poison damage; the pollywog can [shift](../../../movement/shifting/) 1 square"}}},{"kind":"passive","action":"passive","name":"Quick Snack","body":"Any angulotl who can target the pollywog with a melee [free strike](../../../feature/common/main-actions/free-strike/) can eat them as a maneuver. The angulotl regains 4 [Stamina](../../../rule/health/stamina/) and is wet until the end of their next turn."}]}
</script></div>
