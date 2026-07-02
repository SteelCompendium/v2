---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Charge
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Tackle
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 damage; [push](../../../movement/forced-movement.md) 4
            low: 5 damage; [push](../../../movement/forced-movement.md) 1
            mid: 9 damage; [push](../../../movement/forced-movement.md) 2
      target: One enemy
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: Meet You There
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 15 damage
            low: 7 damage
            mid: 10 damage
      sections:
        - label: Effect
          text: Before or after the strike, the retainer and their mentor can each [shift](../../../movement/shifting.md) up to their speed.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 10
      name: Nab and Stab
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 damage; one target who has M < STRONG is [grabbed](../../../condition/grabbed.md)
            low: 11 damage; one target who has M < WEAK is [grabbed](../../../condition/grabbed.md)
            mid: 16 damage; one target who has M < AVERAGE is [grabbed](../../../condition/grabbed.md)
      sections:
        - label: Effect
          text: The retainer [shifts](../../../movement/shifting.md) up to 2 squares, and can move a creature [grabbed](../../../condition/grabbed.md) using this ability with them.
      target: Each creature in the area
      usage: Main action
name: Harrier Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/harrier
type: featureblock
---

# Harrier Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Harrier Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Tackle</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; <a href="../../../../movement/forced-movement/">push</a> 1</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; <a href="../../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; <a href="../../../../movement/forced-movement/">push</a> 4</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Meet You There</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">15 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Before or after the strike, the retainer and their mentor can each <a href="../../../../movement/shifting/">shift</a> up to their speed.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Nab and Stab</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 damage; one target who has M &lt; WEAK is <a href="../../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 damage; one target who has M &lt; AVERAGE is <a href="../../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; one target who has M &lt; STRONG is <a href="../../../../condition/grabbed/">grabbed</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer <a href="../../../../movement/shifting/">shifts</a> up to 2 squares, and can move a creature <a href="../../../../condition/grabbed/">grabbed</a> using this ability with them.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Tackle (Encounter)**&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; | **Charge, Melee, Strike, Weapon** |  **Main action** |&#10;&gt; |-----------------------------------|-----------------:|&#10;&gt; | **📏 Melee 1**                    | **🎯 One enemy** |&#10;&gt;&#10;&gt; - **≤11:** 5 damage; [push](../../../movement/forced-movement.md) 1&#10;&gt; - **12-16:** 9 damage; [push](../../../movement/forced-movement.md) 2&#10;&gt; - **17+:** 12 damage; [push](../../../movement/forced-movement.md) 4&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Meet You There (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |     **Main action** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage&#10;&gt; - **12-16:** 10 damage&#10;&gt; - **17+:** 15 damage&#10;&gt;&#10;&gt; **Effect:** Before or after the strike, the retainer and their mentor can each [shift](../../../movement/shifting.md) up to their speed.&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; ❇️ **Nab and Stab (Encounter)**&#10;&gt;&#10;&gt; | **Area, Weapon** |                  **Main action** |&#10;&gt; |------------------|---------------------------------:|&#10;&gt; | **📏 1 burst**   | **🎯 Each creature in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 11 damage; one target who has M &lt; WEAK is [grabbed](../../../condition/grabbed.md)&#10;&gt; - **12-16:** 16 damage; one target who has M &lt; AVERAGE is [grabbed](../../../condition/grabbed.md)&#10;&gt; - **17+:** 21 damage; one target who has M &lt; STRONG is [grabbed](../../../condition/grabbed.md)&#10;&gt;&#10;&gt; **Effect:** The retainer [shifts](../../../movement/shifting.md) up to 2 squares, and can move a creature [grabbed](../../../condition/grabbed.md) using this ability with them."></template>
