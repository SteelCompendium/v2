---
printing: "1.01"
printing_book: "Bestiary"
agility: 3
ev: "48"
free_strike: 10
intuition: 4
keywords:
    - Humanoid
    - Soulless
    - War Dog
level: 10
might: 1
movement: Fly, hover
name: Soulbinder Psyche
organization: Elite
presence: 5
reason: 3
role: Hexer
scc: mcdm.monsters.v1/monster.war-dogs.4th-echelon.statblock/soulbinder-psyche
size: 1M
speed: 5
stability: 1
stamina: "220"
type: statblock
---

# Soulbinder Psyche

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"soulbinder-psyche","name":"Soulbinder Psyche","ancestry":"Humanoid, Soulless, War Dog","level":"10","role":"Elite Hexer","roleKey":"hexer","ev":"48","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"220"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"10"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+4"},{"l":"Presence","k":"P","v":"+5"}],"features":[{"kind":"ability","action":"main","name":"Soulbind","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 5","tiers":{"high":"24 holy damage; R \u003c 5 the target is soulbound (save ends)","low":"15 holy damage; R \u003c 3 the target is soulbound (save ends)","mid":"20 holy damage; R \u003c 4 the target is soulbound (save ends)"}},"sections":[{"label":"Effect","text":"A soulbound creature can't benefit from edges or double edges, and can't gain or use surges."}]},{"kind":"ability","action":"main","name":"Soulstorm","cost":"2 Malice","usage":"Main action","keywords":["Area","Magic","Ranged"],"distance":"3 cube within 10","target":"Each enemy in the area","powerRoll":{"formula":"+ 5","tiers":{"high":"15 corruption damage; P \u003c 5 weakened (EoT)","low":"8 corruption damage; P \u003c 3 weakened (EoT)","mid":"12 corruption damage; P \u003c 4 weakened (EoT)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain until the start of Psyche's next turn At the start of each of her turns, Psyche can use a maneuver to maintain this effect, move the area up to 5 squares, and make the power roll against each creature in the area's new location."}],"enhancements":[{"cost":"1 Malice","text":"Until the start of Psyche's next turn, if this ability makes a creature weakened, that creature is also soulbound (save ends; see Soulbind above)."}]},{"kind":"ability","action":"maneuver","name":"Command the Awakened","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"5 burst","target":"Each soulbound enemy in the area","sections":[{"label":"Effect","text":"Each target takes 5 damage from a self-inflicted wound, and if they have M \u003c 4 Psyche slides them up to 5 squares."}]},{"kind":"ability","action":"triggered","name":"Spirit Form","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"An enemy moves within 2 squares of Psyche."},{"label":"Effect","text":"Psyche moves up to 5 squares, and has damage immunity 5 and ignores difficult terrain during this movement. The first time she moves through any creature during this movement, that creature takes 5 corruption damage."}]},{"kind":"ability","action":"triggered","name":"Vengeance for the Slain","usage":"Free triggered action","keywords":["Ranged"],"distance":"Ranged 10","target":"One enemy","sections":[{"label":"Trigger","text":"A war dog within distance is made winded or reduced to 0 Stamina."},{"label":"Effect","text":"The target loses all their surges and takes 5 corruption damage."}],"enhancements":[{"cost":"1 Malice","text":"The target also takes a bane on their next strike."}]},{"kind":"passive","action":"passive","name":"Immortal Soul","body":"When Psyche is reduced to 0 Stamina, her spirit surrounds the nearest war dog, who has damage immunity 2, deals an extra 5 damage on strikes, and can use the following Immortal Flare maneuver until the end of the encounter. That war dog also gains the Immortal Soul trait, and transfers this effect to the nearest war dog when they die."},{"kind":"ability","action":"maneuver","name":"Immortal Flare","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature or object","sections":[{"label":"Effect","text":"The target takes 10 psychic damage."}]}]}
</script></div>
