---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The pool must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see **Explosive Reaction** below).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.
    - distance: 3 burst
      icon: ❗️
      keywords:
        - Area
      name: Explosive Reaction
      power_roll:
        formula: + 2
        tiers:
            high: 9 fire damage; M < 3 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            low: 3 fire damage; M < 1 the target is burning ([save](../../rule/general/saving-throw.md) ends)
            mid: 6 fire damage; M < 2 the target is burning ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: The pool takes fire damage.
        - label: Effect
          text: The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.
      target: Each creature and object in the area
      usage: Free triggered action
    - body: Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.
      icon: ⭐️
      name: Allied Awareness
flavor: This shallow pool bubbles with acid or some other corrosive liquid.
level: 2
name: Corrosive Pool
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/corrosive-pool
stats:
    - name: EV
      value: 3 per 10 x 10 pool
    - name: Stamina
      value: 12 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Immunity
      value: 20 to all damage except cold or fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Corrosive Pool

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 2 Hazard · Hexer</div>
<h2 class="fb__name">Corrosive Pool</h2>
</header>
<div class="fb__flavor">This shallow pool bubbles with acid or some other corrosive liquid.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">3 per 10 x 10 pool</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">12 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">20 to all damage except cold or fire damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The pool must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><h3 class="fb__feat-name sc-ability__name">Activate</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A creature or object takes 3 acid damage if they start their turn in the pool, and takes 3 acid damage for each square of the pool they enter.</p></div></div>
<div class="fb__feat-body">A creature or object enters the corrosive pool or starts their turn there. The liquid in the pool is also highly volatile (see <b>Explosive Reaction</b> below).</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Explosive Reaction</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each creature and object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">3 fire damage; M &lt; 1 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 fire damage; M &lt; 2 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">9 fire damage; M &lt; 3 the target is burning (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The pool takes fire damage.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The liquid in the pool is consumed. This ability has a double edge against any target in the pool. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round. Any target with acid weakness takes extra damage from this ability and while burning as if the fire damage were acid damage.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Allied Awareness</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Allies who have weapons are equipped with torches. Any ally can use a maneuver to throw a torch up to 5 squares and deal 1 fire damage to the pool, triggering Explosive Reaction.</div>
</article>
</div>
</article>
</div>
