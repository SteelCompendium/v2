update push="true":
    #!/usr/bin/env bash
    set -euo pipefail

    just clean_docs

    dir="$(mktemp -d)"
    echo >&2 "[INFO] Grabbing compendium markdown..."
    git clone git@github.com:SteelCompendium/data-md.git "$dir"
    (
        v2_dir="$(pwd)"
        cd "$dir"
        echo >&2 "[INFO] Copying compendium markdown (data-md)..."

        # Copy all content into a temp staging area first
        staging="$(mktemp -d)"
        cp -R * "$staging"

        # Clean out repo metadata from staging
        rm -rf "$staging/.github" "$staging/LICENSE" "$staging/README.md" || true

        # --- Restructure into tabbed layout ---

        # Browse: modular pages (everything under Rules/ except Chapters and full book files)
        echo >&2 "[INFO] Setting up Browse section..."
        mkdir -p "${v2_dir}/docs/Browse"
        if [ -d "$staging/Rules" ]; then
            # Copy all Rules subdirs except Chapters into Browse
            for subdir in "$staging/Rules"/*/; do
                dirname="$(basename "$subdir")"
                if [ "$dirname" != "Chapters" ]; then
                    cp -R "$subdir" "${v2_dir}/docs/Browse/$dirname"
                fi
            done
        fi

        # Read: chapters in book order
        echo >&2 "[INFO] Setting up Read section..."
        mkdir -p "${v2_dir}/docs/Read"
        if [ -d "$staging/Rules/Chapters" ]; then
            cp -R "$staging/Rules/Chapters"/* "${v2_dir}/docs/Read/"
        fi

        # Full Book: single-page versions
        echo >&2 "[INFO] Setting up Full Book section..."
        mkdir -p "${v2_dir}/docs/Full Book"
        for f in "$staging/Rules/Draw Steel Heroes"*.md; do
            [ -f "$f" ] && cp "$f" "${v2_dir}/docs/Full Book/"
        done

        # Bestiary
        if [ -d "$staging/Bestiary" ]; then
            cp -R "$staging/Bestiary" "${v2_dir}/docs/Bestiary"
        fi

        # Adventures (skipped -- no adventures planned for release)

        # --- Fix index links ---
        echo >&2 "[INFO] Fixing index links..."
        find "${v2_dir}/docs" -type f \( -name '_Index.md' -o -name 'Index.md' \) -print0 |
        while IFS= read -r -d '' f; do
            sed -i -E 's|\]\((.+)\)|](../\1)|g' "$f"
            sed -i -E 's|File Name|File Name   |g' "$f"
            sed -i -E 's/^\| (\-+)/| \1---/g' "$f"
        done

        # --- Inject search exclusion front matter ---
        echo >&2 "[INFO] Injecting search exclusion for Read and Full Book..."

        for section in "Read" "Full Book"; do
            find "${v2_dir}/docs/$section" -type f -name '*.md' -print0 |
            while IFS= read -r -d '' f; do
                if head -1 "$f" | grep -q '^---$'; then
                    # File already has front matter -- inject search exclude after opening ---
                    sed -i '/^---$/a\search:\n  exclude: true' "$f"
                    # Only patch the first front matter block (sed already does first match)
                else
                    # No front matter -- prepend it
                    tmp="$(mktemp)"
                    printf '%s\n' '---' 'search:' '  exclude: true' '---' '' | cat - "$f" > "$tmp"
                    mv "$tmp" "$f"
                fi
            done
        done
        echo >&2 "[INFO] Search exclusion applied."

        # --- Add .nav.yml for tab title overrides and sorting ---
        printf '%s\n' 'nav:' '  - index.md' '  - glob: "*"' '    sort:' '      type: natural' '      by: title' > "${v2_dir}/docs/Browse/.nav.yml"
        printf '%s\n' 'title: Rulebook Chapters' 'sort:' '  type: natural' '  by: title' > "${v2_dir}/docs/Read/.nav.yml"
        printf '%s\n' 'title: Full Rulebook' > "${v2_dir}/docs/Full Book/.nav.yml"

        # Move static content overrides over (these take precedence)
        cp -R "${v2_dir}/static_content/docs" "${v2_dir}"

        sha="$(git rev-parse --short HEAD)"
        if [ "{{push}}" == "true" ]; then
            echo >&2 "[INFO] Committing and pushing updates..."
            cd "$v2_dir"
            git add docs/*
            git commit -am "Updates from compendium ($sha)"
            git push
        fi
    )
    echo >&2 "[INFO] Done!"

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
