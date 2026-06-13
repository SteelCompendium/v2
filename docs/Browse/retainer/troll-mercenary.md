---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 6
intuition: 0
keywords:
    - Giant
    - Troll
level: 5
might: 3
name: Troll Mercenary
organization: Retainer
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/retainer.statblock/troll-mercenary
size: "2"
speed: 6
stability: 4
stamina: "57"
type: statblock
weaknesses:
    - Acid 5
    - fire
---

# Troll Mercenary

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"troll-mercenary","name":"Troll Mercenary","ancestry":"Giant, Troll","level":"5","role":"Retainer Brute","roleKey":"brute","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"57"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"Acid 5, fire","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Big Bite","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 damage","low":"6 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"The mercenary regains [Stamina](../../rule/health/stamina/) equal to half the damage dealt."}]},{"kind":"ability","action":"maneuver","name":"Troll Roar","cost":"Encounter","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"P \u003c STRONG [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends), push 3, [prone](../../condition/prone/)","low":"P \u003c WEAK [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends)","mid":"P \u003c AVERAGE [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends)"}}},{"kind":"passive","action":"passive","name":"Relentless Hunger","body":"The mercenary dies only if they are reduced to 0 [Stamina](../../rule/health/stamina/) by acid or fire damage, if they end their turn with 0 [Stamina](../../rule/health/stamina/), or if they take acid or fire damage while at 0 [Stamina](../../rule/health/stamina/)."},{"kind":"ability","action":"main","name":"Hangry Frenzy","cost":"Encounter","usage":"Main action","keywords":["Melee"],"distance":"Melee 1","target":"Three creatures","sections":[{"label":"Effect","text":"The mercenary must be [winded](../../rule/health/winded/) to use this ability. The mercenary uses Big Bite against each target."}]},{"kind":"ability","action":"triggered","name":"Fire Bad","cost":"Encounter","usage":"Triggered action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Trigger","text":"An ability deals acid or fire damage to the mercenary."},{"label":"Effect","text":"The mercenary moves up to their speed. If this movement takes them beyond the distance of the triggering ability, the ability has no effect on them."}]}]}
</script></div>
