---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "4"
free_strike: 2
intuition: 2
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 1
name: Gnoll Abyssal Summoner
organization: Horde
presence: 2
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-abyssal-summoner
size: 1M
speed: 5
stability: 1
stamina: "20"
type: statblock
---

# Gnoll Abyssal Summoner

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-abyssal-summoner","name":"Gnoll Abyssal Summoner","ancestry":"Abyssal, Gnoll","level":"2","role":"Horde Support","roleKey":"support","ev":"4","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Flame Wad","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 fire damage; I \u003c 2 the target is burning (save ends)","low":"4 fire damage","mid":"5 fire damage"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"maneuver","name":"Call Abyssal Hyenas","cost":"3 Malice","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 5","target":"Special","sections":[{"label":"Effect","text":"Two abyssal hyenas claw up from the ground in unoccupied spaces within distance."}]},{"kind":"ability","action":"maneuver","name":"Summoner's Cackletongue","cost":"4 Malice","usage":"Maneuver","keywords":["Area"],"distance":"2 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"One abyssal hyena target turns into a gnoll marauder, keeping their current Stamina. If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-minion ally within 5 squares of the abyssal summoner is reduced to 0 Stamina, the abyssal summoner moves up to their speed and can make a melee free strike."}]}
</script></div>
