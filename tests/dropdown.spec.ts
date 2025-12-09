import {test, expect} from '@playwright/test';

test('Dropdown Handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    const skillsDropdown = page.locator("#Skills");

    await skillsDropdown.selectOption("Java");
    expect(await skillsDropdown.inputValue()).toBe("Java");

    await skillsDropdown.selectOption({label:"C++"});
    expect(await skillsDropdown.inputValue()).toBe("C++");

    await skillsDropdown.selectOption({index:3});
    expect(await skillsDropdown.inputValue()).toBe("Analytics");

    await skillsDropdown.selectOption({value:"Android"});
    expect(await skillsDropdown.inputValue()).toBe("Android");

    await page.close();
});

test('Multi-Select Dropdown Handling',async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    const multiSelectDropdown = page.locator("#cars");

    await multiSelectDropdown.selectOption(["volvo","saab"]);
    
    //get selected options
    const selectedOptions = await multiSelectDropdown.evaluate((element) => {
        return Array.from((element as HTMLSelectElement).selectedOptions).map(option => option.value);
    });
    
    expect(selectedOptions).toEqual(["volvo","saab"]);
    
    await page.close();
});


test.only('Dynamic Dropdown Handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    const countryInput = page.locator("//span[@role='combobox']");
    const countrySearchBox = page.locator("//input[@type='search']");   

    await countryInput.click();
    await countrySearchBox.fill("India");

    await page.waitForTimeout(1000); //wait for suggestions to load
    const suggestions = page.locator("//ul[@class='select2-results__options']/li");
    const count = await suggestions.count();
    
    for(let i=0;i<count;i++){
        const text = await suggestions.nth(i).textContent();
        if(text==="India"){
            await suggestions.nth(i).click();
            break;
        }
    }
    await page.close();
});