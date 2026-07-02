---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: Until the end of the round, when an angulotl moves through an inactive angulotl's space, the inactive angulotl can use a free triggered action to jump 3 squares.
      cost: 3 Malice
      icon: ⭐️
      name: Leapfrog
    - cost: 5 Malice
      icon: ❇️
      intro: Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an **[Intuition](../../rule/character/intuition.md) test.**
      name: Resonating Croak
      power_roll:
        tiers:
            high: No effect.
            low: 5 sonic damage; [slowed](../../condition/slowed.md) ([EoT](../../rule/combat/end-of-turn.md))
            mid: 4 sonic damage
    - body: An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Rainfall
flavor: At the start of any angulotl's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Angulotl Malice
scc: mcdm.monsters.v1/monster.angulotl/angulotl-malice
type: featureblock
---

# Angulotl Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Angulotl Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any angulotl&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Leapfrog</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">Until the end of the round, when an angulotl moves through an inactive angulotl&#39;s space, the inactive angulotl can use a free triggered action to jump 3 squares.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Resonating Croak</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an <b><a href="../../../rule/character/intuition/">Intuition</a> test.</b></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 sonic damage; <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/combat/end-of-turn/">EoT</a>)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 sonic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Rainfall</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any angulotl&#39;s turn, you can spend Malice to activate one of the following features.&#10;&#10;&gt; ⭐️ **Leapfrog (3 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Until the end of the round, when an angulotl moves through an inactive angulotl&#39;s space, the inactive angulotl can use a free triggered action to jump 3 squares.&#10;&#10;&gt; ❇️ **Resonating Croak (5 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each angulotl in the encounter puffs out their throat and starts loudly droning. Any non-angulotl adjacent to an angulotl makes an **[Intuition](../../rule/character/intuition.md) test.**&#10;&gt;&#10;&gt; - **≤11:** 5 sonic damage; [slowed](../../condition/slowed.md) ([EoT](../../rule/combat/end-of-turn.md))&#10;&gt; - **12-16:** 4 sonic damage&#10;&gt; - **17+:** No effect.&#10;&#10;&gt; 🌀 **Rainfall (7 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; An angulotl calls clouds to cover the encounter map and unleash rain until the end of the round. Any creature or object that is exposed to the sky is wet until the end of the encounter."></template>
