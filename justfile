# v2 MkDocs site build using steel-etl pipeline
#
# The steel-etl tool generates all content from annotated markdown.
# The site command maps that output into the MkDocs directory structure.

etl_dir := "../steel-etl"

# Generate content and build the MkDocs docs directory.
# Set push="true" to commit and push updates (default).
update push="true":
    #!/usr/bin/env bash
    set -euo pipefail
    v2_dir="$(pwd)"

    # 1. Run steel-etl pipeline to generate all output formats
    echo >&2 "[INFO] Running steel-etl gen..."
    cd "{{etl_dir}}"
    go run ./cmd/steel-etl gen --config pipeline.yaml
    etl_sha="$(git rev-parse --short HEAD)"
    etl_date="$(date +%Y-%m-%d)"
    cd "$v2_dir"

    # 2. Stamp the steel-etl pipeline version into mkdocs.yml extra.* fields.
    # (The legal copyright text is now static; CI fills extra.site_* at deploy.)
    yq -i ".extra.etl_sha = \"${etl_sha}\" | .extra.etl_date = \"${etl_date}\"" mkdocs.yml

    # 3. Build MkDocs docs directory from steel-etl output
    echo >&2 "[INFO] Running steel-etl site..."
    cd "{{etl_dir}}"
    go run ./cmd/steel-etl site --config "$v2_dir/site.yaml"
    cd "$v2_dir"

    # 4. Commit and push if requested
    if [ "{{push}}" == "true" ]; then
        echo >&2 "[INFO] Committing and pushing updates..."
        git add docs/*
        git commit -am "Updates from steel-etl ($etl_sha)" || true
        git push
    fi

    echo >&2 "[INFO] Done!"

# Clean generated content from docs/ (preserves static assets)
clean_docs:
    #!/usr/bin/env bash
    set -euo pipefail
    cd docs
    find . -maxdepth 1 -mindepth 1 \
      ! -name 'javascripts' \
      ! -name 'stylesheets' \
      ! -name 'Media' \
      ! -name 'index.md' \
      ! -name 'preferences.md' \
      ! -name '.nav.yml' \
      -exec rm -rf -- {} +

# SC-320: fetch the licensed Berlingske Slab web fonts from the PRIVATE
# SteelCompendium/licensed-fonts repo into docs/stylesheets/licensed-fonts/
# (gitignored — never commit them; see .repo-docs/decisions/2026-09-23-licensed-berlingske-slab.md).
# Needs read access to that repo. Without the fonts the site renders in Zilla Slab.
fonts:
    #!/usr/bin/env bash
    set -euo pipefail
    if [ -d .licensed-fonts/.git ]; then
        git -C .licensed-fonts pull -q --ff-only
    else
        git clone -q --depth 1 git@github.com:SteelCompendium/licensed-fonts.git .licensed-fonts
    fi
    # Only the .woff2 files, by name (mirrors ci.yml) — never the rest of the private repo.
    rm -rf docs/stylesheets/licensed-fonts
    mkdir -p docs/stylesheets/licensed-fonts/berlingske-slab
    cp .licensed-fonts/web/berlingske-slab/*.woff2 docs/stylesheets/licensed-fonts/berlingske-slab/
    echo >&2 "[INFO] Licensed fonts installed in docs/stylesheets/licensed-fonts/"

# Preview the site locally (fetches the licensed fonts first; falls back to Zilla Slab
# with a warning if the private repo is unreachable)
serve:
    @just fonts || echo >&2 "[WARN] licensed fonts unavailable; body text will render in Zilla Slab"
    mkdocs serve

# Build the site locally (CI builds the deployed copy; see .github/workflows/ci.yml)
build:
    @just fonts || echo >&2 "[WARN] licensed fonts unavailable; body text will render in Zilla Slab"
    mkdocs build

# SC-306: score the site search worker against a built index (run `just build` first).
# Flags pass through: --worker <path> --index <path|url> --sample N --gate
search-bench *args:
    node tests/search/bench.cjs {{args}}
