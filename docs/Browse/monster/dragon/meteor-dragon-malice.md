---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: The next time the dragon uses their Crescent Claws ability, they can also [slide](../../movement/forced-movement.md) the target up to 5 squares. If the target is dragonsealed, the dragon can vertical [slide](../../movement/forced-movement.md) them instead.
      cost: 3 Malice
      icon: ⭐️
      name: Liftoff
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      icon: "\U0001F533"
      intro: The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is [difficult terrain](../../movement/difficult-terrain.md), and each creature and object in the area when it appears makes an **Agility test**.
      name: Starfall
      power_roll:
        tiers:
            high: 10 holy damage
            low: 20 holy damage; [slowed](../../condition/slowed.md) (save ends), [prone](../../condition/prone.md)
            mid: 16 holy damage; [slowed](../../condition/slowed.md) (save ends)
    - body: A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M < 5 and each object of size 3 or smaller is vertical [pulled](../../movement/forced-movement.md) 2 squares toward the area at the start of each round, ignoring [stability](../../rule/character/stability.md). Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon's Voidlight Breath ability, and the black hole disappears.
      cost: 10 Malice
      icon: ☠️
      name: Event Horizon
flavor: At the start of a meteor dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Meteor Dragon Malice
scc: mcdm.monsters.v1/monster.dragon/meteor-dragon-malice
type: featureblock
---

# Meteor Dragon Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Meteor Dragon Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of a meteor dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Liftoff</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">The next time the dragon uses their Crescent Claws ability, they can also <a href="../../../movement/forced-movement/">slide</a> the target up to 5 squares. If the target is dragonsealed, the dragon can vertical <a href="../../../movement/forced-movement/">slide</a> them instead.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Starfall</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-intro">The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is <a href="../../../movement/difficult-terrain/">difficult terrain</a>, and each creature and object in the area when it appears makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">20 holy damage; <a href="../../../condition/slowed/">slowed</a> (save ends), <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 holy damage; <a href="../../../condition/slowed/">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 holy damage</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Event Horizon</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div></div></header></div>
<div class="fb__feat-body">A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M &lt; 5 and each object of size 3 or smaller is vertical <a href="../../../movement/forced-movement/">pulled</a> 2 squares toward the area at the start of each round, ignoring <a href="../../../rule/character/stability/">stability</a>. Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon&#39;s Voidlight Breath ability, and the black hole disappears.</div>
</article>
</div>
</article>
</div>
