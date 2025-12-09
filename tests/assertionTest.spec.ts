import {test, expect} from '@playwright/test';

test('Visible/Hidden Assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.close();
});

test("Prssed/Not Pressed Assertion",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('text=Add Element').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.locator('text=Delete').click();
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.close();
});

test('Enabled/Disabled Assertion',async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page.locator("//button[@title='Disabled button']")).toBeDisabled();
    await expect(page.locator('#home')).toBeEnabled();
    await page.close();
});

test('text match Assertion',async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page.locator('#color')).toHaveText('What is my color?');
    await expect(page.locator('#property')).toHaveAttribute('class','button is-success');
    await page.close();
});

test("URL Assertion",async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page).toHaveURL('https://letcode.in/button');
    await expect(page).toHaveURL(/.*button/);
    await page.close();
});

test('Title Assertion',async({page})=>{
    await page.goto('https://letcode.in/button');
    await expect(page).toHaveTitle('Buttons | LetCode with Koushik');
    await page.close();
});

test.only("Screenshot Assertion",async({page})=>{
    await page.goto('https://letcode.in/button');
    const button = page.locator('#home');
    await expect(button).toHaveScreenshot('home-button.png');
    await page.close();
});