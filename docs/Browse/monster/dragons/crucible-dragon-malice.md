---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: While the dragon is flying, they shape themself into a blade and fall. Each creature and object in the dragon's space when they hit the ground and in a 6 x 4 line within 1 square of the dragon takes 7 damage. A creature who takes this damage and has A < 4 takes 4 extra damage per square the dragon fell and is restrained (save ends). A creature not restrained this way can move into the nearest unoccupied space.
      cost: 3 Malice
      icon: "\U0001F533"
      name: Swordfall
    - body: The dragon shakes loose a cloud of shattered weapons in a 6 x 4 line within 1 square of them. Each creature and object in the area makes an **Agility test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Shower of Blades
      power_roll:
        tiers:
            high: 7 damage
            low: 16 damage; bleeding (save ends)
            mid: 13 damage; bleeding (EoT)
    - body: The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The dragon superheats the ground across the encounter map until the end of the round. Any enemy who starts their turn on the ground is slagged as if affected by the dragon's Slag Spew ability.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Meltdown
flavor: At the start of a crucible dragon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Crucible Dragon Malice
scc: mcdm.monsters.v1/monster.dragons/crucible-dragon-malice
type: featureblock
---

# Swordfall

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Crucible Dragon Malice</h2>
</header>
<div class="fb__flavor">At the start of a crucible dragon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Swordfall</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">While the dragon is flying, they shape themself into a blade and fall. Each creature and object in the dragon&#39;s space when they hit the ground and in a 6 x 4 line within 1 square of the dragon takes 7 damage. A creature who takes this damage and has A &lt; 4 takes 4 extra damage per square the dragon fell and is restrained (save ends). A creature not restrained this way can move into the nearest unoccupied space.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Shower of Blades</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">16 damage; bleeding (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage; bleeding (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">7 damage</span></div></div></div>
<div class="fb__feat-body">The dragon shakes loose a cloud of shattered weapons in a 6 x 4 line within 1 square of them. Each creature and object in the area makes an <b>Agility test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The dragon takes an additional main action on their turn. They can use this feature even if they are dazed.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Meltdown</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">The dragon superheats the ground across the encounter map until the end of the round. Any enemy who starts their turn on the ground is slagged as if affected by the dragon&#39;s Slag Spew ability.</div>
</article>
</div>
</article>
</div>
