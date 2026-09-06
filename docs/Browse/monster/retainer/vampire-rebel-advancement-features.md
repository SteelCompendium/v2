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
      level: 7
      name: Blood Surge
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; M < STRONG [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 7 damage; M < WEAK [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 11 damage; M < AVERAGE [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: Before the [strike](../../rule/combat/strike.md), the vampire rebel [shifts](../../movement/shifting.md) up to their speed. If the vampire rebel has [temporary Stamina](../../rule/health/temporary-stamina.md), they can expend it, dealing an extra 2 corruption damage for each point of [temporary Stamina](../../rule/health/temporary-stamina.md) expended this way.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      level: 10
      name: Exsanguination
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 corruption damage; M < STRONG [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 7 corruption damage; M < WEAK [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 11 corruption damage; M < AVERAGE [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
      target: Each enemy in the area
      usage: Main action
name: Vampire Rebel Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/vampire-rebel
type: featureblock
---

# Vampire Rebel Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Vampire Rebel Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-blood-surge">Blood Surge</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; M &lt; WEAK <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; M &lt; AVERAGE <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; M &lt; STRONG <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Before the <a href="../../../rule/combat/strike/">strike</a>, the vampire rebel <a href="../../../movement/shifting/">shifts</a> up to their speed. If the vampire rebel has <a href="../../../rule/health/temporary-stamina/">temporary Stamina</a>, they can expend it, dealing an extra 2 corruption damage for each point of <a href="../../../rule/health/temporary-stamina/">temporary Stamina</a> expended this way.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-exsanguination">Exsanguination</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 corruption damage; M &lt; WEAK <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 corruption damage; M &lt; AVERAGE <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 corruption damage; M &lt; STRONG <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 🗡 **Blood Surge (Encounter)**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |     **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 damage; M &lt; WEAK &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 11 damage; M &lt; AVERAGE &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 16 damage; M &lt; STRONG &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt;&#10;&gt; **Effect:** Before the &#91;strike](../../rule/combat/strike.md), the vampire rebel &#91;shifts](../../movement/shifting.md) up to their speed. If the vampire rebel has &#91;temporary Stamina](../../rule/health/temporary-stamina.md), they can expend it, dealing an extra 2 corruption damage for each point of &#91;temporary Stamina](../../rule/health/temporary-stamina.md) expended this way.&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; 🔳 **Exsanguination (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic**        |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |------------------------|------------------------------:|&#10;&gt; | **📏 3 cube within 1** | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 7 corruption damage; M &lt; WEAK &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **12-16:** 11 corruption damage; M &lt; AVERAGE &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 16 corruption damage; M &lt; STRONG &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)"></template>
