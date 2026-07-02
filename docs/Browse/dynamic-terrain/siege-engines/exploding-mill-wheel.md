---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to an exploding mill wheel that isn't rolling can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The exploding mill wheel is deactivated and can't be used.
            low: The creature accidentally activates the **Roll the Wheel** ability.
            mid: The exploding mill wheel is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
      trailing: Once the wheel is rolling, it can't be deactivated. However, it can be exploded early by destroying it or blocking its movement with a suitably large creature or object.
    - distance: Special
      icon: "\U0001F300"
      keywords:
        - Area
      name: Roll the Wheel
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; push 3; M < 2 burning ([save](../../rule/general/saving-throw.md) ends)
            low: 5 damage; push 1; M < 0 burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 damage; push 2; M < 1 burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: When this ability is used and at the start of every turn thereafter, the exploding mill wheel rolls, moving 2 squares in a straight line. Each creature and object of size 2 or smaller in the area defined by the wheel's movement is targeted by the following power roll. A target [force moved](../../movement/forced-movement.md) this way is moved to either side of the wheel, as the Director determines.
      target: Each creature and object in the area
      trailing: If the wheel enters the space of any creature or object of size 3 or larger, or if it is reduced to 0 [Stamina](../../rule/health/stamina.md), its movement stops and it explodes. Each creature and object in a 5 burst centered on the wheel is targeted by the following power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
      usage: Main action (Adjacent creature)
    - icon: ⭐️
      intro: |-
        **Piloted (+4 EV)** The wheel has been fitted with a control mechanism and a pilot's seat for a creature of size 1M or smaller. As a move action, the pilot can turn the wheel in any direction while it is moving. As a main action, the pilot can leap out of the pilot's seat, landing in an [adjacent](../../rule/combat/adjacent.md) space while the wheel continues moving in a straight line.

        Without proper training, determining how to pilot the wheel requires a **Reason test**.
      name: Upgrade
      power_roll:
        tiers:
            high: The creature can pilot the wheel.
            low: The wheel immediately explodes as if striking a size 3 or larger creature or object.
            mid: The creature fails to pilot the wheel.
      trailing: On a natural 19 or 20, a creature can both pilot the wheel and can disarm its explosives as a maneuver.
flavor: A massive wooden wheel is loaded with explosives and rolled toward enemy forces or fortifications, ready to explode.
level: 3
name: Exploding Mill Wheel
role: Artillery
scc: mcdm.monsters.v1/dynamic-terrain.siege-engines/exploding-mill-wheel
stats:
    - name: EV
      value: "10"
    - name: Stamina
      value: "25"
    - name: Size
      value: "2"
terrain_type: Siege Engine
type: dynamic-terrain
---

# Exploding Mill Wheel

---

<div class="fb-wrap" data-role="artillery">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Exploding Mill Wheel</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 3</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="artillery">Siege Engine Artillery</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 10</div></div></header>
<div class="fb__flavor">A massive wooden wheel is loaded with explosives and rolled toward enemy forces or fortifications, ready to explode.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">10</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">25</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to an exploding mill wheel that isn&#39;t rolling can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature accidentally activates the <b>Roll the Wheel</b> ability.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The exploding mill wheel is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The exploding mill wheel is deactivated and can&#39;t be used.</span></div></div></div>
<div class="fb__feat-trailing">Once the wheel is rolling, it can&#39;t be deactivated. However, it can be exploded early by destroying it or blocking its movement with a suitably large creature or object.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Roll the Wheel</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action (Adjacent creature)</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; push 1; M &lt; 0 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; push 2; M &lt; 1 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; push 3; M &lt; 2 burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>When this ability is used and at the start of every turn thereafter, the exploding mill wheel rolls, moving 2 squares in a straight line. Each creature and object of size 2 or smaller in the area defined by the wheel&#39;s movement is targeted by the following power roll. A target <a href="../../../movement/forced-movement/">force moved</a> this way is moved to either side of the wheel, as the Director determines.</p></div></div>
<div class="fb__feat-trailing">If the wheel enters the space of any creature or object of size 3 or larger, or if it is reduced to 0 <a href="../../../rule/health/stamina/">Stamina</a>, its movement stops and it explodes. Each creature and object in a 5 burst centered on the wheel is targeted by the following power roll. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro"><b>Piloted (+4 EV)</b> The wheel has been fitted with a control mechanism and a pilot&#39;s seat for a creature of size 1M or smaller. As a move action, the pilot can turn the wheel in any direction while it is moving. As a main action, the pilot can leap out of the pilot&#39;s seat, landing in an <a href="../../../rule/combat/adjacent/">adjacent</a> space while the wheel continues moving in a straight line.

Without proper training, determining how to pilot the wheel requires a <b>Reason test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The wheel immediately explodes as if striking a size 3 or larger creature or object.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature fails to pilot the wheel.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature can pilot the wheel.</span></div></div></div>
<div class="fb__feat-trailing">On a natural 19 or 20, a creature can both pilot the wheel and can disarm its explosives as a maneuver.</div>
</article>
</div>
</article>
</div>
