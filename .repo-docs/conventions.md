---
repo: v2
type: tool
---

# Conventions

## File and Directory Naming

| Area | Convention | Example |
|------|-----------|---------|
| Docs directories | Title Case with spaces | `Full Book/`, `Classes By Level/` |
| Docs markdown files | Title Case with spaces, `.md` extension | `Draw Steel Heroes.md`, `Making a Hero.md` |
| JavaScript files | kebab-case | `ability-cards.js`, `keyboard-nav.js` |
| CSS files | kebab-case | `custom_font.css`, `extra.css` (mix of snake and kebab) |
| Python scripts | snake_case | `transform_indexes.py` |
| Config files | Standard names | `mkdocs.yml`, `justfile`, `devbox.json` |
| Nav config | `.nav.yml` (dot-prefixed) | `docs/.nav.yml`, `docs/Browse/.nav.yml` |
| Index pages (upstream) | `_Index.md` (underscore-prefixed) | `docs/Browse/Classes/_Index.md` |
| Static overrides | Mirror the generated path | `static_content/docs/Browse/index.md` |

## Code Style

### Python

- No formatter or linter configured
- Standard library only (no third-party imports in `transform_indexes.py`)
- Script-style with module-level functions

### JavaScript

- Vanilla JS, no framework, no bundler
- IIFEs or `document$.subscribe()` (MkDocs Material observable pattern)
- `localStorage` for persistence
- No TypeScript, no modules

### CSS

- Custom properties via MkDocs Material's `--md-*` variable system
- Media queries for mobile and print
- Custom font-face declarations in `custom_font.css`

### Jinja2 (overrides)

- MkDocs Material's template extension pattern: `{% extends "base.html" %}`
- Block overrides: `{% block extrahead %}`, partial includes

## Commit Messages

Observed pattern from recent history: informal, descriptive messages. No conventional commits format enforced.

Examples from recent history:
- `Fixing broken anchors`
- `Changing urls to be correct`
- `Updates from compendium (8a13135)`
- `UI overhaul p2`
- `Better link color`
- `hover preview config adjustment`

Automated commits from `just update` follow: `Updates from compendium ({sha})`

## Naming Conventions

| Element | Convention |
|---------|-----------|
| Python functions | `snake_case` (`parse_table_rows`, `render_grouped_list`) |
| Python variables | `snake_case` (`front_matter`, `body_lines`, `browse_dir`) |
| JavaScript variables | `camelCase` (`fontPrefs`, `linkMatch`) |
| CSS classes | `kebab-case` (`browse-index`, `pref-card`, `prefs-grid`) |
| CSS custom properties | `--md-*` namespace (MkDocs Material convention) |
| HTML IDs | `kebab-case` (`font-large`, `compact-toggle`, `width-input`) |
| Just recipes | `snake_case` (`clean_docs`) |
