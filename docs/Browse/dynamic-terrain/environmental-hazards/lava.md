---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: Each square of lava must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the lava or starts their turn there, or starts their turn [adjacent](../../rule/combat/adjacent.md) to the lava.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Liquid Hot Magma** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Liquid Hot Magma
      power_roll:
        formula: + 2
        tiers:
            high: 12 fire damage; M < 3 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            low: 5 fire damage; M < 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 fire damage; M < 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters the lava or starts their turn there, or starts their turn [adjacent](../../rule/combat/adjacent.md) to the lava.
        - label: Effect
          text: If the target is [adjacent](../../rule/combat/adjacent.md) to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava [adjacent](../../rule/combat/adjacent.md) to an existing square of lava.'
      icon: ⭐️
      name: Upgrade
flavor: A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.
level: 3
name: Lava
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/lava
stats:
    - name: EV
      value: 4 per 10 x 10 patch
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Immunity
      value: 20 to all damage except cold damage
terrain_type: Hazard
type: dynamic-terrain
---

# Lava

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Lava</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="hexer">Hazard Hexer</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 4 per 10 x 10 patch</div></div></header>
<div class="fb__flavor">A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">4 per 10 x 10 patch</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">12 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">20 to all damage except cold damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Each square of lava must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Liquid Hot Magma</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object enters the lava or starts their turn there, or starts their turn <a href="../../../rule/combat/adjacent/">adjacent</a> to the lava.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Liquid Hot Magma</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 fire damage; M &lt; 1 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 fire damage; M &lt; 2 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 fire damage; M &lt; 3 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters the lava or starts their turn there, or starts their turn <a href="../../../rule/combat/adjacent/">adjacent</a> to the lava.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target is <a href="../../../rule/combat/adjacent/">adjacent</a> to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Magma Flow (+4 EV)</b> The lava is flowing! At the start of each round, add one square of lava <a href="../../../rule/combat/adjacent/">adjacent</a> to an existing square of lava.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.&#10;&#10;- **EV:** 4 per 10 x 10 patch&#10;- **Stamina:** 12 per square&#10;- **Size:** One or more squares of &#91;difficult terrain](../../movement/difficult-terrain.md)&#10;- **Immunity:** 20 to all damage except cold damage&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; Each square of lava must be individually destroyed.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature or object enters the lava or starts their turn there, or starts their turn &#91;adjacent](../../rule/combat/adjacent.md) to the lava.&#10;&gt;&#10;&gt; **Effect:** The **Liquid Hot Magma** ability.&#10;&#10;&gt; ❗️ **Liquid Hot Magma**&#10;&gt;&#10;&gt; | **Melee, Strike** |                **Free triggered action** |&#10;&gt; |-------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 1**    | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object enters the lava or starts their turn there, or starts their turn &#91;adjacent](../../rule/combat/adjacent.md) to the lava.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 5 fire damage; M &lt; 1 the target is burning (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 9 fire damage; M &lt; 2 the target is burning (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 12 fire damage; M &lt; 3 the target is burning (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** If the target is &#91;adjacent](../../rule/combat/adjacent.md) to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.&#10;&#10;&gt; ⭐️ **Upgrade**&#10;&gt;&#10;&gt; **Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava &#91;adjacent](../../rule/combat/adjacent.md) to an existing square of lava."></template>
