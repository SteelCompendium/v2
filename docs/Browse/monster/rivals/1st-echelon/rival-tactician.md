---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Humanoid
    - Rival
level: 2
might: 2
name: Rival Tactician
organization: Elite
presence: 0
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.rivals.1st-echelon.statblock/rival-tactician
size: 1M
speed: 5
stability: 2
stamina: "60"
type: statblock
---

# Rival Tactician

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"rival-tactician","name":"Rival Tactician","ancestry":"Humanoid, Rival","level":"2","role":"Elite Artillery","roleKey":"artillery","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Dual Targeting Shot ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage","low":"7 damage","mid":"11 damage"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"Two allies within distance can make a [free strike](../../../../feature/common/main-actions/free-strike/) against one of the targets."}]},{"kind":"ability","action":"main","name":"I'll Cover You! (3 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"16 damage; M \u003c 2 [weakened](../../../../condition/weakened/) (save ends)","low":"8 damage; M \u003c 0 [weakened](../../../../condition/weakened/) (save ends)","mid":"13 damage; M \u003c 1 [weakened](../../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"One ally [adjacent](../../../../rule/combat/adjacent/) to the target regains 5 [Stamina](../../../../rule/health/stamina/)."}]},{"kind":"ability","action":"triggered","name":"Overwatch","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance willingly moves."},{"label":"Effect","text":"At any point during the movement, the tactician makes a [free strike](../../../../feature/common/main-actions/free-strike/) against the target."}]},{"kind":"passive","action":"passive","name":"Rivalry","body":"At the start of an encounter, the tactician chooses one creature within their [line of effect](../../../../rule/combat/line-of-effect/). Both the tactician and the creature can add a d3 roll to power rolls they make against each other."}]}
</script></div>
