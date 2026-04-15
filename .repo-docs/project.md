# Product Overview

The Steel Compendium v2 site provides a structured, searchable web reference for the Draw Steel tabletop RPG by MCDM Productions. It replaces the v1 site with improved navigation (tabbed Browse/Read/Full Book layout), deduplicated search, and custom UI enhancements for table play.

Published under the DRAW STEEL Creator License as an independent fan project.

## Domain Context

Draw Steel is a tactical fantasy TTRPG. The rules cover hero creation (ancestry, class, kit, career, culture), tactical combat on a grid, negotiation encounters, and downtime activities. Content is organized hierarchically: classes contain abilities at different levels, kits provide stat modifications, titles grant progression rewards.

The site must present this content in two complementary ways:
1. **Browse** -- modular lookup pages for quick reference at the table (e.g., find one ability)
2. **Read** -- sequential chapter order for learning the rules

## Key Concepts

| Concept | Explanation |
|---------|-------------|
| Browse section | Modular rules pages organized by category. Only section indexed by search. |
| Read section | Rulebook chapters in book order. Search-excluded to avoid duplicate results. |
| Full Book section | Single-page versions of the full rulebook. Search-excluded. |
| Bestiary | Monster reference section with stat blocks and encounter building. |
| Grid card layout | Index pages transformed from markdown tables into visual card grids by `transform_indexes.py`. |
| Search exclusion | YAML front matter (`search: exclude: true`) injected into Read/Full Book pages at build time. |
| Static content overrides | Hand-authored pages in `static_content/docs/` that replace generated pages after data pull. |
| data-md-linked | Upstream repo containing all rules markdown with cross-reference links. Source of truth for content. |
| SCC | Steel Compendium Classification -- hierarchical ID system used across data repos (e.g., `mcdm.heroes.v1:abilities.fury:gouge`). |

## Glossary

| Term | Meaning |
|------|---------|
| Ancestry | A hero's species/lineage (Human, Dwarf, Dragon Knight, etc.) |
| Career | A hero's professional background granting skills and a renown ability |
| Class | A hero's combat archetype (Fury, Shadow, Tactician, etc.) with abilities gained by level |
| Complication | A backstory element adding narrative hooks |
| Condition | A status effect applied during combat (Bleeding, Dazed, Grabbed, etc.) |
| Culture | A hero's upbringing and social environment |
| Echelon | A tier of play (1st through 4th) determining power level |
| Kit | Equipment and fighting style package that modifies stats and grants a signature ability |
| Perk | A minor ability gained from skills (Crafting, Exploration, Interpersonal, etc.) |
| Power Roll | The core resolution mechanic: 2d10 + modifier with three tier outcomes |
| Roamlinks | MkDocs plugin that resolves wiki-style `[[links]]` to file paths |
| Title | A prestige reward earned at higher echelons |

## Audiences

| Audience | How they use the site |
|----------|----------------------|
| Draw Steel players | Look up abilities, conditions, and rules during sessions |
| Draw Steel GMs | Reference monster stats, encounter rules, negotiation system |
| Character builders | Browse ancestries, classes, kits, careers for hero creation |
| Project contributors | Modify site UI/UX, update build pipeline, fix content display issues |

## Feature Inventory

### Shipped

- Tabbed navigation (Browse / Read / Full Book / Bestiary)
- Search limited to Browse section only (no duplicate results)
- Grid card index pages for all Browse categories
- Custom ability card styling
- Keyboard navigation between pages
- Reading progress bar
- User-configurable font preferences (family, size, page width, compact mode)
- Dark/light theme toggle
- Sortable tables
- Mobile-responsive layout
- Print stylesheet
- Hover link previews (MkDocs Material instant preview)
- Automatic data pull and restructuring from `data-md-linked`

## Constraints and Risks

- **Content is read-only in this repo.** All rules markdown comes from `data-md-linked`. Edits to `docs/Browse/`, `docs/Read/`, `docs/Full Book/`, or `docs/Bestiary/` are overwritten by `just update`.
- **DRAW STEEL Creator License.** Site must comply with MCDM's creator license terms.
- **No versioning.** Single-branch deployment via `mkdocs gh-deploy` (no mike).
- **Link fragility.** Cross-references use relative paths with `REL_PATH_PREFIX`/`REL_PATH_SUFFIX` placeholders rewritten at build time. Upstream link format changes can break navigation.
