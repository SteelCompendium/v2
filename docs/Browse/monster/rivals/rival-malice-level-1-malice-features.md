---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Until the end of the round, each rival can impose a bane on a [strike](scc:mcdm.heroes.v1/rule.combat/strike) made against an [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) rival as a free triggered action.
      cost: 3 Malice
      icon: ⭐️
      name: Work as One
    - body: Until the end of the round, whenever any rival makes a power roll against the target of their Rivalry trait, they roll a d3 and add it to the power roll.
      cost: 3 Malice
      icon: ⭐️
      name: We Just Do It Better
    - body: 'One rival pulls out a magic consumable and hurls it, targeting a 5 x 1 line within 1 square of them or a 3 cube within 10 squares of them. Each enemy in the area makes an Agility test. The rival chooses a damage type and a condition for the outcome of the test from one of the following pairs: sonic damage and [dazed](scc:mcdm.heroes.v1/condition/dazed), poison damage and [weakened](scc:mcdm.heroes.v1/condition/weakened), or fire damage and [frightened](scc:mcdm.heroes.v1/condition/frightened).'
      cost: 5 Malice
      icon: "\U0001F533"
      name: Check Out Our Loot
      power_roll:
        tiers:
            high: 5 damage
            low: 11 damage; the condition affects the target (save ends)
            mid: 8 damage; the condition affects the target (EoT)
    - body: Each rival regains 10 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina). Until the end of the round, whenever a rival uses an ability against an enemy, each other rival [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to that enemy can make a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike) against them.
      cost: 7 Malice
      icon: ⭐️
      name: Calling the Shots
    - body: Each rival moves up to their speed and uses a main action or maneuver that doesn't cost [Malice](scc:mcdm.monsters.v1/rule.monster/malice).
      cost: 10 Malice
      icon: ⭐️
      name: Coordinated Takedown
flavor: At the start of any rival's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 1
name: Rival Malice (Level 1+ Malice Features)
scc: mcdm.monsters.v1/monster.rivals/rival-malice-level-1-malice-features
type: featureblock
---

# Work as One

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Rival Malice (Level 1+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any rival&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Work as One</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each rival can impose a bane on a <a href="../scc:mcdm.heroes.v1/rule.combat/strike">strike</a> made against an <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> rival as a free triggered action.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">We Just Do It Better</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, whenever any rival makes a power roll against the target of their Rivalry trait, they roll a d3 and add it to the power roll.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Check Out Our Loot</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 damage; the condition affects the target (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 damage; the condition affects the target (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage</span></div></div></div>
<div class="fb__feat-body">One rival pulls out a magic consumable and hurls it, targeting a 5 x 1 line within 1 square of them or a 3 cube within 10 squares of them. Each enemy in the area makes an Agility test. The rival chooses a damage type and a condition for the outcome of the test from one of the following pairs: sonic damage and <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a>, poison damage and <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a>, or fire damage and <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Calling the Shots</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Each rival regains 10 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a>. Until the end of the round, whenever a rival uses an ability against an enemy, each other rival <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to that enemy can make a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a> against them.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Coordinated Takedown</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-body">Each rival moves up to their speed and uses a main action or maneuver that doesn&#39;t cost <a href="../scc:mcdm.monsters.v1/rule.monster/malice">Malice</a>.</div>
</article>
</div>
</article>
</div>
