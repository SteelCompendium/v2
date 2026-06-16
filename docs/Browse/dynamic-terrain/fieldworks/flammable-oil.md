---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - icon: "\U0001F300"
      intro: As a maneuver, a creature [adjacent](../../rule/combat/adjacent.md) to a patch of flammable oil can make an **Agility test**.
      name: Deactivate
      power_roll:
        tiers:
            high: The oil is rendered safe and can't be ignited.
            low: The creature ignites the oil and is affected as if in its area.
            mid: The oil temporarily ignites before safely burning out, and the creature takes 3 fire damage and is burning ([save](../../rule/general/saving-throw.md) ends).
    - body: A creature or object in a square of oil takes fire damage, or a creature or object enters a square of burning oil or starts their turn there.
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The triggering creature or object takes 3 fire damage and is burning ([save](../../rule/general/saving-throw.md) ends). A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.
    - body: '**Concealed Oil (+1 EV)** The oil is hidden until it ignites.'
      icon: ⭐️
      name: Upgrade
    - body: Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and ignite the flammable oil.
      icon: ⭐️
      name: Allied Awareness
flavor: A patch of flammable oil or pitch on the ground is ready to be ignited.
level: 1
name: Flammable Oil
role: Ambusher
scc: mcdm.monsters.v1/dynamic-terrain.fieldworks/flammable-oil
stats:
    - name: EV
      value: 2 per 10 x 10 patch
    - name: Stamina
      value: '-'
    - name: Size
      value: One or more squares
terrain_type: Trap
type: dynamic-terrain
---

# Flammable Oil

---

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Trap · Ambusher</div>
<h2 class="fb__name">Flammable Oil</h2>
</header>
<div class="fb__flavor">A patch of flammable oil or pitch on the ground is ready to be ignited.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2 per 10 x 10 patch</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">-</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-intro">As a maneuver, a creature <a href="../../../rule/combat/adjacent/">adjacent</a> to a patch of flammable oil can make an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature ignites the oil and is affected as if in its area.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The oil temporarily ignites before safely burning out, and the creature takes 3 fire damage and is burning (<a href="../../../rule/general/saving-throw/">save</a> ends).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The oil is rendered safe and can&#39;t be ignited.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Activate</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature or object takes 3 fire damage and is burning (<a href="../../../rule/general/saving-throw/">save</a> ends). A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.</p></div></div>
<div class="fb__feat-body">A creature or object in a square of oil takes fire damage, or a creature or object enters a square of burning oil or starts their turn there.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Upgrade</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Concealed Oil (+1 EV)</b> The oil is hidden until it ignites.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Allied Awareness</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and ignite the flammable oil.</div>
</article>
</div>
</article>
</div>
