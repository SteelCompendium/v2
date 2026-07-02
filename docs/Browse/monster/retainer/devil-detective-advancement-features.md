---
printing: "1.0"
printing_book: "The Summoner"
search:
  boost: 0.6
features:
    - cost: Encounter
      distance: 4 cube within 5
      icon: "\U0001F3F9"
      keywords:
        - Area
        - Magic
      level: 4
      name: Soul Sleuth
      power_roll:
        formula: 2d10 + highest characteristic
        tiers:
            high: 5 damage; A < STRONG [bleeding](../../condition/bleeding.md) (save ends)
            low: 2 damage; A < WEAK [bleeding](../../condition/bleeding.md) (save ends)
            mid: 4 damage; A < AVERAGE [bleeding](../../condition/bleeding.md) (save ends)
      sections:
        - label: Special
          text: The detective can instantly kill one or more of their minions to give themself a double [edge](../../rule/dice/edge.md) on the [power roll](../../rule/dice/power-roll.md).
        - label: Effect
          text: Any enemy that was hiding in the area is revealed. The area is now [difficult terrain](../../movement/difficult-terrain.md) for enemies.
      target: Each enemy or object in the area
      usage: Main action
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      level: 4
      name: Summon Violents
      sections:
        - label: Effect
          text: The detective summons 3 violents into unoccupied spaces within distance. On each of the detective's turns, they direct the squad of **violents** to move and use a main action.
      target: Special
      usage: Main action
    - cost: Encounter
      distance: 5 burst
      icon: "\U0001F300"
      keywords:
        - Area
        - Magic
      level: 7
      name: Cleansing Flense
      sections:
        - label: Effect
          text: Each target moves up to their [speed](../../rule/character/speed.md) toward an ally. Each ally within [line of effect](../../rule/combat/line-of-effect.md) of the detective can give one [EoT](../../rule/combat/end-of-turn.md) or save ends effect they're affected by to an [adjacent](../../rule/combat/adjacent.md) minion and end that effect on themself.
      target: Each of the detective's minions in the area
      trailing: Until the end of the encounter, whenever an enemy kills a target and has P < STRONG, they receive all EoT or save ends effects the target was affected by.
      usage: Maneuver
    - cost: Encounter
      distance: Ranged 5
      icon: "\U0001F3F9"
      keywords:
        - Area
        - Magic
      level: 10
      name: Blightwash
      power_roll:
        formula: 2d10 + highest characteristic
        tiers:
            high: 10 corruption damage; M < STRONG [weakened](../../condition/weakened.md) (save ends)
            low: 5 corruption damage; M < WEAK [weakened](../../condition/weakened.md) (save ends)
            mid: 8 corruption damage; M < AVERAGE [weakened](../../condition/weakened.md) (save ends)
      sections:
        - label: Effect
          text: The minion explodes. Make a power roll, targeting each enemy within 2 squares of the target.
      target: One of the detective's minions
      trailing: The area within 2 squares of the exploded minion is covered in blight until the end of the encounter. Abilities used against an enemy in the area have an [edge](../../rule/dice/edge.md).
      usage: Main action
    - cost: Encounter
      distance: Ranged 10
      icon: "\U0001F3F9"
      keywords:
        - Magic
        - Ranged
      level: 10
      name: Summon Gorrres
      sections:
        - label: Effect
          text: The detective summons two gorrres into unoccupied spaces within distance. On each of the detective's turns, they direct the squad of **gorrres** to move and use a main action.
      target: Special
      usage: Main action
name: Devil Detective Advancement Features
scc: mcdm.summoner.v1/monster.retainer.advancement-features/devil-detective
type: featureblock
---

# Devil Detective Advancement Features

---

<div class="fb-wrap" data-role="feature">
<article class="fb md-typeset">
<header class="sc-head fb__head"><div class="sc-head__stack"><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Featureblock</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Devil Detective Advancement Features</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Soul Sleuth</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">4 cube within 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy or object in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">2d10 + highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">2 damage; A &lt; WEAK <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">4 damage; A &lt; AVERAGE <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">5 damage; A &lt; STRONG <a href="../../../condition/bleeding/">bleeding</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Special</span></div><div class="sc-ability__section-body"><p>The detective can instantly kill one or more of their minions to give themself a double <a href="../../../rule/dice/edge/">edge</a> on the <a href="../../../rule/dice/power-roll/">power roll</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Any enemy that was hiding in the area is revealed. The area is now <a href="../../../movement/difficult-terrain/">difficult terrain</a> for enemies.</p></div></div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Summon Violents</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The detective summons 3 violents into unoccupied spaces within distance. On each of the detective&#39;s turns, they direct the squad of <b>violents</b> to move and use a main action.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🌀</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Cleansing Flense</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Maneuver</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each of the detective&#39;s minions in the area</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target moves up to their <a href="../../../rule/character/speed/">speed</a> toward an ally. Each ally within <a href="../../../rule/combat/line-of-effect/">line of effect</a> of the detective can give one <a href="../../../rule/combat/end-of-turn/">EoT</a> or save ends effect they&#39;re affected by to an <a href="../../../rule/combat/adjacent/">adjacent</a> minion and end that effect on themself.</p></div></div>
<div class="fb__feat-trailing">Until the end of the encounter, whenever an enemy kills a target and has P &lt; STRONG, they receive all EoT or save ends effects the target was affected by.</div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Blightwash</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One of the detective&#39;s minions</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">2d10 + highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 corruption damage; M &lt; WEAK <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 corruption damage; M &lt; AVERAGE <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 corruption damage; M &lt; STRONG <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The minion explodes. Make a power roll, targeting each enemy within 2 squares of the target.</p></div></div>
<div class="fb__feat-trailing">The area within 2 squares of the exploded minion is covered in blight until the end of the encounter. Abilities used against an enemy in the area have an <a href="../../../rule/dice/edge/">edge</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><header class="sc-head"><div class="sc-head__stack"><span class="fb__feat-icon">🏹</span><div class="sc-head__col sc-head__col--left"><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Summon Gorrres</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Encounter</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main action</div></div></header></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The detective summons two gorrres into unoccupied spaces within distance. On each of the detective&#39;s turns, they direct the squad of <b>gorrres</b> to move and use a main action.</p></div></div>
</article>
</div>
</div>
</article>
</div>


