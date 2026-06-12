---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "12"
free_strike: 4
immunities:
    - Acid 3
intuition: 0
keywords:
    - Kobold
    - Ooze
    - Soulless
level: 1
might: 2
name: Trained Gummy Brick
organization: Elite
presence: -2
reason: -3
role: Hexer
scc: mcdm.monsters.v1/monster.kobolds.statblock/trained-gummy-brick
size: "2"
speed: 5
stability: 2
stamina: "40"
type: statblock
---

# Trained Gummy Brick

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"trained-gummy-brick","name":"Trained Gummy Brick","ancestry":"Kobold, Ooze, Soulless","level":"1","role":"Elite Hexer","roleKey":"hexer","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Acid 3","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Engulf","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 acid damage; A \u003c 2 restrained (save ends)","low":"7 acid damage; A \u003c 0 dazed (save ends)","mid":"10 acid damage; A \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"A size 2 or smaller creature restrained this way is pulled into the brick's space, moves with the brick, and takes 4 acid damage at the start of each of their turns. An engulfed creature who is no longer restrained moves to the nearest unoccupied space adjacent to the brick. The brick can have as many creatures or objects engulfed as will fit within their space."}],"enhancements":[{"cost":"2 Malice","text":"This ability targets one additional target."}]},{"kind":"ability","action":"triggered","name":"You Didn't Pay Attention!","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"One creature or object","sections":[{"label":"Trigger","text":"A creature moves or is force moved adjacent to the brick."},{"label":"Effect","text":"The brick uses Engulf against the triggering creature and has a double edge."}]},{"kind":"passive","action":"passive","name":"Translucent Brick","body":"The brick completely occupies their space, blocking line of effect for enemies. The brick is hidden until they act."}]}
</script></div>
