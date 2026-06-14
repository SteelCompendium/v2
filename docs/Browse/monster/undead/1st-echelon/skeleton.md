---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "3"
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: 0
keywords:
    - Undead
    - Soulless
level: 1
might: 0
name: Skeleton
organization: Horde
presence: -1
reason: 1
role: Artillery
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/skeleton
size: 1M
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Skeleton

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"skeleton","name":"Skeleton","ancestry":"Undead, Soulless","level":"1","role":"Horde Artillery","roleKey":"artillery","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Bone Shards","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 10","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage","low":"4 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"Until the start of the skeleton's next turn, the target takes 2 damage the first time they willingly move on their turn."}]},{"kind":"ability","action":"maneuver","name":"Bone Spur","cost":"2 [Malice](../../../../rule/monster/malice/)","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"3 damage; M \u003c 2 [bleeding](../../../../condition/bleeding/) (save ends)","low":"1 damage; M \u003c 0 [bleeding](../../../../condition/bleeding/) (save ends)","mid":"2 damage; M \u003c 1 [bleeding](../../../../condition/bleeding/) (save ends)"}},"sections":[{"label":"Effect","text":"Each target takes a bane on their next strike."}]},{"kind":"passive","action":"passive","name":"Arise","body":"The first time the skeleton is reduced to 0 [Stamina](../../../../rule/health/stamina/) by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 1 [Stamina](../../../../rule/health/stamina/) and fall [prone](../../../../condition/prone/)."}]}
</script></div>
