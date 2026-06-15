/*
 * statblock-preview.js — per-page show/hide bar for statblock preview grids.
 * Each .sb-cards grid carries build-time default data-sbprev-* attributes
 * (steel-etl sbCardsOpen). On init we (a) seed the grid from the GLOBAL pref
 * (the <html data-sbprev-*> attrs the settings drawer/early-apply set), unless
 * the user already overrode this grid in-session; (b) render a chip bar that
 * flips the grid's attributes live. CSS (steel-statblock.css) does the hiding.
 *
 * navigation.instant-safe: registers via document$, idempotent, adds no global
 * listeners. Exposes window.SteelStatblockPreview.reseed() so the settings
 * drawer can re-apply a changed global default to non-overridden grids.
 */
(function () {
  "use strict";

  var ZONES = [
    { key: "stats", label: "Stats" },
    { key: "meta", label: "Secondary" },
    { key: "chars", label: "Characteristics" },
    { key: "feats", label: "Features" }
  ];

  function globalAttr(key) {
    return document.documentElement.getAttribute("data-sbprev-" + key);
  }

  // Seed a grid's attrs from the global pref unless the user overrode it here.
  function seedGrid(grid) {
    if (grid.dataset.sbprevUser === "1") return;
    ZONES.forEach(function (z) {
      var g = globalAttr(z.key);
      if (g === "on" || g === "off") grid.setAttribute("data-sbprev-" + z.key, g);
    });
  }

  function buildBar(grid) {
    var bar = document.createElement("div");
    bar.className = "sb-prev-bar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "Show or hide statblock preview details");

    var lbl = document.createElement("span");
    lbl.className = "sb-prev-bar__label";
    lbl.textContent = "Show:";
    bar.appendChild(lbl);

    ZONES.forEach(function (z) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "sb-prev-bar__chip";
      chip.textContent = z.label;
      function sync() {
        var on = grid.getAttribute("data-sbprev-" + z.key) !== "off";
        chip.setAttribute("aria-pressed", on ? "true" : "false");
      }
      chip.addEventListener("click", function () {
        var on = grid.getAttribute("data-sbprev-" + z.key) !== "off";
        grid.setAttribute("data-sbprev-" + z.key, on ? "off" : "on");
        grid.dataset.sbprevUser = "1";
        sync();
      });
      sync();
      bar.appendChild(chip);
    });
    return bar;
  }

  function enhance(grid) {
    if (grid.dataset.sbprevReady === "1") {
      seedGrid(grid);
      return;
    }
    seedGrid(grid);
    var bar = buildBar(grid);
    grid.parentNode.insertBefore(bar, grid);
    grid.dataset.sbprevReady = "1";
  }

  function init() {
    var grids = document.querySelectorAll(".sb-cards");
    for (var i = 0; i < grids.length; i++) {
      if (grids[i].querySelector(".sb-prev")) enhance(grids[i]);
    }
  }

  window.SteelStatblockPreview = {
    reseed: function () {
      var grids = document.querySelectorAll(".sb-cards");
      for (var i = 0; i < grids.length; i++) seedGrid(grids[i]);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  }
})();
