---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 2
intuition: 0
keywords:
    - Goblin
    - Humanoid
level: 1
might: -1
movement: Climb
name: Goblin Guide
organization: Retainer
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/goblin-guide
size: 1S
speed: 5
stability: 0
stamina: "21"
type: statblock
---

# Goblin Guide

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"goblin-guide","name":"Goblin Guide","ancestry":"Goblin, Humanoid","level":"1","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1S"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"—","weakness":"—","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Stabbity Stab","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}},"sections":[{"label":"Effect","text":"The target can't make opportunity attacks until the end of the guide's turn."}]},{"kind":"passive","action":"passive","name":"Crafty","body":"The guide doesn't provoke opportunity attacks by moving."}]}
</script></div>

<div class="fb-wrap" data-role="harrier">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Harrier Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Weaving Knives</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The guide <a href="../../movement/shifting/">shifts</a> up to their speed before and after the <a href="../../rule/combat/strike/">strike</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Sneak and Stab</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; the guide and their mentor can each move up to their speed</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; the guide and their mentor can each move up to their speed, then attempt to <a href="../../feature/common/maneuvers/hide/">hide</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the guide is hidden from the target, this ability has a double edge.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Poison Blade</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The guide applies poison to their weapon. The next time the guide obtains a tier 2 or tier 3 outcome on a weapon <a href="../../rule/combat/strike/">strike</a>, the <a href="../../rule/combat/strike/">strike</a> deals an extra 10 poison damage, and if the target has M &lt; AVERAGE, they are <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends). If the guide is <a href="../../rule/combat/adjacent/">adjacent</a> to their mentor when they use Poison Blade, they apply poison to the mentor&#39;s weapon in the same way.</p></div></div>
</article>
</div>
</div>
</article>
</div>
