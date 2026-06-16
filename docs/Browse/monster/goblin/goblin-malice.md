---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: Each goblin in the encounter gains a +2 bonus to speed until the end of the round.
      cost: 3 Malice
      icon: ⭐️
      name: Goblin Mode
    - body: Each enemy in the encounter takes 1 damage for each goblin [adjacent](../../rule/combat/adjacent.md) to them.
      cost: 5 Malice
      icon: ❇️
      name: Tiny Stabs
    - cost: 7 Malice
      icon: "\U0001F300"
      intro: The encounter map is covered in a green mist that lasts until the end of the round, and which can't be dispersed by wind. All areas of the map are [difficult terrain](../../movement/difficult-terrain.md) for non-goblins, and each non-goblin on the map makes a **Might test**.
      name: Swamp Stink
      power_roll:
        tiers:
            high: No effect.
            low: 5 poison damage; the creature is [weakened](../../condition/weakened.md) until the mist disappears.
            mid: The creature is [weakened](../../condition/weakened.md) until the mist disappears.
flavor: At the start of any goblin's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Goblin Malice
scc: mcdm.monsters.v1/monster.goblin/goblin-malice
type: featureblock
---

# Goblin Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Goblin Malice</h2>
</header>
<div class="fb__flavor">At the start of any goblin&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Goblin Mode</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="fb__feat-body">Each goblin in the encounter gains a +2 bonus to speed until the end of the round.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Tiny Stabs</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="fb__feat-body">Each enemy in the encounter takes 1 damage for each goblin <a href="../../../rule/combat/adjacent/">adjacent</a> to them.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Swamp Stink</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-intro">The encounter map is covered in a green mist that lasts until the end of the round, and which can&#39;t be dispersed by wind. All areas of the map are <a href="../../../movement/difficult-terrain/">difficult terrain</a> for non-goblins, and each non-goblin on the map makes a <b>Might test</b>.</div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 poison damage; the creature is <a href="../../../condition/weakened/">weakened</a> until the mist disappears.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature is <a href="../../../condition/weakened/">weakened</a> until the mist disappears.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
</article>
</div>
</article>
</div>
