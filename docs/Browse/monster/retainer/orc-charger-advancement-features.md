---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: Self
      icon: "\U0001F464"
      keywords:
        - Self
      level: 4
      name: Blood Oath
      sections:
        - label: Effect
          text: Until the start of the charger's next turn, the charger and their mentor each have [temporary Stamina](../../rule/health/temporary-stamina.md) equal to their Recovery value and a +2 bonus to speed, and they each gain an edge on reactive tests.
      target: Self
      usage: Maneuver
    - cost: Encounter
      distance: Self; See below
      icon: "\U0001F464"
      keywords:
        - '-'
      level: 7
      name: Mow 'Em Down
      sections:
        - label: Effect
          text: The charger moves in a straight line up to their speed. During this move, they ignore enemy [free strikes](../../feature/common/main-actions/free-strike.md), and they can make a melee [free strike](../../feature/common/main-actions/free-strike.md) against any creature they move [adjacent](../../rule/combat/adjacent.md) to.
      target: Self
      usage: Main action
    - cost: Encounter
      distance: 2 burst
      icon: ❇️
      keywords:
        - Area
        - Psionic
      level: 10
      name: Vein Burst
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 24 psychic damage
            low: 12 psychic damage
            mid: 18 psychic damage
      sections:
        - label: Effect
          text: The charger takes psychic damage equal to the number of enemies affected. This damage can't be reducetd in any way.
      target: Each enemy in the area
      usage: Main action
name: Orc Charger Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/orc-charger
type: featureblock
---

# Orc Charger Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Orc Charger Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Blood Oath</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Self</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Until the start of the charger&#39;s next turn, the charger and their mentor each have <a href="../../../rule/health/temporary-stamina/">temporary Stamina</a> equal to their Recovery value and a +2 bonus to speed, and they each gain an edge on reactive tests.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Mow &#39;Em Down</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self; See below</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The charger moves in a straight line up to their speed. During this move, they ignore enemy <a href="../../../feature/common/main-actions/free-strike/">free strikes</a>, and they can make a melee <a href="../../../feature/common/main-actions/free-strike/">free strike</a> against any creature they move <a href="../../../rule/combat/adjacent/">adjacent</a> to.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Vein Burst</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 psychic damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">18 psychic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">24 psychic damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The charger takes psychic damage equal to the number of enemies affected. This damage can&#39;t be reducetd in any way.</p></div></div>
</article>
</div>
</div>
</article>
</div>
