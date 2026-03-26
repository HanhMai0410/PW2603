const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.vietnamairlines.com/vn/vi/home', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'c:/Users/HanhMyLienMai/PW2603/vn_home.png', fullPage: true });
  console.log('screenshot done');
  const body = await page.content();
  console.log('content length', body.length);
  await browser.close();
})();