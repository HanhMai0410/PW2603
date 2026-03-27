// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.vietnamairlines.com/vn/vi//');
//   await page.addLocatorHandler(
//     page.getByRole('button', { name: 'Chấp thuận tất cả Cookie' }),
//     async () => {
//       await page.getByRole('button', { name: 'Chấp thuận tất cả Cookie' }).click();
//     }
//   );
//   await page.getByRole('button', { name: 'Mua vé', exact: true }).click();
//   await page.getByRole('button', { name: 'Chọn điểm đi' }).click();
//   await page.getByText('Tp. Hồ Chí Minh', { exact: true }).click();
//   await page.getByRole('button', { name: 'Chọn điểm đến' }).click();
//   await page.locator('[id="_r_4_"] >> text=Hà Nội (HAN)').click();
//   await expect(page.getByLabel('Chọn điểm đi')).toContainText('SGN');
//   await expect(page.getByLabel('Chọn điểm đến')).toContainText('HAN');
//   await expect(page.locator('#datePickerSection')).toContainText('Ngày đi - Ngày về');
//   await expect(page.locator('#booking-date-trigger-0')).toContainText('27/03/2026 - 31/03/2026');
  
// });