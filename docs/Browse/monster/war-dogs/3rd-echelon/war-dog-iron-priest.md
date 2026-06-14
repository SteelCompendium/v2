---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "10"
free_strike: 3
intuition: 4
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 8
might: 2
name: War Dog Iron Priest
organization: Horde
presence: 4
reason: 1
role: Support
scc: mcdm.monsters.v1/monster.war-dogs.3rd-echelon.statblock/war-dog-iron-priest
size: 1M
speed: 5
stability: 0
stamina: "50"
type: statblock
---

# War Dog Iron Priest

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-iron-priest","name":"War Dog Iron Priest","ancestry":"Humanoid, Soulless, War Dog","level":"8","role":"Horde Support","roleKey":"support","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+4"}],"features":[{"kind":"ability","action":"main","name":"Houndcannon","cost":"Signature","usage":"Main action","keywords":["Area","Weapon"],"distance":"7 x 1 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"8 damage; P \u003c 4 the target loses 1 Recovery and is [bleeding](../../../../condition/bleeding/) (save ends)","low":"3 damage","mid":"6 damage; P \u003c 3 [bleeding](../../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Effect","text":"Any ally within 2 squares of the iron priest gains an edge on their next strike. If any target lost a Recovery, any affected ally has a double edge instead."}]},{"kind":"ability","action":"maneuver","name":"Iron Banner","cost":"2+ [Malice](../../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Magic"],"distance":"4 aura","target":"Each war dog in the area","sections":[{"label":"Effect","text":"For every 2 [Malice](../../../../rule/monster/malice/) spent, each target gains one of the following effects until the start of the iron priest's next turn."}],"trailing":"- The target has damage immunity 2. - The target's strikes deal an extra 3 holy damage. - The target has a +3 bonus to speed."},{"kind":"passive","action":"passive","name":"Chosen of the Iron Saint","body":"The Director gains 1 [Malice](../../../../rule/monster/malice/) whenever an ally within 3 squares of the iron priest obtains a tier 3 outcome on a power roll."}]}
</script></div>
