---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - distance: Ranged 5
      icon: ❗️
      keywords:
        - Ranged
        - Weapon
      level: 4
      name: Supporting Volley
      sections:
        - label: Trigger
          text: The retainer's mentor makes a strike against a creature within distance.
        - label: Effect
          text: The retainer makes a ranged [free strike](../../../feature/common/main-actions/free-strike.md) against the target.
      target: The triggering creature
      usage: Triggered action
    - cost: Encounter
      distance: 10 x 1 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Weapon
      level: 7
      name: Line 'Em Up
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; M < STRONG [prone](../../../condition/prone.md)
            low: 7 damage; M < WEAK [prone](../../../condition/prone.md)
            mid: 11 damage; M < AVERAGE [prone](../../../condition/prone.md)
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 10
      name: Ricochet Shot
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 19 damage
            low: 9 damage
            mid: 14 damage
      sections:
        - label: Effect
          text: The retainer can target a second creature or object within 5 squares of the original target and that has line of effect to the original target. The retainer doesn't need line of effect to the second target but must be aware of their location.
      target: One creature or object
      usage: Main action
name: Artillery Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/artillery
type: featureblock
---

# Artillery Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Artillery Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Supporting Volley</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The retainer&#39;s mentor makes a strike against a creature within distance.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer makes a ranged <a href="../../../../feature/common/main-actions/free-strike/">free strike</a> against the target.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Line &#39;Em Up</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 x 1 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; M &lt; WEAK <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; M &lt; AVERAGE <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; M &lt; STRONG <a href="../../../../condition/prone/">prone</a></span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ricochet Shot</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">9 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">14 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">19 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer can target a second creature or object within 5 squares of the original target and that has line of effect to the original target. The retainer doesn&#39;t need line of effect to the second target but must be aware of their location.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; ❗️ **Supporting Volley**&#10;&gt;&#10;&gt; | **Ranged, Weapon** |           **Triggered action** |&#10;&gt; |--------------------|-------------------------------:|&#10;&gt; | **📏 Ranged 5**    | **🎯 The triggering creature** |&#10;&gt;&#10;&gt; **Trigger:** The retainer&#39;s mentor makes a strike against a creature within distance.&#10;&gt;&#10;&gt; **Effect:** The retainer makes a ranged [free strike](../../../feature/common/main-actions/free-strike.md) against the target.&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 🔳 **Line &#39;Em Up (Encounter)**&#10;&gt;&#10;&gt; | **Area, Weapon**            |               **Main action** |&#10;&gt; |-----------------------------|------------------------------:|&#10;&gt; | **📏 10 x 1 line within 1** | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage; M &lt; WEAK [prone](../../../condition/prone.md)&#10;&gt; - **12-16:** 11 damage; M &lt; AVERAGE [prone](../../../condition/prone.md)&#10;&gt; - **17+:** 16 damage; M &lt; STRONG [prone](../../../condition/prone.md)&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; 🏹 **Ricochet Shot (Encounter)**&#10;&gt;&#10;&gt; | **Ranged, Strike, Weapon** | **Main action** |&#10;&gt; | --- | ---:|&#10;&gt; | **📏 Ranged 5** | **🎯 One creature or object** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 9 damage&#10;&gt; - **12-16:** 14 damage&#10;&gt; - **17+:** 19 damage&#10;&gt;&#10;&gt; **Effect:** The retainer can target a second creature or object within 5 squares of the original target and that has line of effect to the original target. The retainer doesn&#39;t need line of effect to the second target but must be aware of their location."></template>
