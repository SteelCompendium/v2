---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "12"
free_strike: 4
immunities:
    - Acid 2
    - Poison 2
intuition: -1
keywords:
    - Basilisk
    - Beast
level: 1
might: 1
name: Basilisk Tonguesnapper
organization: Elite
presence: -1
reason: -3
role: Hexer
scc: mcdm.monsters.v1/monster.basilisks.statblock/basilisk-tonguesnapper
size: "2"
speed: 8
stability: 2
stamina: "40"
type: statblock
---

# Basilisk Tonguesnapper

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"basilisk-tonguesnapper","name":"Basilisk Tonguesnapper","ancestry":"Basilisk, Beast","level":"1","role":"Elite Hexer","roleKey":"hexer","ev":"12","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Acid 2, Poison 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"-1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Prehensile Tongue","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 3","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 acid damage; pull 3","low":"8 acid damage; pull 1","mid":"10 acid damage; pull 2"}},"sections":[{"label":"Effect","text":"This ability can pull targets restrained by Petrifying Eye Beams, and ignores stability if it does so."}],"enhancements":[{"cost":"3 Malice","text":"The tonguesnapper targets two additional creatures or objects."}]},{"kind":"ability","action":"maneuver","name":"Petrifying Eye Beams","usage":"Maneuver","keywords":["Area","Magic"],"distance":"5 x 2 line within 1","target":"Special","powerRoll":{"formula":"+ 2","tiers":{"high":"Slowed (save ends); or if A \u003c 2 restrained (save ends)","low":"A \u003c 0 restrained (save ends)","mid":"A \u003c 1 restrained (save ends)"}},"sections":[{"label":"Special","text":"The area extends from both the tonguesnapper’s eyes, and this ability targets the first creature without cover on either side of the area."},{"label":"Effect","text":"If a target is already slowed, the potency increases by 1 for that target. A target restrained this way magically begins to turn to stone, and a target who ends two consecutive turns restrained this way is petrified. A target restrained this way or a creature adjacent to them can use a main action to cut encroaching stone from the target’s body, dealing 8 damage to the target that can’t be reduced in any way and ending this effect."}]},{"kind":"ability","action":"main","name":"Wink","cost":"2 Malice","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike"],"distance":"Melee 1 or ranged 10","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"14 corruption damage; R \u003c 2 dazed and slowed (save ends)","low":"8 corruption damage; R \u003c 0 dazed (save ends)","mid":"10 corruption damage; R \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"A creature dazed this way can’t benefit from edges or double edges and can’t gain or use surges."}]},{"kind":"ability","action":"triggered","name":"Neurotoxin Splash","usage":"Triggered action","keywords":["Area"],"distance":"2 burst","target":"Each enemy in the area","sections":[{"label":"Trigger","text":"The tonguesnapper takes damage from a melee ability."},{"label":"Effect","text":"Each target takes 4 acid damage. Any target who has M \u003c 2 is also slowed (save ends)."}]},{"kind":"passive","action":"passive","name":"Petrifying Fumes","body":"Any creature who starts their turn adjacent to the tonguesnapper and has M \u003c 1 is slowed (save ends)."}]}
</script></div>
