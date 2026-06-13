---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The war dog activates a Malice feature available to war dogs of level 9 or lower.
      cost: 3-7 Malice
      icon: ⭐️
      name: Prior Malice Features
    - cost: 7 Malice
      distance: 3 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      name: Cry Havoc
      power_roll:
        formula: + 5
        tiers:
            high: 14 psychic damage; P < 5 frightened (save ends)
            low: 7 psychic damage
            mid: 11 psychic damage; P < 4 frightened (save ends)
      sections:
        - label: Effect
          text: Each war dog within distance deals an extra 15 damage with strikes until the end of their next turn. Additionally, they end any effect on them that can be ended by a saving throw or that ends at the end of their turn, then shift up to their speed and can make a free strike.
        - label: Special
          text: This ability can't be used by a minion.
      target: Each enemy in the area
      usage: Maneuver
flavor: At the start of any level 10 or higher war dog's turn, you can spend Malice to activate one of the following features.
kind: malice
level: 10
name: War Dog Malice (Level 10+ Malice Features)
scc: mcdm.monsters.v1/monster.war-dogs.4th-echelon/war-dog-malice-level-10-malice-features
type: featureblock
---

# Prior Malice Features

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">War Dog Malice (Level 10+ Malice Features)</h2>
</header>
<div class="fb__flavor">At the start of any level 10 or higher war dog&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Prior Malice Features</h3><div class="fb__feat-corner"><div class="sc-ability__cost">3-7 Malice</div></div></div>
<div class="fb__feat-body">The war dog activates a Malice feature available to war dogs of level 9 or lower.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Cry Havoc</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 5</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 psychic damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 psychic damage; P &lt; 4 frightened (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 psychic damage; P &lt; 5 frightened (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each war dog within distance deals an extra 15 damage with strikes until the end of their next turn. Additionally, they end any effect on them that can be ended by a saving throw or that ends at the end of their turn, then shift up to their speed and can make a free strike.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>This ability can&#39;t be used by a minion.</p></div></div>
</article>
</div>
</article>
</div>
