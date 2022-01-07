import {test, expect} from '@playwright/test'

test('should navigate to the boat trip video', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/posts2/prise')
    // Find an element with the text 'Glyn' and click on it
    await page.click('text=video')
    // The new url should be "/profile" (baseURL is used there)
    await expect(page).toHaveURL('/bateau')
   
  })

  test('should navigate to the page about Le Conquet', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/posts/workingholiday')
    // Find an element with the text 'Glyn' and click on it
    await page.click('text=video')
    // The new url should be "/profile" (baseURL is used there)
    await expect(page).toHaveURL('/conquet')
   
  })

  test('should navigate to the boat trip video and find a carousel', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/bateau')
   
  
    // The new url should be "/profile" (baseURL is used there)
    await expect(page.locator('div.carousel')).toBeTruthy()
   
  })

  test('should navigate to the boat trip video and find a video', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('/bateau')
   
  
    // The new url should be "/profile" (baseURL is used there)
    await expect(page.locator('video:data-testid==#custom-element')).toBeTruthy()
   
  })

