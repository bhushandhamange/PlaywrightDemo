import {test} from '@playwright/test';

test('Screenshot Handling',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]','Admin');
    await page.fill('input[name="password"]','admin123');
    // await page.screenshot({path:'screenshots/loginPage.png',fullPage:true});
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    // await page.screenshot({path:'screenshots/homePage.png',fullPage:true});
});