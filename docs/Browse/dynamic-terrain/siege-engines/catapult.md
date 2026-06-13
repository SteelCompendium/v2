---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to a catapult can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The catapult is deactivated and can't be used.
            low: The creature accidentally activates the **Arcing Shot** ability.
            mid: The catapult is deactivated but the creature is [slowed](scc:mcdm.heroes.v1/condition/slowed) (EoT).
    - distance: 3 cube within 20
      icon: "\U0001F533"
      keywords:
        - '- Area'
        - Ranged
        - Weapon
      name: Arcing Shot
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; A < 1 push 2
            low: 5 damage
            mid: 9 damage; A < 0 push 1
      sections:
        - label: Effect
          text: Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can't be used again until the catapult is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The catapult is reloaded, allowing **Arcing Shot** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Arcing Shot** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The catapult and the creature using this action move together up to 2 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Air Assault (+2 EV)** The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.

        **Flammable (+2 EV) Arcing Shot** deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.
      icon: ⭐️
      name: Upgrades
flavor: This massive counterweighted engine hurls a heavy projectile for a devastating assault.
level: 3
name: Catapult
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/catapult
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "50"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Deactivate

---

<div class="fb-wrap" data-role="artillery">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Siege Engine · Artillery</div>
<h2 class="fb__name">Catapult</h2>
</header>
<div class="fb__flavor">This massive counterweighted engine hurls a heavy projectile for a devastating assault.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">10</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">50</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Arcing Shot</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The catapult is deactivated but the creature is <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The catapult is deactivated and can&#39;t be used.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to a catapult can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Arcing Shot</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">- Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; A &lt; 0 push 1</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; A &lt; 1 push 2</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Line of effect for this ability is an arc that can be traced over obstacles between the catapult and the target area. This ability can&#39;t be used again until the catapult is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Reload</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The catapult is reloaded, allowing <b>Arcing Shot</b> to be used again. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Spot</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next use of <b>Arcing Shot</b> gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Move</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The catapult and the creature using this action move together up to 2 squares.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Air Assault (+2 EV)</b> The side fielding the catapult has trained their forces to safely use the siege engine to launch them across the battlefield. As an adjacent creature main action, the catapult can be used to vertical push 10 any ally of size 1L or less. If the ally lands in an unoccupied space, they take no damage.

<b>Flammable (+2 EV) Arcing Shot</b> deals fire damage, and the area of that ability is on fire until the end of the encounter. Any creature who enters the area for the first time in a round or starts their turn there takes 2 fire damage.</div>
</article>
</div>
</article>
</div>
