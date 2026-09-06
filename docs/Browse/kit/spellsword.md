---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 2
equipment_text: You wear light armor and wield a shield and a medium weapon.
flavor: The Spellsword kit combines melee strikes and a little bit of magic, letting you create a warrior who doesn't have to choose between the incantation and the blade.
kit_type: Magic
melee_damage_bonus: +2/+2/+2
name: Spellsword
scc: mcdm.heroes.v1/kit/spellsword
speed_bonus: "+1"
stability_bonus: "+1"
stamina_bonus: +6 per [echelon](../rule/general/echelon.md)
type: kit
---

# Spellsword

---

<section class="sc-kit sc-fil">
<header class="sc-head sc-kit__head"><div class="sc-head__stack"><span class="sc-crest sc-kit__crest"><span><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z"/></svg></span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Magic Kit</div><h2 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Spellsword</h2></div></div><div class="sc-head__rail sc-head__col--right"></div></header>
<div class="sc-kit__flavor">The Spellsword kit combines melee strikes and a little bit of magic, letting you create a warrior who doesn't have to choose between the incantation and the blade.</div>
<div class="sc-kit__band"><div class="sc-kit__band-head">Equipment</div>
<div class="sc-kit__equip">You wear light armor and wield a shield and a medium weapon.</div></div>
<div class="sc-kit__band"><div class="sc-kit__band-head">Kit Bonuses</div>
  <div class="sc-card__stats" style="grid-template-columns:repeat(4,1fr)">
    <div class="sc-card__stat"><div class="v">+6</div><div class="l">Stamina per Echelon</div></div>
    <div class="sc-card__stat"><div class="v">+1</div><div class="l">Speed</div></div>
    <div class="sc-card__stat"><div class="v">+1</div><div class="l">Stability</div></div>
    <div class="sc-card__stat"><div class="v">—</div><div class="l">Disengage</div></div>
  </div>
  <div class="sc-card__stats" style="grid-template-columns:repeat(4,1fr)">
    <div class="sc-card__stat is-dmg"><div class="v" style="font-size:.72rem">+2/+2/+2</div><div class="l">Melee Dmg</div></div>
    <div class="sc-card__stat is-dmg"><div class="v">—</div><div class="l">Ranged Dmg</div></div>
    <div class="sc-card__stat"><div class="v">—</div><div class="l">Melee Dist</div></div>
    <div class="sc-card__stat"><div class="v">—</div><div class="l">Ranged Dist</div></div>
  </div>
</div>
<div class="sc-kit__band sc-kit__band--sig"><div class="sc-kit__band-head">Signature Ability</div></div>
</section>


### Leaping Lightning {data-scc="mcdm.heroes.v1/feature.ability.spellsword/leaping-lightning"}

<address class="sc-embed" data-search-exclude="">
<article class="sc-ability sc-fil" data-action="main">
<header class="sc-head"><div class="sc-head__stack"><span class="sc-crest sc-ability__crest"><span class="sc-ability__glyph">l</span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Ability</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Leaping Lightning</h3><div class="sc-head__slot sc-head__left-deck sc-head__slot--line">Spellsword</div></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Signature</div><div class="sc-head__slot sc-head__right-deck sc-head__slot--chip">Main Action</div></div></header>
<p class="sc-ability__flavor">Lightning jumps from your weapon as you strike to harm a nearby foe.</p>
<div class="sc-ability__kw"><span class="sc-ability__chip">Magic</span><span class="sc-ability__chip"><a href="../../rule/combat/melee/">Melee</a></span><span class="sc-ability__chip"><a href="../../rule/combat/strike/">Strike</a></span><span class="sc-ability__chip">Weapon</span></div>
<div class="sc-ability__rail">
<div class="sc-ability__cell"><div class="l">Distance</div><div class="v"><a href="../../rule/combat/melee/">Melee</a> 1</div></div>
<div class="sc-ability__cell"><div class="l">Targets</div><div class="v">One creature or object</div></div>
</div>
<div class="sc-ability__pr">
<div class="sc-ability__pr-head"><span class="sc-ability__dia"></span><span class="pre">Power Roll +</span><span class="chars"><a href="../../rule/character/might/">Might</a>, <a href="../../rule/character/reason/">Reason</a>, <a href="../../rule/character/intuition/">Intuition</a>, or <a href="../../rule/character/presence/">Presence</a></span></div>
<div class="sc-ability__pr-rows">
<div class="sc-ability__tier" data-tier="low"><span class="badge">!</span><span class="res">5 + M, R, I, or P lightning damage</span></div>
<div class="sc-ability__tier" data-tier="mid"><span class="badge">@</span><span class="res">8 + M, R, I, or P lightning damage</span></div>
<div class="sc-ability__tier" data-tier="high"><span class="badge">#</span><span class="res">11 + M, R, I, or P lightning damage</span></div>
</div>
</div>
<div class="sc-ability__section">
<div class="sc-ability__section-head"><span class="sc-ability__dia"></span><span class="tag">Effect</span></div>
<div class="sc-ability__section-body"><p>A creature or object of your choice within 2 squares of the target takes lightning damage equal to the <a href="../../rule/character/characteristic/">characteristic</a> score used for this ability&#39;s <a href="../../rule/dice/power-roll/">power roll</a>.</p></div>
</div>
</article>
</address>
