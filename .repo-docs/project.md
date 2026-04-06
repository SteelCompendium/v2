---
repo: v2
type: tool
---

# Project Context

## Product Overview

Steel Compendium v2 is a free, community reference site for the Draw Steel tabletop RPG by MCDM Productions. It publishes the full rulebook content in three reading modes -- modular browse pages, chapter-ordered reading, and a single-page full book -- plus a bestiary section. The site is optimized for fast lookup during game sessions: instant search, shareable per-item URLs, keyboard navigation, and customizable display preferences.

It replaced the v1 site to solve duplicate search results (caused by mike versioning) and to add tabbed navigation.

## Domain Context

Draw Steel is a tactical fantasy TTRPG. The rules cover hero creation (ancestry, class, kit, career, culture, complications), combat (abilities, conditions, movement), negotiation, downtime, and rewards. The system uses a 2d10 + modifier roll against a target number, with three tiers of result. Heroes progress through four "echelons" of play.

Content is published under the DRAW STEEL Creator License. This site is an independent community product, not affiliated with MCDM Productions.

## Key Concepts

| Concept | In the code as | Meaning |
|---------|---------------|---------|
| Browse | `docs/Browse/`, tab | Modular pages -- one page per rule/ability/class/etc. |
| Read | `docs/Read/`, tab | Chapter-ordered reading of the rulebook |
| Full Book | `docs/Full Book/`, tab | Entire rulebook on a single page |
| Bestiary | `docs/Bestiary/`, tab | Monsters book content |
| Search exclusion | YAML front matter `search: exclude: true` | Read + Full Book pages excluded from search to prevent duplicates |
| Static content | `static_content/` | Hand-authored pages that override generated content |
| Index transform | `scripts/transform_indexes.py` | Converts table-format `_Index.md` into grid card layouts |
| Data update | `just update` | Clones upstream data, restructures into tabs, fixes links, injects front matter |
| SCC | Steel Compendium Classification | Hierarchical ID system (`source:type:item`) used across data repos |

## Glossary

| Term | Definition |
|------|-----------|
| Ancestry | A hero's species/lineage (Human, Dwarf, Dragon Knight, etc.) |
| Career | A hero's profession before adventuring (Artisan, Criminal, Sage, etc.) |
| Class | A hero's combat role (Fury, Shadow, Tactician, etc.). 9 classes total. |
| Complication | Optional backstory hook (100 available) |
| Condition | Status effect in combat (Bleeding, Dazed, Grabbed, etc.) |
| Culture | Background that shapes a hero's upbringing |
| Echelon | Tier of play (1st through 4th), determining power level |
| Kit | Equipment/style package that modifies stats and grants abilities |
| Perk | Non-combat special ability (Crafting, Exploration, Lore, etc.) |
| Title | Honorific earned at each echelon with mechanical benefits |
| data-md-linked | Upstream repo containing all Draw Steel content as interlinked markdown |
| data-gen | ETL pipeline repo that parses source PDFs into structured data |
| REL_PATH_PREFIX / REL_PATH_SUFFIX | Link placeholders in upstream markdown, replaced during `just update` |
| roamlinks | MkDocs plugin for wiki-style `[[link]]` resolution |
| awesome-nav | MkDocs plugin for `.nav.yml`-based navigation ordering |

## Audiences

| Audience | How they use it |
|----------|----------------|
| Players | Look up classes, abilities, kits during character creation and play |
| Game Masters (Directors) | Reference monsters, conditions, rules during sessions |
| Community builders | Link to specific rules pages in discussions, guides, homebrew |
| Data consumers | Directed to structured data repos (JSON, YAML, MD) instead of scraping |

## Feature Inventory

### Shipped

- Three reading modes: Browse (modular), Read (chapters), Full Book (single page)
- Bestiary section (monsters book)
- Full-text search (Browse + Bestiary only, no duplicates)
- Grid card index pages for Browse categories
- Keyboard navigation (arrow keys between pages)
- Reading progress indicator
- Ability card styling
- Font/display preferences (persistent via localStorage)
- Compact mode for information-dense display
- Dark/light theme toggle
- Table sorting
- Hover preview for internal links
- Automated data pull + restructure via justfile
- CI/CD deployment on push to main
- Data version stamp in footer

### Known Limitations

- Bestiary has unordered chapters and broken links (work in progress)
- No test suite
- Content depends entirely on upstream data-md-linked repo
- Full Book page is slow to load (entire rulebook on one page)

## Constraints and Risks

- **Licensing:** Published under DRAW STEEL Creator License. Must include attribution.
- **Content freshness:** Site content is only as current as the last `just update` run. No automatic sync from upstream.
- **Single maintainer:** Community project without a formal team.
