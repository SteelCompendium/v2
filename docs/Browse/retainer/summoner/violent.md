---
printing: "1.0"
printing_book: "The Summoner"
agility: 3
free_strike: 4
immunities:
    - —
keywords:
    - —
might: 2
movement: Climb
name: Violent
organization: Minion
reason: 0
role: Ambusher
scc: mcdm.summoner.v1/retainer.summoner.statblock/violent
size: 1M
speed: 7
stability: 1
type: statblock
weaknesses:
    - Holy 1
---

# Violent

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"violent","name":"Violent","ancestry":"—","level":"","role":"Minion Ambusher","roleKey":"ambusher","ev":"","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"—"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"—","weakness":"Holy 1","movement":"Climb","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+3"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"—"},{"l":"Presence","k":"P","v":"—"}],"features":[{"kind":"passive","action":"passive","name":"Transforming Strike","body":"The violent's melee [free strikes](../../../feature/common/main-actions/free-strike/) deal an additional 2 damage to each [adjacent](../../../rule/combat/adjacent/) enemy from whom they were hidden. The violent loses their disguise after striking."},{"kind":"passive","action":"passive","name":"Mimicry","body":"The violent uses the [Hide](../../../feature/common/maneuvers/hide/) maneuver at the start of their turn as a [free maneuver](../../../rule/combat/free-maneuver/), disguising themselves as a a [size](../../../rule/character/size/) 1M or smaller object."},{"kind":"passive","action":"passive","name":"Soulsight","body":"Each creature [adjacent](../../../rule/combat/adjacent/) to the violent can't be hidden from them."}]}
</script></div>

<div class="fb-wrap" data-role="ambusher">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Ambusher Minion</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">🌀</span><h3 class="fb__feat-name sc-ability__name">Cleansing Flense</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each of the detective&#39;s minions in the area</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>Each target moves up to their <a href="../../../rule/character/speed/">speed</a> toward an ally. Each ally within <a href="../../../rule/combat/line-of-effect/">line of effect</a> of the detective can give one <a href="../../../rule/combat/end-of-turn/">EoT</a> or save ends effect they&#39;re affected by to an <a href="../../../rule/combat/adjacent/">adjacent</a> minion and end that effect on themself.</p></div></div>
<div class="fb__feat-trailing">Until the end of the encounter, whenever an enemy kills a target and has P &lt; STRONG, they receive all EoT or save ends effects the target was affected by.</div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Blightwash</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 5</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One of the detective&#39;s minions</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">2d10 + highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 corruption damage; M &lt; WEAK <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 corruption damage; M &lt; AVERAGE <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">10 corruption damage; M &lt; STRONG <a href="../../../condition/weakened/">weakened</a> (save ends)</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The minion explodes. Make a power roll, targeting each enemy within 2 squares of the target.</p></div></div>
<div class="fb__feat-trailing">The area within 2 squares of the exploded minion is covered in blight until the end of the encounter. Abilities used against an enemy in the area have an <a href="../../../rule/dice/edge/">edge</a>.</div>
</article>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Summon Gorrres</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The detective summons two gorrres into unoccupied spaces within distance. On each of the detective&#39;s turns, they direct the squad of <b>gorrres</b> to move and use a main action.</p></div></div>
</article>
</div>
</div>
</article>
</div>
