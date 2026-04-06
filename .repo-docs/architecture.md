---
repo: v2
type: tool
---

# Architecture

## System Overview

```
┌─────────────────────┐     just update      ┌────────────────────┐
│  data-md-linked      │ ──────────────────►  │  v2 repo           │
│  (upstream content)  │   clone + restructure │                    │
│  branch: v3          │                      │  ┌──────────────┐  │
└─────────────────────┘                      │  │ docs/Browse/  │  │
                                              │  │ docs/Read/    │  │
                                              │  │ docs/Full Book│  │
┌─────────────────────┐                      │  │ docs/Bestiary/│  │
│  static_content/     │ ─── copy overrides ─►│  └──────────────┘  │
│  (hand-authored)     │                      │                    │
└─────────────────────┘                      │  mkdocs build      │
                                              │       │            │
                                              │       ▼            │
                                              │  ┌──────────┐     │
                                              │  │ site/     │     │
                                              │  │ (HTML)    │     │
                                              │  └──────────┘     │
                                              └────────────────────┘
                                                       │
                                              git push to main
                                                       │
                                                       ▼
                                              ┌────────────────────┐
                                              │  GitHub Pages       │
                                              │  gh-pages branch    │
                                              │  steelcompendium.io │
                                              └────────────────────┘
```

## Components

| Component | Location | Responsibility | Depends on |
|-----------|----------|---------------|------------|
| Site config | `mkdocs.yml` | Theme, plugins, extensions, CSS/JS includes | MkDocs Material, roamlinks, awesome-nav |
| Update pipeline | `justfile` | Clone upstream data, restructure into tabs, fix links, inject search exclusion | data-md-linked (v3 branch), Python 3, `scripts/transform_indexes.py` |
| Index transformer | `scripts/transform_indexes.py` | Convert `_Index.md` tables to grid card layouts | Python 3 standard library |
| Static overrides | `static_content/docs/` | Hand-authored pages (Browse landing, Bestiary README) | Copied after generated content |
| Template overrides | `overrides/` | Remove auto-injected h1, customize TOC rendering, inject font prefs | MkDocs Material template system |
| Client JS | `docs/javascripts/` | Ability cards, browse enhancements, keyboard nav, preferences, reading progress, table sort | Vanilla JS, localStorage |
| Client CSS | `docs/stylesheets/` | Palette, typography, tables, mobile, print, custom fonts | MkDocs Material CSS variables |
| CI pipeline | `.github/workflows/ci.yml` | Build + deploy on push to main | Python 3, pip, mkdocs |

## Data Flow

1. `just update` clones `data-md-linked` (v3 branch) into a temp directory
2. Extracts commit SHA + date for the version stamp in `mkdocs.yml`
3. Copies content into `docs/` tabs:
   - `Rules/*` (except `Chapters/`) -> `docs/Browse/`
   - `Rules/Chapters/*` -> `docs/Read/`
   - `Rules/Draw Steel Heroes*.md` -> `docs/Full Book/`
   - `Bestiary/` -> `docs/Bestiary/`
4. Fixes index file links (appends `.md` suffix)
5. Replaces `REL_PATH_PREFIX` / `REL_PATH_SUFFIX` placeholders with relative paths
6. Decodes `%20` in markdown links
7. Appends `#anchor` fragments to `.md` links for hover preview support
8. Injects `search: exclude: true` front matter into Read + Full Book pages
9. Generates `.nav.yml` files for tab titles and sort order
10. Runs `transform_indexes.py` on Browse to convert tables to grid cards
11. Copies `static_content/docs/` over generated content (overrides)
12. Optionally commits and pushes

## Key Design Decisions

| Decision | Rationale | See also |
|----------|-----------|----------|
| Three reading modes | Different use cases: quick lookup (Browse), linear reading (Read), Ctrl+F (Full Book) | [tabbed-navigation](decisions/2026-04-05-tabbed-navigation.md) |
| Search exclusion for Read + Full Book | Prevents duplicate results since Browse already covers all content | [search-dedup](decisions/2026-04-05-search-dedup.md) |
| No mike versioning | v1 used mike for multi-version docs; v2 uses single-branch `gh-deploy` for simplicity | [no-mike](decisions/2026-04-05-no-mike-versioning.md) |
| Static content overrides | Some pages (Browse landing, Bestiary README) need hand-authored content that survives data updates | |
| Link placeholder system | Upstream data uses `REL_PATH_PREFIX`/`REL_PATH_SUFFIX` so links work after restructuring into different directory layouts | |
| Anchor injection | Appending `#slug` to `.md` links enables MkDocs Material's instant preview on hover | |

## Dependencies

| Package | Version | Why |
|---------|---------|-----|
| mkdocs-material | latest (pip) | Material Design theme with search, navigation, dark mode, instant loading |
| mkdocs-roamlinks-plugin | latest (pip) | Resolves wiki-style `[[links]]` from upstream content |
| mkdocs-awesome-nav | latest (pip) | `.nav.yml`-based navigation ordering instead of alphabetical |
| Python 3 | 3.x | MkDocs runtime + transform script |
| just | system | Task runner for update/clean workflows |
| MathJax 3 | CDN | Renders mathematical notation in rules |
| Mermaid | CDN | Diagram rendering |
| Tablesort 5.3 | CDN | Client-side table sorting |

## Extension Points

- **New tab section:** Add a branch in `justfile`'s update recipe to copy content into a new `docs/{Section}/` directory, add a `.nav.yml`, and update `docs/.nav.yml`
- **New JavaScript enhancement:** Add file to `docs/javascripts/`, reference in `mkdocs.yml` `extra_javascript`
- **New CSS customization:** Add file to `docs/stylesheets/`, reference in `mkdocs.yml` `extra_css`
- **Static page overrides:** Add to `static_content/docs/` -- these are copied last and override generated content
- **Index page styling:** Modify `scripts/transform_indexes.py` for new card/grid layouts

## Constraints

- Generated docs directories (`Browse/`, `Read/`, `Full Book/`, `Bestiary/`) are wiped and recreated on every `just update`. Direct edits are lost.
- MkDocs Material's `navigation.instant` requires all internal links to resolve correctly at build time.
- The `roamlinks` plugin expects wiki-link syntax from upstream data; breaking changes in upstream link format would break resolution.
- GitHub Pages deployment is force-pushed to `gh-pages` branch on every CI run.
