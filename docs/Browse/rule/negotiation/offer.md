---
printing: "1.01b"
printing_book: "Draw Steel: Heroes"
search:
  boost: 3
name: NPC Response and Offer
scc: mcdm.heroes.v1/rule.negotiation/offer
type: rule
---

# NPC Response and Offer

---

After a hero makes an argument, an [NPC](../general/npc.md) responds in one of three ways:

- An [NPC](../general/npc.md) responds positively if the heroes increase the [NPC](../general/npc.md)'s [interest](interest.md). "That's an excellent point." "You've given me much to consider." "Fair enough." "Makes sense to me."
- An [NPC](../general/npc.md) responds negatively if the heroes decrease their [interest](interest.md). "I don't buy that." "Poppycock!" "I hear you, but I disagree." "That's not going to sway me."
- An [NPC](../general/npc.md) responds with im[patience](patience.md) if the heroes fail to increase or decrease their [interest](interest.md). "I've heard that before." "Are you going to offer me anything real?" "This debate is tiresome." "BORING!"

Unless the [NPC](../general/npc.md) is deceitful, it should be clear to the heroes if their argument helped convince the [NPC](../general/npc.md), if they need to take a new approach, or if the argument actually did more harm than good.

The initial response should come with an offer (or a refusal to make an offer) based on the [NPC](../general/npc.md)'s current [interest](interest.md). If a hero's argument reduces an [NPC](../general/npc.md)'s [patience](patience.md) to 0, the [NPC](../general/npc.md) lets the heroes know that this is their final offer.

## Interest 5 ("Yes, and...")

If the [NPC](../general/npc.md)'s [interest](interest.md) is 5, they offer everything the heroes initially asked for—and then sweeten the deal. This represents the best possible outcome for the heroes. If they offered to perform any services or make payments as part of the deal, the [NPC](../general/npc.md) might waive those obligations, allowing the heroes to get what they want for free. Alternatively, the [NPC](../general/npc.md) might hold the heroes to any offers they made and instead offer an extra service or item on top of what was asked for.

For example, if the heroes asked the boss of a thieves' guild for that organization's help in standing against Lord Saxton, the guildmaster might pledge to send a unit of elite assassins to aid in the battle against that tyrannical noble, and then offer the heroes a quiver filled with explosive arrows to give them an additional advantage in the fight.

The [NPC](../general/npc.md) should let the heroes know that this is the best offer they can make.

## Interest 4 ("Yes.")

If the [NPC](../general/npc.md)'s [interest](interest.md) is 4, they offer the heroes everything they asked for but won't sweeten the deal. The [NPC](../general/npc.md) also accepts anything the heroes have offered as part of the deal with this outcome.

For example, if the heroes offered to help spring a guild thief from prison in exchange for the elite assassins of the thieves' guild standing against Lord Saxton, the guildmaster agrees to those terms without attempting to adjust anything. This likely ends the negotiation, but it's possible that the heroes could push for a little more, provided the [NPC](../general/npc.md) has the [patience](patience.md) for another argument. A Director could prompt the heroes to push for more by having the [NPC](../general/npc.md) ask a leading question, such as, "Is there anything else?" or "What else do you want from me?"

## Interest 3 ("Yes, but...")

If the [NPC](../general/npc.md)'s [interest](interest.md) is 3, they offer the heroes what they want in exchange for everything the heroes offered... then they ask for a little extra, such as a favor or a payment from the characters. If the heroes offered to free a thieves' guild member from prison in exchange for the service of the organization's assassins, the guildmaster might ask them to free an additional prisoner, or to grant the prisoner they rescue a sum of cash or a magic weapon.

## Interest 2 ("No, but...")

If the [NPC](../general/npc.md)'s [interest](interest.md) is 2, the [NPC](../general/npc.md) can't give the heroes what they want. However, they are willing to offer other less impactful goods or services in exchange for whatever the heroes have promised. The guildmaster might not be willing to spare any troops to fight Lord Saxton, but could instead offer the latest spy reports on Saxton's movements in exchange for the jailbreak.

## Interest 1 ("No.")

If the [NPC](../general/npc.md)'s [interest](interest.md) is 1, they outright reject the heroes' idea without a counteroffer. If the [NPC](../general/npc.md) still has [patience](patience.md), they might press the heroes for a better deal, saying something like, "Why should we risk our necks to help you fight Lord Saxton? What's really in it for the thieves' guild, other than a short, brutal end when you inevitably fail?"

## Interest 0 ("No, and...")

If an [NPC](../general/npc.md)'s [interest](interest.md) is 0, they offer nothing, refuse to negotiate further, and seek to harm the heroes. The [NPC](../general/npc.md) might attack immediately, or they could take a different approach, perhaps spreading malicious rumors about the characters, sending assassins after them, or otherwise making their lives difficult. If the heroes don't want to be at odds with the [NPC](../general/npc.md), they'll need to offer a valuable gift or undertake a quest just to make amends.

It is impossible to continue a negotiation when an [NPC](../general/npc.md)'s [interest](interest.md) drops to 0.
