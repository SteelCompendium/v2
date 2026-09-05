// Build the site, serve it, then E2E_BASE=http://127.0.0.1:8177/ node this-file.
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright-core');
(async () => {
  const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || '/opt/brave.com/brave/brave', headless:true, args:['--no-sandbox']});
  try {
    const page = await browser.newPage();
    const base = process.env.E2E_BASE || 'http://127.0.0.1:8177/';
    if (process.env.BEFORE_SCRIPT) await page.route('**/javascripts/sc-pins.js', route => route.fulfill({path:process.env.BEFORE_SCRIPT, contentType:'application/javascript'}));
    await page.goto(base + 'pins/');
    if (process.env.BEFORE_SCRIPT) await page.screenshot({path:'/tmp/sc-177-before.png', fullPage:true});
    await page.unroute('**/javascripts/sc-pins.js');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const add = async (name, url) => {
      await page.getByLabel('Display name', {exact:true}).fill(name);
      await page.getByLabel('URL', {exact:true}).fill(url);
      await page.getByRole('button', {name:'Add link',exact:true}).click();
    };
    await add('Encounter notes', 'https://example.org/session#combat');
    assert.equal(await page.locator('.sc-pins__status').textContent(), 'Link added.');
    await page.reload();
    assert.equal(await page.getByRole('link', {name:'Encounter notes',exact:true}).getAttribute('href'), 'https://example.org/session#combat');
    await add('Session notes', 'https://example.org/session#combat');
    assert.equal(await page.locator('.sc-pins__list li').count(), 1);
    await add('Unsafe', 'javascript:alert(1)');
    assert.match(await page.locator('.sc-pins__status').textContent(), /Enter an http/);
    assert.equal(await page.locator('.sc-pins__list li').count(), 1);
    await add('<img src=x onerror=alert(1)>', base + 'Read/heroes/combat/#flanking');
    assert.equal(await page.locator('.sc-pins-mount img').count(), 0);
    await page.evaluate(() => {
      document.body.setAttribute('data-md-color-scheme', 'slate');
      document.querySelector('#sc-pins-name').value = 'Flanking reminder';
      document.querySelector('#sc-pins-url').value = location.origin + '/Read/heroes/combat/#flanking';
    });
    await page.getByRole('button', {name:'Add link',exact:true}).click();
    await page.screenshot({path:'/tmp/sc-177-desktop.png', fullPage:true});
    await page.setViewportSize({width:390,height:1500});
    await page.waitForTimeout(500); // Let the responsive settings drawer finish repositioning.
    await page.screenshot({path:'/tmp/sc-177-mobile.png', fullPage:false});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.evaluate(() => document.body.setAttribute('data-md-color-scheme', 'default'));
    await page.screenshot({path:'/tmp/sc-177-light.png', fullPage:false});
    // Simulate repeated Material emissions to check mount idempotence.
    await page.evaluate(() => {
      if (window.document$ && window.document$.next) { window.document$.next(document); window.document$.next(document); }
    });
    assert.equal(await page.locator('.sc-pins__form').count(), 1);
    await page.getByRole('button', {name:'Remove Session notes',exact:true}).click();
    await page.getByRole('button', {name:'Remove Flanking reminder',exact:true}).click();
    assert.equal(await page.locator('.sc-pins__list li').count(), 0);
    assert.equal(await page.locator('.sc-pins__form').count(), 1);
    await add('After removal', 'https://example.org/new');
    assert.equal(await page.locator('.sc-pins__list li').count(), 1);
    console.log('Custom-link browser checks passed; desktop, mobile and light screenshots saved in /tmp/sc-177-*.png');
  } finally { await browser.close(); }
})().catch(err => { console.error(err); process.exitCode = 1; });
