import { expect, type Locator, type Page } from '@playwright/test';

export class CheckboxPage {
    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.locator('#checkboxes input').nth(0);
        this.checkbox2 = page.locator('#checkboxes input').nth(1);
    }   

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async toggleCheckbox1() {
        await this.checkbox1.click();
    }

    async toggleCheckbox2() {
        await this.checkbox2.click();
    }

    async isCheckbox1Checked() {
        return this.checkbox1.isChecked();
    }

    async isCheckbox2Checked() {
        return this.checkbox2.isChecked();
    }
    

} 