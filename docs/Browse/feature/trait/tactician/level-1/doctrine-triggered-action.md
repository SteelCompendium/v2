---
class: tactician
level: "1"
name: Doctrine Triggered Action
scc: mcdm.heroes.v1/feature.trait.tactician.level-1/doctrine-triggered-action
type: trait
---

# Doctrine Triggered Action

---

<section class="sc-trait sc-trait--crest sc-trait--lead" data-action="trait" data-sub="4">
<header class="sc-trait__head">
<span class="sc-crest sc-trait__crest"><span class="sc-trait__glyph">*</span></span>
<div class="sc-trait__titles">
<div class="sc-trait__eyebrow"><span class="sc-trait__dia"></span>Tactician Trait</div>
<h3 class="sc-trait__name">Doctrine Triggered Action</h3>
</div>
<div class="sc-trait__tag">Level <span class="num">1</span></div>
</header>
<div class="sc-trait__body">
<p>Your <a href="../tactical-doctrine/">tactical doctrine</a> grants you a triggered action, as shown on the Doctrine Triggered Actions table.</p>
<div class="sc-trait__nest">
<section class="sc-trait" data-action="trait">
<header class="sc-trait__head">
<div class="sc-trait__titles">
<h3 class="sc-trait__name">Doctrine Triggered Actions Table</h3>
</div>
</header>
<div class="sc-trait__body">
<table><thead><tr><th>Doctrine</th><th>Triggered Action</th></tr></thead><tbody><tr><td>Insurgent</td><td><a href="../../../../ability/tactician/level-1/advanced-tactics/">Advanced Tactics</a></td></tr><tr><td>Mastermind</td><td><a href="../../../../ability/tactician/level-1/overwatch/">Overwatch</a></td></tr><tr><td>Vanguard</td><td><a href="../../../../ability/tactician/level-1/parry/">Parry</a></td></tr></tbody></table>
</div>
</section>
<article class="sc-ability sc-fil" data-action="triggered">
<div class="sc-ability__head">
<span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">)</span></span>
<div class="sc-ability__titles">
<div class="sc-ability__eyebrow"><span class="sc-ability__dia"></span>Triggered Action</div>
<h3 class="sc-ability__name">Advanced Tactics</h3>
</div>
<div class="sc-ability__corner"></div>
</div>
<p class="sc-ability__flavor">Your leadership aids an ally.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One ally</div></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div>
<div class="sc-ability__section-body"><p>The target deals damage to another creature.</p></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>The target gains 2 surges, which they can use on the triggering damage.</p></div>
</div>
<div class="sc-ability__enh"><span class="cost">Spend 1 Focus</span><span class="txt">If the damage has any potency effect associated with it, the potency is increased by 1.</span></div>
</article>
<article class="sc-ability sc-fil" data-action="triggered">
<div class="sc-ability__head">
<span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">)</span></span>
<div class="sc-ability__titles">
<div class="sc-ability__eyebrow"><span class="sc-ability__dia"></span>Triggered Action</div>
<h3 class="sc-ability__name">Overwatch</h3>
</div>
<div class="sc-ability__corner"></div>
</div>
<p class="sc-ability__flavor">Under your direction, an ally waits for just the right moment to strike.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div>
<div class="sc-ability__section-body"><p>The target moves.</p></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>At any time during the target&#39;s movement, one ally can make a free strike against them.</p></div>
</div>
<div class="sc-ability__enh"><span class="cost">Spend 1 Focus</span><span class="txt">If the target has R &lt; AVERAGE, they are <a href="../../../../../condition/slowed/">slowed</a> (EoT).</span></div>
</article>
<article class="sc-ability sc-fil" data-action="triggered">
<div class="sc-ability__head">
<span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">)</span></span>
<div class="sc-ability__titles">
<div class="sc-ability__eyebrow"><span class="sc-ability__dia"></span>Triggered Action</div>
<h3 class="sc-ability__name">Parry</h3>
</div>
<div class="sc-ability__corner"></div>
</div>
<p class="sc-ability__flavor">Your quick reflexes cost an enemy the precision they seek.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 2</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self or one ally</div></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div>
<div class="sc-ability__section-body"><p>A creature deals damage to the target.</p></div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>You can <a href="../../../../../movement/shifting/">shift</a> 1 square. If the target is you, or if you end this <a href="../../../../../movement/shifting/">shift</a> adjacent to the target, the target takes half the damage. If the damage has any potency effect associated with it, the potency is decreased by 1.</p></div>
</div>
<div class="sc-ability__enh"><span class="cost">Spend 1 Focus</span><span class="txt">This ability&#39;s distance becomes Melee 1 + your Reason score, and you can <a href="../../../../../movement/shifting/">shift</a> up to a number of squares equal to your Reason score instead of 1 square.</span></div>
</article>
</div>
</div>
</section>
