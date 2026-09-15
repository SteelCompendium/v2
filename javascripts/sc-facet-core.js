/*
 * sc-facet-core.js — pure, DOM-free facet-selection matching shared by the
 * Features browser (steel-feature-browser.js) and the Bestiary browser
 * (steel-bestiary-browser.js).
 * UMD: exports for node:test, attaches to window.SCFacetCore in the browser.
 * Loaded BEFORE both browser scripts in mkdocs.yml.
 *
 * A facet selection is { value: true, … } (empty = facet inactive). `mode`
 * decides how multiple picks combine (SC-88):
 *   "any" (default) — item matches if it carries at least one picked value (OR)
 *   "all"           — item must carry every picked value (AND); only ever
 *                     satisfiable for ≥2 picks on array-valued fields
 *                     (keywords), which is why the UI shows the toggle only
 *                     where isMultiValued() is true.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.SCFacetCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // item's raw field value → array of strings ("" / null / undefined → none)
  function valuesOf(v) {
    if (v == null || v === "") return [];
    if (!Array.isArray(v)) return [String(v)];
    return v.map(function (x) { return String(x); });
  }

  // Does an item's field value satisfy the picked set under `mode`?
  // Empty selection always matches (the facet is inactive).
  function matchesPicks(value, picks, mode) {
    picks = picks || {};
    var wanted = Object.keys(picks);
    if (!wanted.length) return true;
    var vals = valuesOf(value);
    if (mode === "all") {
      for (var i = 0; i < wanted.length; i++) {
        if (vals.indexOf(wanted[i]) === -1) return false;
      }
      return true;
    }
    for (var j = 0; j < vals.length; j++) {
      if (picks[vals[j]]) return true;
    }
    return false;
  }

  // Whether any item carries ≥2 values under `key` — i.e. whether "all" mode
  // is ever satisfiable for multiple picks and the any/all toggle worth showing.
  function isMultiValued(items, key) {
    for (var i = 0; i < items.length; i++) {
      var v = items[i] && items[i][key];
      if (Array.isArray(v) && v.length > 1) return true;
    }
    return false;
  }

  return { valuesOf: valuesOf, matchesPicks: matchesPicks, isMultiValued: isMultiValued };
});
