---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "10"
free_strike: 3
intuition: 4
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 8
might: 2
movement: Burrow
name: War Dog Geomancer
organization: Horde
presence: 2
reason: 4
role: Controller
scc: mcdm.monsters.v1/monster.war-dogs.3rd-echelon.statblock/war-dog-geomancer
size: 1M
speed: 5
stability: 3
stamina: "45"
type: statblock
---

# War Dog Geomancer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-geomancer","name":"War Dog Geomancer","ancestry":"Humanoid, Soulless, War Dog","level":"8","role":"Horde Controller","roleKey":"controller","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"45"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Earthwave","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"7 x 2 line within 10","target":"Each creature in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"8 damage; M \u003c 4 push, prone","low":"3 damage; M \u003c 2 push (see effect)","mid":"6 damage; M \u003c 3 push"}},"sections":[{"label":"Effect","text":"This ability ignores stability. The geomancer declares a direction for the area, and any creature pushed by this ability is pushed to the last space in the area in the chosen direction."}],"enhancements":[{"cost":"2 Malice","text":"The ground beneath the area becomes a 2-square-deep trench after the power roll is resolved."}]},{"kind":"ability","action":"maneuver","name":"Siegeworks","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"5 wall within 10","target":"Special","sections":[{"label":"Effect","text":"The geomancer raises a wall of stone set with viewing gaps. Creatures have line of effect through the wall while adjacent to it."}]},{"kind":"passive","action":"passive","name":"Dust Cloud","body":"The geomancer is always surrounded by a 2 aura of swirling dust and earthen debris. The geomancer and any ally in the area have concealment."},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the geomancer is reduced to 0 Stamina, their loyalty collar explodes, dealing 3d6 damage to each adjacent enemy and object."}]}
</script></div>
