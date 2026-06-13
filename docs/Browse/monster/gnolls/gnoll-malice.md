---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Iron Jaws
      usage: Maneuver
    - icon: '|'
      name: "\U0001F4CF 1 cube within 3**   | **\U0001F3AF Special"
      power_roll:
        tiers:
            high: No effect.
            low: 6 damage; bleeding (save ends)
            mid: 4 damage; bleeding (EoT)
      sections:
        - label: Effect
          text: A gnoll acting this turn drops an iron-jawed snare into the area. The first time any enemy moves into the area, they make an **Agility test**. If they were unaware of the snare, the test takes a bane.
        - label: Effect
          text: While an enemy is bleeding this way, each gnoll in the encounter gains an edge on strikes made against them.
    - body: One gnoll minion suddenly explodes into a pool of blood, splattering the area within 3 squares of them. Any gnoll who starts their turn in this area deals an extra 5 damage on their next strike before the end of their turn. Once per round, an abyssal hyena who starts their turn in the area turns into a **gnoll marauder**, keeping their current Stamina.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Bloodpool
    - body: Until the end of the encounter, the encounter map is encased in a soundscape of laughter and howling. Each enemy takes a bane on the first power roll they make each round. Whenever a gnoll is killed, this effect is suppressed until the start of the next round.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Echoes of Laughter
flavor: At the start of any gnoll's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Gnoll Malice
scc: mcdm.monsters.v1/monster.gnolls/gnoll-malice
type: featureblock
---

# Iron Jaws

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Gnoll Malice</h2>
</header>
<div class="fb__flavor">At the start of any gnoll&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Iron Jaws</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">|</span><h3 class="fb__feat-name sc-ability__name">📏 1 cube within 3**   | **🎯 Special</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; bleeding (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; bleeding (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A gnoll acting this turn drops an iron-jawed snare into the area. The first time any enemy moves into the area, they make an <b>Agility test</b>. If they were unaware of the snare, the test takes a bane.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While an enemy is bleeding this way, each gnoll in the encounter gains an edge on strikes made against them.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Bloodpool</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">One gnoll minion suddenly explodes into a pool of blood, splattering the area within 3 squares of them. Any gnoll who starts their turn in this area deals an extra 5 damage on their next strike before the end of their turn. Once per round, an abyssal hyena who starts their turn in the area turns into a <b>gnoll marauder</b>, keeping their current Stamina.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Echoes of Laughter</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the encounter, the encounter map is encased in a soundscape of laughter and howling. Each enemy takes a bane on the first power roll they make each round. Whenever a gnoll is killed, this effect is suppressed until the start of the next round.</div>
</article>
</div>
</article>
</div>
