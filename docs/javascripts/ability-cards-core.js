/*
 * ability-cards-core.js — pure, DOM-free helpers for ability-card enhancements.
 * UMD: exports for node:test, attaches to window.AbilityCardsCore in the browser.
 * Loaded BEFORE ability-cards.js in mkdocs.yml.
 *
 * Statblock signature abilities encode their power roll in the TITLE as dice
 * notation ("Nd10 + <characteristic>"), followed by exactly three bare tier
 * outcome paragraphs (each starting with the damage value) — unlike class
 * abilities, which use a "Power Roll +" header + a labeled "≤11/12-16/17+" list.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.AbilityCardsCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // "2d10 + R", "2d10 + 5", "2d10 + highest characteristic"
  var DICE_RE = /\d+d\d+\s*\+/;
  // A tier outcome line starts with its damage number: "5 acid damage; …".
  var TIER_LEAD_RE = /^\s*\d+\b/;
  // Position → tier key (≤11 / 12-16 / 17+).
  var TIER_ORDER = ["low", "mid", "high"];

  function hasStatblockDiceRoll(titleText) {
    return DICE_RE.test(titleText || "");
  }

  function isTierLine(text) {
    return TIER_LEAD_RE.test(text || "");
  }

  function tierKeyAt(index) {
    return TIER_ORDER[index] || null;
  }

  return {
    DICE_RE: DICE_RE,
    hasStatblockDiceRoll: hasStatblockDiceRoll,
    isTierLine: isTierLine,
    tierKeyAt: tierKeyAt
  };
});
