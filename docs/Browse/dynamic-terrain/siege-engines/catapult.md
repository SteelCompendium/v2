---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a catapult can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The catapult is deactivated and can't be used.
            low: The creature accidentally activates the **Arcing Shot** ability.
            mid: The catapult is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - distance: 3 cube within 20
      icon: "\U0001F533"
      keywords:
        - '- Area'
        - Ranged
        - Weapon
      name: Arcing Shot
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; A < 1 push 2
            low: 5 damage
            mid: 9 damage; A < 0 push 1
      sections:
        - label: Effect
          text: Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can't be used again until the catapult is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      name: Reload
      sections:
        - label: Effect
          text: The catapult is reloaded, allowing **Arcing Shot** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Arcing Shot** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      name: Move
      sections:
        - label: Effect
          text: The catapult and the creature using this action move together up to 2 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Air Assault (+2 EV)** The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.

        **Flammable (+2 EV) Arcing Shot** deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.
      icon: ⭐️
      name: Upgrades
flavor: This massive counterweighted engine hurls a heavy projectile for a devastating assault.
level: 3
name: Catapult
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/catapult
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "50"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Catapult

---

<div class="fb-wrap" data-role="artillery">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Catapult</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="artillery">Siege Engine Artillery</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 10</div></div></header>
<div class="fb__flavor">This massive counterweighted engine hurls a heavy projectile for a devastating assault.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">10</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">50</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-deactivate">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a catapult can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Arcing Shot</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The catapult is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The catapult is deactivated and can&#39;t be used.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-arcing-shot">Arcing Shot</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">- Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; A &lt; 0 push 1</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; A &lt; 1 push 2</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can&#39;t be used again until the catapult is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-reload">Reload</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The catapult is reloaded, allowing <b>Arcing Shot</b> to be used again. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-spot">Spot</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next use of <b>Arcing Shot</b> gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-move">Move</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The catapult and the creature using this action move together up to 2 squares.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-upgrades">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Air Assault (+2 EV)</b> The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.

<b>Flammable (+2 EV) Arcing Shot</b> deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="This massive counterweighted engine hurls a heavy projectile for a devastating assault.&#10;&#10;- **EV:** 10&#10;- **Stamina:** 50&#10;- **Size:** 2&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; As a maneuver, a creature &#91;adjacent](../../rule/combat/adjacent.md) to a catapult can make an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** The creature accidentally activates the **Arcing Shot** ability.&#10;&gt; - **12-16:** The catapult is deactivated but the creature is &#91;slowed](../../condition/slowed.md) (EoT).&#10;&gt; - **17+:** The catapult is deactivated and can&#39;t be used.&#10;&#10;&gt; 🔳 **Arcing Shot**&#10;&gt;&#10;&gt; | **- Area, Ranged, Weapon** |         **&#91;Main action](../../rule/combat/turn.md) (Adjacent creature)** |&#10;&gt; |----------------------------|--------------------------------------------:|&#10;&gt; | **📏 3 cube within 20**    | **🎯 Each creature and object in the area** |&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 5 damage&#10;&gt; - **12-16:** 9 damage; A &lt; 0 push 1&#10;&gt; - **17+:** 12 damage; A &lt; 1 push 2&#10;&gt;&#10;&gt; **Effect:** Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can&#39;t be used again until the catapult is reloaded.&#10;&#10;&gt; ⭐️ **Reload**&#10;&gt;&#10;&gt; | **-**    | **&#91;Main action](../../rule/combat/turn.md) (Adjacent creature)** |&#10;&gt; |----------|-------------------------------------:|&#10;&gt; | **📏 -** |                             **🎯 -** |&#10;&gt;&#10;&gt; **Effect:** The catapult is reloaded, allowing **Arcing Shot** to be used again. This action can be used only once per round.&#10;&#10;&gt; ⭐️ **Spot**&#10;&gt;&#10;&gt; | **-**    | **&#91;Main action](../../rule/combat/turn.md) (Adjacent creature)** |&#10;&gt; |----------|------------------------------------:|&#10;&gt; | **📏 -** |                            **🎯 -** |&#10;&gt;&#10;&gt; **Effect:** The next use of **Arcing Shot** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.&#10;&#10;&gt; ⭐️ **Move**&#10;&gt;&#10;&gt; | **-**    | **&#91;Main action](../../rule/combat/turn.md) (Adjacent creature)** |&#10;&gt; |----------|------------------------------------:|&#10;&gt; | **📏 -** |                            **🎯 -** |&#10;&gt;&#10;&gt; **Effect:** The catapult and the creature using this action move together up to 2 squares.&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Air Assault (+2 EV)** The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.&#10;&gt;&#10;&gt; **Flammable (+2 EV) Arcing Shot** deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage."></template>
