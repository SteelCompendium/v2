/*
 * steel-feature-browser-core.js — pure, DOM-free model + matching for the
 * Feature page's merged Source/subclass facet.
 * UMD: exports for node:test, attaches to window.SCFeatureBrowserCore in the
 * browser. Loaded BEFORE steel-feature-browser.js in mkdocs.yml.
 *
 * The Source facet is one OR-group: a class chip (klass) or a class-scoped
 * subclass chip (klass + SUB_SEP + subclass). Subclass names are not globally
 * unique (divine domains repeat across Censor/Conduit), so selection is scoped
 * to the parent class via the composite key.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.SCFeatureBrowserCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var SUB_SEP = "§";
  // source → grouping rank for the Source facet (class first, then ancestry/kit/other).
  var SRC_RANK = { class: 0, ancestry: 1, kit: 2, other: 3 };

  function subKey(klass, subclass) { return String(klass) + SUB_SEP + String(subclass); }

  // rank of a source for facet ordering; unknown sources sort last. (Must NOT
  // use `SRC_RANK[s] || 9` — class is rank 0, which is falsy.)
  function srcRank(s) { return s in SRC_RANK ? SRC_RANK[s] : 9; }

  function subsOf(item) {
    var v = item.subclass;
    if (v == null || v === "") return [];
    return Array.isArray(v) ? v : [v];
  }

  function buildSourceModel(items) {
    var srcOf = {};   // klass -> source
    var subSet = {};  // klass -> { subclass: true }
    items.forEach(function (it) {
      if (!it.klass) return;
      if (!(it.klass in srcOf)) srcOf[it.klass] = it.source || "other";
      subsOf(it).forEach(function (s) {
        (subSet[it.klass] = subSet[it.klass] || {})[s] = true;
      });
    });
    var klasses = Object.keys(srcOf).sort(function (a, b) {
      return srcRank(srcOf[a]) - srcRank(srcOf[b]) || a.localeCompare(b);
    });
    var classes = [], plain = [];
    klasses.forEach(function (k) {
      var subs = subSet[k]
        ? Object.keys(subSet[k]).sort(function (a, b) { return a.localeCompare(b); })
        : [];
      if (srcOf[k] === "class" && subs.length) classes.push({ klass: k, subclasses: subs });
      else plain.push({ klass: k, source: srcOf[k] });
    });
    return { classes: classes, plain: plain };
  }

  function matchesSource(item, selKlass, selSub) {
    selKlass = selKlass || {};
    selSub = selSub || {};
    if (!Object.keys(selKlass).length && !Object.keys(selSub).length) return true;
    if (selKlass[item.klass]) return true;
    var subs = subsOf(item);
    for (var i = 0; i < subs.length; i++) {
      if (selSub[subKey(item.klass, subs[i])]) return true;
    }
    return false;
  }

  // costFacetValue(cost) — SC-92. Reduces an ability's raw `cost` field (island
  // JSON) to the discrete tier the Cost facet filters on. Pure/DOM-free so
  // node:test can exercise every branch directly.
  //
  // Contract:
  //   "Signature" (case-insensitive, surrounding whitespace ignored) → "Signature"
  //   a string starting with an integer ("11 Discipline", "1 Drama", "5 Piety")
  //     → that integer as a string ("11", "1", "5") — the resource name is
  //     dropped; amount is the only cross-class axis (see decisions ledger).
  //   "", null, undefined, or whitespace-only → "none" (no-cost ability)
  //   {value, unit} (steel-ability-cards.js:53 documents this alternate shape)
  //     with a numeric `value` → that value as a string, same as the string case
  //   anything else (non-numeric string, malformed object, …) → "other", so an
  //     unrecognized shape is never silently dropped from the facet — see the
  //     `values` fallback in steel-feature-browser.js's facet descriptor, which
  //     appends "other"/unlisted tiers after "11" instead of hiding them.
  function costFacetValue(cost) {
    if (cost != null && typeof cost === "object") {
      return cost.value != null && cost.value !== "" && !isNaN(Number(cost.value))
        ? String(cost.value)
        : "other";
    }
    var s = cost == null ? "" : String(cost).trim();
    if (s === "") return "none";
    if (/^signature$/i.test(s)) return "Signature";
    var m = s.match(/^(\d+)\b/);
    if (m) return m[1];
    return "other";
  }

  // costTierValues(items) — SC-92. The Cost facet's `values` list: the
  // canonical order (Signature, No cost, amounts ascending) filtered to tiers
  // actually present in `items` (each item's `cost_tier`, stamped by the
  // caller — see steel-feature-browser.js mount()), with any tier outside the
  // canonical list (e.g. "other", or a future amount) appended after "11" in
  // numeric order so it stays filterable rather than silently disappearing.
  // Deliberately NOT uniqueSorted()'s localeCompare, which sorts "11" before
  // "3".
  var COST_TIER_ORDER = ["Signature", "none", "1", "3", "5", "7", "9", "11"];
  function costTierValues(items) {
    var present = {};
    items.forEach(function (it) { if (it.cost_tier != null) present[it.cost_tier] = true; });
    var known = COST_TIER_ORDER.filter(function (v) { return present[v]; });
    var extra = Object.keys(present).filter(function (v) { return COST_TIER_ORDER.indexOf(v) === -1; });
    extra.sort(function (a, b) {
      var na = Number(a), nb = Number(b);
      var aNum = !isNaN(na), bNum = !isNaN(nb);
      if (aNum && bNum) return na - nb;
      if (aNum !== bNum) return aNum ? -1 : 1;
      return a.localeCompare(b);
    });
    return known.concat(extra);
  }

  // display label for a Cost facet tier: "none" reads as "No cost"; every
  // other tier (Signature, an amount, or a future "other") is verbatim.
  function costTierDisplay(v) { return v === "none" ? "No cost" : v; }

  return {
    SUB_SEP: SUB_SEP,
    SRC_RANK: SRC_RANK,
    subKey: subKey,
    buildSourceModel: buildSourceModel,
    matchesSource: matchesSource,
    costFacetValue: costFacetValue,
    costTierValues: costTierValues,
    costTierDisplay: costTierDisplay
  };
});
