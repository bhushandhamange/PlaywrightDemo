import {test, expect} from '@playwright/test';

test('my first test', async ({page}) => {
    await page.goto("https://google.com");
    //expect page title to be "Google"
    await expect(page).toHaveTitle("Google");
});