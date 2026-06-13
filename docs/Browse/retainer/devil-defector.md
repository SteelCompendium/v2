---
printing: "1.01"
printing_book: "Draw Steel: Monsters"
agility: 2
ev: '-'
free_strike: 5
immunities:
    - Fire 5
intuition: 1
keywords:
    - Devil
    - Infernal
level: 5
might: 3
movement: Fly
name: Devil Defector
organization: Retainer
presence: 2
reason: 3
role: Hexer
scc: mcdm.monsters.v1/retainer.statblock/devil-defector
size: 1M
speed: 6
stability: 0
stamina: "57"
type: statblock
---

# Devil Defector

---

<div class="sc-statblock-mount"><script type="application/json" class="sc-statblock-data">
{"id":"devil-defector","name":"Devil Defector","ancestry":"Devil, Infernal","level":"5","role":"Retainer Hexer","roleKey":"hexer","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"6"},{"l":"Stamina","v":"57"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"5"}],"meta":{"immunity":"Fire 5","weakness":"—","movement":"Fly","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"+3"},{"l":"Agility","k":"A","v":"+2"},{"l":"Reason","k":"R","v":"+3"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"+2"}],"features":[{"kind":"ability","action":"main","name":"Black Flame","cost":"Signature","usage":"Main action","keywords":["Magic","Ranged","Strike"],"distance":"Ranged 10","target":"One creature or object","powerRoll":{"formula":"+ highest characteristic","tiers":{"high":"13 corruption or fire damage","low":"6 corruption or fire damage","mid":"10 corruption or fire damage"}}},{"kind":"ability","action":"triggered","name":"Tempting Offer","cost":"Encounter","usage":"Free triggered action","keywords":["Ranged","Strike"],"distance":"Ranged 10","target":"The triggering creature","sections":[{"label":"Trigger","text":"A sapient enemy is reduced to 0 [Stamina](../../rule/health/stamina/)."},{"label":"Effect","text":"The defector makes an offer to keep the target alive. If the target accepts, they are reduced to 1 [Stamina](../../rule/health/stamina/) instead. On the target's next turn, the defector controls their move action and the target must use a [signature ability](../../rule/combat/signature-ability/) against a creature of the defector's choice or immediately die. To have the target turn down the offer, the Diretor must spend 3 [Malice](../../rule/monster/malice/)."}]},{"kind":"passive","action":"passive","name":"True Name","body":"If a creature within 10 squares speaks the defector's true name, the defector loses their damage immunities and their Tempting Offer triggered action until the end of the encounter."}]}
</script></div>

<div class="fb-wrap" data-role="hexer">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Hexer Retainer</div>
<h2 class="fb__name">Advancement Abilities</h2>
</header>
<div class="fb__feats">
<div class="fb__band--adv" data-level="7">
<div class="fb__adv-head">Level 7 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Flames of Revenge</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">3 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Each enemy in the area</div></div></div>
<div class="sc-ability__pr"><div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll</span><span class="chars">+ highest characteristic</span></div><div class="sc-ability__pr-rows"><div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">6 corruption damage</span></div><div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">10 corruption damage</span></div><div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">14 corruption damage</span></div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>If the defector&#39;s mentor is in the area, the mentor burns with flame until the end of the defector&#39;s next turn. While this fire burns the mentor has fire immunity 10, and any creature who targets the mentor with a strike takes 10 fire damage.</p></div></div>
</article>
</div>
<div class="fb__band--adv" data-level="10">
<div class="fb__adv-head">Level 10 Advancement</div>
<article class="sc-ability fb__feat" data-action="main">
<div class="fb__feat-head"><span class="fb__feat-icon">🔳</span><h3 class="fb__feat-name sc-ability__name">Hell On Earth</h3><div class="fb__feat-corner"><div class="sc-ability__cost">Encounter</div></div></div>
<div class="sc-ability__kw"><span class="sc-ability__chip">Area</span><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip">Ranged</span></div>
<div class="sc-ability__rail"><div class="sc-ability__cell"><div class="l">Distance</div><div class="v">5 cube within 10</div></div><div class="sc-ability__cell"><div class="l">Targets</div><div class="v">Special</div></div></div>
<div class="sc-ability__section"><div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div><div class="sc-ability__section-body"><p>The area burns with infernal fire until the end of the devil&#39;s next turn. Any enemy of the defector who ends their turn in the area takes 10 fire damage, and if they have P &lt; AVERAGE they are <a href="../../condition/frightened/">frightened</a> (<a href="../../rule/general/saving-throw/">save</a> ends).</p></div></div>
</article>
</div>
</div>
</article>
</div>
