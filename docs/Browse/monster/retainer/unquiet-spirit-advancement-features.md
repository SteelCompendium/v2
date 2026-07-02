---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
        - Strike
      level: 4
      name: Enervating Curse
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 14 corruption damage; the target has 3 levels of drain
            low: 6 corruption damage; the target has 1 level of drain
            mid: 10 corruption damage; the target has 2 levels of drain
      sections:
        - label: Effect
          text: The next creature to make a [strike](../../rule/combat/strike.md) against the target gains 1 [surge](../../rule/resource/surge.md) for each level of drain, which must be used on that [strike](../../rule/combat/strike.md).
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 3 cube within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      level: 7
      name: Ectoplasm
      power_roll:
        formula: + highest characteristic
        tiers:
            high: A < STRONG [slowed](../../condition/slowed.md) and [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: A < WEAK [slowed](../../condition/slowed.md) and [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: A < AVERAGE [slowed](../../condition/slowed.md) and [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
        - Strike
      level: 10
      name: Death Phase
      sections:
        - label: Effect
          text: If the target has P < STRONG, they are phased until the end of their next turn. A phased target gains the unquiet spirit's Corruptive Phasing trait and can [fly](../../movement/fly.md). They are visible but can't affect or be affed by other creatures or objects. A willing creature not subject to the ability's [potency](../../rule/character/potency.md) can choose to automatically be affected.
      target: One creature
      usage: Main action
name: Unquiet Spirit Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/unquiet-spirit
type: featureblock
---

# Unquiet Spirit Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Unquiet Spirit Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Enervating Curse</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage; the target has 1 level of drain</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage; the target has 2 levels of drain</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage; the target has 3 levels of drain</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The next creature to make a <a href="../../../rule/combat/strike/">strike</a> against the target gains 1 <a href="../../../rule/resource/surge/">surge</a> for each level of drain, which must be used on that <a href="../../../rule/combat/strike/">strike</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Ectoplasm</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">A &lt; WEAK <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">A &lt; AVERAGE <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">A &lt; STRONG <a href="../../../condition/slowed/">slowed</a> and <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Death Phase</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the target has P &lt; STRONG, they are phased until the end of their next turn. A phased target gains the unquiet spirit&#39;s Corruptive Phasing trait and can <a href="../../../movement/fly/">fly</a>. They are visible but can&#39;t affect or be affed by other creatures or objects. A willing creature not subject to the ability&#39;s <a href="../../../rule/character/potency/">potency</a> can choose to automatically be affected.</p></div></div>
</article>
</div>
</div>
</article>
</div>
