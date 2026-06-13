---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "32"
free_strike: 7
immunities:
    - Psychic 6
intuition: 2
keywords:
    - Horror
    - Voiceless Talker
level: 6
might: 0
movement: Hover, teleport
name: Voiceless Talker Artillerist
organization: Elite
presence: 1
reason: 3
role: Artillery
scc: mcdm.monsters.v1/monster.voiceless-talkers.statblock/voiceless-talker-artillerist
size: 1M
speed: 5
stability: 2
stamina: "140"
type: statblock
---

# Voiceless Talker Artillerist

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"voiceless-talker-artillerist","name":"Voiceless Talker Artillerist","ancestry":"Horror, Voiceless Talker","level":"6","role":"Elite Artillery","roleKey":"artillery","ev":"32","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"140"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Psychic 6","weakness":"—","movement":"Hover, teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Psionic Rifle Burst ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Psionic","Ranged","Strike","Weapon"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"22 damage; the strike spreads 2 squares","low":"11 damage","mid":"19 damage; the strike spreads 1 square"}},"sections":[{"label":"Effect","text":"The strike's spread is the distance it expands from a target to nearby enemies. Each enemy within that distance takes 3 damage."}],"enhancements":[{"cost":"2 Malice","text":"Each enemy within the strike spread takes an extra 3 damage."}]},{"kind":"ability","action":"main","name":"Mind Jolt","usage":"Main action","keywords":["Area","Psionic"],"distance":"10 x 1 line within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"13 lightning damage; I \u003c 3 [slowed](../../../condition/slowed/) (save ends)","low":"6 lightning damage","mid":"10 lightning damage; I \u003c 2 [slowed](../../../condition/slowed/) (save ends)"}}},{"kind":"ability","action":"maneuver","name":"In Our Sights","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"One creature","sections":[{"label":"Effect","text":"Until the start of the artillerist's next turn, the next psionic ability used against the target automatically treats its initial power roll as a 17. The creature using the ability can still roll to determine if they score a critical hit."}]},{"kind":"ability","action":"triggered","name":"Tactical Reposition","cost":"1 Malice","usage":"[Triggered Action](../../rule/combat/triggered-action.md)","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The artillerist takes damage."},{"label":"Effect","text":"The artillerist can [teleport](../../../movement/teleport/) up to 5 squares and ignores any effects associated with the damage."}]},{"kind":"passive","action":"passive","name":"Psionic Conductor","body":"Whenever a non-[minion](../../../rule/organization/minion/) voiceless talker within 5 squares of the artillerist uses a psionic ability, they can do so as if they were in the artillerist's space."},{"kind":"passive","action":"passive","name":"Locked On","body":"The artillerist ignores invisibility, cover, and concealment. A creature can't hide from the artillerist while the artillerist has line of effect to the."}]}
</script></div>
