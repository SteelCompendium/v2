---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      level: 4
      name: Elemental Blast
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 10 damage; [push](../../../movement/forced-movement.md) 5
            low: 4 damage; [push](../../../movement/forced-movement.md) 2
            mid: 6 damage; [push](../../../movement/forced-movement.md) 3
      sections:
        - label: Effect
          text: 'When the retainer uses this ability, they can choose for it to deal one of the following damage types: acid, cold, fire, lightning, poison, or sonic.'
      target: Each creature in the area
      usage: Main action
    - cost: Encounter
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      level: 7
      name: Oil Slick
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 11 poison damage; M < STRONG [prone](../../../condition/prone.md)
            low: 5 poison damage; M < WEAK [prone](../../../condition/prone.md)
            mid: 8 poison damage; M < AVERAGE [prone](../../../condition/prone.md)
      sections:
        - label: Effect
          text: The area is [difficult terrain](../../../movement/difficult-terrain.md) for enemies. Any enemy has fire weakness 5 while in the area, and any enemy who ends their turn in the area and has no movement remaining falls [prone](../../../condition/prone.md).
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 10
      name: Shattering Shards
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage
            low: 7 damage
            mid: 11 damage
      sections:
        - label: Special
          text: The target must be size 1M or smaller.
        - label: Effect
          text: The area within 2 squares of the target is [difficult terrain](../../../movement/difficult-terrain.md), and each enemy in the area takes the same damage the object took.
      target: One Object
      usage: Main action
name: Controller Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/controller
type: featureblock
---

# Controller Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Controller Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Elemental Blast</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; <a href="../../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; <a href="../../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 damage; <a href="../../../../movement/forced-movement/">push</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>When the retainer uses this ability, they can choose for it to deal one of the following damage types: acid, cold, fire, lightning, poison, or sonic.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Oil Slick</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 poison damage; M &lt; WEAK <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 poison damage; M &lt; AVERAGE <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 poison damage; M &lt; STRONG <a href="../../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area is <a href="../../../../movement/difficult-terrain/">difficult terrain</a> for enemies. Any enemy has fire weakness 5 while in the area, and any enemy who ends their turn in the area and has no movement remaining falls <a href="../../../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shattering Shards</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One Object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The target must be size 1M or smaller.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area within 2 squares of the target is <a href="../../../../movement/difficult-terrain/">difficult terrain</a>, and each enemy in the area takes the same damage the object took.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; 🔳 **Elemental Blast (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic, Ranged** |                  **&#91;Main action](../../../rule/combat/turn.md)** |&#10;&gt; |-------------------------|---------------------------------:|&#10;&gt; | **📏 3 cube within 10** | **🎯 Each creature in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 4 damage; &#91;push](../../../movement/forced-movement.md) 2&#10;&gt; - **12-16:** 6 damage; &#91;push](../../../movement/forced-movement.md) 3&#10;&gt; - **17+:** 10 damage; &#91;push](../../../movement/forced-movement.md) 5&#10;&gt;&#10;&gt; **Effect:** When the retainer uses this ability, they can choose for it to deal one of the following damage types: acid, cold, fire, lightning, poison, or sonic.&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 🔳 **Oil Slick (Encounter)**&#10;&gt;&#10;&gt; | **Area, Ranged, Weapon** |               **&#91;Main action](../../../rule/combat/turn.md)** |&#10;&gt; |--------------------------|------------------------------:|&#10;&gt; | **📏 3 cube within 10**  | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 5 poison damage; M &lt; WEAK &#91;prone](../../../condition/prone.md)&#10;&gt; - **12-16:** 8 poison damage; M &lt; AVERAGE &#91;prone](../../../condition/prone.md)&#10;&gt; - **17+:** 11 poison damage; M &lt; STRONG &#91;prone](../../../condition/prone.md)&#10;&gt;&#10;&gt; **Effect:** The area is &#91;difficult terrain](../../../movement/difficult-terrain.md) for enemies. Any enemy has fire weakness 5 while in the area, and any enemy who ends their turn in the area and has no movement remaining falls &#91;prone](../../../condition/prone.md).&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; 🏹 **Shattering Shards (Encounter)**&#10;&gt;&#10;&gt; | **Ranged, Strike, Weapon** |   **&#91;Main action](../../../rule/combat/turn.md)** |&#10;&gt; |----------------------------|------------------:|&#10;&gt; | **📏 Ranged 10**           | **🎯 One Object** |&#10;&gt;&#10;&gt; **Special:** The target must be size 1M or smaller.&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage&#10;&gt; - **12-16:** 11 damage&#10;&gt; - **17+:** 16 damage&#10;&gt;&#10;&gt; **Effect:** The area within 2 squares of the target is &#91;difficult terrain](../../../movement/difficult-terrain.md), and each enemy in the area takes the same damage the object took."></template>
