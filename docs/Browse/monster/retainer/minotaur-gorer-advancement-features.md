---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - distance: Melee 1
      icon: ❗️
      keywords:
        - Melee
      level: 4
      name: Horn Toss
      sections:
        - label: Trigger
          text: The gorer damages a creature within distance using Gore.
        - label: Effect
          text: The target is pushed up to 3 squares. If the target has [stability](../../rule/character/stability.md) 0, they are also knocked [prone](../../condition/prone.md).
      target: The triggering creature
      usage: Free triggered action
    - cost: Encounter
      distance: Self
      icon: "\U0001F464"
      keywords:
        - '-'
      level: 7
      name: Triumphant Bay
      sections:
        - label: Effect
          text: The gorer gains 3 [surges](../../rule/resource/surge.md), and until the start of the gorer's next turn, [strikes](../../rule/combat/strike.md) made against them and their mentor take a bane.
      target: Self
      usage: Maneuver
    - cost: Encounter
      distance: 1 burst
      icon: ❇️
      keywords:
        - Area
        - Weapon
      level: 10
      name: Horn Rake
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 21 damage; M < STRONG [prone](../../condition/prone.md) and can't stand ([save](../../rule/general/saving-throw.md) ends).
            low: 11 damage; M < WEAK [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
            mid: 16 damage; M < AVERAGE [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends)
      target: Each enemy in the area
      usage: Main action
name: Minotaur Gorer Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/minotaur-gorer
type: featureblock
---

# Minotaur Gorer Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Minotaur Gorer Advancement Features</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Free triggered action</div><h3 class="fb__feat-name sc-ability__name">Horn Toss</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The gorer damages a creature within distance using Gore.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target is pushed up to 3 squares. If the target has <a href="../../../rule/character/stability/">stability</a> 0, they are also knocked <a href="../../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Maneuver</div><h3 class="fb__feat-name sc-ability__name">Triumphant Bay</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The gorer gains 3 <a href="../../../rule/resource/surge/">surges</a>, and until the start of the gorer&#39;s next turn, <a href="../../../rule/combat/strike/">strikes</a> made against them and their mentor take a bane.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Horn Rake</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 damage; M &lt; WEAK <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 damage; M &lt; AVERAGE <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; M &lt; STRONG <a href="../../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../../rule/general/saving-throw/">save</a> ends).</span></div></div></div>
</article>
</div>
</div>
</article>
</div>
