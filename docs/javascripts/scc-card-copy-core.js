/*
 * scc-card-copy-core.js — pure, DOM-free helpers for the card copy-link button.
 * UMD: exports for `node:test`, attaches to window.SccCardCopy in the browser.
 * Loaded BEFORE scc-card-copy.js in mkdocs.yml.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.SccCardCopy = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Classify a card element by its className string. Whole-token matching (split
  // on whitespace) so "scc-ability-foo" never matches the "sc-ability" token.
  // Embedded statblock features carry "sb__feat" and are rejected — only the
  // standalone ability page card qualifies.
  function cardKind(className) {
    var tokens = String(className == null ? "" : className).split(/\s+/);
    function has(c) { return tokens.indexOf(c) !== -1; }
    if (has("sb-wrap")) return "sb";
    if (has("fb-wrap")) return "fb";
    if (has("sc-ability") && !has("sb__feat")) return "ability";
    return "";
  }

  // Trim a meta value; "" signals "no usable permalink".
  function cleanPermalink(raw) {
    return (raw == null ? "" : String(raw)).trim();
  }

  return { cardKind: cardKind, cleanPermalink: cleanPermalink };
});
