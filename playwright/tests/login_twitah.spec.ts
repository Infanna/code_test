import { expect, test } from "@playwright/test";
import { loginPage } from "../pages/login";
import { invalidUsers, validUser } from "../fixtures/users";


let login

test.beforeEach(({ page }) => {
    login = new loginPage(page);
})

test('login Twittah pass!', async ({ page }) => {
    await login.visit();
    await login.loginWith(validUser.credential);
    await expect(
        page.getByTestId('user-profile-display-name')
    ).toHaveText(validUser.credential.username)
});

for(const invaildUser of invalidUsers){
    test(`login Twittah by user ${invaildUser.credential.username} fail` , async () => {
        await login.visit();
        await login.shouldDisplayLoginError(invaildUser);
    });
}

test('post message pass', async ({ page }) => {
    await login.visit();
    await login.loginWith(validUser.credential);
    await login.postMessage('hello ' + validUser.displayName);
    await expect(page.getByText('hello ' + validUser.displayName).first()).toBeVisible();
})

test('logout pass', async () => {
    await login.visit();
    await login.loginWith(validUser.credential);
    await login.logout();
})

