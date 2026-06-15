---
printing: "1.0"
printing_book: "The Summoner"
features:
    - body: Each enemy that starts their [turn](../../../rule/combat/turn.md) within 3 squares of the boil is I < AVERAGE [taunted](../../../condition/taunted.md) (EoT) by the boil, or I < WEAK [taunted](../../../condition/taunted.md) (EoT) by the boil and can't move further from it.
      icon: ⭐️
      name: Hunger Thrush
    - body: When the boil is destroyed, each enemy within 3 squares of the boil takes acid [damage](../../../rule/damage/damage.md) equal to your level and is A < STRONG [weakened](../../../condition/weakened.md) (save ends).
      icon: ⭐️
      name: Oh, It Pops
name: The Boil
role: Support
scc: mcdm.summoner.v1/monster.fixture.demon.featureblock/the-boil
stats:
    - name: Stamina
      value: 20 + your level
    - name: Size
      value: "2"
terrain_type: Hazard
type: featureblock
---

# The Boil

---

<div class="fb-wrap" data-role="support">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Hazard · Support</div>
<h2 class="fb__name">The Boil</h2>
</header>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">20 + your level</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hunger Thrush</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each enemy that starts their <a href="../../../../rule/combat/turn/">turn</a> within 3 squares of the boil is I &lt; AVERAGE <a href="../../../../condition/taunted/">taunted</a> (EoT) by the boil, or I &lt; WEAK <a href="../../../../condition/taunted/">taunted</a> (EoT) by the boil and can&#39;t move further from it.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Oh, It Pops</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">When the boil is destroyed, each enemy within 3 squares of the boil takes acid <a href="../../../../rule/damage/damage/">damage</a> equal to your level and is A &lt; STRONG <a href="../../../../condition/weakened/">weakened</a> (save ends).</div>
</article>
</div>
</article>
</div>
