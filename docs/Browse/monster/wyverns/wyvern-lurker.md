---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: "24"
free_strike: 6
immunities:
    - Acid 5
intuition: 1
keywords:
    - Beast
    - Wyvern
level: 4
might: 2
movement: Fly
name: Wyvern Lurker
organization: Elite
presence: 0
reason: -1
role: Ambusher
scc: mcdm.monsters.v1/monster.wyverns.statblock/wyvern-lurker
size: "2"
speed: 9
stability: 2
stamina: "120"
type: statblock
---

# Wyvern Lurker

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"wyvern-lurker","name":"Wyvern Lurker","ancestry":"Beast, Wyvern","level":"4","role":"Elite Ambusher","roleKey":"ambusher","ev":"24","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"9"},{"l":"Stamina","v":"120"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Acid 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Agonizing Stinger","cost":"Signature","usage":"Main action","keywords":["Magic","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"17 damage; M \u003c 3 bleeding (save ends)","low":"9 damage","mid":"14 damage; M \u003c 2 bleeding (save ends)"}},"enhancements":[{"cost":"1 Malice","text":"One target hidden from the lurker takes an extra 6 acid damage."}]},{"kind":"ability","action":"main","name":"Acidic Anguish","cost":"3 Malice","usage":"Main action","keywords":["Magic","Strike","Weapon"],"distance":"Melee 2","target":"One creature or object","powerRoll":{"formula":"+ 3","tiers":{"high":"20 acid damage; M \u003c 3 weakened (save ends)","low":"10 acid damage; M \u003c 1 weakened (save ends)","mid":"16 acid damage; M \u003c 2 weakened (save ends)"}},"sections":[{"label":"Effect","text":"A target weakened this way takes 1d4 acid damage at the start of each of their turns."}]},{"kind":"ability","action":"maneuver","name":"Swooping Torment","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The lurker flies up to their speed, then can attempt to hide. Each enemy the lurker moves adjacent to during this movement can choose to take 3 sonic damage or fall prone."}]},{"kind":"ability","action":"triggered","name":"Retaliatory Dive","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 5","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the lurker with a ranged ability."},{"label":"Effect","text":"The lurker flies adjacent to the target and can make a free strike against them."}]},{"kind":"passive","action":"passive","name":"Ruthless Rage","body":"While within 10 squares of another wyvern, the lurker deals an extra 3 damage with strikes."},{"kind":"passive","action":"passive","name":"Tenacious Hunter","body":"Any creature affected by a condition imposed by a wyvern can't be hidden from the lurker."}]}
</script></div>
