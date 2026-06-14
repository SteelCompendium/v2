---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "32"
free_strike: 7
immunities:
    - Poison 6
intuition: 3
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: -1
movement: Fly
name: Aeolyxria the Uncanny
organization: Elite
presence: 1
reason: 2
role: Controller
scc: mcdm.monsters.v1/monster.draconians.statblock/aeolyxria-the-uncanny
size: 1M
speed: 5
stability: 2
stamina: "140"
type: statblock
---

# Aeolyxria the Uncanny

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"aeolyxria-the-uncanny","name":"Aeolyxria the Uncanny","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Elite Controller","roleKey":"controller","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Poison 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Spittlesplash","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two enemies","powerRoll":{"formula":"+ 3","tiers":{"high":"18 poison damage; M \u003c 3 [slowed](../../../condition/slowed/) (save ends)","low":"10 poison damage; M \u003c 1 [slowed](../../../condition/slowed/) (save ends)","mid":"15 poison damage; M \u003c 2 [slowed](../../../condition/slowed/) (save ends)"}}},{"kind":"ability","action":"main","name":"Experimental Treasure","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"12 lightning damage; A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","low":"The targets regains 10 [Stamina](../../../rule/health/stamina/).","mid":"12 corruption damage; A \u003c 2 [weakened](../../../condition/weakened/) (save ends)"}},"sections":[{"label":"Effect","text":"The first time in an encounter that Aeolyxria makes a power roll for this ability, she can subsequently use the outcome of that roll instead of rolling whenever she uses this ability until the end of the encounter."}],"enhancements":[{"cost":"2+ [Malice](../../../rule/monster/malice/)","text":"The ability targets one additional target for each 2 [Malice](../../../rule/monster/malice/) spent."}]},{"kind":"ability","action":"maneuver","name":"Elevate","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Ranged"],"distance":"1 cube within 5","target":"Special","sections":[{"label":"Effect","text":"The ground in the area rises 5 squares, creating a pillar of dirt. Any creature in the area moves with the ground to its new elevation."}],"enhancements":[{"cost":"1+ [Malice](../../../rule/monster/malice/)","text":"Aeolyxria creates an additional pillar for each [Malice](../../../rule/monster/malice/) spent."}]},{"kind":"ability","action":"triggered","name":"Blood For Blood","usage":"Triggered action","keywords":["Ranged","Weapon"],"distance":"Ranged 5","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"15 poison damage; [bleeding](../../../condition/bleeding/) (save ends)","low":"7 poison damage; A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","mid":"12 poison damage; A \u003c 3 [bleeding](../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Trigger","text":"An ally is made [bleeding](../../../condition/bleeding/) by the target."}]},{"kind":"passive","action":"passive","name":"That's Our Opening!","body":"The Director gains 1 [Malice](../../../rule/monster/malice/) whenever Aeolyxria imposes a condition on an enemy."}]}
</script></div>
