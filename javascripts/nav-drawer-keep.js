/*
 * nav-drawer-keep.js — keep the mobile nav drawer open across instant
 * navigations so users can drill down the (navigation.prune'd) tree without
 * reopening the hamburger menu on every page.
 *
 * With navigation.prune, off-path sections render as plain links (their chevron
 * is decorative, inside the <a>), so drilling down means navigating, not
 * expanding in place. navigation.instant makes each hop a fast in-page swap;
 * Material closes the drawer on that swap. Here we remember the drawer was open
 * when a nav link is followed, then re-open it after the swap lands.
 *
 * Pure decision logic lives in nav-drawer-keep-core.js (loaded first).
 */
(function () {
  "use strict";

  var Core = window.NavDrawerKeepCore;
  if (!Core) return;

  // Per-tab, transient: cleared as soon as it's consumed after a navigation.
  var KEY = "sc:keepDrawer";

  // Matches Material's breakpoint below which the nav is a drawer overlay
  // (above 76.25em the primary sidebar is permanent, with no drawer to keep).
  var mq = window.matchMedia("(max-width: 76.1875em)");
  function isMobile() { return mq.matches; }

  function drawer() { return document.getElementById("__drawer"); }

  // Arm on the way out: capture phase so we observe the click even if something
  // later stops propagation. A real nav link has href; toggle labels use `for`.
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a.md-nav__link[href]");
    if (!link) return;
    var d = drawer();
    if (Core.shouldRemember(isMobile(), !!(d && d.checked))) {
      try { sessionStorage.setItem(KEY, Core.FLAG); } catch (_) {}
    }
  }, true);

  // Restore after each instant navigation. document$ is Material's per-page
  // observable; it re-emits once the swapped DOM is in place.
  function restore() {
    var flag = null;
    try { flag = sessionStorage.getItem(KEY); } catch (_) {}
    if (!Core.shouldRestore(flag, isMobile())) return;
    try { sessionStorage.removeItem(KEY); } catch (_) {}
    var d = drawer();
    if (!d) return;
    // Re-open now and again next frame to win against Material's own reset.
    d.checked = true;
    requestAnimationFrame(function () { d.checked = true; });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(restore);
  } else {
    document.addEventListener("DOMContentLoaded", restore);
  }
})();
