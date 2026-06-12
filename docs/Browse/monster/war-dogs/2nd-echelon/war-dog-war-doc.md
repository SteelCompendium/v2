---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "7"
free_strike: 3
intuition: 2
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 5
might: 0
name: War Dog War Doc
organization: Horde
presence: 0
reason: 3
role: Support
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-war-doc
size: 1L
speed: 5
stability: 1
stamina: "35"
type: statblock
---

# War Dog War Doc

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-war-doc","name":"War Dog War Doc","ancestry":"Humanoid, Soulless, War Dog","level":"5","role":"Horde Support","roleKey":"support","ev":"7","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"35"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Syringe Crossbow","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature","powerRoll":{"formula":"+ 3","tiers":{"high":"9 poison damage; M \u003c 3 weakened (save ends)","low":"6 poison damage","mid":"8 poison damage"}},"sections":[{"label":"Effect","text":"A target enemy is subject to this ability's power roll. A target ally instead gains 5 temporary Stamina and can make a free strike."}]},{"kind":"ability","action":"maneuver","name":"Posthumous Promotion","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One war dog","sections":[{"label":"Effect","text":"If the target has a loyalty collar, they are reduced to 0 Stamina."}]},{"kind":"ability","action":"triggered","name":"Sanguine Stimulants","cost":"1 Malice","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 15","target":"Special","sections":[{"label":"Trigger","text":"One ally within distance dies."},{"label":"Effect","text":"Each ally adjacent to the dead ally deals an extra 6 damage on their next strike."}]},{"kind":"passive","action":"passive","name":"Body Bank Branch Manager","body":"If the war doc uses the Reconstitute war dog Malice feature, it costs 1 Malice less. Additionally, allies can treat the living war doc as a corpse when using the Reconstitute feature (see Reconstitute)."}]}
</script></div>
