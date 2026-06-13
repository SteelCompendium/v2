---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The fossil cryptic [slides](scc:mcdm.heroes.v1/movement/forced-movement) one creature on the ground up to 5 squares. If the creature is [prone](scc:mcdm.heroes.v1/condition/prone), this [forced movement](scc:mcdm.heroes.v1/movement/forced-movement) ignores [stability](scc:mcdm.heroes.v1/rule.character/stability).
      cost: 3 Malice
      icon: "\U0001F3F9"
      name: Floor Mosaic
    - body: The fossil cryptic takes an additional main action on their turn. They can use this feature even if they are [dazed](scc:mcdm.heroes.v1/condition/dazed).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: Two pillars of stone 1 square wide either thrust up out of the ground or jut down from the ceiling anywhere on the encounter map, to a height of up to 5 squares. A creature in the area of a pillar before it appears is knocked [prone](scc:mcdm.heroes.v1/condition/prone) on its surface. If the creature comes into contact with the ceiling above or the floor beneath the pillar and has M < 2 they are [restrained](scc:mcdm.heroes.v1/condition/restrained) (save ends).
      cost: 5 Malice
      icon: "\U0001F533"
      name: Stone Pillars
    - body: The air across the encounter map is thick with dust until the end of the encounter. Each enemy in the dust is suffocating. Additionally, at the end of each round, each enemy in the dust makes a **Might test**.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Choking Dust
      power_roll:
        tiers:
            high: No effect.
            low: Until the end of the enemy's next turn, their [stability](scc:mcdm.heroes.v1/rule.character/stability) is reduced to 0, and any [forced movement](scc:mcdm.heroes.v1/movement/forced-movement) effects targeting them gain a +2 bonus to the distance moved.
            mid: The enemy's [stability](scc:mcdm.heroes.v1/rule.character/stability) is halved (EoT).
flavor: At the start of a fossil cryptic's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Fossil Cryptic Malice
scc: mcdm.monsters.v1/monster.fossil-cryptic/fossil-cryptic-malice
type: featureblock
---

# Fossil Cryptic Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Fossil Cryptic Malice</h2>
</header>
<div class="fb__flavor">At the start of a fossil cryptic&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Floor Mosaic</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The fossil cryptic <a href="../scc:mcdm.heroes.v1/movement/forced-movement">slides</a> one creature on the ground up to 5 squares. If the creature is <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a>, this <a href="../scc:mcdm.heroes.v1/movement/forced-movement">forced movement</a> ignores <a href="../scc:mcdm.heroes.v1/rule.character/stability">stability</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The fossil cryptic takes an additional main action on their turn. They can use this feature even if they are <a href="../scc:mcdm.heroes.v1/condition/dazed">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Stone Pillars</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Two pillars of stone 1 square wide either thrust up out of the ground or jut down from the ceiling anywhere on the encounter map, to a height of up to 5 squares. A creature in the area of a pillar before it appears is knocked <a href="../scc:mcdm.heroes.v1/condition/prone">prone</a> on its surface. If the creature comes into contact with the ceiling above or the floor beneath the pillar and has M &lt; 2 they are <a href="../scc:mcdm.heroes.v1/condition/restrained">restrained</a> (save ends).</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Choking Dust</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">10</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">Until the end of the enemy&#39;s next turn, their <a href="../scc:mcdm.heroes.v1/rule.character/stability">stability</a> is reduced to 0, and any <a href="../scc:mcdm.heroes.v1/movement/forced-movement">forced movement</a> effects targeting them gain a +2 bonus to the distance moved.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The enemy&#39;s <a href="../scc:mcdm.heroes.v1/rule.character/stability">stability</a> is halved (EoT).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">The air across the encounter map is thick with dust until the end of the encounter. Each enemy in the dust is suffocating. Additionally, at the end of each round, each enemy in the dust makes a <b>Might test</b>.</div>
</article>
</div>
</article>
</div>
