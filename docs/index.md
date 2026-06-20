---
title: Home
---

# Xentis' Draw Steel Compendium

_The Draw Steel Compendium is an independent product published under the [DRAW STEEL Creator License](https://www.mcdmproductions.com/draw-steel-creator-license) and is not
affiliated with MCDM Productions, LLC. DRAW STEEL © 2025 MCDM Productions, LLC._

---

Welcome to the Steel Compendium! This site includes the full Draw Steel Rules and Monsters book organized for different reading styles.
**This is the current Steel Compendium.** It replaces the original [legacy Compendium site](https://steelcompendium.io/compendium), which is **no longer maintained**.

## How to Use This Site

Use the **tabs** at the top to choose how you want to explore the rules:

<div class="grid cards" markdown>

-   ### :material-card-search:{ .sc-crest } Browse

    ---

    Look up specific rules, abilities, classes, kits, and more. Each item has its own page -- easy to search and share. The best way to find something specific.

    [:octicons-arrow-right-24: Browse the rules](Browse/index.md)

-   ### :material-book-open-page-variant:{ .sc-crest } Read

    ---

    Read the rules organized by chapter, as they appear in each book. Good for reading through whole sections in order.

    [:octicons-arrow-right-24: Read by chapter](Read/index.md)

-   ### :material-skull:{ .sc-crest } Bestiary

    ---

    Monsters and creatures of Draw Steel. Explore statblocks and featureblocks in a convenient search-and-filter view.

    [:octicons-arrow-right-24: Open the Bestiary](Bestiary/index.md)

</div>

**Search** indexes Browse and Bestiary pages, so you get clean results without duplicates.

## Data Formats

Don't bother scraping the site! The data is already parsed and serialized to Markdown, JSON,
and YAML, and published on GitHub.

<div class="grid cards" markdown>

-   ### :material-database:{ .sc-crest } Data repo

    ---

    **:material-alert: Work in progress.** This SCC-coded data is **not yet production-ready** --
    the structure may change and it may contain errors.

    - [data-unified](https://github.com/SteelCompendium/data-unified) -- the consolidated data
      repo: every book, in every format.

    **Browse** -- `en/unified/<format>/` -- all content aggregated by type.

    **Read** -- `en/books/<book>/<format>/` -- book-faithful, source-ordered (`heroes`,
    `monsters`, `beastheart`, `summoner`).

    Formats: Markdown, SCC-linked Markdown, Markdown for the Draw Steel Elements plugin, JSON,
    and YAML (plus annotation-stripped `clean` Markdown). Languages live under the top-level
    locale folder (`en/`, …).

-   ### :material-folder-clock:{ .sc-crest } Legacy data repos

    ---

    **Deprecated.** These older repos are still available, but are superseded by the
    consolidated [data-unified](https://github.com/SteelCompendium/data-unified) repo to the
    left.

    *Per-book (now folded into `data-unified`):*

    - [data-rules](https://github.com/SteelCompendium/data-rules) -- Heroes book → `en/books/heroes/`
    - [data-bestiary](https://github.com/SteelCompendium/data-bestiary) -- Monsters book → `en/books/monsters/`

    *Unified (everything):*

    - [data-md](https://github.com/SteelCompendium/data-md) -- Markdown
    - [data-md-dse](https://github.com/SteelCompendium/data-md-dse) -- Markdown for the Draw Steel Elements Obsidian Plugin

    *Rules (Heroes book):*

    - [data-rules-md](https://github.com/SteelCompendium/data-rules-md) -- Markdown
    - [data-rules-md-dse](https://github.com/SteelCompendium/data-rules-md-dse) -- Markdown for the Draw Steel Elements Obsidian Plugin
    - [data-rules-yaml](https://github.com/SteelCompendium/data-rules-yaml) -- YAML
    - [data-rules-json](https://github.com/SteelCompendium/data-rules-json) -- JSON
    - [data-rules-xml](https://github.com/SteelCompendium/data-rules-xml) -- XML

    *Bestiary (Monsters book):*

    - [data-bestiary-md](https://github.com/SteelCompendium/data-bestiary-md) -- Markdown
    - [data-bestiary-md-dse](https://github.com/SteelCompendium/data-bestiary-md-dse) -- Markdown for the Draw Steel Elements Obsidian Plugin
    - [data-bestiary-yaml](https://github.com/SteelCompendium/data-bestiary-yaml) -- YAML
    - [data-bestiary-json](https://github.com/SteelCompendium/data-bestiary-json) -- JSON

    *Adventures* (not yet populated with data):

    - [data-adventures-md](https://github.com/SteelCompendium/data-adventures-md) -- Markdown

</div>

Please use this [form to report bugs](https://docs.google.com/forms/d/e/1FAIpQLSc6m-pZ0NLt2EArE-Tcxr-XbAPMyhu40ANHJKtyRvvwBd2LSw/viewform?usp=sharing&ouid=105036387964900154878) if you find them!

## Thanks!

Special thanks to the many, many individuals that helped find bugs and errors!  Please tell me what's broken; I can't manually verify each page.

