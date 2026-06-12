---
printing: "1.01"
printing_book: "Bestiary"
agility: 2
ev: 11 for four minions
free_strike: 4
intuition: 1
keywords:
    - Giant
    - Troll
level: 9
might: 4
name: Troll Ravager
organization: Minion
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/monster.trolls.statblock/troll-ravager
size: "2"
speed: 8
stability: 2
stamina: "15"
type: statblock
weaknesses:
    - Acid 5
    - fire
with_captain: +2 bonus to speed
---

# Troll Ravager

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"troll-ravager","name":"Troll Ravager","ancestry":"Giant, Troll","level":"9","role":"Minion Harrier","roleKey":"harrier","ev":"11 for four minions","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"15"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"Acid 5, fire","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Dine and Dash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 4","tiers":{"high":"8 damage; the ravager shifts up to 3 squares","low":"4 damage; the ravager can shift 1 square","mid":"6 damage; the ravager shifts up to 2 squares"}},"sections":[{"label":"Effect","text":"The ravager's squad's Stamina pool regains Stamina equal to half the damage dealt."}]},{"kind":"passive","action":"passive","name":"Group Appetite","body":"The ravager dies only if their squad's Stamina pool is reduced to 0 Stamina by acid or fire damage, if they end their turn with 0 Stamina in their squad's Stamina pool, or if they take acid or fire damage while their squad's Stamina pool is at 0 Stamina."}]}
</script></div>
