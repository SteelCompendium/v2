---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: 5 cube within 3
      icon: "\U0001F533"
      keywords:
        - Area
        - Psionic
        - Ranged
        - Weapon
      name: Gravity Well
      sections:
        - label: Effect
          text: A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature [adjacent](../../rule/combat/adjacent.md) to the well uses a maneuver to deactivate it. The area is [difficult terrain](../../movement/difficult-terrain.md) for enemies. Any enemy who ends their turn in the area is [pulled](../../movement/forced-movement.md) up to 4 squares toward the well.
      target: Special
      usage: Maneuver
    - body: Until the end of the round, each time raider gains a +3 bonus to speed, and can [teleport](../../movement/teleport.md) up to their speed as a move action.
      cost: 5 Malice
      icon: ⭐️
      name: Recall Module
    - cost: 10 Malice
      icon: "\U0001F300"
      intro: All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest [Stamina](../../rule/health/stamina.md) maximum drops to 0 [Stamina](../../rule/health/stamina.md) or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a **Reason test** against this psionic effect at the start of each round.
      name: Psi-Cage
      power_roll:
        tiers:
            high: No effect.
            low: 10 psychic damage; [slowed](../../condition/slowed.md) (EoT)
            mid: 7 psychic damage; [slowed](../../condition/slowed.md) (EoT)
flavor: At the start of any time raider's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Time Raider Malice
scc: mcdm.monsters.v1/monster.time-raiders/time-raider-malice
type: featureblock
---

# Time Raider Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Time Raider Malice</h2>
</header>
<div class="fb__flavor">At the start of any time raider&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Gravity Well</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 cube within 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A time raider acting this turn activates a gravity well in the area. The gravity well sits at the center of the cube and lasts until the end of the encounter, or until a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the well uses a maneuver to deactivate it. The area is <a href="../../../movement/difficult-terrain/">difficult terrain</a> for enemies. Any enemy who ends their turn in the area is <a href="../../../movement/forced-movement/">pulled</a> up to 4 squares toward the well.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Recall Module</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each time raider gains a +3 bonus to speed, and can <a href="../../../movement/teleport/">teleport</a> up to their speed as a move action.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Psi-Cage</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-intro">All time raiders in the encounter collectively create a psionic field over the encounter map, which lasts until the first time raider with the highest <a href="../../../rule/health/stamina/">Stamina</a> maximum drops to 0 <a href="../../../rule/health/stamina/">Stamina</a> or chooses to end the field (no action required). While the field is up, each non-time raider on the map makes a <b>Reason test</b> against this psionic effect at the start of each round.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 psychic damage; <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">7 psychic damage; <a href="../../../condition/slowed/">slowed</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>
