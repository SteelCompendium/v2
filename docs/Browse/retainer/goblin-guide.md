---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 2
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: -1
movement: Climb
name: Goblin Guide
organization: Retainer
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/goblin-guide
size: 1S
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# Goblin Guide

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"goblin-guide","name":"Goblin Guide","ancestry":"Goblin, Humanoid","level":"1","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Stabbity Stab","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"The target can't make opportunity attacks until the end of the guide's turn."}]},{"kind":"passive","action":"passive","name":"Crafty","body":"The guide doesn't provoke opportunity attacks by moving."},{"kind":"ability","action":"main","name":"Weaving Knives","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 damage","low":"5 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"The guide shifts up to their speed before and after the strike."}]},{"kind":"ability","action":"main","name":"Sneak and Stab","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage; the guide and their mentor can each move up to their speed, then attempt to hide","low":"8 damage","mid":"12 damage; the guide and their mentor can each move up to their speed"}},"sections":[{"label":"Effect","text":"If the guide is hidden from the target, this ability has a double edge."}]},{"kind":"ability","action":"main","name":"Poison Blade","cost":"Encounter","usage":"Main action","keywords":["-"],"distance":"Special","target":"Special","sections":[{"label":"Effect","text":"The guide applies poison to their weapon. The next time the guide obtains a tier 2 or tier 3 outcome on a weapon strike, the strike deals an extra 10 poison damage, and if the target has M \u003c AVERAGE, they are weakened (save ends). If the guide is adjacent to their mentor when they use Poison Blade, they apply poison to the mentor's weapon in the same way."}]}]}
</script></div>
