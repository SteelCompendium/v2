---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: 9 for four minions
free_strike: 3
immunities:
    - Corruption 7
    - poison 7
intuition: 1
keywords:
    - Undead
    - Vampire
level: 7
might: 4
movement: Climb
name: Blood-Starved Vampire
organization: Minion
presence: -3
reason: -3
role: Harrier
scc: mcdm.monsters.v1/monster.undead.3rd-echelon.statblock/blood-starved-vampire
size: 1M
speed: 6
stability: 0
stamina: "12"
type: statblock
with_captain: +3 bonus to speed
---

# Blood-Starved Vampire

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"blood-starved-vampire","name":"Blood-Starved Vampire","ancestry":"Undead, Vampire","level":"7","role":"Minion Harrier","roleKey":"harrier","ev":"9 for four minions","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"12"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"Corruption 7, poison 7","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-3"}],"features":[{"kind":"ability","action":"main","name":"Feeding Frenzy ([Signature Ability](../../../rule/combat/signature-ability.md))","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object per minion","powerRoll":{"formula":"+ 4","tiers":{"high":"7 damage; M \u003c 4 [bleeding](../../../../condition/bleeding/) (EoT)","low":"3 damage","mid":"6 damage"}},"sections":[{"label":"Effect","text":"If a target made [bleeding](../../../../condition/bleeding/) this way is already [bleeding](../../../../condition/bleeding/), they are instead knocked [prone](../../../../condition/prone/) and can't stand until the end of their next turn."}]},{"kind":"passive","action":"passive","name":"Unslakable Bloodthirst","body":"The blood-starved vampire has speed 10 while any creature within 10 squares of them is [bleeding](../../../../condition/bleeding/). The vampire must use Feeding Frenzy against a [bleeding](../../../../condition/bleeding/) creature on their turn if they are able to."}]}
</script></div>
