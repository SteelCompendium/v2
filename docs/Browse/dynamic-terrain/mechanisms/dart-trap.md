---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: As a maneuver, a creature [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to a dart trap can make an **Agility test**.
      icon: "\U0001F300"
      name: Deactivate
      power_roll:
        tiers:
            high: The trap is deactivated and doesn’t trigger.
            low: The creature triggers the trap and is targeted by it.
            mid: The trap is deactivated but the creature is [slowed](scc:mcdm.heroes.v1/condition/slowed) (EoT).
    - body: A [pressure plate](scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate), [switch](scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/switch), or other linked trigger is activated.
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
          text: A [pressure plate](scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate), [switch](scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/switch), or other linked trigger is activated.
      target: One creature or object
      usage: Free triggered action
    - body: |-
        **Poison Darts (+2 EV)** The darts are tipped with poison. Any creature who takes damage from a dart also takes 1d6 poison damage at the start of each of their turns ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends).

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
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Trap · Ambusher</div>
<h2 class="fb__name">Dart Trap</h2>
</header>
<div class="fb__flavor">A concealed dart thrower hurls missiles at short range.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1S</div></div>
<div class="fb__stat"><div class="fb__stat-l">Direction</div><div class="fb__stat-v">The dart trap fires in a fixed direction.</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature triggers the trap and is targeted by it.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The trap is deactivated but the creature is <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The trap is deactivated and doesn’t trigger.</span></div></div></div>
<div class="fb__feat-body">As a maneuver, a creature <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to a dart trap can make an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Dart</b> ability.</p></div></div>
<div class="fb__feat-body">A <a href="../scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate">pressure plate</a>, <a href="../scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/switch">switch</a>, or other linked trigger is activated.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Dart</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">2 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A <a href="../scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/pressure-plate">pressure plate</a>, <a href="../scc:mcdm.monsters.v1/dynamic-terrain.mechanisms/switch">switch</a>, or other linked trigger is activated.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Poison Darts (+2 EV)</b> The darts are tipped with poison. Any creature who takes damage from a dart also takes 1d6 poison damage at the start of each of their turns (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends).

<b>Large Darts (+1 EV)</b> Larger, heavier darts impart kinetic force to the trap&#39;s attack. A target of the <b>Dart</b> ability is pushed 1 square on a tier 1 outcome, 2 squares on a tier 2 outcome, or 3 squares on a tier 3 outcome.

<b>Gatling Darts (+4 EV)</b> The dart trap is equipped with multiple barrels to launch darts at a high rate of fire. The <b>Dart</b> ability loses the Ranged and Strike and takes the Area keyword, its area becomes a 5 x 1 line within 1, and it deals an extra 1d6 damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Hidden</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The dart trap is hidden until triggered or detected.</div>
</article>
</div>
</article>
</div>
