---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: -1
ev: "72"
free_strike: 6
intuition: 0
keywords:
    - Construct
    - Undead
level: 4
might: 4
movement: Burrow
name: Ashen Hoarder
organization: Solo
presence: -5
reason: -2
scc: mcdm.monsters.v1/monster.ashen-hoarder.statblock/ashen-hoarder
size: "3"
speed: 8
stability: 3
stamina: "350"
type: statblock
weaknesses:
    - Holy 5
---

# Ashen Hoarder

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ashen-hoarder","name":"Ashen Hoarder","ancestry":"Construct, Undead","level":"4","role":"Solo","roleKey":"solo","ev":"72","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"350"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"Burrow","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"-2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-5"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the ashen hoarder can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The ashen hoarder can take two turns each round. They can't take turns consecutively."}]},{"kind":"ability","action":"main","name":"Claw and Blade","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"18 damage; M \u003c 4 bleeding (save ends); A \u003c 2 grabbed","low":"10 damage; if one target has M \u003c 2 they are bleeding (save ends); if the other target has A \u003c 2 they are grabbed","mid":"15 damage; if one target has M \u003c 3 they are bleeding (save ends); if the other target has A \u003c 3 they are grabbed"}},"sections":[{"label":"Effect","text":"The ashen hoarder can have up to two size 1 creatures grabbed at a time. | |"}]},{"kind":"ability","action":"main","name":"Corpse Bomb","usage":"Main Action","keywords":["Area","Magic","Ranged"],"distance":"4 cube within 20","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"11 damage; A \u003c 4 weakened (save ends)","low":"4 damage; A \u003c 2 weakened (save ends)","mid":"8 damage; A \u003c 3 weakened (save ends)"}},"enhancements":[{"cost":"2 Malice","text":"Any enemy weakened this way is instead slowed and weakened (save ends)."},{"cost":"3 Malice","text":"The ashen hoarder targets a second 4 cube within distance."}]},{"kind":"ability","action":"main","name":"Impale","cost":"3 Malice","usage":"Main action","keywords":["Area","Weapon"],"distance":"4 x 1 line within 1","target":"Each creature in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 corruption damage; M \u003c 4 the target is impaled (save ends)","low":"6 corruption damage; M \u003c 2 the target is impaled (save ends)","mid":"11 corruption damage; M \u003c 3 the target is impaled (save ends)"}},"sections":[{"label":"Effect","text":"An impaled creature is restrained and bleeding, and moves with the ashen hoarder. The ashen hoarder can have three creatures impaled with this ability at a time."}]},{"kind":"ability","action":"maneuver","name":"Bone Dozer","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The ashen hoarder moves up to twice their speed in a straight line. Each creature or object in the path of this movement is either pushed into the nearest unoccupied space outside the path, or if they have M \u003c 3 is pushed forward until the movement ends. Any creature who is force moved forward into an obstacle is dazed (save ends)."}]},{"kind":"ability","action":"triggered","name":"Armor of Corpses","cost":"2 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The ashen hoarder takes damage."},{"label":"Effect","text":"The ashen hoarder halves the damage. If the ashen hoarder has one or more creatures impaled, the Malice cost of this feature is reduced by 1 and one impaled creature takes the other half of the damage."}]},{"kind":"passive","action":"passive","name":"Bladed Body","body":"An adjacent enemy who grabs the ashen hoarder or uses a melee ability against them takes 3 damage."},{"kind":"passive","action":"passive","name":"Soul Singularity","body":"When the ashen hoarder is reduced to 0 Stamina, they explode in a swirling singularity of bone shards and soul energy. Each creature within 5 squares of the ashen hoarder who has M \u003c 3 takes 11 corruption damage. A creature killed by this damage has their soul sucked into the vortex and lost somewhere in the Abyssal Wasteland, and can't be brought back to life until their soul is recovered."},{"kind":"villain","action":"villain","name":"Skeletal Eruption","cost":"Villain Action 1","keywords":["Area","Weapon"],"distance":"8 x 3 line within 1","target":"Each creature and object in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 damage, vertical push 3","low":"6 damage, vertical push 2","mid":"11 damage, vertical push 2"}},"sections":[{"label":"Effect","text":"Each target is force moved straight up, then falls. A target who would normally land prone after falling is instead restrained (save ends)."}]},{"kind":"villain","action":"villain","name":"Mobile Mine Field","cost":"Villain Action 2","keywords":["Area","Ranged"],"distance":"10 cube within 20","target":"Special","sections":[{"label":"Effect","text":"The ashen hoarder sprays out six size 1M zombie mines that appear in unoccupied squares within distance. Any enemy who moves adjacent to a zombie mine for the first time in a round or starts their turn there causes the mine to explode, dealing 4 corruption damage to each creature adjacent to the mine. Any other zombie mines adjacent to the exploding mine also explode. At the start of each of the ashen hoarder's turns, each unexploded zombie mine can be moved up to 2 squares."}]},{"kind":"villain","action":"villain","name":"Ossuary Assault","cost":"Villain Action 3","keywords":["Melee","Strike","Weapon"],"distance":"Self; see below","target":"Self","sections":[{"label":"Effect","text":"The ashen hoarder moves up to their speed and uses Claw and Blade with a double edge against one target. On a tier 3 outcome, the ashen hoarder can use Impale without spending Malice."}]}]}
</script></div>
