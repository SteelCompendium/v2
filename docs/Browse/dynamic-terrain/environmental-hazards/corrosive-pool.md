---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: The pool must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see **Explosive Reaction** below).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.
    - distance: 3 burst
      icon: ❗️
      keywords:
        - Area
      name: Explosive Reaction
      power_roll:
        formula: + 2
        tiers:
            high: 9 fire damage; M < 3 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            low: 3 fire damage; M < 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 6 fire damage; M < 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: The pool takes fire damage.
        - label: Effect
          text: The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.
      icon: ⭐️
      name: Allied Awareness
flavor: This shallow pool bubbles with acid or some other corrosive liquid.
level: 2
name: Corrosive Pool
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/corrosive-pool
stats:
    - name: EV
      value: 3 per 10 x 10 pool
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Immunity
      value: 20 to all damage except cold or fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Corrosive Pool

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Corrosive Pool</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="hexer">Hazard Hexer</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 3 per 10 x 10 pool</div></div></header>
<div class="fb__flavor">This shallow pool bubbles with acid or some other corrosive liquid.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3 per 10 x 10 pool</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">12 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">20 to all damage except cold or fire damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The pool must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.</p></div></div>
<div class="fb__feat-body">A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see <b>Explosive Reaction</b> below).</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Explosive Reaction</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 fire damage; M &lt; 1 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 fire damage; M &lt; 2 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 fire damage; M &lt; 3 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The pool takes fire damage.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Allied Awareness</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="This shallow pool bubbles with acid or some other corrosive liquid.&#10;&#10;- **EV:** 3 per 10 x 10 pool&#10;- **Stamina:** 12 per square&#10;- **Size:** One or more squares of [difficult terrain](../../movement/difficult-terrain.md)&#10;- **Immunity:** 20 to all damage except cold or fire damage&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; The pool must be completely destroyed.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see **Explosive Reaction** below).&#10;&gt;&#10;&gt; **Effect:** A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.&#10;&#10;&gt; ❗️ **Explosive Reaction**&#10;&gt;&#10;&gt; | **Area**       |                   **Free triggered action** |&#10;&gt; |----------------|--------------------------------------------:|&#10;&gt; | **📏 3 burst** | **🎯 Each creature and object in the area** |&#10;&gt;&#10;&gt; **Trigger:** The pool takes fire damage.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 3 fire damage; M &lt; 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 6 fire damage; M &lt; 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 9 fire damage; M &lt; 3 the target is burning ([save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.&#10;&#10;&gt; ⭐️ **Allied Awareness**&#10;&gt;&#10;&gt; Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction."></template>
