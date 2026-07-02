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
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Go for the Jugular
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 damage; M < STRONG [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)
            low: 5 damage; M < WEAK [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)
            mid: 9 damage; M < AVERAGE [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: If the target is [grabbed](../../../condition/grabbed.md) or the retainer had an edge on the power roll, the retainer gains 2 [surges](../../../rule/resource/surge.md).
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Melee 1 or ranged 5
      icon: ⚔️
      keywords:
        - Melee
        - Ranged
        - Strike
        - Weapon
      level: 7
      name: Hamstring Slice
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 15 damage; M < STRONG [slowed](../../../condition/slowed.md) and the target can't used triggered actions ([save](../../../rule/general/saving-throw.md) ends)
            low: 7 damage; M < WEAK [slowed](../../../condition/slowed.md) (EoT)
            mid: 10 damage; M < AVERAGE [slowed](../../../condition/slowed.md) ([save](../../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: The retainer and their mentor can each move up to their speed.
      target: One creature
      usage: Main Action
    - cost: Encounter
      distance: Melee 1 or ranged 5
      icon: ⚔️
      keywords:
        - Melee
        - Ranged
        - Strike
        - Weapon
      level: 10
      name: Hold 'Em Down
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 damage; a size 1 or smaller target who has M < STRONG is [grabbed](../../../condition/grabbed.md)
            low: 11 damage; a size 1 or smaller target who has M < WEAK is [grabbed](../../../condition/grabbed.md)
            mid: 16 damage; a size 1 or smaller target who has M < AVERAGE is [grabbed](../../../condition/grabbed.md)
      sections:
        - label: Effect
          text: The retainer gains 2 [surges](../../../rule/resource/surge.md) when any creature makes a strike against a target [grabbed](../../../condition/grabbed.md) this way.
      target: One creature
      usage: Main Action
name: Ambusher Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/ambusher
type: featureblock
---

# Ambusher Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ambusher Abilities</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Go for the Jugular</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; M &lt; WEAK <a href="../../../../condition/bleeding/">bleeding</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; M &lt; AVERAGE <a href="../../../../condition/bleeding/">bleeding</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; M &lt; STRONG <a href="../../../../condition/bleeding/">bleeding</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target is <a href="../../../../condition/grabbed/">grabbed</a> or the retainer had an edge on the power roll, the retainer gains 2 <a href="../../../../rule/resource/surge/">surges</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⚔️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hamstring Slice</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1 or ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; M &lt; WEAK <a href="../../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; M &lt; AVERAGE <a href="../../../../condition/slowed/">slowed</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">15 damage; M &lt; STRONG <a href="../../../../condition/slowed/">slowed</a> and the target can&#39;t used triggered actions (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer and their mentor can each move up to their speed.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⚔️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hold &#39;Em Down</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1 or ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 damage; a size 1 or smaller target who has M &lt; WEAK is <a href="../../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 damage; a size 1 or smaller target who has M &lt; AVERAGE is <a href="../../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; a size 1 or smaller target who has M &lt; STRONG is <a href="../../../../condition/grabbed/">grabbed</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer gains 2 <a href="../../../../rule/resource/surge/">surges</a> when any creature makes a strike against a target <a href="../../../../condition/grabbed/">grabbed</a> this way.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Role Advancement Ability**&#10;&#10;&gt; 🗡 **Go for the Jugular (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |     **Main action** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 5 damage; M &lt; WEAK [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 9 damage; M &lt; AVERAGE [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 12 damage; M &lt; STRONG [bleeding](../../../condition/bleeding.md) ([save](../../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** If the target is [grabbed](../../../condition/grabbed.md) or the retainer had an edge on the power roll, the retainer gains 2 [surges](../../../rule/resource/surge.md).&#10;&#10;&gt; **Level 7 Role Advancement Ability**&#10;&#10;&gt; ⚔️ **Hamstring Slice (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Ranged, Strike, Weapon** |     **Main Action** |&#10;&gt; |-----------------------------------|--------------------:|&#10;&gt; | **📏 Melee 1 or ranged 5**        | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage; M &lt; WEAK [slowed](../../../condition/slowed.md) (EoT)&#10;&gt; - **12-16:** 10 damage; M &lt; AVERAGE [slowed](../../../condition/slowed.md) ([save](../../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 15 damage; M &lt; STRONG [slowed](../../../condition/slowed.md) and the target can&#39;t used triggered actions ([save](../../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** The retainer and their mentor can each move up to their speed.&#10;&#10;&gt; **Level 10 Role Advancement Ability**&#10;&#10;&gt; ⚔️ **Hold &#39;Em Down (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Ranged, Strike, Weapon** |     **Main Action** |&#10;&gt; |-----------------------------------|--------------------:|&#10;&gt; | **📏 Melee 1 or ranged 5**        | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 11 damage; a size 1 or smaller target who has M &lt; WEAK is [grabbed](../../../condition/grabbed.md)&#10;&gt; - **12-16:** 16 damage; a size 1 or smaller target who has M &lt; AVERAGE is [grabbed](../../../condition/grabbed.md)&#10;&gt; - **17+:** 21 damage; a size 1 or smaller target who has M &lt; STRONG is [grabbed](../../../condition/grabbed.md)&#10;&gt;&#10;&gt; **Effect:** The retainer gains 2 [surges](../../../rule/resource/surge.md) when any creature makes a strike against a target [grabbed](../../../condition/grabbed.md) this way."></template>
