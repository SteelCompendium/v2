---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
search:
  boost: 0.6
features:
    - body: The bugbear activates a Malice Feature available to goblins.
      cost: 3-7 Malice
      icon: ⭐️
      name: Goblin Malice Features
    - body: For every 3 [Malice](../../rule/monster/malice.md) spent, one non-[minion](../../rule/organization/minion.md) bugbear acting this turn grabs an iron ball and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to 8 - the number of squares the iron ball was thrown, and if they have M < 1, they are [slowed](../../condition/slowed.md) (save ends).
      cost: 3+ Malice
      icon: "\U0001F464"
      name: Grab Iron Ball
    - body: For every 5 [Malice](../../rule/monster/malice.md) spent, one non-[minion](../../rule/organization/minion.md) bugbear acting this turn grabs a javelin and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to 12 - the number of squares the javelin was thrown, and if they have M < 1, they are [bleeding](../../condition/bleeding.md) (save ends). While a creature is [bleeding](../../condition/bleeding.md) this way, any ally of the bugbear within 2 squares of them can use a free maneuver to [pull](../../movement/forced-movement.md) the [bleeding](../../condition/bleeding.md) creature up to 2 squares.
      cost: 5+ Malice
      icon: "\U0001F464"
      name: Grab Javelin
    - body: A bugbear infuses the encounter map with bu'gathic magic. Until the end of the encounter, all bugbears and allies have their speed doubled and can automatically climb at full speed while moving. Additionally, if the target of any bugbear or ally's strike has I < 1, the target is also [frightened](../../condition/frightened.md) (save ends) and must move their speed in a straight line away from the creature who made the strike.
      cost: 10 Malice
      icon: "\U0001F300"
      name: Show Them the Great Fear
flavor: At the start of any bugbear's turn, you can spend Malice to activate one of the following features.
kind: malice
name: Bugbear Malice
scc: mcdm.monsters.v1/monster.bugbear/bugbear-malice
type: featureblock
---

# Bugbear Malice

---

<div class="fb-wrap" data-role="malice" data-kind="malice">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Malice</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Bugbear Malice</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__flavor">At the start of any bugbear&#39;s turn, you can spend Malice to activate one of the following features.</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">⭐️</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Goblin Malice Features</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3-7 Malice</div></div></header></div>
<div class="fb__feat-body">The bugbear activates a Malice Feature available to goblins.</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Grab Iron Ball</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">3+ Malice</div></div></header></div>
<div class="fb__feat-body">For every 3 <a href="../../../rule/monster/malice/">Malice</a> spent, one non-<a href="../../../rule/organization/minion/">minion</a> bugbear acting this turn grabs an iron ball and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to 8 - the number of squares the iron ball was thrown, and if they have M &lt; 1, they are <a href="../../../condition/slowed/">slowed</a> (save ends).</div>
</article>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">👤</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Grab Javelin</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">5+ Malice</div></div></header></div>
<div class="fb__feat-body">For every 5 <a href="../../../rule/monster/malice/">Malice</a> spent, one non-<a href="../../../rule/organization/minion/">minion</a> bugbear acting this turn grabs a javelin and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to 12 - the number of squares the javelin was thrown, and if they have M &lt; 1, they are <a href="../../../condition/bleeding/">bleeding</a> (save ends). While a creature is <a href="../../../condition/bleeding/">bleeding</a> this way, any ally of the bugbear within 2 squares of them can use a free maneuver to <a href="../../../movement/forced-movement/">pull</a> the <a href="../../../condition/bleeding/">bleeding</a> creature up to 2 squares.</div>
</article>
<article class="sc-ability fb__feat" data-action="special">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Show Them the Great Fear</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">10 Malice</div></div></header></div>
<div class="fb__feat-body">A bugbear infuses the encounter map with bu&#39;gathic magic. Until the end of the encounter, all bugbears and allies have their speed doubled and can automatically climb at full speed while moving. Additionally, if the target of any bugbear or ally&#39;s strike has I &lt; 1, the target is also <a href="../../../condition/frightened/">frightened</a> (save ends) and must move their speed in a straight line away from the creature who made the strike.</div>
</article>
</div>
</article>
</div>
