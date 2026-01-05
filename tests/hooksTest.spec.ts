import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('Setting up resources before all tests');
    // e.g., Initialize database connection, start server, etc.
});

test.afterAll(async () => {
    console.log('Cleaning up resources after all tests');
    // e.g., Close database connection, stop server, etc.
});

test.beforeEach(async ({page}) => {
    console.log('Setting up before each test');
    // e.g., Log in, set up test data, etc.
    //login
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
});

test.afterEach(async ({page}) => {
    console.log('Tearing down after each test');
    // e.g., Log out, clear test data, etc.
    //logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
});

test('test1', async ({page}) => {
    console.log('Executing Test 1');

    //Add to cart
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack");

    //Checkout
    await page.locator("#checkout").click();

});

test('test2', async ({page}) => {
    console.log('Executing Test 2');

    //Add to cart
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack");
    
    //remove item
    await page.locator("#remove-sauce-labs-backpack").click();

});

