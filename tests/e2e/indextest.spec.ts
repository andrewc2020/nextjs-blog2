import {test, expect} from '@playwright/test'


test('list of services should be hidden until services is clicked', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
    const locator = page.locator('#services');
    await expect(locator).toBeHidden();
   
    await page.click('text=services')

    

    await expect(locator).toBeVisible();
    // The new page should contain an h1 with "Profil"
    // Find an element with the text 'Glyn' and click on it
    
    
  
  })