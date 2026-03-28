import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxPage } from '../pages/checkbox.page';
import { DropdownPage } from '../pages/dropdown.page';
import { TablePage } from '../pages/table.page';
import { DownloadPage } from '../pages/download.page';    

type TheInternetFixtures = {
    loginPage: LoginPage;
    checkboxPage: CheckboxPage;
    dropdownPage: DropdownPage;
    tablePage: TablePage;
    downloadPage: DownloadPage;
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
        const dropdown = new DropdownPage(page);
        await use(dropdown);
    },
    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    },

    downloadPage: async ({ page }, use) => {
        const downloadPage = new DownloadPage(page);
        await use(downloadPage);
    },   
    
});

export { expect } from '@playwright/test';