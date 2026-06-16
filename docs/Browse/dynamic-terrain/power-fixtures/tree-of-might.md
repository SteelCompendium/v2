---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The tree of might must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: At the start of each round while the tree of might is intact, each enemy touching the ground in the encounter area who has M < 0 takes 10 corruption damage, and the tree of might grows a fruit. The [potency](../../rule/character/potency.md) increases by 1 each subsequent round.
      icon: ⭐️
      name: Tree's Nourishment
    - body: Once per round, any creature [adjacent](../../rule/combat/adjacent.md) to the tree of might can take a fruit from the tree and eat it (no action required). The creature gains 10 [temporary Stamina](../../rule/health/temporary-stamina.md) and has their Might score increased by 1 (to a maximum of 6) until the end of the encounter.
      icon: ⭐️
      name: Mighty Fruit
flavor: A gnarled tree has unearthed roots that writhe and curl.
level: 5
name: Tree of Might
role: Hexer
scc: mcdm.monsters.v1/dynamic-terrain.power-fixtures/tree-of-might
stats:
    - name: EV
      value: "14"
    - name: Stamina
      value: "60"
    - name: Size
      value: "3"
    - name: Immunity
      value: 5 to all damage except corruption or fire damage
terrain_type: Hazard
type: dynamic-terrain
---

# Tree of Might

---

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Level 5 Hazard · Hexer</div>
<h2 class="fb__name">Tree of Might</h2>
</header>
<div class="fb__flavor">A gnarled tree has unearthed roots that writhe and curl.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">14</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">60</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">3</div></div>
<div class="fb__stat"><div class="fb__stat-l">Immunity</div><div class="fb__stat-v">5 to all damage except corruption or fire damage</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Deactivate</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The tree of might must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Tree&#39;s Nourishment</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">At the start of each round while the tree of might is intact, each enemy touching the ground in the encounter area who has M &lt; 0 takes 10 corruption damage, and the tree of might grows a fruit. The <a href="../../../rule/character/potency/">potency</a> increases by 1 each subsequent round.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Mighty Fruit</h3></div><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Once per round, any creature <a href="../../../rule/combat/adjacent/">adjacent</a> to the tree of might can take a fruit from the tree and eat it (no action required). The creature gains 10 <a href="../../../rule/health/temporary-stamina/">temporary Stamina</a> and has their Might score increased by 1 (to a maximum of 6) until the end of the encounter.</div>
</article>
</div>
</article>
</div>
