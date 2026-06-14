---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "4"
free_strike: 3
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 0
name: Gnoll Abyssal Archer
organization: Horde
presence: -1
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-abyssal-archer
size: 1M
speed: 5
stability: 1
stamina: "15"
type: statblock
---

# Gnoll Abyssal Archer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-abyssal-archer","name":"Gnoll Abyssal Archer","ancestry":"Abyssal, Gnoll","level":"2","role":"Horde Artillery","roleKey":"artillery","ev":"4","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Dark Longbow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"8 corruption damage; M \u003c 2 [slowed](../../../condition/slowed/) (save ends)","low":"5 corruption damage","mid":"6 corruption damage"}},"sections":[{"label":"Effect","text":"This ability gains an edge against any target not at full [Stamina](../../../rule/health/stamina/)."}]},{"kind":"ability","action":"maneuver","name":"Archer's Cackletongue","cost":"2 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area"],"distance":"2 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Until the end of their next turn, each target gains an edge on their next strike. If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Distant Death Frenzy","body":"Whenever a non-[minion](../../../rule/organization/minion/) ally within 5 squares of the abyssal archer is reduced to 0 [Stamina](../../../rule/health/stamina/), the abyssal archer can make a ranged [free strike](../../../feature/common/main-actions/free-strike/)."},{"kind":"passive","action":"passive","name":"Bloodscent","body":"The abyssal archer doesn't need line of effect to use their abilities against any creature who isn't at full [Stamina](../../../rule/health/stamina/), as long as a size 1 opening exists between the archer and the target."}]}
</script></div>
