---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "12"
free_strike: 4
immunities:
    - Corruption 3
    - poison 3
intuition: 0
keywords:
    - Undead
level: 1
might: -2
movement: Fly, hover
name: Ghost
organization: Leader
presence: 3
reason: 0
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/ghost
size: 1M
speed: 6
stability: 1
stamina: "80"
type: statblock
---

# Ghost

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ghost","name":"Ghost","ancestry":"Undead","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 3, poison 3","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Heat Death","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"Two creatures","powerRoll":{"formula":"+ 3","tiers":{"high":"13 cold damage; P \u003c 3 slowed (save ends)","low":"7 cold damage; P \u003c 1 slowed (save ends)","mid":"10 cold damage; P \u003c 2 slowed (save ends)"}},"sections":[{"label":"Effect","text":"The next strike made against the target gains an edge."}]},{"kind":"ability","action":"maneuver","name":"Haunt","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 8","target":"Self or one ally with a Phasing trait","sections":[{"label":"Effect","text":"The target shifts up to their speed."}],"enhancements":[{"cost":"2 Malice","text":"The ghost chooses one additional target."}]},{"kind":"ability","action":"triggered","name":"Shriek","cost":"1 Malice","usage":"Triggered action","keywords":["Magic","Melee"],"distance":"Melee 1","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance targets the ghost with a strike."},{"label":"Effect","text":"The ghost halves the damage from the strike and the target takes 2 sonic damage."}]},{"kind":"passive","action":"passive","name":"Phantom Flow","body":"Each undead with a Phasing trait within 10 squares of the ghost can't be made slowed or weakened."},{"kind":"villain","action":"villain","name":"Paranormal Activity","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"5 burst","target":"Each size 3 or smaller object in the area","sections":[{"label":"Effect","text":"Each target rises 1 square into the air and is vertically pulled up to 5 squares toward the nearest enemy within 3 squares of the target."}]},{"kind":"villain","action":"villain","name":"Spirited Away","cost":"Villain Action 2","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"P \u003c 3 the target is levitated until the end of the encounter","low":"P \u003c 1 the target is levitated (EoT)","mid":"P \u003c 2 the target is levitated (EoT)"}},"sections":[{"label":"Effect","text":"A levitated target floats 1 square off the ground when first affected, then rises 1 square at the end of each of their turns. If a levitated target can't already fly, they can fly but are slowed and weakened while flying this way."}]},{"kind":"villain","action":"villain","name":"Awful Wail","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"8 sonic damage","low":"3 sonic damage","mid":"5 sonic damage"}},"sections":[{"label":"Effect","text":"A target who has P \u003c 2 is reduced to 1 Stamina if they are winded after taking this damage."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The ghost can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the ghost moves through a creature, that creature takes 2 corruption damage. The ghost doesn't take damage from being force moved into objects."}]}
</script></div>
