import {test,expect} from '@playwright/test';

test('verify broken image', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');

    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    let brokenImages = 0;

    for (let i = 0; i < count; i++) {
        const image = images.nth(i);
        const imgSrc = await image.getAttribute('src');
        expect(imgSrc).toBeTruthy();

        const imgUrl = new URL(imgSrc!, page.url()).toString();
        const res = await page.request.get(imgUrl);

        console.log('Image src:', imgSrc, 'status', res.status());

        if (res.status() !== 200) {
            brokenImages += 1;
        }
    }

    expect(brokenImages).toBeGreaterThan(0);
});
