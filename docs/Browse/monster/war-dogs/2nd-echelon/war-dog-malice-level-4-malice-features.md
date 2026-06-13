---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The war dog activates a [Malice](scc:mcdm.monsters.v1/rule.monster/malice) feature available to war dogs of level 3 or lower.
      cost: 3-7 Malice
      icon: ⭐️
      name: Prior Malice Features
    - cost: 5 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Loyalty Unto Death
      power_roll:
        tiers:
            high: '[Push](scc:mcdm.heroes.v1/movement/forced-movement) 2'
            low: '[Push](scc:mcdm.heroes.v1/movement/forced-movement) 4; the enemy is [frightened](scc:mcdm.heroes.v1/condition/frightened) of the nearest non-[minion](scc:mcdm.monsters.v1/rule.organization/minion) war dog (save ends)'
            mid: '[Push](scc:mcdm.heroes.v1/movement/forced-movement) 2; the enemy is [frightened](scc:mcdm.heroes.v1/condition/frightened) of the nearest non-[minion](scc:mcdm.monsters.v1/rule.organization/minion) war dog (EoT)'
      sections:
        - label: Effect
          text: Each target who has a loyalty collar [shifts](scc:mcdm.heroes.v1/movement/shifting) up to their speed, then is reduced to 0 [Stamina](scc:mcdm.heroes.v1/rule.health/stamina). After each target's Loyalty Collar trait is resolved, each enemy [adjacent](scc:mcdm.heroes.v1/rule.combat/adjacent) to either target makes a Presence test.
      target: Two war dogs
      usage: Maneuver
flavor: At the start of any level 4 or higher war dog's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 4
name: War Dog Malice (Level 4+ Malice Features)
scc: mcdm.monsters.v1/monster.war-dogs.2nd-echelon/war-dog-malice-level-4-malice-features
type: featureblock
---

# Prior Malice Features

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">War Dog Malice (Level 4+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any level 4 or higher war dog&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Prior Malice Features</h3><div class="fb__feat-corner"><div class="sc-ability__cost">3-7 Malice</div></div></div>
<div class="fb__feat-body">The war dog activates a <a href="../scc:mcdm.monsters.v1/rule.monster/malice">Malice</a> feature available to war dogs of level 3 or lower.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Loyalty Unto Death</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Two war dogs</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../scc:mcdm.heroes.v1/movement/forced-movement">Push</a> 4; the enemy is <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a> of the nearest non-<a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> war dog (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../scc:mcdm.heroes.v1/movement/forced-movement">Push</a> 2; the enemy is <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a> of the nearest non-<a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> war dog (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res"><a href="../scc:mcdm.heroes.v1/movement/forced-movement">Push</a> 2</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target who has a loyalty collar <a href="../scc:mcdm.heroes.v1/movement/shifting">shifts</a> up to their speed, then is reduced to 0 <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a>. After each target&#39;s Loyalty Collar trait is resolved, each enemy <a href="../scc:mcdm.heroes.v1/rule.combat/adjacent">adjacent</a> to either target makes a Presence test.</p></div></div>
</article>
</div>
</article>
</div>
