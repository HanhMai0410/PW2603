import { test, expect } from './fixture/the-internetFixture';
/**
 * TC03: DropDown : Select option
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/dropdown
3. Select "option 1"
4. Validate "option 1" is selected
 */
test('select single option from dropdown', async ({ dropdownPage }) => {
  await dropdownPage.goto();

  await dropdownPage.selectOptionByLabel('Option 1');
  await expect(dropdownPage.dropdown).toHaveValue('1');
  await expect(dropdownPage.dropdown.locator('option:checked')).toHaveText('Option 1');

  await dropdownPage.selectOptionByLabel('Option 2');
  await expect(dropdownPage.dropdown).toHaveValue('2');
  await expect(dropdownPage.dropdown.locator('option:checked')).toHaveText('Option 2');
});

test('test multiple options', async ({ dropdownPage }) => {
  await dropdownPage.goto();

  await dropdownPage.selectOptionByLabel('Option 1');
  await expect(dropdownPage.dropdown).toHaveValue('1');
  await expect(dropdownPage.dropdown.locator('option:checked')).toHaveText('Option 1');

  await dropdownPage.selectOptionByLabel('Option 2');
  await expect(dropdownPage.dropdown).toHaveValue('2');
  await expect(dropdownPage.dropdown.locator('option:checked')).toHaveText('Option 2');
});