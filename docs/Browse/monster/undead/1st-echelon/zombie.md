---
agility: 1
ev: "3"
free_strike: 2
immunities:
    - Corruption 1
    - poison 1
intuition: -2
keywords:
    - Undead
    - Soulless
level: 1
might: 2
name: Zombie
organization: Horde
presence: 1
reason: -5
role: Brute
scc: mcdm.monsters.v1/monster.undead.1st-echelon.statblock/zombie
size: 1M
speed: 5
stability: 1
stamina: "20"
type: statblock
---

# Zombie

---

<script type="application/json" class="sc-statblock-data">
{"id":"zombie","name":"Zombie","ancestry":"Undead, Soulless","level":"1","role":"Horde Brute","roleKey":"brute","ev":"3","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"20"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 1, poison 1","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-5"},{"l":"Intuition","k":"I","v":"-2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Clobber and Clutch","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage; grabbed","low":"4 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"A target who starts their turn grabbed by the zombie takes 2 corruption damage. A creature who takes 5 or more corruption damage this way becomes insatiably hungry for flesh, and must complete the Find a Cure downtime project in Draw Steel: Heroes to end this effect."}]},{"kind":"ability","action":"maneuver","name":"Zombie Dust","cost":"3 Malice","usage":"Maneuver","keywords":["Area"],"distance":"2 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"4 corruption damage; M \u003c 2 dazed (save ends)","low":"2 corruption damage","mid":"3 corruption damage; M \u003c 1 weakened (save ends)"}},"sections":[{"label":"Effect","text":"The zombie falls prone, expelling a wave of rot and dust."}]},{"kind":"passive","action":"passive","name":"Endless Knight","body":"The first time the zombie is reduced to 0 Stamina by damage that isn't fire damage or holy damage and their body isn't destroyed, they instead have 10 Stamina and fall prone."}]}
</script>
