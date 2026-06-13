---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The arixx dribbles acid over their mandibles, causing the next strike they make to gain an [edge](scc:mcdm.heroes.v1/rule.dice/edge) and deal an extra 3 acid damage.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Burning Maw
    - body: The arixx's underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **[Agility](scc:mcdm.heroes.v1/rule.character/agility) test**.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Geyser
      power_roll:
        tiers:
            high: The target [shifts](scc:mcdm.heroes.v1/movement/shifting) to the nearest unoccupied space outside the area.
            low: 4 damage; vertical [push](scc:mcdm.heroes.v1/movement/forced-movement) 5
            mid: 4 damage; vertical [push](scc:mcdm.heroes.v1/movement/forced-movement) 3
    - body: The arixx takes an additional main action on their turn. They can use this feature even if they are [dazed](scc:mcdm.heroes.v1/condition/dazed).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A < 1 is knocked [prone](scc:mcdm.heroes.v1/condition/prone). Until the end of the encounter, each creature who starts their turn on the ground and can't [burrow](scc:mcdm.heroes.v1/movement/burrow) must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn [prone](scc:mcdm.heroes.v1/condition/prone) or underground. A creature who starts and ends their turn in the same space on the ground and can't [burrow](scc:mcdm.heroes.v1/movement/burrow) sinks 1 square into the ground.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Earth Sink
flavor: At the start of an arixx's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Arixx Malice
scc: mcdm.monsters.v1/monster.arixx/arixx-malice
type: featureblock
---

# Arixx Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Arixx Malice</h2>
</header>
<div class="fb__flavor">At the start of an arixx&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Burning Maw</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The arixx dribbles acid over their mandibles, causing the next strike they make to gain an <a href="../scc:mcdm.heroes.v1/rule.dice/edge">edge</a> and deal an extra 3 acid damage.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Geyser</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">4 damage; vertical <a href="../scc:mcdm.heroes.v1/movement/forced-movement">push</a> 5</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; vertical <a href="../scc:mcdm.heroes.v1/movement/forced-movement">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target <a href="../scc:mcdm.heroes.v1/movement/shifting">shifts</a> to the nearest unoccupied space outside the area.</span></div></div></div>
<div class="fb__feat-body">The arixx&#39;s underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an <b><a href="../scc:mcdm.heroes.v1/rule.character/agility">Agility</a> test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The arixx takes an additional main action on their turn. They can use this feature even if they are <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Earth Sink</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has A &lt; 1 is knocked <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a>. Until the end of the encounter, each creature who starts their turn on the ground and can&#39;t <a href="../scc:mcdm.heroes.v1/movement/burrow">burrow</a> must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a> or underground. A creature who starts and ends their turn in the same space on the ground and can&#39;t <a href="../scc:mcdm.heroes.v1/movement/burrow">burrow</a> sinks 1 square into the ground.</div>
</article>
</div>
</article>
</div>
