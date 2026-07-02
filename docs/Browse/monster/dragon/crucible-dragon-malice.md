---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: While the dragon is [flying](../../movement/fly.md), they shape themself into a blade and fall. Each creature and object in the dragon's space when they hit the ground and in a 6 x 4 line within 1 square of the dragon takes 7 damage. A creature who takes this damage and has A < 4 takes 4 extra damage per square the dragon fell and is [restrained](../../condition/restrained.md) (save ends). A creature not [restrained](../../condition/restrained.md) this way can move into the nearest unoccupied space.
      cost: 3 Malice
      icon: "\U0001F533"
      name: Swordfall
    - cost: 5 Malice
      icon: "\U0001F533"
      intro: The dragon shakes loose a cloud of shattered weapons in a 6 x 4 line within 1 square of them. Each creature and object in the area makes an **Agility test**.
      name: Shower of Blades
      power_roll:
        tiers:
            high: 7 damage
            low: 16 damage; [bleeding](../../condition/bleeding.md) (save ends)
            mid: 13 damage; [bleeding](../../condition/bleeding.md) (EoT)
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The dragon superheats the ground across the encounter map until the end of the round. Any enemy who starts their turn on the ground is slagged as if affected by the dragon's Slag Spew ability.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Meltdown
flavor: At the start of a crucible dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Crucible Dragon Malice
scc: mcdm.monsters.v1/monster.dragon/crucible-dragon-malice
type: featureblock
---

# Crucible Dragon Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Crucible Dragon Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of a crucible dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Swordfall</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">While the dragon is <a href="../../../movement/fly/">flying</a>, they shape themself into a blade and fall. Each creature and object in the dragon&#39;s space when they hit the ground and in a 6 x 4 line within 1 square of the dragon takes 7 damage. A creature who takes this damage and has A &lt; 4 takes 4 extra damage per square the dragon fell and is <a href="../../../condition/restrained/">restrained</a> (save ends). A creature not <a href="../../../condition/restrained/">restrained</a> this way can move into the nearest unoccupied space.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shower of Blades</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">The dragon shakes loose a cloud of shattered weapons in a 6 x 4 line within 1 square of them. Each creature and object in the area makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">16 damage; <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage; <a href="../../../condition/bleeding/">bleeding</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">7 damage</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Meltdown</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">The dragon superheats the ground across the encounter map until the end of the round. Any enemy who starts their turn on the ground is slagged as if affected by the dragon&#39;s Slag Spew ability.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of a crucible dragon&#39;s turn, you can spend [Malice](../../rule/monster/malice.md) to activate one of the following features.&#10;&#10;&gt; 🔳 **Swordfall (3 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; While the dragon is [flying](../../movement/fly.md), they shape themself into a blade and fall. Each creature and object in the dragon&#39;s space when they hit the ground and in a 6 x 4 line within 1 square of the dragon takes 7 damage. A creature who takes this damage and has A &lt; 4 takes 4 extra damage per square the dragon fell and is [restrained](../../condition/restrained.md) (save ends). A creature not [restrained](../../condition/restrained.md) this way can move into the nearest unoccupied space.&#10;&#10;&gt; 🔳 **Shower of Blades (5 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The dragon shakes loose a cloud of shattered weapons in a 6 x 4 line within 1 square of them. Each creature and object in the area makes an **Agility test**.&#10;&gt;&#10;&gt; - **≤11:** 16 damage; [bleeding](../../condition/bleeding.md) (save ends)&#10;&gt; - **12-16:** 13 damage; [bleeding](../../condition/bleeding.md) (EoT)&#10;&gt; - **17+:** 7 damage&#10;&#10;&gt; ☠️ **Solo Action (5 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The dragon takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).&#10;&#10;&gt; 🌀 **Meltdown (7 [Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The dragon superheats the ground across the encounter map until the end of the round. Any enemy who starts their turn on the ground is slagged as if affected by the dragon&#39;s Slag Spew ability."></template>
