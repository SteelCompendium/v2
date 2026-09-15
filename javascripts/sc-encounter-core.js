/* sc-encounter-core.js — pure encounter-budget math. Sources:
 * Read/bestiary/monster-basics.md Steps 3–5 (encounter strength, difficulty
 * bands, minions-bought-by-four, level guidance). DOM/tray in sc-encounter.js.
 * Tested by tests/sc-encounter-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCEncounter = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Accepts a bare EV ("16"), a statblock head chip ("EV 3 for 4 minions"), or
  // "-" for creatures with no EV. The book spells the minion-group qualifier
  // both ways ("for four minions" and "for 4 minions"), so match either.
  function parseEV(s) {
    const t = String(s || "").trim().replace(/^EV\s*/i, "");
    const m = /^(\d+)/.exec(t);
    if (!m) return { ev: null, perFour: false };
    return { ev: parseInt(m[1], 10), perFour: /\bfor\s+(?:4|four)\b/i.test(t) };
  }

  function heroES(level) { return 4 + 2 * (parseInt(level, 10) || 1); }

  // "Add one hero for every 2 Victories the heroes have earned on average."
  function partyES(n, level, victories) {
    return heroES(level) * ((parseInt(n, 10) || 0) + Math.floor((parseInt(victories, 10) || 0) / 2));
  }

  // Step 4 bands: Trivial < pES−hES ≤ Easy < pES ≤ Standard ≤ pES+hES < Hard ≤ pES+3hES < Extreme
  function bands(pES, hES) {
    return { trivialMax: pES - hES, easyMax: pES, standardMax: pES + hES, hardMax: pES + 3 * hES };
  }
  function classify(total, b) {
    if (total <= b.trivialMax) return "Trivial";
    if (total < b.easyMax) return "Easy";
    if (total <= b.standardMax) return "Standard";
    if (total <= b.hardMax) return "Hard";
    return "Extreme";
  }

  function isMinion(pick) {
    return parseEV(pick.ev).perFour || /minion/i.test(pick.organization || "");
  }

  // Minion EV prices a GROUP OF FOUR ("Minions Come in Groups of Four").
  function pickCost(pick) {
    const p = parseEV(pick.ev);
    if (p.ev == null) return 0;
    if (p.perFour) return Math.ceil((pick.count || 0) / 4) * p.ev;
    return (pick.count || 0) * p.ev;
  }
  function totalEV(picks) {
    return picks.reduce(function (a, p) { return a + pickCost(p); }, 0);
  }

  // "Consider Creature Level": > heroes+2 is over-level (solos: +1).
  function levelWarn(pickLevel, heroLevel, org) {
    const cap = /solo/i.test(org || "") ? 1 : 2;
    return (parseInt(pickLevel, 10) || 0) > (parseInt(heroLevel, 10) || 1) + cap;
  }

  function addPick(picks, item) {
    const found = picks.find(function (p) { return p.href === item.href; });
    if (found) return setCount(picks, item.href, found.count + (isMinion(found) ? 4 : 1));
    const pick = { href: item.href, name: item.name, ev: item.ev,
      organization: item.organization || "", level: item.level, count: 1 };
    if (isMinion(pick)) pick.count = 4;
    return picks.concat([pick]);
  }

  function setCount(picks, href, count) {
    return picks.map(function (p) {
      if (p.href !== href) return p;
      let c = count;
      if (isMinion(p)) c = Math.max(0, Math.ceil(c / 4) * 4);
      return Object.assign({}, p, { count: c });
    }).filter(function (p) { return p.count > 0; });
  }

  function slug(href) {
    const parts = String(href || "").split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  }
  function encodeShare(picks) {
    return picks.map(function (p) { return slug(p.href) + ":" + p.count; }).join(",");
  }
  function decodeShare(str, itemsBySlug) {
    const picks = [];
    String(str || "").split(",").forEach(function (part) {
      const m = /^([a-z0-9-]+):(\d+)$/.exec(part.trim());
      if (!m || !itemsBySlug[m[1]]) return;
      const it = itemsBySlug[m[1]];
      picks.push({ href: it.href, name: it.name, ev: it.ev,
        organization: it.organization || "", level: it.level,
        count: parseInt(m[2], 10) });
    });
    return picks;
  }

  return { parseEV: parseEV, heroES: heroES, partyES: partyES, bands: bands,
    classify: classify, pickCost: pickCost, totalEV: totalEV, levelWarn: levelWarn,
    addPick: addPick, setCount: setCount, slug: slug,
    encodeShare: encodeShare, decodeShare: decodeShare, isMinion: isMinion };
});
