---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: 3 Malice
      icon: ⭐️
      intro: Each orc [shifts](../../movement/shifting.md) up to their speed, moving through enemy spaces if they can. Each enemy passed through during this movement makes a **Might test**.
      name: Overwhelming March
      power_roll:
        tiers:
            high: '[Push](../../movement/forced-movement.md) 2'
            low: 6 damage; [prone](../../condition/prone.md)
            mid: 4 damage; [prone](../../condition/prone.md)
    - body: An orc acting this turn summons 2 **mohlers** out of the ground, who dig a trench that is a 10 x 1 line within 10 squares when they appear. The trench is 2 squares deep and is [difficult terrain](../../movement/difficult-terrain.md). The trench can't be created directly underneath creatures.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Mohler Trench
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: The ground shakes as a group of mohlers dig a 5 cube pit beneath an area where at least one creature is on the ground. The area is [difficult terrain](../../movement/difficult-terrain.md). Each orc in the area can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the pit before it is completed. Each nonorc in the area makes an **Agility test**.
      name: Mohler Cavity
      power_roll:
        tiers:
            high: The target can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the pit.
            low: 4 damage; the target falls; [prone](../../condition/prone.md) and can't stand (EoT)
            mid: 4 damage; the target falls
flavor: At the start of any orc's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Orc Malice
scc: mcdm.monsters.v1/monster.orc/orc-malice
type: featureblock
---

# Orc Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Orc Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any orc&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Overwhelming March</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-intro">Each orc <a href="../../../movement/shifting/">shifts</a> up to their speed, moving through enemy spaces if they can. Each enemy passed through during this movement makes a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res"><a href="../../../movement/forced-movement/">Push</a> 2</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Mohler Trench</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">An orc acting this turn summons 2 <b>mohlers</b> out of the ground, who dig a trench that is a 10 x 1 line within 10 squares when they appear. The trench is 2 squares deep and is <a href="../../../movement/difficult-terrain/">difficult terrain</a>. The trench can&#39;t be created directly underneath creatures.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Mohler Cavity</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">The ground shakes as a group of mohlers dig a 5 cube pit beneath an area where at least one creature is on the ground. The area is <a href="../../../movement/difficult-terrain/">difficult terrain</a>. Each orc in the area can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the pit before it is completed. Each nonorc in the area makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; the target falls; <a href="../../../condition/prone/">prone</a> and can&#39;t stand (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; the target falls</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the pit.</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any orc&#39;s turn, you can spend &#91;Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; ⭐️ **Overwhelming March (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each orc &#91;shifts](../../movement/shifting.md) up to their speed, moving through enemy spaces if they can. Each enemy passed through during this movement makes a **Might test**.&#10;&gt;&#10;&gt; - **≤11:** 6 damage; &#91;prone](../../condition/prone.md)&#10;&gt; - **12-16:** 4 damage; &#91;prone](../../condition/prone.md)&#10;&gt; - **17+:** &#91;Push](../../movement/forced-movement.md) 2&#10;&#10;&gt; 🔳 **Mohler Trench (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; An orc acting this turn summons 2 **mohlers** out of the ground, who dig a trench that is a 10 x 1 line within 10 squares when they appear. The trench is 2 squares deep and is &#91;difficult terrain](../../movement/difficult-terrain.md). The trench can&#39;t be created directly underneath creatures.&#10;&#10;&gt; 🔳 **Mohler Cavity (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The ground shakes as a group of mohlers dig a 5 cube pit beneath an area where at least one creature is on the ground. The area is &#91;difficult terrain](../../movement/difficult-terrain.md). Each orc in the area can &#91;shift](../../movement/shifting.md) into the nearest unoccupied space outside the pit before it is completed. Each nonorc in the area makes an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** 4 damage; the target falls; &#91;prone](../../condition/prone.md) and can&#39;t stand (EoT)&#10;&gt; - **12-16:** 4 damage; the target falls&#10;&gt; - **17+:** The target can &#91;shift](../../movement/shifting.md) into the nearest unoccupied space outside the pit."></template>
