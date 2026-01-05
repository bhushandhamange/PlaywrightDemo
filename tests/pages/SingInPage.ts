import {Page, Locator} from "@playwright/test";
import {BasePage} from "./basePage";

export class SignInPage extends BasePage {
    readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator; 

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.usernameInput = page.locator('input[placeholder="Email"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }
    async enterUsername(username: string) {
        // await this.usernameInput.fill(username);
        await this.fillInput(this.usernameInput, username);
    }
    async enterPassword(password: string) {
        // await this.passwordInput.fill(password);
        await this.fillInput(this.passwordInput, password);
    }
    async clickSignIn() {
        // await this.signInButton.click();
        await this.clickElement(this.signInButton);
    }

}