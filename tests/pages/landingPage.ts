import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LandingPage extends BasePage {
    readonly page: Page;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.signInButton = page.locator('text=Sign In');
    }

    async navigateToLandingPage() {
        await this.page.goto('https://react-redux.realworld.io/#/?_k=vig1co');
    }

    async clickSignIn() {
        // await this.signInButton.click();
        await this.clickElement(this.signInButton);
    }
}