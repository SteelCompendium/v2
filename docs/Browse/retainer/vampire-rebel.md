---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 3
ev: '-'
free_strike: 4
intuition: 0
keywords:
    - Undead
    - Vampire
level: 4
might: 2
movement: Climb
name: Vampire Rebel
organization: Retainer
presence: 3
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/vampire-rebel
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Vampire Rebel

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"vampire-rebel","name":"Vampire Rebel","ancestry":"Undead, Vampire","level":"4","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Flashing Fangs","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"","tiers":{"high":"5 damage, 6 corruption damage; M \u003c STRONG [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","low":"5 damage","mid":"5 damage, 3 corruption damage"}},"sections":[{"label":"Effect","text":"The vampire rebel gains [temporary Stamina](../../rule/health/temporary-stamina/) equal to any corruption damage dealt."}],"trailing":"**2d10 + highest characteristic:**"},{"kind":"ability","action":"move","name":"Bat Form","cost":"Encounter","usage":"Move Action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"The vampire rebel changes their form into a bat. In bat form, their size is 1T and they can [fly](../../movement/fly/). The vampire rebel then [shifts](../../movement/shifting/) up to their speed, then regains their true form. If they can't fit in their current space when they return to their true form, they take 10 damage and are pushed to the nearest unoccupied space."}]},{"kind":"passive","action":"passive","name":"Agonizing Bloodthirst","body":"The vampire rebel has speed 10 while any creature within 10 squares of them is [bleeding](../../condition/bleeding/). If the vampire rebel is able to deal damage to a [bleeding](../../condition/bleeding/) creature on their turn and does not do so, they take 5 corruption damage at the end of their turn."}]}
</script></div>

<div class="fb-wrap" data-role="harrier">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Harrier Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Blood Surge</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; M &lt; WEAK <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; M &lt; AVERAGE <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; M &lt; STRONG <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Before the <a href="../../rule/combat/strike/">strike</a>, the vampire rebel <a href="../../movement/shifting/">shifts</a> up to their speed. If the vampire rebel has <a href="../../rule/health/temporary-stamina/">temporary Stamina</a>, they can expend it, dealing an extra 2 corruption damage for each point of <a href="../../rule/health/temporary-stamina/">temporary Stamina</a> expended this way.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Exsanguination</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 corruption damage; M &lt; WEAK <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 corruption damage; M &lt; AVERAGE <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 corruption damage; M &lt; STRONG <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
</div>
</article>
</div>
