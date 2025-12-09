import {test, expect} from '@playwright/test';

test('window handling test', async ({page, context}) => {
    await page.goto("https://the-internet.herokuapp.com/windows");

    const clickHereLink = page.locator("a[href='/windows/new']");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        clickHereLink.click()
    ]);
    await newPage.waitForLoadState();
    console.log("New page URL: " + newPage.url());
    console.log("New page Title: " + await newPage.title());
    console.log("New page Text: " + await newPage.locator("h3").textContent());
});

test.only('multiple window handling test', async ({page, context}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const openMultipleWindowsButton = page.locator("#PopUp");

    const pages: any[] = [];
    context.on('page', async newPage => {
        await newPage.waitForLoadState();
        pages.push(newPage);
    });

    await openMultipleWindowsButton.click();
    await openMultipleWindowsButton.click();
    // Wait for a short duration to ensure all pages are opened
    await page.waitForTimeout(2000);

    for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        console.log(`Page ${i + 1} URL: ` + p.url());
        console.log(`Page ${i + 1} Title: ` + await p.title());
        p.close();
        console.log("--------------------------");
    }   
});