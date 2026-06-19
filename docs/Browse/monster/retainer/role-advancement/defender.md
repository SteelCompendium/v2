---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
      level: 4
      name: Watch Out!
      sections:
        - label: Trigger
          text: The target takes damage from a strike.
        - label: Effect
          text: The retainer [pushes](../../../movement/forced-movement.md) the target or the attacking creature up to 2 squares. If that moves the mentor out of distance of the strike, the strike has no effect.
      target: The retainer's mentor
      usage: Triggered action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 7
      name: It's Me You Want!
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; [taunted](../../../condition/taunted.md) ([save](../../../rule/general/saving-throw.md) ends)
            low: 7 damage; [taunted](../../../condition/taunted.md) (EoT)
            mid: 11 damage; [taunted](../../../condition/taunted.md) ([save](../../../rule/general/saving-throw.md) ends)
      target: Two creatures
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Weapon
      level: 10
      name: Last Stand
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 17 damage
            low: 8 damage
            mid: 13 damage
      sections:
        - label: Effect
          text: The retainer and their mentor each gain 10 [temporary Stamina](../../../rule/health/temporary-stamina.md). Additionally, each [winded](../../../rule/health/winded.md) ally within 2 squares of the retainer can spend a [Recovery](../../../rule/health/recoveries.md).
      target: One enemy
      usage: Main action
name: Defender Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/defender
type: featureblock
---

# Defender Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Defender Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Triggered action</div><h3 class="fb__feat-name sc-ability__name">Watch Out!</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The retainer&#39;s mentor</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The target takes damage from a strike.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer <a href="../../../../movement/forced-movement/">pushes</a> the target or the attacking creature up to 2 squares. If that moves the mentor out of distance of the strike, the strike has no effect.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">It&#39;s Me You Want!</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Two creatures</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; <a href="../../../../condition/taunted/">taunted</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage; <a href="../../../../condition/taunted/">taunted</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; <a href="../../../../condition/taunted/">taunted</a> (<a href="../../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Last Stand</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">17 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The retainer and their mentor each gain 10 <a href="../../../../rule/health/temporary-stamina/">temporary Stamina</a>. Additionally, each <a href="../../../../rule/health/winded/">winded</a> ally within 2 squares of the retainer can spend a <a href="../../../../rule/health/recoveries/">Recovery</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>
