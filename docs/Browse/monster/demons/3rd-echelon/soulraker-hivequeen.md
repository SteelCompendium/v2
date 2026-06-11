---
agility: -1
ev: "44"
free_strike: 9
intuition: 3
keywords:
    - Abyssal
    - Demon
    - Soulraker
level: 9
might: 5
movement: Fly
name: Soulraker Hivequeen
organization: Leader
presence: 2
reason: 3
scc: mcdm.monsters.v1/monster.demons.3rd-echelon.statblock/soulraker-hivequeen
size: "5"
speed: 6
stability: 2
stamina: "240"
type: statblock
weaknesses:
    - Holy 5
---

# Soulraker Hivequeen

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"soulraker-hivequeen","name":"Soulraker Hivequeen","ancestry":"Abyssal, Demon, Soulraker","level":"9","role":"Leader","roleKey":"leader","ev":"44","defenses":[{"l":"Size","v":"5"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"240"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"9"}],"meta":{"immunity":"—","weakness":"Holy 5","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+5"},{"l":"Agility","k":"A","v":"-1"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Stinging Ovipositor","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike"],"distance":"Melee 1 or ranged 10","target":"Two creatures","powerRoll":{"formula":"+ 5","tiers":{"high":"23 poison damage; M \u003c 5 the target is implanted","low":"14 poison damage; M \u003c 3 bleeding (save ends)","mid":"19 poison damage; M \u003c 4 bleeding (save ends)"}},"sections":[{"label":"Effect","text":"An implanted target has a soulraker handmaiden parasite gestating in them (see the handmaiden's Implanted Parasite trait)."}]},{"kind":"ability","action":"maneuver","name":"Forced Gestation","cost":"3 Malice","usage":"Maneuver","keywords":["Area"],"distance":"10 burst","target":"Each implanted handmaiden parasite in the area","sections":[{"label":"Effect","text":"The hivequeen lets loose a subsonic call to each target, forcing them to immediately emerge from their host's body as a mature soulraker handmaiden and make a free strike."}]},{"kind":"ability","action":"triggered","name":"For the Queen!","cost":"2 Malice","usage":"Triggered action","keywords":["Area"],"distance":"5 burst","target":"Special","sections":[{"label":"Trigger","text":"The hivequeen is targeted by a strike for the second time on an attacker's turn, whether by the attacker or another creature acting on the attacker's turn."},{"label":"Effect","text":"Two soulraker minions appear within distance."}],"enhancements":[{"cost":"2 Malice","text":"A soulraker praetorian also appears within distance."}]},{"kind":"passive","action":"passive","name":"Cannibal Queen","body":"At the end of their turn, the hivequeen can consume an adjacent soulraker demon to end one effect on them that can be ended by a saving throw (no action required)."},{"kind":"passive","action":"passive","name":"Hive Soulsight","body":"Any creature within 2 squares of a soulraker demon within 100 miles of the hivequeen can't be hidden from the hivequeen. The hivequeen has line of effect to such creatures."},{"kind":"villain","action":"villain","name":"Kicking the Nest","cost":"Villain Action 1","keywords":["Area"],"distance":"10 burst","target":"Each soulraker minion in the area","sections":[{"label":"Effect","text":"Each target can move their speed and make a free strike. If no minions are present, four soulraker minions are summoned into unoccupied spaces within distance before the hivequeen uses this villain action."}]},{"kind":"villain","action":"villain","name":"Buzz Off!","cost":"Villain Action 2","keywords":["Area"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"11 sonic damage; push 3; I \u003c 5 dazed (save ends)","low":"Push 3; I \u003c 3 dazed (save ends)","mid":"Push 3; I \u003c 4 dazed (save ends)"}},"sections":[{"label":"Effect","text":"The hivequeen shifts up to her speed."}]},{"kind":"villain","action":"villain","name":"Bomber Wasp Warfare","cost":"Villain Action 3","keywords":["Area","Magic","Ranged"],"distance":"Four 2 cubes within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"14 poison damage; M \u003c 5 bleeding (save ends)","low":"7 poison damage; M \u003c 3 bleeding (save ends)","mid":"11 poison damage; M \u003c 4 bleeding (save ends)"}}}]}
</script></div>
