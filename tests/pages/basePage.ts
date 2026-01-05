import {Locator, Page} from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async fillInput(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async getElementText(locator: Locator): Promise<string> {
        return await locator.textContent() || '';
    }

    async waitForElementToBeVisible(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async waitForElementToBeHidden(locator: Locator) {
        await locator.waitFor({ state: 'hidden' });
    }

    async takeScreenshot(path: string) {
        await this.page.screenshot({ path });
    }
}