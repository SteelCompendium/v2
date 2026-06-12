---
printing: "1.01"
printing_book: "Bestiary"
agility: 1
ev: "3"
free_strike: 2
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 0
name: Kobold Adeptus
organization: Horde
presence: 0
reason: 2
role: Artillery
scc: mcdm.monsters.v1/monster.kobolds.statblock/kobold-adeptus
size: 1S
speed: 5
stability: 0
stamina: "10"
type: statblock
---

# Kobold Adeptus

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-adeptus","name":"Kobold Adeptus","ancestry":"Humanoid, Kobold","level":"1","role":"Horde Artillery","roleKey":"artillery","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"10"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Shocking Bolt","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 lightning damage","low":"4 lightning damage","mid":"6 lightning damage"}},"sections":[{"label":"Effect","text":"While the target is adjacent to any enemy, the adeptus gains an edge on this ability. Each enemy adjacent to the target takes 2 lighting damage."}]},{"kind":"ability","action":"maneuver","name":"Arcane Telum","cost":"3 Malice","usage":"Maneuver","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 15","target":"Three creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"6 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"This ability ignores banes, double banes, and damage immunity."}]},{"kind":"passive","action":"passive","name":"Shield? Shield!","body":"While adjacent to an ally who also has this trait, the adeptus has stability 1, has cover, and grants cover to allies."}]}
</script></div>
