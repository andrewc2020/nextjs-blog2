import {test, expect} from '@playwright/test'

test('tooltip should be rendered', async({page})=>{
    await page.goto('/')
    const location = page.locator("text=Tarifs6 >> a")
    await location.focus().then(() =>{
        
        page.mouse;
        

        expect(page.locator('text="I\'m a tooltip!"')).toBeTruthy()
            
    
        
    
})})