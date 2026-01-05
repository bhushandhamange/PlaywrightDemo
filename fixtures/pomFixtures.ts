import {test as baseTest} from '@playwright/test';
import {LandingPage} from '../tests/pages/landingPage';
import {SignInPage} from '../tests/pages/SingInPage';

type pages = {
    landingPage: LandingPage;
    signInPage: SignInPage;
};

const testPages = baseTest.extend<pages>({
    landingPage: async ({page}, use) => {
        await use (new LandingPage(page));
    },
    signInPage: async ({page}, use) => {
        await use (new SignInPage(page));
    },
});

export const test = testPages;
export const expect = testPages.expect;