#!/usr/bin/env fontforge
"""Build Steel Forum, the site's OFL derivative of Forum.

Run with FontForge's Python interpreter, then compress the generated TTF with
woff2_compress. The source URL is pinned by SHA-256 so the build cannot silently
change beneath us.
"""

from __future__ import annotations

import hashlib
import os
import pathlib
import shutil
import subprocess
import tempfile
import urllib.request
import unicodedata

# FontForge honors this when writing the head table. Pinning the upstream
# creation time makes repeated builds byte-for-byte reproducible.
os.environ.setdefault("SOURCE_DATE_EPOCH", "1309425960")

import fontforge


SOURCE_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/forum/Forum-Regular.ttf"
SOURCE_SHA256 = "5c9fbe9c4ce76d0269f5088d921d57e58082fd9c28433eacb6de95baf938adf8"
LICENSE_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/forum/OFL.txt"
LICENSE_SHA256 = "1bfe7d2aca99042eabf37079152fef8abdda2c36dad454ae89b858a3cb1078c5"
ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "static_content" / "docs" / "fonts"

# Forum's sharp inscriptional details cannot all take the same expansion.
# Amounts are in the font's 1000-unit em and are intentionally conservative:
# counters stay open and the original thick/thin rhythm remains visible.
NARROW = set("IJijlft1!|[](){}")


def download(url: str, destination: pathlib.Path, expected_sha256: str) -> None:
    with urllib.request.urlopen(url) as response:
        destination.write_bytes(response.read())
    digest = hashlib.sha256(destination.read_bytes()).hexdigest()
    if digest != expected_sha256:
        raise SystemExit(f"Downloaded file checksum mismatch: {digest}")


def weight_for(glyph: fontforge.glyph) -> int:
    if glyph.unicode < 0:
        return 52
    char = chr(glyph.unicode)
    if char in NARROW:
        return 42
    category = unicodedata.category(char)
    if category.startswith("M"):
        return 32
    if category.startswith(("P", "S")):
        return 46
    if category == "Zs":
        return 0
    if category.startswith("N"):
        return 62
    if char.isupper():
        return 68
    return 62


def build_bold(source: pathlib.Path, bold_ttf: pathlib.Path) -> None:
    font = fontforge.open(str(source))
    font.encoding = "UnicodeFull"
    font.familyname = "Steel Forum"
    font.fullname = "Steel Forum Bold"
    font.fontname = "SteelForum-Bold"
    font.weight = "Bold"
    font.os2_weight = 700
    font.appendSFNTName("English (US)", "SubFamily", "Bold")
    font.appendSFNTName("English (US)", "Preferred Family", "Steel Forum")
    font.appendSFNTName("English (US)", "Preferred Styles", "Bold")
    font.appendSFNTName("English (US)", "Compatible Full", "Steel Forum Bold")
    font.appendSFNTName(
        "English (US)",
        "License",
        "This modified font is licensed under the SIL Open Font License, Version 1.1.",
    )
    font.appendSFNTName(
        "English (US)",
        "License URL",
        "https://openfontlicense.org/open-font-license-official-text/",
    )
    font.comment = (
        "Steel Forum Bold is a Steel Compendium derivative of Forum by Denis Masharov. "
        "Built from Forum Regular under the SIL Open Font License 1.1."
    )

    for glyph in font.glyphs():
        amount = weight_for(glyph)
        if not amount or not glyph.isWorthOutputting():
            continue
        old_width = glyph.width

        # Keep composites intact. Their base and mark references are corrected
        # independently (marks use a lighter expansion), avoiding overweight
        # accents while retaining Forum's compact component construction.
        if glyph.references:
            glyph.width = old_width + (10 if amount <= 46 else 18)
            continue

        glyph.changeWeight(amount, "LCG", 18, 8, "retain", 1)
        glyph.correctDirection()

        # A designed bold needs breathing room, but Forum is used uppercase with
        # explicit tracking. Grow advances much less than the outlines themselves.
        advance_gain = 10 if amount <= 46 else 18
        glyph.width = old_width + advance_gain

    font.selection.all()
    font.autoHint()
    font.generate(str(bold_ttf), flags=("opentype", "round"))
    font.close()


def compress(source: pathlib.Path, bold_ttf: pathlib.Path) -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for ttf, output_name in (
        (source, "SteelForum-Regular.woff2"),
        (bold_ttf, "SteelForum-Bold.woff2"),
    ):
        subprocess.run(["woff2_compress", str(ttf)], check=True)
        shutil.copy2(ttf.with_suffix(".woff2"), OUTPUT / output_name)


if __name__ == "__main__":
    with tempfile.TemporaryDirectory(prefix="steel-forum-") as tmp:
        build_dir = pathlib.Path(tmp)
        source = build_dir / "Forum-Regular.ttf"
        bold_ttf = build_dir / "SteelForum-Bold.ttf"
        license_file = build_dir / "OFL.txt"
        download(SOURCE_URL, source, SOURCE_SHA256)
        download(LICENSE_URL, license_file, LICENSE_SHA256)
        build_bold(source, bold_ttf)
        compress(source, bold_ttf)
        shutil.copy2(license_file, OUTPUT / "SteelForum-OFL.txt")
    print(f"Built Steel Forum webfonts in {OUTPUT}")
