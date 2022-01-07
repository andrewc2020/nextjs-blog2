import {test, expect} from '@playwright/test'
 test('should navigate to the boat trip video and find a carousel', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/conquet')
   
  
    // The new url should be "/profile" (baseURL is used there)
    await expect(page.locator('div.carousel')).toBeTruthy()
   
  })