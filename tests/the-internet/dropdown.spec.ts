import { test, expect } from '@playwright/test';
/**
 * TC03: DropDown : Select option
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/dropdown
3. Select "option 1"
4. Validate "option 1" is selected
 */
test('select single option from dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.locator('#dropdown').selectOption({ label: 'Option 1' });
  await expect(page.locator('#dropdown')).toHaveValue('1');
  await expect(page.locator('#dropdown > option:checked')).toHaveText('Option 1');


  await page.locator('#dropdown').selectOption('Option 2');
  await page.locator('#dropdown').selectOption({ label: 'Option 2' });
  await expect(page.locator('#dropdown')).toHaveValue('2');
  await expect(page.locator('#dropdown > option:checked')).toHaveText('Option 2');
});

test('test multiple options', async ({ page }) => {
  await page.goto('https://output.jsbin.com/osebed/2');

  await page.locator('#fruits').selectOption(['apple', 'banana']);
  await expect(page.locator('#fruits > option:checked')).toHaveText(['Banana', 'Apple' ]);

  await page.locator('#fruits').selectOption([]);  //action
  await expect(page.locator('#fruits > option:checked')).toHaveText([]);  //assertion
});