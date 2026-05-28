import { expect, test } from '@playwright/test';

test.describe('Product Search Tests', () => {

    test('TC_PRODUCT_001 - Search Existing Product', async ({ page }) => {

        const productPage = new productPage(page);

        await page.goto('https://demo.nopcommerce.com/');

        await page.searchProduct('Laptop');

        await expect(page).toHaveURL(/search/);
    });
test('TC_PRODUCT_002 - Search Non Existing Product', async ({ page }) => {

     const productPage = new productPage(page);

    await page.goto('https://demo.nopcommerce.com/');

    await page.searchProduct('abcdefxyz');

    const noResultMessage = page.locator('.no-result');

    await expect(noResultMessage)
        .toHaveText('No products were found that matched your criteria.');
});

});


