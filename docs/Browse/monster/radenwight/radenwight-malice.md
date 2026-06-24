---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Trouser Cut
      power_roll:
        formula: + 2
        tiers:
            high: 13 damage; [push](../../movement/forced-movement.md) 5, [taunted](../../condition/taunted.md) (EoT)
            low: 7 damage; [push](../../movement/forced-movement.md) 3
            mid: 10 damage; [push](../../movement/forced-movement.md) 3, [taunted](../../condition/taunted.md) (EoT)
      sections:
        - label: Effect
          text: If the target is wearing clothing covering the lower half of their body, they must use a maneuver once to pull that clothing up before they can move.
        - label: Special
          text: This ability can't be used by a [minion](../../rule/organization/minion.md).
      target: One creature
      usage: Main action
    - body: Each radenwight in the encounter [shifts](../../movement/shifting.md) up to their speed. If a radenwight ends this shift [adjacent](../../rule/combat/adjacent.md) to one or more radenwights, they can make a melee [free strike](../../feature/common/main-actions/free-strike.md) against each enemy [adjacent](../../rule/combat/adjacent.md) to them.
      cost: 5 Malice
      icon: ⭐️
      name: Rat Race
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: |-
        A radenwight uses music to coordinate living rats, forming a 10 wall of rats scurrying atop one another into unoccupied spaces anywhere on the encounter map. The wall doesn't block [line of effect](../../rule/combat/line-of-effect.md) for radenwights and their allies, but it does for other creatures as the rats coordinate their movements with the radenwights. Each square of the wall has 10 [Stamina](../../rule/health/stamina.md).

        If the last radenwight in the encounter dies and the wall is still standing, the rats let out a hideous screech as they disperse. Each enemy on the encounter map makes an Intuition test.
      name: Rally the Rodents
      power_roll:
        tiers:
            high: No effect.
            low: 7 sonic damage; the target can't take a respite activity during their next respite
            mid: 5 sonic damage
flavor: At the start of any radenwight's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Radenwight Malice
scc: mcdm.monsters.v1/monster.radenwight/radenwight-malice
type: featureblock
---

# Radenwight Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Radenwight Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any radenwight&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Trouser Cut</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; <a href="../../../movement/forced-movement/">push</a> 3, <a href="../../../condition/taunted/">taunted</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 damage; <a href="../../../movement/forced-movement/">push</a> 5, <a href="../../../condition/taunted/">taunted</a> (EoT)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target is wearing clothing covering the lower half of their body, they must use a maneuver once to pull that clothing up before they can move.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../../../rule/organization/minion/">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Rat Race</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Each radenwight in the encounter <a href="../../../movement/shifting/">shifts</a> up to their speed. If a radenwight ends this shift <a href="../../../rule/combat/adjacent/">adjacent</a> to one or more radenwights, they can make a melee <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against each enemy <a href="../../../rule/combat/adjacent/">adjacent</a> to them.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Rally the Rodents</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-intro">A radenwight uses music to coordinate living rats, forming a 10 wall of rats scurrying atop one another into unoccupied spaces anywhere on the encounter map. The wall doesn&#39;t block <a href="../../../rule/combat/line-of-effect/">line of effect</a> for radenwights and their allies, but it does for other creatures as the rats coordinate their movements with the radenwights. Each square of the wall has 10 <a href="../../../rule/health/stamina/">Stamina</a>.

If the last radenwight in the encounter dies and the wall is still standing, the rats let out a hideous screech as they disperse. Each enemy on the encounter map makes an Intuition test.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 sonic damage; the target can&#39;t take a respite activity during their next respite</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 sonic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>
