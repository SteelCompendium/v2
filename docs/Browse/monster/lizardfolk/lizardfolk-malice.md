---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
features:
    - body: "**Area, Ranged, Weapon** |   **Maneuver** | |--------------------------|---------------:| | **\U0001F4CF 1 cube within 3**   | **\U0001F3AF Special** |"
      cost: 3 Malice
      icon: "\U0001F533"
      name: Net Trap
      power_roll:
        tiers:
            high: No effect.
            low: '[Restrained](../../condition/restrained.md) (save ends).'
            mid: '[Restrained](../../condition/restrained.md) (Eot).'
      sections:
        - label: Effect
          text: A lizardfolk acting this turn sets up a net trap into the area. The first time an enemy steps into a square with a net trap, they make an **Agility test**. If the creature was unaware of the trap, they take a bane on the test.
        - label: Effect
          text: Any creature not also [restrained](../../condition/restrained.md) by a net trap who is [adjacent](../../rule/combat/adjacent.md) to a creature [restrained](../../condition/restrained.md) by the trap can free them as a maneuver.
    - body: A lizardfolk acting this turn unearths a magical size 2 pit that is 2 squares deep and filled with water. Any lizardfolk who moves into, then exits the pit on their turn gains 10 temporary [Stamina](../../rule/health/stamina.md), regrows their tail if applicable, and ends one effect on them that can be ended by a [saving throw](../../rule/general/saving-throw.md). While [adjacent](../../rule/combat/adjacent.md) to the pit, any creature who can [burrow](../../movement/burrow.md) or who has the Nature skill can make a **Might test** or a **Reason test** to drain it.
      cost: 5 Malice
      icon: "\U0001F533"
      name: Water Pit
      power_roll:
        tiers:
            high: The pit empties of water.
            low: The creature falls into the pit and is knocked [prone](../../condition/prone.md).
            mid: The creature fails to empty the pit.
    - body: Waist-high water floods the entire encounter map. Any lizardfolk submerged in water gains an edge on abilities and doubles their speed while swimming. If there are no open water pits on the encounter map, the water drains away at the end of the round.
      cost: 7 Malice
      icon: "\U0001F300"
      name: Flood the Shores
flavor: At the start of any lizardfolk's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Lizardfolk Malice
scc: mcdm.monsters.v1/monster.lizardfolk/lizardfolk-malice
type: featureblock
---

# Lizardfolk Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Malice Features</div>
<h2 class="fb__name">Lizardfolk Malice</h2>
</header>
<div class="fb__flavor">At the start of any lizardfolk&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Net Trap</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">3</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res"><a href="../../../condition/restrained/">Restrained</a> (save ends).</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res"><a href="../../../condition/restrained/">Restrained</a> (Eot).</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">No effect.</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A lizardfolk acting this turn sets up a net trap into the area. The first time an enemy steps into a square with a net trap, they make an <b>Agility test</b>. If the creature was unaware of the trap, they take a bane on the test.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Any creature not also <a href="../../../condition/restrained/">restrained</a> by a net trap who is <a href="../../../rule/combat/adjacent/">adjacent</a> to a creature <a href="../../../condition/restrained/">restrained</a> by the trap can free them as a maneuver.</p></div></div>
<div class="fb__feat-body"><b>Area, Ranged, Weapon</b> |   <b>Maneuver</b> | |--------------------------|---------------:| | <b>📏 1 cube within 3</b>   | <b>🎯 Special</b> |</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Water Pit</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">5</span> Malice</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">The creature falls into the pit and is knocked <a href="../../../condition/prone/">prone</a>.</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">The creature fails to empty the pit.</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">The pit empties of water.</span></div></div></div>
<div class="fb__feat-body">A lizardfolk acting this turn unearths a magical size 2 pit that is 2 squares deep and filled with water. Any lizardfolk who moves into, then exits the pit on their turn gains 10 temporary <a href="../../../rule/health/stamina/">Stamina</a>, regrows their tail if applicable, and ends one effect on them that can be ended by a <a href="../../../rule/general/saving-throw/">saving throw</a>. While <a href="../../../rule/combat/adjacent/">adjacent</a> to the pit, any creature who can <a href="../../../movement/burrow/">burrow</a> or who has the Nature skill can make a <b>Might test</b> or a <b>Reason test</b> to drain it.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Flood the Shores</h3><div class="fb__feat-corner"><div class="sc-ability__cost"><span class="num">7</span> Malice</div></div></div>
<div class="fb__feat-body">Waist-high water floods the entire encounter map. Any lizardfolk submerged in water gains an edge on abilities and doubles their speed while swimming. If there are no open water pits on the encounter map, the water drains away at the end of the round.</div>
</article>
</div>
</article>
</div>
