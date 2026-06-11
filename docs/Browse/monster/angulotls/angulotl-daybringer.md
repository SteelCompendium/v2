---
agility: 2
ev: "12"
free_strike: 4
immunities:
    - Poison 3
intuition: 2
keywords:
    - Angulotl
    - Humanoid
level: 1
might: 3
movement: Climb, swim
name: Angulotl Daybringer
organization: Leader
presence: 0
reason: 0
scc: mcdm.monsters.v1/monster.angulotls.statblock/angulotl-daybringer
size: 1M
speed: 5
stability: 1
stamina: "80"
type: statblock
---

# Angulotl Daybringer

---

<script type="application/json" class="sc-statblock-data">
{"id":"angulotl-daybringer","name":"Angulotl Daybringer","ancestry":"Angulotl, Humanoid","level":"1","role":"Leader","roleKey":"leader","ev":"12","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"80"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Poison 3","weakness":"—","movement":"Climb, swim","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Acid Grasp","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"13 acid damage; A \u003c 3 dazed (save ends)","low":"7 acid damage; A \u003c 1 dazed (save ends)","mid":"10 acid damage; A \u003c 2 dazed (save ends)"}},"sections":[{"label":"Effect","text":"The next time the target makes a strike against the daybringer, the target takes 4 acid damage after the strike is resolved."}],"enhancements":[{"cost":"1 Malice","text":"The daybringer jumps up to 3 squares before or after using this ability."}]},{"kind":"ability","action":"maneuver","name":"Sun Lamp","usage":"Maneuver","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The daybringer expands their throat to make it resemble the sun until the start of their next turn. During that time, each angulotl who starts their turn within 10 squares of the daybringer regains 5 Stamina and gains a +3 bonus to speed until the end of their turn."}]},{"kind":"ability","action":"triggered","name":"Tongue Slap","usage":"Triggered action","keywords":["Melee"],"distance":"Melee 5","target":"One creature","sections":[{"label":"Trigger","text":"The target makes a strike against the daybringer or an ally that isn't a critical hit."},{"label":"Effect","text":"The outcome of the strike's power roll is reduced by one tier."}],"enhancements":[{"cost":"2 Malice","text":"The target is pulled up to 4 squares after the strike resolves."}]},{"kind":"passive","action":"passive","name":"Moisturizing End Effect","body":"At the end of each of the daybringer's turns, they can either take 5 damage or end the wet effect on an adjacent creature in order to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"New Dawn","cost":"Villain Action 1","keywords":["Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"Four **angulotl pollywogs** erupt from the daybringer's back and waddle into unoccupied spaces within distance."}]},{"kind":"villain","action":"villain","name":"Plague of Frogs","cost":"Villain Action 2","keywords":["Area"],"distance":"8 burst","target":"Self and each ally in the area","sections":[{"label":"Effect","text":"Each target can jump up to 4 squares. Each non-minion target can make a free strike at the end of the jump."}]},{"kind":"villain","action":"villain","name":"It Is Day","cost":"Villain Action 3","keywords":["-"],"distance":"Special","target":"Special","sections":[{"label":"Effect","text":"The encounter map dries up and each enemy and object on it is illuminated until the end of the encounter. An illuminated creature or object can't hide or become invisible, and any strike made against an illuminated target gains an edge. Additionally, each enemy in the encounter who is wet has that effect end and takes 6 acid damage. Each angulotl in the encounter has a double edge on their next strike."}]},{"kind":"passive","action":"passive","name":"Toxiferous","body":"Whenever an adjacent enemy grabs the daybringer or uses a melee ability against them, that enemy takes 3 poison damage."}]}
</script>
