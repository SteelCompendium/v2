---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Corruption 6
intuition: 2
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: -1
movement: Fly
name: Myxovidan the Sintaker
organization: Elite
presence: 1
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.draconians.statblock/myxovidan-the-sintaker
size: 1M
speed: 5
stability: 2
stamina: "140"
type: statblock
---

# Myxovidan the Sintaker

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"myxovidan-the-sintaker","name":"Myxovidan the Sintaker","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Elite Hexer","roleKey":"hexer","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Corruption 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Breaking Palm","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two enemies","powerRoll":{"formula":"+ 3","tiers":{"high":"18 corruption damage; M \u003c 3 [weakened](../../../condition/weakened/) (save ends)","low":"10 damage; M \u003c 1 [weakened](../../../condition/weakened/) (save ends)","mid":"15 damage; M \u003c 2 [weakened](../../../condition/weakened/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"Myxovidan regains [Stamina](../../../rule/health/stamina/) equal to half the damage dealt."}]},{"kind":"ability","action":"main","name":"Expunging Exhalation","usage":"Main action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"15 corruption damage; M \u003c 3 the target has corruption weakness 3 (save ends)","low":"7 corruption damage; M \u003c 1 the target has corruption weakness 3 (save ends)","mid":"12 corruption damage; M \u003c 2 the target has corruption weakness 3 (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Step and Swap","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 3","target":"One ally","sections":[{"label":"Effect","text":"Myxovidan and the target [shift](../../../movement/shifting/) to swap places."}]},{"kind":"ability","action":"triggered","name":"Anyone Can Do That","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"An [adjacent](../../../rule/combat/adjacent/) creature damages Myxovidan with a melee ability."},{"label":"Effect","text":"Myxovidan recreates the ability to use it against the triggering creature. If the ability has a power roll, Myxovidan uses his highest characteristic score for the roll. If Myxovidan gets a higher tier outcome than the triggering creature, the Director gains 2 [Malice](../../../rule/monster/malice/)."}]},{"kind":"passive","action":"passive","name":"Stench of Death","body":"Whenever an enemy regains [Stamina](../../../rule/health/stamina/) while within 5 squares of Myxovidan, they regain 3 less [Stamina](../../../rule/health/stamina/)."}]}
</script></div>
