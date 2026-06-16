---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: 4 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Hurl Landscape
      power_roll:
        tiers:
            high: 9 damage
            low: 18 damage; [prone](../../condition/prone.md) and can't stand (save ends)
            mid: 14 damage; [prone](../../condition/prone.md)
      sections:
        - label: Effect
          text: A giant unearths a structure, hazard, or chunk of the encounter map and launches it to fill the area. Each target makes an **Agility test**.
      target: Each enemy in the area
      usage: Main action
    - body: Each giant in the encounter takes a deep breath and yells, [pushing](../../movement/forced-movement.md) each creature within 3 squares of them up to 10 squares. A creature who can be pushed by more than one giant is pushed by one giant of your choice.
      cost: 5 Malice
      icon: ❇️
      name: Bellow
    - cost: 7 Malice
      icon: "\U0001F533"
      intro: A giant creates a fissure along the ground, either in a 15 x 2 line within 1 or a 10 x 3 line within 2, and that opens up to a depth of 6 squares. Each giant in the area can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure. Each non-giant in the area makes an **Agility test**.
      name: Titanic Tear
      power_roll:
        tiers:
            high: The target can [shift](../../movement/shifting.md) into the nearest unoccupied space outside the fissure.
            low: 10 damage; the target falls into the fissure, and is [prone](../../condition/prone.md) and can't stand (EoT)
            mid: 10 damage; the target is [prone](../../condition/prone.md) and hanging onto the edge of the fissure
flavor: At the start of any giant's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Giant Malice
scc: mcdm.monsters.v1/monster.giant/giant-malice
type: featureblock
---

# Giant Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Giant Malice</h2>
</header>
<div class="fb__flavor">At the start of any giant&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Hurl Landscape</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">18 damage; <a href="../../../condition/prone/">prone</a> and can&#39;t stand (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">14 damage; <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A giant unearths a structure, hazard, or chunk of the encounter map and launches it to fill the area. Each target makes an <b>Agility test</b>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Bellow</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each giant in the encounter takes a deep breath and yells, <a href="../../../movement/forced-movement/">pushing</a> each creature within 3 squares of them up to 10 squares. A creature who can be pushed by more than one giant is pushed by one giant of your choice.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Titanic Tear</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-intro">A giant creates a fissure along the ground, either in a 15 x 2 line within 1 or a 10 x 3 line within 2, and that opens up to a depth of 6 squares. Each giant in the area can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the fissure. Each non-giant in the area makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">10 damage; the target falls into the fissure, and is <a href="../../../condition/prone/">prone</a> and can&#39;t stand (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; the target is <a href="../../../condition/prone/">prone</a> and hanging onto the edge of the fissure</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The target can <a href="../../../movement/shifting/">shift</a> into the nearest unoccupied space outside the fissure.</span></div></div></div>
</article>
</div>
</article>
</div>
