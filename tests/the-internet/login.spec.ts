// import { test, expect } from '@playwright/test';
// import { LoginPage } from './pages/login.page';

import {test , expect} from '../the-internet/fixture/the-internetFixture';

test('login with valid credentials', async ({ loginPage}) => {

    //arrange
    await loginPage.goto();
    //action
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    //assertion
    await expect(await loginPage.getflashMessage()).toContainText('You logged into a secure area! ×');
    await expect(await loginPage.getwelcomeMessage()).toContainText('Welcome to the Secure Area. When you are done click logout below.');
}); 

test('login with invalid credentials', async ({ page }) => {
  //arrange
    await page.goto('https://the-internet.herokuapp.com/login');
    //action
    await page.getByRole('textbox', { name: 'Username' }).fill('invalidUser');
    await page.getByRole('textbox', { name: 'Password' }).fill('invalidPassword');
    await page.getByRole('button', { name: 'Login' }).click();

    //assertion
    await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

// /// For Normal:
// test('test', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.locator('#username').fill('tomsmith');
//   await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
// });

/// for getbylable:
  // test('get by label', async ({ page }) => {
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

/// for LOCATOR:
  // test('Locator', async ({ page }) => {
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.locator('input[name="username"]').fill('tomsmith');
  // await page.locator('input#password').fill('SuperSecretPassword!');
  // await page.locator('button[type="submit"]').click();

///for xpath:
// test('locator by xpath', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.locator('//input[@name="username"]').fill('tomsmith');
//   await page.locator('//input[@id="password"]').fill('SuperSecretPassword!');
//   await page.locator('//button[@type="submit"]').click();
// });