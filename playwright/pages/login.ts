import { Locator, Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";
import { creden } from "../interface/login";
import { InvalidUser, User } from "../interface/user";

export class loginPage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _loginField: Locator;
    readonly _passwordField: Locator;
    readonly _loginButton: Locator;
    readonly _errorMessageError: Locator;
    readonly _messageField: Locator;
    readonly _postButton: Locator;
    readonly _logoutButton: Locator;



    constructor(page: Page) {
        this._page = page
        this._pageUrl = `${app.baseUrl}`
        this._loginField = page.getByTestId('login-field')
        this._passwordField = page.getByTestId('password-field')
        this._loginButton = page.getByTestId('login-button')
        this._errorMessageError = page.getByTestId('error-message')
        this._messageField = page.getByTestId('message-field')
        this._postButton = page.getByTestId('post-button')
        this._logoutButton = page.getByTestId('menu-signout')
    }

    async visit() {
        this._page.goto(this._pageUrl)
    }

    async loginWith(credential: creden) {
        await this._loginField.fill(credential.username);
        await this._passwordField.fill(credential.password);
        await this._loginButton.click();
    }

    async logout() {
        await this._logoutButton.click();
        expect(this._loginField).toBeVisible();
    }

    async postMessage(message: string) {
        await this._messageField.click();
        await this._messageField.fill(message);
        await this._postButton.click();
    }

    async shouldDisplayLoginError(user: InvalidUser) {
        await this._loginField.fill(user.credential.username);
        await this._passwordField.fill(user.credential.password);
        await this._loginButton.click();

        await expect(this._errorMessageError).toHaveText(user.errorMessage);
    }

}
