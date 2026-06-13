---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The beehive can't be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters the hive's space or an [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) space without [shifting](scc:mcdm.heroes.v1/movement/shifting).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm's space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature's space. After 3 rounds, the swarm dissipates.
    - body: |-
        **Concealed Hive (+1 EV)** The hive is hidden until the swarm is unleashed.

        **Killer Bees (+2 EV)** The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature [shifts](scc:mcdm.heroes.v1/movement/shifting) into or while [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to it, and the swarm deals 1d6 + 3 poison damage.
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
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Hazard · Hexer</div>
<h2 class="fb__name">Angry Beehive</h2>
</header>
<div class="fb__flavor">This beehive is full of angry bees who swarm and attack with little provocation.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The beehive can&#39;t be deactivated. If it takes damage or is destroyed, the hive unleashes a swarm of bees.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The hive is removed from the encounter map and a swarm of bees is placed in one square of the space of the triggering creature. Any creature who starts their turn in the swarm&#39;s space takes 3 poison damage. At the start of each round, the swarm moves 1 square and its size increases by 1 square (to 2 squares by 2 squares, 3 squares by 3 squares, and so forth), preferring squares in a creature&#39;s space. After 3 rounds, the swarm dissipates.</p></div></div>
<div class="fb__feat-body">A creature enters the hive&#39;s space or an <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> space without <a href="../scc:mcdm.heroes.v1/movement/shifting">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Concealed Hive (+1 EV)</b> The hive is hidden until the swarm is unleashed.

<b>Killer Bees (+2 EV)</b> The bees are a particularly aggressive and dangerous species. The hive triggers even if a creature <a href="../scc:mcdm.heroes.v1/movement/shifting">shifts</a> into or while <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to it, and the swarm deals 1d6 + 3 poison damage.</div>
</article>
</div>
</article>
</div>
