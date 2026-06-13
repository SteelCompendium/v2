---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: At the end of this round, each hero not already [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to one or more undead is beset by two **rotting zombies** who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is [winded](scc:mcdm.heroes.v1/rule.health/winded). This feature can't be used two rounds in a row.
      cost: 2 Malice
      icon: "\U0001F300"
      name: Ravenous Horde
    - body: Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then [pulled](scc:mcdm.heroes.v1/movement/forced-movement) 5 squares toward the nearest enemy within 3 squares of the object.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Paranormal Fling
    - body: Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to an affected square makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: The Grasping, the Hungry
      power_roll:
        tiers:
            high: 5 damage
            low: 5 damage; [restrained](scc:mcdm.heroes.v1/condition/restrained) (save ends)
            mid: 5 damage; [restrained](scc:mcdm.heroes.v1/condition/restrained) (EoT)
      sections:
        - label: Effect
          text: While [restrained](scc:mcdm.heroes.v1/condition/restrained) this way, a creature takes 1d6 damage at the start of each of their turns.
    - body: Up to four undead in the encounter move up to their speed and can make a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike). The number of undead affected increases by 1 for each additional [Malice](scc:mcdm.monsters.v1/rule.monster/malice) spent on this feature. If an undead is reduced to 0 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina) during this dread march, they don't die until the march is resolved.
      cost: 7+ Malice
      icon: ⭐️
      name: Dread March
flavor: At the start of any undead's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 1
name: Undead Malice (Level 1+ Malice Features)
scc: mcdm.monsters.v1/monster.undead.1st-echelon/undead-malice-level-1-malice-features
type: featureblock
---

# Ravenous Horde

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Undead Malice (Level 1+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any undead&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Ravenous Horde</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">2</span> Malice</div></div></div>
<div class="fb__feat-body">At the end of this round, each hero not already <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to one or more undead is beset by two <b>rotting zombies</b> who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is <a href="../scc:mcdm.heroes.v1/rule.health/winded">winded</a>. This feature can&#39;t be used two rounds in a row.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Paranormal Fling</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then <a href="../scc:mcdm.heroes.v1/movement/forced-movement">pulled</a> 5 squares toward the nearest enemy within 3 squares of the object.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">The Grasping, the Hungry</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 damage; <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> this way, a creature takes 1d6 damage at the start of each of their turns.</p></div></div>
<div class="fb__feat-body">Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to an affected square makes an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Dread March</h3><div class="fb__feat-corner"><div class="sc-ability__cost">7+ Malice</div></div></div>
<div class="fb__feat-body">Up to four undead in the encounter move up to their speed and can make a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a>. The number of undead affected increases by 1 for each additional <a href="../scc:mcdm.monsters.v1/rule.monster/malice">Malice</a> spent on this feature. If an undead is reduced to 0 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a> during this dread march, they don&#39;t die until the march is resolved.</div>
</article>
</div>
</article>
</div>
