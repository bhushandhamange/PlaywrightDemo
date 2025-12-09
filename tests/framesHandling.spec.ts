import {test, expect} from '@playwright/test';

test('frames handling test', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");
    
    // const textBox = page.locator("#tinymce"); // This will throw error as the textbox is inside the frame
    const frameElement = page.frameLocator("#mce_0_ifr");
    const textBox = frameElement.locator("#tinymce");

    console.log("Before switching to frame: " + await textBox.textContent());

});

test.only('nested frames handling test', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    const topFrame = page.frameLocator("frame[name='frame-top']");
    const leftFrame = topFrame.frameLocator("frame[name='frame-left']");
    const leftText = leftFrame.locator("body"); 
    console.log("Left frame text: " + await leftText.textContent());

    const middleFrame = topFrame.frameLocator("frame[name='frame-middle']");
    const middleText = middleFrame.locator("#content"); 
    console.log("Middle frame text: " + await middleText.textContent());

    const rightFrame = topFrame.frameLocator("frame[name='frame-right']");
    const rightText = rightFrame.locator("body"); 
    console.log("Right frame text: " + await rightText.textContent());

    const bottomFrame = page.frameLocator("frame[name='frame-bottom']");
    const bottomText = bottomFrame.locator("body"); 
    console.log("Bottom frame text: " + await bottomText.textContent());
});