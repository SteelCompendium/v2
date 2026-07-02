---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: Ajax attempts to instill doubt into a creature within line of effect through logic and reason. The creature and Ajax make an opposed [Reason](../../rule/character/reason.md) test. If Ajax wins, he chooses to either deal 11 extra damage to one target on his next strike or to gain an additional [triggered action](../../rule/combat/triggered-action.md) during the current round. Ajax can't use this feature against the same creature during the same encounter.
      cost: 2 Malice
      icon: "\U0001F464"
      name: Reason
    - body: Until the end of the round, Ajax chooses one of the following environments he has previously visited and overlays that environment on top of the encounter map, temporarily merging multiple realities.
      cost: 5 Malice
      icon: "\U0001F300"
      name: Nexus Jewel
      sections:
        - label: Incredibly High Above the Ground
          text: The winds whip and bluster. Any creature who can't [fly](../../movement/fly.md) takes a −3 penalty to stability, and [forced movement](../../movement/forced-movement.md) effects gain a +3 bonus to their distance against such creatures.
        - label: Swamp
          text: The ground is [difficult terrain](../../movement/difficult-terrain.md) for enemies. Any creature who starts and ends their turn in the same space is [restrained](../../condition/restrained.md) (save ends).
        - label: Volcanic Canyon
          text: The air is stiflingly hot. Each enemy takes 5 fire damage for each square they enter.
    - body: Ajax takes an additional main action on his turn. He can use this feature even if he is [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 10 Malice
      distance: Four 3 cubes within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
        - Weapon
      name: Draw Steel
      power_roll:
        tiers:
            high: 16 damage
            low: 26 damage; [bleeding](../../condition/bleeding.md) and [slowed](../../condition/slowed.md) (save ends)
            mid: 22 damage; [bleeding](../../condition/bleeding.md) (save ends)
      sections:
        - label: Effect
          text: Each target makes a test using their highest characteristic.
      target: Each enemy and object in the area
      trailing: Ajax then raises his Blade of the Gol King above his head as four giant blades emerge from the ground to fill the area. Each target is [pushed](../../movement/forced-movement.md) into an unoccupied space adjacent to the area after the power roll is resolved. Each blade blocks line of effect and can be dismissed by Ajax at will (no action required).
      usage: Main Action
flavor: At the start of Ajax's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Ajax's Malice
scc: mcdm.monsters.v1/monster.ajax-the-invincible/ajaxs-malice
type: featureblock
---

# Ajax's Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ajax&#39;s Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of Ajax&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Reason</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">2 Malice</div></div></header></div>
<div class="fb__feat-body">Ajax attempts to instill doubt into a creature within line of effect through logic and reason. The creature and Ajax make an opposed <a href="../../../rule/character/reason/">Reason</a> test. If Ajax wins, he chooses to either deal 11 extra damage to one target on his next strike or to gain an additional <a href="../../../rule/combat/triggered-action/">triggered action</a> during the current round. Ajax can&#39;t use this feature against the same creature during the same encounter.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Nexus Jewel</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Incredibly High Above the Ground</span></div><div class="sc-ability__section-body"><p>The winds whip and bluster. Any creature who can&#39;t <a href="../../../movement/fly/">fly</a> takes a −3 penalty to stability, and <a href="../../../movement/forced-movement/">forced movement</a> effects gain a +3 bonus to their distance against such creatures.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Swamp</span></div><div class="sc-ability__section-body"><p>The ground is <a href="../../../movement/difficult-terrain/">difficult terrain</a> for enemies. Any creature who starts and ends their turn in the same space is <a href="../../../condition/restrained/">restrained</a> (save ends).</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Volcanic Canyon</span></div><div class="sc-ability__section-body"><p>The air is stiflingly hot. Each enemy takes 5 fire damage for each square they enter.</p></div></div>
<div class="fb__feat-body">Until the end of the round, Ajax chooses one of the following environments he has previously visited and overlays that environment on top of the encounter map, temporarily merging multiple realities.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">☠️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Solo Action</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div></div></header></div>
<div class="fb__feat-body">Ajax takes an additional main action on his turn. He can use this feature even if he is <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Draw Steel</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Four 3 cubes within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">26 damage; <a href="../../../condition/bleeding/">bleeding</a> and <a href="../../../condition/slowed/">slowed</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">22 damage; <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target makes a test using their highest characteristic.</p></div></div>
<div class="fb__feat-trailing">Ajax then raises his Blade of the Gol King above his head as four giant blades emerge from the ground to fill the area. Each target is <a href="../../../movement/forced-movement/">pushed</a> into an unoccupied space adjacent to the area after the power roll is resolved. Each blade blocks line of effect and can be dismissed by Ajax at will (no action required).</div>
</article>
</div>
</article>
</div>
