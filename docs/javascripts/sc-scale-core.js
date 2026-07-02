/* sc-scale-core.js — "Adjusting Monster Levels" math (Draw Steel: Monsters,
 * Read/bestiary/monster-basics.md) as DELTA functions: we adjust the printed
 * numbers by formula(new) − formula(old) so hand-tuned baselines survive and
 * constant formula error cancels. DOM in sc-scale.js. Tested by
 * tests/sc-scale-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCScale = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  // Role and Damage Modifier Table
  const ROLE = { ambusher: [20, 1], artillery: [10, 1], brute: [30, 1], controller: [10, 0],
    defender: [30, 0], harrier: [20, 0], hexer: [10, 0], mount: [20, 0], support: [20, 0] };
  const TIER = { 1: 0.6, 2: 1.1, 3: 1.4 };

  function mods(role, org) {
    const r = String(role || "").toLowerCase(), o = String(org || "").toLowerCase();
    let roleMod, dmgMod;
    if (ROLE[r]) { roleMod = ROLE[r][0]; dmgMod = ROLE[r][1]; }
    else if (r === "leader" || o === "leader") { roleMod = 30; dmgMod = 1; }
    else if (r === "solo" || o === "solo") { roleMod = 30; dmgMod = 2; }
    else if (o === "elite") { roleMod = 0; dmgMod = 1; }
    else return null;
    if (o === "elite" && ROLE[r]) dmgMod = ROLE[r][1] + 1; // elite stacks +1
    const evOrg = { minion: 0.5, horde: 0.5, platoon: 1, leader: 2, elite: 2, solo: 6 }[o];
    const stamOrg = { minion: 0.125, horde: 0.5, platoon: 1, leader: 2, elite: 2, solo: 5 }[o];
    if (evOrg == null || stamOrg == null) return null;
    return { roleMod: roleMod, dmgMod: dmgMod, evOrgMod: evOrg, stamOrgMod: stamOrg,
      halveDamage: o === "horde" || o === "minion",
      isLeaderOrSolo: o === "leader" || o === "solo" };
  }

  function echelon(l) { return Math.ceil(l / 3); }
  function charBonus(l, leaderOrSolo) {
    return Math.min(5, 1 + echelon(l) + (leaderOrSolo ? 1 : 0));
  }

  const ceil = Math.ceil;
  function evAt(l, m) { return ceil((2 * l + 4) * m.evOrgMod); }
  function stamAt(l, m) { return ceil((10 * l + m.roleMod) * m.stamOrgMod); }

  function evDelta(ol, nl, m) { return evAt(nl, m) - evAt(ol, m); }
  function staminaDelta(ol, nl, m) { return stamAt(nl, m) - stamAt(ol, m); }
  function potencyDelta(ol, nl, m) {
    return charBonus(nl, m.isLeaderOrSolo) - charBonus(ol, m.isLeaderOrSolo);
  }

  function damageDelta(ol, nl, tier, m, isStrike) {
    let d = (nl - ol) * TIER[tier];
    if (m.halveDamage) d /= 2;
    if (isStrike) d += potencyDelta(ol, nl, m);
    return Math.round(d);
  }

  // Potency rewrite ("M < 4" → shifted, clamped 0..6). Entity-aware: the DOM
  // layer feeds innerHTML (to keep condition links alive), where the potency's
  // "<" is the &lt; entity — a literal "<" there can only open a tag, and no
  // tag starts with a digit, so both branches are unambiguous.
  function applyPotencyText(text, potDelta) {
    return String(text).replace(/([MARIP])(\s*(?:&lt;|<)\s*)(\d)/g, function (_, c, mid, n) {
      return c + mid + Math.min(6, Math.max(0, parseInt(n, 10) + potDelta));
    });
  }

  function applyTierText(text, dmgDelta, potDelta) {
    const out = String(text).replace(/^(\d+)(\s+(?:\w+\s+)?damage)/, function (_, n, rest) {
      return Math.max(1, parseInt(n, 10) + dmgDelta) + rest;
    });
    return applyPotencyText(out, potDelta);
  }

  // Characteristic value scaling: the book pins only the HIGHEST characteristic
  // (1 + echelon, +1 leader/solo, max +5); as a delta we shift every printed
  // characteristic by the same amount so the block's spread survives, clamped
  // to the game's ±5 range.
  function scaleChar(orig, delta) {
    return Math.max(-5, Math.min(5, orig + delta));
  }

  // Shift the number inside a "+ 5" power-roll bonus chip, preserving nothing
  // but the sign convention (U+2212 for negatives, like the printed cards).
  function shiftBonus(text, delta) {
    const m = /([+\-−]?)\s*(\d+)/.exec(String(text));
    if (!m) return text;
    const v = (m[1] === "-" || m[1] === "−" ? -1 : 1) * parseInt(m[2], 10) + delta;
    return String(text).replace(/[+\-−]?\s*\d+/, (v < 0 ? "− " : "+ ") + Math.abs(v));
  }

  return { mods: mods, echelon: echelon, charBonus: charBonus, evDelta: evDelta,
    staminaDelta: staminaDelta, potencyDelta: potencyDelta, damageDelta: damageDelta,
    applyTierText: applyTierText, applyPotencyText: applyPotencyText,
    scaleChar: scaleChar, shiftBonus: shiftBonus };
});
