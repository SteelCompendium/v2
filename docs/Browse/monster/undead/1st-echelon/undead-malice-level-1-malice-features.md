---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: At the end of this round, each hero not already [adjacent](../../../rule/combat/adjacent.md) to one or more undead is beset by two **rotting zombies** who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is [winded](../../../rule/health/winded.md). This feature can't be used two rounds in a row.
      cost: 2 Malice
      icon: "\U0001F300"
      name: Ravenous Horde
    - body: Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then [pulled](../../../movement/forced-movement.md) 5 squares toward the nearest enemy within 3 squares of the object.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Paranormal Fling
    - cost: 5 Malice
      icon: "\U0001F533"
      intro: Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn [adjacent](../../../rule/combat/adjacent.md) to an affected square makes an **Agility test**.
      name: The Grasping, the Hungry
      power_roll:
        tiers:
            high: 5 damage
            low: 5 damage; [restrained](../../../condition/restrained.md) (save ends)
            mid: 5 damage; [restrained](../../../condition/restrained.md) (EoT)
      sections:
        - label: Effect
          text: While [restrained](../../../condition/restrained.md) this way, a creature takes 1d6 damage at the start of each of their turns.
    - body: Up to four undead in the encounter move up to their speed and can make a [free strike](../../../feature/common/main-actions/free-strike.md). The number of undead affected increases by 1 for each additional [Malice](../../../rule/monster/malice.md) spent on this feature. If an undead is reduced to 0 [Stamina](../../../rule/health/stamina.md) during this dread march, they don't die until the march is resolved.
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

# Undead Malice (Level 1+ Malice Features)

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Undead Malice (Level 1+ Malice Features)</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div></div></header>
<div class="fb__flavor">At the start of any undead&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ravenous Horde</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">2 Malice</div></div></header></div>
<div class="fb__feat-body">At the end of this round, each hero not already <a href="../../../../rule/combat/adjacent/">adjacent</a> to one or more undead is beset by two <b>rotting zombies</b> who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is <a href="../../../../rule/health/winded/">winded</a>. This feature can&#39;t be used two rounds in a row.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Paranormal Fling</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then <a href="../../../../movement/forced-movement/">pulled</a> 5 squares toward the nearest enemy within 3 squares of the object.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">The Grasping, the Hungry</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn <a href="../../../../rule/combat/adjacent/">adjacent</a> to an affected square makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; <a href="../../../../condition/restrained/">restrained</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 damage; <a href="../../../../condition/restrained/">restrained</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While <a href="../../../../condition/restrained/">restrained</a> this way, a creature takes 1d6 damage at the start of each of their turns.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Dread March</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7+ Malice</div></div></header></div>
<div class="fb__feat-body">Up to four undead in the encounter move up to their speed and can make a <a href="../../../../feature/common/main-actions/free-strike/">free strike</a>. The number of undead affected increases by 1 for each additional <a href="../../../../rule/monster/malice/">Malice</a> spent on this feature. If an undead is reduced to 0 <a href="../../../../rule/health/stamina/">Stamina</a> during this dread march, they don&#39;t die until the march is resolved.</div>
</article>
</div>
</article>
</div>
