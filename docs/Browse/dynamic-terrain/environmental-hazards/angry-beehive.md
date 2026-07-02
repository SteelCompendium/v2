---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: The beehive can't be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters the hive's space or an [adjacent](../../rule/combat/adjacent.md) space without [shifting](../../movement/shifting.md).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm's space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature's space. After 3 rounds, the swarm dissipates.
    - body: |-
        **Concealed Hive (+1 EV)** The hive is hidden until the swarm is unleashed.

        **Killer Bees (+2 EV)** The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature [shifts](../../movement/shifting.md) into or while [adjacent](../../rule/combat/adjacent.md) to it, and the swarm deals 1d6 + 3 poison damage.
      icon: ⭐️
      name: Upgrades
flavor: This beehive is full of angry bees who swarm and attack with little provocation.
level: 2
name: Angry Beehive
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/angry-beehive
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: "3"
    - name: Size
      value: 1S
terrain_type: Hazard
type: dynamic-terrain
---

# Angry Beehive

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Angry Beehive</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="hexer">Hazard Hexer</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 2</div></div></header>
<div class="fb__flavor">This beehive is full of angry bees who swarm and attack with little provocation.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The beehive can&#39;t be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm&#39;s space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature&#39;s space. After 3 rounds, the swarm dissipates.</p></div></div>
<div class="fb__feat-body">A creature enters the hive&#39;s space or an <a href="../../../rule/combat/adjacent/">adjacent</a> space without <a href="../../../movement/shifting/">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Concealed Hive (+1 EV)</b> The hive is hidden until the swarm is unleashed.

<b>Killer Bees (+2 EV)</b> The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature <a href="../../../movement/shifting/">shifts</a> into or while <a href="../../../rule/combat/adjacent/">adjacent</a> to it, and the swarm deals 1d6 + 3 poison damage.</div>
</article>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="This beehive is full of angry bees who swarm and attack with little provocation.&#10;&#10;- **EV:** 2&#10;- **Stamina:** 3&#10;- **Size:** 1S&#10;&#10;&gt; 🌀 **Deactivate**&#10;&gt;&#10;&gt; The beehive can&#39;t be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.&#10;&#10;&gt; ❕ **Activate**&#10;&gt;&#10;&gt; A creature enters the hive&#39;s space or an [adjacent](../../rule/combat/adjacent.md) space without [shifting](../../movement/shifting.md).&#10;&gt;&#10;&gt; **Effect:** The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm&#39;s space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature&#39;s space. After 3 rounds, the swarm dissipates.&#10;&#10;&gt; ⭐️ **Upgrades**&#10;&gt;&#10;&gt; **Concealed Hive (+1 EV)** The hive is hidden until the swarm is unleashed.&#10;&gt;&#10;&gt; **Killer Bees (+2 EV)** The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature [shifts](../../movement/shifting.md) into or while [adjacent](../../rule/combat/adjacent.md) to it, and the swarm deals 1d6 + 3 poison damage."></template>
