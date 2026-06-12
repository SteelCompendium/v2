---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "3"
free_strike: 1
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 0
name: Kobold Signifer
organization: Horde
presence: 2
reason: 0
role: Support
scc: mcdm.monsters.v1/monster.kobolds.statblock/kobold-signifer
size: 1S
speed: 5
stability: 0
stamina: "15"
type: statblock
---

# Kobold Signifer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-signifer","name":"Kobold Signifer","ancestry":"Humanoid, Kobold","level":"1","role":"Horde Support","roleKey":"support","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"1"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Signum","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"5 damage","low":"3 damage","mid":"4 damage"}},"sections":[{"label":"Effect","text":"One ally within 10 squares of the signifer can shift up to their speed if they end that shift adjacent to an ally."}],"enhancements":[{"cost":"2+ Malice","text":"One additional ally can shift for each 2 Malice spent."}]},{"kind":"ability","action":"maneuver","name":"Glory to the Legion","cost":"5 Malice","usage":"Maneuver","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target regains 5 Stamina."}]},{"kind":"passive","action":"passive","name":"Shield? Shield!","body":"While adjacent to an ally who also has this trait, the signifer has stability 1, has cover, and grants cover to allies."},{"kind":"passive","action":"passive","name":"Upholding High Standards","body":"Any ally who starts their turn within 5 squares of the signifer gains a +2 bonus to speed and a +2 damage bonus to strikes until the end of their turn. Additionally, if the signifer is killed, any kobold minion can enter their space during the same encounter to retrieve the signum battle standard they carry (no action required) and replace their stat block with the signifer stat block."}]}
</script></div>
