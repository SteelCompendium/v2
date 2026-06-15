---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      icon: ❇️
      intro: One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a **Might test** or **Agility test**.
      name: Shockwave
      power_roll:
        tiers:
            high: '[Push](../../movement/forced-movement.md) 1'
            low: 5 damage; vertical [push](../../movement/forced-movement.md) 3
            mid: 4 damage; vertical [push](../../movement/forced-movement.md) 2
    - body: Each ogre in the encounter [shifts](../../movement/shifting.md) up to their speed and can make a [free strike](../../feature/common/main-actions/free-strike.md). If they can, they gang up on the same target rather than picking different targets.
      cost: 5 Malice
      icon: "\U0001F300"
      name: Bully
    - body: Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).
      cost: 7 Malice
      icon: ⭐️
      name: Rampage
flavor: At the start of any ogre's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ogre Malice
scc: mcdm.monsters.v1/monster.ogres/ogre-malice
type: featureblock
---

# Ogre Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Ogre Malice</h2>
</header>
<div class="fb__flavor">At the start of any ogre&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Shockwave</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-intro">One ogre acting this turn jumps and lands on their rear, causing a 3 burst shockwave. Each size 1 creature in the area makes a <b>Might test</b> or <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 damage; vertical <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; vertical <a href="../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res"><a href="../../../movement/forced-movement/">Push</a> 1</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Bully</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each ogre in the encounter <a href="../../../movement/shifting/">shifts</a> up to their speed and can make a <a href="../../../feature/common/main-actions/free-strike/">free strike</a>. If they can, they gang up on the same target rather than picking different targets.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Rampage</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each ogre has damage immunity 5 and deals an extra 5 damage with abilities, and heroic abilities that target any ogre have their Heroic Resource cost reduced by 1 (to a minimum of 1).</div>
</article>
</div>
</article>
</div>
