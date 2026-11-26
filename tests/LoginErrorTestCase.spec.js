const { test, expect } = require('@playwright/test')


test('Page Title validation', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('[name="signin"]').click();
    console.log(await page.locator('[style*=block]').textContent());
    await expect(page.locator('[style*=block]')).toContainText('Empty')



});


