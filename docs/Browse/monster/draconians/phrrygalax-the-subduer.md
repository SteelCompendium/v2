---
agility: 2
ev: "32"
free_strike: 7
immunities:
    - Fire 6
intuition: 0
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: 3
movement: Fly
name: Phrrygalax the Subduer
organization: Elite
presence: 3
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.draconians.statblock/phrrygalax-the-subduer
size: 1L
speed: 5
stability: 3
stamina: "180"
type: statblock
---

# Phrrygalax the Subduer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"phrrygalax-the-subduer","name":"Phrrygalax the Subduer","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Elite Brute","roleKey":"brute","ev":"32","defenses":[{"l":"Size","v":"1L"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"180"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"7"}],"meta":{"immunity":"Fire 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Baneful Blade","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"19 damage; M \u003c 2 3 damage, bleeding (save ends)","low":"10 damage","mid":"16 damage; M \u003c 1 bleeding (save ends)"}}},{"kind":"ability","action":"main","name":"Spinning Spit","cost":"2 Malice","usage":"Main action","keywords":["Area","Magic"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 3","tiers":{"high":"16 fire damage","low":"7 fire damage","mid":"13 fire damage"}}},{"kind":"ability","action":"maneuver","name":"Heavy Landing","usage":"Maneuver","keywords":["Area"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"Phrrygalax flies up to his speed and lands in an unoccupied space on the ground. Each creature adjacent to where he lands who has A \u003c 2 is knocked prone."}]},{"kind":"ability","action":"triggered","name":"Armor of the Ancients","cost":"2 Malice","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"Phrrygalax takes acid, cold, corruption, fire, lightning, or poison damage."},{"label":"Effect","text":"Phrrygalax takes no damage and instead regains the same amount of Stamina. He then swaps his current damage immunity with the triggering damage type."}]},{"kind":"ability","action":"triggered","name":"Still Your Tongue!","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"Phrrygalax hears a creature within 5 squares reciting the oath of Good King Omund's Dragon Phalanx."},{"label":"Effect","text":"Phrrygalax shifts up to his speed and uses Baneful Blade against the triggering creature. That ability deals an extra 7 damage."}]},{"kind":"passive","action":"passive","name":"Oathbreaker's Vengeance","body":"Whenever Phrrygalax fails a saving throw, he deals an additional 7 damage on his next strike."}]}
</script></div>
