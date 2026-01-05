import {test} from '@playwright/test';

test("Login Test Case @smoke", async ({page}) => {
    console.log('This is a login test case');
});

test("Signup Test Case @sanity", async ({page}) => {
    console.log('This is a signup test case');
});

test("Profile Test Case @regression", async ({page}) => {
    console.log('This is a profile test case');
});

test("Logout Test Case @regression", async ({page}) => {
    console.log('This is a logout test case');
});