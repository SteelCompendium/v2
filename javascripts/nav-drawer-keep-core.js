/*
 * nav-drawer-keep-core.js — pure, DOM-free decision logic for keeping the
 * mobile nav drawer open across instant navigations.
 * UMD: exports for `node:test`, attaches to window.NavDrawerKeepCore in the browser.
 * Loaded BEFORE nav-drawer-keep.js in mkdocs.yml.
 */
;(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NavDrawerKeepCore = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var FLAG = "1";

  // Arm the keep-open flag only when, on a mobile viewport, the user follows a
  // nav link while the drawer is open. Desktop has no drawer, so never arm.
  function shouldRemember(isMobile, drawerOpen) {
    return isMobile === true && drawerOpen === true;
  }

  // Restore the drawer after navigation only when the flag was set and we are
  // still on a mobile viewport (guards against rotating/resizing to desktop).
  function shouldRestore(flag, isMobile) {
    return flag === FLAG && isMobile === true;
  }

  return {
    FLAG: FLAG,
    shouldRemember: shouldRemember,
    shouldRestore: shouldRestore
  };
});
