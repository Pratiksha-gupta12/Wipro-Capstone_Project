
import { test, expect } from '@playwright/test';

test.describe('Order Summary Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/cart'
        );

        await page.waitForLoadState(
            'domcontentloaded'
        );
    });

    test(
    'TC_CHECKOUT_056 - Verify Cart Page Opens',
    async ({ page }) => {

        await expect(page)
            .toHaveURL(/cart/);
    });

    test(
    'TC_CHECKOUT_057 - Verify Cart URL Contains Cart',
    async ({ page }) => {

        expect(
            page.url()
        ).toContain('cart');
    });

    test(
    'TC_CHECKOUT_058 - Verify Body Visible',
    async ({ page }) => {

        await expect(
            page.locator('body')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_059 - Verify HTML Loaded',
    async ({ page }) => {

        await expect(
            page.locator('html')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_060 - Verify Current URL Valid',
    async ({ page }) => {

        const url = page.url();

        expect(url.length)
            .toBeGreaterThan(0);
    });

});