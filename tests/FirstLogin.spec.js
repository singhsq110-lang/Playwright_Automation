const { test } = require('@playwright/test')


test('browserContext fixture login ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});

test('page fixture login ', async ({ page }) => {
   
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});
