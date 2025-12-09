import {test, expect} from '@playwright/test';

test('Radio Button Handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    const maleRadio = page.locator("//input[@value='Male']");
    const femaleRadio = page.locator("//input[@value='FeMale']");

    expect(await maleRadio.isChecked()).toBe(false);
    expect(await femaleRadio.isChecked()).toBe(false);

    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    expect(await femaleRadio.isChecked()).toBe(false);

    await femaleRadio.check();
    expect(await maleRadio.isChecked()).toBe(false);
    expect(await femaleRadio.isChecked()).toBe(true);
});