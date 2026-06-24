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
            low: 6 damage; [bleeding](../../condition/bleeding.md) (save ends)
            mid: 4 damage; [bleeding](../../condition/bleeding.md) (EoT)
      sections:
        - label: Effect
          text: A gnoll acting this turn drops an iron-jawed snare into the area. The first time any enemy moves into the area, they make an **Agility test**. If they were unaware of the snare, the test takes a bane.
        - label: Effect
          text: While an enemy is [bleeding](../../condition/bleeding.md) this way, each gnoll in the encounter gains an edge on strikes made against them.
    - body: One gnoll [minion](../../rule/organization/minion.md) suddenly explodes into a pool of blood, splattering the area within 3 squares of them. Any gnoll who starts their turn in this area deals an extra 5 damage on their next strike before the end of their turn. Once per round, an abyssal hyena who starts their turn in the area turns into a **gnoll marauder**, keeping their current [Stamina](../../rule/health/stamina.md).
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
scc: mcdm.monsters.v1/monster.gnoll/gnoll-malice
type: featureblock
---

# Gnoll Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Gnoll Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any gnoll&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Iron Jaws</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">|</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">📏 1 cube within 3**   | **🎯 Special</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; <a href="../../../condition/bleeding/">bleeding</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A gnoll acting this turn drops an iron-jawed snare into the area. The first time any enemy moves into the area, they make an <b>Agility test</b>. If they were unaware of the snare, the test takes a bane.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While an enemy is <a href="../../../condition/bleeding/">bleeding</a> this way, each gnoll in the encounter gains an edge on strikes made against them.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bloodpool</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">One gnoll <a href="../../../rule/organization/minion/">minion</a> suddenly explodes into a pool of blood, splattering the area within 3 squares of them. Any gnoll who starts their turn in this area deals an extra 5 damage on their next strike before the end of their turn. Once per round, an abyssal hyena who starts their turn in the area turns into a <b>gnoll marauder</b>, keeping their current <a href="../../../rule/health/stamina/">Stamina</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Echoes of Laughter</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div></div></header></div>
<div class="fb__feat-body">Until the end of the encounter, the encounter map is encased in a soundscape of laughter and howling. Each enemy takes a bane on the first power roll they make each round. Whenever a gnoll is killed, this effect is suppressed until the start of the next round.</div>
</article>
</div>
</article>
</div>
