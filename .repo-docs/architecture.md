---
repo: v2
doc: architecture
updated: 2026-05-23
---

# Architecture

## System Overview

The v2 site is a static MkDocs Material site. Content flows through a pipeline:

```
annotated markdown (data-rules/)
  -> steel-etl gen (parse, classify, output)
  -> steel-etl site (map to MkDocs structure)
  -> transform_indexes.py (grid card layouts)
  -> mkdocs build (static HTML)
  -> GitHub Pages (steelcompendium.io/v2)
```

The site has no server-side routing. All dynamic behavior is client-side JavaScript.

## Content Pipeline

### steel-etl site

Configured by `site.yaml`. Reads ETL md-linked output and maps it into `docs/`:

- **Section mapping**: `Browse/` (modular by type), `Read/` (book order chapters)
- **Composites**: merge class traits + abilities into one class page; merge ancestry traits into ancestry pages
- **Groups**: nest kit signature abilities under `Kits/` subdirectory
- **SCC stubs**: generate `scc/{code}/index.html` redirect files (see below)
- **Static overrides**: `static_content/docs/` files are copied last, overriding generated content

### Generated vs hand-authored

Everything under `docs/Browse/`, `docs/Read/`, and `docs/scc/` is wiped and regenerated on each build. Do not edit these directly -- changes will be lost. To override a generated page, place your version at the same relative path under `static_content/docs/`.

Safe to edit: `docs/javascripts/`, `docs/stylesheets/`, `overrides/`, `scripts/`, `static_content/`, `mkdocs.yml`, `site.yaml`.

## SCC Permalink System

SCC (Steel Compendium Classification) codes are permanent identifiers for every piece of content. The permalink system ensures URLs survive site restructuring.

### Goals

1. Stable `/v2/scc/{scc-code}/` URLs that work even if Browse hierarchy changes
2. When users copy the URL from the address bar, they get the SCC permalink, not the friendly Browse path

### Architecture (4 layers)

**Layer 1: Redirect stubs** (Go, `steel-etl/internal/site/permalinks.go`)

For every page with an `scc` frontmatter field, generates `docs/scc/{scc-code}/index.html` containing:
- `<meta http-equiv="refresh" content="0; url=...">` for JS-off redirect
- `<script>location.replace(...)</script>` for JS-on redirect (preserves hash + query)
- `<meta name="robots" content="noindex">` to keep stubs out of search
- `<link rel="canonical" href="...">` pointing to the friendly page
- All redirect URLs are relative, so stubs work under any deploy prefix

**Layer 2: Canonical tags** (Jinja2, `overrides/main.html`)

Overrides mkdocs-material's `{% block site_meta %}` to emit `<link rel="canonical">` pointing to the SCC permalink URL when the page has `scc` in its frontmatter. Pages without SCC fall back to `page.canonical_url`.

**Layer 3: Address-bar rewrite** (JavaScript, two parts)

*Inline early rewrite* (`overrides/main.html`, `{% block extrahead %}`):
- Emits `<meta name="scc-permalink">` with the SCC URL
- Inline `<script>` in `<head>` calls `history.replaceState` synchronously during HTML parse
- Runs before body renders, so the user never sees the friendly URL on initial load

*Deferred handlers* (`docs/javascripts/scc-permalink.js`):
- Monkey-patches `history.pushState` to intercept mkdocs-material instant-nav clicks and immediately `replaceState` to the SCC URL in the same synchronous task
- `document$.subscribe` fallback for instant-nav pages not in the manifest
- `hashchange` listener re-applies the SCC permalink after anchor clicks

**Layer 4: SCC manifest** (`docs/javascripts/scc-manifest.js`)

Generated at build time by steel-etl. Maps friendly URL paths to SCC permalink paths:
```javascript
window.__SCC_PERMALINK_MAP__ = {
  "Browse/class/fury/": "scc/mcdm.heroes.v1/class/fury/",
  ...
};
```
Used by the `pushState` monkey-patch for instant-nav URL rewriting (lookup is synchronous, no network request).

### URL flow

```
Initial page load:
  browser requests /v2/Browse/class/fury/
  -> server returns friendly page HTML
  -> inline <head> script rewrites URL to /v2/scc/mcdm.heroes.v1/class/fury/
  -> user sees SCC URL in address bar

SCC permalink visit:
  browser requests /v2/scc/mcdm.heroes.v1/class/fury/
  -> server returns redirect stub HTML
  -> meta-refresh + JS redirects to /v2/Browse/class/fury/
  -> inline <head> script rewrites URL back to /v2/scc/mcdm.heroes.v1/class/fury/

Instant navigation (clicking links within site):
  user clicks link to another page
  -> material calls pushState with friendly URL
  -> monkey-patched pushState immediately replaceState to SCC URL
  -> browser never paints the friendly URL
```

## MkDocs Material Customization

### Theme overrides (`overrides/`)

- `main.html`: extends `base.html` -- owns `site_meta` block (canonical link), `extrahead` block (SCC permalink rewrite, font preference restoration)
- `partials/content.html`: content area layout
- `partials/toc.html`: table of contents layout

Synced with mkdocs-material 9.7.6. If upgrading, re-check `site_meta` block shape.

### Client-side features (`docs/javascripts/`)

| File | Purpose |
|------|---------|
| `scc-permalink.js` | Address-bar URL rewriting to SCC permalinks |
| `scc-manifest.js` | Generated map of friendly -> SCC paths |
| `ability-cards.js` | Ability card rendering enhancements |
| `browse-enhancements.js` | Browse section UX improvements |
| `keyboard-nav.js` | Keyboard navigation support |
| `preferences.js` | User font/layout preferences |
| `reading-progress.js` | Reading progress indicator |
| `tablesort.js` | Sortable tables integration |

### Styling (`docs/stylesheets/`)

| File | Purpose |
|------|---------|
| `palette.css` | Color scheme (custom primary/accent) |
| `extra.css` | General style overrides |
| `custom_font.css` | Font customization |
| `tables.css` | Table styling |
| `mobile.css` | Mobile responsive tweaks |
| `print.css` | Print stylesheet |

## MkDocs Plugins

- `search`: built-in search
- `roamlinks`: Obsidian-style `[[wikilink]]` support
- `awesome-nav`: `.nav.yml` based navigation ordering

## Key Features

- `navigation.instant` + `navigation.instant.preview`: SPA-like navigation
- `navigation.tabs` + `navigation.tabs.sticky`: top-level tab navigation (Browse, Read)
- `toc.permalink`: heading anchor links
- `material.extensions.preview`: link preview popups for Browse and Read sections
- Google Analytics (`G-PMF9SHHXNY`)
