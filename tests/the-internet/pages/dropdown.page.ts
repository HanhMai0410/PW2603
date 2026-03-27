import { expect, type Locator, type Page } from '@playwright/test';

export class dropdownPage {
    readonly page: Page;
    readonly dropdown: Locator;
    constructor(page: Page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }
    async selectOptionByValue(value: string) {
        await this.dropdown.selectOption({ value });
    }

    async selectOptionByLabel(label: string) {
        await this.dropdown.selectOption({ label });
    }

    async selectOptionByIndex(index: number) {
        await this.dropdown.selectOption({ index });
    }

    async getSelectedOption() {
        return this.dropdown.inputValue();
    }

}