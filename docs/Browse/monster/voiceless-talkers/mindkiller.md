---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Psychic 6
intuition: 2
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: -1
movement: Fly, hover
name: Mindkiller
organization: Elite
presence: 0
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.voiceless-talkers.statblock/mindkiller
size: 1S
speed: 6
stability: 2
stamina: "140"
type: statblock
---

# Mindkiller

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"mindkiller","name":"Mindkiller","ancestry":"Horror, Voiceless Talker","level":"6","role":"Elite Hexer","roleKey":"hexer","ev":"32","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Psychic 6","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Brain Latch","body":"The mindkiller can [grab](../../../condition/grabbed/) creatures who are size 4 or smaller, using their Reason score in place of Might. A creature [grabbed](../../../condition/grabbed/) by the mindkiller takes a bane on ability rolls made to escape the grab."},{"kind":"ability","action":"main","name":"Killer Claws","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"21 damage; A \u003c 3 [grabbed](../../../condition/grabbed/)","low":"11 damage","mid":"17 damage; A \u003c 2 [grabbed](../../../condition/grabbed/)"}}},{"kind":"ability","action":"main","name":"Concealing Strike","cost":"2 Malice","usage":"Main action","keywords":["Psionic","Ranged","Strike"],"distance":"Ranged 5","target":"Two creatures","powerRoll":{"formula":"+ 3","tiers":{"high":"18 damage; R \u003c 3 the mindkiller is invisible to the target (save ends)","low":"10 damage; R \u003c 1 the mindkiller is invisible to the target (save ends)","mid":"15 damage; R \u003c 2 the mindkiller is invisible to the target (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Mindwipe","usage":"Maneuver","keywords":["Melee","Psionic","Strike"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Effect","text":"The target must be [grabbed](../../../condition/grabbed/) by the mindkiller. If the target has R \u003c 2, they take a −1 penalty to their Reason, Intuition, or Presence score and the mindkiller has a +1 bonus to the same score, all until the end of the encounter."}]},{"kind":"ability","action":"triggered","name":"Meat Shield","usage":"[Triggered Action](../../../rule/combat/triggered-action/)","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The mindkiller takes damage."},{"label":"Effect","text":"The mindkiller halves the damage. If the mindkiller has a creature [grabbed](../../../condition/grabbed/), that creature takes the other half of the damage."}],"enhancements":[{"cost":"3 Malice","text":"A [grabbed](../../../condition/grabbed/) creature takes the damage instead of the mindkiller."}]},{"kind":"passive","action":"passive","name":"Psionic Conductor","body":"Whenever a non-[minion](../../../rule/organization/minion/) voiceless talker within 5 squares of the mindkiller uses a psionic ability, they can do so as if they were in the mindkiller's space."},{"kind":"passive","action":"passive","name":"Nimble","body":"The mindkiller can move through enemies' spaces at their usual speed."}]}
</script></div>
