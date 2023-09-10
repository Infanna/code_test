import { expect, test } from "@playwright/test";

test('Visit Twittah!', async ({ page }) => {
    await page.goto('https://twittah.web.app');
    await expect(page.getByTestId('app-name')).toBeVisible();
    await expect(page.getByTestId('app-name')).toHaveText('Twittah!')
});

test('Visit facebook!', async ({ page }) => {
    await page.goto('https://www.facebook.com');
    await expect(page.getByPlaceholder('Email address or phone number')).toBeVisible();
});
