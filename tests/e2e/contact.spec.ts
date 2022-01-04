import {test, expect} from '@playwright/test'

test('should navigate to the contact page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/')
    // Find an element with the text 'Glyn' and click on it
    await page.click('text=Contact')
    // The new url should be "/contact" (baseURL is used there)
    await expect(page).toHaveURL('/contact')
    // The new page should contain an h1 with "Profil"
    await expect(page.locator('h1')).toContainText('Glyn')
  })
