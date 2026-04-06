---
repo: v2
type: tool
status: active
tech:
  - MkDocs Material
  - Python 3
  - JavaScript (vanilla)
  - just (task runner)
updated: 2026-04-05
---

# Steel Compendium v2

A MkDocs Material site that publishes the Draw Steel TTRPG rules as a searchable, browsable reference at [steelcompendium.io/v2](https://steelcompendium.io/v2). Content is pulled from the [data-md-linked](https://github.com/SteelCompendium/data-md-linked) repo, restructured into tabbed sections (Browse, Read, Full Book, Bestiary), and deployed to GitHub Pages via `mkdocs gh-deploy`.

**This repo is not:** a character builder, a data parser, or the source of truth for Draw Steel content. Content generation happens in [data-gen](https://github.com/SteelCompendium/data-gen); this repo only consumes and presents it.

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `pip install mkdocs-material mkdocs-roamlinks-plugin mkdocs-awesome-nav` |
| Run locally | `mkdocs serve` (or `devbox run serve`) |
| Run tests | N/A (no test suite) |
| Build | `mkdocs build` (or `devbox run build`) |
| Pull latest data (no push) | `just update push=false` |
| Pull latest data + commit + push | `just update` |
| Clean generated docs | `just clean_docs` |
| Deploy | Push to `main` triggers CI (`mkdocs gh-deploy --force`) |

| Resource | URL |
|----------|-----|
| Live site | https://steelcompendium.io/v2 |
| Repository | https://github.com/SteelCompendium/v2 |
| Issue tracker | https://github.com/SteelCompendium/v2/issues |
| CI dashboard | https://github.com/SteelCompendium/v2/actions |
| Bug report form | [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSc6m-pZ0NLt2EArE-Tcxr-XbAPMyhu40ANHJKtyRvvwBd2LSw/viewform) |

## Repo Structure

```
v2/
├── mkdocs.yml              # Site config: theme, plugins, extensions, CSS/JS
├── justfile                 # Task runner: update (pull data + restructure), clean_docs
├── devbox.json              # Dev environment (python3, gh CLI, venv setup)
├── docs/                    # MkDocs source directory
│   ├── index.md             # Landing page
│   ├── preferences.md       # User font/display preferences page
│   ├── .nav.yml             # Top-level tab ordering
│   ├── Browse/              # Modular rules pages (one page per item) -- GENERATED
│   ├── Read/                # Chapter-ordered rules -- GENERATED
│   ├── Full Book/           # Single-page complete rules -- GENERATED
│   ├── Bestiary/            # Monsters book -- GENERATED
│   ├── Media/               # Images, favicons
│   ├── javascripts/         # Client-side enhancements (6 files, ~680 lines)
│   └── stylesheets/         # Custom CSS (6 files, ~950 lines)
├── overrides/               # MkDocs Material template overrides
│   ├── main.html            # Font preference injection
│   └── partials/            # Content + TOC template patches
├── scripts/
│   └── transform_indexes.py # Converts _Index.md tables into grid card layouts
├── static_content/          # Hand-authored overrides copied after data import
│   └── docs/
│       ├── Browse/index.md  # Browse landing page (grid cards)
│       └── Bestiary/README.md
└── .github/workflows/
    └── ci.yml               # Deploy on push to main
```

**Important:** `docs/Browse/`, `docs/Read/`, `docs/Full Book/`, and `docs/Bestiary/` are **generated** by `just update` from upstream data. Do not edit these directories directly -- changes will be overwritten. Edit `static_content/` for hand-authored overrides.

## Reading Guide by Role

### Human Roles

| Role | Start here | Then read |
|------|-----------|-----------|
| **New to this repo** | This file | [project.md](project.md) |
| **Developer** | [development.md](development.md) | [architecture.md](architecture.md), [conventions.md](conventions.md) |
| **Architect** | [architecture.md](architecture.md) | [integration.md](integration.md), [decisions/](decisions/) |
| **PM / Scrum Master** | [project.md](project.md) | [integration.md](integration.md) |
| **DevOps / SRE** | [ci-cd.md](ci-cd.md) | [architecture.md](architecture.md) |

### Agent Roles

| Agent Role | Start here | Then read |
|------------|-----------|-----------|
| **Code review** | [conventions.md](conventions.md) | [architecture.md](architecture.md) |
| **Bug fix / debug** | [troubleshooting.md](troubleshooting.md) | [development.md](development.md), [architecture.md](architecture.md) |
| **Feature implementation** | [architecture.md](architecture.md) | [conventions.md](conventions.md), [development.md](development.md), [decisions/](decisions/) |
| **PR review** | [conventions.md](conventions.md) | [architecture.md](architecture.md), [troubleshooting.md](troubleshooting.md) |
| **CI/CD / DevOps** | [ci-cd.md](ci-cd.md) | [development.md](development.md), [integration.md](integration.md) |
| **Documentation** | This file | [project.md](project.md), [architecture.md](architecture.md) |
| **Dependency update** | [integration.md](integration.md) | [architecture.md](architecture.md), [ci-cd.md](ci-cd.md) |

## Current Status

- **Health:** Active development
- **Last significant change:** Anchor/URL fixes for browse navigation (2026-03-29)
- **Known blockers:** Bestiary section is work-in-progress with unordered chapters and broken links

## Documents in This Directory

| File | Description |
|------|-------------|
| [index.md](index.md) | This file -- repo overview and quick reference |
| [project.md](project.md) | Product context, domain concepts, glossary |
| [architecture.md](architecture.md) | System design, data flow, components |
| [development.md](development.md) | Setup, workflows, local development |
| [integration.md](integration.md) | Upstream/downstream dependencies, data contracts |
| [ci-cd.md](ci-cd.md) | CI pipeline, deployment, branch strategy |
| [conventions.md](conventions.md) | Coding style, naming, commit patterns |
| [troubleshooting.md](troubleshooting.md) | Known issues, common errors, gotchas |
| [decisions/](decisions/) | Architecture decision records |
