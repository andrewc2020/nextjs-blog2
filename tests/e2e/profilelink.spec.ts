import {test, expect} from '@playwright/test'

test('clicking of Facilitateur in profile should return to list of services', async ({page}) =>{

    await page.goto('/profile')
    // Find an element with the text 'Glyn' and click on it
    await page.click('text=Retour')

    await expect(page).toHaveURL('/#services')

})
