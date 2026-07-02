---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 7
      name: Looming Wings
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 12 corruption damage; I < STRONG [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 5 corruption damage; I < WEAK [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 9 corruption damage; I < AVERAGE [weakened](../../condition/weakened.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Effect
          text: If the Nameless's mentor is in the area, ability rolls against the mentor have a double bane until the start of their next turn.
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: 5 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      level: 10
      name: Spew Death
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 corruption damage
            low: 11 corruption damage
            mid: 16 corruption damage
      sections:
        - label: Special
          text: The Nameless must be [winded](../../rule/health/winded.md) to use this ability.
        - label: Effect
          text: Any living [minions](../../rule/organization/minion.md) reduced to 0 [Stamina](../../rule/health/stamina.md) by this ability regain all their [Stamina](../../rule/health/stamina.md) and become corporeal [undead](../../rule/keyword/undead.md) under the Nameless's control until the end of the Nameless's next turn, after which they are destroyed.
      target: Each enemy in the area
      usage: Main action
name: The Nameless Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/the-nameless
type: featureblock
---

# The Nameless Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">The Nameless Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Looming Wings</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 corruption damage; I &lt; WEAK <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">9 corruption damage; I &lt; AVERAGE <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 corruption damage; I &lt; STRONG <a href="../../../condition/weakened/">weakened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the Nameless&#39;s mentor is in the area, ability rolls against the mentor have a double bane until the start of their next turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spew Death</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 corruption damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 corruption damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The Nameless must be <a href="../../../rule/health/winded/">winded</a> to use this ability.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Any living <a href="../../../rule/organization/minion/">minions</a> reduced to 0 <a href="../../../rule/health/stamina/">Stamina</a> by this ability regain all their <a href="../../../rule/health/stamina/">Stamina</a> and become corporeal <a href="../../../rule/keyword/undead/">undead</a> under the Nameless&#39;s control until the end of the Nameless&#39;s next turn, after which they are destroyed.</p></div></div>
</article>
</div>
</div>
</article>
</div>
