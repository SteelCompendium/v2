---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: A basilisk acting this turn can [burrow](../../movement/burrow.md) until the start of their next turn, and moves up to their speed. They have damage immunity 2 while underground. The basilisk can burrow through stone, but can't drag other creatures underground when they do so. At the start of each of the basilisk's turns, the Director can spend 1 [Malice](../../rule/monster/malice.md) to let the basilisk continue burrowing.
      cost: 3+ Malice
      icon: ⭐️
      name: Stone Swim
    - cost: 5 Malice
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Weapon
      name: Upchuck
      power_roll:
        formula: + 2
        tiers:
            high: 4 damage; A < 2 5 damage, [prone](../../condition/prone.md) and can't stand (save ends)
            low: 4 damage
            mid: 4 damage; A < 1 2 damage, [prone](../../condition/prone.md)
      sections:
        - label: Effect
          text: The basilisk spits up a chunk of partly digested stone.
      target: Each enemy in the area
      usage: Main action
    - body: A basilisk spews reflective spittle across an adjacent vertical surface in a 3-square-by-3-square area. The basilisk can use their Petrifying Eye Beams ability to target a square in the area, causing the area and distance of that ability to become a 20 x 3 line within 1 square of the wall.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Walleye
flavor: At the start of any basilisk's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Basilisk Malice
scc: mcdm.monsters.v1/monster.basilisk/basilisk-malice
type: featureblock
---

# Basilisk Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Basilisk Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any basilisk&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-stone-swim">Stone Swim</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3+ Malice</div></div></header></div>
<div class="fb__feat-body">A basilisk acting this turn can <a href="../../../movement/burrow/">burrow</a> until the start of their next turn, and moves up to their speed. They have damage immunity 2 while underground. The basilisk can burrow through stone, but can&#39;t drag other creatures underground when they do so. At the start of each of the basilisk&#39;s turns, the Director can spend 1 <a href="../../../rule/monster/malice/">Malice</a> to let the basilisk continue burrowing.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-upchuck">Upchuck</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; A &lt; 1 2 damage, <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">4 damage; A &lt; 2 5 damage, <a href="../../../condition/prone/">prone</a> and can&#39;t stand (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The basilisk spits up a chunk of partly digested stone.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-walleye">Walleye</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">A basilisk spews reflective spittle across an adjacent vertical surface in a 3-square-by-3-square area. The basilisk can use their Petrifying Eye Beams ability to target a square in the area, causing the area and distance of that ability to become a 20 x 3 line within 1 square of the wall.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any basilisk&#39;s turn, you can spend Malice to activate one of the following features.&#10;&#10;&gt; ⭐️ **Stone Swim (3+ &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; A basilisk acting this turn can &#91;burrow](../../movement/burrow.md) until the start of their next turn, and moves up to their speed. They have damage immunity 2 while underground. The basilisk can burrow through stone, but can&#39;t drag other creatures underground when they do so. At the start of each of the basilisk&#39;s turns, the Director can spend 1 &#91;Malice](../../rule/monster/malice.md) to let the basilisk continue burrowing.&#10;&#10;&gt; 🔳 **Upchuck (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt;&#10;&gt; | **Area, Weapon**        |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |-------------------------|------------------------------:|&#10;&gt; | **📏 3 cube within 10** | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Effect:** The basilisk spits up a chunk of partly digested stone.&#10;&gt;&#10;&gt; **Power Roll + 2:**&#10;&gt;&#10;&gt; - **≤11:** 4 damage&#10;&gt; - **12-16:** 4 damage; A &lt; 1 2 damage, &#91;prone](../../condition/prone.md)&#10;&gt; - **17+:** 4 damage; A &lt; 2 5 damage, &#91;prone](../../condition/prone.md) and can&#39;t stand (save ends)&#10;&#10;&gt; 🔳 **Walleye (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; A basilisk spews reflective spittle across an adjacent vertical surface in a 3-square-by-3-square area. The basilisk can use their Petrifying Eye Beams ability to target a square in the area, causing the area and distance of that ability to become a 20 x 3 line within 1 square of the wall."></template>
