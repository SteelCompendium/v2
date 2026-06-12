---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "12"
free_strike: 4
intuition: 0
keywords:
    - Animal
    - Goblin
level: 1
might: 2
movement: Climb
name: War Spider
organization: Elite
presence: -3
reason: -4
role: Mount
scc: mcdm.monsters.v1/monster.goblins.statblock/war-spider
size: "3"
speed: 7
stability: 2
stamina: "60"
type: statblock
---

# War Spider

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"war-spider","name":"War Spider","ancestry":"Animal, Goblin","level":"1","role":"Elite Mount","roleKey":"mount","ev":"12","defenses":[{"l":"Size","v":"3"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"60"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-4"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Bite","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature","powerRoll":{"formula":"+ 2","tiers":{"high":"14 poison damage; M \u003c 2 weakened (save ends)","low":"7 poison damage","mid":"11 poison damage"}},"enhancements":[{"cost":"2 Malice","text":"For any tier outcome, if the target has M \u003c 3, they are weakened (save ends)."}]},{"kind":"ability","action":"main","name":"Leg Blade","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"12 damage","low":"6 damage","mid":"9 damage"}}},{"kind":"ability","action":"main","name":"Trample","cost":"5 Malice","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The spider shifts up to their speed and uses Leg Blade against each creature who comes adjacent to them during the shift. The spider makes one power roll against all targets."}]},{"kind":"ability","action":"maneuver","name":"Web","usage":"Maneuver","keywords":["Area","Weapon"],"distance":"3 cube within 1","target":"Each creature in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"A \u003c 2 restrained (save ends)","low":"A \u003c 0 restrained (save ends)","mid":"A \u003c 1 restrained (save ends)"}},"sections":[{"label":"Effect","text":"The area is difficult terrain for enemies."}]},{"kind":"ability","action":"triggered","name":"Skitter","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The spider or any ally riding the spider takes damage."},{"label":"Effect","text":"The damage is halved, and the spider shifts up to 2 squares after the triggering effect resolves."}]},{"kind":"passive","action":"passive","name":"Ride Launcher","body":"Any ally who leaps off the back of the spider can jump up to 6 squares without making a test, and takes no damage if they fall during the jump. After any ally jumps, the first melee strike the make on the same turn gains an edge."},{"kind":"passive","action":"passive","name":"Wide Back","body":"While riding the spider, two size 1 allies can occupy the same space."}]}
</script></div>
