---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "48"
free_strike: 10
intuition: 3
keywords:
    - Abyssal
    - Demon
level: 10
might: 5
movement: Fly
name: Aurumvas
organization: Leader
presence: 5
reason: 5
scc: mcdm.monsters.v1/monster.demons.4th-echelon.statblock/aurumvas
size: "3"
speed: 8
stability: 2
stamina: "260"
type: statblock
weaknesses:
    - Holy 5
---

# Aurumvas

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"aurumvas","name":"Aurumvas","ancestry":"Abyssal, Demon","level":"10","role":"Leader","roleKey":"leader","ev":"48","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"260"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+5"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+5"}],"features":[{"kind":"passive","action":"passive","name":"Absorb Soul","body":"Whenever any demon is reduced to 0 [Stamina](../../../../rule/health/stamina/) within 10 squares of Aurumvas, the Director gains 1 [Malice](../../../../rule/monster/malice/). Aurumvas loses this trait while he is [dazed](../../../../condition/dazed/)."},{"kind":"ability","action":"main","name":"Greedy Hands","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Strike"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"24 corruption damage; R \u003c 6 [weakened](../../../../condition/weakened/) (save ends)","low":"15 corruption damage; R \u003c 4 [weakened](../../../../condition/weakened/) (save ends)","mid":"20 corruption damage; R \u003c 5 [weakened](../../../../condition/weakened/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"Aurumvas regains [Stamina](../../../../rule/health/stamina/) equal to the damage dealt."}]},{"kind":"ability","action":"main","name":"Covetous Bolts (3 [Malice](../../../rule/monster/malice.md))","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 20","target":"Two creatures","powerRoll":{"formula":"+ 5","tiers":{"high":"24 psychic damage; P \u003c 6 [dazed](../../../../condition/dazed/) (save ends)","low":"15 psychic damage; P \u003c 4 [dazed](../../../../condition/dazed/) (save ends)","mid":"20 psychic damage; P \u003c 5 [dazed](../../../../condition/dazed/) (save ends)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice.md)","text":"While [dazed](../../../../condition/dazed/) this way, a target can't gain [Heroic Resources](../../../../rule/resource/heroic-resource/)."}]},{"kind":"ability","action":"maneuver","name":"Greed Is Good (2 [Malice](../../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"Aurumvas chooses a supernatural treasure or an item made of gold and [teleports](../../../../movement/teleport/) to an unoccupied space [adjacent](../../../../rule/combat/adjacent/) to that object, then ends one effect on him that can be ended by a [saving throw](../../../../rule/general/saving-throw/)."}]},{"kind":"passive","action":"passive","name":"More... More...","body":"While Aurumvas is [winded](../../../../rule/health/winded/), he has a double [edge](../../../../rule/dice/edge/) on strikes."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Any creature within 5 squares of Aurumvas can't be hidden from him."},{"kind":"villain","action":"villain","name":"Time Is Money","cost":"Villain Action 1","keywords":["Area","Magic"],"distance":"20 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Aurumvas warps time with his abyssal avarice. Each target can [teleport](../../../../movement/teleport/) up to their speed and make a [free strike](../../../../feature/common/main-actions/free-strike/)."}]},{"kind":"villain","action":"villain","name":"Hostile Acquisition","cost":"Villain Action 2","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"Aurumvas chooses up to three treasures within distance that he has [line of effect](../../../../rule/combat/line-of-effect/) to and that aren't artifacts. Until the end of the encounter, ethereal golden snakes swirl around the target treasures. While an affected treasure is worn or held by a hero, each time that hero gains any amount of their [Heroic Resource](../../../../rule/resource/heroic-resource/), the Director gains 1 [Malice](../../../../rule/monster/malice/)."}]},{"kind":"villain","action":"villain","name":"No Matter the Cost","cost":"Villain Action 3","keywords":["Area","Magic","Ranged"],"distance":"Four 3 cubes within 10","target":"Each creature in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"19 fire damage; push 3","low":"10 fire damage; push 1","mid":"15 fire damage; push 2"}},"sections":[{"label":"Effect","text":"Aurumvas summons treasures from his vaults into the area, then causes them to explode."}]}]}
</script></div>
