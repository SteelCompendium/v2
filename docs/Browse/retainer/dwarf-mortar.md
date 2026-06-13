---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: '-'
free_strike: 3
intuition: 1
keywords:
    - Dwarf
    - Humanoid
level: 1
might: 2
name: Dwarf Mortar
organization: Retainer
presence: 0
reason: 0
role: Hexer
scc: mcdm.monsters.v1/retainer.statblock/dwarf-mortar
size: 1M
speed: 5
stability: 3
stamina: "21"
type: statblock
---

# Dwarf Mortar

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-mortar","name":"Dwarf Mortar","ancestry":"Dwarf, Humanoid","level":"1","role":"Retainer Hexer","roleKey":"hexer","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Armor-Piercing Shell","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 15","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"This ability ignores [cover](../../rule/combat/cover/) and bypasses [temporary Stamina](../../rule/health/temporary-stamina/)."}]},{"kind":"passive","action":"passive","name":"Voice Rune","body":"The mortar can use a magical rune inscribed on their skin to talk to their mentor over any distance as long as both are in the same world."},{"kind":"ability","action":"main","name":"Signal Shell","cost":"Encounter","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"Special; see below","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"11 fire damage","low":"5 fire damage","mid":"8 fire damage"}},"sections":[{"label":"Effect","text":"The mortar fires a shell straight upward, which hovers 3 squares up in the air and sheds light below it in a 3 cube. Enemies illuminated by this light can't [hide](../../feature/common/maneuvers/hide/) or turn invisible and can't benefit from concealment or cover. At the start of the mortar's next turn, the shell explodes to deal damage to enemies in the area."}]},{"kind":"ability","action":"main","name":"Pacifier Shell","cost":"Encounter","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 15","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"16 damage; I \u003c STRONG [dazed](../../condition/dazed/) ([save](../../rule/general/saving-throw/) ends) and [prone](../../condition/prone/)","low":"8 damage; I \u003c WEAK [dazed](../../condition/dazed/) ([save](../../rule/general/saving-throw/) ends","mid":"12 damage; I \u003c AVERAGE [dazed](../../condition/dazed/) ([save](../../rule/general/saving-throw/) ends)"}}},{"kind":"ability","action":"main","name":"Screaming Shell","cost":"Encounter","usage":"Main action","keywords":["Area","Weapon"],"distance":"10 x 1 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 damage; P \u003c STRONG [frightened](../../condition/frightened/)","low":"6 damage; P \u003c WEAK [frightened](../../condition/frightened/)","mid":"9 damage; P \u003c AVERAGE [frightened](../../condition/frightened/)"}},"sections":[{"label":"Effect","text":"Until the start of the mortar's next turn, [strikes](../../rule/combat/strike/) made against the mortar or any ally [adjacent](../../rule/combat/adjacent/) to them take a bane."}]}]}
</script></div>
