import {test} from '@playwright/test';

test('Video Handling 1',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]','Admin');
    await page.fill('input[name="password2"]','admin123');
   
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
});

test('Video Handling 2',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]','Admin');
    await page.fill('input[name="password"]','admin123');
    
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    
});