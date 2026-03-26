import { test, expect } from '@playwright/test';

test('test fullname of max due person', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  // const tableContents =  await page.locator("#table1 tbody tr td").allTextContents();
    // //print table content
    // console.log(tableContents);

    const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
    // console.log(dueAmounts);
    //Give array  [ '$50.00', '$51.00', '$100.00', '$50.00' ]  find the index of item has max value?
    const maxDueValue = Math.max(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
    const maxDueIndex = dueAmounts.indexOf('$' + maxDueValue.toFixed(2));
    // console.log(maxDueIndex);
    const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
    const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
    // console.log(`Full name of person with max due: ${firstName} ${lastName}`);
    expect(`${firstName} ${lastName}`).toBe('Jason Doe');
});

//verify fullname of min person are ["john smith", "tim Conway"] 
test('test fullname of min due person', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();    
    const minDueValue = Math.min(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
    const minDueIndexes = dueAmounts.reduce((indexes, amount, index) => {
        if (parseFloat(amount.replace('$', '')) === minDueValue) {
            indexes.push(index);
        }        return indexes;
    }, []);
    const minDueFullNames = await Promise.all(minDueIndexes.map(async (index) => {
        const firstName = await page.locator(`#table1 tbody tr:nth-child(${index + 1}) td:nth-child(2)`).textContent();
        const lastName = await page.locator(`#table1 tbody tr:nth-child(${index + 1}) td:nth-child(1)`).textContent();
        return `${firstName} ${lastName}`;
    }));
    // console.log(`Full names of person with min due: ${minDueFullNames.join(', ')}`);
    expect(minDueFullNames).toEqual(['John Smith', 'Tim Conway']); 

});