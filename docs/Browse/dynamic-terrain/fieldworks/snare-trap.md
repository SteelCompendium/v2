---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a snare trap can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its space.
            mid: The trap is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A triggering creature or object ends their movement and is targeted by the **Snare** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Snare
      power_roll:
        formula: + 2
        tiers:
            high: 3 damage; A < 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: The target [shifts](../../movement/shifting.md) 1 square away from the snare.
            mid: 1 damage; A < 1 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's space.
        - label: Effect
          text: A creature [restrained](../../condition/restrained.md) this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful [save](../../rule/general/saving-throw.md), the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Net Trap (+1 EV)** The snare becomes a net that can wrap up multiple targets. The net has 3 [Stamina](../../rule/health/stamina.md) and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their [save](../../rule/general/saving-throw.md) to end the [restrained](../../condition/restrained.md) effect ends that effect for all targets, who all fall to the ground.'
      icon: ⭐️
      name: Upgrade
    - body: The snare trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A rope snare is set to grab a target, leaving them hanging upside down.
level: 1
name: Snare Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/snare-trap
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "1"
    - name: Size
      value: 1S
terrain_type: Trap
type: dynamic-terrain
---

# Snare Trap

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Snare Trap</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="ambusher">Trap Ambusher</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 1</div></div></header>
<div class="fb__flavor">A rope snare is set to grab a target, leaving them hanging upside down.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a snare trap can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is affected as if in its space.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A triggering creature or object ends their movement and is targeted by the <b>Snare</b> ability.</p></div></div>
<div class="fb__feat-body">The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Snare</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The target <a href="../../../movement/shifting/">shifts</a> 1 square away from the snare.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">1 damage; A &lt; 1 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">3 damage; A &lt; 2 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object of the appropriate size enters the trap&#39;s space.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A creature <a href="../../../condition/restrained/">restrained</a> this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful <a href="../../../rule/general/saving-throw/">save</a>, the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Net Trap (+1 EV)</b> The snare becomes a net that can wrap up multiple targets. The net has 3 <a href="../../../rule/health/stamina/">Stamina</a> and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their <a href="../../../rule/general/saving-throw/">save</a> to end the <a href="../../../condition/restrained/">restrained</a> effect ends that effect for all targets, who all fall to the ground.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The snare trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A rope snare is set to grab a target, leaving them hanging upside down.&#10;&#10;- **EV:** 1&#10;- **Stamina:** 1&#10;- **Size:** 1S&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to a snare trap can make an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** The creature triggers the trap and is affected as if in its space.&#10;&gt; - **12-16:** The trap is deactivated but the creature is &#91;slowed](../../condition/slowed.md) (EoT).&#10;&gt; - **17+:** The trap is deactivated and doesn&#39;t trigger.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.&#10;&gt;&#10;&gt; **Effect:** A triggering creature or object ends their movement and is targeted by the **Snare** ability.&#10;&#10;&gt; ❗️ **Snare**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |                **Free triggered action** |&#10;&gt; |---------------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 0**            | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object of the appropriate size enters the trap&#39;s space.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** The target &#91;shifts](../../movement/shifting.md) 1 square away from the snare.&#10;&gt; - **12-16:** 1 damage; A &lt; 1 &#91;restrained](../../condition/restrained.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 3 damage; A &lt; 2 &#91;restrained](../../condition/restrained.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** A creature &#91;restrained](../../condition/restrained.md) this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful &#91;save](../../rule/general/saving-throw.md), the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.&#10;&#10;&gt; ⭐️ **Upgrade**&#10;&gt;&#10;&gt; **Net Trap (+1 EV)** The snare becomes a net that can wrap up multiple targets. The net has 3 &#91;Stamina](../../rule/health/stamina.md) and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their &#91;save](../../rule/general/saving-throw.md) to end the &#91;restrained](../../condition/restrained.md) effect ends that effect for all targets, who all fall to the ground.&#10;&#10;&gt; ⭐️ **Hidden**&#10;&gt;&#10;&gt; The snare trap is hidden until triggered or detected."></template>
