---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 4
ev: "84"
free_strike: 8
intuition: 0
keywords:
    - Accursed
    - Humanoid
    - Medusa
level: 5
might: 2
name: Medusa
organization: Solo
presence: 0
reason: 0
scc: mcdm.monsters.v1/monster.medusa.statblock/medusa
size: 1M
speed: 10
stability: 5
stamina: "420"
type: statblock
---

# Medusa

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"medusa","name":"Medusa","ancestry":"Accursed, Humanoid, Medusa","level":"5","role":"Solo","roleKey":"solo","ev":"84","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"10"},{"l":"Stamina","v":"420"},{"l":"Stability","v":"5"},{"l":"Free Strike","v":"8"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+4"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of their turns, the medusa can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"The medusa can take two turns each round. They can't take turns consecutively."}]},{"kind":"ability","action":"main","name":"Snake Bites","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; M \u003c 4 slowed (save ends)","low":"11 damage; M \u003c 2 slowed (save ends)","mid":"16 damage; M \u003c 3 slowed (save ends)"}}},{"kind":"ability","action":"main","name":"Damning Gaze","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; push 7","low":"11 damage; push 3","mid":"16 damage; push 5"}},"enhancements":[{"cost":"3 Malice","text":"The medusa targets two additional creatures or objects."}]},{"kind":"ability","action":"main","name":"Petrify","cost":"5 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"Slowed (save ends); or if M \u003c 4 restrained (save ends)","low":"M \u003c 2 restrained (save ends)","mid":"M \u003c 3 restrained (save ends)"}},"sections":[{"label":"Effect","text":"A target with cover reduces the potency by 1, while a slowed target increases the potency by 1. A target restrained this way magically begins to turn to stone, and a target who ends two consecutive turns restrained this way is petrified."}]},{"kind":"ability","action":"maneuver","name":"Nimble Escape","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The medusa shifts up to 3 squares and can attempt to hide even if observed."}]},{"kind":"ability","action":"triggered","name":"Venomous Spit","cost":"2 Malice","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"The triggering creature","powerRoll":{"formula":"+ 4","tiers":{"high":"22 acid damage","low":"13 acid damage","mid":"18 acid damage"}},"sections":[{"label":"Trigger","text":"A creature within distance deals damage to the medusa."}]},{"kind":"passive","action":"passive","name":"Cunning Edge","body":"The medusa gains an edge on power rolls against any creature who is restrained or slowed by Petrify."},{"kind":"passive","action":"passive","name":"Many Peering Eyes","body":"The medusa can't be flanked."},{"kind":"villain","action":"villain","name":"Mass Petrify","cost":"Villain Action 1","keywords":["Magic","Ranged"],"distance":"Ranged 50","target":"Each enemy","sections":[{"label":"Effect","text":"The medusa can use Petrify against each target without spending Malice. A target who doesn't have cover increases the potency by 1."}]},{"kind":"villain","action":"villain","name":"Serpent Wings","cost":"Villain Action 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The medusa temporarily manifests wings and flies up to their speed without provoking opportunity attacks. During or after this movement, they can use Snake Bites and Damning Gaze once each."}]},{"kind":"villain","action":"villain","name":"Stone Puppets","cost":"Villain Action 3","keywords":["Area","Magic"],"distance":"10 burst","target":"Special","powerRoll":{"formula":"+ 4","tiers":{"high":"17 acid damage; P \u003c 5 weakened (save ends)","low":"8 acid damage; P \u003c 3 weakened (save ends)","mid":"13 acid damage; P \u003c 4 weakened (save ends)"}},"sections":[{"label":"Effect","text":"As a free triggered action, each stone statue and creature restrained or slowed by Petrify within distance moves up to their speed and uses a signature ability that gains an edge, targeting an enemy of the medusa's choice. A stone statue without its own statistics has speed 5 and uses the medusa's free strike."}]}]}
</script></div>
