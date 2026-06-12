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
might: 0
name: Gnoll Cackler
organization: Horde
presence: 2
reason: 2
role: Hexer
scc: mcdm.monsters.v1/monster.gnolls.statblock/gnoll-cackler
size: 1S
speed: 5
stability: 1
stamina: "15"
type: statblock
---

# Gnoll Cackler

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-cackler","name":"Gnoll Cackler","ancestry":"Abyssal, Gnoll","level":"2","role":"Horde Hexer","roleKey":"hexer","ev":"4","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Moment of Brutality","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 8","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"7 psychic damage; I \u003c 2 the target uses a signature ability against a creature of the cackler's choice","low":"4 psychic damage; I \u003c 0 the target makes a free strike against a creature of the cackler's choice","mid":"5 psychic damage; I \u003c 1 the target makes a free strike against a creature of the cackler's choice"}},"sections":[{"label":"Effect","text":"An ally targeted by this ability ignores the damage and can make a free strike."}]},{"kind":"ability","action":"maneuver","name":"Cackler's Cackletongue","cost":"4 Malice","usage":"Maneuver","keywords":["Area","Magic"],"distance":"2 burst","target":"Each creature in the area","powerRoll":{"formula":"","tiers":{"high":"No effect","low":"Frightened (save ends)","mid":"Frightened (EoT)"}},"sections":[{"label":"Effect","text":"Each enemy target makes an **Intuition test**. If any target hasn't used their own Cackletongue maneuver on this turn, they can use it immediately at no cost."}]},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-minion ally within 5 squares of the cackler is reduced to 0 Stamina, the cackler moves up to their speed and can make a melee free strike."}]}
</script></div>
