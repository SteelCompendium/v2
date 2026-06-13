---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 4 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - '- Magic'
        - Ranged
        - Strike
      name: Weakening Glare
      power_roll:
        formula: + 4
        tiers:
            high: 12 damage; [weakened](scc:mcdm.heroes.v1/condition/weakened) (save ends)
            low: 6 damage; [weakened](scc:mcdm.heroes.v1/condition/weakened) (EoT)
            mid: 10 damage; [weakened](scc:mcdm.heroes.v1/condition/weakened) (EoT)
      target: One creature
      usage: Main action
    - body: The medusa takes an additional main action on their turn. They can use this feature even if they are [dazed](scc:mcdm.heroes.v1/condition/dazed).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      name: Ssstop and Lisssten
      power_roll:
        formula: + 4
        tiers:
            high: I < 4 the target is charmed
            low: I < 2 the target is charmed
            mid: I < 3 the target is charmed
      sections:
        - label: Effect
          text: At a time of the medusa's choosing, a charmed creature moves up to their speed and makes a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike) against an enemy of the medusa's choice as a free triggered action. The creature is then no longer charmed.
      target: Three creatures
      usage: Main action
    - body: The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a **Might test**. An enemy [restrained](scc:mcdm.heroes.v1/condition/restrained) or [slowed](scc:mcdm.heroes.v1/condition/slowed) by the medusa's Petrify ability has a double bane on the test.
      cost: 7 Malice
      icon: "\U0001F533"
      name: Shatter Victims
      power_roll:
        tiers:
            high: 6 damage
            low: 12 damage; vertical [push](scc:mcdm.heroes.v1/movement/forced-movement) 3; [bleeding](scc:mcdm.heroes.v1/condition/bleeding) (save ends)
            mid: 10 damage; vertical [push](scc:mcdm.heroes.v1/movement/forced-movement) 3
flavor: At the start of a medusa's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Medusa Malice
scc: mcdm.monsters.v1/monster.medusa/medusa-malice
type: featureblock
---

# Medusa Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Medusa Malice</h2>
</header>
<div class="fb__flavor">At the start of a medusa&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Weakening Glare</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">4</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">- Magic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 4</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage; <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">12 damage; <a href="../scc:mcdm.heroes.v1/condition/weakened">weakened</a> (save ends)</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The medusa takes an additional main action on their turn. They can use this feature even if they are <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Ssstop and Lisssten</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three creatures</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 4</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">I &lt; 2 the target is charmed</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">I &lt; 3 the target is charmed</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">I &lt; 4 the target is charmed</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>At a time of the medusa&#39;s choosing, a charmed creature moves up to their speed and makes a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a> against an enemy of the medusa&#39;s choice as a free triggered action. The creature is then no longer charmed.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Shatter Victims</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">12 damage; vertical <a href="../scc:mcdm.heroes.v1/movement/forced-movement">push</a> 3; <a href="../scc:mcdm.heroes.v1/condition/bleeding">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage; vertical <a href="../scc:mcdm.heroes.v1/movement/forced-movement">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">6 damage</span></div></div></div>
<div class="fb__feat-body">The medusa causes three stone statues within 10 squares of them to each shatter in a 2-cube explosion. Each enemy in one of those areas makes a <b>Might test</b>. An enemy <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> or <a href="../scc:mcdm.heroes.v1/condition/slowed">slowed</a> by the medusa&#39;s Petrify ability has a double bane on the test.</div>
</article>
</div>
</article>
</div>
