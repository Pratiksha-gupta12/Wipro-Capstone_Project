
import { test, expect } from '@playwright/test';

test.describe('Payment UI Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/'
        );
    });

    test(
    'TC_PAYMENT_021 - Verify Header Logo Visible',
    async ({ page }) => {

        await expect(
            page.locator(
                '.header-logo'
            )
        ).toBeVisible();
    });

    test(
    'TC_PAYMENT_022 - Verify Search Section Visible',
    async ({ page }) => {

        await expect(
            page.locator(
                '.search-box'
            )
        ).toBeVisible();
    });

      test(
    'TC_PAYMENT_023 - Verify Header Menu Visible',
    async ({ page }) => {

        await expect(
            page.locator('.header-menu')
        ).toBeVisible();
    });

  test(
    'TC_PAYMENT_024 - Verify Footer Section Visible',
    async ({ page }) => {

        await expect(
            page.locator('.footer')
        ).toBeVisible();
    });

    test(
    'TC_PAYMENT_025 - Verify Page Source Loaded',
    async ({ page }) => {

        const content =
            await page.content();

        expect(
            content.length
        ).toBeGreaterThan(100);
    });

});

