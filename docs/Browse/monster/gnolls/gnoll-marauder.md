---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "4"
free_strike: 2
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 1
name: Gnoll Marauder
organization: Horde
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-marauder
size: 1M
speed: 7
stability: 1
stamina: "20"
type: statblock
---

# Gnoll Marauder

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-marauder","name":"Gnoll Marauder","ancestry":"Abyssal, Gnoll","level":"2","role":"Horde Harrier","roleKey":"harrier","ev":"4","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Fury Flail","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage; [prone](../../../condition/prone/); A \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","low":"4 damage","mid":"5 damage"}},"enhancements":[{"cost":"2+ [Malice](../../../rule/monster/malice/)","text":"This ability targets one additional target for each 2 [Malice](../../../rule/monster/malice/) spent."}]},{"kind":"ability","action":"maneuver","name":"Marauder's Cackletongue","cost":"3 [Malice](../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area"],"distance":"2 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../movement/shifting/) up to their speed. If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-[minion](../../../rule/organization/minion/) ally within 7 squares of the marauder is reduced to 0 [Stamina](../../../rule/health/stamina/), the marauder moves up to their speed and can make a melee [free strike](../../../feature/common/main-actions/free-strike/)."}]}
</script></div>
