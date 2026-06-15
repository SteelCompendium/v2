---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to an iron dragon can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The iron dragon is deactivated and can't be used.
            low: The creature accidentally activates the **Gout of Flame** ability.
            mid: The iron dragon is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - distance: 8 x 2 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Weapon
      name: Gout of Flame
      power_roll:
        formula: + 2
        tiers:
            high: 13 fire damage; A < 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            low: 6 fire damage; A < 0 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 10 fire damage; A < 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can't be used again until the iron dragon is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The iron dragon is reloaded, allowing **Gout of Flame** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Spot
      sections:
        - label: Effect
          text: The next use of **Gout of Flame** gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Move
      sections:
        - label: Effect
          text: The iron dragon and the creature using this action move together up to 2 squares.
      target: '-'
      usage: Main action (Adjacent creature)
flavor: A massive metal device uses a bellows system and liquid fuel to shoot out gouts of flame.
level: 4
name: Iron Dragon
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/iron-dragon
stats:
    - name: EV
      value: "12"
    - name: Stamina
      value: "60"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Iron Dragon

---

<div class="fb-wrap" data-role="artillery">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 4 Siege Engine · Artillery</div>
<h2 class="fb__name">Iron Dragon</h2>
</header>
<div class="fb__flavor">A massive metal device uses a bellows system and liquid fuel to shoot out gouts of flame.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">12</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">60</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Gout of Flame</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The iron dragon is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The iron dragon is deactivated and can&#39;t be used.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to an iron dragon can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Gout of Flame</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">8 x 2 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 fire damage; A &lt; 0 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 fire damage; A &lt; 1 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 fire damage; A &lt; 2 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can&#39;t be used again until the iron dragon is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Reload</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The iron dragon is reloaded, allowing <b>Gout of Flame</b> to be used again. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Spot</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next use of <b>Gout of Flame</b> gains an edge and has a +10 bonus to ranged distance. This action can be used only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Move</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The iron dragon and the creature using this action move together up to 2 squares.</p></div></div>
</article>
</div>
</article>
</div>
