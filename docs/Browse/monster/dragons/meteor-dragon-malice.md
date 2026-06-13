---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The next time the dragon uses their Crescent Claws ability, they can also slide the target up to 5 squares. If the target is dragonsealed, the dragon can vertical slide them instead.
      cost: 3 Malice
      icon: ⭐️
      name: Liftoff
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is difficult terrain, and each creature and object in the area when it appears makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Starfall
      power_roll:
        tiers:
            high: 10 holy damage
            low: 20 holy damage; slowed (save ends), prone
            mid: 16 holy damage; slowed (save ends)
    - body: A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M < 5 and each object of size 3 or smaller is vertical pulled 2 squares toward the area at the start of each round, ignoring stability. Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon's Voidlight Breath ability, and the black hole disappears.
      cost: 10 Malice
      icon: ☠️
      name: Event Horizon
flavor: At the start of a meteor dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Meteor Dragon Malice
scc: mcdm.monsters.v1/monster.dragons/meteor-dragon-malice
type: featureblock
---

# Liftoff

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Meteor Dragon Malice</h2>
</header>
<div class="fb__flavor">At the start of a meteor dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Liftoff</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The next time the dragon uses their Crescent Claws ability, they can also slide the target up to 5 squares. If the target is dragonsealed, the dragon can vertical slide them instead.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Starfall</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">20 holy damage; slowed (save ends), prone</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 holy damage; slowed (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 holy damage</span></div></div></div>
<div class="fb__feat-body">The dragon drops stars into five 2 cubes anywhere on the encounter map. The area is difficult terrain, and each creature and object in the area when it appears makes an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Event Horizon</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-body">A black hole manifests as a 1 cube within 20 squares of the dragon in an unoccupied space. Each creature who has M &lt; 5 and each object of size 3 or smaller is vertical pulled 2 squares toward the area at the start of each round, ignoring stability. Any creature who starts their turn in the area or any object in the area at the end of the round suffers the effect of the dragon&#39;s Voidlight Breath ability, and the black hole disappears.</div>
</article>
</div>
</article>
</div>
