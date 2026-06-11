---
agility: -2
ev: "9"
free_strike: 4
immunities:
    - Corruption 7
    - poison 7
intuition: 1
keywords:
    - Undead
    - Soulless
level: 7
might: 4
name: Waxen
organization: Horde
presence: -2
reason: -4
role: Artillery
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/waxen
size: 1M
speed: 4
stability: 2
stamina: "40"
type: statblock
---

# Waxen

---

<script type="application/json" class="sc-statblock-data">
{"id":"waxen","name":"Waxen","ancestry":"Undead, Soulless","level":"7","role":"Horde Artillery","roleKey":"artillery","ev":"9","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"4"},{"l":"Stamina","v":"40"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"-2"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Wax Fling","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"12 damage; A \u003c 4 slowed (save ends)","low":"8 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"If a target made slowed this way is already slowed, they are instead restrained (save ends)."}]},{"kind":"ability","action":"main","name":"Erupt","cost":"3 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"5 damage","low":"10 damage","mid":"8 damage"}},"sections":[{"label":"Effect","text":"If the waxen is ignited (see Burn Bright), they shift up to their speed before using this ability. Each target makes an **Agility test**."}],"trailing":"The waxen is then destroyed and the area is difficult terrain for enemies."},{"kind":"passive","action":"passive","name":"Burn Bright","body":"If the waxen takes fire damage, they ignite. While ignited, the waxen takes 4 fire damage at the start of each of their turns and their strikes deal an extra 4 fire damage."}]}
</script>
