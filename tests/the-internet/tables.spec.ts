import {test , expect} from '../the-internet/fixture/the-internetFixture';

test.describe('table1 tests', () => {
    test.beforeEach(async ({ tablePage }) => {
        await tablePage.goto();
        await tablePage.getTable1Data();
    });

    test('verify fullname of max due person', async ({ tablePage }) => {
        expect(await tablePage.getFullNameOfMaxDuePerson()).toBe('Jason Doe');
    });

    test('verify min due person full name', async ({ tablePage }) => {
        expect(await tablePage.getFullNamesOfMinDuePersons()).toEqual([ 'John Smith','Tim Conway']);
    }); 
});


// import {test,expect} from '@playwright/test'

// test.describe('table1 tests', () => {
//     let tableData: { firstName: string; lastName: string; due: string }[];

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://the-internet.herokuapp.com/tables');
//         const table = await page.locator('#table1');
//         const rows = await table.locator('tbody tr');

//         tableData = await rows.evaluateAll((rows) => {
//             return rows.map((row) => {
//                 const cells = row.querySelectorAll('td');
//                 return {
//                     firstName: cells[1].innerText,
//                     lastName: cells[0].innerText,       
//                     due: cells[3].innerText.replace('$', ''),
//                 };
//             });
//         });
//     });

//     test('verify fullname of max due person', async () => {
//         // find the max due value
//         tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
//         const maxDueValue = tableData[0].due;
//         const maxDuePerson = tableData.find(person => person.due === maxDueValue);
//         const firstName = maxDuePerson?.firstName;
//         const lastName = maxDuePerson?.lastName;    
//         expect(`${firstName} ${lastName}`).toBe('Jason Doe');
//     });

//     test('verify min due person full name', async () => {
//         // find the min due value
//         tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//         const minDueValue = tableData[0].due;
//         const minDuePersons = tableData.filter(person => person.due === minDueValue);
//         const fullNames = minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//         expect(fullNames).toEqual([ 'John Smith','Tim Conway']);
//     }); 
// });

// //verify fullname of min person are ["john smith", "tim Conway"] -> theo hướng array, vì có thể có nhiều người có due nhỏ nhất nên sẽ trả về 1 array chứa fullname của những người đó. Sau đó validate array này bằng cách so sánh với array mong đợi.
// test('verify min due person full name', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/tables');
//     const table = await page.locator('#table1');
//     const rows = await table.locator('tbody tr');

//     const tableData = await rows.evaluateAll((rows) => {
//         return rows.map((row) => {
//             const cells = row.querySelectorAll('td');
//             return {
//                 firstName: cells[0].innerText,
//                 lastName: cells[1].innerText,       
//                 due: cells[3].innerText.replace('$', ''),
//             };
//         });
//     });
//     console.log(tableData);
//     // find the min due value
//     tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//     const minDueValue = tableData[0].due;
//     const minDuePersons = tableData.filter(person => person.due === minDueValue);
//     const fullNames = minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//     expect(fullNames).toEqual(['John Smith', 'Tim Conway']);
//    })
  
// //verify fullname of max person are ["john smith", "tim Conway"]
//    test('verify max due person full name', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/tables');
//     const table = await page.locator('#table1');
//     const rows = await table.locator('tbody tr');

//     const tableData = await rows.evaluateAll((rows) => {
//         return rows.map((row) => {
//             const cells = row.querySelectorAll('td');
//             return {
//                 firstName: cells[0].innerText,
//                 lastName: cells[1].innerText,       
//                 due: cells[3].innerText.replace('$', ''),
//             };
//         });
//     });
//     console.log(tableData);
//     // find the max due value
//     tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
//     const maxDueValue = tableData[0].due;   
//     const maxDuePersons = tableData.filter(person => person.due === maxDueValue);
//     const fullNames = maxDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//     expect(fullNames).toEqual(['Jason Doe']);
//    })

// test('test fullname of max due person', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/tables');

//   // const tableContents =  await page.locator("#table1 tbody tr td").allTextContents();
//     // //print table content
//     // console.log(tableContents);

//     const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
//     // console.log(dueAmounts);
//     //Give array  [ '$50.00', '$51.00', '$100.00', '$50.00' ]  find the index of item has max value?
//     const maxDueValue = Math.max(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
//     const maxDueIndex = dueAmounts.indexOf('$' + maxDueValue.toFixed(2));
//     // console.log(maxDueIndex);
//     const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
//     const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
//     // console.log(`Full name of person with max due: ${firstName} ${lastName}`);
//     expect(`${firstName} ${lastName}`).toBe('Jason Doe');
// });

// //verify fullname of min person are ["john smith", "tim Conway"] -> theo hướng array, vì có thể có nhiều người có due nhỏ nhất nên sẽ trả về 1 array chứa fullname của những người đó. Sau đó validate array này bằng cách so sánh với array mong đợi.
// test('test fullname of min due person', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/tables');

//   const rows = await page.locator('#table1 tbody tr').all();

//   const tableData: string[][] = [];

//   for (const row of rows) {
//     const cells = await row.locator('td').allTextContents();
//     tableData.push(cells);
//   }

//   const dues = tableData.map(row => Number(row[3].replace('$', '')));
//   const minDue = Math.min(...dues);

//   const minDueFullNames = tableData
//     .filter(row => Number(row[3].replace('$', '')) === minDue)
//     .map(row => `${row[1]} ${row[0]}`);

//   expect(minDueFullNames).toEqual(['John Smith', 'Tim Conway']);
// });

//code MIN of roomate:
// test('TC05: Web Table - Validate smallest due person', async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/tables');
//     const rows = await page.locator('#table1 tbody tr').all();
//     const tableData: string[][] = [];

//     // build 2D array
//     for (const row of rows) {
//       const cells = await row.locator('td').allTextContents();
//       tableData.push(cells);
//     }  
//     // lấy danh sách due
//     const dues = tableData.map(row => Number(row[3].replace('$', '')));
  
//     // tìm giá trị nhỏ nhất
//     const minDue = Math.min(...dues);
  
//     // lấy tất cả person có due = min
//     const personsWithMinDue = tableData
//       .filter(row => Number(row[3].replace('$', '')) === minDue)
//       .map(row => `${row[1]} ${row[0]}`);
  
//     console.log(personsWithMinDue);
  
//     // validate 2 người có due nhỏ nhất
//     expect(personsWithMinDue).toStrictEqual(['John Smith','Tim Conway']);
//     // expect(personsWithMinDue).toContain('Tim Conway');
// });



//array, list: map, reduce, filter, find