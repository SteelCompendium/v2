---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.7
features:
    - body: The psionic shard must be completely destroyed.
      icon: "\U0001F300"
      name: Deactivate
    - body: A psionic shard is attuned to one side in an encounter. While a psionic shard is intact, any damage dealt to each ally of the shard in the encounter is halved.
      icon: ⭐️
      name: Psionic Barrier
    - distance: Special
      icon: ❗️
      keywords:
        - '-'
      name: Psionic Pulse
      sections:
        - label: Trigger
          text: The shard is destroyed.
        - label: Effect
          text: The shard releases a shockwave channeled through each creature affected by Psionic Barrier. Each ally in the encounter is [dazed](../../condition/dazed.md) until the end of their next turn.
      target: Special
      usage: Free triggered action
flavor: A massive humming crystal makes the air around it feel thick.
level: 5
name: Psionic Shard
role: Defender
scc: mcdm.monsters.v1/dynamic-terrain.power-fixtures/psionic-shard
stats:
    - name: EV
      value: "7"
    - name: Stamina
      value: "40"
    - name: Size
      value: "2"
terrain_type: Fortification
type: dynamic-terrain
---

# Psionic Shard

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Psionic Shard</h2></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-eyebrow sc-head__slot--chip">Level 5</div><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini" data-role="defender">Fortification Defender</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">EV 7</div></div></header>
<div class="fb__flavor">A massive humming crystal makes the air around it feel thick.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">7</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">40</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Deactivate</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">The psionic shard must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Psionic Barrier</h3></div></div><div class="sc-head__rail sc-head__col--right"></div></header></div>
<div class="fb__feat-body">A psionic shard is attuned to one side in an encounter. While a psionic shard is intact, any damage dealt to each ally of the shard in the encounter is halved.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">❗️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Psionic Pulse</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Free triggered action</div></div></header></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The shard is destroyed.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shard releases a shockwave channeled through each creature affected by Psionic Barrier. Each ally in the encounter is <a href="../../../condition/dazed/">dazed</a> until the end of their next turn.</p></div></div>
</article>
</div>
</article>
</div>