<template class="sc-src" data-fmt="md" data-src="&gt; **Level 4 Retainer Advancement Ability**&#10;&#10;&gt; 🏹 **Soul Sleuth 2d10 + highest characteristic (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic** | **Main action** |&#10;&gt; |-----------------|----------------:|&#10;&gt; | **📏 4 cube within 5** | **🎯 Each enemy or object in the area** |&#10;&gt;&#10;&gt; **Special:** The detective can instantly kill one or more of their minions to give themself a double &#91;edge](../../rule/dice/edge.md) on the &#91;power roll](../../rule/dice/power-roll.md).&#10;&gt;&#10;&gt; 2 damage; A &lt; WEAK &#91;bleeding](../../condition/bleeding.md) (save ends)&#10;&gt;&#10;&gt; 4 damage; A &lt; AVERAGE &#91;bleeding](../../condition/bleeding.md) (save ends)&#10;&gt;&#10;&gt; 5 damage; A &lt; STRONG &#91;bleeding](../../condition/bleeding.md) (save ends)&#10;&gt;&#10;&gt; **Effect:** Any enemy that was hiding in the area is revealed. The area is now &#91;difficult terrain](../../movement/difficult-terrain.md) for enemies.&#10;&#10;&gt; 🏹 **Summon Violents (Encounter)**&#10;&gt;&#10;&gt; | **Magic, Ranged** | **Main action** |&#10;&gt; |-------------------|----------------:|&#10;&gt; | **📏 Ranged 10** | **🎯 Special** |&#10;&gt;&#10;&gt; **Effect:** The detective summons 3 violents into unoccupied spaces within distance. On each of the detective&#39;s turns, they direct the squad of **violents** to move and use a main action.&#10;&#10;&gt; **Level 7 Retainer Advancement Ability**&#10;&#10;&gt; 🌀 **Cleansing Flense (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic** | **Maneuver** |&#10;&gt; |-----------------|-------------:|&#10;&gt; | **📏 5 burst** | **🎯 Each of the detective&#39;s minions in the area** |&#10;&gt;&#10;&gt; **Effect:** Each target moves up to their &#91;speed](../../rule/character/speed.md) toward an ally. Each ally within &#91;line of effect](../../rule/combat/line-of-effect.md) of the detective can give one &#91;EoT](../../rule/combat/end-of-turn.md) or save ends effect they&#39;re affected by to an &#91;adjacent](../../rule/combat/adjacent.md) minion and end that effect on themself.&#10;&gt;&#10;&gt; Until the end of the encounter, whenever an enemy kills a target and has P &lt; STRONG, they receive all EoT or save ends effects the target was affected by.&#10;&#10;&gt; **Level 10 Retainer Advancement Ability**&#10;&#10;&gt; 🏹 **Blightwash 2d10 + highest characteristic (Encounter)**&#10;&gt;&#10;&gt; | **Area, Magic** | **Main action** |&#10;&gt; |-----------------|----------------:|&#10;&gt; | **📏 Ranged 5** | **🎯 One of the detective&#39;s minions** |&#10;&gt;&#10;&gt; **Effect:** The minion explodes. Make a power roll, targeting each enemy within 2 squares of the target.&#10;&gt;&#10;&gt; 5 corruption damage; M &lt; WEAK &#91;weakened](../../condition/weakened.md) (save ends)&#10;&gt;&#10;&gt; 8 corruption damage; M &lt; AVERAGE &#91;weakened](../../condition/weakened.md) (save ends)&#10;&gt;&#10;&gt; 10 corruption damage; M &lt; STRONG &#91;weakened](../../condition/weakened.md) (save ends)&#10;&gt;&#10;&gt; The area within 2 squares of the exploded minion is covered in blight until the end of the encounter. Abilities used against an enemy in the area have an &#91;edge](../../rule/dice/edge.md).&#10;&#10;&gt; 🏹 **Summon Gorrres (Encounter)**&#10;&gt;&#10;&gt; | **Magic, Ranged** | **Main action** |&#10;&gt; |-------------------|----------------:|&#10;&gt; | **📏 Ranged 10** | **🎯 Special** |&#10;&gt;&#10;&gt; **Effect:** The detective summons two gorrres into unoccupied spaces within distance. On each of the detective&#39;s turns, they direct the squad of **gorrres** to move and use a main action."></template>
