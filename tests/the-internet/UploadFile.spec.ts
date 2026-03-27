import {test, expect} from '@playwright/test';

test('upload a file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePath = 'tests/resources/upload/bb.txt';
    await page.setInputFiles('input[type="file"]', filePath);
    
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('bb.txt');
});

test('upload multiple files', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePaths = ['tests/resources/upload/aa.txt'];
    await page.setInputFiles('input[type="file"]', filePaths);
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('aa.txt');
});
