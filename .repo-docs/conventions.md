# Conventions

## File and Directory Naming

| Context | Convention | Examples |
|---------|-----------|----------|
| JavaScript files | lowercase kebab-case | `ability-cards.js`, `keyboard-nav.js`, `browse-enhancements.js` |
| CSS files | lowercase snake_case or kebab-case | `custom_font.css`, `palette.css`, `extra.css` |
| Python scripts | lowercase snake_case | `transform_indexes.py` |
| MkDocs overrides | lowercase with standard MkDocs names | `main.html`, `content.html`, `toc.html` |
| Content directories | Title Case with spaces | `Full Book/`, `Classes By Level/`, `Browse/` |
| Content markdown | Title Case with spaces | `Hit and Run.md`, `Apex Predator.md` |
| Index files | `_Index.md` (upstream convention) | `docs/Browse/Classes/_Index.md` |
| Nav config | `.nav.yml` | Per-directory MkDocs awesome-nav config |

## Code Style

### JavaScript

- Vanilla JS (no frameworks, no build step)
- IIFE pattern or DOMContentLoaded listeners
- localStorage for user preferences (key: `mkdocs:fontPrefs`)
- No linter or formatter configured

### CSS

- Uses MkDocs Material CSS custom properties (e.g., `--md-text-font`, `--md-code-font`)
- Custom properties for site-specific theming in `palette.css`
- Media queries in `mobile.css` for responsive adjustments
- `@media print` rules in `print.css`

### Python

- Standard library only in `transform_indexes.py`
- No linter or formatter configured
- Shebangs on scripts (`#!/usr/bin/env python3`)

### Bash (justfile)

- `set -euo pipefail` at top of recipes
- Temp directories via `mktemp -d`
- `sed` and `perl` for text transformations
- `find ... -print0 | while IFS= read -r -d '' f` for safe file iteration

## Commit Messages

Observed patterns from recent commits (no formal convention enforced):

| Pattern | Examples |
|---------|---------|
| Short imperative description | `Fixing broken anchors`, `Changing urls to be correct` |
| Content update format | `Updates from compendium (8a13135)` |
| Feature descriptions | `UI overhaul`, `UI overhaul p2` |
| Debug/experiment | `Testing`, `Attempting to add suffix...` |

No conventional commits prefix (feat/fix/etc.) used.

## Naming Conventions

| Context | Convention |
|---------|-----------|
| JS variables/functions | camelCase |
| CSS classes | Follow MkDocs Material conventions (e.g., `browse-index`, `grid cards`) |
| Python functions | snake_case |
| Python constants | UPPER_SNAKE_CASE |
| Justfile recipes | snake_case |
| Justfile parameters | snake_case with defaults |

## Content Rules

- Never edit files under `docs/Browse/`, `docs/Read/`, `docs/Full Book/`, or `docs/Bestiary/` directly -- they're overwritten by `just update`
- Place hand-authored overrides in `static_content/docs/` at the same relative path
- Custom JS and CSS in `docs/javascripts/` and `docs/stylesheets/` are safe to edit (preserved by `just clean_docs`)
