---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: The arixx dribbles acid over their mandibles, causing the next strike they make to gain an [edge](../../rule/dice/edge.md) and deal an extra 3 acid damage.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Burning Maw
    - cost: 5 Malice
      icon: "\U0001F533"
      intro: The arixx's underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **[Agility](../../rule/character/agility.md) test**.
      name: Geyser
      power_roll:
        tiers:
            high: The target [shifts](../../movement/shifting.md) to the nearest unoccupied space outside the area.
            low: 4 damage; vertical [push](../../movement/forced-movement.md) 5
            mid: 4 damage; vertical [push](../../movement/forced-movement.md) 3
    - body: The arixx takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A < 1 is knocked [prone](../../condition/prone.md). Until the end of the encounter, each creature who starts their turn on the ground and can't [burrow](../../movement/burrow.md) must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn [prone](../../condition/prone.md) or underground. A creature who starts and ends their turn in the same space on the ground and can't [burrow](../../movement/burrow.md) sinks 1 square into the ground.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Earth Sink
flavor: At the start of an arixx's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Arixx Malice
scc: mcdm.monsters.v1/monster.arixx/arixx-malice
type: featureblock
---

# Arixx Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Arixx Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of an arixx&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Burning Maw</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">The arixx dribbles acid over their mandibles, causing the next strike they make to gain an <a href="../../../rule/dice/edge/">edge</a> and deal an extra 3 acid damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Geyser</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">The arixx&#39;s underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an <b><a href="../../../rule/character/agility/">Agility</a> test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; vertical <a href="../../../movement/forced-movement/">push</a> 5</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; vertical <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target <a href="../../../movement/shifting/">shifts</a> to the nearest unoccupied space outside the area.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The arixx takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Earth Sink</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A &lt; 1 is knocked <a href="../../../condition/prone/">prone</a>. Until the end of the encounter, each creature who starts their turn on the ground and can&#39;t <a href="../../../movement/burrow/">burrow</a> must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn <a href="../../../condition/prone/">prone</a> or underground. A creature who starts and ends their turn in the same space on the ground and can&#39;t <a href="../../../movement/burrow/">burrow</a> sinks 1 square into the ground.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="At the start of an arixx&#39;s turn, you can spend Malice to activate one of the following features.&#10;&#10;&gt; 👤 **Burning Maw (3 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The arixx dribbles acid over their mandibles, causing the next strike they make to gain an &#91;edge](../../rule/dice/edge.md) and deal an extra 3 acid damage.&#10;&#10;&gt; 🔳 **Geyser (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The arixx&#39;s underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **&#91;Agility](../../rule/character/agility.md) test**.&#10;&gt;&#10;&gt; - **≤11:** 4 damage; vertical &#91;push](../../movement/forced-movement.md) 5&#10;&gt; - **12-16:** 4 damage; vertical &#91;push](../../movement/forced-movement.md) 3&#10;&gt; - **17+:** The target &#91;shifts](../../movement/shifting.md) to the nearest unoccupied space outside the area.&#10;&#10;&gt; ☠️ **Solo Action (5 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The arixx takes an additional main action on their turn. They can use this feature even if they are &#91;dazed](../../condition/dazed.md).&#10;&#10;&gt; 🌀 **Earth Sink (7 &#91;Malice](../../rule/monster/malice.md))**&#10;&gt;&#10;&gt; The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A &lt; 1 is knocked &#91;prone](../../condition/prone.md). Until the end of the encounter, each creature who starts their turn on the ground and can&#39;t &#91;burrow](../../movement/burrow.md) must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn &#91;prone](../../condition/prone.md) or underground. A creature who starts and ends their turn in the same space on the ground and can&#39;t &#91;burrow](../../movement/burrow.md) sinks 1 square into the ground."></template>
