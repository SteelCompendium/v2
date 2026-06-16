---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The manticore uses their mimicry in an attempt to unnerve one creature within their line of effect. If the target has R < 4, they take a bane on power rolls against the manticore (save ends). Each time this feature is used against the same target during the encounter, its [potency](../../rule/character/potency.md) decreases by 2.
      cost: 3 Malice
      icon: "\U0001F300"
      name: Uncanny Mimicry
    - body: The manticore takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - cost: 5 Malice
      icon: "\U0001F300"
      intro: The manticore lets out an unnerving cry. Each enemy within the manticore's line of effect makes an **Intuition test**.
      name: Desperate Howl
      power_roll:
        tiers:
            high: No effect.
            low: '[Frightened](../../condition/frightened.md) (save ends)'
            mid: '[Frightened](../../condition/frightened.md) (EoT)'
    - body: The manticore sprays tail spikes across the ground within 5 squares of them. Each enemy in that area who has A < 3 is [bleeding](../../condition/bleeding.md) (save ends). Additionally, the area is [difficult terrain](../../movement/difficult-terrain.md), and any enemy takes 3 poison damage for each square of the area they enter. An enemy who takes 9 poison damage this way on one turn is [weakened](../../condition/weakened.md) until the end of the encounter.
      cost: 7 Malice
      icon: ❇️
      name: Barrage of Barbs
flavor: At the start of any manticore's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Manticore Malice
scc: mcdm.monsters.v1/monster.manticore/manticore-malice
type: featureblock
---

# Manticore Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Manticore Malice</h2>
</header>
<div class="fb__flavor">At the start of any manticore&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Uncanny Mimicry</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The manticore uses their mimicry in an attempt to unnerve one creature within their line of effect. If the target has R &lt; 4, they take a bane on power rolls against the manticore (save ends). Each time this feature is used against the same target during the encounter, its <a href="../../../rule/character/potency/">potency</a> decreases by 2.</div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Solo Action</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The manticore takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Desperate Howl</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-intro">The manticore lets out an unnerving cry. Each enemy within the manticore&#39;s line of effect makes an <b>Intuition test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../../../condition/frightened/">Frightened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../condition/frightened/">Frightened</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><div class="fb__feat-titles"><h3 class="fb__feat-name sc-ability__name">Barrage of Barbs</h3></div><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">The manticore sprays tail spikes across the ground within 5 squares of them. Each enemy in that area who has A &lt; 3 is <a href="../../../condition/bleeding/">bleeding</a> (save ends). Additionally, the area is <a href="../../../movement/difficult-terrain/">difficult terrain</a>, and any enemy takes 3 poison damage for each square of the area they enter. An enemy who takes 9 poison damage this way on one turn is <a href="../../../condition/weakened/">weakened</a> until the end of the encounter.</div>
</article>
</div>
</article>
</div>
