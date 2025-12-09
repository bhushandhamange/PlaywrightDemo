import {test} from '@playwright/test';

test('login test', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.title').isVisible();
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close();

});