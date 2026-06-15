---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The shambling mound seeps noxious residue from their vines. The next time they use their Vine Lash ability before the end of their next turn, they deal an extra 12 poison damage to each target.
      cost: 3 Malice
      icon: "\U0001F464"
      name: Poisoned Vines
    - cost: 5 Malice
      icon: ❇️
      intro: The shambling mound lashes out at each enemy within 10 squares of them, driving them back or into the air. Each target makes an **Agility test**.
      name: Frenzy Lash
      power_roll:
        tiers:
            high: 3 damage
            low: 7 damage; [push](../../movement/forced-movement.md) 7 or vertical push 3; [restrained](../../condition/restrained.md) (save ends)
            mid: 6 damage; [push](../../movement/forced-movement.md) 5 or vertical push 2
    - body: The shambling mound takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 5 Malice
      icon: ☠️
      name: Solo Action
    - body: Until the end of the shambling mound's next turn, the area within 10 squares of them is [difficult terrain](../../movement/difficult-terrain.md) for enemies, and any enemy in the area takes a bane on power rolls. Any enemy who starts their turn in the area takes 4 acid damage, and the shambling mound regains an equal amount of [Stamina](../../rule/health/stamina.md).
      cost: 7 Malice
      icon: ❇️
      name: Leeching Wilds
flavor: At the start of a shambling mound's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Shambling Mound Malice
scc: mcdm.monsters.v1/monster.shambling-mound/shambling-mound-malice
type: featureblock
---

# Shambling Mound Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Shambling Mound Malice</h2>
</header>
<div class="fb__flavor">At the start of a shambling mound&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Poisoned Vines</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">The shambling mound seeps noxious residue from their vines. The next time they use their Vine Lash ability before the end of their next turn, they deal an extra 12 poison damage to each target.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Frenzy Lash</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-intro">The shambling mound lashes out at each enemy within 10 squares of them, driving them back or into the air. Each target makes an <b>Agility test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage; <a href="../../../movement/forced-movement/">push</a> 7 or vertical push 3; <a href="../../../condition/restrained/">restrained</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">6 damage; <a href="../../../movement/forced-movement/">push</a> 5 or vertical push 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">3 damage</span></div></div></div>
</article>
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">The shambling mound takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Leeching Wilds</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Until the end of the shambling mound&#39;s next turn, the area within 10 squares of them is <a href="../../../movement/difficult-terrain/">difficult terrain</a> for enemies, and any enemy in the area takes a bane on power rolls. Any enemy who starts their turn in the area takes 4 acid damage, and the shambling mound regains an equal amount of <a href="../../../rule/health/stamina/">Stamina</a>.</div>
</article>
</div>
</article>
</div>
