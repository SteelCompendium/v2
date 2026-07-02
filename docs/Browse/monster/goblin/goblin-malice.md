---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: Each goblin in the encounter gains a +2 bonus to speed until the end of the round.
      cost: 3 Malice
      icon: ⭐️
      name: Goblin Mode
    - body: Each enemy in the encounter takes 1 damage for each goblin [adjacent](../../rule/combat/adjacent.md) to them.
      cost: 5 Malice
      icon: ❇️
      name: Tiny Stabs
    - cost: 7 Malice
      icon: "\U0001F300"
      intro: The encounter map is covered in a green mist that lasts until the end of the round, and which can't be dispersed by wind. All areas of the map are [difficult terrain](../../movement/difficult-terrain.md) for non-goblins, and each non-goblin on the map makes a **Might test**.
      name: Swamp Stink
      power_roll:
        tiers:
            high: No effect.
            low: 5 poison damage; the creature is [weakened](../../condition/weakened.md) until the mist disappears.
            mid: The creature is [weakened](../../condition/weakened.md) until the mist disappears.
flavor: At the start of any goblin's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Goblin Malice
scc: mcdm.monsters.v1/monster.goblin/goblin-malice
type: featureblock
---

# Goblin Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Goblin Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any goblin&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Goblin Mode</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">Each goblin in the encounter gains a +2 bonus to speed until the end of the round.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Tiny Stabs</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each enemy in the encounter takes 1 damage for each goblin <a href="../../../rule/combat/adjacent/">adjacent</a> to them.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Swamp Stink</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">The encounter map is covered in a green mist that lasts until the end of the round, and which can&#39;t be dispersed by wind. All areas of the map are <a href="../../../movement/difficult-terrain/">difficult terrain</a> for non-goblins, and each non-goblin on the map makes a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 poison damage; the creature is <a href="../../../condition/weakened/">weakened</a> until the mist disappears.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature is <a href="../../../condition/weakened/">weakened</a> until the mist disappears.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of any goblin&#39;s turn, you can spend &#91;Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; ⭐️ **Goblin Mode (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each goblin in the encounter gains a +2 bonus to speed until the end of the round.&#10;&#10;&gt; ❇️ **Tiny Stabs (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; Each enemy in the encounter takes 1 damage for each goblin &#91;adjacent](../../rule/combat/adjacent.md) to them.&#10;&#10;&gt; 🌀 **Swamp Stink (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The encounter map is covered in a green mist that lasts until the end of the round, and which can&#39;t be dispersed by wind. All areas of the map are &#91;difficult terrain](../../movement/difficult-terrain.md) for non-goblins, and each non-goblin on the map makes a **Might test**.&#10;&gt;&#10;&gt; - **≤11:** 5 poison damage; the creature is &#91;weakened](../../condition/weakened.md) until the mist disappears.&#10;&gt; - **12-16:** The creature is &#91;weakened](../../condition/weakened.md) until the mist disappears.&#10;&gt; - **17+:** No effect."></template>
