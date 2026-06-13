---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "48"
free_strike: 10
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 10
might: 0
name: Rival Talent
organization: Elite
presence: 1
reason: 5
role: Hexer
scc: mcdm.monsters.v1/monster.rivals.4th-echelon.statblock/rival-talent
size: 1M
speed: 5
stability: 2
stamina: "220"
type: statblock
---

# Rival Talent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-talent","name":"Rival Talent","ancestry":"Humanoid, Rival","level":"10","role":"Elite Hexer","roleKey":"hexer","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"220"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Override ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Psionic","Ranged","Strike","Telekinesis"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"24 psychic damage","low":"15 psychic damage","mid":"20 psychic damage"}},"enhancements":[{"cost":"4 [Malice](../../../rule/monster/malice.md)","text":"Each target moves up to their speed and can make a [free strike](../../../../feature/common/main-actions/free-strike/) against one enemy of the talent's choice. The target's movement can provoke opportunity attacks, but they can't otherwise be moved in a way that would harm them."}]},{"kind":"ability","action":"maneuver","name":"Steal Time (3 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Chronopathy","Psionic","Ranged"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 5","tiers":{"high":"R \u003c 5 [restrained](../../../../condition/restrained/) (save ends)","low":"R \u003c 3 [slowed](../../../../condition/slowed/) (save ends)","mid":"R \u003c 4 [restrained](../../../../condition/restrained/) (save ends)"}},"sections":[{"label":"Effect","text":"One ally within distance can use an additional main action on their next turn."}]},{"kind":"ability","action":"triggered","name":"Psionic Retribution (2 [Malice](../../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Psionic"],"distance":"Self; see below","target":"Self","sections":[{"label":"Trigger","text":"A creature deals damage to the talent."},{"label":"Effect","text":"The talent halves the damage and [shifts](../../../../movement/shifting/) up to 2 squares. The triggering creature takes psychic damage equal to half the damage dealt and is [pushed](../../../../movement/forced-movement/) up to 5 squares."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the talent chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the talent and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
