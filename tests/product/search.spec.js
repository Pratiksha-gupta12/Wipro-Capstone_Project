import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Product Search Tests', () => {

    test('TC_PRODUCT_001 - Search Existing Product', async ({ page }) => {

        const productPage = new ProductPage(page);

        await page.goto('https://demo.nopcommerce.com/');

        await productPage.searchProduct('Laptop');

        await expect(page).toHaveURL(/search/);
    });
test('TC_PRODUCT_002 - Search Non Existing Product', async ({ page }) => {

    const productPage = new ProductPage(page);

    await page.goto('https://demo.nopcommerce.com/');

    await productPage.searchProduct('abcdefxyz');

    const noResultMessage = page.locator('.no-result');

    await expect(noResultMessage)
        .toHaveText('No products were found that matched your criteria.');
});

});


