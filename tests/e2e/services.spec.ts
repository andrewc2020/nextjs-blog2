import {test, expect} from '@playwright/test'


test('navigating to #services should reveal services',async ({ page }) =>{

    await page.goto('/#services')

    const locator = page.locator('.utils_hidden__ImX6l');

    await expect(locator).toBeHidden();


})