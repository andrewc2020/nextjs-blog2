import {test, expect} from '@playwright/test'

test.describe('tooltip e2e ',() =>{

    test('tooltip should be rendered', async({page})=>{
        await page.goto('/')
    
        
        const location = page.locator("span:has-text('Working Holiday')")
        await location.focus().then(() =>{
            
            page.mouse;
            
    
            expect(page.locator('text=Working Holiday au Conquet"')).toBeTruthy()
            expect(page.locator('div#layers')).toBeTruthy()
            expect(page.locator('div#layers')).toHaveCount
            
           
    
            
        
    })

   
})




})
