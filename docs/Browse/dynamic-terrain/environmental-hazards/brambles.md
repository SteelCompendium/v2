---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each square of brambles must be individually destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A creature enters a square of brambles without [shifting](../../movement/shifting.md).
      icon: ❕
      name: Activate
      sections:
        - label: Effect
          text: A creature takes 1 damage per square of brambles they enter.
    - body: '**Poisonous Thorns (+1 EV)** The brambles are poisonous. Any creature who takes damage from brambles is also [bleeding](../../condition/bleeding.md) ([save](../../rule/general/saving-throw.md) ends).'
      icon: ⭐️
      name: Upgrade
flavor: This thicket features close-growing vines tipped with sharp thorns.
level: 1
name: Brambles
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.environmental-hazards/brambles
stats:
    - name: EV
      value: 1 per 10 x 10 thicket
    - name: Stamina
      value: 3 per square
    - name: Size
      value: One or more squares of [difficult terrain](../../movement/difficult-terrain.md)
terrain_type: Hazard
type: dynamic-terrain
---

# Brambles

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Brambles</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 1</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="defender">Hazard Defender</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 1 per 10 x 10 thicket</div></div></header>
<div class="fb__flavor">This thicket features close-growing vines tipped with sharp thorns.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">1 per 10 x 10 thicket</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">3 per square</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">One or more squares of <a href="../../../movement/difficult-terrain/">difficult terrain</a></div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">Each square of brambles must be individually destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❕</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Activate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A creature takes 1 damage per square of brambles they enter.</p></div></div>
<div class="fb__feat-body">A creature enters a square of brambles without <a href="../../../movement/shifting/">shifting</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Upgrade</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body"><b>Poisonous Thorns (+1 EV)</b> The brambles are poisonous. Any creature who takes damage from brambles is also <a href="../../../condition/bleeding/">bleeding</a> (<a href="../../../rule/general/saving-throw/">save</a> ends).</div>
</article>
</div>
</article>
</div>
