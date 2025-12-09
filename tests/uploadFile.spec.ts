import {test, expect} from '@playwright/test';

test('Upload single file test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const uploadInput = page.locator("#singleFileInput");

    // Upload file
    const filePath = './downloads/sample.txt';
    await uploadInput.setInputFiles(filePath);
    await page.getByText('Upload Single File').click();

    // Verify upload success message
    const successMessage = page.locator("//p[@id='singleFileStatus']");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('sample.txt');

    await page.waitForTimeout(5000);

});

test.only('Upload multiple files test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const uploadInput = page.locator("#multipleFilesInput");

    // Upload multiple files
    const filePaths = ['./downloads/sample.txt', './downloads/info.txt'];
    await uploadInput.setInputFiles(filePaths);
    await page.getByText('Upload Multiple Files').click();

    // Verify upload success message
    const successMessage = page.locator("//p[@id='multipleFilesStatus']");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('sample.txt');
    await expect(successMessage).toContainText('info.txt');

    await page.waitForTimeout(5000);
});