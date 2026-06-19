---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Charge
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Cavalry Charge
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 11 damage
            low: 6 damage
            mid: 8 damage
      sections:
        - label: Effect
          text: If this ability is used as part of the [Charge](../../../feature/common/main-actions/charge.md) main action, the mount's rider can use a free triggered action to make a melee [free strike](../../../feature/common/main-actions/free-strike.md) against the same target.
      target: One enemy
      usage: Main action
    - cost: Encounter
      distance: Range 5
      icon: "\U0001F464"
      keywords:
        - '-'
      level: 7
      name: Giddyup!
      sections:
        - label: Effect
          text: The mount [shifts](../../../movement/shifting.md) twice their speed. They can jump as part of this movement.
      target: Self
      usage: Move action
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 10
      name: Rearing Trample
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 damage; M < STRONG [prone](../../../condition/prone.md)
            low: 10 damage; M < WEAK [prone](../../../condition/prone.md)
            mid: 15 damage; M < AVERAGE [prone](../../../condition/prone.md)
      sections:
        - label: Effect
          text: A target knocked [prone](../../../condition/prone.md) this way or who is already [prone](../../../condition/prone.md) takes an extra 5 damage.
      target: Each enemy in the area
      usage: Main action
name: Mount Abilities
scc: mcdm.monsters.v1/monster.retainer.role-advancement/mount
type: featureblock
---

# Mount Abilities

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Mount Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Cavalry Charge</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Charge</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One enemy</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If this ability is used as part of the <a href="../../../../feature/common/main-actions/charge/">Charge</a> main action, the mount&#39;s rider can use a free triggered action to make a melee <a href="../../../../feature/common/main-actions/free-strike/">free strike</a> against the same target.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="move">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Move action</div><h3 class="fb__feat-name sc-ability__name">Giddyup!</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Range 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mount <a href="../../../../movement/shifting/">shifts</a> twice their speed. They can jump as part of this movement.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Rearing Trample</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 damage; M &lt; WEAK <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">15 damage; M &lt; AVERAGE <a href="../../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; M &lt; STRONG <a href="../../../../condition/prone/">prone</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target knocked <a href="../../../../condition/prone/">prone</a> this way or who is already <a href="../../../../condition/prone/">prone</a> takes an extra 5 damage.</p></div></div>
</article>
</div>
</div>
</article>
</div>
