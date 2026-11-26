const { test, expect } = require('@playwright/test')


test('Page Title validation', async ({ browser }) => {
     const context = await browser.newContext();
    const page = await context.newPage();
    const userName= page.locator('#username');
    const password = page.locator('#password');
    const signButton = page.locator('[name="signin"]');
    const allProductName = page.locator('.card-body a');
   
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signButton.click();
    // first way to grab first method
    console.log( await allProductName.first().textContent());
    // or 
    console.log( await allProductName.nth(0).textContent());
    // grab all text contents 
    console.log(await allProductName.allTextContents());

   



});


