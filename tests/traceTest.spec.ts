import { test, expect } from '@playwright/test';

test('test', async ({ page , context}) => {

    await context.tracing.start({ screenshots: true, snapshots: true });

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Bhushan');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Bhushan');
    await page.getByRole('button', { name: 'Login to QKart' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();

    await context.tracing.stop({ path: 'traceTest.zip' });
});