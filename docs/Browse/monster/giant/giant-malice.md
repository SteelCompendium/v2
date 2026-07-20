---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 3 Malice
      distance: 4 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Hurl Landscape
      power_roll:
        tiers:
            high: 9 damage
            low: 18 damage; [prone](../../condition/prone.md) and can't stand (save ends)
            mid: 14 damage; [prone](../../condition/prone.md)
      sections:
        - label: Effect
          text: A giant unearths a structure, hazard, or chunk of the encounter map and launches it to fill the area. Each target makes an **Agility test**.
      target: Each enemy in the area
      usage: Main action
    - body: Each giant in the encounter takes a deep breath and yells, [pushing](../../movement/forced-movement.md) each creature within 3 squares of them up to 10 squares. A creature who can be pushed by more than one giant is pushed by one giant of your choice.
      cost: 5 Malice
      icon: ❇️
      name: Bellow
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: A giant creates a fissure along the ground, either in a 15 x 2 line within 1 or a 10 x 3 line within 2, and that opens up to a depth of 6 squares. Each giant in the area can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure. Each non-giant in the area makes an **Agility test**.
      name: Titanic Tear
      power_roll:
        tiers:
            high: The target can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure.
            low: 10 damage; the target falls into the fissure, and is [prone](../../condition/prone.md) and can't stand (EoT)
            mid: 10 damage; the target is [prone](../../condition/prone.md) and hanging onto the edge of the fissure
flavor: At the start of any giant's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Giant Malice
scc: mcdm.monsters.v1/monster.giant/giant-malice
type: featureblock
---

# Giant Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Giant Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any giant&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hurl Landscape</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">18 damage; <a href="../../../condition/prone/">prone</a> and can&#39;t stand (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">14 damage; <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A giant unearths a structure, hazard, or chunk of the encounter map and launches it to fill the area. Each target makes an <b>Agility test</b>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bellow</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each giant in the encounter takes a deep breath and yells, <a href="../../../movement/forced-movement/">pushing</a> each creature within 3 squares of them up to 10 squares. A creature who can be pushed by more than one giant is pushed by one giant of your choice.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Titanic Tear</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">A giant creates a fissure along the ground, either in a 15 x 2 line within 1 or a 10 x 3 line within 2, and that opens up to a depth of 6 squares. Each giant in the area can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the fissure. Each non-giant in the area makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 damage; the target falls into the fissure, and is <a href="../../../condition/prone/">prone</a> and can&#39;t stand (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; the target is <a href="../../../condition/prone/">prone</a> and hanging onto the edge of the fissure</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the fissure.</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any giant&#39;s turn, you can spend &#91;Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 🔳 **Hurl Landscape (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; | **Area, Ranged, Weapon** |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |--------------------------|------------------------------:|&#10;&gt; | **📏 4 cube within 10**  | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Effect:** A giant unearths a structure, hazard, or chunk of the encounter map and launches it to fill the area. Each target makes an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** 18 damage; &#91;prone](../../condition/prone.md) and can&#39;t stand (save ends)&#10;&gt; - **12-16:** 14 damage; &#91;prone](../../condition/prone.md)&#10;&gt; - **17+:** 9 damage&#10;&#10;&gt; ❇️ **Bellow (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each giant in the encounter takes a deep breath and yells, &#91;pushing](../../movement/forced-movement.md) each creature within 3 squares of them up to 10 squares. A creature who can be pushed by more than one giant is pushed by one giant of your choice.&#10;&#10;&gt; 🔳 **Titanic Tear (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; A giant creates a fissure along the ground, either in a 15 x 2 line within 1 or a 10 x 3 line within 2, and that opens up to a depth of 6 squares. Each giant in the area can &#91;shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure. Each non-giant in the area makes an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** 10 damage; the target falls into the fissure, and is &#91;prone](../../condition/prone.md) and can&#39;t stand (EoT)&#10;&gt; - **12-16:** 10 damage; the target is &#91;prone](../../condition/prone.md) and hanging onto the edge of the fissure&#10;&gt; - **17+:** The target can &#91;shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure."></template>
