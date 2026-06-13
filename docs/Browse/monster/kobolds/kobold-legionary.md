---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 2
name: Kobold Legionary
organization: Horde
presence: 0
reason: 0
role: Defender
scc: mcdm.monsters.v1/monster.kobolds.statblock/kobold-legionary
size: 1S
speed: 5
stability: 0
stamina: "20"
type: statblock
---

# Kobold Legionary

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-legionary","name":"Kobold Legionary","ancestry":"Humanoid, Kobold","level":"1","role":"Horde Defender","roleKey":"defender","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gladius","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage; [taunted](../../../condition/taunted/) (EoT)","low":"3 damage; [taunted](../../../condition/taunted/) (EoT)","mid":"4 damage; [taunted](../../../condition/taunted/) (EoT)"}},"enhancements":[{"cost":"3 [Malice](../../rule/monster/malice.md)","text":"If the legionary is acting as a [captain](../../../rule/monster/captain/), they and each member of their [squad](../../../rule/monster/squad/) [shift](../../../movement/shifting/) up to 2 squares before this ability is used."}]},{"kind":"ability","action":"maneuver","name":"Shield Bash","usage":"Maneuver","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"4 damage; [push](../../../movement/forced-movement/) 1; M \u003c 2 [prone](../../../condition/prone/)","low":"2 damage; [push](../../../movement/forced-movement/) 1; M \u003c 0 [prone](../../../condition/prone/)","mid":"3 damage; [push](../../../movement/forced-movement/) 1; M \u003c 1 [prone](../../../condition/prone/)"}}},{"kind":"passive","action":"passive","name":"Shield? Shield!","body":"While [adjacent](../../../rule/combat/adjacent/) to an ally who also has this trait, the legionary has stability 1, has cover, and grants cover to allies."}]}
</script></div>
