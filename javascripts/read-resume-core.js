/* read-resume-core.js — pure logic for Read-chapter scroll restore.
 * DOM/storage wiring in read-resume.js. Tested by
 * tests/read-resume-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCReadResume = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  function storageKey(pathname) {
    return /\/Read\/[^/]+\/[^/]+\/?$/.test(pathname || "")
      ? "sc-read-pos:" + pathname
      : null;
  }
  // Offer when the saved position is deeper than 1.5 viewports — a fixed
  // fraction-of-page test would wrongly reject real positions on the very
  // long chapters this feature exists for (classes ≈ 600k px).
  function shouldOffer(savedY, pageHeight, viewportH) {
    if (!isFinite(savedY) || savedY <= 0) return false;
    return savedY > viewportH * 1.5 && savedY < pageHeight;
  }
  function clampY(savedY, pageHeight, viewportH) {
    const max = Math.max(0, pageHeight - viewportH);
    return Math.min(Math.max(0, savedY), max);
  }
  return { storageKey: storageKey, shouldOffer: shouldOffer, clampY: clampY };
});
