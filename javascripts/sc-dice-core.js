/* sc-dice-core.js — power-roll math (2d10, tiers, edges/banes, crits).
 * Semantics per Browse/rule/dice/*: single edge/bane = ±2; DOUBLE edge/bane =
 * ±1 tier instead; edge+bane cancel; a natural (unmodified 2d10) 19–20 is a
 * critical — tier 3 regardless. DOM in sc-dice.js. Tested by
 * tests/sc-dice-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCDice = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  function roll(rng) {
    rng = rng || Math.random;
    return { d1: 1 + Math.floor(rng() * 10), d2: 1 + Math.floor(rng() * 10) };
  }
  // "+ 2" → numeric bonus; "+ Might" → characteristic name (unknown score).
  function parseModifier(text) {
    const t = String(text || "").trim();
    if (!t) return { bonus: 0, label: "" };
    const m = /^(-?\d+)$/.exec(t.replace(/^\+/, "").trim());
    if (m) {
      const n = parseInt(m[1], 10);
      return { bonus: n, label: (n >= 0 ? "+" : "") + n };
    }
    return { bonus: null, label: t };
  }
  function tierOf(total) { return total <= 11 ? 1 : total <= 16 ? 2 : 3; }
  function tierKey(t) { return t === 1 ? "low" : t === 2 ? "mid" : "high"; }
  function resolve(o) {
    const edges = Math.min(2, Math.max(0, o.edges | 0));
    const banes = Math.min(2, Math.max(0, o.banes | 0));
    const net = edges - banes;
    let flat = 0, shift = 0;
    if (net === 1) flat = 2;
    else if (net === -1) flat = -2;
    else if (net >= 2) shift = 1;
    else if (net <= -2) shift = -1;
    const natural = o.d1 + o.d2;
    const total = natural + (o.bonus || 0) + flat;
    const crit = natural >= 19;
    let tier = Math.min(3, Math.max(1, tierOf(total) + shift));
    if (crit) tier = 3;
    return { total: total, tier: tier, crit: crit, shifted: shift, flat: flat };
  }
  return { roll: roll, parseModifier: parseModifier, tierOf: tierOf, tierKey: tierKey, resolve: resolve };
});
