import { expect, type Locator, type Page } from '@playwright/test';


//facrory pattern
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string) {
    await this.page.locator("#username").fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getwelcomeMessage() {
        return this.page.locator('h4');
    }

    async getflashMessage() {
        return this.page.locator('#flash');
    }
}


        
