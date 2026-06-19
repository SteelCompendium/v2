---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
      level: 4
      name: Battlefield Medic
      sections:
        - label: Effect
          text: The target spends a [Recovery](../../../rule/health/recoveries.md), and ability rolls against the target take a bane until the start of the retainer's next turn.
      target: Self or one ally
      usage: Maneuver
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 7
      name: Focus Fire
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 18 damage
            low: 9 damage
            mid: 13 damage
      sections:
        - label: Effect
          text: One ally within distance gains 2 [surges](../../../rule/resource/surge.md).
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
      level: 10
      name: Back from the Dead
      sections:
        - label: Effect
          text: If the target is at or below 0 [Stamina](../../../rule/health/stamina.md), or if they have died due to [Stamina](../../../rule/health/stamina.md) loss since the end of the retainer's last turn, the target is alive with 1 [Stamina](../../../rule/health/stamina.md) and can spend a [Recovery](../../../rule/health/recoveries.md).
      target: One ally
      usage: Main action
name: Support Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/support
type: featureblock
---

# Support Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Support Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Maneuver</div><h3 class="fb__feat-name sc-ability__name">Battlefield Medic</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self or one ally</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target spends a <a href="../../../../rule/health/recoveries/">Recovery</a>, and ability rolls against the target take a bane until the start of the retainer&#39;s next turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Focus Fire</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">9 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">18 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>One ally within distance gains 2 <a href="../../../../rule/resource/surge/">surges</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Back from the Dead</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One ally</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target is at or below 0 <a href="../../../../rule/health/stamina/">Stamina</a>, or if they have died due to <a href="../../../../rule/health/stamina/">Stamina</a> loss since the end of the retainer&#39;s last turn, the target is alive with 1 <a href="../../../../rule/health/stamina/">Stamina</a> and can spend a <a href="../../../../rule/health/recoveries/">Recovery</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>
