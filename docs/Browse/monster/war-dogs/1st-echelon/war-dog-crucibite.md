---
agility: 2
ev: "3"
free_strike: 2
immunities:
    - Fire 2
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 1
might: 0
name: War Dog Crucibite
organization: Horde
presence: 0
reason: 0
role: Artillery
scc: mcdm.monsters.v1/monster.war-dogs.1st-echelon.statblock/war-dog-crucibite
size: 1M
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# War Dog Crucibite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-crucibite","name":"War Dog Crucibite","ancestry":"Humanoid, Soulless, War Dog","level":"1","role":"Horde Artillery","roleKey":"artillery","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Fire 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Flamebelcher","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"5 x 1 line within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"5 fire damage","low":"2 fire damage","mid":"4 fire damage"}},"sections":[{"label":"Effect","text":"The area is covered in sticky fire until the start of the crucibite's next turn. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage."}],"enhancements":[{"cost":"3 Malice","text":"The area becomes a 10 x 1 line, and if any ally of the crucibite is in the area when it is created, the ability deals an extra 2 damage to each target."}]},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 Stamina."}]},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the crucibite is reduced to 0 Stamina, their loyalty collar explodes, dealing 1d6 damage to each adjacent enemy and object."}]}
</script></div>
