---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "72"
free_strike: 6
intuition: 0
keywords:
    - Beast
    - Manticore
level: 4
might: 4
movement: Fly
name: Manticore
organization: Solo
presence: -1
reason: 0
scc: mcdm.monsters.v1/monster.manticore.statblock/manticore
size: "2"
speed: 10
stability: 2
stamina: "350"
type: statblock
---

# Manticore

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"manticore","name":"Manticore","ancestry":"Beast, Manticore","level":"4","role":"Solo","roleKey":"solo","ev":"72","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"350"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the manticore can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The manticore can take two turns each round. They can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Agile Predator","body":"Whenever the manticore deals damage to a creature, they don't provoke opportunity attacks from that creature during that turn."},{"kind":"ability","action":"main","name":"Carnivorous Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"21 damage; A \u003c 4 bleeding (save ends)","low":"12 damage; A \u003c 2 bleeding (save ends)","mid":"17 damage; A \u003c 3 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"If the target is frightened, this ability gains an edge."}]},{"kind":"ability","action":"main","name":"Tail Spike","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"14 damage; M \u003c 4 8 poison damage, weakened (save ends)","low":"6 damage; M \u003c 2 4 poison damage","mid":"11 damage; M \u003c 3 4 poison damage, weakened (save ends)"}},"enhancements":[{"cost":"1 Malice","text":"While weakened this way, a target takes 1d6 poison damage at the start of each of their turns."}]},{"kind":"ability","action":"maneuver","name":"Harrying Claws","usage":"Maneuver","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"Slide 4; A \u003c 4 7 damage","low":"Slide 1; A \u003c 2 3 damage","mid":"Slide 2; A \u003c 3 5 damage"}}},{"kind":"ability","action":"triggered","name":"Reflexive Instinct","cost":"2 Malice","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the manticore."},{"label":"Effect","text":"The manticore shifts up to 5 squares into the air, then can use Tail Spike against the target."}]},{"kind":"villain","action":"villain","name":"Trumpeting Howl","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"5 burst","target":"Each creature in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"Frightened (EoT); if the target has I \u003c 4 they are instead dazed (save ends)","low":"Frightened (EoT); if the target has I \u003c 2 they are instead frightened (save ends)","mid":"Frightened (EoT); if the target has I \u003c 3 they are instead frightened (save ends)"}}},{"kind":"villain","action":"villain","name":"Cornered Predator","cost":"Villain Action 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The manticore shifts up to their speed, then can use Tail Spike against each enemy within distance of that ability."}]},{"kind":"villain","action":"villain","name":"Debilitating Poison","cost":"Villain Action 3","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The manticore sours their poison with enmity. Until the end of the encounter, the manticore has a double edge on power rolls against weakened creatures. Additionally, any creature weakened by the manticore's Tail Spike ability has their speed halved and takes an extra 3 poison damage at the start of each of their turns."}]}]}
</script></div>
