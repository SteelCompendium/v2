---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Ranged
        - Strike
        - Weapon
      level: 7
      name: Slow-Poison Needle
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 poison damage; [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 8 poison damage; [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 12 poison damage; [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: The slow-poison needle is initially painless, with the damage and effect delayed until the start of the target's next turn. If the shade is hidden, using this ability doesn't cause them to be revealed.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      level: 10
      name: Shadow Dagger
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 23 poison damage; the target has shadowed vision (save ends)
            low: 12 poison damage; the target has shadowed vision (save ends)
            mid: 17 poison damage; the target has shadowed vision (save ends)
      sections:
        - label: Effect
          text: While a creature has shadowed vision, all creatures have concealment from them.
      target: One creature
      usage: Main action
name: Shadow Elf Shade Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/shadow-elf-shade
type: featureblock
---

# Shadow Elf Shade Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shadow Elf Shade Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Slow-Poison Needle</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 poison damage; <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 poison damage; <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 poison damage; <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The slow-poison needle is initially painless, with the damage and effect delayed until the start of the target&#39;s next turn. If the shade is hidden, using this ability doesn&#39;t cause them to be revealed.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🗡</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Shadow Dagger</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 poison damage; the target has shadowed vision (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">17 poison damage; the target has shadowed vision (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">23 poison damage; the target has shadowed vision (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While a creature has shadowed vision, all creatures have concealment from them.</p></div></div>
</article>
</div>
</div>
</article>
</div>
