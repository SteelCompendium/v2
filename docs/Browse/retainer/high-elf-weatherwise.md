---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 2
intuition: 0
keywords:
    - Fey
    - High Elf
    - Humanoid
level: 1
might: -1
name: High Elf Weatherwise
organization: Retainer
presence: 1
reason: 2
role: Controller
scc: mcdm.monsters.v1/retainer.statblock/high-elf-weatherwise
size: 1M
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# High Elf Weatherwise

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"high-elf-weatherwise","name":"High Elf Weatherwise","ancestry":"Fey, High Elf, Humanoid","level":"1","role":"Retainer Controller","roleKey":"controller","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Summer's Bolt","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 fire damage","low":"3 fire damage","mid":"5 fire damage"}},"sections":[{"label":"Effect","text":"If the weatherwise targets their mentor, the mentor ignores the damage and instead gains [temporary Stamina](../../rule/health/temporary-stamina/) equal to the damage dealt."}]},{"kind":"passive","action":"passive","name":"Otherworldly Grace","body":"At the start of each of their turns, the weatherwise can choose one effect on them that can be ended by a [saving throw](../../rule/general/saving-throw/). That effect instead ends at the end of their turn."}]}
</script></div>

<div class="fb-wrap" data-role="controller">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Controller Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Winter&#39;s Breath</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 cold damage; <a href="../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 cold damage; <a href="../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">8 cold damage; <a href="../../movement/forced-movement/">push</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The weatherwise can <a href="../../movement/teleport/">teleport</a> up to 5 squares before or after using this ability.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Spring&#39;s Rebirth</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each ally in the area</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target can spend a <a href="../../rule/health/recoveries/">Recovery</a>, and can choose one effect on them that can be ended by a <a href="../../rule/general/saving-throw/">saving throw</a>. That effect instead ends at the end of their turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Autumn&#39;s Decay</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage; P &lt; WEAK <a href="../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage; P &lt; AVERAGE <a href="../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage; P &lt; STRONG <a href="../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
</div>
</article>
</div>
