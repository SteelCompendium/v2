---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a pavise shield controlled by another creature can make a **Might test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The creature making the test grabs the shield and takes control of it.
            low: The creature controlling the shield retains control of it and can make an [opportunity attack](../../rule/combat/opportunity-attack.md) against the creature making the test.
            mid: The creature controlling the shield retains control of it.
    - body: |-
        While a creature has the pavise shield grabbed, they have [cover](../../rule/combat/cover.md) and take half damage from abilities whose line of effect extends through the shield. The pavise shield takes the other half of the damage.

        While a creature has a pavise shield grabbed, their speed is halved and they move the shield like a [grabbed](../../condition/grabbed.md) creature.
      icon: ⭐️
      name: Controlling the Shield
flavor: A reinforced metal shield embedded in the ground acts as cover for the creature controlling it.
level: 1
name: Pavise Shield
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/pavise-shield
stats:
    - name: EV
      value: "1"
    - name: Stamina
      value: "9"
    - name: Size
      value: 1M
terrain_type: Fortification
type: dynamic-terrain
---

# Pavise Shield

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Fortification · Defender</div>
<h2 class="fb__name">Pavise Shield</h2>
</header>
<div class="fb__flavor">A reinforced metal shield embedded in the ground acts as cover for the creature controlling it.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">9</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">1M</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a pavise shield controlled by another creature can make a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature controlling the shield retains control of it and can make an <a href="../../../rule/combat/opportunity-attack/">opportunity attack</a> against the creature making the test.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature controlling the shield retains control of it.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The creature making the test grabs the shield and takes control of it.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Controlling the Shield</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">While a creature has the pavise shield grabbed, they have <a href="../../../rule/combat/cover/">cover</a> and take half damage from abilities whose line of effect extends through the shield. The pavise shield takes the other half of the damage.

While a creature has a pavise shield grabbed, their speed is halved and they move the shield like a <a href="../../../condition/grabbed/">grabbed</a> creature.</div>
</article>
</div>
</article>
</div>
