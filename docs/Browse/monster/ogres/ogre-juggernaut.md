---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: "16"
free_strike: 5
intuition: 0
keywords:
    - Giant
    - Ogre
level: 2
might: 2
name: Ogre Juggernaut
organization: Elite
presence: -1
reason: -1
role: Harrier
scc: mcdm.monsters.v1/monster.ogres.statblock/ogre-juggernaut
size: "2"
speed: 6
stability: 2
stamina: "80"
type: statblock
---

# Ogre Juggernaut

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"ogre-juggernaut","name":"Ogre Juggernaut","ancestry":"Giant, Ogre","level":"2","role":"Elite Harrier","roleKey":"harrier","ev":"16","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Pitchfork Catapult ([Signature Ability](../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 2","tiers":{"high":"13 damage; A \u003c 2 vertical [slide](../../../movement/forced-movement/) 3","low":"7 damage","mid":"10 damage; A \u003c 1 vertical [push](../../../movement/forced-movement/) 2"}},"enhancements":[{"cost":"1 [Malice](../../rule/monster/malice.md)","text":"Each target who has M \u003c 1 is [bleeding](../../../condition/bleeding/) (save ends)."}]},{"kind":"ability","action":"main","name":"Earth-Breaking Jump","usage":"Main action","keywords":["Area","Weapon"],"distance":"3 burst","target":"Each creature in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"9 damage; [push](../../../movement/forced-movement/) 4; M \u003c 2 [prone](../../../condition/prone/)","low":"4 damage","mid":"6 damage; [push](../../../movement/forced-movement/) 2; M \u003c 1 [prone](../../../condition/prone/)"}},"sections":[{"label":"Effect","text":"The juggernaut jumps up to 6 squares before using this ability."}]},{"kind":"ability","action":"maneuver","name":"Horrible Bellow (2 [Malice](../../rule/monster/malice.md))","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"I \u003c 2 [frightened](../../../condition/frightened/) (save ends)","low":"I \u003c 0 [frightened](../../../condition/frightened/) (save ends)","mid":"I \u003c 1 [frightened](../../../condition/frightened/) (save ends)"}},"sections":[{"label":"Effect","text":"While a target is [frightened](../../../condition/frightened/) this way, any ogre gains an edge on strikes against them."}]},{"kind":"ability","action":"triggered","name":"Hrraaaaaagh! (1 [Malice](../../rule/monster/malice.md))","usage":"Free triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"The juggernaut takes damage."},{"label":"Effect","text":"The juggernaut moves up to their speed and can make a [free strike](../../../feature/common/main-actions/free-strike/)."}]},{"kind":"passive","action":"passive","name":"Destructive Path","body":"The juggernaut automatically destroys any mundane size 1 objects in their path when they move or are [force moved](../../../movement/forced-movement/). They can break through any mundane wall made of wood, stone, or a similarly sturdy material this way as long as the wall is 2 squares thick or less."},{"kind":"passive","action":"passive","name":"Defiant Anger","body":"While [winded](../../../rule/health/winded/), the juggernaut has damage immunity 2."}]}
</script></div>
