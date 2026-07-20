---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 3 Malice
      distance: 5 cube within 3
      icon: "\U0001F533"
      keywords:
        - Area
        - Psionic
        - Ranged
        - Weapon
      name: Gravity Well
      sections:
        - label: Effect
          text: A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature [adjacent](../../rule/combat/adjacent.md) to the well uses a maneuver to deactivate it. The area is [difficult terrain](../../movement/difficult-terrain.md) for enemies. Any enemy who ends their turn in the area is [pulled](../../movement/forced-movement.md) up to 4 squares toward the well.
      target: Special
      usage: Maneuver
    - body: Until the end of the round, each time raider gains a +3 bonus to speed, and can [teleport](../../movement/teleport.md) up to their speed as a move action.
      cost: 5 Malice
      icon: ⭐️
      name: Recall Module
    - cost: 10 Malice
      icon: "\U0001F300"
      intro: All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest [Stamina](../../rule/health/stamina.md) maximum drops to 0 [Stamina](../../rule/health/stamina.md) or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a **Reason test** against this psionic effect at the start of each round.
      name: Psi-Cage
      power_roll:
        tiers:
            high: No effect.
            low: 10 psychic damage; [slowed](../../condition/slowed.md) (EoT)
            mid: 7 psychic damage; [slowed](../../condition/slowed.md) (EoT)
flavor: At the start of any time raider's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Time Raider Malice
scc: mcdm.monsters.v1/monster.time-raider/time-raider-malice
type: featureblock
---

# Time Raider Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Time Raider Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any time raider&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Gravity Well</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 cube within 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the well uses a maneuver to deactivate it. The area is <a href="../../../movement/difficult-terrain/">difficult terrain</a> for enemies. Any enemy who ends their turn in the area is <a href="../../../movement/forced-movement/">pulled</a> up to 4 squares toward the well.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Recall Module</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Until the end of the round, each time raider gains a +3 bonus to speed, and can <a href="../../../movement/teleport/">teleport</a> up to their speed as a move action.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Psi-Cage</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div></div></header></div>
<div class="fb__feat-intro">All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest <a href="../../../rule/health/stamina/">Stamina</a> maximum drops to 0 <a href="../../../rule/health/stamina/">Stamina</a> or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a <b>Reason test</b> against this psionic effect at the start of each round.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 psychic damage; <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">7 psychic damage; <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any time raider&#39;s turn, you can spend &#91;Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 🔳 **Gravity Well (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **Area, Psionic, Ranged, Weapon** |   **&#91;Maneuver](../../rule/combat/turn.md)** |&#10;&gt; |-----------------------------------|---------------:|&#10;&gt; | **📏 5 cube within 3**            | **🎯 Special** |&#10;&gt;&#10;&gt; **Effect:** A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature &#91;adjacent](../../rule/combat/adjacent.md) to the well uses a maneuver to deactivate it. The area is &#91;difficult terrain](../../movement/difficult-terrain.md) for enemies. Any enemy who ends their turn in the area is &#91;pulled](../../movement/forced-movement.md) up to 4 squares toward the well.&#10;&#10;&gt; ⭐️ **Recall Module (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Until the end of the round, each time raider gains a +3 bonus to speed, and can &#91;teleport](../../movement/teleport.md) up to their speed as a move action.&#10;&#10;&gt; 🌀 **Psi-Cage (10 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest &#91;Stamina](../../rule/health/stamina.md) maximum drops to 0 &#91;Stamina](../../rule/health/stamina.md) or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a **Reason test** against this psionic effect at the start of each round.&#10;&gt;&#10;&gt; - **≤11:** 10 psychic damage; &#91;slowed](../../condition/slowed.md) (EoT)&#10;&gt; - **12-16:** 7 psychic damage; &#91;slowed](../../condition/slowed.md) (EoT)&#10;&gt; - **17+:** No effect."></template>
