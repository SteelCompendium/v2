# Steel Compendium v2

Improved navigation and search for the [Steel Compendium](https://steelcompendium.io) Draw Steel rules site.

## Changes from v1

- **Navigation tabs**: Browse (modular pages), Read (chapters), Full Book (single page)
- **Search exclusion**: Only Browse pages are indexed, eliminating duplicate search results
- **No mike versioning**: Single branch deployment via `mkdocs gh-deploy`

## Usage

```bash
# Pull latest data and build (without push)
just update push=false

# Pull latest data, commit, and push
just update
```

## License

The Draw Steel Compendium is an independent product published under the DRAW STEEL Creator License and is not affiliated with MCDM Productions, LLC. DRAW STEEL (c) 2025 MCDM Productions, LLC.
