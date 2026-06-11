---
agility: 3
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 3
name: Gnoll Carnage
organization: Leader
presence: 3
reason: 0
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-carnage
size: 1M
speed: 5
stability: 1
stamina: "100"
type: statblock
---

# Gnoll Carnage

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-carnage","name":"Gnoll Carnage","ancestry":"Abyssal, Gnoll","level":"2","role":"Leader","roleKey":"leader","ev":"16","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"100"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Shrapnel Whip","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"14 damage; A \u003c 3 bleeding and dazed (save ends)","low":"8 damage; A \u003c 1 bleeding (save ends)","mid":"11 damage; A \u003c 2 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"An ally targeted by this ability ignores the damage and can make a free strike."}]},{"kind":"ability","action":"maneuver","name":"Carnage's Cackletongue","cost":"4 Malice","usage":"Maneuver","keywords":["Area"],"distance":"5 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target deals an extra 3 damage with their next strike until the start of the carnage's next turn. If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Death Rampage","body":"Whenever a non-minion ally within 5 squares of the carnage is reduced to 0 Stamina, the carnage can move up to their speed, then can either make a melee free strike against two creatures or use Shrapnel Whip against one creature."},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the carnage can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Endless Hunger","body":"If the carnage is reduced to 0 Stamina while there are still gnolls on the encounter map, one gnoll on the map is transformed into a gnoll carnage, keeping their current Stamina."},{"kind":"villain","action":"villain","name":"Call Up From the Abyss","cost":"Villain Action 1","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The carnage summons four abyssal hyenas into unoccupied spaces within distance."}]},{"kind":"villain","action":"villain","name":"Edacity","cost":"Villain Action 2","keywords":["Area"],"distance":"10 burst","target":"Self and three allies","sections":[{"label":"Effect","text":"Each target moves up to their speed and can make a free strike. Any creature damaged by one of these free strikes who has M \u003c 2 is knocked prone."}]},{"kind":"villain","action":"villain","name":"Deepest Wounds","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"5 burst","target":"Each winded enemy in the area","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"The target can't regain Stamina until the end of the encounter.","mid":"The target can't regain Stamina (save ends)."}},"sections":[{"label":"Effect","text":"The carnage's eyes and all exposed blood within distance glow bright red. Each target makes a **Presence test**."},{"label":"Effect","text":"Until the end of the encounter, all gnolls have a double edge on power rolls that target a winded enemy."}]}]}
</script></div>
