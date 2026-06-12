---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "20"
free_strike: 5
intuition: 1
keywords:
    - Accursed
    - Humanoid
    - Minotaur
level: 3
might: 2
name: Minotaur
organization: Elite
presence: -1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.minotaurs.statblock/minotaur
size: "2"
speed: 8
stability: 2
stamina: "100"
type: statblock
---

# Minotaur

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"minotaur","name":"Minotaur","ancestry":"Accursed, Humanoid, Minotaur","level":"3","role":"Elite Harrier","roleKey":"harrier","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Flail and Blade","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; push 3","low":"7 damage; push 1","mid":"11 damage; push 2"}},"sections":[{"label":"Effect","text":"The minotaur shifts up to 3 squares."}]},{"kind":"ability","action":"main","name":"Primal Bay","cost":"3 Malice","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Until the end of their next turn, the minotaur has damage immunity 2 and deals an extra 5 damage with strikes. On their next turn, the minotaur can use one additional maneuver."}]},{"kind":"ability","action":"maneuver","name":"Goring Horns","cost":"5 Malice","usage":"Maneuver","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; I \u003c 2 dazed (save ends)","low":"5 damage; I \u003c 0 dazed (save ends)","mid":"8 damage; I \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the Charge main action, its potency increases by 1."}]},{"kind":"ability","action":"triggered","name":"Retaliatory Strike","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 8","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the minotaur."},{"label":"Effect","text":"The minotaur uses the Charge main action and either Flail and Blade or Goring Horns against the target."}]},{"kind":"passive","action":"passive","name":"Minotaur Sense","body":"The minotaur can't obtain less than a tier 2 outcome when making tests to navigate, search, or seek."}]}
</script></div>
