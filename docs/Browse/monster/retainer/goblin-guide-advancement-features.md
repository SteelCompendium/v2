---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Weaving Knives
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 damage
            low: 5 damage
            mid: 9 damage
      sections:
        - label: Effect
          text: The guide [shifts](../../movement/shifting.md) up to their speed before and after the [strike](../../rule/combat/strike.md).
      target: One creature or object
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: Sneak and Stab
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; the guide and their mentor can each move up to their speed, then attempt to [hide](../../feature/common/maneuvers/hide.md)
            low: 8 damage
            mid: 12 damage; the guide and their mentor can each move up to their speed
      sections:
        - label: Effect
          text: If the guide is hidden from the target, this ability has a double edge.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Special
      icon: "\U0001F300"
      keywords:
        - '-'
      level: 10
      name: Poison Blade
      sections:
        - label: Effect
          text: The guide applies poison to their weapon. The next time the guide obtains a tier 2 or tier 3 outcome on a weapon [strike](../../rule/combat/strike.md), the [strike](../../rule/combat/strike.md) deals an extra 10 poison damage, and if the target has M < AVERAGE, they are [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends). If the guide is [adjacent](../../rule/combat/adjacent.md) to their mentor when they use Poison Blade, they apply poison to the mentor's weapon in the same way.
      target: Special
      usage: Main action
name: Goblin Guide Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/goblin-guide
type: featureblock
---

# Goblin Guide Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Goblin Guide Advancement Features</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Weaving Knives</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The guide <a href="../../../movement/shifting/">shifts</a> up to their speed before and after the <a href="../../../rule/combat/strike/">strike</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Sneak and Stab</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; the guide and their mentor can each move up to their speed</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; the guide and their mentor can each move up to their speed, then attempt to <a href="../../../feature/common/maneuvers/hide/">hide</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the guide is hidden from the target, this ability has a double edge.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Poison Blade</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The guide applies poison to their weapon. The next time the guide obtains a tier 2 or tier 3 outcome on a weapon <a href="../../../rule/combat/strike/">strike</a>, the <a href="../../../rule/combat/strike/">strike</a> deals an extra 10 poison damage, and if the target has M &lt; AVERAGE, they are <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends). If the guide is <a href="../../../rule/combat/adjacent/">adjacent</a> to their mentor when they use Poison Blade, they apply poison to the mentor&#39;s weapon in the same way.</p></div></div>
</article>
</div>
</div>
</article>
</div>
