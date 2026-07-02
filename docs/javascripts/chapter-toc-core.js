/* chapter-toc-core.js — pure logic for the Read-chapter "In this chapter"
 * mini-TOC. DOM mounting lives in chapter-toc.js. Tested by
 * tests/chapter-toc-core.test.js (node --test). */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SCChapterToc = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // /…/Read/<book>/<chapter>/ — exactly two non-empty segments after Read.
  function isReadPage(pathname) {
    return /\/Read\/[^/]+\/[^/]+\/?$/.test(pathname || "");
  }

  function buildTocModel(headings) {
    const model = [];
    let current = null;
    (headings || []).forEach(function (h) {
      if (h.level === 2 || !current) {
        current = { text: h.text, id: h.id, children: [] };
        model.push(current);
        if (h.level === 3) current = null; // loose h3 becomes its own top entry
      } else if (h.level === 3) {
        current.children.push({ text: h.text, id: h.id });
      }
    });
    return model;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderTocHTML(model, title) {
    let h = '<details class="sc-chtoc"><summary>' + esc(title) + "</summary><ul>";
    model.forEach(function (top) {
      h += '<li><a href="#' + esc(top.id) + '">' + esc(top.text) + "</a>";
      if (top.children.length) {
        h += "<ul>";
        top.children.forEach(function (c) {
          h += '<li><a href="#' + esc(c.id) + '">' + esc(c.text) + "</a></li>";
        });
        h += "</ul>";
      }
      h += "</li>";
    });
    return h + "</ul></details>";
  }

  return { isReadPage: isReadPage, buildTocModel: buildTocModel, renderTocHTML: renderTocHTML };
});
