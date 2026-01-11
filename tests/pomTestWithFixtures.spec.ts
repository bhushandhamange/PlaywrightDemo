import { test, expect } from "../fixtures/pomFixtures";

test.describe("Page Object Model Test Suite with Fixtures", () => {

    test("Test Sign In Functionality using POM with Fixtures", async ({ landingPage, signInPage }) => {
        await landingPage.navigateToLandingPage();
        await landingPage.clickSignIn();
        await signInPage.enterUsername("test@example.com");
        await signInPage.enterPassword("securePassword");
        await signInPage.clickSignIn();
    });
});