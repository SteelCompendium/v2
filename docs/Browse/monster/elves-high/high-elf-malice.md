---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Until the end of the round, whenever a high elf uses a magic ability, they can use it as if they were occupying the square of another high elf on the encounter map to whom they have line of effect.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Chaincast
    - cost: 5 Malice
      distance: 5 x 1 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Gift From an Accursed Tome
      power_roll:
        formula: + 2
        tiers:
            high: 12 damage; R < 3 chosen condition (save ends)
            low: 5 damage; R < 1 chosen condition (save ends)
            mid: 9 damage; R < 2 chosen condition (save ends)
      sections:
        - label: Effect
          text: 'The high elf chooses a damage type and condition from one of the following combinations: cold damage and [slowed](scc:mcdm.heroes.v1/condition/slowed), poison damage and [weakened](scc:mcdm.heroes.v1/condition/weakened), or corruption damage and [frightened](scc:mcdm.heroes.v1/condition/frightened).'
        - label: Special
          text: This ability can't be used by a [minion](scc:mcdm.monsters.v1/rule.organization/minion).
      target: Each enemy in the area
      usage: Main action
    - body: Until the end of the round, each high elf in the encounter gains a +4 bonus to speed, and whenever a high elf uses an ability against an enemy, each high elf [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to that enemy can make a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike) against them.
      cost: 7 Malice
      icon: "\U0001F300"
      name: In Defiance of Time
flavor: At the start of any high elf's turn, you can spend Malice to activate one of the following features.
kind: malice
name: High Elf Malice
scc: mcdm.monsters.v1/monster.elves-high/high-elf-malice
type: featureblock
---

# Chaincast

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">High Elf Malice</h2>
</header>
<div class="fb__flavor">At the start of any high elf&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Chaincast</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, whenever a high elf uses a magic ability, they can use it as if they were occupying the square of another high elf on the encounter map to whom they have line of effect.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Gift From an Accursed Tome</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 x 1 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; R &lt; 1 chosen condition (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; R &lt; 2 chosen condition (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; R &lt; 3 chosen condition (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The high elf chooses a damage type and condition from one of the following combinations: cold damage and <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a>, poison damage and <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a>, or corruption damage and <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">In Defiance of Time</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each high elf in the encounter gains a +4 bonus to speed, and whenever a high elf uses an ability against an enemy, each high elf <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to that enemy can make a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a> against them.</div>
</article>
</div>
</article>
</div>
