---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: '-'
free_strike: 5
intuition: 2
keywords:
    - Fey
    - Humanoid
    - Shadow Elf
level: 4
might: 1
movement: Climb
name: Shadow Elf Shade
organization: Retainer
presence: 1
reason: 0
role: Ambusher
scc: mcdm.monsters.v1/retainer.statblock/shadow-elf-shade
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Shadow Elf Shade

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"shadow-elf-shade","name":"Shadow Elf Shade","ancestry":"Fey, Humanoid, Shadow Elf","level":"4","role":"Retainer Ambusher","roleKey":"ambusher","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Gloom Dagger","cost":"Signature","usage":"Main action","keywords":["Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 3","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 damage","low":"6 damage","mid":"10 damage"}},"sections":[{"label":"Effect","text":"Whenever the shade starts their turn with concealment from the target, they gain 1 [surge](../../rule/resource/surge/)."}]},{"kind":"ability","action":"maneuver","name":"Duskfall","cost":"Encounter","usage":"Maneuver","keywords":["Area","Magic"],"distance":"3 cube within 1","target":"Special","sections":[{"label":"Effect","text":"Until the end of the next turn, the area is filled with darkness. The shade's mentor ignores concealment created by this darkness."}]},{"kind":"passive","action":"passive","name":"Of the Umbra","body":"The shade ignores concealment created by darkness. While the shade is in direct sunlight, they have [damage weakness](../../rule/damage/damage-weakness/) 3. While the shade has concealment, they have [damage immunity](../../rule/damage/damage-immunity/) 3."}]}
</script></div>

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Ambusher Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Slow-Poison Needle</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 poison damage; <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 poison damage; <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 poison damage; <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The slow-poison needle is initially painless, with the damage and effect delayed until the start of the target&#39;s next turn. If the shade is hidden, using this ability doesn&#39;t cause them to be revealed.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Shadow Dagger</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 poison damage; the target has shadowed vision (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">17 poison damage; the target has shadowed vision (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">23 poison damage; the target has shadowed vision (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While a creature has shadowed vision, all creatures have concealment from them.</p></div></div>
</article>
</div>
</div>
</article>
</div>
