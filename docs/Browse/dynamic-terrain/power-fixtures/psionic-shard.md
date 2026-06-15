---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
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
<header class="fb__head">
<div class="fb__eyebrow">Level 5 Fortification · Defender</div>
<h2 class="fb__name">Psionic Shard</h2>
</header>
<div class="fb__flavor">A massive humming crystal makes the air around it feel thick.</div>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">EV</div><div class="fb__stat-v">7</div></div>
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">40</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Deactivate</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">The psionic shard must be completely destroyed.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Psionic Barrier</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">A psionic shard is attuned to one side in an encounter. While a psionic shard is intact, any damage dealt to each ally of the shard in the encounter is halved.</div>
</article>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Psionic Pulse</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Special</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The shard is destroyed.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The shard releases a shockwave channeled through each creature affected by Psionic Barrier. Each ally in the encounter is <a href="../../../condition/dazed/">dazed</a> until the end of their next turn.</p></div></div>
</article>
</div>
</article>
</div>
