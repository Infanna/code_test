import { expect, test } from "@playwright/test";

test('Visit facebook!', async ({ page }) => {
    await page.goto('https://www.facebook.com');
    await page.getByTestId('royal_email').click();
    await page.getByTestId('royal_email').fill('mynameisfew@hotmail.com');
    await page.getByTestId('royal_pass').click();
    await page.getByTestId('royal_pass').fill('xxxxx');
    await page.getByTestId('royal_login_button').click();
    await page.getByRole('button', { name: 'คุณคิดอะไรอยู่ Patcharachart' }).click();
    await page.getByLabel('คุณคิดอะไรอยู่ Patcharachart').fill('post message by playwright');
    await page.getByLabel('โพสต์', { exact: true }).click();
    await page.pause();
});