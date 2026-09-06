---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: 3 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      level: 7
      name: Unholy Attraction
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage, pull 4
            low: 8 damage; pull 1
            mid: 12 damage; pull 2
      sections:
        - label: Effect
          text: A target who is pulled [adjacent](../../rule/combat/adjacent.md) to the flameslinger and who has P < AVERAGE is knocked [prone](../../condition/prone.md).
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: 3 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      level: 10
      name: Fire Spiral
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 16 damage; [push](../../movement/forced-movement.md) 5
            low: 8 damage; [push](../../movement/forced-movement.md) 2
            mid: 12 damage; [push](../../movement/forced-movement.md) 3
      sections:
        - label: Effect
          text: If the flameslinger's mentor is within 10 squares of the flameslinger, the mentor can be the source of the burst instead of the flameslinger.
      target: Each enemy in the area
      usage: Main action
name: Hobgoblin Flameslinger Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/hobgoblin-flameslinger
type: featureblock
---

# Hobgoblin Flameslinger Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hobgoblin Flameslinger Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-unholy-attraction">Unholy Attraction</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; pull 1</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; pull 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage, pull 4</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target who is pulled <a href="../../../rule/combat/adjacent/">adjacent</a> to the flameslinger and who has P &lt; AVERAGE is knocked <a href="../../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line" id="sc-feat-fire-spiral">Fire Spiral</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; <a href="../../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; <a href="../../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; <a href="../../../movement/forced-movement/">push</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the flameslinger&#39;s mentor is within 10 squares of the flameslinger, the mentor can be the source of the burst instead of the flameslinger.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 🔳 **Unholy Attraction (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic, Ranged** |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |-------------------------|------------------------------:|&#10;&gt; | **📏 3 cube within 10** | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 8 damage; pull 1&#10;&gt; - **12-16:** 12 damage; pull 2&#10;&gt; - **17+:** 16 damage, pull 4&#10;&gt;&#10;&gt; **Effect:** A target who is pulled &#91;adjacent](../../rule/combat/adjacent.md) to the flameslinger and who has P &lt; AVERAGE is knocked &#91;prone](../../condition/prone.md).&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; ❇️ **Fire Spiral (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic** |               **&#91;Main action](../../rule/combat/turn.md)** |&#10;&gt; |-----------------|------------------------------:|&#10;&gt; | **📏 3 burst**  | **🎯 Each enemy in the area** |&#10;&gt;&#10;&gt; **Power Roll + highest characteristic:**&#10;&gt;&#10;&gt; - **≤11:** 8 damage; &#91;push](../../movement/forced-movement.md) 2&#10;&gt; - **12-16:** 12 damage; &#91;push](../../movement/forced-movement.md) 3&#10;&gt; - **17+:** 16 damage; &#91;push](../../movement/forced-movement.md) 5&#10;&gt;&#10;&gt; **Effect:** If the flameslinger&#39;s mentor is within 10 squares of the flameslinger, the mentor can be the source of the burst instead of the flameslinger."></template>
