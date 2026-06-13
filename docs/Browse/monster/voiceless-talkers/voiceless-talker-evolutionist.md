---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Psychic 8
intuition: 1
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: 0
movement: Hover, teleport
name: Voiceless Talker Evolutionist
organization: Leader
presence: 2
reason: 4
scc: mcdm.monsters.v1/monster.voiceless-talkers.statblock/voiceless-talker-evolutionist
size: 1M
speed: 5
stability: 2
stamina: "180"
type: statblock
---

# Voiceless Talker Evolutionist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"voiceless-talker-evolutionist","name":"Voiceless Talker Evolutionist","ancestry":"Horror, Voiceless Talker","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Psychic 8","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Psionic Intrusion ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Psionic","Ranged","Strike"],"distance":"Melee 1 or ranged 5","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 psychic damage; R \u003c 4 [slowed](../../../condition/slowed/) (save ends)","low":"11 psychic damage; R \u003c 2 [slowed](../../../condition/slowed/) (save ends)","mid":"16 psychic damage; R \u003c 3 [slowed](../../../condition/slowed/) (save ends)"}}},{"kind":"ability","action":"maneuver","name":"Carpe Quadratum","usage":"Maneuver","keywords":["Psionic","Ranged"],"distance":"Ranged 5","target":"One creature","sections":[{"label":"Effect","text":"The evolutionist [teleports](../../../movement/teleport/) to swap places with the target."}]},{"kind":"ability","action":"triggered","name":"Adaptability","usage":"[Triggered Action](../../rule/combat/triggered-action.md)","keywords":["Psionic"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The evolutionist takes damage that has a damage type."},{"label":"Effect","text":"Until the start of their next turn, the evolutionist has damage immunity 5 to the triggering damage type."}]},{"kind":"passive","action":"passive","name":"[End Effect]","cost":"../../rule/monster/end-effect.md","body":"At the end of each of their turns, the evolutionist can take 10 damage to end one effect on them that can be ended by a [saving throw](../../../rule/general/saving-throw/). This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Witness Evolutionary Superiority","body":"The evolutionist has any trait of the Director's choice from any ally [minion](../../../rule/organization/minion/) in the encounter."},{"kind":"ability","action":"main","name":"Show Me Who You Are ([Villain Action](../../rule/monster/villain-action.md) 1)","keywords":["Area","Psionic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"[Frightened](../../../condition/frightened/) (save ends)","low":"The target uses a [signature ability](../../../rule/combat/signature-ability/) against the nearest enemy within distance.","mid":"The target makes a [free strike](../../../feature/common/main-actions/free-strike/) against the nearest enemy within distance."}},"sections":[{"label":"Effect","text":"Each target makes an Intuition test."}]},{"kind":"ability","action":"main","name":"Release the Thralls ([Villain Action](../../rule/monster/villain-action.md) 2)","keywords":["Psionic","Ranged"],"distance":"Ranged 5","target":"Special","sections":[{"label":"Effect","text":"The evolutionist [teleports](../../../movement/teleport/) eight [minions](../../../rule/organization/minion/) of level 4 or lower into unoccupied spaces within distance. All eight [minions](../../../rule/organization/minion/) can be of any monster type but must share the same name."}]},{"kind":"ability","action":"main","name":"Brainstorm ([Villain Action](../../rule/monster/villain-action.md) 3)","keywords":["Area","Psionic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"15 lightning damage","low":"7 lightning damage","mid":"12 lightning damage"}},"sections":[{"label":"Effect","text":"Until the end of the encounter, the evolutionist is surrounded by a psionic electrical storm that is a 5 aura. The area is [difficult terrain](../../../movement/difficult-terrain/) for enemies, and any enemy who enters the area for the first time in a round or starts their turn there takes 8 lightning damage."}]}]}
</script></div>
