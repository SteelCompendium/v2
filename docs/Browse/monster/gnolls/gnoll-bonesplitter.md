---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "4"
free_strike: 3
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 2
name: Gnoll Bonesplitter
organization: Horde
presence: 1
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-bonesplitter
size: 1L
speed: 5
stability: 1
stamina: "25"
type: statblock
---

# Gnoll Bonesplitter

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-bonesplitter","name":"Gnoll Bonesplitter","ancestry":"Abyssal, Gnoll","level":"2","role":"Horde Brute","roleKey":"brute","ev":"4","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"25"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Three-Tail Flail","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; [grabbed](../../../condition/grabbed/); M \u003c 2 the target takes a bane on the Escape Grab maneuver","low":"5 damage; [push](../../../movement/forced-movement/) 2","mid":"6 damage; [push](../../../movement/forced-movement/) 2"}},"sections":[{"label":"Effect","text":"While the bonesplitter has a target [grabbed](../../../condition/grabbed/), they can't use Three-Tail Flail against another target."}]},{"kind":"ability","action":"maneuver","name":"Bonesplitter's Cackletongue","cost":"4 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area"],"distance":"2 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Up to three targets can make a [free strike](../../../feature/common/main-actions/free-strike/). If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-[minion](../../../rule/organization/minion/) ally within 5 squares of the bonesplitter is reduced to 0 [Stamina](../../../rule/health/stamina/), the bonesplitter moves up to their speed and can make a melee [free strike](../../../feature/common/main-actions/free-strike/)."}]}
</script></div>
