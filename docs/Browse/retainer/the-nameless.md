---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: '-'
free_strike: 6
immunities:
    - Corruption 6
intuition: 1
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: 3
movement: Fly
name: The Nameless
organization: Retainer
presence: 2
reason: 1
role: Defender
scc: mcdm.monsters.v1/retainer.statblock/the-nameless
size: 1M
speed: 5
stability: 4
stamina: "66"
type: statblock
---

# The Nameless

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"the-nameless","name":"The Nameless","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Retainer Defender","roleKey":"defender","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"66"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Corruption 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Baneful Blade","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 damage; push 2","low":"6 damage","mid":"11 damage"}}},{"kind":"ability","action":"main","name":"I'm Not a Steed, You're Equipment","cost":"Encounter","usage":"Main action","keywords":["Melee"],"distance":"Melee 1","target":"The Nameless's mentor","sections":[{"label":"Effect","text":"The Nameless's mentor enters the Nameless's space and rides on their back. The Nameless or the mentor can move the mentor to an adjacent space as a free maneuver. While in the Nameless's space, the mentor moves with them and can't use their move action, and ability rolls against the mentor take a bane."}]},{"kind":"passive","action":"passive","name":"Wing Block","body":"Ranged strikes against the Nameless take a bane."},{"kind":"ability","action":"main","name":"Looming Wings","cost":"Encounter","usage":"Main action","keywords":["Area","Weapon"],"distance":"1 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 corruption damage; I \u003c STRONG weakened (save ends)","low":"5 corruption damage; I \u003c WEAK weakened (save ends)","mid":"9 corruption damage; I \u003c AVERAGE weakened (save ends)"}},"sections":[{"label":"Effect","text":"If the Nameless's mentor is in the area, ability rolls against the mentor have a double bane until the start of their next turn."}]},{"kind":"ability","action":"main","name":"Spew Death","cost":"Encounter","usage":"Main action","keywords":["Area","Magic"],"distance":"5 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"21 corruption damage","low":"11 corruption damage","mid":"16 corruption damage"}},"sections":[{"label":"Special","text":"The Nameless must be winded to use this ability."},{"label":"Effect","text":"Any living minions reduced to 0 Stamina by this ability regain all their Stamina and become corporeal undead under the Nameless's control until the end of the Nameless's next turn, after which they are destroyed."}]}]}
</script></div>
