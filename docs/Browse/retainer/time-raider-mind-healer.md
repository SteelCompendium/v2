---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
free_strike: 4
immunities:
    - Psychic 5
intuition: 2
keywords:
    - Humanoid
    - Time Raider
level: 3
might: 0
name: Time Raider Mind Healer
organization: Retainer
presence: 0
reason: 2
role: Support
scc: mcdm.monsters.v1/retainer.statblock/time-raider-mind-healer
size: 1M
speed: 5
stability: 0
stamina: "39"
type: statblock
---

# Time Raider Mind Healer

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"time-raider-mind-healer","name":"Time Raider Mind Healer","ancestry":"Humanoid, Time Raider","level":"3","role":"Retainer Support","roleKey":"support","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"39"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"4"}],"meta":{"immunity":"Psychic 5","weakness":"—","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+0"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+2"},{"l":"Intuition","k":"I","v":"+2"},{"l":"Presence","k":"P","v":"+0"}],"features":[{"kind":"ability","action":"main","name":"Laser Lancet","cost":"Signature","usage":"Main action","keywords":["Ranged","Strike","Weapon"],"distance":"Ranged 3","target":"One creature or object","powerRoll":{"formula":"","tiers":{"high":"11 fire damage","low":"5 fire damage","mid":"8 fire damage"}},"sections":[{"label":"Effect","text":"If the mind healer targets an ally, the ability deals no damage. Additionally, the target can end one effect on them that can be ended by a [saving throw](../../rule/general/saving-throw/) or that ends at the end of their turn."}],"trailing":"**2d10 + highest characteristic:**"},{"kind":"passive","action":"passive","name":"Foresight","body":"The mind healer doesn't take a bane on strikes against creatures with concealment."}]}
</script></div>

<div class="fb-wrap" data-role="support">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Support Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="4">
<div class="fb__adv-head">Level 4 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Stim Charge</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The target can spend 1 <a href="../../rule/health/recoveries/">Recovery</a>, and has their speed doubled until the end of their next turn.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🏹</span><h3 class="fb__feat-name sc-ability__name">Mind Whelm</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Psionic</span><span class="sc-ability__chip">Ranged</span><span class="sc-ability__chip">Strike</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Ranged 3</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">8 psychic damage; R &lt; WEAK <a href="../../condition/frightened/">frightened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">13 psychic damage; R &lt; AVERAGE <a href="../../condition/frightened/">frightened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">17 psychic damage; R &lt; STRONG <a href="../../condition/frightened/">frightened</a> (<a href="../../rule/general/saving-throw/">save</a> ends)</span></div></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">❇️</span><h3 class="fb__feat-name sc-ability__name">Psychic Short Circuit</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Psionic</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">2 burst</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">11 psychic damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">16 psychic damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">21 psychic damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the mind healer is <a href="../../condition/dazed/">dazed</a>, <a href="../../condition/frightened/">frightened</a>, or <a href="../../condition/taunted/">taunted</a>, they can end one of those conditions and impose the same condition on one enemy in the area. Additionally, they can do the same for their mentor if the mentor is in the area and is <a href="../../condition/dazed/">dazed</a>, <a href="../../condition/frightened/">frightened</a>, or <a href="../../condition/taunted/">taunted</a>.</p></div></div>
</article>
</div>
</div>
</article>
</div>
