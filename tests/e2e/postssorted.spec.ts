import {test, expect} from '@playwright/test'

test('sort posts in required order', async ({page}) =>{
    await page.goto('/#services')

    
    await expect(page.locator('.utils_lightText__eUzGY >> nth=0')).toContainText('1')
    

    
})