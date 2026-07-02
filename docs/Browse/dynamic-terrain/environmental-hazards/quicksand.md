---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: '-'
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the quicksand or starts their turn there.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Grasping Depths** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Grasping Depths
      power_roll:
        formula: + 2
        tiers:
            high: M < 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: M < 0 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: M < 1 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters the quicksand or starts their turn there.
        - label: Effect
          text: This ability takes a bane if a triggering creature [shifted](../../movement/shifting.md) into the quicksand. A character who starts their turn [restrained](../../condition/restrained.md) this way is [suffocating](../../rule/health/suffocating.md).
      target: The triggering creature or object
      usage: Free triggered action
    - body: The quicksand is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: When this patch of sand is stepped on, it is revealed to be a slurry saturated by water—and ready to draw creatures down to their doom.
level: 3
name: Quicksand
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/quicksand
stats:
    - name: EV
      value: 3 per 10 x 10 patch
    - name: Stamina
      value: '-'
    - name: Size
      value: One or more squares
terrain_type: Hazard
type: dynamic-terrain
---

# Quicksand

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Quicksand</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="hexer">Hazard Hexer</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 3 per 10 x 10 patch</div></div></header>
<div class="fb__flavor">When this patch of sand is stepped on, it is revealed to be a slurry saturated by water—and ready to draw creatures down to their doom.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3 per 10 x 10 patch</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">-</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">-</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Grasping Depths</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object enters the quicksand or starts their turn there.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Grasping Depths</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">M &lt; 0 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">M &lt; 1 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">M &lt; 2 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters the quicksand or starts their turn there.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>This ability takes a bane if a triggering creature <a href="../../../movement/shifting/">shifted</a> into the quicksand. A character who starts their turn <a href="../../../condition/restrained/">restrained</a> this way is <a href="../../../rule/health/suffocating/">suffocating</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The quicksand is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="When this patch of sand is stepped on, it is revealed to be a slurry saturated by water—and ready to draw creatures down to their doom.&#10;&#10;- **EV:** 3 per 10 x 10 patch&#10;- **Stamina:** -&#10;- **Size:** One or more squares&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; -&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature or object enters the quicksand or starts their turn there.&#10;&gt;&#10;&gt; **Effect:** The **Grasping Depths** ability.&#10;&#10;&gt; ❗️ **Grasping Depths**&#10;&gt;&#10;&gt; | **Melee, Strike** |                **Free triggered action** |&#10;&gt; |-------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 0**    | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object enters the quicksand or starts their turn there.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** M &lt; 0 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** M &lt; 1 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** M &lt; 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** This ability takes a bane if a triggering creature [shifted](../../movement/shifting.md) into the quicksand. A character who starts their turn [restrained](../../condition/restrained.md) this way is [suffocating](../../rule/health/suffocating.md).&#10;&#10;&gt; ⭐️ **Hidden**&#10;&gt;&#10;&gt; The quicksand is hidden until triggered or detected."></template>
