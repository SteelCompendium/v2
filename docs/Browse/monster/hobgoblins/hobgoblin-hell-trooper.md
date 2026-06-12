---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "12"
free_strike: 6
immunities:
    - Fire 4
intuition: 0
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 3
name: Hobgoblin Hell Trooper
organization: Platoon
presence: 1
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-hell-trooper
size: 1M
speed: 5
stability: 2
stamina: "70"
type: statblock
---

# Hobgoblin Hell Trooper

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-hell-trooper","name":"Hobgoblin Hell Trooper","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Platoon Brute","roleKey":"brute","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"70"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Fire 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Fire Flail","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 2","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"13 fire damage","low":"7 fire damage","mid":"10 fire damage"}},"sections":[{"label":"Effect","text":"Until the end of their turn, the trooper doesn't provoke opportunity attacks from any target."}]},{"kind":"ability","action":"maneuver","name":"Fight Me, Coward!","usage":"Maneuver","keywords":["Magic","Ranged"],"distance":"Ranged 5","target":"One creature","sections":[{"label":"Effect","text":"If the target has P \u003c 2, they are taunted (EoT). While taunted this way, the target takes 1d6 fire damage whenever they use an ability or strike that doesn't target the trooper."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the trooper is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the trooper takes 3 fire damage."}]}
</script></div>
