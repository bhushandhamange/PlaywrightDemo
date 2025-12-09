import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://crio-qkart-frontend-qa.vercel.app/');
//   await page.getByRole('button', { name: 'Register' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Bhushan');
//   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Bhushan');
//   await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
//   await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Bhushan');
//   await page.getByRole('textbox', { name: 'Confirm Password' }).press('Tab');
//   await page.getByRole('button', { name: 'Register Now' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Bhushan');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Bhushan');
    await page.getByRole('button', { name: 'Login to QKart' }).click();
    await page.getByRole('button', { name: 'Logout1' }).click();
  
});