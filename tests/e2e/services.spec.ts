import {test, expect} from '@playwright/test'


test('navigating to #services should reveal services',async ({ page }) =>{

    await page.goto('/#services')

    const locator = page.locator('.utils_headingMd__3de6G');

    await expect(locator).toBeVisible();

    
})