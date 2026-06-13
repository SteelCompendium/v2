---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "44"
free_strike: 9
intuition: 4
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 9
might: 1
movement: Teleport
name: War Dog Taxiarch
organization: Leader
presence: 3
reason: 5
scc: mcdm.monsters.v1/monster.war-dogs.3rd-echelon.statblock/war-dog-taxiarch
size: 1M
speed: 7
stability: 1
stamina: "240"
type: statblock
---

# War Dog Taxiarch

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-taxiarch","name":"War Dog Taxiarch","ancestry":"Humanoid, Soulless, War Dog","level":"9","role":"Leader","roleKey":"leader","ev":"44","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Stunning Surge ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"23 lightning damage; the lightning spreads 3 squares; I \u003c 5 [dazed](../../../../condition/dazed/) (save ends)","low":"14 lightning damage; the lightning spreads 1 square; I \u003c 3 [dazed](../../../../condition/dazed/) (save ends)","mid":"19 lightning damage; the lightning spreads 2 squares; I \u003c 4 [dazed](../../../../condition/dazed/) (save ends)"}},"sections":[{"label":"Effect","text":"The spread is the distance the charge arcs from a target to nearby enemies. Each enemy within spread takes 5 lightning damage."}],"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"The lighting spread increases by 2 squares. Additionally, any creature who takes lightning damage from this ability and who has M \u003c 4 is [slowed](../../../../condition/slowed/) until the end of their next turn."}]},{"kind":"ability","action":"maneuver","name":"Overcharge (2 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 10","target":"Each war dog in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../../movement/shifting/) up to their speed and can make a [free strike](../../../../feature/common/main-actions/free-strike/) that deals an extra 5 lightning damage."}]},{"kind":"ability","action":"triggered","name":"Thunderstruck","usage":"Triggered action","keywords":["Magic","Melee"],"distance":"Melee 1","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance deals damage to the taxiarch."},{"label":"Effect","text":"After the ability is resolved, the target is [teleported](../../../../movement/teleport/) up to 5 squares and is thunderstruck (save ends). A thunderstruck creature has lightning weakness 5, and the taxiarch gains an edge on power rolls against them."}]},{"kind":"passive","action":"passive","name":"[End Effect]","cost":"../../../rule/monster/end-effect.md","body":"At the end of each of their turns, the taxiarch can take 15 damage to end one effect on them that can be ended by a [saving throw](../../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"ability","action":"main","name":"Magnetic Trickery ([Villain Action](../../../rule/monster/villain-action.md) 1)","keywords":["Area","Magic"],"distance":"10 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"[Slide](../../../../movement/forced-movement/) 5, and if the the target has M \u003c 4, they fall [prone](../../../../condition/prone/)."}]},{"kind":"ability","action":"main","name":"Conductor of Combat ([Villain Action](../../../rule/monster/villain-action.md) 2)","keywords":["Area","Magic"],"distance":"5 burst","target":"Each war dog in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../../movement/shifting/) up to their speed, then can make a [free strike](../../../../feature/common/main-actions/free-strike/) or use a maneuver."}]},{"kind":"ability","action":"main","name":"Unlimited Power! ([Villain Action](../../../rule/monster/villain-action.md) 3)","keywords":["Area","Magic"],"distance":"3 burst","target":"Each creature in the area","powerRoll":{"formula":"","tiers":{"high":"9 lightning damage","low":"18 lightning damage; the target is thunderstruck (save ends)","mid":"14 lightning damage; the target is thunderstruck (EoT)"}},"sections":[{"label":"Effect","text":"Each target makes an Agility test."}],"trailing":"See Thunderstruck. Additionally, until the end of the encounter, any enemy who moves within 3 squares of the taxiarch for the first time in a round or starts their turn there takes 3 lightning damage."}]}
</script></div>
