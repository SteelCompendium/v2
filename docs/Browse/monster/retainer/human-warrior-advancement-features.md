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
      name: '''Scuse Me, Boss'
      sections:
        - label: Trigger
          text: The warrior's mentor is targeted by a strike while within distance.
        - label: Effect
          text: The warrior and the mentor switch places. The warrior is the strike's new target and the strike has a double bane.
      target: The warrior's mentor
      usage: Triggered action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: Defensive Fighting
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage
            low: 7 damage
            mid: 11 damage
      sections:
        - label: Effect
          text: Until the start of the warrior's next turn, ability rolls against the warrior or any ally [adjacent](../../rule/combat/adjacent.md) to the warrior have a double bane.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Charge
        - Weapon
      level: 10
      name: Whirlwind of Steel
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 24 damage
            low: 12 damage
            mid: 18 damage
      target: Each enemy in the area
      usage: Main action
name: Human Warrior Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/human-warrior
type: featureblock
---

# Human Warrior Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Human Warrior Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">&#39;Scuse Me, Boss</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The warrior&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The warrior&#39;s mentor is targeted by a strike while within distance.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The warrior and the mentor switch places. The warrior is the strike&#39;s new target and the strike has a double bane.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Defensive Fighting</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the start of the warrior&#39;s next turn, ability rolls against the warrior or any ally <a href="../../../rule/combat/adjacent/">adjacent</a> to the warrior have a double bane.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Whirlwind of Steel</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">18 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">24 damage</span></div></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Retainer Advancement Ability**&#10;&#10;&gt; ❗️ **&#39;Scuse Me, Boss (Encounter)**&#10;&gt;&#10;&gt; | **Melee**      |          **Triggered action** |&#10;&gt; |----------------|------------------------------:|&#10;&gt; | **📏 Melee 1** |   **🎯 The warrior&#39;s mentor** |&#10;&gt;&#10;&gt; **Trigger:** The warrior&#39;s mentor is targeted by a strike while within distance.&#10;&gt;&#10;&gt; **Effect:** The warrior and the mentor switch places. The warrior is the strike&#39;s new target and the strike has a double bane.&#10;&#10;&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 🗡 **Defensive Fighting (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |     **Main action** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage&#10;&gt; - **12-16:** 11 damage&#10;&gt; - **17+:** 16 damage&#10;&gt;&#10;&gt; **Effect:** Until the start of the warrior&#39;s next turn, ability rolls against the warrior or any ally &#91;adjacent](../../rule/combat/adjacent.md) to the warrior have a double bane.&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; ❇️ **Whirlwind of Steel (Encounter)**&#10;&gt;&#10;&gt; | **Area, Charge, Weapon** |               **Main action** |&#10;&gt; |--------------------------|------------------------------:|&#10;&gt; | **📏 1 burst**           | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 12 damage&#10;&gt; - **12-16:** 18 damage&#10;&gt; - **17+:** 24 damage"></template>
