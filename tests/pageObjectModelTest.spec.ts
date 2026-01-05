import {test, expect} from '@playwright/test';
import { LandingPage } from './pages/landingPage';
import { SignInPage } from './pages/SingInPage';

test.describe("Page Object Model Test Suite", ()=>{

    test("Test Sign In Functionality using POM", async ({page})=>{
        const landingPage = new LandingPage(page);
        await landingPage.navigateToLandingPage();
        await landingPage.clickSignIn();
        const signInPage = new SignInPage(page);
        await signInPage.enterUsername("testuser@example.com");
        await signInPage.enterPassword("password123");
        await signInPage.clickSignIn();
        await page.close();
    });
});