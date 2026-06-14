/* ============================================================
   Steel Compendium — steel-statblock.js
   Statblock DOM is rendered at BUILD TIME by steel-etl
   (internal/site/statblock_card.go) into the .sb-wrap markup styled
   by steel-statblock.css. This script only attaches RUNTIME behavior
   to those server-rendered cards:
     - collapsible Villain Actions / Malice bands
     - the sticky mini-header that reveals on scroll
   It builds no DOM. navigation.instant-safe: subscribes to document$,
   idempotent init, tears down window listeners on each page swap.
   See the workspace-root spec
   docs/superpowers/specs/2026-06-14-statblock-build-time-render-design.md.
   ============================================================ */
(function (global) {
  "use strict";

  // Window scroll/resize handlers the sticky mini-header registers, tracked so
  // they can be torn down on the next navigation.
  var stickyHandlers = [];

  function wire(wrap) {
    // collapsible bands
    wrap.querySelectorAll(".sb__band-head").forEach(function (h) {
      h.addEventListener("click", function () {
        var b = h.closest(".sb__band");
        var open = b.getAttribute("data-open") === "true";
        b.setAttribute("data-open", open ? "false" : "true");
        h.setAttribute("aria-expanded", open ? "false" : "true");
      });
    });
    // sticky mini-header reveal (rAF-throttled scroll)
    var head = wrap.querySelector(".sb__head");
    if (!head) return;
    var ticking = false;
    var lastTop = -1;
    // Real bottom edge of Material's fixed chrome (header + sticky tabs).
    // Measured, not hardcoded: the bar height varies with the configured fonts
    // and the tabs row disappears below 76.25em — a constant either overlaps the
    // tabs or floats with a gap. Falls back to the CSS default.
    function chromeBottom() {
      var bottom = 0;
      var header = document.querySelector(".md-header");
      if (header) bottom = header.getBoundingClientRect().bottom;
      var tabs = document.querySelector(".md-tabs");
      if (tabs) {
        var tr = tabs.getBoundingClientRect();
        if (tr.height > 0) bottom = Math.max(bottom, tr.bottom);
      }
      return bottom > 0 ? Math.round(bottom) : 96;
    }
    function update() {
      ticking = false;
      var top = chromeBottom();
      if (top !== lastTop) {
        lastTop = top;
        wrap.style.setProperty("--sticky-top", top + "px");
      }
      var hr = head.getBoundingClientRect();
      var wr = wrap.getBoundingClientRect();
      // Stick once the full header has scrolled above the chrome (hr.bottom < top),
      // but drop the mini-header again once the card's tail is within ~its own
      // height of scrolling away (74 ≈ the .sb__sticky height) so it doesn't
      // hover over the page below the statblock.
      wrap.classList.toggle("is-stuck", hr.bottom < top + 2 && wr.bottom > top + 74);
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    stickyHandlers.push(onScroll);
    update();
  }

  // Tear down the previous page's sticky scroll/resize listeners. Under
  // navigation.instant the JS context survives page swaps, so without this each
  // visited statblock leaks a window listener pinning a detached .sb-wrap.
  function teardown() {
    stickyHandlers.forEach(function (h) {
      window.removeEventListener("scroll", h);
      window.removeEventListener("resize", h);
    });
    stickyHandlers = [];
  }

  // Wire every server-rendered statblock on the page. Runs on EVERY page view:
  // navigation.instant does not re-fire DOMContentLoaded, so subscribe to
  // document$. Idempotent (teardown first; addEventListener on fresh nodes).
  function init() {
    teardown();
    document.querySelectorAll(".sb-wrap").forEach(wire);
  }
  if (typeof document$ !== "undefined" && document$ && typeof document$.subscribe === "function") {
    document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }

  global.SCStatblock = { wire: wire };
})(window);
