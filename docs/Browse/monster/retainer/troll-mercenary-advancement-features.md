---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: Encounter
      distance: Melee 1
      icon: "\U0001F5E1"
      keywords:
        - Melee
      level: 7
      name: Hangry Frenzy
      sections:
        - label: Effect
          text: The mercenary must be [winded](../../rule/health/winded.md) to use this ability. The mercenary uses Big Bite against each target.
      target: Three creatures
      usage: Main action
    - cost: Encounter
      distance: Self
      icon: ❗️
      keywords:
        - '-'
      level: 10
      name: Fire Bad
      sections:
        - label: Trigger
          text: An ability deals acid or fire damage to the mercenary.
        - label: Effect
          text: The mercenary moves up to their speed. If this movement takes them beyond the distance of the triggering ability, the ability has no effect on them.
      target: Self
      usage: Triggered action
name: Troll Mercenary Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/troll-mercenary
type: featureblock
---

# Troll Mercenary Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Troll Mercenary Advancement Features</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Hangry Frenzy</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three creatures</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mercenary must be <a href="../../../rule/health/winded/">winded</a> to use this ability. The mercenary uses Big Bite against each target.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Triggered action</div><h3 class="fb__feat-name sc-ability__name">Fire Bad</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>An ability deals acid or fire damage to the mercenary.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mercenary moves up to their speed. If this movement takes them beyond the distance of the triggering ability, the ability has no effect on them.</p></div></div>
</article>
</div>
</div>
</article>
</div>
