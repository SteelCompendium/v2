---
printing: "1.01"
printing_book: "Bestiary"
agility: 3
ev: "6"
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 4
might: 1
name: War Dog Hypokrite
organization: Horde
presence: 2
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon.statblock/war-dog-hypokrite
size: 1M
speed: 8
stability: 0
stamina: "30"
type: statblock
---

# War Dog Hypokrite

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-dog-hypokrite","name":"War Dog Hypokrite","ancestry":"Humanoid, Soulless, War Dog","level":"4","role":"Horde Ambusher","roleKey":"ambusher","ev":"6","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Needle-Knife","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"10 damage; A \u003c 3 bleeding and weakened (save ends)","low":"6 damage","mid":"8 damage; A \u003c 2 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"This ability deals an extra 6 damage if the hypokrite is hidden or disguised."}]},{"kind":"ability","action":"triggered","name":"Feign Death","cost":"2 Malice","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 20","target":"Special","sections":[{"label":"Trigger","text":"The hypokrite takes damage."},{"label":"Effect","text":"The hypokrite detonates their loyalty collar to deal 2d6 damage to each adjacent enemy, but teleports to an unoccupied space adjacent to an ally within distance and remains alive."}]},{"kind":"passive","action":"passive","name":"Face in the Crowd","body":"The hypokrite is invisible while adjacent to any ally who isn't hidden, and they can attempt to hide even while observed. Whenever they use the Hide maneuver, the hypokrite can disguise themself as another creature within line of effect."},{"kind":"passive","action":"passive","name":"Loyalty Collar","body":"When the hypokrite is reduced to 0 Stamina, their loyalty collar explodes, dealing 2d6 damage to each adjacent enemy and object."}]}
</script></div>
