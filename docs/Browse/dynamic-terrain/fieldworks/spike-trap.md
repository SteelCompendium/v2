---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a spike trap can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn't trigger.
            low: The creature triggers the trap and is affected as if in its area.
            mid: The trap is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spike Trap** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Area
        - Weapon
      name: Spike Trap
      power_roll:
        formula: + 2
        tiers:
            high: 6 damage; the target falls into the pit; A < 1 [prone](../../condition/prone.md); [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 3 damage; the target [shifts](../../movement/shifting.md) 1 square away from the trap
            mid: 4 damage; the target falls into the pit; A < 0 [prone](../../condition/prone.md)
      sections:
        - label: Trigger
          text: A creature or object of the appropriate size enters the trap's area.
        - label: Effect
          text: The target ends their movement when they enter the trap's area. The pit is typically 2 squares deep. The trap must be manually reset.
      target: The triggering creature or object
      usage: Free triggered action
    - body: The spike trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.
level: 2
name: Spike Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/spike-trap
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "6"
    - name: Size
      value: One or more squares
    - name: Typical Space
      value: 2 x 2-square area
terrain_type: Trap
type: dynamic-terrain
---

# Spike Trap

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spike Trap</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="ambusher">Trap Ambusher</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 3</div></div></header>
<div class="fb__flavor">A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">6</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">2 x 2-square area</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-deactivate">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a spike trap can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is affected as if in its area.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn&#39;t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-activate">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Spike Trap</b> ability.</p></div></div>
<div class="fb__feat-body">The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-spike-trap">Spike Trap</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 damage; the target <a href="../../../movement/shifting/">shifts</a> 1 square away from the trap</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; the target falls into the pit; A &lt; 0 <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 damage; the target falls into the pit; A &lt; 1 <a href="../../../condition/prone/">prone</a>; <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object of the appropriate size enters the trap&#39;s area.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target ends their movement when they enter the trap&#39;s area. The pit is typically 2 squares deep. The trap must be manually reset.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-hidden">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The spike trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.&#10;&#10;- **EV:** 3&#10;- **Stamina:** 6&#10;- **Size:** One or more squares&#10;- **Typical Space:** 2 x 2-square area&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to a spike trap can make an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** The creature triggers the trap and is affected as if in its area.&#10;&gt; - **12-16:** The trap is deactivated but the creature is &#91;slowed](../../condition/slowed.md) (EoT).&#10;&gt; - **17+:** The trap is deactivated and doesn&#39;t trigger.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.&#10;&gt;&#10;&gt; **Effect:** The **Spike Trap** ability.&#10;&#10;&gt; ❗️ **Spike Trap**&#10;&gt;&#10;&gt; | **Area, Weapon** |                **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 0**   | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object of the appropriate size enters the trap&#39;s area.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 3 damage; the target &#91;shifts](../../movement/shifting.md) 1 square away from the trap&#10;&gt; - **12-16:** 4 damage; the target falls into the pit; A &lt; 0 &#91;prone](../../condition/prone.md)&#10;&gt; - **17+:** 6 damage; the target falls into the pit; A &lt; 1 &#91;prone](../../condition/prone.md); &#91;restrained](../../condition/restrained.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** The target ends their movement when they enter the trap&#39;s area. The pit is typically 2 squares deep. The trap must be manually reset.&#10;&#10;&gt; ⭐️ **Hidden**&#10;&gt;&#10;&gt; The spike trap is hidden until triggered or detected."></template>
