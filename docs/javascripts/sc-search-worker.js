/*
 * sc-search-worker.js — drop-in replacement for mkdocs-material's search
 * worker (SC-306). Same message protocol as Material 9.7.x (mkdocs-material
 * is unpinned in devbox.json / v2/devbox.json / CI — re-verify after any
 * upgrade) — 0 setup / 1 ready / 2 query / 3 result — so the stock search UI
 * keeps working; only the ranking changes (sc-search-core.js).
 * overrides/main.html points Material's __config.search at this file. Not an
 * extra_javascript entry: it runs in a Worker, never on the page.
 *
 * Verify after a Material upgrade: `just build && just search-bench --gate`
 * (.repo-docs/troubleshooting.md → "Search results wrong or stock-looking
 * after a mkdocs-material upgrade").
 */
importScripts("./vendor/minisearch.min.js", "./sc-search-core.js");

var MS = (typeof MiniSearch !== "undefined" && MiniSearch.default) || MiniSearch;
var state = null;

addEventListener("message", function (ev) {
  var msg = ev.data || {};
  if (msg.type === 0) {
    var data = msg.data || {};
    var suggest = !!(data.options && data.options.suggest);
    state = { engine: SCSearchCore.createEngine(MS, data.docs || []), suggest: suggest };
    postMessage({ type: 1 });
    return;
  }
  if (msg.type === 2) {
    if (!state) { postMessage({ type: 3, data: { items: [] } }); return; }
    try {
      postMessage({ type: 3, data: state.engine.search(String(msg.data || ""), { suggest: state.suggest }) });
    } catch (e) {
      console.warn("sc-search: query failed", e);
      postMessage({ type: 3, data: { items: [] } });
    }
  }
});
