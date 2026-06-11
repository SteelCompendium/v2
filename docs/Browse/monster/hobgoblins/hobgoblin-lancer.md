---
agility: 3
ev: 6 for four minions
free_strike: 2
immunities:
    - Fire 2
intuition: 2
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 1
name: Hobgoblin Lancer
organization: Minion
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.hobgoblins.statblock/hobgoblin-lancer
size: 1M
speed: 7
stability: 0
stamina: "8"
type: statblock
with_captain: +2 damage bonus to strikes
---

# Hobgoblin Lancer

---

<script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-lancer","name":"Hobgoblin Lancer","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Minion Harrier","roleKey":"harrier","ev":"6 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"8"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Fire 2","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Grim Thrust","cost":"Signature","usage":"Main action","keywords":["Magic","Melee","Ranged","Strike","Weapon"],"distance":"Melee 2 or ranged 5","target":"One creature or object per minion","powerRoll":{"formula":"+ 3","tiers":{"high":"6 corruption damage; push 2","low":"2 corruption damage","mid":"4 corruption damage; push 1"}},"sections":[{"label":"Effect","text":"The lancer deals an extra 2 damage if they have high ground against the target."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the lancer is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the lancer takes 2 fire damage."}]}
</script>
