---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 3 Malice
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      name: Alchemical Device
      power_roll:
        formula: + 2
        tiers:
            high: 9 corruption damage; A < 2 [restrained](../../condition/restrained.md) (save ends)
            low: 4 corruption damage; A < 0 [slowed](../../condition/slowed.md) (save ends)
            mid: 6 corruption damage; A < 1 [slowed](../../condition/slowed.md) (save ends)
      sections:
        - label: Special
          text: This ability can't be used by a [minion](../../rule/organization/minion.md).
      target: Each enemy and object in the area
      usage: Maneuver
    - body: Each human acting this turn gains an edge on abilities until the end of their turn, or has a double edge on any ability that targets an enemy affected by a condition.
      cost: 5 Malice
      icon: ⭐️
      name: Exploit Opening
    - body: Each non-[minion](../../rule/organization/minion.md) human in the encounter regains [Stamina](../../rule/health/stamina.md) equal to 5 times their level.
      cost: 7 Malice
      icon: ⭐️
      name: Staying Power
flavor: At the start of any human's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Human Malice
scc: mcdm.monsters.v1/monster.human/human-malice
type: featureblock
---

# Human Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Human Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any human&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Alchemical Device</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 corruption damage; A &lt; 0 <a href="../../../condition/slowed/">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 corruption damage; A &lt; 1 <a href="../../../condition/slowed/">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 corruption damage; A &lt; 2 <a href="../../../condition/restrained/">restrained</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../../../rule/organization/minion/">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Exploit Opening</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each human acting this turn gains an edge on abilities until the end of their turn, or has a double edge on any ability that targets an enemy affected by a condition.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Staying Power</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">Each non-<a href="../../../rule/organization/minion/">minion</a> human in the encounter regains <a href="../../../rule/health/stamina/">Stamina</a> equal to 5 times their level.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any human&#39;s turn, you can spend [Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 🔳 **Alchemical Device (3 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **Area, Magic, Ranged** |                             **Maneuver** |&#10;&gt; |-------------------------|-----------------------------------------:|&#10;&gt; | **📏 3 cube within 10** | **🎯 Each enemy and object in the area** |&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 4 corruption damage; A &lt; 0 [slowed](../../condition/slowed.md) (save ends)&#10;&gt; - **12-16:** 6 corruption damage; A &lt; 1 [slowed](../../condition/slowed.md) (save ends)&#10;&gt; - **17+:** 9 corruption damage; A &lt; 2 [restrained](../../condition/restrained.md) (save ends)&#10;&gt;&#10;&gt; **Special:** This ability can&#39;t be used by a [minion](../../rule/organization/minion.md).&#10;&#10;&gt; ⭐️ **Exploit Opening (5 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each human acting this turn gains an edge on abilities until the end of their turn, or has a double edge on any ability that targets an enemy affected by a condition.&#10;&#10;&gt; ⭐️ **Staying Power (7 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each non-[minion](../../rule/organization/minion.md) human in the encounter regains [Stamina](../../rule/health/stamina.md) equal to 5 times their level."></template>
