import { test, expect } from './fixture/the-internetFixture';
 test('get by role', async ({ checkboxPage }) => {
  await checkboxPage.goto();
    await checkboxPage.checkbox1.check();
    await checkboxPage.checkbox2.check();
    await expect(checkboxPage.checkbox1).toBeChecked();
    await expect(checkboxPage.checkbox2).toBeChecked();

    await expect(checkboxPage.page.getByRole('checkbox').first()).toBeChecked();
    await expect(checkboxPage.page.getByRole('checkbox').nth(1)).toBeChecked();
    await expect(checkboxPage.page.getByRole('checkbox').nth(1)).toBeChecked();

});

// import { test, expect } from '@playwright/test';

// test('verify able to check the checkbox', async ({page}) =>{
//     await page.goto('https://the-internet.herokuapp.com/checkboxes')

//     await page.getByRole('checkbox').first().check(); // accessibility role
//     await page.locator("#checkboxes input:nth-child(1)").check(); //css
//     await page.locator("//*[@id='checkboxes']/input[1]").check(); //xpath
//     await page.locator("//*[@id='checkboxes']/input[1]").isChecked(); //xpath

//     expect(await page.getByRole('checkbox').first()).toBeChecked();

//     await page.getByRole('checkbox').nth(1).check();
//     expect(await page.getByRole('checkbox').nth(1)).toBeChecked();
// });