const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to about:blank
  await page.goto('about:blank');

  // ---------------------
  await context.close();
  await browser.close();
})();