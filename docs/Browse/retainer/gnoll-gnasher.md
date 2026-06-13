---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: "60"
free_strike: 3
intuition: 0
keywords:
    - Abyssal
    - Gnoll
level: 2
might: 1
name: Gnoll Gnasher
organization: Retainer
presence: 1
reason: 0
role: Harrier
scc: mcdm.monsters.v1/retainer.statblock/gnoll-gnasher
size: 1M
speed: 7
stability: 1
stamina: "30"
type: statblock
---

# Gnoll Gnasher

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"gnoll-gnasher","name":"Gnoll Gnasher","ancestry":"Abyssal, Gnoll","level":"2","role":"Retainer Harrier","roleKey":"harrier","ev":"60","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"7"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"1"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+1"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+0"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Gnash","cost":"Signature","usage":"Main action","keywords":["Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"10 damage; M \u003c STRONG [bleeding](../../condition/bleeding/) ([save](../../rule/general/saving-throw/) ends)","low":"4 damage","mid":"7 damage"}}},{"kind":"passive","action":"passive","name":"Death Frenzy","body":"Whenever a non-[minion](../../rule/organization/minion/) ally within 7 squares of the gnasher is reduced to 0 [Stamina](../../rule/health/stamina/), the gnasher moves up to their speed and can make a melee [free strike](../../feature/common/main-actions/free-strike/)."}]}
</script></div>

<div class="fb-wrap" data-role="harrier">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Harrier Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Frenzied Bite</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>An enemy within 5 squares is reduced to 0 <a href="../../rule/health/stamina/">Stamina</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The gnasher moves up to their speed and can use their <a href="../../rule/combat/signature-ability/">signature ability</a>.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Flurry of Fangs</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span><span class="sc-ability__chip">Strike</span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three creatures or objects</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">7 damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">11 damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">16 damage</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">👤</span><h3 class="fb__feat-name sc-ability__name">Horrific Feas</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>The gnasher reduces a creature to 0 <a href="../../rule/health/stamina/">Stamina</a>.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The gnasher consumes part of the target&#39;s body. The gnasher can spend a <a href="../../rule/health/recoveries/">Recovery</a>, and each enemy within 5 squares of the gnasher who has I &lt; AVERAGE is <a href="../../condition/frightened/">frightened</a> (<a href="../../rule/general/saving-throw/">save</a> ends).</p></div></div>
</article>
</div>
</div>
</article>
</div>
