import { test } from '@playwright/test';

test.describe("Suite1" , () => {
    
    test.beforeAll(async () => {
    console.log('Database connection setup');
    // Add setup code here
    });

    test.afterAll(async () => {
    console.log('Database connection teardown');
    // Add teardown code here
    });

    test.beforeEach(async () => {
    console.log('Clearing cookies before each test');
    // Add per-test setup code here
    });

    test.afterEach(async () => {
    console.log('Catche Removal after each test');
    });

    test('Sample Test 1', async ({ page }) => {
    console.log('Executing Sample Test 1');
    // Add test code here
    });

    test('Sample Test 2', async ({ page }) => {
    console.log('Executing Sample Test 2');
    // Add test code here
    });
});



test('Sample Test 3', async ({ page }) => {
  console.log('Executing Sample Test 3');
  // Add test code here
});