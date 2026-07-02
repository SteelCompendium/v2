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

  function applyTierText(text, dmgDelta, potDelta) {
    let out = String(text).replace(/^(\d+)(\s+(?:\w+\s+)?damage)/, function (_, n, rest) {
      return Math.max(1, parseInt(n, 10) + dmgDelta) + rest;
    });
    out = out.replace(/([MARIP])\s*<\s*(\d)/g, function (_, c, n) {
      return c + " < " + Math.min(6, Math.max(0, parseInt(n, 10) + potDelta));
    });
    return out;
  }

  return { mods: mods, echelon: echelon, charBonus: charBonus, evDelta: evDelta,
    staminaDelta: staminaDelta, potencyDelta: potencyDelta, damageDelta: damageDelta,
    applyTierText: applyTierText };
});
