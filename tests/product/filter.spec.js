
import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Product Filter Tests', () => {

    let productPage;

    test.beforeEach(async ({ page }) => {

        const productPage = new ProductPage(page);

        await page.goto('https://demo.nopcommerce.com/desktops');
    });

    test(
        'TC_PRODUCT_022 - Verify Product Page Loads Successfully',
        {
            annotation: {
                type: 'Filter',
                description: 'Verify desktops product page loads successfully'
            }
        },
        async ({ page }) => {

            await expect(page).toHaveURL(/desktops/);

            await expect(page.locator('.page-title'))
                .toContainText('Desktops');
        }
    );

    test(
        'TC_PRODUCT_023 - Verify Products Are Visible',
        {
            annotation: {
                type: 'Filter',
                description: 'Verify products are visible on desktops page'
            }
        },
        async ({ page }) => {

            const products = page.locator('.product-item');

            await expect(products.first())
                .toBeVisible();
        }
    );

    test(
        'TC_PRODUCT_024 - Verify Product Count Is Greater Than Zero',
        {
            annotation: {
                type: 'Filter',
                description: 'Verify products are displayed on the page'
            }
        },
        async ({ page }) => {

            const products = page.locator('.product-item');

            const count = await products.count();

            expect(count).toBeGreaterThan(0);
        }
    );

    test(
        'TC_PRODUCT_025 - Verify Product Titles Are Visible',
        {
            annotation: {
                type: 'Filter',
                description: 'Verify product titles are displayed properly'
            }
        },
        async ({ page }) => {

            const titles = page.locator('.product-title');

            await expect(titles.first())
                .toBeVisible();
        }
    );

    test(
        'TC_PRODUCT_026 - Verify Add To Cart Button Is Visible',
        {
            annotation: {
                type: 'Filter',
                description: 'Verify Add To Cart button is visible for products'
            }
        },
        async ({ page }) => {

            const addToCartBtn = page.locator('.product-box-add-to-cart-button');

            await expect(addToCartBtn.first())
                .toBeVisible();
        }
    );

});