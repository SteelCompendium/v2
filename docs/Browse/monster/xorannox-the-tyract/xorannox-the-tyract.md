---
agility: 2
ev: "96"
free_strike: 7
intuition: 3
keywords:
    - Horror
    - Overmind
level: 6
might: 4
movement: Fly, hover
name: Xorannox the Tyract
organization: Solo
presence: 3
reason: 4
scc: mcdm.monsters.v1/monster.xorannox-the-tyract.statblock/xorannox-the-tyract
size: "3"
speed: 5
stability: 2
stamina: "450"
type: statblock
---

# Xorannox the Tyract

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"xorannox-the-tyract","name":"Xorannox the Tyract","ancestry":"Horror, Overmind","level":"6","role":"Solo","roleKey":"solo","ev":"96","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"450"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+3"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"passive","action":"passive","name":"Solo Monster","sections":[{"label":"End Effect","text":"At the end of each of his turns, Xorannox can take 10 damage to end one effect on him that can be ended by a saving throw. This damage can't be reduced in any way."},{"label":"Solo Turns","text":"Xorannox can take two turns each round. He can't take turns consecutively."}]},{"kind":"passive","action":"passive","name":"Eyes of the Tyract","body":"Six unique eyestalks float around Xorannox, acting on his turn at his command until they are reduced to 0 Stamina. On each of Xorannox's turns, he directs one eyestalk to move and use a signature ability."},{"kind":"ability","action":"main","name":"Toothful Thrashing","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 4","tiers":{"high":"23 damage; vertical slide 3; M \u003c 4 bleeding (EoT)","low":"12 damage; slide 2; M \u003c 2 bleeding (EoT)","mid":"20 damage; slide 3; M \u003c 3 bleeding (EoT)"}}},{"kind":"ability","action":"main","name":"Grav Spike","usage":"Main action","keywords":["Area","Psionic"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"Vertical push 7","low":"Vertical push 3","mid":"Vertical push 5"}},"sections":[{"label":"Effect","text":"Xorannox shifts up to his speed before or after using this ability."}]},{"kind":"ability","action":"maneuver","name":"Optical Collusion","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Xorannox commands all his eyestalks to move up to their speed."}]},{"kind":"ability","action":"maneuver","name":"Shutout","cost":"2 Malice","usage":"Maneuver","keywords":["Area"],"distance":"5 x 2 line within 1","target":"Special","sections":[{"label":"Effect","text":"Xorannox ends all ongoing supernatural effects and suppresses supernatural effects from treasures in the area. New supernatural effects can't be activated in the area until the end of Xorannox's next turn."}]},{"kind":"ability","action":"triggered","name":"Cower!","usage":"Triggered action","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to Xorannox."},{"label":"Effect","text":"If the target has I \u003c 3 they are frightened (save ends)"}]},{"kind":"passive","action":"passive","name":"Above It All","body":"Xorannox can't be made frightened or knocked prone, and he can't be flanked."},{"kind":"passive","action":"passive","name":"Natural Enemies","body":"If Xorannox perceives another overmind or a voiceless talker on the encounter map, he targets that threat one or more times on each of his turns."},{"kind":"villain","action":"villain","name":"Disruption Beam","cost":"Villain Action 1","keywords":["Psionic","Ranged","Strike"],"distance":"Ranged 10","target":"Three creatures","powerRoll":{"formula":"+ 4","tiers":{"high":"20 psychic damage; R \u003c 4 dazed (save ends)","low":"11 psychic damage; R \u003c 2 dazed (save ends)","mid":"17 psychic damage; R \u003c 3 dazed (save ends)"}}},{"kind":"villain","action":"villain","name":"All Eyes, All Rise","cost":"Villain Action 2","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Xorannox recreates any destroyed eyestalks, which return in unoccupied spaces on the encounter map with full Stamina."}]},{"kind":"villain","action":"villain","name":"Panoptibeam","cost":"Villain Action 3","keywords":["Area"],"distance":"2 burst","target":"Each enemy in the area","sections":[{"label":"Effect","text":"Xorannox directs each of his eyestalks to use a signature ability against any target."}]}]}
</script></div>
