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
      name: Cavalry Charge
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 11 damage
            low: 6 damage
            mid: 8 damage
      sections:
        - label: Effect
          text: If this ability is used as part of the [Charge](../../../feature/common/main-actions/charge.md) main action, the mount's rider can use a free triggered action to make a melee [free strike](../../../feature/common/main-actions/free-strike.md) against the same target.
      target: One enemy
      usage: Main action
    - cost: Encounter
      distance: Range 5
      icon: "\U0001F464"
      level: 7
      name: Giddyup!
      sections:
        - label: Effect
          text: The mount [shifts](../../../movement/shifting.md) twice their speed. They can jump as part of this movement.
      target: Self
      usage: Move action
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 10
      name: Rearing Trample
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 damage; M < STRONG [prone](../../../condition/prone.md)
            low: 10 damage; M < WEAK [prone](../../../condition/prone.md)
            mid: 15 damage; M < AVERAGE [prone](../../../condition/prone.md)
      sections:
        - label: Effect
          text: A target knocked [prone](../../../condition/prone.md) this way or who is already [prone](../../../condition/prone.md) takes an extra 5 damage.
      target: Each enemy in the area
      usage: Main action
name: Mount Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/mount
type: featureblock
---

# Mount Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Mount Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Cavalry Charge</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If this ability is used as part of the <a href="../../../../feature/common/main-actions/charge/">Charge</a> main action, the mount&#39;s rider can use a free triggered action to make a melee <a href="../../../../feature/common/main-actions/free-strike/">free strike</a> against the same target.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="move">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Giddyup!</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Move action</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Range 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mount <a href="../../../../movement/shifting/">shifts</a> twice their speed. They can jump as part of this movement.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Rearing Trample</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 damage; M &lt; WEAK <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">15 damage; M &lt; AVERAGE <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; M &lt; STRONG <a href="../../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target knocked <a href="../../../../condition/prone/">prone</a> this way or who is already <a href="../../../../condition/prone/">prone</a> takes an extra 5 damage.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Cavalry Charge (Encounter)**&#10;&gt;&#10;&gt; | **Charge, Melee, Strike, Weapon** |  **Main action** |&#10;&gt; |-----------------------------------|-----------------:|&#10;&gt; | **📏 Melee 1**                    | **🎯 One enemy** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 6 damage&#10;&gt; - **12-16:** 8 damage&#10;&gt; - **17+:** 11 damage&#10;&gt;&#10;&gt; **Effect:** If this ability is used as part of the &#91;Charge](../../../feature/common/main-actions/charge.md) main action, the mount&#39;s rider can use a free triggered action to make a melee &#91;free strike](../../../feature/common/main-actions/free-strike.md) against the same target.&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; 👤 **Giddyup! (Encounter)**&#10;&gt;&#10;&gt; | **-**          | **Move action** |&#10;&gt; |----------------|----------------:|&#10;&gt; | **📏 Range 5** |     **🎯 Self** |&#10;&gt;&#10;&gt; **Effect:** The mount &#91;shifts](../../../movement/shifting.md) twice their speed. They can jump as part of this movement.&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; ❇️ **Rearing Trample (Encounter)**&#10;&gt;&#10;&gt; | **Area, Weapon** |               **Main action** |&#10;&gt; |------------------|------------------------------:|&#10;&gt; | **📏 1 burst**   | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 10 damage; M &lt; WEAK &#91;prone](../../../condition/prone.md)&#10;&gt; - **12-16:** 15 damage; M &lt; AVERAGE &#91;prone](../../../condition/prone.md)&#10;&gt; - **17+:** 21 damage; M &lt; STRONG &#91;prone](../../../condition/prone.md)&#10;&gt;&#10;&gt; **Effect:** A target knocked &#91;prone](../../../condition/prone.md) this way or who is already &#91;prone](../../../condition/prone.md) takes an extra 5 damage."></template>
