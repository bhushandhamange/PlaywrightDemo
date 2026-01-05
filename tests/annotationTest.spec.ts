import {test} from '@playwright/test';

test.skip("Skipped Test Case", async ({page}) => {
    console.log('This test case is skipped');
});

test("Skip in Webkit", async ({page, browserName}) => {
    test.skip(browserName === 'webkit', 'Skipping test in Webkit browser');
    console.log('This test case runs only in non-Webkit browsers');
});

test("Regular Test Case", async ({page}) => {
    console.log('This is a regular test case');
});

test("Not yet ready test", async ({page}) => {
    test.fail();
});

test("Fail in Firefox", async ({page, browserName}) => {
    test.fail(browserName === 'firefox', 'This test is expected to fail in Firefox');
    console.log('This test case runs in all browsers but is expected to fail in Firefox');
});

test("Fix me later", async ({page}) => {
    test.fixme(true, 'This test is marked as fixme and will be skipped temporarily');
    console.log('This test case is marked as fixme');
});

test("Slow Test Case", async ({page}) => {
    test.slow();
    console.log('This is a slow test case');
});

test("Conditional Slow Test", async ({page, browserName}) => {
    if (browserName === 'chromium') {
        test.slow();
    }
    console.log('This test case is slow only in Chromium browser');
});

test.only("Exclusive Test Case", async ({page}) => {
    console.log('This is an exclusive test case and will run alone');
});