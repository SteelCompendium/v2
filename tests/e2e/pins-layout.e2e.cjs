// Uses a built site and overlays this checkout's JS/CSS to compare the layout.
const assert = require('node:assert/strict');
const path = require('node:path');
const {chromium} = require(process.env.PLAYWRIGHT_PATH || 'playwright-core');
(async () => {
 const browser = await chromium.launch({executablePath:'/opt/brave.com/brave/brave',args:['--no-sandbox']});
 try {
  const page = await browser.newPage({viewport:{width:1280,height:1000}});
  const base = process.env.E2E_BASE || 'http://127.0.0.1:8178/';
  await page.goto(base+'pins/');
  await page.evaluate(() => localStorage.setItem('sc-pins', JSON.stringify({v:1,items:[
   {path:'/v2/Browse/ancestry/human/',title:'Human',kind:'Ancestry',ts:1},
   {path:'/v2/Browse/condition/grabbed/',title:'Grabbed',kind:'Conditions',ts:2},
   {path:'/v2/Browse/condition/prone/',title:'Prone',kind:'Conditions',ts:3},
   {path:'/v2/Browse/kit/panther/',title:'Panther',kind:'Kits',ts:4}
  ]})));
  await page.reload();
  await page.screenshot({path:'/tmp/sc-300-before.png'});
  for (const [url,file,type] of [['**/javascripts/sc-pins.js','javascripts/sc-pins.js','application/javascript'],['**/stylesheets/steel-pins.css','stylesheets/steel-pins.css','text/css']]) {
   await page.route(url,route=>route.fulfill({path:path.resolve(__dirname,'../../docs',file),contentType:type}));
  }
  await page.reload();
  const button=page.getByRole('button',{name:'Add a section',exact:true});
  assert.equal(await page.locator('.sc-pins__form').isVisible(),false);
  assert.equal(await button.getAttribute('aria-expanded'),'false');
  assert.ok((await page.getByRole('link',{name:'Human',exact:true}).boundingBox()).y<700);
  await page.screenshot({path:'/tmp/sc-300-after.png'});
  await button.click();
  assert.equal(await page.getByLabel('Display name',{exact:true}).evaluate(el=>el===document.activeElement),true);
  await page.getByLabel('Display name',{exact:true}).fill('My notes');
  await page.getByLabel('URL',{exact:true}).fill('javascript:alert(1)');
  await page.getByRole('button',{name:'Add link',exact:true}).click();
  assert.equal(await page.locator('.sc-pins__form').isVisible(),true);
  await page.keyboard.press('Escape');
  assert.equal(await button.evaluate(el=>el===document.activeElement),true);
  assert.equal(await page.locator('.sc-pins__form').isVisible(),false);
  await button.click();
  await page.getByLabel('URL',{exact:true}).fill('https://example.org/notes');
  await page.getByRole('button',{name:'Add link',exact:true}).click();
  assert.equal(await page.locator('.sc-pins__form').isVisible(),false);
  assert.equal(await page.locator('.sc-pins__toolbar [role="status"]').textContent(),'Link added.');
  assert.equal(await page.getByRole('link',{name:'My notes',exact:true}).count(),1);
  await button.click();
  await page.getByRole('button',{name:'Cancel',exact:true}).click();
  assert.equal(await page.locator('.sc-pins__form').isVisible(),false);
  await page.setViewportSize({width:390,height:1000}); await page.waitForTimeout(500);
  await page.screenshot({path:'/tmp/sc-300-mobile.png'});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.evaluate(()=>document.body.setAttribute('data-md-color-scheme','slate'));
  await page.screenshot({path:'/tmp/sc-300-dark.png'});
  await button.click();
  await page.screenshot({path:'/tmp/sc-300-form.png'});
  await page.reload();
  assert.equal(await page.locator('.sc-pins__form').isVisible(),false);
  assert.equal(await page.locator('.sc-pins__toolbar').count(),1);
  console.log('Layout checks passed: compact board, disclosure, focus, Escape, Cancel, validation, save, reload, mobile.');
 } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
