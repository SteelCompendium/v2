---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: A dwarf can destroy one [adjacent](../../rule/combat/adjacent.md) object or square of wall for each 3 [Malice](../../rule/monster/malice.md) spent. Each enemy [adjacent](../../rule/combat/adjacent.md) to the destroyed object or square takes the object's Stamina in damage (3 for wood, 6 for stone, or 9 for metal).
      cost: 3 Malice
      icon: "\U0001F464"
      name: Breaching Charge
    - body: Each dwarf acting this turn can automatically climb at full speed while moving. At any point during this movement, they can make a [free strike](../../feature/common/main-actions/free-strike.md).
      cost: 5 Malice
      icon: ⭐️
      name: Rappelling Barrage
    - cost: 7 Malice
      distance: 10 x 1 line within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      name: Snaring Line
      power_roll:
        tiers:
            high: No effect.
            low: 8 damage; [restrained](../../condition/restrained.md) (EoT)
            mid: 6 damage; [slowed](../../condition/slowed.md) (EoT)
      sections:
        - label: Effect
          text: Each target makes an **Agility test**.
        - label: Special
          text: This ability can't be used by a [minion](../../rule/organization/minion.md).
      target: Each enemy in the area
      trailing: The snaring line remains until the end of the encounter. Any enemy who moves into the area for the first time in a round or starts their turn there must make the test.
      usage: Main action
flavor: At the start of any dwarf's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Dwarf Malice
scc: mcdm.monsters.v1/monster.dwarves/dwarf-malice
type: featureblock
---

# Dwarf Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Dwarf Malice</h2>
</header>
<div class="fb__flavor">At the start of any dwarf&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Breaching Charge</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">A dwarf can destroy one <a href="../../../rule/combat/adjacent/">adjacent</a> object or square of wall for each 3 <a href="../../../rule/monster/malice/">Malice</a> spent. Each enemy <a href="../../../rule/combat/adjacent/">adjacent</a> to the destroyed object or square takes the object&#39;s Stamina in damage (3 for wood, 6 for stone, or 9 for metal).</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Rappelling Barrage</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each dwarf acting this turn can automatically climb at full speed while moving. At any point during this movement, they can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Snaring Line</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 x 1 line within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; <a href="../../../condition/restrained/">restrained</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target makes an <b>Agility test</b>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../../../rule/organization/minion/">minion</a>.</p></div></div>
<div class="fb__feat-trailing">The snaring line remains until the end of the encounter. Any enemy who moves into the area for the first time in a round or starts their turn there must make the test.</div>
</article>
</div>
</article>
</div>
