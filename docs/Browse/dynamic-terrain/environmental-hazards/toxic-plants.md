---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of plants must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without [shifting](scc:mcdm.heroes.v1/movement/shifting).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Sleep Spores** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Magic
        - Melee
        - Strike
      name: Sleep Spores
      power_roll:
        formula: + 2
        tiers:
            high: M < 2 [dazed](scc:mcdm.heroes.v1/condition/dazed) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            low: M < 0 [dazed](scc:mcdm.heroes.v1/condition/dazed) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
            mid: M < 1 [dazed](scc:mcdm.heroes.v1/condition/dazed) ([save](scc:mcdm.heroes.v1/rule.general/saving-throw) ends)
      sections:
        - label: Trigger
          text: A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without [shifting](scc:mcdm.heroes.v1/movement/shifting).
        - label: Effect
          text: While [dazed](scc:mcdm.heroes.v1/condition/dazed) this way, a target who starts their turn in the area of the toxic plants falls [prone](scc:mcdm.heroes.v1/condition/prone) and can't stand.
      target: The triggering creature
      usage: Free triggered action
    - body: |-
        **Poisonous Spores (+2 EV)** Any creature [dazed](scc:mcdm.heroes.v1/condition/dazed) by this hazard takes 1d6 poison damage at the start of each of their turns.

        **Carnivorous Plants (+2 EV)** The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn [prone](scc:mcdm.heroes.v1/condition/prone) in the area takes 4 acid damage.
      icon: ⭐️
      name: Upgrades
flavor: Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.
level: 2
name: Toxic Plants
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/toxic-plants
stats:
    - name: EV
      value: 2 per 10 x 10 field
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares
terrain_type: Hazard
type: dynamic-terrain
---

# Toxic Plants

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Hazard · Hexer</div>
<h2 class="fb__name">Toxic Plants</h2>
</header>
<div class="fb__flavor">Colorful mushrooms or lovely flowering plants release a cloud of spores or pollen when disturbed, causing creatures to fall into a magical slumber.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">2 per 10 x 10 field</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each square of plants must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Sleep Spores</b> ability.</p></div></div>
<div class="fb__feat-body">A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without <a href="../scc:mcdm.heroes.v1/movement/shifting">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Sleep Spores</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">M &lt; 0 <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">M &lt; 1 <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">M &lt; 2 <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a> (<a href="../scc:mcdm.heroes.v1/rule.general/saving-throw">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature starts their turn in the area of the toxic plants, or enters a square of toxic plants without <a href="../scc:mcdm.heroes.v1/movement/shifting">shifting</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>While <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a> this way, a target who starts their turn in the area of the toxic plants falls <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a> and can&#39;t stand.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Upgrades</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Poisonous Spores (+2 EV)</b> Any creature <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a> by this hazard takes 1d6 poison damage at the start of each of their turns.

<b>Carnivorous Plants (+2 EV)</b> The plants are carnivorous and attempt to slowly digest any creature who falls among them. Any creature who starts their turn <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a> in the area takes 4 acid damage.</div>
</article>
</div>
</article>
</div>
