const { test } = require('@playwright/test')


test('Register to the website', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('.text-reset').click();
    await page.locator('#firstName').fill('Surya');
    await page.locator('#lastName').fill('Singh');
    await page.locator('#userEmail').fill('singh.sp110@gmail.com');
    await page.locator('#userMobile').fill('7983002789');
    await page.locator('#userPassword').fill('Test@123');
    await page.locator('#confirmPassword').fill('Test@123');
    await page.locator('#login').click();


});
test.only('Login to that user', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('singh.sp110@gmail.com');
    await page.locator('#userPassword').fill('Test@123');
    await page.locator('#login').click();
    const allProductTitles = page.locator('.card-body b');
    await page.locator('.card-body b').first().waitFor();
    console.log(await allProductTitles.allTextContents());



});


