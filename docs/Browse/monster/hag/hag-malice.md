---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 5 Malice
      distance: 10 x 1 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Hag Wyrd
      power_roll:
        formula: + 3
        tiers:
            high: 11 fire damage; R < 3 [frightened](../../condition/frightened.md) (save ends)
            low: 5 fire damage; R < 1 [frightened](../../condition/frightened.md) (save ends)
            mid: 8 fire damage; R < 2 [frightened](../../condition/frightened.md) (save ends)
      sections:
        - label: Effect
          text: After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and [dazed](../../condition/dazed.md), or cold damage and [slowed](../../condition/slowed.md).
      target: Each enemy in the area
      usage: Main action
    - body: The hag takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: The hag's hut springs to life. It enters the encounter map within 10 squares of the hag if it isn't already there and takes its turn. The hut is size 4, has 75 [Stamina](../../rule/health/stamina.md) and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can't be used if the hut is reduced to 0 [Stamina](../../rule/health/stamina.md). In addition to its move action, the house can take only the following main action.
      cost: 10 Malice
      icon: "\U0001F300"
      name: House Call
    - cost: Signature
      distance: 2 cube within 2
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
        - Weapon
      name: Kick
      power_roll:
        formula: + 3
        tiers:
            high: 13 damage; [push](../../movement/forced-movement.md) 5; M < 3 [prone](../../condition/prone.md)
            low: 6 damage; [push](../../movement/forced-movement.md) 3; M < 1 [prone](../../condition/prone.md)
            mid: 10 damage; [push](../../movement/forced-movement.md) 4; M < 2 [prone](../../condition/prone.md)
      target: Each enemy in the area
      usage: Main action
flavor: At the start of a hag's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Hag Malice
scc: mcdm.monsters.v1/monster.hag/hag-malice
type: featureblock
---

# Hag Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Hag Malice</h2>
</header>
<div class="fb__flavor">At the start of a hag&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Hag Wyrd</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">10 x 1 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 fire damage; R &lt; 1 <a href="../../../condition/frightened/">frightened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 fire damage; R &lt; 2 <a href="../../../condition/frightened/">frightened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 fire damage; R &lt; 3 <a href="../../../condition/frightened/">frightened</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and <a href="../../../condition/dazed/">dazed</a>, or cold damage and <a href="../../../condition/slowed/">slowed</a>.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Solo Action</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The hag takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">House Call</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-body">The hag&#39;s hut springs to life. It enters the encounter map within 10 squares of the hag if it isn&#39;t already there and takes its turn. The hut is size 4, has 75 <a href="../../../rule/health/stamina/">Stamina</a> and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can&#39;t be used if the hut is reduced to 0 <a href="../../../rule/health/stamina/">Stamina</a>. In addition to its move action, the house can take only the following main action.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Kick</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Signature</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 cube within 2</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; <a href="../../../movement/forced-movement/">push</a> 3; M &lt; 1 <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; <a href="../../../movement/forced-movement/">push</a> 4; M &lt; 2 <a href="../../../condition/prone/">prone</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 damage; <a href="../../../movement/forced-movement/">push</a> 5; M &lt; 3 <a href="../../../condition/prone/">prone</a></span></div></div></div>
</article>
</div>
</article>
</div>
