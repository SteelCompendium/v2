---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "5"
free_strike: 2
immunities:
    - Poison 3
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 3
might: 0
name: War Dog Pestilite
organization: Horde
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-pestilite
size: 1M
speed: 5
stability: 0
stamina: "20"
type: statblock
---

# War Dog Pestilite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-pestilite","name":"War Dog Pestilite","ancestry":"Humanoid, Soulless, War Dog","level":"3","role":"Horde Controller","roleKey":"controller","ev":"5","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Poison 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Plaguecaster","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each creature in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"5 poison damage; I \u003c 2 frightened (save ends)","low":"2 poison damage; I \u003c 0 frightened (save ends)","mid":"4 poison damage; I \u003c 1 frightened (save ends)"}},"sections":[{"label":"Effect","text":"The area is filled with a cloud of pestilence that lasts until the start of the pestilite's next turn. Any creature who enters the area for the first time in a round or starts their turn there takes 2 poison damage."}]},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 Stamina."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the pestilite is reduced to 0 Stamina, their loyalty collar explodes, dealing 1d6 damage to each adjacent enemy and object."}]}
</script></div>
