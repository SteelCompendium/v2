---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 6
intuition: 1
keywords:
    - Accursed
    - Humanoid
    - Minotaur
level: 3
might: 2
name: Minotaur Gorer
organization: Retainer
presence: 0
reason: 0
role: Brute
scc: mcdm.monsters.v1/retainer.statblock/minotaur-gorer
size: "2"
speed: 6
stability: 2
stamina: "39"
type: statblock
---

# Minotaur Gorer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"minotaur-gorer","name":"Minotaur Gorer","ancestry":"Accursed, Humanoid, Minotaur","level":"3","role":"Retainer Brute","roleKey":"brute","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"39"},{"l":"Stability","v":"2"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+2"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Gore","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"12 damage; M \u003c STRONG [prone](../../condition/prone/)","low":"5 damage","mid":"9 damage"}}},{"kind":"ability","action":"triggered","name":"Retaliatory Strike","usage":"Triggered action","keywords":["Ranged"],"distance":"Ranged 6","target":"The triggering creature","sections":[{"label":"Trigger","text":"A creature within distance deals damage to the gorer."},{"label":"Effect","text":"The gorer uses the [Charge](../../feature/common/main-actions/charge/) main action and Gore against the target."}]},{"kind":"passive","action":"passive","name":"Minotaur Sense","body":"The gorer can't obtain less than a tier 2 outcome when making tests to navigate, search, or seek."}]}
</script></div>

<div class="fb-wrap" data-role="brute">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Brute Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Horn Toss</h3><div class="fb__feat-corner"></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">The triggering creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The gorer damages a creature within distance using Gore.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target is pushed up to 3 squares. If the target has <a href="../../rule/character/stability/">stability</a> 0, they are also knocked <a href="../../condition/prone/">prone</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="maneuver">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Triumphant Bay</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The gorer gains 3 <a href="../../rule/resource/surge/">surges</a>, and until the start of the gorer&#39;s next turn, <a href="../../rule/combat/strike/">strikes</a> made against them and their mentor take a bane.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Horn Rake</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">1 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 damage; M &lt; WEAK <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 damage; M &lt; AVERAGE <a href="../../condition/bleeding/">bleeding</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 damage; M &lt; STRONG <a href="../../condition/prone/">prone</a> and can&#39;t stand (<a href="../../rule/general/saving-throw/">save</a> ends).</span></div></div></div>
</article>
</div>
</div>
</article>
</div>
