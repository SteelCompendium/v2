---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a field ballista can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The field ballista is deactivated and can't be used.
            low: The creature accidentally activates the **Release Bolt** ability.
            mid: The field ballista is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Release Bolt
      power_roll:
        formula: + 2
        tiers:
            high: 11 damage; M < 2 push 2
            low: 5 damage
            mid: 8 damage; M < 1 push 1
      sections:
        - label: Effect
          text: This ability can't be used again until the field ballista is reloaded.
      target: One creature or object
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The field ballista is reloaded, allowing **Release Bolt** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Release Bolt** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The field ballista and the creature using this action move together up to 3 squares.
      target: '-'
      usage: Main action (Adjacent creature)
    - body: |-
        **Penetrating Bolt (+2 EV)** The field ballista targets the nearest two additional creatures or objects in a straight line beyond the initial target.

        **Chain Bolt (+2 EV)** The field ballista's bolts are set with heavy chains that wrap around targets. The **Chain Bolt** ability replaces **Release Bolt**, and the field ballista gains the **Crank the Chain** ability.
      icon: ⭐️
      name: Upgrades
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Chain Bolt
      power_roll:
        formula: + 2
        tiers:
            high: 10 damage; M < 2 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 4 damage
            mid: 7 damage; M < 1 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: This ability can't be used again until the field ballista is reloaded.
      target: One creature or object
      usage: Main action (Adjacent creature)
    - distance: Ranged 20
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Crank the Chain
      power_roll:
        formula: + 2
        tiers:
            high: Pull 5
            low: Pull 1
            mid: Pull 3
      sections:
        - label: Special
          text: The target must be [slowed](../../condition/slowed.md) by the field ballista.
        - label: Effect
          text: This [forced movement](../../movement/forced-movement.md) triggers [opportunity attacks](../../rule/combat/opportunity-attack.md).
      target: One creature
      usage: Main action (Adjacent creature)
flavor: A massive crossbow fires thick metal bolts with devastating effect.
level: 2
name: Field Ballista
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/field-ballista
stats:
    - name: EV
      value: "8"
    - name: Stamina
      value: "40"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Field Ballista

---

<div class="fb-wrap" data-role="artillery">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Field Ballista</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 2</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="artillery">Siege Engine Artillery</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 8</div></div></header>
<div class="fb__flavor">A massive crossbow fires thick metal bolts with devastating effect.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">8</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">40</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a field ballista can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Release Bolt</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The field ballista is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The field ballista is deactivated and can&#39;t be used.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Release Bolt</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage; M &lt; 1 push 1</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 damage; M &lt; 2 push 2</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used again until the field ballista is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Reload</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The field ballista is reloaded, allowing <b>Release Bolt</b> to be used again. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spot</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next use of <b>Release Bolt</b> gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Move</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The field ballista and the creature using this action move together up to 3 squares.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Penetrating Bolt (+2 EV)</b> The field ballista targets the nearest two additional creatures or objects in a straight line beyond the initial target.

<b>Chain Bolt (+2 EV)</b> The field ballista&#39;s bolts are set with heavy chains that wrap around targets. The <b>Chain Bolt</b> ability replaces <b>Release Bolt</b>, and the field ballista gains the <b>Crank the Chain</b> ability.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Chain Bolt</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">7 damage; M &lt; 1 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 damage; M &lt; 2 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used again until the field ballista is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Crank the Chain</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 20</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">Pull 1</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">Pull 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">Pull 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The target must be <a href="../../../condition/slowed/">slowed</a> by the field ballista.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>This <a href="../../../movement/forced-movement/">forced movement</a> triggers <a href="../../../rule/combat/opportunity-attack/">opportunity attacks</a>.</p></div></div>
</article>
</div>
</article>
</div>
