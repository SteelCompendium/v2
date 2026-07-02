---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 4 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
        - Strike
      name: Weakening Glare
      power_roll:
        formula: + 4
        tiers:
            high: 12 damage; [weakened](../../condition/weakened.md) (save ends)
            low: 6 damage; [weakened](../../condition/weakened.md) (EoT)
            mid: 10 damage; [weakened](../../condition/weakened.md) (EoT)
      target: One creature
      usage: Main action
    - body: The medusa takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Ssstop and Lisssten
      power_roll:
        formula: + 4
        tiers:
            high: I < 4 the target is charmed
            low: I < 2 the target is charmed
            mid: I < 3 the target is charmed
      sections:
        - label: Effect
          text: At a time of the medusa's choosing, a charmed creature moves up to their speed and makes a [free strike](../../feature/common/main-actions/free-strike.md) against an enemy of the medusa's choice as a free triggered action. The creature is then no longer charmed.
      target: Three creatures
      usage: Main action
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy [restrained](../../condition/restrained.md) or [slowed](../../condition/slowed.md) by the medusa's Petrify ability has a double bane on the test.
      name: Shatter Victims
      power_roll:
        tiers:
            high: 6 damage
            low: 12 damage; vertical [push](../../movement/forced-movement.md) 3; [bleeding](../../condition/bleeding.md) (save ends)
            mid: 10 damage; vertical [push](../../movement/forced-movement.md) 3
flavor: At the start of a medusa's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Medusa Malice
scc: mcdm.monsters.v1/monster.medusa/medusa-malice
type: featureblock
---

# Medusa Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Medusa Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of a medusa&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Weakening Glare</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">4 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 4</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; <a href="../../../condition/weakened/">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; <a href="../../../condition/weakened/">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The medusa takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ssstop and Lisssten</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three creatures</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 4</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">I &lt; 2 the target is charmed</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">I &lt; 3 the target is charmed</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">I &lt; 4 the target is charmed</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>At a time of the medusa&#39;s choosing, a charmed creature moves up to their speed and makes a <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against an enemy of the medusa&#39;s choice as a free triggered action. The creature is then no longer charmed.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shatter Victims</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a <b>Might test</b>. An enemy <a href="../../../condition/restrained/">restrained</a> or <a href="../../../condition/slowed/">slowed</a> by the medusa&#39;s Petrify ability has a double bane on the test.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 damage; vertical <a href="../../../movement/forced-movement/">push</a> 3; <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; vertical <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 damage</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of a medusa&#39;s turn, you can spend Malice to activate one of the following features.&#10;&#10;&gt; 🏹 **Weakening Glare (4 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **Magic, Ranged, Strike** |     **Main action** |&#10;&gt; |---------------------------|--------------------:|&#10;&gt; | **📏 Ranged 10**          | **🎯 One creature** |&#10;&gt;&#10;&gt; **Power Roll + 4:**&#10;&gt;&#10;&gt; - **≤11:** 6 damage; &#91;weakened](../../condition/weakened.md) (EoT)&#10;&gt; - **12-16:** 10 damage; &#91;weakened](../../condition/weakened.md) (EoT)&#10;&gt; - **17+:** 12 damage; &#91;weakened](../../condition/weakened.md) (save ends)&#10;&#10;&gt; ☠️ **Solo Action (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The medusa takes an additional main action on their turn. They can use this feature even if they are &#91;dazed](../../condition/dazed.md).&#10;&#10;&gt; 🏹 **Ssstop and Lisssten (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **Magic, Ranged** |        **Main action** |&#10;&gt; |-------------------|-----------------------:|&#10;&gt; | **📏 Ranged 10**  | **🎯 Three creatures** |&#10;&gt;&#10;&gt; **Power Roll + 4:**&#10;&gt;&#10;&gt; - **≤11:** I &lt; 2 the target is charmed&#10;&gt; - **12-16:** I &lt; 3 the target is charmed&#10;&gt; - **17+:** I &lt; 4 the target is charmed&#10;&gt;&#10;&gt; **Effect:** At a time of the medusa&#39;s choosing, a charmed creature moves up to their speed and makes a &#91;free strike](../../feature/common/main-actions/free-strike.md) against an enemy of the medusa&#39;s choice as a free triggered action. The creature is then no longer charmed.&#10;&#10;&gt; 🔳 **Shatter Victims (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy &#91;restrained](../../condition/restrained.md) or &#91;slowed](../../condition/slowed.md) by the medusa&#39;s Petrify ability has a double bane on the test.&#10;&gt;&#10;&gt; - **≤11:** 12 damage; vertical &#91;push](../../movement/forced-movement.md) 3; &#91;bleeding](../../condition/bleeding.md) (save ends)&#10;&gt; - **12-16:** 10 damage; vertical &#91;push](../../movement/forced-movement.md) 3&#10;&gt; - **17+:** 6 damage"></template>
