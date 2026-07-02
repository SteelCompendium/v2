---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - distance: Self
      icon: "\U0001F464"
      keywords:
        - '-'
      level: 4
      name: Boost
      sections:
        - label: Effect
          text: If the sidekick's mentor moves [adjacent](../../rule/combat/adjacent.md) to the sidekick at any point during the mentor's turn, the mentor gains a +1 bonus to speed and can automatically climb at full speed while moving until the end of their turn.
      target: Self
      usage: Maneuver
    - cost: Encounter
      distance: 3 cube within 3
      icon: "\U0001F533"
      keywords:
        - Area
        - Ranged
      level: 7
      name: Bug Bag
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 13 poison damage; M < STRONG [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 6 poison damage; M < WEAK [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 poison damage; M < AVERAGE [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
      target: Each creature in the area
      usage: Main action
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Ranged
      level: 10
      name: Triumphant Squeak
      sections:
        - label: Effect
          text: Each target can spend a [Recovery](../../rule/health/recoveries.md), and ends the [dazed](../../condition/dazed.md), [frightened](../../condition/frightened.md), and [weakened](../../condition/weakened.md) conditions on themself.
      target: Self and each ally
      usage: Maneuver
name: Radenwight Sidekick Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/radenwight-sidekick
type: featureblock
---

# Radenwight Sidekick Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Radenwight Sidekick Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Boost</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the sidekick&#39;s mentor moves <a href="../../../rule/combat/adjacent/">adjacent</a> to the sidekick at any point during the mentor&#39;s turn, the mentor gains a +1 bonus to speed and can automatically climb at full speed while moving until the end of their turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bug Bag</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 poison damage; M &lt; WEAK <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 poison damage; M &lt; AVERAGE <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 poison damage; M &lt; STRONG <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Triumphant Squeak</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self and each ally</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target can spend a <a href="../../../rule/health/recoveries/">Recovery</a>, and ends the <a href="../../../condition/dazed/">dazed</a>, <a href="../../../condition/frightened/">frightened</a>, and <a href="../../../condition/weakened/">weakened</a> conditions on themself.</p></div></div>
</article>
</div>
</div>
</article>
</div>
