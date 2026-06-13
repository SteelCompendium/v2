---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: 3 for four minions
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Lizardfolk
level: 1
might: 2
movement: Swim
name: Lizardfolk Shellguard
organization: Minion
presence: 0
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.lizardfolk.statblock/lizardfolk-shellguard
size: 1L
speed: 5
stability: 1
stamina: "6"
type: statblock
with_captain: +2 bonus to Stamina
---

# Lizardfolk Shellguard

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"lizardfolk-shellguard","name":"Lizardfolk Shellguard","ancestry":"Humanoid, Lizardfolk","level":"1","role":"Minion Defender","roleKey":"defender","ev":"3 for four minions","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"6"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"Swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Shield Smash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 2","tiers":{"high":"3 damage","low":"1 damage","mid":"2 damage"}},"sections":[{"label":"Effect","text":"The target takes a bane on their next strike."}]},{"kind":"passive","action":"passive","name":"Reptilian Escape","body":"While the shellguard has a tail, whenever they are [grabbed](../../../condition/grabbed/), [prone](../../../condition/prone/), [slowed](../../../condition/slowed/), or [weakened](../../../condition/weakened/), they can lose their tail to immediately end that condition, then [shift](../../../movement/shifting/) up to 2 squares."}]}
</script></div>
