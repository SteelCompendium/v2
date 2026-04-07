# Integration

## Dependency Map

```
data-md-linked (branch v3)
    │
    │  git clone at build time
    ▼
v2 (this repo)
    │
    │  mkdocs gh-deploy --force
    ▼
GitHub Pages (gh-pages branch)
    │
    │  served at
    ▼
steelcompendium.io/v2
```

## Upstream Dependencies

| Source | What it provides | How it's consumed |
|--------|-----------------|-------------------|
| `SteelCompendium/data-md-linked` (branch `v3`) | All rules markdown with cross-reference link placeholders | Cloned at build time by `just update`; content restructured into Browse/Read/Full Book/Bestiary |

The `data-md-linked` repo is the single source of truth for all rules content. This repo never modifies the content semantics -- only the presentation layer.

### Link placeholder contract

Upstream markdown uses two placeholders for cross-references:
- `REL_PATH_PREFIX` -- replaced with a relative path from the current file to `docs/`
- `REL_PATH_SUFFIX` -- replaced with `.md`

The justfile rewrites `REL_PATH_PREFIXRules/Chapters` to point at `docs/Read/` and `REL_PATH_PREFIXRules` to point at `docs/Browse/`. URL-encoded spaces (`%20`) are decoded to literal spaces for MkDocs compatibility.

## Downstream Dependents

| Consumer | What it consumes | Notes |
|----------|-----------------|-------|
| End users (browsers) | Built static site at steelcompendium.io/v2 | No API; pure static HTML/CSS/JS |
| steelcompendium.io | Hosts v2 as a subdirectory | DNS and hosting configuration is external |

## Data Contracts

### Input: data-md-linked content structure

Expected directory layout in `data-md-linked` (branch v3):

```
Rules/
├── Chapters/           -> becomes docs/Read/
├── Classes/            -> becomes docs/Browse/Classes/
├── Ancestries/         -> becomes docs/Browse/Ancestries/
├── ...other categories -> becomes docs/Browse/{category}/
├── Draw Steel Heroes*.md -> becomes docs/Full Book/
Bestiary/               -> becomes docs/Bestiary/
```

Each category directory contains:
- `_Index.md` or `Index.md` with a markdown table listing all entries
- Individual `.md` files for each entry

### Output: GitHub Pages static site

MkDocs builds to `site/` and deploys to the `gh-pages` branch. The site is served at the `/v2` path prefix (configured in `mkdocs.yml` as `site_url`).

## Cross-Repo Workflows

### Content update flow

1. Upstream `data-md-linked` repo gets updated (new rules, corrections)
2. Run `just update` in this repo to pull latest content
3. Justfile clones `data-md-linked`, restructures, commits, pushes
4. CI deploys updated site to GitHub Pages

### Version tracking

The data version (commit SHA and date) is embedded in the site footer via `mkdocs.yml` copyright field. This lets users verify which content version they're viewing.
