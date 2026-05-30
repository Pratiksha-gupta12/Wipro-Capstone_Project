
import { test, expect } from '@playwright/test';

test.describe('Payment Method Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/'
        );
    });

    test(
    'TC_PAYMENT_001 - Verify Home Page Opens',
    async ({ page }) => {

        await expect(page)
            .toHaveURL(
                /nopcommerce/
            );
    });

    test(
    'TC_PAYMENT_002 - Verify Header Visible',
    async ({ page }) => {

        await expect(
            page.locator('.header')
        ).toBeVisible();
    });

    test(
    'TC_PAYMENT_003 - Verify Footer Visible',
    async ({ page }) => {

        await expect(
            page.locator('.footer')
        ).toBeVisible();
    });

    test(
    'TC_PAYMENT_004 - Verify Search Box Visible',
    async ({ page }) => {

        await expect(
            page.locator(
                '#small-searchterms'
            )
        ).toBeVisible();
    });

    test(
    'TC_PAYMENT_005 - Verify Search Button Visible',
    async ({ page }) => {

        await expect(
            page.locator(
                '.search-box-button'
            )
        ).toBeVisible();
    });

});

