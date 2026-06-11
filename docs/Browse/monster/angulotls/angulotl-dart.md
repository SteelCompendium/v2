---
agility: 2
ev: 3 for 4 minions
free_strike: 2
immunities:
    - Poison 2
intuition: 0
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 0
movement: Climb, swim
name: Angulotl Dart
organization: Minion
presence: 0
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-dart
size: 1S
speed: 5
stability: 0
stamina: "3"
type: statblock
with_captain: +4 bonus to ranged distance
---

# Angulotl Dart

---

<script type="application/json" class="sc-statblock-data">
{"id":"angulotl-dart","name":"Angulotl Dart","ancestry":"Angulotl, Humanoid","level":"1","role":"Minion Artillery","roleKey":"artillery","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"3"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Poison Dart","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 8","target":"One creature per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 poison damage","low":"2 poison damage","mid":"4 poison damage"}},"sections":[{"label":"Effect","text":"The dart gains an edge on this ability against any target who has less than full Stamina."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy grabs the dart or uses a melee ability against them, that enemy takes 1 poison damage."}]}
</script>
