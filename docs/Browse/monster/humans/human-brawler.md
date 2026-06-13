---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "6"
free_strike: 4
immunities:
    - Corruption 1
    - psychic 1
intuition: 0
keywords:
    - Human
    - Humanoid
level: 1
might: 2
name: Human Brawler
organization: Platoon
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.humans.statblock/human-brawler
size: 1M
speed: 5
stability: 0
stamina: "40"
type: statblock
---

# Human Brawler

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"human-brawler","name":"Human Brawler","ancestry":"Human, Humanoid","level":"1","role":"Platoon Brute","roleKey":"brute","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 1, psychic 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Haymaker","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage; M \u003c 2 [grabbed](../../../condition/grabbed/) and the target takes a bane on the Escape Grab maneuver","low":"6 damage","mid":"9 damage"}},"sections":[{"label":"Effect","text":"A target who is already [grabbed](../../../condition/grabbed/) takes an extra 2 damage."}]},{"kind":"ability","action":"maneuver","name":"Throw (1 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Melee"],"distance":"Melee 1","target":"One creature grabbed by the brawler","sections":[{"label":"Effect","text":"The brawler [pushes](../../../movement/forced-movement/) the target up to 5 squares."}]},{"kind":"passive","action":"passive","name":"Shoot the Hostage","body":"The brawler halves the damage from any strike if they have a creature or object [grabbed](../../../condition/grabbed/) of size 1S or larger. The [grabbed](../../../condition/grabbed/) creature or object takes the remaining damage."},{"kind":"passive","action":"passive","name":"Supernatural Insight","body":"The brawler ignores concealment if it's granted by a supernatural effect."}]}
</script></div>
