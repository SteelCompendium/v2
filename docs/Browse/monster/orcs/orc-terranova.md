---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "8"
free_strike: 4
intuition: 1
keywords:
    - Humanoid
    - Orc
level: 2
might: 1
movement: Burrow
name: Orc Terranova
organization: Platoon
presence: 2
reason: 0
role: Controller
scc: mcdm.monsters.v1/monster.orcs.statblock/orc-terranova
size: 1M
speed: 6
stability: 2
stamina: "30"
type: statblock
---

# Orc Terranova

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-terranova","name":"Orc Terranova","ancestry":"Humanoid, Orc","level":"2","role":"Platoon Controller","roleKey":"controller","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Earth Pillar","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Three creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; A \u003c 2 prone and can't stand (save ends)","low":"6 damage; A \u003c 0 prone and can't stand (save ends)","mid":"9 damage; A \u003c 1 prone and can't stand (save ends)"}},"sections":[{"label":"Effect","text":"Each target must be on the ground, and the ground in each target's space rises 1 square."}]},{"kind":"ability","action":"main","name":"Sinkhole","cost":"3 Malice","usage":"Main action","keywords":["Area","Weapon"],"distance":"3 burst","target":"Each enemy and object in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"10 damage; M \u003c 2 restrained (save ends)","low":"4 damage; M \u003c 0 restrained (save ends)","mid":"7 damage; M \u003c 1 restrained (save ends)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain."}]},{"kind":"passive","action":"passive","name":"Seismic Step","body":"The terranova ignores difficult terrain. Additionally, they don't need line of effect to use abilities against creatures touching the ground."},{"kind":"passive","action":"passive","name":"Relentless","body":"If the terranova is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the terranova is reduced to 1 Stamina instead."}]}
</script></div>
