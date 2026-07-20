---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: The column of blades must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object moves [adjacent](../../rule/combat/adjacent.md) to the column of blades.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Spinning Blades** ability.
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Spinning Blades
      power_roll:
        formula: + 2
        tiers:
            high: 9 damage; M < 3 [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 4 damage
            mid: 6 damage; M < 2 [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - body: |-
        **Stone Column (+1 EV)** The column is made of stone and has 8 [Stamina](../../rule/health/stamina.md).

        **Metal Column (+1 EV)** The column is made of metal and has 11 [Stamina](../../rule/health/stamina.md).

        **Concealed (+1 EV)** The blades are concealed inside the column, which remains motionless until triggered.

        **Spiked Flails (+4 EV)** Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The **Whirling Flails** ability replaces **Spinning Blades**.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 2
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Whirling Flails
      power_roll:
        tiers:
            high: 11 damage; M < 3 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 5 damage
            mid: 8 damage; M < 2 [dazed](../../condition/dazed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object moves within distance of the column.
      target: The triggering creature or object
      usage: Free triggered action
    - icon: ⭐️
      intro: Allies who [shift](../../movement/shifting.md) don't trigger the column. A creature observing an ally [shift](../../movement/shifting.md) this way can make an **Intuition test** to [shift](../../movement/shifting.md) in imitation of their movements.
      name: Allied Awareness
      power_roll:
        formula: + 2
        tiers:
            high: The creature doesn't trigger the column.
            low: The creature triggers the column and the column's ability gains an edge.
            mid: The creature triggers the column.
flavor: A spinning wooden column is affixed with sharp blades to slash the unwary.
level: 3
name: Column of Blades
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/column-of-blades
stats:
    - name: EV
      value: "3"
    - name: Stamina
      value: "5"
    - name: Size
      value: 1L
terrain_type: Fortification
type: dynamic-terrain
---

# Column of Blades

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Column of Blades</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="defender">Fortification Defender</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 3</div></div></header>
<div class="fb__flavor">A spinning wooden column is affixed with sharp blades to slash the unwary.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">5</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1L</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The column of blades must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Spinning Blades</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object moves <a href="../../../rule/combat/adjacent/">adjacent</a> to the column of blades.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spinning Blades</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; M &lt; 2 <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage; M &lt; 3 <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object moves within distance of the column.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Stone Column (+1 EV)</b> The column is made of stone and has 8 <a href="../../../rule/health/stamina/">Stamina</a>.

<b>Metal Column (+1 EV)</b> The column is made of metal and has 11 <a href="../../../rule/health/stamina/">Stamina</a>.

<b>Concealed (+1 EV)</b> The blades are concealed inside the column, which remains motionless until triggered.

<b>Spiked Flails (+4 EV)</b> Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The <b>Whirling Flails</b> ability replaces <b>Spinning Blades</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Whirling Flails</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 2</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage; M &lt; 2 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 damage; M &lt; 3 <a href="../../../condition/dazed/">dazed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object moves within distance of the column.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Allied Awareness</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">Allies who <a href="../../../movement/shifting/">shift</a> don&#39;t trigger the column. A creature observing an ally <a href="../../../movement/shifting/">shift</a> this way can make an <b>Intuition test</b> to <a href="../../../movement/shifting/">shift</a> in imitation of their movements.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the column and the column&#39;s ability gains an edge.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature triggers the column.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature doesn&#39;t trigger the column.</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="A spinning wooden column is affixed with sharp blades to slash the unwary.&#10;&#10;- **EV:** 3&#10;- **Stamina:** 5&#10;- **Size:** 1L&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; The column of blades must be completely destroyed.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature or object moves &#91;adjacent](../../rule/combat/adjacent.md) to the column of blades.&#10;&gt;&#10;&gt; **Effect:** The **Spinning Blades** ability.&#10;&#10;&gt; ❗️ **Spinning Blades**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |                **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |---------------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 1**            | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object moves within distance of the column.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 4 damage&#10;&gt; - **12-16:** 6 damage; M &lt; 2 &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 9 damage; M &lt; 3 &#91;bleeding](../../condition/bleeding.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Stone Column (+1 EV)** The column is made of stone and has 8 &#91;Stamina](../../rule/health/stamina.md).&#10;&gt;&#10;&gt; **Metal Column (+1 EV)** The column is made of metal and has 11 &#91;Stamina](../../rule/health/stamina.md).&#10;&gt;&#10;&gt; **Concealed (+1 EV)** The blades are concealed inside the column, which remains motionless until triggered.&#10;&gt;&#10;&gt; **Spiked Flails (+4 EV)** Instead of blades, the column is affixed with heavy spiked balls attached by long chains. The **Whirling Flails** ability replaces **Spinning Blades**.&#10;&#10;&gt; ❗️ **Whirling Flails**&#10;&gt;&#10;&gt; | **Melee, Strike, Weapon** |                **Free &#91;triggered action](../../rule/combat/triggered-action.md)** |&#10;&gt; |---------------------------|-----------------------------------------:|&#10;&gt; | **📏 Melee 2**            | **🎯 The triggering creature or object** |&#10;&gt;&#10;&gt; **Trigger:** A creature or object moves within distance of the column.&#10;&gt;&#10;&gt; - **≤11:** 5 damage&#10;&gt; - **12-16:** 8 damage; M &lt; 2 &#91;dazed](../../condition/dazed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&gt; - **17+:** 11 damage; M &lt; 3 &#91;dazed](../../condition/dazed.md) (&#91;save](../../rule/general/saving-throw.md) ends)&#10;&#10;&gt; ⭐️ **Allied Awareness**&#10;&gt;&#10;&gt; Allies who &#91;shift](../../movement/shifting.md) don&#39;t trigger the column. A creature observing an ally &#91;shift](../../movement/shifting.md) this way can make an **Intuition test** to &#91;shift](../../movement/shifting.md) in imitation of their movements.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** The creature triggers the column and the column&#39;s ability gains an edge.&#10;&gt; - **12-16:** The creature triggers the column.&#10;&gt; - **17+:** The creature doesn&#39;t trigger the column."></template>
