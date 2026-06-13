---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
free_strike: 2
intuition: 1
keywords:
    - Bugbear
    - Fey
    - Goblin
    - Humanoid
level: 2
might: 2
name: Bugbear Commando
organization: Retainer
presence: 0
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/retainer.statblock/bugbear-commando
size: 1L
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Bugbear Commando

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"bugbear-commando","name":"Bugbear Commando","ancestry":"Bugbear, Fey, Goblin, Humanoid","level":"2","role":"Retainer Ambusher","roleKey":"ambusher","ev":"-","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Bear Hug","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"11 damage","low":"5 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"If the commando started their turn with concealment from the target or hidden from them, they gain 1 [surge](../../rule/resource/surge/) that can be used immediately."}]},{"kind":"ability","action":"maneuver","name":"Throw","usage":"Maneuver","keywords":["Melee","Strike"],"distance":"Melee 1","target":"One creature or object","sections":[{"label":"Special","text":"The target must be [grabbed](../../condition/grabbed/) by the commando."},{"label":"Effect","text":"The target is vertical pushed up to 5 squares. An ally doesn't take damage from being [force moved](../../movement/forced-movement/) this way."}]},{"kind":"ability","action":"triggered","name":"Catcher","usage":"Free triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature or object","sections":[{"label":"Trigger","text":"A size 1 creature or object is [force moved](../../movement/forced-movement/) within distance, or a size 1 ally willingly moves within distance."},{"label":"Effect","text":"The target is [grabbed](../../condition/grabbed/) by the commando."}]},{"kind":"ability","action":"main","name":"Face Grab","cost":"Encounter","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 damage; M \u003c STRONG [grabbed](../../condition/grabbed/)","low":"6 damage; M \u003c WEAK [grabbed](../../condition/grabbed/)","mid":"9 damage; M \u003c AVERAGE [grabbed](../../condition/grabbed/)"}},"sections":[{"label":"Effect","text":"While the target is [grabbed](../../condition/grabbed/) this way, they can't communicate and all creatures and objects have concealment from them."}]},{"kind":"ability","action":"main","name":"Shadow Drag","cost":"Encounter","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"Pull 12","low":"Pull 8","mid":"Pull 10"}},"sections":[{"label":"Effect","text":"The target takes 1 damage for each square they are [pulled](../../movement/forced-movement/)."}]},{"kind":"ability","action":"main","name":"Neck Snap","cost":"Encounter","usage":"Main action","keywords":["Melee"],"distance":"Melee 1","target":"One creature grabbed by the commando","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"24 damage","low":"12 damage","mid":"18 damage"}},"sections":[{"label":"Effect","text":"The target takes 15 damage, they are no longer [grabbed](../../condition/grabbed/), and they fall [prone](../../condition/prone/)."}]}]}
</script></div>
