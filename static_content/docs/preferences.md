---
search:
  exclude: true
---

# Preferences

Customize the look and feel of the compendium. Settings are saved in your browser.

## Fonts

<div class="prefs-grid">

<div class="pref-card">
<label for="font-large">Large Headers (H1-H2)</label>
<select id="font-large">
<option value='"Beaufort W01 Heavy", var(--md-text-font), serif'>Beaufort W01 Heavy (default)</option>
<option value='"Test Newzald", var(--md-text-font), serif'>Test Newzald</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", var(--md-text-font), sans-serif'>Inter</option>
<option value='"system-ui", var(--md-text-font), serif'>System UI</option>
</select>
</div>

<div class="pref-card">
<label for="font-small">Small Headers (H3-H6)</label>
<select id="font-small">
<option value='"Test Newzald", var(--md-text-font), serif'>Test Newzald (default)</option>
<option value='"Beaufort W01 Heavy", var(--md-text-font), serif'>Beaufort W01 Heavy</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", var(--md-text-font), sans-serif'>Inter</option>
<option value='"system-ui", var(--md-text-font), serif'>System UI</option>
</select>
</div>

<div class="pref-card">
<label for="font-text">Body Text</label>
<select id="font-text">
<option value='"BerlingskeSlab-DBd", Georgia, "Times New Roman", serif'>Berlingske Slab (default)</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif'>Inter</option>
<option value='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif'>System UI</option>
</select>
</div>

<div class="pref-card">
<label for="font-code">Code</label>
<select id="font-code">
<option value='"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>JetBrains Mono (default)</option>
<option value='"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>Fira Code</option>
<option value='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>System Monospace</option>
</select>
</div>

</div>

## Page Width

<div class="prefs-grid">

<div class="pref-card">
<label for="width-input">Max Width</label>
<input id="width-input"
       type="text"
       inputmode="decimal"
       placeholder="100%"
       pattern="^\s*(none|default|(\d+(\.\d+)?)(em|rem|px|%))\s*$"
       title="Use: 100em, 1200px, 90%, 'none', 'default'">
<span class="pref-hint">Examples: 100em, 1200px, 90%, none, default</span>
<div class="pref-actions">
  <button id="width-apply" type="button">Apply</button>
  <button id="width-reset" type="button">Reset</button>
</div>
</div>

</div>
