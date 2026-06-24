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
      name: Flames of Revenge
      power_roll:
        formula: + highest characteristic
        tiers:
            high: 14 corruption damage
            low: 6 corruption damage
            mid: 10 corruption damage
      sections:
        - label: Effect
          text: If the defector's mentor is in the area, the mentor burns with flame until the end of the defector's next turn. While this fire burns the mentor has fire immunity 10, and any creature who targets the mentor with a strike takes 10 fire damage.
      target: Each enemy in the area
      usage: Main action
    - cost: Encounter
      distance: 5 cube within 10
      icon: "\U0001F533"
      keywords:
        - Area
        - Magic
        - Ranged
      level: 10
      name: Hell On Earth
      sections:
        - label: Effect
          text: The area burns with infernal fire until the end of the devil's next turn. Any enemy of the defector who ends their turn in the area takes 10 fire damage, and if they have P < AVERAGE they are [frightened](../../condition/frightened.md) ([save](../../rule/general/saving-throw.md) ends).
      target: Special
      usage: Main action
name: Devil Defector Advancement Features
scc: mcdm.monsters.v1/monster.retainer.advancement-features/devil-defector
type: featureblock
---

# Devil Defector Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Devil Defector Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Flames of Revenge</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the defector&#39;s mentor is in the area, the mentor burns with flame until the end of the defector&#39;s next turn. While this fire burns the mentor has fire immunity 10, and any creature who targets the mentor with a strike takes 10 fire damage.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🔳</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Hell On Earth</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area burns with infernal fire until the end of the devil&#39;s next turn. Any enemy of the defector who ends their turn in the area takes 10 fire damage, and if they have P &lt; AVERAGE they are <a href="../../../condition/frightened/">frightened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends).</p></div></div>
</article>
</div>
</div>
</article>
</div>
