---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: 6 for four minions
free_strike: 2
immunities:
    - Corruption 4
    - poison 4
intuition: 0
keywords:
    - Undead
level: 4
might: 3
movement: Climb
name: Ghoul Craver
organization: Minion
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/ghoul-craver
size: 1M
speed: 7
stability: 0
stamina: "8"
type: statblock
with_captain: +2 damage bonus to strikes
---

# Ghoul Craver

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ghoul-craver","name":"Ghoul Craver","ancestry":"Undead","level":"4","role":"Minion Harrier","roleKey":"harrier","ev":"6 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"8"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Taste","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"6 damage","low":"2 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"This ability has a double edge against a [bleeding](../../../../condition/bleeding/) target."}]},{"kind":"passive","action":"passive","name":"Ever So Hungry","body":"Any enemy [adjacent](../../../../rule/combat/adjacent/) to three or more ghoul cravers can't [shift](../../../../movement/shifting/)."},{"kind":"passive","action":"passive","name":"Hunger","body":"When the ghoul craver uses the Charge main action, they gain a +2 bonus to speed until the end of their turn."}]}
</script></div>
