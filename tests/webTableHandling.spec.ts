import {test, expect, Locator} from '@playwright/test';

test('web table handling test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Locate the web table
    const table = page.locator("table[name='BookTable']");
    await printTable(table);

});

test.only("print all the rows and columns", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate the web table
    const table = page.locator("table[id='productTable']");
    const pages = page.locator("ul[id=pagination] li");
    const pageCount = await pages.count();

    for (let p = 0; p < pageCount; p++) {      
        await pages.nth(p).click();
        await page.waitForTimeout(1000);
        await printTable(table);
    }
});

async function printTable(table: Locator) {
    const rows = table.locator("tbody tr");
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const cells = row.locator("td");
        const cellCount = await cells.count();
        let rowData = [];
        for (let j = 0; j < cellCount; j++) {
            const cellText = await cells.nth(j).textContent();
            rowData.push(cellText);
        }
        console.log(rowData);
    }
}

test('Dynamic table handling test - only', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate the web table
    const table = page.locator("table[id='productTable']");
    const rows = table.locator("tbody tr");
    
    //select the checkbox with product name "Tablet"
    // const matchedRow = rows.filter({ hasText: 'Tablet' });
    // const checkbox = matchedRow.locator("input[type='checkbox']");
    // await checkbox.check();
    // expect(await checkbox.isChecked()).toBeTruthy();

    
    await selectProductCheckbox(rows, "Tablet");
    await selectProductCheckbox(rows, "Laptop");
    await selectProductCheckbox(rows, "Smartwatch");

    await page.waitForTimeout(3000);
});

async function selectProductCheckbox(rows: Locator, productName: string) {
    const matchedRow = rows.filter({ hasText: productName });
    const checkbox = matchedRow.locator("input[type='checkbox']");
    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();
}