---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      level: 4
      name: Winter's Breath
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 8 cold damage; [push](../../movement/forced-movement.md) 5
            low: 3 cold damage; [push](../../movement/forced-movement.md) 2
            mid: 5 cold damage; [push](../../movement/forced-movement.md) 3
      sections:
        - label: Effect
          text: The weatherwise can [teleport](../../movement/teleport.md) up to 5 squares before or after using this ability.
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: 3 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      level: 7
      name: Spring's Rebirth
      sections:
        - label: Effect
          text: Each target can spend a [Recovery](../../rule/health/recoveries.md), and can choose one effect on them that can be ended by a [saving throw](../../rule/general/saving-throw.md). That effect instead ends at the end of their turn.
      target: Each ally in the area
      usage: Main action
    - cost: Encounter
      distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      level: 10
      name: Autumn's Decay
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 14 corruption damage; P < STRONG [prone](../../condition/prone.md) and can't stand ([save](../../rule/general/saving-throw.md) ends)
            low: 6 corruption damage; P < WEAK [prone](../../condition/prone.md) and can't stand ([save](../../rule/general/saving-throw.md) ends)
            mid: 10 corruption damage; P < AVERAGE [prone](../../condition/prone.md) and can't stand ([save](../../rule/general/saving-throw.md) ends)
      target: Each enemy in the area
      usage: Main action
name: High Elf Weatherwise Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/high-elf-weatherwise
type: featureblock
---

# High Elf Weatherwise Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">High Elf Weatherwise Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Winter&#39;s Breath</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 cold damage; <a href="../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">5 cold damage; <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">8 cold damage; <a href="../../../movement/forced-movement/">push</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The weatherwise can <a href="../../../movement/teleport/">teleport</a> up to 5 squares before or after using this ability.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spring&#39;s Rebirth</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each ally in the area</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target can spend a <a href="../../../rule/health/recoveries/">Recovery</a>, and can choose one effect on them that can be ended by a <a href="../../../rule/general/saving-throw/">saving throw</a>. That effect instead ends at the end of their turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Autumn&#39;s Decay</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage; P &lt; WEAK <a href="../../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage; P &lt; AVERAGE <a href="../../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage; P &lt; STRONG <a href="../../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
</div>
</article>
</div>
