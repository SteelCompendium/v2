---
agility: 1
ev: "6"
free_strike: 2
immunities:
    - Corruption 4
    - poison 4
intuition: 2
keywords:
    - Undead
level: 4
might: 3
name: Flesh Mournling
organization: Horde
presence: -1
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.undead.2nd-echelon.statblock/flesh-mournling
size: "2"
speed: 6
stability: 2
stamina: "35"
type: statblock
---

# Flesh Mournling

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"flesh-mournling","name":"Flesh Mournling","ancestry":"Undead","level":"4","role":"Horde Defender","roleKey":"defender","ev":"6","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"35"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 4, poison 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Multiarm Strike","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"9 damage","low":"5 damage","mid":"7 damage"}},"sections":[{"label":"Effect","text":"The target can't shift until the end of their next turn."}],"enhancements":[{"cost":"1 Malice","text":"This ability targets one additional target."}]},{"kind":"ability","action":"main","name":"Horrid Wail","usage":"Main action","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"4 psychic damage; I \u003c 3 frightened (save ends)","low":"2 psychic damage","mid":"3 psychic damage; I \u003c 2 frightened (save ends)"}},"sections":[{"label":"Effect","text":"A target who is still frightened this way at the end of the encounter can't take a respite activity during their next respite."}]},{"kind":"passive","action":"passive","name":"Arise","body":"The first time the mournling is reduced to 0 Stamina by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 10 Stamina and fall prone."},{"kind":"passive","action":"passive","name":"Immutable Form","body":"The mournling's shape can't be changed by any external effect."}]}
</script></div>
