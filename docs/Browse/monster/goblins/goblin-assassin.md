---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: "3"
free_strike: 2
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: -2
movement: Climb
name: Goblin Assassin
organization: Horde
presence: -2
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/monster.goblins.statblock/goblin-assassin
size: 1S
speed: 6
stability: 0
stamina: "15"
type: statblock
---

# Goblin Assassin

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"goblin-assassin","name":"Goblin Assassin","ancestry":"Goblin, Humanoid","level":"1","role":"Horde Ambusher","roleKey":"ambusher","ev":"3","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"-2"}],"features":[{"kind":"ability","action":"main","name":"Sword Stab","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ 2","tiers":{"high":"7 damage","low":"4 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"If this ability gains an edge or has a double edge, it deals an extra 2 damage."}]},{"kind":"ability","action":"main","name":"Shadow Chains","cost":"3 Malice","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"Three creatures","powerRoll":{"formula":"+ 2","tiers":{"high":"5 corruption damage; A \u003c 2 restrained (save ends)","low":"2 corruption damage; A \u003c 0 restrained (save ends)","mid":"4 corruption damage; A \u003c 1 restrained (save ends)"}}},{"kind":"passive","action":"passive","name":"Crafty","body":"The assassin doesn't provoke opportunity attacks by moving."},{"kind":"passive","action":"passive","name":"Slip Away","body":"The assassin can attempt to hide even while observed."}]}
</script></div>
