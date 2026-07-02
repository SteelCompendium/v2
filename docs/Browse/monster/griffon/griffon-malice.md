---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 3 Malice
      distance: Self
      icon: "\U0001F464"
      keywords:
        - '-'
      name: Swoop
      sections:
        - label: Effect
          text: The griffon flies up to their speed, and can make a [free strike](../../feature/common/main-actions/free-strike.md) against each creature who makes an [opportunity attack](../../rule/combat/opportunity-attack.md) against them during this movement.
      target: Self
      usage: Maneuver
    - cost: 5 Malice
      icon: ❇️
      intro: A griffon acting this turn unleashes a hideous screech at one enemy within 5 squares of them, forcing that creature to make an **Intuition test**.
      name: Piercing Cry
      power_roll:
        tiers:
            high: No effect.
            low: '[Frightened](../../condition/frightened.md) (save ends)'
            mid: '[Frightened](../../condition/frightened.md) (EoT)'
    - body: Winds bluster and blow across the encounter map. Until the end of the encounter, each creature who can't fly or isn't mounted on a flying creature takes a −3 penalty to [stability](../../rule/character/stability.md), and any [forced movement](../../movement/forced-movement.md) effect targeting such a creature moves them an additional 5 squares.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Wildwinds
flavor: At the start of any griffon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Griffon Malice
scc: mcdm.monsters.v1/monster.griffon/griffon-malice
type: featureblock
---

# Griffon Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Griffon Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any griffon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Swoop</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The griffon flies up to their speed, and can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against each creature who makes an <a href="../../../rule/combat/opportunity-attack/">opportunity attack</a> against them during this movement.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Piercing Cry</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">A griffon acting this turn unleashes a hideous screech at one enemy within 5 squares of them, forcing that creature to make an <b>Intuition test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../../../condition/frightened/">Frightened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../condition/frightened/">Frightened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Wildwinds</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div></div></header></div>
<div class="fb__feat-body">Winds bluster and blow across the encounter map. Until the end of the encounter, each creature who can&#39;t fly or isn&#39;t mounted on a flying creature takes a −3 penalty to <a href="../../../rule/character/stability/">stability</a>, and any <a href="../../../movement/forced-movement/">forced movement</a> effect targeting such a creature moves them an additional 5 squares.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any griffon&#39;s turn, you can spend [Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 👤 **Swoop (3 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **-**       | **Maneuver** |&#10;&gt; |-------------|-------------:|&#10;&gt; | **📏 Self** |  **🎯 Self** |&#10;&gt;&#10;&gt; **Effect:** The griffon flies up to their speed, and can make a [free strike](../../feature/common/main-actions/free-strike.md) against each creature who makes an [opportunity attack](../../rule/combat/opportunity-attack.md) against them during this movement.&#10;&#10;&gt; ❇️ **Piercing Cry (5 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; A griffon acting this turn unleashes a hideous screech at one enemy within 5 squares of them, forcing that creature to make an **Intuition test**.&#10;&gt;&#10;&gt; - **≤11:** [Frightened](../../condition/frightened.md) (save ends)&#10;&gt; - **12-16:** [Frightened](../../condition/frightened.md) (EoT)&#10;&gt; - **17+:** No effect.&#10;&#10;&gt; 🌀 **Wildwinds (10 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Winds bluster and blow across the encounter map. Until the end of the encounter, each creature who can&#39;t fly or isn&#39;t mounted on a flying creature takes a −3 penalty to [stability](../../rule/character/stability.md), and any [forced movement](../../movement/forced-movement.md) effect targeting such a creature moves them an additional 5 squares."></template>
