---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: The olothec takes an additional main action on their turn. They can use this feature even if they are [dazed](../../condition/dazed.md).
      cost: 4 Malice
      icon: ☠️
      name: Solo Action
    - cost: 4 Malice
      distance: Melee 3
      icon: "\U0001F5E1"
      keywords:
        - Melee
        - Strike
        - Weapon
      name: Writhing Envelopment
      power_roll:
        formula: + 4
        tiers:
            high: 20 psychic damage; A < 4 [grabbed](../../condition/grabbed.md)
            low: 11 psychic damage; A < 2 [grabbed](../../condition/grabbed.md)
            mid: 17 psychic damage; A < 3 [grabbed](../../condition/grabbed.md)
      sections:
        - label: Effect
          text: The olothec can [pull](../../movement/forced-movement.md) a target [grabbed](../../condition/grabbed.md) this way [adjacent](../../rule/combat/adjacent.md) to them. While [grabbed](../../condition/grabbed.md) this way, a target can't make [saving throws](../../rule/general/saving-throw.md) to end any other effects, and the olothec has a double edge on strikes against them.
      target: One slimed, transformed, or devolved creature
      usage: Main action
    - body: The olothec broadcasts their memory of the universe in its primordial state—a sweeping cacophony of transcendental irrationality and unceasing change. Until the end of the encounter, any creature who starts their turn within 3 squares of the olothec and has R < 3 is [dazed](../../condition/dazed.md) and [slowed](../../condition/slowed.md) until the end of their next turn).
      cost: 6 Malice
      icon: ❇️
      name: Memory of Chaos
flavor: At the start of an olothec's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Olothec Malice
scc: mcdm.monsters.v1/monster.olothec/olothec-malice
type: featureblock
---

# Olothec Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Olothec Malice</h2>
</header>
<div class="fb__flavor">At the start of an olothec&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="villain">
<div class="fb__feat-head"><span class="fb__feat-icon">☠️</span><h3 class="fb__feat-name sc-ability__name">Solo Action</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">4</span> Malice</div></div></div>
<div class="fb__feat-body">The olothec takes an additional main action on their turn. They can use this feature even if they are <a href="../../../condition/dazed/">dazed</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Writhing Envelopment</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">4</span> Malice</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One slimed, transformed, or devolved creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ 4</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 psychic damage; A &lt; 2 <a href="../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">17 psychic damage; A &lt; 3 <a href="../../../condition/grabbed/">grabbed</a></span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">20 psychic damage; A &lt; 4 <a href="../../../condition/grabbed/">grabbed</a></span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The olothec can <a href="../../../movement/forced-movement/">pull</a> a target <a href="../../../condition/grabbed/">grabbed</a> this way <a href="../../../rule/combat/adjacent/">adjacent</a> to them. While <a href="../../../condition/grabbed/">grabbed</a> this way, a target can&#39;t make <a href="../../../rule/general/saving-throw/">saving throws</a> to end any other effects, and the olothec has a double edge on strikes against them.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Memory of Chaos</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">6</span> Malice</div></div></div>
<div class="fb__feat-body">The olothec broadcasts their memory of the universe in its primordial state—a sweeping cacophony of transcendental irrationality and unceasing change. Until the end of the encounter, any creature who starts their turn within 3 squares of the olothec and has R &lt; 3 is <a href="../../../condition/dazed/">dazed</a> and <a href="../../../condition/slowed/">slowed</a> until the end of their next turn).</div>
</article>
</div>
</article>
</div>
