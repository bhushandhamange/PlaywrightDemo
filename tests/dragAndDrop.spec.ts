import {test, expect} from '@playwright/test';

test('drag and drop test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const source = page.locator("#draggable");
    const target = page.locator("#droppable");
    await source.dragTo(target);

    // Verify that the drop was successful
    const dropText = await target.textContent();
    expect(dropText).toContain("Dropped!");

    await page.waitForTimeout(5000);
});