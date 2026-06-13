---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 0
ev: '-'
free_strike: 5
immunities:
    - Fire 4
intuition: 1
keywords:
    - Goblin
    - Hobgoblin
    - Humanoid
    - Infernal
level: 4
might: 1
name: Hobgoblin Flameslinger
organization: Retainer
presence: 3
reason: 2
role: Controller
scc: mcdm.monsters.v1/retainer.statblock/hobgoblin-flameslinger
size: 1M
speed: 5
stability: 0
stamina: "48"
type: statblock
---

# Hobgoblin Flameslinger

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"hobgoblin-flameslinger","name":"Hobgoblin Flameslinger","ancestry":"Goblin, Hobgoblin, Humanoid, Infernal","level":"4","role":"Retainer Controller","roleKey":"controller","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"48"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 4","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+0"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+3"}],"features":[{"kind":"ability","action":"main","name":"Fire Curse","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 fire damage; A \u003c STRONG the target is burning (save ends)","low":"5 fire damage","mid":"9 fire damage"}},"sections":[{"label":"Effect","text":"A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round."}]},{"kind":"ability","action":"main","name":"Fuel for the Fire","usage":"Main action","keywords":["Magic","Ranged"],"distance":"Ranged 10","target":"One creature","sections":[{"label":"Effect","text":"Until the end of the flameslinger's next turn, the target has fire weakness equal to the flameslinger's level. If the target is the flameslinger's mentor, they instead have fire immunity equal to the flameslinger's level."}]},{"kind":"passive","action":"passive","name":"Infernal Ichor","body":"When the flameslinger is reduced to 0 [Stamina](../../rule/health/stamina/), they spray buring blood. Each creature [adjacent](../../rule/combat/adjacent/) to the flameslinger takes 3 fire damage."}]}
</script></div>

<div class="fb-wrap" data-role="controller">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Controller Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Unholy Attraction</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; pull 1</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; pull 2</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage, pull 4</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>A target who is pulled <a href="../../rule/combat/adjacent/">adjacent</a> to the flameslinger and who has P &lt; AVERAGE is knocked <a href="../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Fire Spiral</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 damage; <a href="../../movement/forced-movement/">push</a> 2</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">12 damage; <a href="../../movement/forced-movement/">push</a> 3</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage; <a href="../../movement/forced-movement/">push</a> 5</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the flameslinger&#39;s mentor is within 10 squares of the flameslinger, the mentor can be the source of the burst instead of the flameslinger.</p></div></div>
</article>
</div>
</div>
</article>
</div>
