/* Read-only section excerpts for My Table. Fetch only this site's own pages;
 * SCC HTML redirect stubs are resolved without executing their scripts. */
(function () {
  "use strict";
  function eligible(path, base) {
    const url = new URL(path, location.href);
    const root = new URL(base, location.href);
    return url.origin === root.origin && url.pathname.startsWith(root.pathname) &&
      (!!url.hash || url.pathname.startsWith(root.pathname + "scc/"));
  }

  async function pageAt(url, root, signal, hops) {
    if (hops > 3 || url.origin !== root.origin || !url.pathname.startsWith(root.pathname)) throw new Error("Unsupported section link.");
    const response = await fetch(url.href, { signal: signal, redirect: "error" });
    if (!response.ok) throw new Error("Page unavailable.");
    const doc = new DOMParser().parseFromString(await response.text(), "text/html");
    if (!doc.querySelector(".md-content")) {
      const canonical = doc.querySelector('link[rel="canonical"]');
      if (!canonical || !url.pathname.startsWith(root.pathname + "scc/")) throw new Error("Section unavailable.");
      const next = new URL(canonical.getAttribute("href"), url);
      next.hash = url.hash;
      next.search = url.search;
      return pageAt(next, root, signal, hops + 1);
    }
    return { doc: doc, url: url };
  }

  function excerpt(doc, url, prefix) {
    const article = doc.querySelector(".md-content .md-typeset");
    if (!article) throw new Error("Page content unavailable.");
    const heading = url.hash ? doc.getElementById(decodeURIComponent(url.hash.slice(1))) : article.querySelector("h1");
    if (!heading || !article.contains(heading) || !/^H[1-6]$/.test(heading.tagName)) throw new Error("Heading no longer exists.");
    const headings = Array.from(article.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    const next = headings.slice(headings.indexOf(heading) + 1).find(h => h.tagName <= heading.tagName);
    const range = doc.createRange();
    range.setStartAfter(heading);
    if (next) range.setEndBefore(next);
    else range.setEnd(article, article.childNodes.length);
    const body = document.createElement("div");
    body.className = "sc-pins__excerpt";
    body.appendChild(range.cloneContents());
    // Keep book markup (including tables and native details), never page scripts,
    // embedded frames, form controls, or duplicated page-action affordances.
    body.querySelectorAll("script,style,link,meta,base,iframe,object,embed,form,input,button,textarea,select,template,.headerlink,.sc-pageact").forEach(el => el.remove());
    body.querySelectorAll("*").forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        if (/^on/i.test(attr.name) || attr.name === "srcdoc" || attr.name === "autofocus") el.removeAttribute(attr.name);
      });
      // Namespace IDs so several excerpts cannot hijack each other's anchors.
      if (el.id) el.id = prefix + el.id;
      ["href", "src", "poster"].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const value = new URL(el.getAttribute(attr), url);
        if (!/^https?:$/.test(value.protocol)) el.removeAttribute(attr);
        else el.setAttribute(attr, value.href);
      });
      el.removeAttribute("srcset");
    });
    body.querySelectorAll("table").forEach(table => {
      const wrap = document.createElement("div");
      wrap.className = "sc-pins__table";
      table.before(wrap); wrap.appendChild(table);
    });
    return body;
  }

  async function load(path, base, signal, prefix) {
    const page = await pageAt(new URL(path, location.href), new URL(base, location.href), signal, 0);
    return excerpt(page.doc, page.url, prefix);
  }
  window.SCPinsSections = { eligible: eligible, load: load, excerpt: excerpt };
})();
