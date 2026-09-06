---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      icon: ❇️
      intro: One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a **Might test** or **Agility test**.
      name: Shockwave
      power_roll:
        tiers:
            high: '[Push](../../movement/forced-movement.md) 1'
            low: 5 damage; vertical [push](../../movement/forced-movement.md) 3
            mid: 4 damage; vertical [push](../../movement/forced-movement.md) 2
    - body: Each ogre in the encounter [shifts](../../movement/shifting.md) up to their speed and can make a [free strike](../../feature/common/main-actions/free-strike.md). If they can, they gang up on the same target rather than picking different targets.
      cost: 5 Malice
      icon: "\U0001F300"
      name: Bully
    - body: Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).
      cost: 7 Malice
      icon: ⭐️
      name: Rampage
flavor: At the start of any ogre's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ogre Malice
scc: mcdm.monsters.v1/monster.ogre/ogre-malice
type: featureblock
---

# Ogre Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ogre Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any ogre&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-shockwave">Shockwave</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-intro">One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a <b>Might test</b> or <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; vertical <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; vertical <a href="../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res"><a href="../../../movement/forced-movement/">Push</a> 1</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-bully">Bully</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each ogre in the encounter <a href="../../../movement/shifting/">shifts</a> up to their speed and can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a>. If they can, they gang up on the same target rather than picking different targets.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-rampage">Rampage</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any ogre&#39;s turn, you can spend Malice to activate one of the following features.&#10;&#10;&gt; ❇️ **Shockwave (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a **Might test** or **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** 5 damage; vertical &#91;push](../../movement/forced-movement.md) 3&#10;&gt; - **12-16:** 4 damage; vertical &#91;push](../../movement/forced-movement.md) 2&#10;&gt; - **17+:** &#91;Push](../../movement/forced-movement.md) 1&#10;&#10;&gt; 🌀 **Bully (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each ogre in the encounter &#91;shifts](../../movement/shifting.md) up to their speed and can make a &#91;free strike](../../feature/common/main-actions/free-strike.md). If they can, they gang up on the same target rather than picking different targets.&#10;&#10;&gt; ⭐️ **Rampage (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1)."></template>
