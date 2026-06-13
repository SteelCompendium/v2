---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "28"
free_strike: 6
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 5
might: 0
name: Rival Talent
organization: Elite
presence: 1
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.rivals.2nd-echelon.statblock/rival-talent
size: 1M
speed: 5
stability: 2
stamina: "120"
type: statblock
---

# Rival Talent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-talent","name":"Rival Talent","ancestry":"Humanoid, Rival","level":"5","role":"Elite Hexer","roleKey":"hexer","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Overwhelming Rend ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Psionic","Ranged","Strike","Telekinesis"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 psychic damage; [push](../../../../movement/forced-movement/) 4; M \u003c 3 [prone](../../../../condition/prone/)","low":"9 psychic damage; [push](../../../../movement/forced-movement/) 2; M \u003c 1 [prone](../../../../condition/prone/)","mid":"14 psychic damage; [push](../../../../movement/forced-movement/) 3; M \u003c 2 [prone](../../../../condition/prone/)"}}},{"kind":"ability","action":"maneuver","name":"Disarrange Thoughts (2 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Psionic","Ranged","Telepathy"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"6 psychic damage; R \u003c 3 [dazed](../../../../condition/dazed/) and [slowed](../../../../condition/slowed/) (save ends)","low":"6 psychic damage; R \u003c 1 [dazed](../../../../condition/dazed/) (save ends)","mid":"6 psychic damage; R \u003c 2 [dazed](../../../../condition/dazed/) (save ends)"}}},{"kind":"ability","action":"triggered","name":"Precognitive Shift (1 [Malice](../../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature deals damage to the talent."},{"label":"Effect","text":"The talent halves the damage and [shifts](../../../../movement/shifting/) up to 2 squares."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the talent chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the talent and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
