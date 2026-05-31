/**
 * SCC permalink copy button.
 *
 * Pages opt in by emitting <meta name="scc-permalink" content="..."> (added by
 * overrides/main.html when the page frontmatter has an scc field). This renders
 * a small "copy permalink" button next to the page title that copies the stable
 * SCC URL (/scc/<code>/) to the clipboard.
 *
 * The address bar is intentionally NOT rewritten: the friendly Browse URL is the
 * real, canonical, indexable location, and the SCC URL is a stable redirect entry
 * point (served as a static stub by steel-etl). This button is how a reader grabs
 * the stable link on demand. Using document$ keeps it working under Material's
 * instant navigation.
 */
(function () {
  "use strict";

  var BTN_CLASS = "scc-permalink-copy";

  function permalink() {
    var meta = document.querySelector('meta[name="scc-permalink"]');
    return meta ? meta.getAttribute("content") : null;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for non-secure contexts (e.g. http:// during local preview).
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  function flash(btn, label, message) {
    var labelEl = btn.querySelector("." + BTN_CLASS + "__label");
    var prev = labelEl ? labelEl.textContent : null;
    btn.classList.add(BTN_CLASS + "--flash");
    if (labelEl) labelEl.textContent = message;
    setTimeout(function () {
      btn.classList.remove(BTN_CLASS + "--flash");
      if (labelEl && prev !== null) labelEl.textContent = prev;
    }, 1500);
  }

  function render() {
    var url = permalink();
    if (!url) return;

    var title = document.querySelector(".md-content h1");
    if (!title) return;
    if (title.querySelector("." + BTN_CLASS)) return; // already rendered this page

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = BTN_CLASS;
    btn.title = "Copy SCC permalink (" + url + ")";
    btn.setAttribute("aria-label", "Copy SCC permalink");
    btn.innerHTML =
      '<span class="' + BTN_CLASS + '__icon" aria-hidden="true">🔗</span>' +
      '<span class="' + BTN_CLASS + '__label">Copy permalink</span>';

    btn.addEventListener("click", function () {
      copyText(url).then(
        function () { flash(btn, null, "Copied!"); },
        function () { flash(btn, null, "Copy failed"); }
      );
    });

    title.appendChild(btn);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(render);
  } else {
    document.addEventListener("DOMContentLoaded", render);
  }
})();
