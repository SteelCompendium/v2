---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: 3 for 4 minions
free_strike: 2
immunities:
    - Poison 2
intuition: 1
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 0
movement: Climb, swim
name: Angulotl Cleaver
organization: Minion
presence: 0
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-cleaver
size: 1S
speed: 6
stability: 0
stamina: "4"
type: statblock
with_captain: +1 damage bonus to strikes
---

# Angulotl Cleaver

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-cleaver","name":"Angulotl Cleaver","ancestry":"Angulotl, Humanoid","level":"1","role":"Minion Ambusher","roleKey":"ambusher","ev":"3 for 4 minions","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"4"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Hop and Chop","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"2 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"The cleaver jumps up to 4 squares before or after making this strike."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy grabs the cleaver or uses a melee ability against them, that enemy takes 1 poison damage."}]}
</script></div>
