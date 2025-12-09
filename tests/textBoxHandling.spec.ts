import {test} from '@playwright/test';

test('Text Box Handling',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]','Admin');
    await page.fill('input[name="password"]','admin123');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.close();
});

test('Press Sequentially method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').pressSequentially("Admin");
    await page.locator('input[name="password"]').pressSequentially("admin123");
    await page.locator('button[type="submit"]').press("Enter");
    await page.waitForLoadState('networkidle');
    await page.close();
});

test.only("Press Sequentially with Delay",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').pressSequentially("Admin",{delay:100});
    await page.locator('input[name="password"]').pressSequentially("admin123",{delay:100});
    await page.locator('button[type="submit"]').press("Enter");
    await page.waitForLoadState('networkidle');
    await page.close();
});