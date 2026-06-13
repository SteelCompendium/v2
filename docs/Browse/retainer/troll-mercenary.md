---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 1
ev: '-'
free_strike: 6
intuition: 0
keywords:
    - Giant
    - Troll
level: 5
might: 3
name: Troll Mercenary
organization: Retainer
presence: 1
reason: -1
role: Brute
scc: mcdm.monsters.v1/retainer.statblock/troll-mercenary
size: "2"
speed: 6
stability: 4
stamina: "57"
type: statblock
weaknesses:
    - Acid 5
    - fire
---

# Troll Mercenary

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"troll-mercenary","name":"Troll Mercenary","ancestry":"Giant, Troll","level":"5","role":"Retainer Brute","roleKey":"brute","ev":"-","defenses":[{"l":"Size","v":"2"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"57"},{"l":"Stability","v":"4"},{"l":"Free Strike","v":"6"}],"meta":{"immunity":"—","weakness":"Acid 5, fire","movement":"—","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"-1"},{"l":"Intuition","k":"I","v":"+0"},{"l":"Presence","k":"P","v":"+1"}],"features":[{"kind":"ability","action":"main","name":"Big Bite","cost":"Signature","usage":"Main action","keywords":["Charge","Melee","Strike","Weapon"],"distance":"Melee 1","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"14 damage","low":"6 damage","mid":"11 damage"}},"sections":[{"label":"Effect","text":"The mercenary regains [Stamina](../../rule/health/stamina/) equal to half the damage dealt."}]},{"kind":"ability","action":"maneuver","name":"Troll Roar","cost":"Encounter","usage":"Maneuver","keywords":["Area"],"distance":"3 burst","target":"Each enemy in the area","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"P \u003c STRONG [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends), push 3, [prone](../../condition/prone/)","low":"P \u003c WEAK [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends)","mid":"P \u003c AVERAGE [frightened](../../condition/frightened/) ([save](../../rule/general/saving-throw/) ends)"}}},{"kind":"passive","action":"passive","name":"Relentless Hunger","body":"The mercenary dies only if they are reduced to 0 [Stamina](../../rule/health/stamina/) by acid or fire damage, if they end their turn with 0 [Stamina](../../rule/health/stamina/), or if they take acid or fire damage while at 0 [Stamina](../../rule/health/stamina/)."}]}
</script></div>

<div class="fb-wrap" data-role="brute">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Brute Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🗡</span><h3 class="fb__feat-name sc-ability__name">Hangry Frenzy</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Melee</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Melee 1</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Three creatures</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mercenary must be <a href="../../rule/health/winded/">winded</a> to use this ability. The mercenary uses Big Bite against each target.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="triggered">
<div class="fb__feat-head"><span class="fb__feat-icon">❗️</span><h3 class="fb__feat-name sc-ability__name">Fire Bad</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">-</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">Self</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Self</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Trigger</span></div><div class="sc-ability__section-body"><p>An ability deals acid or fire damage to the mercenary.</p></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The mercenary moves up to their speed. If this movement takes them beyond the distance of the triggering ability, the ability has no effect on them.</p></div></div>
</article>
</div>
</div>
</article>
</div>
