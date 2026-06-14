---
printing: "1.0"
printing_book: "The Summoner"
features:
    - body: Each enemy that starts their [turn](scc:mcdm.heroes.v1/rule.combat/turn) within 3 squares of the gates is I < AVERAGE [frightened](scc:mcdm.heroes.v1/condition/frightened) (EoT) by the gates. The [potency](scc:mcdm.heroes.v1/rule.character/potency) increases by 1 for [winded](scc:mcdm.heroes.v1/rule.health/winded) enemies.
      icon: ⭐️
      name: The Bell Tolls
    - body: Each of your undead [minions](scc:mcdm.summoner.v1/feature.summoner.level-1/minions) has [damage immunity](scc:mcdm.heroes.v1/rule.damage/damage-immunity) 2 while occupying a space within 3 squares of the gates.
      icon: ⭐️
      name: Undead Dominion
name: Barrow Gates
role: Defender
scc: mcdm.summoner.v1/monster.fixture.undead.featureblock/barrow-gates
stats:
    - name: Stamina
      value: 20 + your level
    - name: Size
      value: "2"
terrain_type: Fortification
type: featureblock
---

# Barrow Gates

---

<div class="fb-wrap" data-role="defender">
<article class="fb md-typeset">
<header class="fb__head">
<div class="fb__eyebrow">Fortification · Defender</div>
<h2 class="fb__name">Barrow Gates</h2>
</header>
<div class="fb__stats">
<div class="fb__stat"><div class="fb__stat-l">Stamina</div><div class="fb__stat-v">20 + your level</div></div>
<div class="fb__stat"><div class="fb__stat-l">Size</div><div class="fb__stat-v">2</div></div>
</div>
<div class="fb__feats">
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">The Bell Tolls</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each enemy that starts their <a href="../scc:mcdm.heroes.v1/rule.combat/turn">turn</a> within 3 squares of the gates is I &lt; AVERAGE <a href="../scc:mcdm.heroes.v1/condition/frightened">frightened</a> (EoT) by the gates. The <a href="../scc:mcdm.heroes.v1/rule.character/potency">potency</a> increases by 1 for <a href="../scc:mcdm.heroes.v1/rule.health/winded">winded</a> enemies.</div>
</article>
<article class="sc-ability fb__feat" data-action="passive">
<div class="fb__feat-head"><span class="fb__feat-icon">⭐️</span><h3 class="fb__feat-name sc-ability__name">Undead Dominion</h3><div class="fb__feat-corner"></div></div>
<div class="fb__feat-body">Each of your undead <a href="../scc:mcdm.summoner.v1/feature.summoner.level-1/minions">minions</a> has <a href="../scc:mcdm.heroes.v1/rule.damage/damage-immunity">damage immunity</a> 2 while occupying a space within 3 squares of the gates.</div>
</article>
</div>
</article>
</div>
