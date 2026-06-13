---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 6
intuition: 0
keywords:
    - Humanoid
    - Kobold
level: 1
might: 2
name: Kobold Shieldbearer
organization: Retainer
presence: 0
reason: 0
role: Defender
scc: mcdm.monsters.v1/retainer.statblock/kobold-shieldbearer
size: "2"
speed: 5
stability: 4
stamina: "21"
type: statblock
---

# Kobold Shieldbearer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"kobold-shieldbearer","name":"Kobold Shieldbearer","ancestry":"Humanoid, Kobold","level":"1","role":"Retainer Defender","roleKey":"defender","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gladius","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage; [taunted](../../condition/taunted/) (EoT)","low":"3 damage","mid":"5 damage"}}},{"kind":"passive","action":"passive","name":"Shield, Boss?","body":"While the shieldbearer is [adjacent](../../rule/combat/adjacent/) to their mentor, both have a +1 bonus to [stability](../../rule/character/stability/), have [cover](../../rule/combat/cover/), and grant [cover](../../rule/combat/cover/) to allies."}]}
</script></div>

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Defender Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Shield Block</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The shieldbearer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The mentor takes damage from a strike while within distance.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shieldbearer blocks the <a href="../../rule/combat/strike/">strike</a> (if <a href="../../rule/combat/adjacent/">adjacent</a> to the mentor) or throws their shield into the mentor&#39;s space. The triggering <a href="../../rule/combat/strike/">strike</a>&#39;s damage is halved and the <a href="../../rule/character/potency/">potency</a> of any <a href="../../rule/character/potency/">potency</a> effects is reduced by 1. If the shieldbearer threw their shield, it bounces back to their hand.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Living Backpack</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The shieldbearer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shieldbearer straps their shield on their back and climbs onto their mentor&#39;s back, entering the mentor&#39;s space. While the shieldbearer is on their mentor&#39;s back, each of them gains 10 <a href="../../rule/health/temporary-stamina/">temporary Stamina</a> and can use Shield Block as a triggered action targeting an ally instead of the shieldbearer&#39;s mentor. Additionally, the shieldbearer moves with the mentor, and they can&#39;t use main actions, maneuvers, or move actions except to end this effect as a maneuver. The effect also ends if the shieldbearer is <a href="../../movement/forced-movement/">force moved</a> away from their mentor or knocked <a href="../../condition/prone/">prone</a>. If the shieldbearer is still in their mentor&#39;s space when the effect ends, they move into an <a href="../../rule/combat/adjacent/">adjacent</a> unoccupied space of their choice.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Let&#39;s Go Sledding</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three enemies</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; M &lt; WEAK <a href="../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; M &lt; AVERAGE <a href="../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 damage; M &lt; STRONG <a href="../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If this ability is used as part of the <a href="../../feature/common/main-actions/charge/">Charge</a> main action, the shieldbearer gains 2 <a href="../../rule/resource/surge/">surges</a> that can be used immediately.</p></div></div>
</article>
</div>
</div>
</article>
</div>
