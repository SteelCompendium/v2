---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "20"
free_strike: 5
intuition: 2
keywords:
    - Fey
    - Humanoid
    - Wode Elf
level: 3
might: 2
movement: Teleport
name: Wode Elf Warleader
organization: Leader
presence: 2
reason: 2
scc: mcdm.monsters.v1/monster.elves-wode.statblock/wode-elf-warleader
size: 1M
speed: 7
stability: 2
stamina: "120"
type: statblock
---

# Wode Elf Warleader

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wode-elf-warleader","name":"Wode Elf Warleader","ancestry":"Fey, Humanoid, Wode Elf","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Teleport","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Wodeblade","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"15 damage; M \u003c 3 [restrained](../../../condition/restrained/) (save ends)","low":"8 damage; M \u003c 1 [restrained](../../../condition/restrained/) (save ends)","mid":"12 damage; M \u003c 2 [restrained](../../../condition/restrained/) (save ends)"}},"sections":[{"label":"Effect","text":"The warleader can [teleport](../../../movement/teleport/) up to 3 squares between each strike."}],"enhancements":[{"cost":"2 [Malice](../../rule/monster/malice.md)","text":"A target [restrained](../../../condition/restrained/) by this ability takes an extra 3 damage."}]},{"kind":"ability","action":"maneuver","name":"Fairness Is a Human Concept (5 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Area"],"distance":"10 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each non-[minion](../../../rule/organization/minion/) target can make a [free strike](../../../feature/common/main-actions/free-strike/), then each target [shifts](../../../movement/shifting/) up to 3 squares. A target who has cover or concealment at the end of this shift can attempt to hide at the end of the warleader's turn."}]},{"kind":"ability","action":"triggered","name":"Wode Sickness","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"One enemy","sections":[{"label":"Trigger","text":"An ally ends their turn."},{"label":"Effect","text":"The target must not have taken their turn this round. The target takes their turn immediately, and if they have P \u003c 2 they are [bleeding](../../../condition/bleeding/) and take a bane on strikes until the end of their turn."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the warleader can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Into the Green","body":"The warleader can attempt to hide at the end of each of their turns."},{"kind":"passive","action":"passive","name":"Masking Glamor","body":"Abilities targeting the warleader that would take a bane from cover or concealment have a double bane instead."},{"kind":"villain","action":"villain","name":"You Will All Witness my Blade","cost":"Villain Action 1","keywords":["Area"],"distance":"5 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The warleader uses Wodeblade against each target and gains an edge on the power roll."}]},{"kind":"villain","action":"villain","name":"Suppressing Volley","cost":"Villain Action 2","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"The warleader can use Wodeblade. Each target can then make a [free strike](../../../feature/common/main-actions/free-strike/)."}]},{"kind":"villain","action":"villain","name":"Is It Now or Is It Then?","cost":"Villain Action 3","keywords":["Area"],"distance":"5 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target is invisible until the start of the next round. The warleader then uses Wodeblade."}]}]}
</script></div>
