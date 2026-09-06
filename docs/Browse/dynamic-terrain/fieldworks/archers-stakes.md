---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of stakes must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters an area of stakes from the front.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature takes 2 damage per square of stakes they enter. If they are [force moved](../../movement/forced-movement.md) into an area of stakes, they take an additional 3 damage.
    - body: |-
        **Poison (+2 EV)** The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns ([save](../../rule/general/saving-throw.md) ends).

        **Sticky (+3 EV)** A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the **Sticky Stakes** ability in addition to suffering the stakes' other effects.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Sticky Stakes
      power_roll:
        formula: + 2
        tiers:
            high: A < 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: No effect.
            mid: A < 1 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters an area of sticky stakes.
      target: The triggering creature or object
      usage: Free triggered action
    - body: Allies of this object ignore the [difficult terrain](../../movement/difficult-terrain.md) created by the stakes, take no damage from moving through the stakes unless they are [force moved](../../movement/forced-movement.md), and have [cover](../../rule/combat/cover.md) while in an area of archer's stakes.
      icon: ⭐️
      name: Allied Awareness
flavor: A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.
level: 1
name: Archer's Stakes
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/archers-stakes
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Typical Space
      value: 4 x 1-square area
    - name: Direction
      value: One side of the stakes is defined as the front.
terrain_type: Fortification
type: dynamic-terrain
---

# Archer's Stakes

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Archer&#39;s Stakes</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="defender">Fortification Defender</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 2</div></div></header>
<div class="fb__flavor">A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">4 x 1-square area</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">One side of the stakes is defined as the front.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-deactivate">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Each square of stakes must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-activate">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature takes 2 damage per square of stakes they enter. If they are <a href="../../../movement/forced-movement/">force moved</a> into an area of stakes, they take an additional 3 damage.</p></div></div>
<div class="fb__feat-body">A creature enters an area of stakes from the front.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-upgrades">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Poison (+2 EV)</b> The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns (<a href="../../../rule/general/saving-throw/">save</a> ends).

<b>Sticky (+3 EV)</b> A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the <b>Sticky Stakes</b> ability in addition to suffering the stakes&#39; other effects.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-sticky-stakes">Sticky Stakes</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">No effect.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">A &lt; 1 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">A &lt; 2 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters an area of sticky stakes.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-allied-awareness">Allied Awareness</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Allies of this object ignore the <a href="../../../movement/difficult-terrain/">difficult terrain</a> created by the stakes, take no damage from moving through the stakes unless they are <a href="../../../movement/forced-movement/">force moved</a>, and have <a href="../../../rule/combat/cover/">cover</a> while in an area of archer&#39;s stakes.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.&#10;&#10;- **EV:** 2&#10;- **Stamina:** 3 per square&#10;- **Size:** One or more squares of &#91;difficult terrain](../../movement/difficult-terrain.md)&#10;- **Typical Space:** 4 x 1-square area&#10;- **Direction:** One side of the stakes is defined as the front.&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; Each square of stakes must be individually destroyed.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature enters an area of stakes from the front.&#10;&gt;&#10;&gt; **Effect:** The triggering creature takes 2 damage per square of stakes they enter. If they are &#91;force moved](../../movement/forced-movement.md) into an area of stakes, they take an additional 3 damage.&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Poison (+2 EV)** The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns (&#91;save](../../rule/general/saving-throw.md) ends).&#10;&gt;&#10;&gt; **Sticky (+3 EV)** A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the **Sticky Stakes** ability in addition to suffering the stakes&#39; other effects.&#10;&#10;&gt; ❗️ **Sticky Stakes**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |                **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |---------------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 0**            | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object enters an area of sticky stakes.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** No effect.&#10;&gt; - **12-16:** A &lt; 1 &#91;slowed](../../condition/slowed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** A &lt; 2 &#91;restrained](../../condition/restrained.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&#10;&gt; ⭐️ **Allied Awareness**&#10;&gt;&#10;&gt; Allies of this object ignore the &#91;difficult terrain](../../movement/difficult-terrain.md) created by the stakes, take no damage from moving through the stakes unless they are &#91;force moved](../../movement/forced-movement.md), and have &#91;cover](../../rule/combat/cover.md) while in an area of archer&#39;s stakes."></template>
