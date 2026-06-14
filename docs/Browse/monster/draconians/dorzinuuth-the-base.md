---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "32"
free_strike: 7
immunities:
    - Lightning 6
intuition: 2
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: 4
movement: Fly, hover
name: Dorzinuuth the Base
organization: Leader
presence: 3
reason: 1
scc: mcdm.monsters.v1/monster.draconians.statblock/dorzinuuth-the-base
size: "2"
speed: 5
stability: 3
stamina: "180"
type: statblock
---

# Dorzinuuth the Base

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dorzinuuth-the-base","name":"Dorzinuuth the Base","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Leader","roleKey":"leader","ev":"32","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Lightning 6","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Punishing Flail","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 4","tiers":{"high":"19 damage; M \u003c 4 [prone](../../../condition/prone/)","low":"11 damage; M \u003c 2 [prone](../../../condition/prone/)","mid":"16 damage; M \u003c 3 [prone](../../../condition/prone/)"}},"enhancements":[{"cost":"2 [Malice](../../../rule/monster/malice/)","text":"If the target has M \u003c 4, they are also [bleeding](../../../condition/bleeding/) (save ends)."}]},{"kind":"ability","action":"maneuver","name":"I'll Cut A Path","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"5 x 2 line within 1","target":"Each enemy in the area","powerRoll":{"formula":"+ 4","tiers":{"high":"15 damage; M \u003c 4 [prone](../../../condition/prone/)","low":"7 damage","mid":"13 damage; M \u003c 3 [prone](../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"Before the power roll is made, Dorzinuuth [shifts](../../../movement/shifting/) to an unoccupied space [adjacent](../../../rule/combat/adjacent/) to the end of the line."}]},{"kind":"ability","action":"triggered","name":"Watch Your Six!","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 1","target":"One ally","sections":[{"label":"Trigger","text":"An ally within distance takes damage while Dorzinuuth isn't [flying](../../../movement/fly/)."},{"label":"Effect","text":"Dorzinuuth shields the triggering ally with his wings, halving the damage."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of his turns, Dorzinuuth can take 10 damage to end one effect on him that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"passive","action":"passive","name":"Remember Your Oath","body":"If Dorzinuuth hears a creature recite the Dragon Phalanx oath, he takes a [bane](../../../rule/dice/bane/) on strikes made against that character until the end of the encounter."},{"kind":"passive","action":"passive","name":"Sheltering Wings","body":"While Dorzinuuth isn't [flying](../../../movement/fly/), strikes made against him take a [bane](../../../rule/dice/bane/)."},{"kind":"villain","action":"villain","name":"Roaring Gambit","cost":"[Villain Action](../../../rule/monster/villain-action/) 1","keywords":["Area"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"","tiers":{"high":"No effect.","low":"[Frightened](../../../condition/frightened/) (save ends)","mid":"[Frightened](../../../condition/frightened/) (EoT)"}},"sections":[{"label":"Effect","text":"Dorzinuuth lets loose a powerful roar. Each target makes a **Reason test**."},{"label":"Effect","text":"Each ally in the area gains an [edge](../../../rule/dice/edge/) on their next strike."}]},{"kind":"villain","action":"villain","name":"Wings of Second Wind","cost":"[Villain Action](../../../rule/monster/villain-action/) 2","keywords":["Area"],"distance":"10 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target [shifts](../../../movement/shifting/) or [flies](../../../movement/fly/) up to their speed and regains 10 [Stamina](../../../rule/health/stamina/)."}]},{"kind":"villain","action":"villain","name":"Snap, Crackle, Pop","cost":"[Villain Action](../../../rule/monster/villain-action/) 3","keywords":["Area","Magic"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Dorzinuuth covers the targets in an electrifying mesh. Whenever a target takes damage from a melee ability, the attacker takes 6 lightning damage."}]}]}
</script></div>
