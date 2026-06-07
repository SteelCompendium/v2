/*
 * settings-panel.js — live, in-place settings drawer.
 * Requires window.SettingsCore (settings-core.js, loaded first).
 * Injects a gear button into the Material header and a steel drawer into <body>.
 * Applies changes instantly via <html> attributes / CSS custom properties,
 * persisting to localStorage["mkdocs:fontPrefs"] (shared with the early-apply
 * script in overrides/main.html).
 */
(function () {
  "use strict";

  var C = window.SettingsCore;
  if (!C) return; // core must load first

  var FONT_VARS = {
    large: "--md-large-header-font",
    small: "--md-small-header-font",
    text: "--md-text-font",
    code: "--md-code-font"
  };
  var WIDTH_VAR = "--md-max_width";
  var SCALE_VAR = "--sc-content-scale";

  var FONT_OPTIONS = {
    large: [
      ['"Beaufort W01 Heavy", var(--md-text-font), serif', "Beaufort (default)"],
      ['"Test Newzald", var(--md-text-font), serif', "Test Newzald"],
      ['"Source Serif 4"', "Source Serif 4"],
      ['"Inter", var(--md-text-font), sans-serif', "Inter"],
      ['"system-ui", var(--md-text-font), serif', "System UI"]
    ],
    small: [
      ['"Test Newzald", var(--md-text-font), serif', "Test Newzald (default)"],
      ['"Beaufort W01 Heavy", var(--md-text-font), serif', "Beaufort"],
      ['"Source Serif 4"', "Source Serif 4"],
      ['"Inter", var(--md-text-font), sans-serif', "Inter"],
      ['"system-ui", var(--md-text-font), serif', "System UI"]
    ],
    text: [
      ['"BerlingskeSlab-DBd", Georgia, "Times New Roman", serif', "Berlingske Slab (default)"],
      ['"Source Serif 4"', "Source Serif 4"],
      ['"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif', "Inter"],
      ['-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif', "System UI"]
    ],
    code: [
      ['"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', "JetBrains Mono (default)"],
      ['"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', "Fira Code"],
      ['ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', "System Monospace"]
    ]
  };

  var GEAR =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L2.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>';

  // ---------- apply (side-effecting) ----------
  function applyFonts(prefs) {
    var r = document.documentElement.style;
    Object.keys(FONT_VARS).forEach(function (k) {
      if (prefs[k]) r.setProperty(FONT_VARS[k], prefs[k]);
      else r.removeProperty(FONT_VARS[k]);
    });
  }
  function applyWidth(value) {
    var r = document.documentElement.style;
    if (!value || value === "default") r.removeProperty(WIDTH_VAR);
    else r.setProperty(WIDTH_VAR, value);
  }
  function applyContentScale(scale) {
    var r = document.documentElement.style;
    var n = C.clampScale(scale);
    if (n === C.SCALE_DEFAULT) r.removeProperty(SCALE_VAR);
    else r.setProperty(SCALE_VAR, String(n));
  }
  function applyCompact(on) {
    document.documentElement.setAttribute("data-compact", on ? "true" : "false");
  }
  function applySiteTheme(name) {
    if (!name || name === "steel") document.documentElement.removeAttribute("data-sc-theme");
    else document.documentElement.setAttribute("data-sc-theme", name);
  }
  function applyCardStyle(style) {
    if (!style || style === "classic") document.documentElement.removeAttribute("data-card-style");
    else document.documentElement.setAttribute("data-card-style", style);
  }
  function applyAll(prefs) {
    applyFonts(prefs);
    applyWidth(prefs.width);
    applyContentScale(prefs.contentScale);
    applyCompact(!!prefs.compact);
    applySiteTheme(prefs.siteTheme);
    applyCardStyle(prefs.cardStyle);
  }

  var prefs = C.loadPrefs(localStorage);
  applyAll(prefs); // re-assert (covers contentScale even if inline early-apply predates it)

  function persist() { C.savePrefs(localStorage, prefs); }

  // ---------- DOM helpers ----------
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function fillSelect(sel, options, selected) {
    sel.innerHTML = "";
    options.forEach(function (o) {
      var opt = document.createElement("option");
      opt.value = o[0];
      opt.textContent = o[1];
      if (selected && selected === o[0]) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  // ---------- build drawer (once) ----------
  function buildDrawer() {
    if (document.getElementById("sc-settings-drawer")) return;

    var scrim = el("div", "sc-settings-scrim");
    scrim.id = "sc-settings-scrim";

    var drawer = el("aside", "sc-settings-drawer");
    drawer.id = "sc-settings-drawer";
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    drawer.setAttribute("aria-label", "Display settings");
    drawer.setAttribute("tabindex", "-1");
    drawer.hidden = false;

    drawer.innerHTML =
      '<div class="sc-settings-head">' +
        '<h2>Settings</h2>' +
        '<button type="button" class="sc-settings-close" aria-label="Close settings">&times;</button>' +
      '</div>' +
      '<div class="sc-settings-body">' +

        '<div class="sc-set__group"><h3>Theme</h3>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-site-theme">Color theme</label>' +
            '<select class="sc-set__select" id="set-site-theme">' +
              '<option value="steel">Steel (default)</option>' +
              '<option value="parchment">Parchment</option>' +
              '<option value="obsidian">Obsidian</option>' +
            '</select>' +
            '<span class="sc-set__hint">Use the header toggle for light / dark.</span>' +
          '</div>' +
        '</div>' +

        '<div class="sc-set__group"><h3>Reading</h3>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-scale">Text size</label>' +
            '<div class="sc-set__sliderwrap">' +
              '<input class="sc-set__range" id="set-scale" type="range">' +
              '<span class="sc-set__value" id="set-scale-val">100%</span>' +
            '</div>' +
            '<span class="sc-set__hint">Scales body text, headings, and tables.</span>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__toggle">' +
              '<input id="set-compact" type="checkbox">' +
              '<span>Compact mode &mdash; tighter spacing for dense display</span>' +
            '</label>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-card-style">Ability card style</label>' +
            '<select class="sc-set__select" id="set-card-style">' +
              '<option value="classic">Classic (default)</option>' +
              '<option value="modern">Modern</option>' +
            '</select>' +
            '<span class="sc-set__hint">Classic uses Draw Steel glyph badges; Modern uses colored borders. Changing this reloads the page.</span>' +
          '</div>' +
        '</div>' +

        '<div class="sc-set__group"><h3>Page width</h3>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__toggle">' +
              '<input id="set-fullwidth" type="checkbox">' +
              '<span>Full width</span>' +
            '</label>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-width">Max width</label>' +
            '<div class="sc-set__sliderwrap">' +
              '<input class="sc-set__range" id="set-width" type="range">' +
              '<span class="sc-set__value" id="set-width-val">80em</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<details class="sc-set__group sc-set__group--fonts"><summary>Fonts</summary>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-font-large">Large headers (H1&ndash;H2)</label>' +
            '<select class="sc-set__select" id="set-font-large"></select>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-font-small">Small headers (H3&ndash;H6)</label>' +
            '<select class="sc-set__select" id="set-font-small"></select>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-font-text">Body text</label>' +
            '<select class="sc-set__select" id="set-font-text"></select>' +
          '</div>' +
          '<div class="sc-set__row">' +
            '<label class="sc-set__label" for="set-font-code">Code</label>' +
            '<select class="sc-set__select" id="set-font-code"></select>' +
          '</div>' +
        '</details>' +

      '</div>' +
      '<div class="sc-settings-foot">' +
        '<button type="button" class="sc-settings-reset" id="set-reset">Reset all to defaults</button>' +
      '</div>';

    document.body.appendChild(scrim);
    document.body.appendChild(drawer);

    bindDrawer(drawer, scrim);
  }

  // ---------- open / close ----------
  var lastFocus = null;
  function openDrawer() {
    var drawer = document.getElementById("sc-settings-drawer");
    if (!drawer) return;
    lastFocus = document.activeElement;
    document.documentElement.setAttribute("data-sc-settings", "open");
    var btn = document.getElementById("sc-settings-toggle");
    if (btn) btn.setAttribute("aria-expanded", "true");
    drawer.focus();
  }
  function closeDrawer() {
    document.documentElement.removeAttribute("data-sc-settings");
    var btn = document.getElementById("sc-settings-toggle");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }
  function isOpen() {
    return document.documentElement.getAttribute("data-sc-settings") === "open";
  }

  // ---------- bind controls ----------
  function bindDrawer(drawer, scrim) {
    drawer.querySelector(".sc-settings-close").addEventListener("click", closeDrawer);
    scrim.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) closeDrawer();
    });

    // Fonts
    var fontIds = { large: "set-font-large", small: "set-font-small", text: "set-font-text", code: "set-font-code" };
    Object.keys(fontIds).forEach(function (k) {
      var sel = drawer.querySelector("#" + fontIds[k]);
      fillSelect(sel, FONT_OPTIONS[k], prefs[k]);
      sel.addEventListener("change", function () {
        prefs[k] = sel.value;
        applyFonts(prefs);
        persist();
      });
    });

    // Site theme
    var themeSel = drawer.querySelector("#set-site-theme");
    themeSel.value = prefs.siteTheme || "steel";
    themeSel.addEventListener("change", function () {
      if (!themeSel.value || themeSel.value === "steel") delete prefs.siteTheme;
      else prefs.siteTheme = themeSel.value;
      applySiteTheme(prefs.siteTheme);
      persist();
    });

    // Content scale slider
    var scale = drawer.querySelector("#set-scale");
    var scaleVal = drawer.querySelector("#set-scale-val");
    scale.min = String(C.SCALE_MIN);
    scale.max = String(C.SCALE_MAX);
    scale.step = String(C.SCALE_STEP);
    var curScale = C.clampScale(prefs.contentScale);
    scale.value = String(curScale);
    scaleVal.textContent = Math.round(curScale * 100) + "%";
    scale.addEventListener("input", function () {
      var n = C.clampScale(scale.value);
      scaleVal.textContent = Math.round(n * 100) + "%";
      applyContentScale(n);
    });
    scale.addEventListener("change", function () {
      var n = C.clampScale(scale.value);
      if (n === C.SCALE_DEFAULT) delete prefs.contentScale;
      else prefs.contentScale = n;
      applyContentScale(n);
      persist();
    });

    // Compact
    var compact = drawer.querySelector("#set-compact");
    compact.checked = !!prefs.compact;
    compact.addEventListener("change", function () {
      if (compact.checked) prefs.compact = true;
      else delete prefs.compact;
      applyCompact(compact.checked);
      persist();
    });

    // Card style (reloads — markup parity with prior behavior)
    var card = drawer.querySelector("#set-card-style");
    card.value = prefs.cardStyle || "classic";
    card.addEventListener("change", function () {
      if (!card.value || card.value === "classic") delete prefs.cardStyle;
      else prefs.cardStyle = card.value;
      applyCardStyle(prefs.cardStyle);
      persist();
      location.reload();
    });

    // Page width: full toggle + em slider
    var full = drawer.querySelector("#set-fullwidth");
    var width = drawer.querySelector("#set-width");
    var widthVal = drawer.querySelector("#set-width-val");
    width.min = String(C.WIDTH_MIN_EM);
    width.max = String(C.WIDTH_MAX_EM);
    width.step = String(C.WIDTH_STEP_EM);

    function syncWidthUI(state) {
      full.checked = state.full;
      width.value = String(state.em);
      width.disabled = state.full;
      widthVal.textContent = state.full ? "full" : state.em + "em";
    }
    function commitWidth(live) {
      var state = { full: full.checked, em: C.clampEm(width.value) };
      var w = C.controlsToWidth(state);
      widthVal.textContent = state.full ? "full" : state.em + "em";
      width.disabled = state.full;
      applyWidth(w);
      if (!live) {
        if (w === "none") delete prefs.width;
        else prefs.width = w;
        persist();
      }
    }
    syncWidthUI(C.widthToControls(prefs.width));
    full.addEventListener("change", function () { commitWidth(false); });
    width.addEventListener("input", function () { commitWidth(true); });
    width.addEventListener("change", function () { commitWidth(false); });

    // Reset all
    drawer.querySelector("#set-reset").addEventListener("click", function () {
      prefs = {};
      applyAll(prefs);
      // resync controls
      Object.keys(fontIds).forEach(function (k) {
        drawer.querySelector("#" + fontIds[k]).selectedIndex = 0;
      });
      themeSel.value = "steel";
      scale.value = String(C.SCALE_DEFAULT);
      scaleVal.textContent = "100%";
      compact.checked = false;
      card.value = "classic";
      syncWidthUI(C.widthToControls(undefined));
      persist();
    });
  }

  // ---------- inject header button ----------
  function injectButton() {
    if (document.getElementById("sc-settings-toggle")) return;
    var header = document.querySelector(".md-header__inner");
    if (!header) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "sc-settings-toggle";
    btn.className = "md-header__button md-icon sc-settings-toggle";
    btn.setAttribute("aria-label", "Open display settings");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = GEAR;
    btn.addEventListener("click", function () {
      if (isOpen()) closeDrawer(); else openDrawer();
    });
    // Place just before the palette toggle if present, else before search, else append.
    var anchor = header.querySelector('[data-md-component="palette"]')
              || header.querySelector('label[for="__search"]')
              || header.querySelector(".md-header__option");
    if (anchor) header.insertBefore(btn, anchor);
    else header.appendChild(btn);
  }

  function init() {
    injectButton();
    buildDrawer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Re-assert after Material instant navigation (header/body may be re-rendered).
  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  }
})();
