import { test, expect } from '@playwright/test';

test('Alert Handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Attach listener BEFORE clicking
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });

  await page.getByText('Click for JS Alert').click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test('Confirm Alert Handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Attach listener BEFORE clicking
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.dismiss();
    });

    await page.getByText('Click for JS Confirm').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

test.only('Prompt Alert Handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Attach listener BEFORE clicking
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept('Playwright Test');
    });
    await page.getByText('Click for JS Prompt').click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright Test');
});