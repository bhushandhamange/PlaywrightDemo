import {test} from '@playwright/test';

test('locators test', async ({page}) => {
  
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    // await page.locator('id=user-name').fill('standard_user');
    // await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});