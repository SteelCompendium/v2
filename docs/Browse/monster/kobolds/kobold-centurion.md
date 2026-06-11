---
agility: 3
ev: "12"
free_strike: 2
intuition: 0
keywords:
    - Kobold
    - Humanoid
level: 1
might: 2
name: Kobold Centurion
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.kobolds.statblock/kobold-centurion
size: 1S
speed: 5
stability: 2
stamina: "80"
type: statblock
---

# Kobold Centurion

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-centurion","name":"Kobold Centurion","ancestry":"Kobold, Humanoid","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Pilum","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"13 damage; M \u003c 1 weakened (save ends)","low":"7 damage; M \u003c 1 weakened (save ends)","mid":"10 damage; M \u003c 1 weakened (save ends)"}},"sections":[{"label":"Effect","text":"Each ally adjacent to a target can make a free strike against that target."}],"enhancements":[{"cost":"3 Malice","text":"While weakened this way, a target is also restrained."}]},{"kind":"ability","action":"maneuver","name":"Concentrate All Fire on That Hero!","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"One enemy","sections":[{"label":"Effect","text":"Until the start of the centurion's next turn, the centurion and their allies gain an edge on power rolls against the target."}]},{"kind":"ability","action":"triggered","name":"Testudo!","usage":"Triggered action","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Trigger","text":"A creature uses an ability that targets the centurion or an ally of the centurion within distance."},{"label":"Effect","text":"Each target shifts up to 2 squares before the damage is resolved. Each kobold with the Shield? Shield! trait gains damage immunity 2 against the triggering ability."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the centurion can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Firetail Pilum","cost":"Villain Action 1","keywords":["-"],"distance":"Special","target":"Special","sections":[{"label":"Effect","text":"The centurion moves up to their speed, ignoring difficult terrain, and uses Pilum against each creature whose space they move through. They make one power roll against all targets, and the ability deals an extra 5 damage. While weakened by that ability, each target takes 2 fire damage at the start of each of their turns."}]},{"kind":"villain","action":"villain","name":"Boom Pilum!","cost":"Villain Action 2","keywords":["Area","Weapon","Ranged"],"distance":"5 cube within 10","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The centurion uses Pilum against each target and has a double edge. Each target is then pushed up to 3 squares."}]},{"kind":"villain","action":"villain","name":"Are You Not Entertained?!","cost":"Villain Action 3","keywords":["Area"],"distance":"10 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"A target who has P \u003c 2 is taunted (save ends). Each ally within distance can make a free strike. Additionally, until the end of the encounter, the centurion has damage immunity 2."}]},{"kind":"passive","action":"passive","name":"Shield? Shield!","body":"While adjacent to an ally who also has this trait, the centurion has stability 3, has cover, and grants cover to allies."}]}
</script></div>
