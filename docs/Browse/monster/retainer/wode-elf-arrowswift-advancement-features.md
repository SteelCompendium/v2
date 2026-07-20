---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Ranged 15
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 4
      name: Snipe
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage
            low: 7 damage
            mid: 11 damage
      sections:
        - label: Effect
          text: If the arrowswift is hidden when they use this ability, they gain 2 [surges](../../rule/resource/surge.md) that can be used immediately.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Self
      icon: "\U0001F464"
      level: 7
      name: Magic Arrows
      sections:
        - label: Effect
          text: Until the end of the encounter, whenever the arrowswift makes a ranged [strike](../../rule/combat/strike.md), the [strike](../../rule/combat/strike.md) gains an edge and the arrowswift gains 1 [surge](../../rule/resource/surge.md) that must be used immediately. While the arrowswift's mentor is [adjacent](../../rule/combat/adjacent.md) to them, the mentor also gains this benefit.
      target: Self
      usage: Maneuver
    - cost: Encounter
      distance: Ranged 15
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 10
      name: Double Shot
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 23 damage
            low: 12 damage
            mid: 17 damage
      target: Two creatures or objects
      usage: Main action
name: Wode Elf Arrowswift Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/wode-elf-arrowswift
type: featureblock
---

# Wode Elf Arrowswift Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Wode Elf Arrowswift Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Snipe</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 15</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the arrowswift is hidden when they use this ability, they gain 2 <a href="../../../rule/resource/surge/">surges</a> that can be used immediately.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Magic Arrows</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the end of the encounter, whenever the arrowswift makes a ranged <a href="../../../rule/combat/strike/">strike</a>, the <a href="../../../rule/combat/strike/">strike</a> gains an edge and the arrowswift gains 1 <a href="../../../rule/resource/surge/">surge</a> that must be used immediately. While the arrowswift&#39;s mentor is <a href="../../../rule/combat/adjacent/">adjacent</a> to them, the mentor also gains this benefit.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Double Shot</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 15</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Two creatures or objects</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">17 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">23 damage</span></div></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Retainer Advancement Ability**&#10;&#10;&gt; 🏹 **Snipe (Encounter)**&#10;&gt;&#10;&gt; | **Ranged, Strike, Weapon** |     **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |----------------------------|--------------------:|&#10;&gt; | **📏 Ranged 15**           | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage&#10;&gt; - **12-16:** 11 damage&#10;&gt; - **17+:** 16 damage&#10;&gt;&#10;&gt; **Effect:** If the arrowswift is hidden when they use this ability, they gain 2 &#91;surges](../../rule/resource/surge.md) that can be used immediately.&#10;&#10;&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 👤 **Magic Arrows (Encounter)**&#10;&gt;&#10;&gt; | **-**       | **&#91;Maneuver](../../rule/combat/turn.md)** |&#10;&gt; |-------------|-------------:|&#10;&gt; | **📏 Self** |  **🎯 Self** |&#10;&gt;&#10;&gt; **Effect:** Until the end of the encounter, whenever the arrowswift makes a ranged &#91;strike](../../rule/combat/strike.md), the &#91;strike](../../rule/combat/strike.md) gains an edge and the arrowswift gains 1 &#91;surge](../../rule/resource/surge.md) that must be used immediately. While the arrowswift&#39;s mentor is &#91;adjacent](../../rule/combat/adjacent.md) to them, the mentor also gains this benefit.&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; 🏹 **Double Shot (Encounter)**&#10;&gt;&#10;&gt; | **Ranged, Strike, Weapon** |                 **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |----------------------------|--------------------------------:|&#10;&gt; | **📏 Ranged 15**           | **🎯 Two creatures or objects** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 12 damage&#10;&gt; - **12-16:** 17 damage&#10;&gt; - **17+:** 23 damage"></template>
