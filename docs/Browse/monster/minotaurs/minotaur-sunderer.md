---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "20"
free_strike: 6
intuition: 2
keywords:
    - Accursed
    - Humanoid
    - Minotaur
level: 3
might: 2
name: Minotaur Sunderer
organization: Elite
presence: -1
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.minotaurs.statblock/minotaur-sunderer
size: "2"
speed: 6
stability: 2
stamina: "120"
type: statblock
---

# Minotaur Sunderer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"minotaur-sunderer","name":"Minotaur Sunderer","ancestry":"Accursed, Humanoid, Minotaur","level":"3","role":"Elite Brute","roleKey":"brute","ev":"20","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Spiked Maul ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"15 damage; [pull](../../../movement/forced-movement/) 3","low":"8 damage; [pull](../../../movement/forced-movement/) 1","mid":"12 damage; [pull](../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"A target [pulled](../../../movement/forced-movement/) [adjacent](../../../rule/combat/adjacent/) to the sunderer is automatically [grabbed](../../../condition/grabbed/)."}]},{"kind":"ability","action":"main","name":"Fearsome Bay (5 [Malice](../../rule/monster/malice.md))","usage":"Main action","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"I \u003c 2 [frightened](../../../condition/frightened/) (save ends)","low":"I \u003c 0 [frightened](../../../condition/frightened/) (save ends)","mid":"I \u003c 1 [frightened](../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"Until the end of their next turn, the minotaur has damage immunity 2 and deals an extra 5 damage with strikes."}]},{"kind":"ability","action":"maneuver","name":"Disemboweling Horns (3 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; M \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","low":"5 damage; M \u003c 0 [bleeding](../../../condition/bleeding/) (save ends)","mid":"8 damage; M \u003c 1 [bleeding](../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Special","text":"The target must be [grabbed](../../../condition/grabbed/) by the sunderer."},{"label":"Effect","text":"While [bleeding](../../../condition/bleeding/) this way, the target takes 1d6 damage at the start of each of their turns."}]},{"kind":"ability","action":"triggered","name":"Retaliatory Strike","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 6","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the sunderer."},{"label":"Effect","text":"The sunderer uses the Charge main action and Spiked Maul against the target."}]},{"kind":"passive","action":"passive","name":"Minotaur Sense","body":"The sunderer can't obtain less than a tier 2 outcome when making tests to navigate, search, or seek."}]}
</script></div>
