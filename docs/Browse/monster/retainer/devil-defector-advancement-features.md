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
<header class="fb__head">
<div class="fb__eyebrow">Features</div>
<h2 class="fb__name">Devil Defector Advancement Features</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Flames of Revenge</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the defector&#39;s mentor is in the area, the mentor burns with flame until the end of the defector&#39;s next turn. While this fire burns the mentor has fire immunity 10, and any creature who targets the mentor with a strike takes 10 fire damage.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Main action</div><h3 class="fb__feat-name sc-ability__name">Hell On Earth</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area burns with infernal fire until the end of the devil&#39;s next turn. Any enemy of the defector who ends their turn in the area takes 10 fire damage, and if they have P &lt; AVERAGE they are <a href="../../../condition/frightened/">frightened</a> (<a href="../../../rule/general/saving-throw/">save</a> ends).</p></div></div>
</article>
</div>
</div>
</article>
</div>
