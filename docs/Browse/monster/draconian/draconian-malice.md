---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: A draconian acting this turn flaps their wings and creates a mighty gale. Each creature [adjacent](../../rule/combat/adjacent.md) to the draconian is pushed up to 4 squares, and if they have M < 2, they are knocked [prone](../../condition/prone.md).
      cost: 3 Malice
      icon: "\U0001F464"
      name: Guarding Gale
    - cost: 5 Malice
      distance: 4 x 2 line within 1
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
      name: Breath Weapon
      power_roll:
        formula: + 3
        tiers:
            high: 13 damage
            low: 6 damage
            mid: 10 damage
      sections:
        - label: Special
          text: The damage dealt by this ability matches a damage type the draconian has immunity to.
      target: Each enemy in the area
      usage: Main action
    - cost: 7 Malice
      distance: 2 burst
      icon: ❇️
      keywords:
        - Area
        - Magic
      name: Scaleshatter Burst
      power_roll:
        formula: + 3
        tiers:
            high: 16 damage
            low: 7 damage
            mid: 13 damage
      sections:
        - label: Effect
          text: The draconian's scales shatter from battle damage. The draconian has damage weakness 5 but can take two turns per round until the end of the encounter.
      target: Each enemy in the area
      usage: Free maneuver
flavor: At the start of any draconian's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Draconian Malice
scc: mcdm.monsters.v1/monster.draconian/draconian-malice
type: featureblock
---

# Draconian Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Draconian Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any draconian&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Guarding Gale</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3 Malice</div></div></header></div>
<div class="fb__feat-body">A draconian acting this turn flaps their wings and creates a mighty gale. Each creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the draconian is pushed up to 4 squares, and if they have M &lt; 2, they are knocked <a href="../../../condition/prone/">prone</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Breath Weapon</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 x 2 line within 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">13 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The damage dealt by this ability matches a damage type the draconian has immunity to.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❇️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Scaleshatter Burst</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">7 Malice</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 3</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The draconian&#39;s scales shatter from battle damage. The draconian has damage weakness 5 but can take two turns per round until the end of the encounter.</p></div></div>
</article>
</div>
</article>
</div>
