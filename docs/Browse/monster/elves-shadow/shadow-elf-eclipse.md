---
agility: 3
ev: "32"
free_strike: 7
intuition: 1
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 6
might: 4
movement: Climb
name: Shadow Elf Eclipse
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.elves-shadow.statblock/shadow-elf-eclipse
size: 1M
speed: 6
stability: 1
stamina: "180"
type: statblock
---

# Shadow Elf Eclipse

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-eclipse","name":"Shadow Elf Eclipse","ancestry":"Fey, Humanoid, Shadow Elf","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Manifold Blade","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; I \u003c 4 bleeding (save ends)","low":"11 damage; I \u003c 2 bleeding (save ends)","mid":"16 damage; I \u003c 3 bleeding (save ends)"}},"enhancements":[{"cost":"2 Malice","text":"The potency increases by 1."}]},{"kind":"ability","action":"maneuver","name":"Grasping Shadow","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"Three creatures or objects casting a shadow","powerRoll":{"formula":"+ 4","tiers":{"high":"Pull 10; I \u003c 4 slowed (save ends)","low":"Pull 5; I \u003c 2 slowed (save ends)","mid":"Pull 7; I \u003c 3 slowed (save ends)"}}},{"kind":"ability","action":"triggered","name":"Put It Out!","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"The triggering enemy","sections":[{"label":"Trigger","text":"An enemy within distance uses an ability that emits light, including abilities that deal fire or lightning damage."},{"label":"Effect","text":"The target has a double bane on the ability."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the eclipse can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The eclipse ignores concealment created by darkness. While the eclipse is in direct sunlight, they have damage weakness 3. While the eclipse has concealment, they have damage immunity 3."},{"kind":"villain","action":"villain","name":"From the Shadows","cost":"Villain Action 1","keywords":["Ranged"],"distance":"Ranged 5","target":"Special","sections":[{"label":"Effect","text":"The eclipse calls forth one brush stalker into an unoccupied space within distance. Each ally within distance can then shift up to their speed and make a free strike."}]},{"kind":"villain","action":"villain","name":"Cast Away All Hope","cost":"Villain Action 2","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"Each target loses all their surges. Additionally, until the end of the round, allies ignore edges and double edges on any targets' abilities, and ignore any nondamaging effects of any target's damage-dealing abilities."}]},{"kind":"villain","action":"villain","name":"Umbral Hunger","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"3 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"15 corruption damage; R \u003c 4 the target has speed 0 (save ends)","low":"7 corruption damage; R \u003c 2 the target has speed 0 (save ends)","mid":"12 corruption damage; R \u003c 3 the target has speed 0 (save ends)"}},"sections":[{"label":"Effect","text":"The area is shrouded in darkness that creates concealment until the end of the encounter. Any enemy who starts their turn in the area takes 5 corruption damage."}]}]}
</script></div>
