import {test, expect} from '@playwright/test'

test('tooltip should be rendered as a span with existing text', async({page})=>{
    await page.goto('/')
    const location = page.locator("text=Tarifs6 >> a")
    await location.hover().then(() =>{
        
        
            expect(page.locator('.tooltip')).toHaveText("tooltip")
    
        
    
})})