---
agility: 2
ev: 6 for four minions
free_strike: 3
immunities:
    - Fire 2
intuition: 0
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 3
name: Hobgoblin Recruit
organization: Minion
presence: 1
reason: 0
role: Brute
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-recruit
size: 1M
speed: 5
stability: 0
stamina: "9"
type: statblock
with_captain: +4 bonus to Stamina
---

# Hobgoblin Recruit

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-recruit","name":"Hobgoblin Recruit","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Minion Brute","roleKey":"brute","ev":"6 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"9"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Fire 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Sword Lunge","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"7 damage; grabbed or prone","low":"3 damage","mid":"5 damage"}}},{"kind":"passive","action":"passive","name":"Tactical Positioning","body":"Any non-minion ally deals 1 extra damage for each recruit adjacent to them."},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the recruit is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the recruit takes 2 fire damage."}]}
</script></div>
