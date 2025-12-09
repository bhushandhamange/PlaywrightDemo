import {test, expect} from '@playwright/test';

test('file download test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    await page.locator("//textarea").fill("This is a sample text file for download testing.");
    await page.locator("//button[@id='generateTxt']").click();

    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("//a[@id='txtDownloadLink']").click()
    ]);

    // Save downloaded file to a specific path
    const path = await download.path();
    console.log("Downloaded file path: " + path);

    // save file to a desired location
    const savePath = './downloads/sample.txt';
    await download.saveAs(savePath);
    console.log("File saved to: " + savePath);

    //save to default downloads folder
    // await download.saveAs(download.suggestedFilename());
});
