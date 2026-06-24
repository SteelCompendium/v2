---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Ranged 3
      icon: "\U0001F3F9"
      keywords:
        - Ranged
      level: 4
      name: Stim Charge
      sections:
        - label: Effect
          text: The target can spend 1 [Recovery](../../rule/health/recoveries.md), and has their speed doubled until the end of their next turn.
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: Ranged 3
      icon: "\U0001F3F9"
      keywords:
        - Psionic
        - Ranged
        - Strike
      level: 7
      name: Mind Whelm
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 17 psychic damage; R < STRONG [frightened](../../condition/frightened.md) ([save](../../rule/general/saving-throw.md) ends)
            low: 8 psychic damage; R < WEAK [frightened](../../condition/frightened.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 13 psychic damage; R < AVERAGE [frightened](../../condition/frightened.md) ([save](../../rule/general/saving-throw.md) ends)
      target: One creature
      usage: Main action
    - cost: Encounter
      distance: 2 burst
      icon: ❇️
      keywords:
        - Area
        - Psionic
      level: 10
      name: Psychic Short Circuit
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 psychic damage
            low: 11 psychic damage
            mid: 16 psychic damage
      sections:
        - label: Effect
          text: If the mind healer is [dazed](../../condition/dazed.md), [frightened](../../condition/frightened.md), or [taunted](../../condition/taunted.md), they can end one of those conditions and impose the same condition on one enemy in the area. Additionally, they can do the same for their mentor if the mentor is in the area and is [dazed](../../condition/dazed.md), [frightened](../../condition/frightened.md), or [taunted](../../condition/taunted.md).
      target: Each enemy in the area
      usage: Main action
name: Time Raider Mind Healer Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/time-raider-mind-healer
type: featureblock
---

# Time Raider Mind Healer Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Time Raider Mind Healer Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Stim Charge</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target can spend 1 <a href="../../../rule/health/recoveries/">Recovery</a>, and has their speed doubled until the end of their next turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Mind Whelm</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 psychic damage; R &lt; WEAK <a href="../../../condition/frightened/">frightened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 psychic damage; R &lt; AVERAGE <a href="../../../condition/frightened/">frightened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">17 psychic damage; R &lt; STRONG <a href="../../../condition/frightened/">frightened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Psychic Short Circuit</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 psychic damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 psychic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 psychic damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the mind healer is <a href="../../../condition/dazed/">dazed</a>, <a href="../../../condition/frightened/">frightened</a>, or <a href="../../../condition/taunted/">taunted</a>, they can end one of those conditions and impose the same condition on one enemy in the area. Additionally, they can do the same for their mentor if the mentor is in the area and is <a href="../../../condition/dazed/">dazed</a>, <a href="../../../condition/frightened/">frightened</a>, or <a href="../../../condition/taunted/">taunted</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>
