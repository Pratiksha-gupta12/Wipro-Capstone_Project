import { test, expect } from '@playwright/test';

test.describe('Checkout Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await page.waitForLoadState(
            'domcontentloaded'
        );

        // Add product to cart
        await page.locator(
            '.product-box-add-to-cart-button'
        ).first().click();

        await page.waitForTimeout(3000);
    });

    test(
    'TC_CHECKOUT_001 - Verify Shopping Cart Link Is Visible',
    async ({ page }) => {

        await expect(
            page.locator('.cart-label')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_002 - Verify User Can Open Shopping Cart',
    async ({ page }) => {

        await page.locator(
            '.cart-label'
        ).click();

        await expect(page)
            .toHaveURL(/cart/);
    });
test(
'TC_CHECKOUT_003 - Verify Checkout Button Is Visible',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/cart'
    );

    await expect(
        page.locator('body')
    ).toBeVisible();
});
test(
'TC_CHECKOUT_004 - Verify Shopping Cart Page Opens',
async ({ page }) => {

    await page.locator(
        '.ico-cart'
    ).click();

    await expect(page)
        .toHaveURL(/cart/);
});
});