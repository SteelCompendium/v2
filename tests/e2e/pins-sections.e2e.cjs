// E2E_BASE points to a built site; PLAYWRIGHT_PATH may point to playwright-core.
const assert = require('node:assert/strict');
const {chromium} = require(process.env.PLAYWRIGHT_PATH || 'playwright-core');
(async () => {
 const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/opt/brave.com/brave/brave',args:['--no-sandbox']});
 try {
  const page = await browser.newPage({viewport:{width:1280,height:1000}});
  const base = process.env.E2E_BASE || 'http://127.0.0.1:8177/';
  await page.goto(base+'pins/');
  await page.evaluate(() => localStorage.clear()); await page.reload();
  const add = async (name,path) => {
   if (!await page.locator('.sc-pins__form').isVisible()) await page.getByRole('button', {name:'Add a section', exact:true}).click();
      await page.getByLabel('Display name',{exact:true}).fill(name);
   await page.getByLabel('URL',{exact:true}).fill(base+path);
   await page.getByRole('button',{name:'Add link',exact:true}).click();
  };
  await add('Minions at my table','Read/bestiary/monster-basics/#using-minions');
  await page.locator('.sc-pins__excerpt').waitFor();
  assert.match(await page.locator('.sc-pins__excerpt').textContent(), /minion/i);
  assert.doesNotMatch(await page.locator('.sc-pins__excerpt').textContent(), /Step-by-Step Encounter Building/);
  await page.locator('.sc-pins__section summary').evaluate(el => window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 150));
  await page.waitForTimeout(300);
  await page.screenshot({path:'/tmp/sc-177-sections-desktop.png'});
  await page.setViewportSize({width:390,height:1400}); await page.waitForTimeout(500);
  await page.locator('.sc-pins__section summary').evaluate(el => window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 100));
  await page.waitForTimeout(300);
  await page.screenshot({path:'/tmp/sc-177-sections-mobile.png'});
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth<=innerWidth));
  await page.setViewportSize({width:1280,height:1000});
  await add('Encounter budget','Read/bestiary/monster-basics/#step-by-step-encounter-building');
  await page.locator('.sc-pins__section').filter({hasText:'Encounter budget'}).locator('.sc-pins__excerpt').waitFor();
  assert.ok(await page.locator('.sc-pins__section').filter({hasText:'Encounter budget'}).locator('.sc-pins__excerpt').locator('table').count()>0);
  await page.locator('summary').filter({hasText:'Minions at my table'}).click();
  await page.locator('.sc-pins__excerpt table').first().scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/sc-177-sections-tables.png'});
  await add('Quick encounters','Read/bestiary/monster-basics/#quick-encounter-building');
  await page.locator('.sc-pins__section').filter({hasText:'Quick encounters'}).locator('.sc-pins__excerpt').waitFor();
  await add('Ambusher role','scc/mcdm.monsters.v1/rule.role/ambusher/');
  await page.locator('.sc-pins__section').filter({hasText:'Ambusher role'}).locator('.sc-pins__excerpt').waitFor();
  await add('Missing heading','Read/bestiary/monster-basics/#not-a-heading');
  await page.getByText('Could not load this section.',{exact:false}).waitFor();
  // Exercise nested wrappers, exact heading boundaries, relative URLs and ID isolation.
  const result = await page.evaluate(() => {
   const doc = new DOMParser().parseFromString('<div class="md-content"><article class="md-typeset"><h2 id="start">Start</h2><p>Included</p><div><h3 id="child">Child</h3><table><tr><td>EV</td></tr></table><a href="../next/#there">Next</a><script>throw 1</script></div><h2 id="stop">Stop</h2><p>Excluded</p></article></div>','text/html');
   const part = SCPinsSections.excerpt(doc,new URL(location.origin+'/book/page/#start'),'test-');
   return {text:part.textContent, scripts:part.querySelectorAll('script').length, child:part.querySelector('h3').id, href:part.querySelector('a').href};
  });
  assert.match(result.text,/Included.*Child.*EV/); assert.doesNotMatch(result.text,/Excluded|Stop/);
  assert.equal(result.scripts,0); assert.equal(result.child,'test-child'); assert.equal(result.href,new URL('/book/next/#there',base).href);
  await page.reload();
  assert.equal(await page.locator('.sc-pins__section-fold[open]').count(),0);
  await page.getByText('Minions at my table',{exact:true}).click();
  await page.locator('.sc-pins__excerpt').waitFor();
  assert.equal(await page.locator('.sc-pins__form').count(),1);
  console.log('Section browser checks passed: minions, encounter table, quick encounters, SCC redirect, missing heading, nested boundaries, persistence, mobile.');
 } finally {await browser.close();}
})().catch(err=>{console.error(err);process.exitCode=1;});
