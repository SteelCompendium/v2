---
printing: "1.01"
printing_book: "Bestiary"
agility: 0
ev: "20"
free_strike: 5
immunities:
    - Cold 5
intuition: -1
keywords:
    - Elemental
level: 3
might: 2
movement: Swim
name: Essence of Tides
organization: Elite
presence: 2
reason: 1
role: Controller
scc: mcdm.monsters.v1/monster.elementals.statblock/essence-of-tides
size: 1M
speed: 7
stability: 1
stamina: "80"
type: statblock
---

# Essence of Tides

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"essence-of-tides","name":"Essence of Tides","ancestry":"Elemental","level":"3","role":"Elite Controller","roleKey":"controller","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Cold 5","weakness":"—","movement":"Swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Water Wing","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; slide 3","low":"7 damage; slide 1","mid":"11 damage; slide 2"}},"sections":[{"label":"Effect","text":"If a target has P \u003c 2, their stability is reduced to 0 and they move 2 additional squares whenever they are force moved (save ends)."}]},{"kind":"ability","action":"maneuver","name":"Convocation of Waves","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Self or one elemental","sections":[{"label":"Effect","text":"Until the start of the essence's next turn, the target has cold immunity 5."}],"enhancements":[{"cost":"3 Malice","text":"Until the end of the encounter, the ground within 1 square of the target is a pool of water that is difficult terrain. This water extends out behind the target as they move, creating a stream that lasts until the end of the encounter. Any enemy who ends their turn in the stream and has M \u003c 2 is slowed (save ends)."}]},{"kind":"ability","action":"triggered","name":"Sea-Salted Wounds","cost":"1 Malice","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"One enemy","sections":[{"label":"Trigger","text":"An ally deals rolled damage to the target."},{"label":"Effect","text":"The essence makes a free strike against the target."}]},{"kind":"passive","action":"passive","name":"Fickle and Free","body":"The essence can't be restrained, slowed, or knocked prone, and they ignore difficult terrain."},{"kind":"passive","action":"passive","name":"Water Glide","body":"Whenever the essence starts their turn in a space containing water, they can fly until the end of their turn. While flying, the essence doesn't provoke opportunity attacks."}]}
</script></div>
