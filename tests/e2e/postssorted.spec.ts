import {test, expect} from '@playwright/test'

test('sort posts in required order', async ({page}) =>{
    await page.goto('/#services')

    const loc = page.locator('.utils_lightText__eUzGY');

    expect(loc.innerText).toBe('1')

    
})