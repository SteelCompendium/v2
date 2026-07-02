/* sc-pins-core.js — pure logic for the "My Table" pinboard. DOM in sc-pins.js.
 * Storage schema: {"v":1,"items":[{path,title,kind,ts}]} under localStorage
 * key "sc-pins". Tested by tests/sc-pins-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCPins = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  const KIND_ORDER = ["Classes", "Kits", "Abilities", "Features", "Conditions",
    "Rules", "Monsters & Terrain", "Treasure", "Chapters", "Other"];

  function parse(json) {
    try {
      const o = JSON.parse(json);
      if (o && o.v === 1 && Array.isArray(o.items)) {
        return { v: 1, items: o.items.filter(function (i) { return i && i.path; }) };
      }
    } catch (_) {}
    return { v: 1, items: [] };
  }

  function has(state, path) {
    return state.items.some(function (i) { return i.path === path; });
  }

  function toggle(state, item) {
    const items = has(state, item.path)
      ? state.items.filter(function (i) { return i.path !== item.path; })
      : state.items.concat([item]);
    return { v: 1, items: items };
  }

  // Pure removal — unlike toggle, never adds. Board × buttons must use this:
  // a toggle on a path that misses (double-fired click, stale DOM) would
  // re-add a title-less item that renders as "undefined".
  function remove(state, path) {
    return { v: 1, items: state.items.filter(function (i) { return i.path !== path; }) };
  }

  function kindOf(pathname) {
    const m = /\/(Browse|Read)\/([^/]+)(?:\/([^/]+))?/.exec(pathname || "");
    if (!m) return "Other";
    if (m[1] === "Read") return "Chapters";
    const t = m[2];
    if (t === "condition") return "Conditions";
    if (t === "class") return "Classes";
    if (t === "kit") return "Kits";
    if (t === "rule") return "Rules";
    if (t === "treasure") return "Treasure";
    if (t === "monster" || t === "dynamic-terrain" || t === "retainer") return "Monsters & Terrain";
    if (t === "feature") return m[3] === "ability" ? "Abilities" : "Features";
    return t.charAt(0).toUpperCase() + t.slice(1).replace(/-/g, " ");
  }

  function grouped(state) {
    const by = {};
    state.items.forEach(function (i) {
      const k = i.kind || "Other";
      (by[k] = by[k] || []).push(i);
    });
    const kinds = Object.keys(by).sort(function (a, b) {
      const ia = KIND_ORDER.indexOf(a), ib = KIND_ORDER.indexOf(b);
      return ((ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib)) || a.localeCompare(b);
    });
    return kinds.map(function (k) {
      return { kind: k, items: by[k].slice().sort(function (x, y) { return (y.ts || 0) - (x.ts || 0); }) };
    });
  }

  function serialize(state) {
    const items = state.items.slice()
      .sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); })
      .slice(0, 200);
    return JSON.stringify({ v: 1, items: items });
  }

  return { parse: parse, has: has, toggle: toggle, remove: remove, kindOf: kindOf, grouped: grouped, serialize: serialize };
});
