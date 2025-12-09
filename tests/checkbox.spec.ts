import {test, expect} from '@playwright/test';

test('Checkbox Handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    const cricketCheckbox = page.locator("//input[@value='Cricket']");
    const moviesCheckbox = page.locator("//input[@value='Movies']");
    const hockeyCheckbox = page.locator("//input[@value='Hockey']");

    expect(await cricketCheckbox.isChecked()).toBe(false);
    expect(await moviesCheckbox.isChecked()).toBe(false);
    expect(await hockeyCheckbox.isChecked()).toBe(false);

    await cricketCheckbox.check();
    expect(await cricketCheckbox.isChecked()).toBe(true);
    expect(await moviesCheckbox.isChecked()).toBe(false);
    expect(await hockeyCheckbox.isChecked()).toBe(false);

    await moviesCheckbox.check();
    expect(await cricketCheckbox.isChecked()).toBe(true);
    expect(await moviesCheckbox.isChecked()).toBe(true);
    expect(await hockeyCheckbox.isChecked()).toBe(false);

    await hockeyCheckbox.check();
    expect(await cricketCheckbox.isChecked()).toBe(true);
    expect(await moviesCheckbox.isChecked()).toBe(true);
    expect(await hockeyCheckbox.isChecked()).toBe(true);

    await moviesCheckbox.uncheck();
    expect(await cricketCheckbox.isChecked()).toBe(true);
    expect(await moviesCheckbox.isChecked()).toBe(false);
    expect(await hockeyCheckbox.isChecked()).toBe(true);
});