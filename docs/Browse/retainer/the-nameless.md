---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
free_strike: 6
immunities:
    - Corruption 6
intuition: 1
keywords:
    - Draconian
    - Dragon
    - Humanoid
level: 6
might: 3
movement: Fly
name: The Nameless
organization: Retainer
presence: 2
reason: 1
role: Defender
scc: mcdm.monsters.v1/retainer.statblock/the-nameless
size: 1M
speed: 5
stability: 4
stamina: "66"
type: statblock
---

# The Nameless

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"the-nameless","name":"The Nameless","ancestry":"Draconian, Dragon, Humanoid","level":"6","role":"Retainer Defender","roleKey":"defender","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"66"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"Corruption 6","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+1"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Baneful Blade","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 damage; [push](../../movement/forced-movement/) 2","low":"6 damage","mid":"11 damage"}}},{"kind":"ability","action":"main","name":"I'm Not a Steed, You're Equipment","cost":"Encounter","usage":"Main action","keywords":["Melee"],"distance":"Melee 1","target":"The Nameless's mentor","sections":[{"label":"Effect","text":"The Nameless's mentor enters the Nameless's space and rides on their back. The Nameless or the mentor can move the mentor to an [adjacent](../../rule/combat/adjacent/) space as a free maneuver. While in the Nameless's space, the mentor moves with them and can't use their move action, and ability rolls against the mentor take a bane."}]},{"kind":"passive","action":"passive","name":"Wing Block","body":"Ranged strikes against the Nameless take a bane."}]}
</script></div>

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Defender Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Looming Wings</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 corruption damage; I &lt; WEAK <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 corruption damage; I &lt; AVERAGE <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 corruption damage; I &lt; STRONG <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the Nameless&#39;s mentor is in the area, ability rolls against the mentor have a double bane until the start of their next turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Spew Death</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 corruption damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 corruption damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The Nameless must be <a href="../../rule/health/winded/">winded</a> to use this ability.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Any living <a href="../../rule/organization/minion/">minions</a> reduced to 0 <a href="../../rule/health/stamina/">Stamina</a> by this ability regain all their <a href="../../rule/health/stamina/">Stamina</a> and become corporeal <a href="../../rule/keyword/undead/">undead</a> under the Nameless&#39;s control until the end of the Nameless&#39;s next turn, after which they are destroyed.</p></div></div>
</article>
</div>
</div>
</article>
</div>
