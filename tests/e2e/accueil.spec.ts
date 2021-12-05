import {test, expect} from '@playwright/test'

test('a link within a post successfully delivers the page', async({page}) =>{


    await page.goto('/posts/accueildesclients')
    // Find an element with the text 'Glyn' and click on it
    await page.click('text=example')

    await expect(page).toHaveURL('/posts2/prise')
})