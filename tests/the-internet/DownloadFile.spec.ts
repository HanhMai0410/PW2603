import {test, expect} from './fixture/the-internetFixture';
import fs from 'fs';

test('download a file', async ({downloadPage}) => {
    await downloadPage.downloadFile();
    const [download] = await Promise.all([
        downloadPage.page.waitForEvent('download'),
        downloadPage.downloadLink.click(),
    ]);
    
    const suggestedFilename = download.suggestedFilename();
    expect(suggestedFilename).toBe('Jpeg_with_exif.jpeg');
    
    const filePath = 'tests/resources/download/' + suggestedFilename;
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
});

test('download multiple files', async ({downloadPage}) => {
    await downloadPage.downloadFile();
    const fileNames = ["aa.txt","bb.txt"];
    
   for (const fileName of fileNames) {
        const [download] = await Promise.all([
            downloadPage.page.waitForEvent('download'),
            downloadPage.downloadLink.click(),
        ]); 
        
        const suggestedFilename = download.suggestedFilename();
        expect(suggestedFilename).toBe(fileName);
        
        const filePath = 'tests/resources/download/'+suggestedFilename;
        await download.saveAs(filePath);
        expect(fs.existsSync(filePath)).toBeTruthy();
    }
});