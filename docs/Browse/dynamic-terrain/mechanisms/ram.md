---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a ram can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The ram is deactivated and doesn't trigger.
            low: The creature triggers the ram and is affected as if in its space.
            mid: The ram is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: A [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Ram** ability.
    - distance: Special
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Ram
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; push 5
            low: 3 damage; slide 1, ignoring [stability](../../rule/character/stability.md)
            mid: 6 damage; push 3
      sections:
        - label: Trigger
          text: A [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
        - label: Special
          text: The area of this ability is the path the ram moves through from its starting position.
        - label: Effect
          text: A target slid by the ram ends up on one side of it or the other (choose randomly). The ram must be manually reset.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: |-
        **Stone (+1 EV)** The ram is made of stone, has 6 [Stamina](../../rule/health/stamina.md) per square, and deals an extra 1d3 damage.

        **Metal (+2 EV)** The ram is made of metal, has 9 [Stamina](../../rule/health/stamina.md) per square, and deals an extra 1d6 damage.

        **Repeating (+1 EV)** The ram automatically resets at the start of each round.

        **Rapid Repeating (+3 EV)** The ram automatically resets at the start of each turn.

        **Multiple Rams (+3 EV per additional ram)** Multiple rams can be used to represent a larger mechanism, such as a stack of tumbling logs.
      icon: ⭐️
      name: Upgrades
    - body: The ram is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A heavy wooden ram drops down or swings into the fray, crushing all in its path.
level: 2
name: Ram
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/ram
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: 3 per square
    - name: Size
      value: Any area; the area can't be moved through
    - name: Typical Space
      value: 1 x 3-square area or a 2 x 2-square area
    - name: Direction
      value: One side of the ram is defined as the front.
terrain_type: Trap
type: dynamic-terrain
---

# Ram

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ram</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="ambusher">Trap Ambusher</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 3</div></div></header>
<div class="fb__flavor">A heavy wooden ram drops down or swings into the fray, crushing all in its path.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">Any area; the area can&#39;t be moved through</div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">1 x 3-square area or a 2 x 2-square area</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">One side of the ram is defined as the front.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a ram can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the ram and is affected as if in its space.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The ram is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The ram is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Ram</b> ability.</p></div></div>
<div class="fb__feat-body">A <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ram</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 damage; slide 1, ignoring <a href="../../../rule/character/stability/">stability</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; push 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage; push 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The area of this ability is the path the ram moves through from its starting position.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target slid by the ram ends up on one side of it or the other (choose randomly). The ram must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Stone (+1 EV)</b> The ram is made of stone, has 6 <a href="../../../rule/health/stamina/">Stamina</a> per square, and deals an extra 1d3 damage.

<b>Metal (+2 EV)</b> The ram is made of metal, has 9 <a href="../../../rule/health/stamina/">Stamina</a> per square, and deals an extra 1d6 damage.

<b>Repeating (+1 EV)</b> The ram automatically resets at the start of each round.

<b>Rapid Repeating (+3 EV)</b> The ram automatically resets at the start of each turn.

<b>Multiple Rams (+3 EV per additional ram)</b> Multiple rams can be used to represent a larger mechanism, such as a stack of tumbling logs.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The ram is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A heavy wooden ram drops down or swings into the fray, crushing all in its path.&#10;&#10;- **EV:** 3&#10;- **Stamina:** 3 per square&#10;- **Size:** Any area; the area can&#39;t be moved through&#10;- **Typical Space:** 1 x 3-square area or a 2 x 2-square area&#10;- **Direction:** One side of the ram is defined as the front.&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to a ram can make an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** The creature triggers the ram and is affected as if in its space.&#10;&gt; - **12-16:** The ram is deactivated but the creature is &#91;slowed](../../condition/slowed.md) (EoT).&#10;&gt; - **17+:** The ram is deactivated and doesn&#39;t trigger.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A &#91;pressure plate](pressure-plate.md), &#91;switch](switch.md), or other linked trigger is activated.&#10;&gt;&#10;&gt; **Effect:** The **Ram** ability.&#10;&#10;&gt; ❗️ **Ram**&#10;&gt;&#10;&gt; | **Area, Weapon** |                   **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |------------------|--------------------------------------------:|&#10;&gt; | **📏 Special**   | **🎯 Each creature and object in the area** |&#10;&gt;&#10;&gt; **Trigger:** A &#91;pressure plate](pressure-plate.md), &#91;switch](switch.md), or other linked trigger is activated.&#10;&gt;&#10;&gt; **Special:** The area of this ability is the path the ram moves through from its starting position.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 3 damage; slide 1, ignoring &#91;stability](../../rule/character/stability.md)&#10;&gt; - **12-16:** 6 damage; push 3&#10;&gt; - **17+:** 9 damage; push 5&#10;&gt;&#10;&gt; **Effect:** A target slid by the ram ends up on one side of it or the other (choose randomly). The ram must be manually reset.&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Stone (+1 EV)** The ram is made of stone, has 6 &#91;Stamina](../../rule/health/stamina.md) per square, and deals an extra 1d3 damage.&#10;&gt;&#10;&gt; **Metal (+2 EV)** The ram is made of metal, has 9 &#91;Stamina](../../rule/health/stamina.md) per square, and deals an extra 1d6 damage.&#10;&gt;&#10;&gt; **Repeating (+1 EV)** The ram automatically resets at the start of each round.&#10;&gt;&#10;&gt; **Rapid Repeating (+3 EV)** The ram automatically resets at the start of each turn.&#10;&gt;&#10;&gt; **Multiple Rams (+3 EV per additional ram)** Multiple rams can be used to represent a larger mechanism, such as a stack of tumbling logs.&#10;&#10;&gt; ⭐️ **Hidden**&#10;&gt;&#10;&gt; The ram is hidden until triggered or detected."></template>
