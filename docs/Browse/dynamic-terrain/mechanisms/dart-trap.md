---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a dart trap can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn’t trigger.
            low: The creature triggers the trap and is targeted by it.
            mid: The trap is deactivated but the creature is [slowed](../../condition/slowed.md) (EoT).
    - body: A [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Dart** ability.
    - distance: Ranged 5
      icon: ❗️
      keywords:
        - Ranged
        - Strike
        - Weapon
      name: Dart
      power_roll:
        formula: + 2
        tiers:
            high: 5 damage
            low: 2 damage
            mid: 4 damage
      sections:
        - label: Trigger
          text: A [pressure plate](pressure-plate.md), [switch](switch.md), or other linked trigger is activated.
      target: One creature or object
      usage: Free triggered action
    - body: |-
        **Poison Darts (+2 EV)** The darts are tipped with poison. Any creature who takes damage from a dart also takes 1d6 poison damage at the start of each of their turns ([save](../../rule/general/saving-throw.md) ends).

        **Large Darts (+1 EV)** Larger, heavier darts impart kinetic force to the trap's attack. A target of the **Dart** ability is pushed 1 square on a tier 1 outcome, 2 squares on a tier 2 outcome, or 3 squares on a tier 3 outcome.

        **Gatling Darts (+4 EV)** The dart trap is equipped with multiple barrels to launch darts at a high rate of fire. The **Dart** ability loses the Ranged and Strike and takes the Area keyword, its area becomes a 5 x 1 line within 1, and it deals an extra 1d6 damage.
      icon: ⭐️
      name: Upgrades
    - body: The dart trap is hidden until triggered or detected.
      icon: ⭐️
      name: Hidden
flavor: A concealed dart thrower hurls missiles at short range.
level: 1
name: Dart Trap
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.mechanisms/dart-trap
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "3"
    - name: Size
      value: 1S
    - name: Direction
      value: The dart trap fires in a fixed direction.
terrain_type: Trap
type: dynamic-terrain
---

# Dart Trap

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Dart Trap</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="ambusher">Trap Ambusher</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 1</div></div></header>
<div class="fb__flavor">A concealed dart thrower hurls missiles at short range.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">The dart trap fires in a fixed direction.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a dart trap can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is targeted by it.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../../../condition/slowed/">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn’t trigger.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Dart</b> ability.</p></div></div>
<div class="fb__feat-body">A <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Dart</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">2 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A <a href="../pressure-plate/">pressure plate</a>, <a href="../switch/">switch</a>, or other linked trigger is activated.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrades</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Poison Darts (+2 EV)</b> The darts are tipped with poison. Any creature who takes damage from a dart also takes 1d6 poison damage at the start of each of their turns (<a href="../../../rule/general/saving-throw/">save</a> ends).

<b>Large Darts (+1 EV)</b> Larger, heavier darts impart kinetic force to the trap&#39;s attack. A target of the <b>Dart</b> ability is pushed 1 square on a tier 1 outcome, 2 squares on a tier 2 outcome, or 3 squares on a tier 3 outcome.

<b>Gatling Darts (+4 EV)</b> The dart trap is equipped with multiple barrels to launch darts at a high rate of fire. The <b>Dart</b> ability loses the Ranged and Strike and takes the Area keyword, its area becomes a 5 x 1 line within 1, and it deals an extra 1d6 damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hidden</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The dart trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
