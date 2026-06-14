---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "10"
free_strike: 5
intuition: 0
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 3
might: 0
movement: Teleport
name: Wode Elf Guerrilla
organization: Platoon
presence: 1
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-guerrilla
size: 1M
speed: 7
stability: 0
stamina: "50"
type: statblock
---

# Wode Elf Guerrilla

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-guerrilla","name":"Wode Elf Guerrilla","ancestry":"Fey, Humanoid, Wode Elf","level":"3","role":"Platoon Ambusher","roleKey":"ambusher","ev":"10","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"50"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Splinter Dagger","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"14 damage; M \u003c 2 [bleeding](../../../condition/bleeding/) (save ends)","low":"7 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"The guerrilla can [teleport](../../../movement/teleport/) up to 3 squares."}],"enhancements":[{"cost":"3 [Malice](../../../rule/monster/malice/)","text":"This ability targets one additional target, and deals an additional 3 damage if both targets are [adjacent](../../../rule/combat/adjacent/) to each other."}]},{"kind":"ability","action":"triggered","name":"Do Not Hesitate in the Wode","cost":"3 Malice","usage":"Free triggered action","keywords":["Ranged"],"distance":"Ranged 20","target":"Self and each ally","sections":[{"label":"Special","text":"The guerrilla must be acting as a captain."},{"label":"Trigger","text":"An ally ends their turn while the guerrilla hasn't acted this round."},{"label":"Effect","text":"The targets take their turn immediately. Each target gains an edge on abilities until the end of their turn."}]},{"kind":"passive","action":"passive","name":"Into the Green","body":"The guerrilla can attempt to hide at the end of each of their turns."},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the guerrilla that would take a bane from cover or concealment have a double bane instead."}]}
</script></div>
