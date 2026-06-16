---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of stakes must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters an area of stakes from the front.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature takes 2 damage per square of stakes they enter. If they are [force moved](../../movement/forced-movement.md) into an area of stakes, they take an additional 3 damage.
    - body: |-
        **Poison (+2 EV)** The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns ([save](../../rule/general/saving-throw.md) ends).

        **Sticky (+3 EV)** A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the **Sticky Stakes** ability in addition to suffering the stakes' other effects.
      icon: ⭐️
      name: Upgrades
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Sticky Stakes
      power_roll:
        formula: + 2
        tiers:
            high: A < 2 [restrained](../../condition/restrained.md) ([save](../../rule/general/saving-throw.md) ends)
            low: No effect.
            mid: A < 1 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters an area of sticky stakes.
      target: The triggering creature or object
      usage: Free triggered action
    - body: Allies of this object ignore the [difficult terrain](../../movement/difficult-terrain.md) created by the stakes, take no damage from moving through the stakes unless they are [force moved](../../movement/forced-movement.md), and have [cover](../../rule/combat/cover.md) while in an area of archer's stakes.
      icon: ⭐️
      name: Allied Awareness
flavor: A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.
level: 1
name: Archer's Stakes
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/archers-stakes
stats:
    - name: EV
      value: "2"
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Typical Space
      value: 4 x 1-square area
    - name: Direction
      value: One side of the stakes is defined as the front.
terrain_type: Fortification
type: dynamic-terrain
---

# Archer's Stakes

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Fortification · Defender</div>
<h2 class="fb__name">Archer&#39;s Stakes</h2>
</header>
<div class="fb__flavor">A series of sharp stakes have been placed point-out to protect defenders against charges and other direct attacks.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Typical Space</div><div class="fb__stat-v">4 x 1-square area</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">One side of the stakes is defined as the front.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each square of stakes must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Activate</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature takes 2 damage per square of stakes they enter. If they are <a href="../../../movement/forced-movement/">force moved</a> into an area of stakes, they take an additional 3 damage.</p></div></div>
<div class="fb__feat-body">A creature enters an area of stakes from the front.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Upgrades</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Poison (+2 EV)</b> The tips of the stakes have poison applied to them. Any creature who takes damage from the stakes also takes 1d6 poison damage at the start of each of their turns (<a href="../../../rule/general/saving-throw/">save</a> ends).

<b>Sticky (+3 EV)</b> A sticky slime or webbing has been applied to the stakes and the ground between them. Any creature who enters an area of stakes triggers the <b>Sticky Stakes</b> ability in addition to suffering the stakes&#39; other effects.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Free triggered action</div><h3 class="fb__feat-name sc-ability__name">Sticky Stakes</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">No effect.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">A &lt; 1 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">A &lt; 2 <a href="../../../condition/restrained/">restrained</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters an area of sticky stakes.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Allied Awareness</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Allies of this object ignore the <a href="../../../movement/difficult-terrain/">difficult terrain</a> created by the stakes, take no damage from moving through the stakes unless they are <a href="../../../movement/forced-movement/">force moved</a>, and have <a href="../../../rule/combat/cover/">cover</a> while in an area of archer&#39;s stakes.</div>
</article>
</div>
</article>
</div>
