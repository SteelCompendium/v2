---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Destroying a square of the frozen pond turns the square into shallow icy water.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature or object enters a square of the frozen pond without [shifting](../../movement/shifting.md).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: The **Slippery Surface** ability.
    - distance: Melee 0
      icon: ❗️
      keywords:
        - Melee
        - Strike
      name: Slippery Surface
      power_roll:
        formula: + 2
        tiers:
            high: Push 3 in the direction the target was moving; A < 2 [prone](../../condition/prone.md) and can't stand ([save](../../rule/general/saving-throw.md) ends)
            low: Push 1 in the direction the target was moving
            mid: Push 2 in the direction the target was moving; A < 1 [slowed](../../condition/slowed.md) ([save](../../rule/general/saving-throw.md) ends)
      sections:
        - label: Trigger
          text: A creature or object enters a square of the frozen pond without [shifting](../../movement/shifting.md).
        - label: Effect
          text: The triggering creature's movement ends, then they are [force moved](../../movement/forced-movement.md). If the target triggered this ability by being [force moved](../../movement/forced-movement.md), this ability gains an edge and any remaining [forced movement](../../movement/forced-movement.md) distance is added to the ability's [forced movement](../../movement/forced-movement.md). The ability's [forced movement](../../movement/forced-movement.md) doesn't trigger the ability again.
      target: The triggering creature or object
      usage: Free triggered action
    - body: |-
        **Thin Ice (+1 EV)** The ice covering the pond is thin and the water is deeper. Whenever a creature or object enters or falls [prone](../../condition/prone.md) in a square of the frozen pond, that square is destroyed and replaced with icy water. The **Icy Water** ability replaces **Slippery Surface**.

        Any creature who starts their turn in the icy water takes 1 cold damage. If the water is deep enough, a creature can swim beneath the surface of the frozen pond, but takes this cold damage while doing so.
      icon: ⭐️
      name: Upgrade
flavor: A shallow, frozen patch of water features ice thick enough that it won't break, but its surface is slick and treacherous to navigate.
level: 1
name: Frozen Pond
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/frozen-pond
stats:
    - name: EV
      value: 1 per 10 x 10 pond
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
    - name: Immunity
      value: 5 to all damage except fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Frozen Pond

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 1 Hazard · Hexer</div>
<h2 class="fb__name">Frozen Pond</h2>
</header>
<div class="fb__flavor">A shallow, frozen patch of water features ice thick enough that it won&#39;t break, but its surface is slick and treacherous to navigate.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1 per 10 x 10 pond</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">5 to all damage except fire damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Destroying a square of the frozen pond turns the square into shallow icy water.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❕</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Activate</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The <b>Slippery Surface</b> ability.</p></div></div>
<div class="fb__feat-body">A creature or object enters a square of the frozen pond without <a href="../../../movement/shifting/">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><div class="fb__feat-titles"><div class="fb__feat-eyebrow"><span class="sc-ability__dia"></span>Free triggered action</div><h3 class="fb__feat-name sc-ability__name">Slippery Surface</h3></div><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 0</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature or object</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 2</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">Push 1 in the direction the target was moving</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">Push 2 in the direction the target was moving; A &lt; 1 <a href="../../../condition/slowed/">slowed</a> (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">Push 3 in the direction the target was moving; A &lt; 2 <a href="../../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>A creature or object enters a square of the frozen pond without <a href="../../../movement/shifting/">shifting</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The triggering creature&#39;s movement ends, then they are <a href="../../../movement/forced-movement/">force moved</a>. If the target triggered this ability by being <a href="../../../movement/forced-movement/">force moved</a>, this ability gains an edge and any remaining <a href="../../../movement/forced-movement/">forced movement</a> distance is added to the ability&#39;s <a href="../../../movement/forced-movement/">forced movement</a>. The ability&#39;s <a href="../../../movement/forced-movement/">forced movement</a> doesn&#39;t trigger the ability again.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Upgrade</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body"><b>Thin Ice (+1 EV)</b> The ice covering the pond is thin and the water is deeper. Whenever a creature or object enters or falls <a href="../../../condition/prone/">prone</a> in a square of the frozen pond, that square is destroyed and replaced with icy water. The <b>Icy Water</b> ability replaces <b>Slippery Surface</b>.

Any creature who starts their turn in the icy water takes 1 cold damage. If the water is deep enough, a creature can swim beneath the surface of the frozen pond, but takes this cold damage while doing so.</div>
</article>
</div>
</article>
</div>
