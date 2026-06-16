---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: Self
      icon: ❗️
      keywords:
        - '-'
      name: Aftershock
      sections:
        - label: Trigger
          text: A creature deals damage to the kingfissure worm or one of their tongues.
        - label: Effect
          text: Each creature within 5 squares of the kingfissure worm takes 5 damage, and if they have A < 4 they are knocked [prone](../../condition/prone.md). The kingfissure worm can use this ability only once per round.
      target: Self
      usage: Free triggered action
    - body: The kingfissure worm takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The kingfissure worm loses 35 [Stamina](../../rule/health/stamina.md) and regrows one tongue, to a maximum of three tongues. The worm is then [dazed](../../condition/dazed.md) until the end of their turn.
      cost: 5 Malice
      icon: "\U0001F464"
      name: Spontaneous Regeneration
    - cost: 7 Malice
      distance: 5 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      name: Megaquake
      power_roll:
        formula: + 5
        tiers:
            high: 17 damage; M < 5 [slide](../../movement/forced-movement.md) 5
            low: 8 damage; M < 3 [slide](../../movement/forced-movement.md) 5
            mid: 13 damage; M < 4 [slide](../../movement/forced-movement.md) 5
      sections:
        - label: Effect
          text: Until the end of the next round, each target takes a −3 penalty to stability, treats all terrain as [difficult terrain](../../movement/difficult-terrain.md), and takes 10 damage whenever they are knocked [prone](../../condition/prone.md).
      target: Each enemy and object in the area
      usage: Main action
flavor: At the start of a kingfissure worm's turn or when an action's trigger occurs, you can spend Malice to activate one of the following features.
kind: malice
name: Kingfissure Worm Malice
scc: mcdm.monsters.v1/monster.kingfissure-worm/kingfissure-worm-malice
type: featureblock
---

# Kingfissure Worm Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Kingfissure Worm Malice</h2>
</header>
<div class="fb__flavor">At the start of a kingfissure worm&#39;s turn or when an action&#39;s trigger occurs, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Free triggered action</div><h3 class="fb__feat-name sc-ability__name">Aftershock</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature deals damage to the kingfissure worm or one of their tongues.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each creature within 5 squares of the kingfissure worm takes 5 damage, and if they have A &lt; 4 they are knocked <a href="../../../condition/prone/">prone</a>. The kingfissure worm can use this ability only once per round.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Solo Action</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The kingfissure worm takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Spontaneous Regeneration</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The kingfissure worm loses 35 <a href="../../../rule/health/stamina/">Stamina</a> and regrows one tongue, to a maximum of three tongues. The worm is then <a href="../../../condition/dazed/">dazed</a> until the end of their turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Megaquake</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 5</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; M &lt; 3 <a href="../../../movement/forced-movement/">slide</a> 5</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage; M &lt; 4 <a href="../../../movement/forced-movement/">slide</a> 5</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">17 damage; M &lt; 5 <a href="../../../movement/forced-movement/">slide</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the end of the next round, each target takes a −3 penalty to stability, treats all terrain as <a href="../../../movement/difficult-terrain/">difficult terrain</a>, and takes 10 damage whenever they are knocked <a href="../../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
</article>
</div>
