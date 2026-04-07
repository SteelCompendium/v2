---
repo: v2
type: tool
status: active
tech:
  - MkDocs Material
  - Python 3
  - JavaScript
  - CSS
updated: 2026-04-06
---

# Steel Compendium v2

MkDocs Material site that serves the Draw Steel TTRPG rules at steelcompendium.io/v2. Pulls structured markdown from the `data-md-linked` repo, restructures it into a tabbed Browse/Read/Full Book layout, applies custom UI enhancements (ability cards, keyboard nav, reading progress, font preferences), and deploys via GitHub Pages.

**This repo is not:** a content source. All rules markdown is generated upstream in `data-md-linked` and pulled at build time. Only modify CSS, JavaScript, MkDocs config, build scripts, and template overrides here.

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `devbox shell` (auto-creates venv and installs pip packages) |
| Run locally | `devbox run serve` or `. .venv/bin/activate && mkdocs serve` |
| Run tests | N/A (no test suite) |
| Build | `devbox run build` or `. .venv/bin/activate && mkdocs build` |
| Pull latest data + build | `just update push=false` |
| Pull latest data + commit + push | `just update` |
| Deploy | Automatic on push to `main` via GitHub Actions |

| Resource | URL |
|----------|-----|
| Live site | https://steelcompendium.io/v2 |
| GitHub repo | https://github.com/SteelCompendium/v2 |
| Issue tracker | https://github.com/SteelCompendium/v2/issues |
| CI dashboard | https://github.com/SteelCompendium/v2/actions |

## Repo Structure

```
v2/
├── mkdocs.yml              # MkDocs Material configuration
├── justfile                 # Build recipes (update, clean_docs)
├── devbox.json              # Dev environment (Python, gh CLI, pip deps)
├── docs/                    # MkDocs source directory (mostly generated)
│   ├── index.md             # Site landing page
│   ├── preferences.md       # Font/layout preference page
│   ├── Browse/              # Modular rules pages (searchable)
│   ├── Read/                # Rulebook chapters in order (search-excluded)
│   ├── Full Book/           # Single-page rulebook (search-excluded)
│   ├── Bestiary/            # Monster reference
│   ├── javascripts/         # Custom JS (ability cards, keyboard nav, etc.)
│   ├── stylesheets/         # Custom CSS (palette, tables, mobile, print)
│   └── Media/               # Favicon and images
├── overrides/               # MkDocs Material template overrides
│   ├── main.html            # Font preference injection
│   └── partials/            # Content and TOC overrides
├── scripts/
│   └── transform_indexes.py # Converts index tables to grid card layouts
├── static_content/          # Hand-authored docs that override generated ones
│   └── docs/
│       ├── Browse/index.md  # Custom Browse landing page
│       └── Bestiary/README.md
└── .github/workflows/
    └── ci.yml               # Deploy to GitHub Pages on push to main
```

## Reading Guide by Role

### Human Roles

| Role | Start here | Then read |
|------|-----------|-----------|
| **New to this repo** | This file | [project.md](project.md) |
| **Developer** | [development.md](development.md) | [architecture.md](architecture.md), [conventions.md](conventions.md) |
| **Architect** | [architecture.md](architecture.md) | [integration.md](integration.md), [decisions/](decisions/) |
| **PM / Scrum Master** | [project.md](project.md) | [integration.md](integration.md), [decisions/](decisions/) |
| **DevOps / SRE** | [ci-cd.md](ci-cd.md) | [architecture.md](architecture.md) |

### Agent Roles

| Agent Role | Start here | Then read |
|------------|-----------|-----------|
| **Code review** | [conventions.md](conventions.md) | [architecture.md](architecture.md) |
| **Bug fix / debug** | [development.md](development.md) | [architecture.md](architecture.md) |
| **Feature implementation** | [architecture.md](architecture.md) | [conventions.md](conventions.md), [development.md](development.md), [decisions/](decisions/) |
| **Codebase migration** | [architecture.md](architecture.md) | [integration.md](integration.md), [conventions.md](conventions.md), [decisions/](decisions/) |
| **PR review** | [conventions.md](conventions.md) | [architecture.md](architecture.md) |
| **CI/CD / DevOps** | [ci-cd.md](ci-cd.md) | [development.md](development.md), [integration.md](integration.md) |
| **Documentation** | This file | [project.md](project.md), [architecture.md](architecture.md) |
| **Onboarding / Q&A** | This file | [project.md](project.md), [development.md](development.md) |

## Current Status

- **Health:** Active development
- **Last significant change:** Anchor fixes and link URL corrections (2026-03-28)
- **Known blockers:** None

## Documents in This Directory

| File | Description |
|------|-------------|
| [project.md](project.md) | Product overview, domain context, glossary |
| [architecture.md](architecture.md) | System components, data flow, dependencies |
| [development.md](development.md) | Setup, local dev workflow, build commands |
| [integration.md](integration.md) | Upstream/downstream repos, data contracts |
| [ci-cd.md](ci-cd.md) | GitHub Actions pipeline, deployment, branch strategy |
| [conventions.md](conventions.md) | File naming, commit patterns, code style |
| [decisions/](decisions/) | Architectural decision records |
