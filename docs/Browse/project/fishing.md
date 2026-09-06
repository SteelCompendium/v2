---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 2
item_prerequisite: None
name: Fishing
project_goal: Varies
project_roll_characteristic: '[Agility](../rule/character/agility.md), [Reason](../rule/character/reason.md), or [Intuition](../rule/character/intuition.md)'
project_source: None
scc: mcdm.heroes.v1/project/fishing
type: project
---

# Fishing

---

<article class="pj">
<header class="sc-head pj__head"><div class="sc-head__stack"><span class="sc-crest" aria-hidden="true"><span><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="m13.78 15.3 6 6 2.11-2.16-6-6zm3.72-5.2c-.39 0-.81-.05-1.14-.19L4.97 21.25l-2.11-2.11 7.41-7.4L8.5 9.96l-.72.7-1.45-1.41v2.86l-.7.7-3.52-3.56.7-.7h2.81l-1.4-1.41 3.56-3.56a2.976 2.976 0 0 1 4.22 0L9.89 5.74l1.41 1.4-.71.71 1.79 1.78 1.82-1.88c-.14-.33-.2-.75-.2-1.12a3.49 3.49 0 0 1 3.5-3.52c.59 0 1.11.14 1.58.42L16.41 6.2l1.5 1.5 2.67-2.67c.28.47.42.97.42 1.6 0 1.92-1.55 3.47-3.5 3.47"/></svg></span></span><div class="sc-head__col sc-head__col--left"><div class="sc-head__slot sc-head__left-eyebrow sc-head__slot--line">Downtime Project</div><h3 class="sc-head__slot sc-head__left-primary sc-head__slot--line">Fishing</h3></div></div><div class="sc-head__rail sc-head__col--right"><div class="sc-head__slot sc-head__right-primary sc-head__slot--mini">Goal <span class="num">Varies</span></div></div></header><dl class="pj__ledger">
<div class="row"><dt>Item Prerequisite</dt><dd>None</dd></div>
<div class="row"><dt>Project Source</dt><dd>None</dd></div>
<div class="row"><dt>Project Roll Characteristic</dt><dd><a href="../../rule/character/agility/">Agility</a>, <a href="../../rule/character/reason/">Reason</a>, or <a href="../../rule/character/intuition/">Intuition</a></dd></div>
</dl>
<div class="pj__prose">
<p>Whether for sustenance, relaxation, or bragging rights, you've gone fishing, provided you are near a body of water. The <a href="../rule/downtime/project-roll/">project roll</a> for this project has the following changes:</p>
<ul>
<li>The <a href="../rule/downtime/project-points/">project points</a> earned by your roll represent the relative size of the fish (or some other fishlike creature) you catch.</li>
<li>During each <a href="../rule/resource/respite/">respite</a> when you undertake this activity, you continue making <a href="../rule/downtime/project-roll/">project rolls</a> until you obtain a tier 1 outcome (indicating that a fish got away, earning you no points) or a breakthrough.</li>
<li>When you obtain a breakthrough, the Director rolls on the Fishing Events table rather than you gaining points from the roll and making another <a href="../rule/downtime/project-roll/">project roll</a>.</li>
<li>When you've made your last Fishing <a href="../rule/downtime/project-roll/">project roll</a> for the <a href="../rule/resource/respite/">respite</a>, you can spend the <a href="../rule/downtime/project-points/">project points</a> you accrued on a reward from the Tackle table. Any points you don't spend during the current <a href="../rule/resource/respite/">respite</a> are lost.</li>
</ul>
<h2 id="tackle-table">Tackle Table</h2>
<table>
<thead>
<tr>
<th>Reward</th>
<th>Cost</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hearty meal (1 serving)</td>
<td>50</td>
<td>A creature who eats a serving of a meal prepared with the fish caught during the project increases their <a href="../rule/health/recoveries/">Recoveries</a> by 1 until the end of their next <a href="../rule/resource/respite/">respite</a>. A creature can benefit from only one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time.</td>
</tr>
<tr>
<td>Great meal (1 serving)</td>
<td>100</td>
<td>A creature who eats a serving of a meal prepared with the fish caught during the project increases their <a href="../rule/health/recoveries/">Recoveries</a> by 1 until the end of their next <a href="../rule/resource/respite/">respite</a>, and gains 10 <a href="../rule/health/temporary-stamina/">temporary Stamina</a> that lasts until the end of their next <a href="../rule/resource/respite/">respite</a> if it isn't lost first. A creature can benefit only from one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time.</td>
</tr>
<tr>
<td>Better tackle</td>
<td>120</td>
<td>You gain the following title and benefit. <!-- raw HTML omitted --><strong>Angler:</strong> You gain an <a href="../rule/dice/edge/">edge</a> on Fishing <a href="../rule/downtime/project-roll/">project rolls</a>.</td>
</tr>
<tr>
<td>Fishing event</td>
<td>200</td>
<td>You roll on the Fishing Events table.</td>
</tr>
<tr>
<td>Legendary fisher</td>
<td>300</td>
<td>You gain the following title and benefit. <!-- raw HTML omitted --><strong>Goldenrod:</strong> Each time you undertake the Fishing project, you can reroll one <a href="../rule/downtime/project-roll/">project roll</a>.</td>
</tr>
</tbody>
</table>
<h3 id="fishing-events-table">Fishing Events Table</h3>
<table>
<thead>
<tr>
<th>d10</th>
<th>Event</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>While fishing, the hero reels in a talking fish. The fish informs the hero of any events that have occurred within 10 squares of the body of water where they were caught over the last week, or provides one piece of Forbidden Knowledge (see the Discover Lore project), as the Director determines.</td>
</tr>
<tr>
<td>2</td>
<td>While fishing, the hero reels in a note in a bottle. The note is written in Anjali and binds the reader into a deal with a powerful <a href="../ancestry/devil/">devil</a> if read out loud. This gives the <a href="../ancestry/devil/">devil</a> ownership of the reader's soul in exchange for rolling an additional d10 on all future Fishing <a href="../rule/downtime/project-roll/">project rolls</a>.</td>
</tr>
<tr>
<td>3</td>
<td>While the hero is fishing, passersby inform them of a rumor of a magic fishing rod that allows the fisher to double the size of the fish they reel in. The Director can decide whether the rumor is true, and if so, where the rod might be found.</td>
</tr>
<tr>
<td>4</td>
<td>While fishing, the hero reels in an <strong>angulotl daybringer</strong> (see <em>Draw Steel:  Monsters</em>). The angulotl is insulted by the hero catching them, and threatens to summon heavy thunderstorms and drown the region in a flood. However, they can be negotiated with, and might provide the hero with one serving of an amazing meal if they stay on good terms. A creature who eats a serving of this meal increases their <a href="../rule/health/recoveries/">Recoveries</a> by 1 until the end of their next <a href="../rule/resource/respite/">respite</a>, and gains 25 <a href="../rule/health/temporary-stamina/">temporary Stamina</a> that lasts until the end of their next <a href="../rule/resource/respite/">respite</a> if it isn't lost first. A creature can benefit only from one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time.</td>
</tr>
<tr>
<td>5</td>
<td>While fishing, the hero reels in half of a mysterious ancient treasure of the Director's choice. If the other half is found, both halves magically meld together to restore the treasure.</td>
</tr>
<tr>
<td>6</td>
<td>While fishing, the hero is energized by fond memories of their life up to that point. They gain an <a href="../rule/dice/edge/">edge</a> on <a href="../rule/character/presence/">Presence</a> <a href="../rule/test/test/">tests</a> until the end of their next <a href="../rule/resource/respite/">respite</a>.</td>
</tr>
<tr>
<td>7</td>
<td>The hero reaches a new fishing milestone, gaining the following title and benefit.<!-- raw HTML omitted --><strong>Master of Reels:</strong> Whenever you deal damage to a target who is 2 or more squares away from you and that target isn't also <a href="../movement/forced-movement/">force moved</a>, you can <a href="../movement/forced-movement/">pull</a> the target a number of squares equal to your <a href="../rule/character/agility/">Agility</a>, <a href="../rule/character/reason/">Reason</a>, or <a href="../rule/character/intuition/">Intuition</a> score (your choice).</td>
</tr>
<tr>
<td>8</td>
<td>While fishing, the hero engages in relaxing meditation that grants an automatic breakthrough on another project they're working on. Alternatively, they gain insight that grants an automatic breakthrough on another hero's project of their choice.</td>
</tr>
<tr>
<td>9</td>
<td>While fishing, the hero is pulled into the water by an ancient fish and must make a hard <a href="../rule/character/might/">Might</a> <a href="../rule/test/test/">test</a>. On a success, the hero reels in a humongous fish worth 100 points. On a failure, they end the current <a href="../rule/resource/respite/">respite</a> with 1 fewer <a href="../rule/health/recoveries/">Recoveries</a> than usual. On a success with a complication, the hero obtains both outcomes.</td>
</tr>
<tr>
<td>10</td>
<td>While fishing, the hero notes what appears to be an underwater cavern. If the cavern is explored, it reveals a treasure of the Director's choice guarded by a <a href="../ancestry/revenant/">revenant</a> knight fulfilling their duty until their captain returns.</td>
</tr>
</tbody>
</table>
</div>
</article>


