---
agility: 5
ev: "36"
free_strike: 7
immunities:
    - Corruption 9
    - poison 9
intuition: 1
keywords:
    - Undead
    - Vampire
level: 7
might: 2
movement: Climb, hover, teleport
name: Vampire Lord
organization: Leader
presence: 2
reason: 1
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/vampire-lord
size: 1M
speed: 12
stability: 3
stamina: "200"
type: statblock
---

# Vampire Lord

---

<script type="application/json" class="sc-statblock-data">
{"id":"vampire-lord","name":"Vampire Lord","ancestry":"Undead, Vampire","level":"7","role":"Leader","roleKey":"leader","ev":"36","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"12"},{"l":"Stamina","v":"200"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Corruption 9, poison 9","weakness":"—","movement":"Climb, hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+5"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Crimson Embrace","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 5","tiers":{"high":"24 corruption damage; M \u003c 5 bleeding (save ends)","low":"13 corruption damage; M \u003c 3 bleeding (save ends)","mid":"21 corruption damage; M \u003c 4 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"The vampire regains Stamina equal to half the damage dealt, and can end one effect on them that can be ended by a saving throw."}],"enhancements":[{"cost":"2+ Malice","text":"The vampire shifts 3 after striking the last target, and can target one additional creature for every 2 malice spent."}]},{"kind":"ability","action":"maneuver","name":"Arise, My Children","cost":"2 Malice","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"Two blood-starved vampires appear in unoccupied spaces within distance."}]},{"kind":"ability","action":"triggered","name":"Redirected Charm","cost":"3 Malice","usage":"Free triggered action","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"One enemy","sections":[{"label":"Trigger","text":"A creature makes a strike against the vampire."},{"label":"Effect","text":"The target becomes the new target of the strike."}]},{"kind":"passive","action":"passive","name":"Lord's Bloodthirst","body":"The vampire has speed 15 and an edge on power rolls while any creature within 20 squares of them is bleeding. Any bleeding creature within 5 squares of the vampire can't hide."},{"kind":"villain","action":"villain","name":"Let Us Feast!","cost":"Villain Action 1","keywords":["Ranged"],"distance":"20 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"Each target who has P \u003c 4 is now bleeding (save ends)."}]},{"kind":"villain","action":"villain","name":"Red Mist Rising","cost":"Villain Action 2","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"10 damage; M \u003c 5 6 corruption damage","low":"2 damage; M \u003c 3 6 corruption damage","mid":"7 damage; M \u003c 4 6 corruption damage"}},"sections":[{"label":"Effect","text":"The vampire turns to mist, filling the area. Until the end of the round, the vampire can't move or be targeted by abilities, but they can use Crimson Embrace against a target in the area. The vampire reforms in an unoccupied space in the area at the end of the round."}]},{"kind":"villain","action":"villain","name":"Sacrifice","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"20 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"2 corruption damage","low":"11 corruption damage","mid":"8 corruption damage"}},"sections":[{"label":"Effect","text":"Each target is marked for sacrifice. At the end of the round, each target who isn't dead or destroyed takes 50 corruption damage. The vampire then uses the following ability."},{"label":"Effect","text":"Each target makes a **Might test**. This ability deals an extra 5 damage for each creature killed by the Sacrifice villain action."}],"trailing":"**Wave of Blood:**"}]}
</script>
