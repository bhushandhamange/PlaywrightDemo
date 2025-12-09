import {test, expect, Locator, Page} from '@playwright/test';

test('calendar handling test', async ({page, context}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput = page.locator("[id=datepicker]");

    const dateToSelect = "01/15/2025"; // MM/DD/YYYY format
    //await selectDateFromDatePicker(page, dateInput, dateToSelect);
    

    await dateInput.fill(dateToSelect);
    await page.waitForTimeout(2000);
});


test('calendar handling test - 2', async ({page, context}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput = page.locator("[id='txtDate']");

    const dateToSelect = "25/12/2024"; // DD/MM/YYYY format
    await selectDateFromDatePicker(page, dateInput, dateToSelect);
    await page.waitForTimeout(2000);
});


async function selectDateFromDatePicker(page: Page, dateInput: Locator, dateToSelect: string) {
    // Click on the date input to open the date picker
    await dateInput.click();
    const [day, month, year] = dateToSelect.split("/").map(Number);

    // Select year
    const yearSelector = page.locator(".ui-datepicker-year");
    await yearSelector.selectOption(year.toString());
    await page.waitForTimeout(1000);

    const monthSelector = page.locator("select.ui-datepicker-month");
    try {
        const monthValue = (month - 1).toString(); // Months are zero-indexed in the date picker
        console.log("Month Value: " + monthValue);
        await monthSelector.selectOption({ value: monthValue });
    } catch {
        const monthLabel = new Date(0, month - 1).toLocaleString('default', { month: 'short' });
        console.log("Month Label: " + monthLabel);
        await monthSelector.selectOption({ label: monthLabel });
    }
    await page.waitForTimeout(1000);

    // Select day
    const daySelector = page.locator(`.ui-datepicker-calendar td a:text-is("${day}")`);
    await daySelector.click();
}

test.only('calendar handling test - 3', async ({page, context}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //Date picker 3 
    const startDate = page.locator("#start-date");
    await startDate.fill("2024-11-20");
    const endDate = page.locator("#end-date");
    await endDate.fill("2024-12-25");

    await page.waitForTimeout(5000);
});