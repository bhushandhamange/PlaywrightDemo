import {test, expect} from '@playwright/test';
import * as loginData from './testData/loginCredentials.json';

test("test with valid credentials", async ({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
   await page.fill('input[name="username"]',loginData.validUsername);
   await page.fill('input[name="password"]',loginData.validPassword);
   await page.click('button[type="submit"]');
   await expect(page.locator('h6')).toHaveText('Dashboard');   
});

test("test with invalid credentials", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]',loginData.invalidUsername);
    await page.fill('input[name="password"]',loginData.invalidPassword);
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');   
});