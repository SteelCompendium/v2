---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: 9 for four minions
free_strike: 4
immunities:
    - Damage 3
intuition: -1
keywords:
    - Giant
    - Hill Giant
level: 7
might: 4
movement: Climb
name: Hill Giant Mosstooth
organization: Minion
presence: -1
reason: -1
role: Brute
scc: mcdm.monsters.v1/monster.giants.statblock/hill-giant-mosstooth
size: "4"
speed: 6
stability: 5
stamina: "13"
type: statblock
with_captain: +3 damage bonus to strikes
---

# Hill Giant Mosstooth

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hill-giant-mosstooth","name":"Hill Giant Mosstooth","ancestry":"Giant, Hill Giant","level":"7","role":"Minion Brute","roleKey":"brute","ev":"9 for four minions","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"13"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Damage 3","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Swing","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object per minion","powerRoll":{"formula":"+ 4","tiers":{"high":"8 damage; [grabbed](../../../condition/grabbed/)","low":"4 damage","mid":"7 damage"}},"sections":[{"label":"Effect","text":"The mosstooth can use a creature or object they have [grabbed](../../../condition/grabbed/) as a weapon for this ability, dealing an extra 5 damage to that creature or object and the target. They then end the grab and leave the creature or object [prone](../../../condition/prone/) in an unoccupied space [adjacent](../../../rule/combat/adjacent/) to the target."}]},{"kind":"passive","action":"passive","name":"Distracted","body":"Whenever the mosstooth targets a creature or object with an ability, any enemy within distance of the ability can use a free triggered action to distract the mosstooth. The mosstooth targets that enemy instead."}]}
</script></div>
