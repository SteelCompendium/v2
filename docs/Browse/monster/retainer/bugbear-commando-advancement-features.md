---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 4
      name: Face Grab
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 13 damage; M < STRONG [grabbed](../../condition/grabbed.md)
            low: 6 damage; M < WEAK [grabbed](../../condition/grabbed.md)
            mid: 9 damage; M < AVERAGE [grabbed](../../condition/grabbed.md)
      sections:
        - label: Effect
          text: While the target is [grabbed](../../condition/grabbed.md) this way, they can't communicate and all creatures and objects have concealment from them.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
        - Strike
      level: 7
      name: Shadow Drag
      power_roll:
        formula: + highest characteristic
        tiers:
            high: Pull 12
            low: Pull 8
            mid: Pull 10
      sections:
        - label: Effect
          text: The target takes 1 damage for each square they are [pulled](../../movement/forced-movement.md).
      target: One creature or object
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
      level: 10
      name: Neck Snap
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 24 damage
            low: 12 damage
            mid: 18 damage
      sections:
        - label: Effect
          text: The target takes 15 damage, they are no longer [grabbed](../../condition/grabbed.md), and they fall [prone](../../condition/prone.md).
      target: One creature grabbed by the commando
      usage: Main action
name: Bugbear Commando Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/bugbear-commando
type: featureblock
---

# Bugbear Commando Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bugbear Commando Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Face Grab</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; M &lt; WEAK <a href="../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 damage; M &lt; AVERAGE <a href="../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 damage; M &lt; STRONG <a href="../../../condition/grabbed/">grabbed</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While the target is <a href="../../../condition/grabbed/">grabbed</a> this way, they can&#39;t communicate and all creatures and objects have concealment from them.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shadow Drag</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">Pull 8</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">Pull 10</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">Pull 12</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target takes 1 damage for each square they are <a href="../../../movement/forced-movement/">pulled</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Neck Snap</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature grabbed by the commando</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">18 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">24 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target takes 15 damage, they are no longer <a href="../../../condition/grabbed/">grabbed</a>, and they fall <a href="../../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>
