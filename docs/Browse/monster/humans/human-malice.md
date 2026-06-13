---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      name: Alchemical Device
      power_roll:
        formula: + 2
        tiers:
            high: 9 corruption damage; A < 2 [restrained](scc:mcdm.heroes.v1/condition/restrained) (save ends)
            low: 4 corruption damage; A < 0 [slowed](scc:mcdm.heroes.v1/condition/slowed) (save ends)
            mid: 6 corruption damage; A < 1 [slowed](scc:mcdm.heroes.v1/condition/slowed) (save ends)
      sections:
        - label: Special
          text: This ability can't be used by a [minion](scc:mcdm.monsters.v1/rule.organization/minion).
      target: Each enemy and object in the area
      usage: Maneuver
    - body: Each human acting this turn gains an edge on abilities until the end of their turn, or has a double edge on any ability that targets an enemy affected by a condition.
      cost: 5 Malice
      icon: ⭐️
      name: Exploit Opening
    - body: Each non-[minion](scc:mcdm.monsters.v1/rule.organization/minion) human in the encounter regains [Stamina](scc:mcdm.heroes.v1/rule.health/stamina) equal to 5 times their level.
      cost: 7 Malice
      icon: ⭐️
      name: Staying Power
flavor: At the start of any human's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Human Malice
scc: mcdm.monsters.v1/monster.humans/human-malice
type: featureblock
---

# Alchemical Device

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Human Malice</h2>
</header>
<div class="fb__flavor">At the start of any human&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Alchemical Device</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 corruption damage; A &lt; 0 <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 corruption damage; A &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 corruption damage; A &lt; 2 <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a <a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Exploit Opening</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each human acting this turn gains an edge on abilities until the end of their turn, or has a double edge on any ability that targets an enemy affected by a condition.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Staying Power</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Each non-<a href="../scc:mcdm.monsters.v1/rule.organization/minion">minion</a> human in the encounter regains <a href="../scc:mcdm.heroes.v1/rule.health/stamina">Stamina</a> equal to 5 times their level.</div>
</article>
</div>
</article>
</div>
