---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - distance: Self
      icon: "\U0001F464"
      level: 4
      name: Big Windup
      sections:
        - label: Effect
          text: Until the start of the retainer's next turn, strikes made against the retainer gain an edge. At the start of the retainer's next turn, they gain 2 [surges](../../../rule/resource/surge.md), and any ability they use before the end of their turn that [force moves](../../../movement/forced-movement.md) a creature can move that creature 2 additional squares.
      target: Self
      usage: Maneuver
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: Overhand Swat
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; [push](../../../movement/forced-movement.md) 3; M < STRONG [prone](../../../condition/prone.md)
            low: 8 damage
            mid: 13 damage; [push](../../../movement/forced-movement.md) 2
      sections:
        - label: Effect
          text: If the target ends any [forced movement](../../../movement/forced-movement.md) from this ability in a square [adjacent](../../../rule/combat/adjacent.md) to the retainer's mentor, the mentor can make a melee [free strike](../../../feature/common/main-actions/free-strike.md) against them.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 10
      name: Dizzying Sweep
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 20 damage; [push](../../../movement/forced-movement.md) 4
            low: 10 damage; [push](../../../movement/forced-movement.md) 1
            mid: 14 damage; [push](../../../movement/forced-movement.md) 2
      sections:
        - label: Effect
          text: The retainer is [dazed](../../../condition/dazed.md) until the end of their next turn.
      target: Each creature in the area
      usage: Main action
name: Brute Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/brute
type: featureblock
---

# Brute Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Brute Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-big-windup">Big Windup</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the start of the retainer&#39;s next turn, strikes made against the retainer gain an edge. At the start of the retainer&#39;s next turn, they gain 2 <a href="../../../../rule/resource/surge/">surges</a>, and any ability they use before the end of their turn that <a href="../../../../movement/forced-movement/">force moves</a> a creature can move that creature 2 additional squares.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-overhand-swat">Overhand Swat</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage; <a href="../../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; <a href="../../../../movement/forced-movement/">push</a> 3; M &lt; STRONG <a href="../../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target ends any <a href="../../../../movement/forced-movement/">forced movement</a> from this ability in a square <a href="../../../../rule/combat/adjacent/">adjacent</a> to the retainer&#39;s mentor, the mentor can make a melee <a href="../../../../feature/common/main-actions/free-strike/">free strike</a> against them.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-dizzying-sweep">Dizzying Sweep</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 damage; <a href="../../../../movement/forced-movement/">push</a> 1</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">14 damage; <a href="../../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">20 damage; <a href="../../../../movement/forced-movement/">push</a> 4</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer is <a href="../../../../condition/dazed/">dazed</a> until the end of their next turn.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; 👤 **Big Windup**&#10;&gt;&#10;&gt; | **-**       | **&#91;Maneuver](../../../rule/combat/turn.md)** |&#10;&gt; |-------------|-------------:|&#10;&gt; | **📏 Self** |  **🎯 Self** |&#10;&gt;&#10;&gt; **Effect:** Until the start of the retainer&#39;s next turn, strikes made against the retainer gain an edge. At the start of the retainer&#39;s next turn, they gain 2 &#91;surges](../../../rule/resource/surge.md), and any ability they use before the end of their turn that &#91;force moves](../../../movement/forced-movement.md) a creature can move that creature 2 additional squares.&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Overhand Swat (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |     **&#91;Main action](../../../rule/combat/turn.md)** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 8 damage&#10;&gt; - **12-16:** 13 damage; &#91;push](../../../movement/forced-movement.md) 2&#10;&gt; - **17+:** 16 damage; &#91;push](../../../movement/forced-movement.md) 3; M &lt; STRONG &#91;prone](../../../condition/prone.md)&#10;&gt;&#10;&gt; **Effect:** If the target ends any &#91;forced movement](../../../movement/forced-movement.md) from this ability in a square &#91;adjacent](../../../rule/combat/adjacent.md) to the retainer&#39;s mentor, the mentor can make a melee &#91;free strike](../../../feature/common/main-actions/free-strike.md) against them.&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; ❇️ **Dizzying Sweep (Encounter)**&#10;&gt;&#10;&gt; | **Area, Weapon** |                  **&#91;Main action](../../../rule/combat/turn.md)** |&#10;&gt; |------------------|---------------------------------:|&#10;&gt; | **📏 1 burst**   | **🎯 Each creature in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 10 damage; &#91;push](../../../movement/forced-movement.md) 1&#10;&gt; - **12-16:** 14 damage; &#91;push](../../../movement/forced-movement.md) 2&#10;&gt; - **17+:** 20 damage; &#91;push](../../../movement/forced-movement.md) 4&#10;&gt;&#10;&gt; **Effect:** The retainer is &#91;dazed](../../../condition/dazed.md) until the end of their next turn."></template>
