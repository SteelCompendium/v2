---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
free_strike: 3
intuition: 0
keywords:
    - Humanoid
    - Orc
level: 1
might: 2
name: Orc Charger
organization: Retainer
presence: 0
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/orc-charger
size: 1M
speed: 8
stability: 0
stamina: "21"
type: statblock
---

# Orc Charger

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"orc-charger","name":"Orc Charger","ancestry":"Humanoid, Orc","level":"1","role":"Retainer Harrier","roleKey":"harrier","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"8"},{"l":"Stamina","v":"21"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Notched Axe","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Ranged","Strike","Weapon"],"distance":"Melee 1 or ranged 5","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"7 damage","low":"3 damage","mid":"5 damage"}}},{"kind":"passive","action":"passive","name":"Relentless","body":"If the charger is reduced to 0 [Stamina](../../rule/health/stamina/), they can make a [free strike](../../feature/common/main-actions/free-strike/) before dying. If the target of the [free strike](../../feature/common/main-actions/free-strike/) is reduced to 0 [Stamina](../../rule/health/stamina/), the charger is reduced to 1 [Stamina](../../rule/health/stamina/) instead."}]}
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
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Blood Oath</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Self</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the start of the charger&#39;s next turn, the charger and their mentor each have <a href="../../rule/health/temporary-stamina/">temporary Stamina</a> equal to their Recovery value and a +2 bonus to speed, and they each gain an edge on reactive tests.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Mow &#39;Em Down</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self; See below</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The charger moves in a straight line up to their speed. During this move, they ignore enemy <a href="../../feature/common/main-actions/free-strike/">free strikes</a>, and they can make a melee <a href="../../feature/common/main-actions/free-strike/">free strike</a> against any creature they move <a href="../../rule/combat/adjacent/">adjacent</a> to.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Vein Burst</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 psychic damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">18 psychic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">24 psychic damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The charger takes psychic damage equal to the number of enemies affected. This damage can&#39;t be reducetd in any way.</p></div></div>
</article>
</div>
</div>
</article>
</div>
