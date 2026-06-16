---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a boiling oil cauldron can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The boiling oil cauldron is deactivated and can't be used.
            low: The creature accidentally activates the **Boiling Oil** ability.
            mid: The boiling oil cauldron is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Weapon
      name: Boiling Oil
      power_roll:
        formula: + 2
        tiers:
            high: 12 fire damage; M < 3 burning ([save](../../rule/general/saving-throw.md) ends)
            low: 5 fire damage; M < 1 burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 fire damage; M < 2 burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: If the boiling oil is poured down on targets from above, it has [high ground](../../movement/high-ground.md) and gains an edge on the power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can't be used again until the boiling oil cauldron is reloaded.
      target: Each creature and object in the area
      usage: Main action (Adjacent creature)
    - distance: '-'
      icon: ⭐️
      keywords:
        - '-'
      name: Reload
      sections:
        - label: Effect
          text: The boiling oil cauldron is reloaded, allowing **Boiling Oil** to be used again. This action can be used only once per round.
      target: '-'
      usage: Main action (Adjacent creature)
flavor: A large cauldron of boiling oil stands ready to be poured onto enemies.
level: 3
name: Boiling Oil Cauldron
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/boiling-oil-cauldron
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "50"
    - name: Size
      value: 1L
terrain_type: Fortification
type: dynamic-terrain
---

# Boiling Oil Cauldron

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 3 Fortification · Defender</div>
<h2 class="fb__name">Boiling Oil Cauldron</h2>
</header>
<div class="fb__flavor">A large cauldron of boiling oil stands ready to be poured onto enemies.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">10</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">50</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1L</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a boiling oil cauldron can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Boiling Oil</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The boiling oil cauldron is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The boiling oil cauldron is deactivated and can&#39;t be used.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action (Adjacent creature)</div><h3 class="fb__feat-name sc-ability__name">Boiling Oil</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 fire damage; M &lt; 1 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 fire damage; M &lt; 2 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 fire damage; M &lt; 3 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the boiling oil is poured down on targets from above, it has <a href="../../../movement/high-ground/">high ground</a> and gains an edge on the power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. This ability can&#39;t be used again until the boiling oil cauldron is reloaded.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action (Adjacent creature)</div><h3 class="fb__feat-name sc-ability__name">Reload</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">-</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">-</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The boiling oil cauldron is reloaded, allowing <b>Boiling Oil</b> to be used again. This action can be used only once per round.</p></div></div>
</article>
</div>
</article>
</div>
