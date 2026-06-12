---
printing: "1.01"
printing_book: "Bestiary"
agility: 0
ev: "8"
free_strike: 4
intuition: 2
keywords:
    - Dwarf
    - Humanoid
level: 1
might: 1
name: Dwarf Launcher
organization: Platoon
presence: 0
reason: 0
role: Hexer
scc: mcdm.monsters.v1/monster.dwarves.statblock/dwarf-launcher
size: 1M
speed: 5
stability: 3
stamina: "39"
type: statblock
---

# Dwarf Launcher

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"dwarf-launcher","name":"Dwarf Launcher","ancestry":"Dwarf, Humanoid","level":"1","role":"Platoon Hexer","roleKey":"hexer","ev":"8","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"39"},{"l":"Stability","v":"3"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Concussive Grenade","cost":"Signature","usage":"Main action","keywords":["Area","Ranged","Weapon"],"distance":"3 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 damage; push 3; M \u003c 2 slowed (save ends)","low":"3 damage; push 1","mid":"6 damage; push 3; M \u003c 1 slowed (save ends)"}},"sections":[{"label":"Effect","text":"A target restrained by a dwarf can be force moved by this ability. This forced movement doesn't end the restrained condition unless the Director determines otherwise."}]},{"kind":"ability","action":"main","name":"Sleep Grenade","cost":"3 Malice","usage":"Main action","keywords":["Ranged","Weapon"],"distance":"3 cube within 5","target":"Each enemy in the area","powerRoll":{"formula":"+ 2","tiers":{"high":"8 poison damage; I \u003c 2 dazed (save ends)","low":"3 poison damage; I \u003c 0 dazed (save ends)","mid":"6 poison damage; I \u003c 1 dazed (save ends)"}},"sections":[{"label":"Effect","text":"A target dazed this way treats their characteristic scores as 1 lower for the purpose of resisting potencies."}]},{"kind":"passive","action":"passive","name":"Indirect Fire","body":"The launcher ignores concealment and cover, and doesn't need line of effect to use their abilities as long as a size 1 opening exists between the dwarf and the target."}]}
</script></div>
