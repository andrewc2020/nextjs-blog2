import {test, expect} from '@playwright/test'

test('tooltip should be rendered as a span with existing text', async({page})=>{
    await page.goto('/')
    const location = page.locator('text=Tarifs >> nth=0')
    await location.hover().then(() =>{
        
            expect(page.locator('.tooltip')).toBeVisible()
    
        
    })
})