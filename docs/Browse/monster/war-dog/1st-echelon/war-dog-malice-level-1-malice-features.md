---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: One war dog acting this turn tears apart a nearby corpse of a humanoid and incorporates its body parts into their own. The war dog regains [Stamina](../../../rule/health/stamina.md) equal to 5 times their level.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Reconstitute
    - cost: 5 Malice
      distance: 4 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      name: Fire for Effect
      power_roll:
        tiers:
            high: 5 fire damage
            low: 5 fire damage; [slowed](../../../condition/slowed.md) or [weakened](../../../condition/weakened.md) (save ends)
            mid: 5 fire damage; [slowed](../../../condition/slowed.md) or [weakened](../../../condition/weakened.md) (EoT)
      sections:
        - label: Effect
          text: Each target makes an **Agility test**. The same condition is imposed on each affected target.
      target: Each creature in the area
      usage: Maneuver
    - body: Each war dog [minion](../../../rule/organization/minion.md) in the encounter [shifts](../../../movement/shifting.md) up to their speed and can make a [free strike](../../../feature/common/main-actions/free-strike.md). A [minion](../../../rule/organization/minion.md) who does so is then reduced to 0 [Stamina](../../../rule/health/stamina.md).
      cost: 7 Malice
      icon: ⭐️
      name: Fodder Run
flavor: At the start of any war dog's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 1
name: War Dog Malice (Level 1+ Malice Features)
scc: mcdm.monsters.v1/monster.war-dog.1st-echelon/war-dog-malice-level-1-malice-features
type: featureblock
---

# War Dog Malice (Level 1+ Malice Features)

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">War Dog Malice (Level 1+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any war dog&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Reconstitute</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">One war dog acting this turn tears apart a nearby corpse of a humanoid and incorporates its body parts into their own. The war dog regains <a href="../../../../rule/health/stamina/">Stamina</a> equal to 5 times their level.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Fire for Effect</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 fire damage; <a href="../../../../condition/slowed/">slowed</a> or <a href="../../../../condition/weakened/">weakened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 fire damage; <a href="../../../../condition/slowed/">slowed</a> or <a href="../../../../condition/weakened/">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 fire damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target makes an <b>Agility test</b>. The same condition is imposed on each affected target.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Fodder Run</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Each war dog <a href="../../../../rule/organization/minion/">minion</a> in the encounter <a href="../../../../movement/shifting/">shifts</a> up to their speed and can make a <a href="../../../../feature/common/main-actions/free-strike/">free strike</a>. A <a href="../../../../rule/organization/minion/">minion</a> who does so is then reduced to 0 <a href="../../../../rule/health/stamina/">Stamina</a>.</div>
</article>
</div>
</article>
</div>
