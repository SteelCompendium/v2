/* read-resume.js — remembers your scroll position per Read chapter
 * (localStorage, debounced) and offers a dismissible "Resume reading"
 * chip on return. instant-nav safe: document$-driven, tears down its
 * scroll listener on every swap. Logic: read-resume-core.js. */
(function () {
  "use strict";
  let teardown = null;

  function init() {
    if (teardown) { teardown(); teardown = null; }
    document.querySelectorAll(".sc-resume").forEach(function (n) { n.remove(); });
    const R = window.SCReadResume;
    if (!R) return;
    const key = R.storageKey(location.pathname);
    if (!key) return;

    // 1. offer resume
    const saved = parseInt(localStorage.getItem(key) || "", 10);
    const pageH = document.body.scrollHeight;
    let chipTimer = null;
    if (R.shouldOffer(saved, pageH, window.innerHeight) && window.scrollY < 100) {
      const chip = document.createElement("button");
      chip.className = "sc-resume";
      chip.type = "button";
      const pct = Math.round((saved / pageH) * 100);
      chip.textContent = "Resume reading (" + pct + "%) ↓";
      chip.addEventListener("click", function () {
        window.scrollTo({ top: R.clampY(saved, document.body.scrollHeight, window.innerHeight), behavior: "auto" });
        chip.remove();
      });
      document.body.appendChild(chip);
      chipTimer = setTimeout(function () { chip.remove(); }, 15000); // auto-dismiss
    }

    // 2. track position (debounced)
    let t = null;
    function onScroll() {
      if (t) clearTimeout(t);
      t = setTimeout(function () {
        if (window.scrollY > 200) localStorage.setItem(key, String(window.scrollY));
        else localStorage.removeItem(key);
      }, 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    teardown = function () {
      window.removeEventListener("scroll", onScroll);
      if (t) clearTimeout(t);
      if (chipTimer) clearTimeout(chipTimer);
    };
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
