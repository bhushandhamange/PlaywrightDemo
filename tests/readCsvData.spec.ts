import {test, expect} from '@playwright/test';

//install dependency: csv-parse using command: npm i -D csv-parse
//read data from csv file
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

//read csv file synchronously

// const records = parse(fs.readFileSync(path.join(__dirname, 'testData', 'loginCreds.csv'))).
// map(([username, password]) => ({ username, password }));

const records = parse(fs.readFileSync(path.join(__dirname, 'testData', 'loginCreds.csv')), {
    columns: true,
    skip_empty_lines: true
}) as {username: string, password: string}[];


test("test with valid credentials", async ({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
   await page.fill('input[name="username"]',records[0].username);
   await page.fill('input[name="password"]',records[0].password);
   await page.click('button[type="submit"]');
   await expect(page.locator('h6')).toHaveText('Dashboard');   
});

test("test with invalid credentials", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await page.fill('input[name="username"]',records[1].username);
    await page.fill('input[name="password"]',records[1].password);
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');   
});