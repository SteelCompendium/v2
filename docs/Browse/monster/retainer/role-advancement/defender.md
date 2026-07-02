---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
      level: 4
      name: Watch Out!
      sections:
        - label: Trigger
          text: The target takes damage from a strike.
        - label: Effect
          text: The retainer [pushes](../../../movement/forced-movement.md) the target or the attacking creature up to 2 squares. If that moves the mentor out of distance of the strike, the strike has no effect.
      target: The retainer's mentor
      usage: Triggered action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: It's Me You Want!
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; [taunted](../../../condition/taunted.md) ([save](../../../rule/general/saving-throw.md) ends)
            low: 7 damage; [taunted](../../../condition/taunted.md) (EoT)
            mid: 11 damage; [taunted](../../../condition/taunted.md) ([save](../../../rule/general/saving-throw.md) ends)
      target: Two creatures
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Weapon
      level: 10
      name: Last Stand
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 17 damage
            low: 8 damage
            mid: 13 damage
      sections:
        - label: Effect
          text: The retainer and their mentor each gain 10 [temporary Stamina](../../../rule/health/temporary-stamina.md). Additionally, each [winded](../../../rule/health/winded.md) ally within 2 squares of the retainer can spend a [Recovery](../../../rule/health/recoveries.md).
      target: One enemy
      usage: Main action
name: Defender Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/defender
type: featureblock
---

# Defender Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Defender Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Watch Out!</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The retainer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The target takes damage from a strike.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer <a href="../../../../movement/forced-movement/">pushes</a> the target or the attacking creature up to 2 squares. If that moves the mentor out of distance of the strike, the strike has no effect.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">It&#39;s Me You Want!</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Two creatures</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; <a href="../../../../condition/taunted/">taunted</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; <a href="../../../../condition/taunted/">taunted</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; <a href="../../../../condition/taunted/">taunted</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Last Stand</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">17 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer and their mentor each gain 10 <a href="../../../../rule/health/temporary-stamina/">temporary Stamina</a>. Additionally, each <a href="../../../../rule/health/winded/">winded</a> ally within 2 squares of the retainer can spend a <a href="../../../../rule/health/recoveries/">Recovery</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; ❗️ **Watch Out! (Encounter)**&#10;&gt;&#10;&gt; | **Melee**      |         **Triggered action** |&#10;&gt; |----------------|-----------------------------:|&#10;&gt; | **📏 Melee 1** | **🎯 The retainer&#39;s mentor** |&#10;&gt;&#10;&gt; **Trigger:** The target takes damage from a strike.&#10;&gt;&#10;&gt; **Effect:** The retainer &#91;pushes](../../../movement/forced-movement.md) the target or the attacking creature up to 2 squares. If that moves the mentor out of distance of the strike, the strike has no effect.&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 🗡 **It&#39;s Me You Want! (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |      **Main action** |&#10;&gt; |---------------------------|---------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 Two creatures** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage; &#91;taunted](../../../condition/taunted.md) (EoT)&#10;&gt; - **12-16:** 11 damage; &#91;taunted](../../../condition/taunted.md) (&#91;save](../../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 16 damage; &#91;taunted](../../../condition/taunted.md) (&#91;save](../../../rule/general/saving-throw.md) ends)&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Last Stand (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Weapon** |  **Main action** |&#10;&gt; |-------------------|-----------------:|&#10;&gt; | **📏 Melee 1**    | **🎯 One enemy** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 8 damage&#10;&gt; - **12-16:** 13 damage&#10;&gt; - **17+:** 17 damage&#10;&gt;&#10;&gt; **Effect:** The retainer and their mentor each gain 10 &#91;temporary Stamina](../../../rule/health/temporary-stamina.md). Additionally, each &#91;winded](../../../rule/health/winded.md) ally within 2 squares of the retainer can spend a &#91;Recovery](../../../rule/health/recoveries.md)."></template>
