---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 4
ev: "72"
free_strike: 6
immunities:
    - Psychic 5
intuition: 3
keywords:
    - Dragon
    - Elemental
level: 4
might: 2
movement: Fly, hover
name: Gloom Dragon
organization: Solo
presence: 4
reason: 1
scc: mcdm.monsters.v1/monster.dragons.statblock/gloom-dragon
size: "4"
speed: 8
stability: 2
stamina: "350"
type: statblock
---

# Gloom Dragon

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gloom-dragon","name":"Gloom Dragon","ancestry":"Dragon, Elemental","level":"4","role":"Solo","roleKey":"solo","ev":"72","defenses":[{"l":"Size","v":"4"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"350"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+4"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the dragon can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The dragon can take two turns each round. They can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Gloaming Wyrmscale Aura","body":"The dragon's scales create a 3 aura of dark supernatural fog around them that feeds on their victims' fears and provides concealment to the dragon only. Each enemy who starts their turn in the area takes 2 psychic damage. Additionally, whenever one or more enemies is in the area, the dragon's abilities deal an extra 3 psychic damage."},{"kind":"ability","action":"main","name":"Breath of Brume","cost":"Signature","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 10","target":"Each enemy and object in the area","powerRoll":{"formula":"","tiers":{"high":"6 cold damage","low":"14 cold damage; the target is dragonsealed (save ends)","mid":"11 cold damage; the target is dragonsealed (save ends)"}},"sections":[{"label":"Effect","text":"Each target makes an **Agility test**."}],"trailing":"A dragonsealed creature has psychic weakness 3 and cold weakness 3. Additionally, the area is filled with magical darkness. The dragon ignores concealment created by this darkness."},{"kind":"ability","action":"main","name":"Phantom Tail Swing","usage":"Main action","keywords":["Charge","Magic","Melee","Strike"],"distance":"Melee 3","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"18 psychic damage; pull 6","low":"10 psychic damage; pull 2","mid":"15 psychic damage; pull 4"}},"enhancements":[{"cost":"3 Malice","text":"The pull becomes a vertical slide."}]},{"kind":"passive","action":"passive","name":"Shadow Skulk","body":"Once per turn, the dragon can shift up to their speed, leaving behind a 4 cube area of magical darkness in their starting space that lasts until the end of the encounter. The dragon ignores concealment created by this darkness. Any enemy who ends their turn in the area and has I \u003c 3 is frightened of the dragon until the end of their next turn."},{"kind":"ability","action":"maneuver","name":"Visions in the Dark","cost":"5 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"10 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"Each target must be dragonsealed. Each target takes 3 psychic damage, and if they have I \u003c 3 they immediately make a free strike against one ally of the dragon's choice."}]},{"kind":"ability","action":"triggered","name":"Encroaching Darkness","cost":"1 Malice","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"A creature within 10 squares moves."},{"label":"Effect","text":"The dragon moves two existing cubes of magical darkness they created up to 10 squares each."}]},{"kind":"villain","action":"villain","name":"Enveloping Umbrage","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"Pull 6; I \u003c 4 frightened (save ends)","low":"Pull 2; I \u003c 2 frightened (EoT)","mid":"Pull 4; I \u003c 3 frightened (save ends)"}}},{"kind":"villain","action":"villain","name":"Pall of Nightmares","cost":"Villain Action 2","keywords":["Area","Magic"],"distance":"10 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 psychic damage","low":"6 psychic damage","mid":"11 psychic damage"}},"sections":[{"label":"Effect","text":"Each target must be dragonsealed. Any target who has I \u003c 3 is also dazed (save ends)."}]},{"kind":"villain","action":"villain","name":"Absence of All Light","cost":"Villain Action 3","keywords":["-"],"distance":"Special","target":"Special","sections":[{"label":"Effect","text":"The dragon disappears from the encounter map. The dragon and three hallucinatory illusions of themself then immediately reappear in unoccupied spaces on the encounter map, and the dragon and each illusion uses Breath of Brume. Each illusion is indistinguishable from the dragon except by supernatural means, has 1 Stamina, and has the dragon's speed. An illusion acts on the dragon's turns but can take only move actions. Once per round before or after using an ability, the dragon can trade places with any duplicate."}]}]}
</script></div>
