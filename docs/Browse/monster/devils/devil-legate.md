---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "28"
free_strike: 6
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 5
might: 3
name: Devil Legate
organization: Elite
presence: 2
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.devils.statblock/devil-legate
size: 1M
speed: 6
stability: 2
stamina: "160"
type: statblock
---

# Devil Legate

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-legate","name":"Devil Legate","ancestry":"Devil, Infernal","level":"5","role":"Elite Defender","roleKey":"defender","ev":"28","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"160"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Infernal Pike","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; A \u003c 3 slowed (save ends)","low":"9 damage","mid":"14 damage; A \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"If the targets are adjacent to each other, this ability deals an extra 3 damage."}]},{"kind":"ability","action":"main","name":"Writ of Execution","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"14 damage; M \u003c 3 prone and can't stand (save ends)","low":"6 damage; M \u003c 1 prone","mid":"11 damage; M \u003c 2 prone and can't stand (save ends)"}},"sections":[{"label":"Effect","text":"If this ability is used as part of the Charge main action, the legate ignores difficult terrain during the charge. Each creature and object whose space the legate moves through takes the damage from this ability, but not its additional effects."}]},{"kind":"ability","action":"maneuver","name":"Law and Order","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One creature","sections":[{"label":"Effect","text":"The target is taunted by the legate (save ends). The legate can have only one creature taunted at a time."}]},{"kind":"ability","action":"triggered","name":"Devilish Charm","cost":"2 Malice","usage":"Triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"The triggering creature","powerRoll":{"formula":"","tiers":{"high":"The target takes a bane on the strike.","low":"The legate chooses a new target for the strike.","mid":"The legate halves the triggering damage."}},"sections":[{"label":"Trigger","text":"A creature targets the legate with a strike."},{"label":"Effect","text":"The target makes a Presence test."}]},{"kind":"passive","action":"passive","name":"Hellish Bailiff","body":"The legate has damage immunity 3 while in one of the Seven Cities of Hell or within 10 squares of a non-minion devil who is of a higher level than them."},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the legate's true name, the legate loses their damage immunities, any nondamaging effects of their signature ability, and their Devilish Charm ability until the end of the encounter."}]}
</script></div>
