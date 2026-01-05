import {test} from '@playwright/test';

const data = [
    {username: 'Admin', password: 'admin123'},
    {username: 'Admin123', password: 'admin'},
];

// data.forEach(({username, password})=>{
//     test(`Parameterize Test with username: ${username} and password: ${password}`,async({page})=>{
//         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
//         await page.fill('input[name="username"]',username);
//         await page.fill('input[name="password"]',password);
//     });
// });


data.forEach(dataSet=>{
    test(`Parameterize Test with username: ${dataSet.username} and password: ${dataSet.password}`,async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
        await page.fill('input[name="username"]',dataSet.username);
        await page.fill('input[name="password"]',dataSet.password);
    });
});