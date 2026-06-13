---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 2
immunities:
    - Corruption 3
    - poison 3
intuition: 0
keywords:
    - Undead
    - Soulless
level: 1
might: -4
movement: Fly, hover
name: Unquiet Spirit
organization: Retainer
presence: 2
reason: 0
role: Hexer
scc: mcdm.monsters.v1/retainer.statblock/unquiet-spirit
size: 1M
speed: 5
stability: 1
stamina: "21"
type: statblock
---

# Unquiet Spirit

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"unquiet-spirit","name":"Unquiet Spirit","ancestry":"Undead, Soulless","level":"1","role":"Retainer Hexer","roleKey":"hexer","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"2"}],"meta":{"immunity":"Corruption 3, poison 3","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-4"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Chill of Death","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 cold damage; P \u003c STRONG [slowed](../../condition/slowed/) (EoT)","low":"3 cold damage","mid":"5 cold damage"}}},{"kind":"ability","action":"main","name":"Spirit Meld","usage":"Main action","keywords":["-"],"distance":"Self","target":"Self","sections":[{"label":"Effect","text":"While [adjacent](../../rule/combat/adjacent/) to their mentor, the unquiet spirit enters the mentor's space. A spirit who enters their mentor's space this way moves with the mentor, can't be sensed, and can't affect or be affected by other creatures or objects. They can't take main actions, maneuvers, or move actions, except to use this ability to leave their mentor's space and appear in an [adjacent](../../rule/combat/adjacent/) space."}]},{"kind":"passive","action":"passive","name":"Corruptive Phasing","body":"The unquiet spirit can move through creatures and objects at their usual speed, but can't end their turn inside a creature or object. The first time in a round that the spirit moves through a creature other than their mentor, that creature takes 2 corruption damage."}]}
</script></div>

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Hexer Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Enervating Curse</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage; the target has 1 level of drain</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage; the target has 2 levels of drain</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage; the target has 3 levels of drain</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next creature to make a <a href="../../rule/combat/strike/">strike</a> against the target gains 1 <a href="../../rule/resource/surge/">surge</a> for each level of drain, which must be used on that <a href="../../rule/combat/strike/">strike</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Ectoplasm</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">A &lt; WEAK <a href="../../condition/slowed/">slowed</a> and <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">A &lt; AVERAGE <a href="../../condition/slowed/">slowed</a> and <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">A &lt; STRONG <a href="../../condition/slowed/">slowed</a> and <a href="../../condition/weakened/">weakened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Death Phase</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target has P &lt; STRONG, they are phased until the end of their next turn. A phased target gains the unquiet spirit&#39;s Corruptive Phasing trait and can <a href="../../movement/fly/">fly</a>. They are visible but can&#39;t affect or be affed by other creatures or objects. A willing creature not subject to the ability&#39;s <a href="../../rule/character/potency/">potency</a> can choose to automatically be affected.</p></div></div>
</article>
</div>
</div>
</article>
</div>
