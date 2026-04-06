---
status: accepted
date: 2026-04-05
---

# Index Page Grid Transformation

## Context

Upstream `_Index.md` files contain markdown tables listing items in each category (e.g., all classes, all kits). These tables are functional but dense. The Browse section needed more visual, scannable index pages.

## Options Considered

1. **Keep table format as-is**
   - Pros: No extra tooling; upstream format works directly
   - Cons: Dense tables are hard to scan; not visually appealing for a reference site

2. **Transform tables into grid card layouts at build time**
   - Pros: Visual, scannable; grouped by category when applicable; works with MkDocs Material's grid card CSS
   - Cons: Requires a custom Python script; fragile if upstream table format changes

3. **Hand-author all index pages in `static_content/`**
   - Pros: Full control over layout
   - Cons: Must update manually whenever upstream adds new items; doesn't scale

## Decision

Option 2. `scripts/transform_indexes.py` parses `_Index.md` tables, detects whether items have categories (from table columns or URL structure), and renders either flat lists or grouped lists with section headers. Output uses MkDocs Material's grid card CSS classes.

## Consequences

- **Positive:** Index pages are visually appealing and grouped logically. The transformation is automatic.
- **Tradeoff:** The script depends on the specific markdown table format in upstream `_Index.md` files. Changes to that format require updating the parser.
