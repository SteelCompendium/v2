# Development

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| devbox | latest | https://www.jetify.com/devbox/docs/installing_devbox/ |
| Python 3 | latest (managed by devbox) | Provided by devbox |
| git | any | System package manager |
| just | any | System package manager or `cargo install just` |

Devbox automatically provisions Python and GitHub CLI. The shell init hook creates a `.venv` and installs pip dependencies.

## Setup

1. Clone the repo:
   ```bash
   git clone git@github.com:SteelCompendium/v2.git
   cd v2
   ```

2. Enter the devbox shell (creates venv, installs deps):
   ```bash
   devbox shell
   ```

3. Pull content and build locally:
   ```bash
   just update push=false
   ```

4. Serve locally:
   ```bash
   devbox run serve
   # or
   mkdocs serve
   ```

5. Open http://127.0.0.1:8000 in your browser.

## Common Workflows

### Pull latest content without pushing

```bash
just update push=false
```

This clones `data-md-linked` (branch v3), restructures content into Browse/Read/Full Book/Bestiary, fixes links, and transforms index pages. Does not commit or push.

### Pull latest content and deploy

```bash
just update
```

Same as above but also commits the updated `docs/` and pushes to `main`. CI then deploys to GitHub Pages.

### Clean generated docs

```bash
just clean_docs
```

Removes all generated content from `docs/` while preserving `javascripts/`, `stylesheets/`, `Media/`, `index.md`, `preferences.md`, and `.nav.yml`. Also resets the data version placeholder in `mkdocs.yml`.

### Modify CSS or JavaScript

1. Edit files in `docs/stylesheets/` or `docs/javascripts/`
2. If adding a new file, register it in `mkdocs.yml` under `extra_css` or `extra_javascript`
3. Run `mkdocs serve` to preview changes with live reload
4. Commit the changes directly (these files are not generated)

### Override a generated page

1. Create the file at the same relative path under `static_content/docs/`
2. Run `just update push=false` to verify the override applies correctly
3. Commit both the static content file and the generated result

### Build without serving

```bash
devbox run build
# or
mkdocs build
```

Output goes to `site/` (gitignored).

## Custom JavaScript Files

| File | Purpose |
|------|---------|
| `ability-cards.js` | Styles ability descriptions as visual cards |
| `browse-enhancements.js` | Enhances Browse section navigation and layout |
| `keyboard-nav.js` | Arrow key navigation between pages |
| `preferences.js` | Font family, size, page width, and compact mode preferences (persisted to localStorage) |
| `reading-progress.js` | Progress bar showing scroll position in long pages |
| `tablesort.js` | Initializes tablesort on all markdown tables |

## Custom CSS Files

| File | Purpose |
|------|---------|
| `palette.css` | Color palette and CSS custom property definitions |
| `extra.css` | General layout and typography overrides |
| `custom_font.css` | Font-face declarations and font variable defaults |
| `tables.css` | Table styling and responsive table layout |
| `mobile.css` | Mobile-specific responsive adjustments |
| `print.css` | Print stylesheet for clean printouts |

## Testing

No automated test suite exists. Manual verification:

1. Run `mkdocs serve` and check key pages:
   - Browse landing page and category grids
   - Individual ability pages with card styling
   - Read chapter pages (verify search exclusion)
   - Preferences page (change fonts, verify persistence)
2. Test search to confirm only Browse results appear
3. Test keyboard navigation (arrow keys between pages)
4. Test dark/light mode toggle
5. Check mobile layout at various breakpoints

## Debugging

- MkDocs build warnings appear in terminal during `mkdocs serve` or `mkdocs build`
- Broken links show as build warnings with file path and line number
- Browser DevTools console for JavaScript errors
- `mkdocs serve --dirtyreload` (`devbox run just_serve`) for faster rebuilds during development
