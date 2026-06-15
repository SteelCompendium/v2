---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each wode elf who ends this turn hidden can [shift](../../movement/shifting.md) up to their speed while remaining hidden.
      cost: 3 Malice
      icon: ⭐️
      name: Forest Network
    - body: Until the end of the round, each wode elf gains an edge on abilities, and their strikes can [slide](../../movement/forced-movement.md) a target up to 2 squares in addition to their usual effects. If a strike already imposes forced movement, this slide happens after that forced movement. A creature force moved by a wode elf's strike who ends this forced movement in [difficult terrain](../../movement/difficult-terrain.md) is [restrained](../../condition/restrained.md) until the end of their next turn.
      cost: 5 Malice
      icon: ⭐️
      name: Punishing Regrowth
    - body: Vines rapidly grow across the entire encounter map. Each enemy in the encounter makes an **Agility test**.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Vines Everywhere
      power_roll:
        tiers:
            high: No effect.
            low: 8 damage; [restrained](../../condition/restrained.md) (save ends)
            mid: '[Restrained](../../condition/restrained.md) (EoT)'
flavor: At the start of any wode elf's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Wode Elf Malice
scc: mcdm.monsters.v1/monster.elves-wode/wode-elf-malice
type: featureblock
---

# Wode Elf Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Wode Elf Malice</h2>
</header>
<div class="fb__flavor">At the start of any wode elf&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Forest Network</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Each wode elf who ends this turn hidden can <a href="../../../movement/shifting/">shift</a> up to their speed while remaining hidden.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Punishing Regrowth</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the round, each wode elf gains an edge on abilities, and their strikes can <a href="../../../movement/forced-movement/">slide</a> a target up to 2 squares in addition to their usual effects. If a strike already imposes forced movement, this slide happens after that forced movement. A creature force moved by a wode elf&#39;s strike who ends this forced movement in <a href="../../../movement/difficult-terrain/">difficult terrain</a> is <a href="../../../condition/restrained/">restrained</a> until the end of their next turn.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Vines Everywhere</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; <a href="../../../condition/restrained/">restrained</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../condition/restrained/">Restrained</a> (EoT)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="fb__feat-body">Vines rapidly grow across the entire encounter map. Each enemy in the encounter makes an <b>Agility test</b>.</div>
</article>
</div>
</article>
</div>
