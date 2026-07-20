---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: Each square of plants must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without [shifting](../../movement/shifting.md).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Sleep Spores** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Magic
        - Melee
        - Strike
      name: Sleep Spores
      power_roll:
        formula: + 2
        tiers:
            high: M < 2 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
            low: M < 0 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: M < 1 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without [shifting](../../movement/shifting.md).
        - label: Effect
          text: While [dazed](../../condition/dazed.md) this way, a target who starts their turn in the area of the toxic plants falls [prone](../../condition/prone.md) and can't stand.
      target: The triggering creature
      usage: Free triggered action
    - body: |-
        **Poisonous Spores (+2 EV)** Any creature [dazed](../../condition/dazed.md) by this hazard takes 1d6 poison damage at the start of each of their turns.

        **Carnivorous Plants (+2 EV)** The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn [prone](../../condition/prone.md) in the area takes 4 acid damage.
      icon: ⭐️
      name: Upgrades
flavor: Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.
level: 2
name: Toxic Plants
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/toxic-plants
stats:
    - name: EV
      value: 2 per 10 x 10 field
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares
terrain_type: Hazard
type: dynamic-terrain
---

# Toxic Plants

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Toxic Plants</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="hexer">Hazard Hexer</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 2 per 10 x 10 field</div></div></header>
<div class="fb__flavor">Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2 per 10 x 10 field</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Each square of plants must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Sleep Spores</b> ability.</p></div></div>
<div class="fb__feat-body">A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without <a href="../../../movement/shifting/">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Sleep Spores</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">M &lt; 0 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">M &lt; 1 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">M &lt; 2 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without <a href="../../../movement/shifting/">shifting</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While <a href="../../../condition/dazed/">dazed</a> this way, a target who starts their turn in the area of the toxic plants falls <a href="../../../condition/prone/">prone</a> and can&#39;t stand.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Poisonous Spores (+2 EV)</b> Any creature <a href="../../../condition/dazed/">dazed</a> by this hazard takes 1d6 poison damage at the start of each of their turns.

<b>Carnivorous Plants (+2 EV)</b> The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn <a href="../../../condition/prone/">prone</a> in the area takes 4 acid damage.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.&#10;&#10;- **EV:** 2 per 10 x 10 field&#10;- **Stamina:** 3 per square&#10;- **Size:** One or more squares&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; Each square of plants must be individually destroyed.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without &#91;shifting](../../movement/shifting.md).&#10;&gt;&#10;&gt; **Effect:** The **Sleep Spores** ability.&#10;&#10;&gt; ❗️ **Sleep Spores**&#10;&gt;&#10;&gt; | **Magic, Melee, Strike** |      **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |--------------------------|-------------------------------:|&#10;&gt; | **📏 Melee 0**           | **🎯 The triggering creature** |&#10;&gt;&#10;&gt; **Trigger:** A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without &#91;shifting](../../movement/shifting.md).&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** M &lt; 0 &#91;dazed](../../condition/dazed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** M &lt; 1 &#91;dazed](../../condition/dazed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** M &lt; 2 &#91;dazed](../../condition/dazed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** While &#91;dazed](../../condition/dazed.md) this way, a target who starts their turn in the area of the toxic plants falls &#91;prone](../../condition/prone.md) and can&#39;t stand.&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Poisonous Spores (+2 EV)** Any creature &#91;dazed](../../condition/dazed.md) by this hazard takes 1d6 poison damage at the start of each of their turns.&#10;&gt;&#10;&gt; **Carnivorous Plants (+2 EV)** The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn &#91;prone](../../condition/prone.md) in the area takes 4 acid damage."></template>
