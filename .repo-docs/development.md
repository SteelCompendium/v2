---
repo: v2
type: tool
---

# Development

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Python | 3.x | System package or `devbox` |
| pip | (bundled) | Comes with Python |
| just | latest | `cargo install just` or system package |
| git | any | System package |
| devbox (optional) | latest | `curl -fsSL https://get.jetify.com/devbox \| bash` |

## Setup

1. Clone the repo:
   ```bash
   git clone git@github.com:SteelCompendium/v2.git
   cd v2
   ```

2. **Option A -- devbox** (recommended, handles venv + deps automatically):
   ```bash
   devbox shell
   ```

3. **Option B -- manual:**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav
   ```

4. Pull content from upstream:
   ```bash
   just update push=false
   ```

5. Start the dev server:
   ```bash
   mkdocs serve
   # or: devbox run serve
   # or: devbox run just_serve  (uses --dirtyreload for faster rebuilds)
   ```

6. Open http://127.0.0.1:8000/v2/ in your browser.

## Common Workflows

### Updating content from upstream

```bash
# Pull latest data, restructure, but don't commit/push
just update push=false

# Pull latest data, commit, and push (triggers CI deploy)
just update
```

This clones `data-md-linked` (v3 branch), restructures content into the tabbed layout, fixes links, and injects search exclusion front matter.

### Editing hand-authored pages

Pages in `static_content/docs/` are copied over generated content during `just update`. Edit these for persistent changes to:
- `static_content/docs/Browse/index.md` -- Browse landing page (grid cards)
- `static_content/docs/Bestiary/README.md` -- Bestiary landing page

### Editing site-level pages

These are not generated and can be edited directly:
- `docs/index.md` -- Site home page
- `docs/preferences.md` -- User preference controls

### Adding JavaScript

1. Create file in `docs/javascripts/`
2. Add to `mkdocs.yml` under `extra_javascript`

### Adding CSS

1. Create file in `docs/stylesheets/`
2. Add to `mkdocs.yml` under `extra_css`

### Modifying the update pipeline

Edit `justfile`. The `update` recipe handles the full data pull and restructure. The `clean_docs` recipe resets generated directories.

### Building for production

```bash
mkdocs build
# Output: site/
```

## Required Environment Variables

None. All configuration is in `mkdocs.yml` and `devbox.json`.

## Debugging

- **MkDocs build warnings** show broken links and missing files. Run `mkdocs build --strict` to treat warnings as errors.
- **Link resolution issues** are usually caused by missing `.md` suffixes or incorrect `REL_PATH_PREFIX` replacement. Check the `justfile` link-fixing logic.
- **Search not finding a page** -- check that the page doesn't have `search: exclude: true` in its front matter.
- **`--dirtyreload`** (`devbox run just_serve`) only rebuilds changed files, much faster for iterating on CSS/JS changes.
