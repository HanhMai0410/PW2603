import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxPage } from '../pages/checkbox.page';
import { dropdownPage } from '../pages/dropdown.page';
import { TablePage } from '../pages/table.page';


type TheInternetFixtures = {
    loginPage: LoginPage;
    checkboxPage: CheckboxPage;
    dropdownPage: dropdownPage;
    tablePage: TablePage;
}

export const test = base.extend<TheInternetFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxPage: async ({ page }, use) => {
        const checkboxPage = new CheckboxPage(page);
        await use(checkboxPage);
    },
    dropdownPage: async ({ page }, use) => {
        const dropdown = new dropdownPage(page);
        await use(dropdown);
    },
    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    }
    
});

export { expect } from '@playwright/test';