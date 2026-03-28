import { expect, type Locator, type Page } from '@playwright/test';
export class DownloadPage {
    readonly page: Page;
    readonly downloadLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.downloadLink = page.locator('a[href*="download"]');
    }

    async downloadFile() {
        await this.page.goto('https://the-internet.herokuapp.com/download');
        await this.downloadLink.click();
    }
}
