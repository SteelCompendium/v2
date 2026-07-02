---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a bear trap can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its space.
            mid: The trap is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: The bear trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A triggering creature or object ends their movement and is targeted by the **Bear Trap** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Bear Trap
      power_roll:
        formula: + 2
        tiers:
            high: 5 damage; A < 2 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 1 The target [shifts](../../movement/shifting.md) 1 square away from the trap.
            mid: 3 damage; A < 1 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's space.
        - label: Effect
          text: The bear trap must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: '**Chain (+1 EV)** The bear trap is attached to the ground by a steel chain. A target who would be made [slowed](../../condition/slowed.md) by the trap is [restrained](../../condition/restrained.md) instead.'
      icon: ⭐️
      name: Upgrade
    - body: The bear trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A set of spring-loaded steel jaws stands ready to snap shut when stepped on.
level: 1
name: Bear Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/bear-trap
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: "6"
    - name: Size
      value: 1S
terrain_type: Trap
type: dynamic-terrain
---

# Bear Trap

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bear Trap</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="ambusher">Trap Ambusher</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 2</div></div></header>
<div class="fb__flavor">A set of spring-loaded steel jaws stands ready to snap shut when stepped on.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">6</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a bear trap can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is affected as if in its space.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A triggering creature or object ends their movement and is targeted by the <b>Bear Trap</b> ability.</p></div></div>
<div class="fb__feat-body">The bear trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bear Trap</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">1 The target <a href="../../../movement/shifting/">shifts</a> 1 square away from the trap.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">3 damage; A &lt; 1 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage; A &lt; 2 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object of the appropriate size enters the trap&#39;s space.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The bear trap must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Chain (+1 EV)</b> The bear trap is attached to the ground by a steel chain. A target who would be made <a href="../../../condition/slowed/">slowed</a> by the trap is <a href="../../../condition/restrained/">restrained</a> instead.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The bear trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A set of spring-loaded steel jaws stands ready to snap shut when stepped on.&#10;&#10;- **EV:** 2&#10;- **Stamina:** 6&#10;- **Size:** 1S&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to a bear trap can make an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** The creature triggers the trap and is affected as if in its space.&#10;&gt; - **12-16:** The trap is deactivated but the creature is &#91;slowed](../../condition/slowed.md) (EoT).&#10;&gt; - **17+:** The trap is deactivated and doesn&#39;t trigger.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; The bear trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.&#10;&gt;&#10;&gt; **Effect:** A triggering creature or object ends their movement and is targeted by the **Bear Trap** ability.&#10;&#10;&gt; ❗️ **Bear Trap**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |                **Free triggered action** |&#10;&gt; |---------------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 0**            | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object of the appropriate size enters the trap&#39;s space.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 1 The target &#91;shifts](../../movement/shifting.md) 1 square away from the trap.&#10;&gt; - **12-16:** 3 damage; A &lt; 1 &#91;slowed](../../condition/slowed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 5 damage; A &lt; 2 &#91;slowed](../../condition/slowed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** The bear trap must be manually reset.&#10;&#10;&gt; ⭐️ **Upgrade**&#10;&gt;&#10;&gt; **Chain (+1 EV)** The bear trap is attached to the ground by a steel chain. A target who would be made &#91;slowed](../../condition/slowed.md) by the trap is &#91;restrained](../../condition/restrained.md) instead.&#10;&#10;&gt; ⭐️ **Hidden**&#10;&gt;&#10;&gt; The bear trap is hidden until triggered or detected."></template>
