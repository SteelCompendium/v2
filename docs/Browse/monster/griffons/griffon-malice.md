---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - cost: 3 Malice
      distance: Self
      icon: "\U0001F464"
      keywords:
        - '-'
      name: Swoop
      sections:
        - label: Effect
          text: The griffon flies up to their speed, and can make a [free strike](scc:mcdm.heroes.v1/feature.common.main-actions/free-strike) against each creature who makes an [opportunity attack](scc:mcdm.heroes.v1/rule.combat/opportunity-attack) against them during this movement.
      target: Self
      usage: Maneuver
    - body: A griffon acting this turn unleashes a hideous screech at one enemy within 5 squares of them, forcing that creature to make an **Intuition test**.
      cost: 5 Malice
      icon: ❇️
      name: Piercing Cry
      power_roll:
        tiers:
            high: No effect.
            low: '[Frightened](scc:mcdm.heroes.v1/condition/frightened) (save ends)'
            mid: '[Frightened](scc:mcdm.heroes.v1/condition/frightened) (EoT)'
    - body: Winds bluster and blow across the encounter map. Until the end of the encounter, each creature who can't fly or isn't mounted on a flying creature takes a −3 penalty to [stability](scc:mcdm.heroes.v1/rule.character/stability), and any [forced movement](scc:mcdm.heroes.v1/movement/forced-movement) effect targeting such a creature moves them an additional 5 squares.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Wildwinds
flavor: At the start of any griffon's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Griffon Malice
scc: mcdm.monsters.v1/monster.griffons/griffon-malice
type: featureblock
---

# Swoop

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Griffon Malice</h2>
</header>
<div class="fb__flavor">At the start of any griffon&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Swoop</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The griffon flies up to their speed, and can make a <a href="../scc:mcdm.heroes.v1/feature.common.main-actions/free-strike">free strike</a> against each creature who makes an <a href="../scc:mcdm.heroes.v1/rule.combat/opportunity-attack">opportunity attack</a> against them during this movement.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Piercing Cry</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../scc:mcdm.heroes.v1/condition/frightened">Frightened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../scc:mcdm.heroes.v1/condition/frightened">Frightened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">A griffon acting this turn unleashes a hideous screech at one enemy within 5 squares of them, forcing that creature to make an <b>Intuition test</b>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Wildwinds</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="fb__feat-body">Winds bluster and blow across the encounter map. Until the end of the encounter, each creature who can&#39;t fly or isn&#39;t mounted on a flying creature takes a −3 penalty to <a href="../scc:mcdm.heroes.v1/rule.character/stability">stability</a>, and any <a href="../scc:mcdm.heroes.v1/movement/forced-movement">forced movement</a> effect targeting such a creature moves them an additional 5 squares.</div>
</article>
</div>
</article>
</div>