<template class="sc-src" data-fmt="md" data-src="**&#91;Item Prerequisite](../rule/downtime/item-prerequisite.md):** None&#10;&#10;**&#91;Project Source](../rule/downtime/project-source.md):** None&#10;&#10;**&#91;Project Roll](../rule/downtime/project-roll.md) &#91;Characteristic](../rule/character/characteristic.md):** &#91;Agility](../rule/character/agility.md), &#91;Reason](../rule/character/reason.md), or &#91;Intuition](../rule/character/intuition.md)&#10;&#10;**Project Goal:** Varies&#10;&#10;Whether for sustenance, relaxation, or bragging rights, you&#39;ve gone fishing, provided you are near a body of water. The &#91;project roll](../rule/downtime/project-roll.md) for this project has the following changes:&#10;&#10;- The &#91;project points](../rule/downtime/project-points.md) earned by your roll represent the relative size of the fish (or some other fishlike creature) you catch.&#10;- During each &#91;respite](../rule/resource/respite.md) when you undertake this activity, you continue making &#91;project rolls](../rule/downtime/project-roll.md) until you obtain a tier 1 outcome (indicating that a fish got away, earning you no points) or a breakthrough.&#10;- When you obtain a breakthrough, the Director rolls on the Fishing Events table rather than you gaining points from the roll and making another &#91;project roll](../rule/downtime/project-roll.md).&#10;- When you&#39;ve made your last Fishing &#91;project roll](../rule/downtime/project-roll.md) for the &#91;respite](../rule/resource/respite.md), you can spend the &#91;project points](../rule/downtime/project-points.md) you accrued on a reward from the Tackle table. Any points you don&#39;t spend during the current &#91;respite](../rule/resource/respite.md) are lost.&#10;&#10;## Tackle Table&#10;&#10;| Reward                  | Cost | Effect                                                                                                                                                                                                                                                                                                                                                                                                    |&#10;|-------------------------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|&#10;| Hearty meal (1 serving) | 50   | A creature who eats a serving of a meal prepared with the fish caught during the project increases their &#91;Recoveries](../rule/health/recoveries.md) by 1 until the end of their next &#91;respite](../rule/resource/respite.md). A creature can benefit from only one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time.                                                                                                       |&#10;| Great meal (1 serving)  | 100  | A creature who eats a serving of a meal prepared with the fish caught during the project increases their &#91;Recoveries](../rule/health/recoveries.md) by 1 until the end of their next &#91;respite](../rule/resource/respite.md), and gains 10 &#91;temporary Stamina](../rule/health/temporary-stamina.md) that lasts until the end of their next &#91;respite](../rule/resource/respite.md) if it isn&#39;t lost first. A creature can benefit only from one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time. |&#10;| Better tackle           | 120  | You gain the following title and benefit. &lt;br/&gt;**Angler:** You gain an &#91;edge](../rule/dice/edge.md) on Fishing &#91;project rolls](../rule/downtime/project-roll.md).                                                                                                                                                                                                                                                                                                     |&#10;| Fishing event           | 200  | You roll on the Fishing Events table.                                                                                                                                                                                                                                                                                                                                                                     |&#10;| Legendary fisher        | 300  | You gain the following title and benefit. &lt;br/&gt;**Goldenrod:** Each time you undertake the Fishing project, you can reroll one &#91;project roll](../rule/downtime/project-roll.md).                                                                                                                                                                                                                                                               |&#10;&#10;### Fishing Events Table&#10;&#10;| d10 | Event                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |&#10;|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|&#10;| 1   | While fishing, the hero reels in a talking fish. The fish informs the hero of any events that have occurred within 10 squares of the body of water where they were caught over the last week, or provides one piece of Forbidden Knowledge (see the Discover Lore project), as the Director determines.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |&#10;| 2   | While fishing, the hero reels in a note in a bottle. The note is written in Anjali and binds the reader into a deal with a powerful &#91;devil](../ancestry/devil.md) if read out loud. This gives the &#91;devil](../ancestry/devil.md) ownership of the reader&#39;s soul in exchange for rolling an additional d10 on all future Fishing &#91;project rolls](../rule/downtime/project-roll.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |&#10;| 3   | While the hero is fishing, passersby inform them of a rumor of a magic fishing rod that allows the fisher to double the size of the fish they reel in. The Director can decide whether the rumor is true, and if so, where the rod might be found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |&#10;| 4   | While fishing, the hero reels in an **angulotl daybringer** (see *Draw Steel:  Monsters*). The angulotl is insulted by the hero catching them, and threatens to summon heavy thunderstorms and drown the region in a flood. However, they can be negotiated with, and might provide the hero with one serving of an amazing meal if they stay on good terms. A creature who eats a serving of this meal increases their &#91;Recoveries](../rule/health/recoveries.md) by 1 until the end of their next &#91;respite](../rule/resource/respite.md), and gains 25 &#91;temporary Stamina](../rule/health/temporary-stamina.md) that lasts until the end of their next &#91;respite](../rule/resource/respite.md) if it isn&#39;t lost first. A creature can benefit only from one serving of this meal or another like it (such as from the Perfect New Recipe project) at a time. |&#10;| 5   | While fishing, the hero reels in half of a mysterious ancient treasure of the Director&#39;s choice. If the other half is found, both halves magically meld together to restore the treasure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |&#10;| 6   | While fishing, the hero is energized by fond memories of their life up to that point. They gain an &#91;edge](../rule/dice/edge.md) on &#91;Presence](../rule/character/presence.md) &#91;tests](../rule/test/test.md) until the end of their next &#91;respite](../rule/resource/respite.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |&#10;| 7   | The hero reaches a new fishing milestone, gaining the following title and benefit.&lt;br/&gt;**Master of Reels:** Whenever you deal damage to a target who is 2 or more squares away from you and that target isn&#39;t also &#91;force moved](../movement/forced-movement.md), you can &#91;pull](../movement/forced-movement.md) the target a number of squares equal to your &#91;Agility](../rule/character/agility.md), &#91;Reason](../rule/character/reason.md), or &#91;Intuition](../rule/character/intuition.md) score (your choice).                                                                                                                                                                                                                                                                                                                                                                                                                                            |&#10;| 8   | While fishing, the hero engages in relaxing meditation that grants an automatic breakthrough on another project they&#39;re working on. Alternatively, they gain insight that grants an automatic breakthrough on another hero&#39;s project of their choice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |&#10;| 9   | While fishing, the hero is pulled into the water by an ancient fish and must make a hard &#91;Might](../rule/character/might.md) &#91;test](../rule/test/test.md). On a success, the hero reels in a humongous fish worth 100 points. On a failure, they end the current &#91;respite](../rule/resource/respite.md) with 1 fewer &#91;Recoveries](../rule/health/recoveries.md) than usual. On a success with a complication, the hero obtains both outcomes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |&#10;| 10  | While fishing, the hero notes what appears to be an underwater cavern. If the cavern is explored, it reveals a treasure of the Director&#39;s choice guarded by a &#91;revenant](../ancestry/revenant.md) knight fulfilling their duty until their captain returns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |"></template>
