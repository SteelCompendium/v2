---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
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
name: Angulotl Hopper
organization: Retainer
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/angulotl-hopper
size: 1S
speed: 6
stability: 0
stamina: "21"
type: statblock
---

# Angulotl Hopper

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"angulotl-hopper","name":"Angulotl Hopper","ancestry":"Angulotl, Humanoid","level":"1","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 2","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Leapfrog","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"Before or after making this strike, the hopper jumps up to 2 squares, or up to 4 squares if they jump over their mentor's space."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy grabs the hopper or uses a melee ability against them, that enemy takes 3 poison damage."},{"kind":"ability","action":"main","name":"Leaping Attack","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 damage; M \u003cs, prone","low":"5 damage; M \u003cw, prone","mid":"9 damage; M \u003cv, prone"}},"sections":[{"label":"Effect","text":"The hopper can jump up to their speed in a straight line before the strike without provoking opportunity attacks. If they jump 2 or more squares this way, they gain 1 surge."}]},{"kind":"ability","action":"main","name":"Three-Poison Dart","cost":"Encounter","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 poison damage; M \u003c STRONG, dazed, slowed, and weakened (save ends)","low":"5 poison damage; M \u003c WEAK, weakened (save ends)","mid":"9 poison damage; M \u003c AVERAGE, slowed and weakened (save ends)"}}},{"kind":"ability","action":"triggered","name":"Trip of the Tongue","cost":"Encounter","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 5","target":"One creature or object","sections":[{"label":"Trigger","text":"A creature moves within distance."},{"label":"Effect","text":"If the target has M \u003c AVERAGE, their movement ends, they are knocked prone, and one ally within distance gains 2 surges."}]}]}
</script></div>
