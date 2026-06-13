---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "10"
free_strike: 3
intuition: 2
keywords:
    - Soulless
    - War Dog
level: 8
might: 4
movement: Fly, hover
name: War Dog Prismite
organization: Horde
presence: 3
reason: 4
role: Defender
scc: mcdm.monsters.v1/monster.war-dogs.3rd-echelon.statblock/war-dog-prismite
size: "2"
speed: 5
stability: 2
stamina: "82"
type: statblock
---

# War Dog Prismite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-prismite","name":"War Dog Prismite","ancestry":"Soulless, War Dog","level":"8","role":"Horde Defender","roleKey":"defender","ev":"10","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"82"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Grasping Tonguetacles ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Area","Psionic","Weapon"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"8 psychic damage; R \u003c 4 [grabbed](../../../../condition/grabbed/) and the target takes a bane on the Escape Grab maneuver, [pull](../../../../movement/forced-movement/) 2","low":"3 psychic damage","mid":"6 psychic damage; R \u003c 3 [grabbed](../../../../condition/grabbed/), [pull](../../../../movement/forced-movement/) 2"}}},{"kind":"ability","action":"maneuver","name":"Hard Light Field","usage":"Maneuver","keywords":["Area","Psionic","Ranged"],"distance":"4 cube within 10","target":"Each ally in the area","sections":[{"label":"Effect","text":"Until the start of the prismite's next turn, each target has cover and gains a +2 bonus to stability."}]},{"kind":"ability","action":"triggered","name":"Tractor Beam (1 [Malice](../../../rule/monster/malice.md))","usage":"Triggered action","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance uses a melee ability against an ally."},{"label":"Effect","text":"The target is [pulled](../../../../movement/forced-movement/) up to 5 squares toward the prismite and any damage from the triggering ability is halved."}]},{"kind":"passive","action":"passive","name":"Prismacore Detonation","body":"When the prismite is reduced to 0 [Stamina](../../../../rule/health/stamina/), they explode, dealing 3d6 psychic damage to each enemy within 2 squares of them."}]}
</script></div>
