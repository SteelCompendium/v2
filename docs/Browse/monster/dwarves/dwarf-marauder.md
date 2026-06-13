---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: "20"
free_strike: 5
intuition: 1
keywords:
    - Dwarf
    - Humanoid
level: 3
might: 3
name: Dwarf Marauder
organization: Leader
presence: 0
reason: 2
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-marauder
size: 1M
speed: 5
stability: 4
stamina: "132"
type: statblock
---

# Dwarf Marauder

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-marauder","name":"Dwarf Marauder","ancestry":"Dwarf, Humanoid","level":"3","role":"Leader","roleKey":"leader","ev":"20","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"132"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Levitating Axes","cost":"Signature","usage":"Main action","keywords":["Melee","Psionic","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 10","target":"Two creatures or objects","powerRoll":{"formula":"+ 3","tiers":{"high":"15 damage; slide 5","low":"8 damage; slide 1","mid":"12 damage; slide 3"}},"sections":[{"label":"Effect","text":"A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}],"enhancements":[{"cost":"3 Malice","text":"A target force moved adjacent to an ally of the marauder lord is restrained until the end of their next turn."}]},{"kind":"ability","action":"maneuver","name":"Magnetomancy","usage":"Maneuver","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"One creature or object","sections":[{"label":"Effect","text":"The target vertical slides up to 5 squares. A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}],"enhancements":[{"cost":"5 Malice","text":"This ability takes the Area keyword and loses the Ranged keyword, its distance becomes a 10 burst, and it targets each restrained creature in the area."}]},{"kind":"ability","action":"triggered","name":"Your Weapon Is Useless","usage":"Triggered action","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"Self or one ally","sections":[{"label":"Trigger","text":"A creature makes a melee strike against the target."},{"label":"Effect","text":"The target halves any damage from the strike and the triggering creature takes 4 damage."}]},{"kind":"passive","action":"passive","name":"End Effect","body":"At the end of each of their turns, the marauder lord can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way."},{"kind":"villain","action":"villain","name":"Ajax Will Pay Well for These Specimens","cost":"Villain Action 1","keywords":["Area","Psionic","Ranged","Weapon"],"distance":"5 cube within 10","target":"Each enemy in the area","sections":[{"label":"Effect","text":"The marauder lord uses Levitating Axes against each target, making one power roll against all targets."}]},{"kind":"villain","action":"villain","name":"Don't Let Them Escape!","cost":"Villain Action 2","keywords":["Area"],"distance":"5 burst","target":"Each ally in the area","sections":[{"label":"Effect","text":"Each target shifts up to their speed. The marauder lord then uses Levitating Axes."}]},{"kind":"villain","action":"villain","name":"Test Your Metal!","cost":"Villain Action 3","keywords":["Psionic","Ranged"],"distance":"Ranged 10","target":"Special","sections":[{"label":"Effect","text":"The marauder lord creates three size 2 metal objects in unoccupied spaces within distance. Whenever the marauder lord uses Magnetomancy, they can additionally target one of these objects."}]}]}
</script></div>
