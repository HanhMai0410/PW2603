import { test, expect } from '@playwright/test';

//testcase = fx(Arrange, Action, Assert)

//**
// Open browser
//Navigate to https://the-internet.herokuapp.com/login
//Fill in username with tomsmith
//Fill in the password with SuperSecretPassword!
//Click on Login button
//And the home page is appear
 //*/


///For Normal:
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
  test('get by label', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

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
});