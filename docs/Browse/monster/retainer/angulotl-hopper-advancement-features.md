---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Leaping Attack
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 damage; M < STRONG, [prone](../../condition/prone.md)
            low: 5 damage; M < WEAK, [prone](../../condition/prone.md)
            mid: 9 damage; M < AVERAGE, [prone](../../condition/prone.md)
      sections:
        - label: Effect
          text: The hopper can jump up to their speed in a straight line before the [strike](../../rule/combat/strike.md) without provoking [opportunity attacks](../../rule/combat/opportunity-attack.md). If they jump 2 or more squares this way, they gain 1 [surge](../../rule/resource/surge.md).
      target: One creature or object
      usage: Main action
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 7
      name: Three-Poison Dart
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 poison damage; M < STRONG, [dazed](../../condition/dazed.md), [slowed](../../condition/slowed.md), and [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 5 poison damage; M < WEAK, [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 poison damage; M < AVERAGE, [slowed](../../condition/slowed.md) and [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Melee 5
      icon: ❗️
      keywords:
        - Melee
      level: 10
      name: Trip of the Tongue
      sections:
        - label: Trigger
          text: A creature moves within distance.
        - label: Effect
          text: If the target has M < AVERAGE, their movement ends, they are knocked [prone](../../condition/prone.md), and one ally within distance gains 2 [surges](../../rule/resource/surge.md).
      target: One creature or object
      usage: Triggered action
name: Angulotl Hopper Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/angulotl-hopper
type: featureblock
---

# Angulotl Hopper Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Angulotl Hopper Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-leaping-attack">Leaping Attack</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; M &lt; WEAK, <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; M &lt; AVERAGE, <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; M &lt; STRONG, <a href="../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The hopper can jump up to their speed in a straight line before the <a href="../../../rule/combat/strike/">strike</a> without provoking <a href="../../../rule/combat/opportunity-attack/">opportunity attacks</a>. If they jump 2 or more squares this way, they gain 1 <a href="../../../rule/resource/surge/">surge</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-three-poison-dart">Three-Poison Dart</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 poison damage; M &lt; WEAK, <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 poison damage; M &lt; AVERAGE, <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 poison damage; M &lt; STRONG, <a href="../../../condition/dazed/">dazed</a>, <a href="../../../condition/slowed/">slowed</a>, and <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-trip-of-the-tongue">Trip of the Tongue</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature moves within distance.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target has M &lt; AVERAGE, their movement ends, they are knocked <a href="../../../condition/prone/">prone</a>, and one ally within distance gains 2 <a href="../../../rule/resource/surge/">surges</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Retainer Advancement Ability**&#10;&#10;&gt; 🗡 **Leaping Attack (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |---------------------------|------------------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature or object** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 5 damage; M &lt; WEAK, &#91;prone](../../condition/prone.md)&#10;&gt; - **12-16:** 9 damage; M &lt; AVERAGE, &#91;prone](../../condition/prone.md)&#10;&gt; - **17+:** 12 damage; M &lt; STRONG, &#91;prone](../../condition/prone.md)&#10;&gt;&#10;&gt; **Effect:** The hopper can jump up to their speed in a straight line before the &#91;strike](../../rule/combat/strike.md) without provoking &#91;opportunity attacks](../../rule/combat/opportunity-attack.md). If they jump 2 or more squares this way, they gain 1 &#91;surge](../../rule/resource/surge.md).&#10;&#10;&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 🏹 **Three-Poison Dart (Encounter)**&#10;&gt;&#10;&gt; | **Ranged, Strike, Weapon** |     **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |----------------------------|--------------------:|&#10;&gt; | **📏 Ranged 5**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 5 poison damage; M &lt; WEAK, &#91;weakened](../../condition/weakened.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 9 poison damage; M &lt; AVERAGE, &#91;slowed](../../condition/slowed.md) and &#91;weakened](../../condition/weakened.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 12 poison damage; M &lt; STRONG, &#91;dazed](../../condition/dazed.md), &#91;slowed](../../condition/slowed.md), and &#91;weakened](../../condition/weakened.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; ❗️ **Trip of the Tongue (Encounter)**&#10;&gt;&#10;&gt; | **Melee**      |          **&#91;Triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |----------------|------------------------------:|&#10;&gt; | **📏 Melee 5** | **🎯 One creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature moves within distance.&#10;&gt;&#10;&gt; **Effect:** If the target has M &lt; AVERAGE, their movement ends, they are knocked &#91;prone](../../condition/prone.md), and one ally within distance gains 2 &#91;surges](../../rule/resource/surge.md)."></template>
