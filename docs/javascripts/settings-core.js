/*
 * settings-core.js — pure, DOM-free settings helpers.
 * UMD: exports for `node:test`, attaches to window.SettingsCore in the browser.
 * Loaded BEFORE settings-panel.js in mkdocs.yml.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.SettingsCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var STORAGE_KEY = "mkdocs:fontPrefs";

  var SCALE_MIN = 0.8, SCALE_MAX = 1.4, SCALE_STEP = 0.05, SCALE_DEFAULT = 1;
  var WIDTH_MIN_EM = 44, WIDTH_MAX_EM = 100, WIDTH_STEP_EM = 2, WIDTH_DEFAULT_EM = 80;

  function clampScale(value) {
    var n = parseFloat(value);
    if (!isFinite(n)) return SCALE_DEFAULT;
    if (n < SCALE_MIN) n = SCALE_MIN;
    if (n > SCALE_MAX) n = SCALE_MAX;
    var steps = Math.round((n - SCALE_MIN) / SCALE_STEP);
    return Math.round((SCALE_MIN + steps * SCALE_STEP) * 100) / 100;
  }

  function normalizeWidth(raw) {
    if (raw === null || raw === undefined) return null;
    var v = String(raw).trim().toLowerCase();
    if (v === "") return null;
    if (v === "full") return "none";
    if (v === "none") return "none";
    if (v === "default") return "default";
    if (/^\d+(\.\d+)?(em|rem|px|%)$/.test(v)) return v;
    if (/^\d+(\.\d+)?$/.test(v)) return v + "em";
    return null;
  }

  function clampEm(value) {
    var n = parseFloat(value);
    if (!isFinite(n)) return WIDTH_DEFAULT_EM;
    if (n < WIDTH_MIN_EM) n = WIDTH_MIN_EM;
    if (n > WIDTH_MAX_EM) n = WIDTH_MAX_EM;
    return Math.round(n / WIDTH_STEP_EM) * WIDTH_STEP_EM;
  }

  function widthToControls(width) {
    var norm = normalizeWidth(width);
    if (!norm || norm === "none" || norm === "default") {
      return { full: true, em: WIDTH_DEFAULT_EM };
    }
    var m = /^(\d+(?:\.\d+)?)em$/.exec(norm);
    if (m) return { full: false, em: clampEm(m[1]) };
    // percent/px or anything else -> treat as full width, keep default slider
    return { full: true, em: WIDTH_DEFAULT_EM };
  }

  function controlsToWidth(controls) {
    if (!controls || controls.full) return "none";
    return clampEm(controls.em) + "em";
  }

  function loadPrefs(storage) {
    try {
      return JSON.parse(storage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }

  function savePrefs(storage, prefs) {
    storage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    SCALE_MIN: SCALE_MIN, SCALE_MAX: SCALE_MAX, SCALE_STEP: SCALE_STEP, SCALE_DEFAULT: SCALE_DEFAULT,
    WIDTH_MIN_EM: WIDTH_MIN_EM, WIDTH_MAX_EM: WIDTH_MAX_EM, WIDTH_STEP_EM: WIDTH_STEP_EM, WIDTH_DEFAULT_EM: WIDTH_DEFAULT_EM,
    clampScale: clampScale,
    normalizeWidth: normalizeWidth,
    clampEm: clampEm,
    widthToControls: widthToControls,
    controlsToWidth: controlsToWidth,
    loadPrefs: loadPrefs,
    savePrefs: savePrefs
  };
});
