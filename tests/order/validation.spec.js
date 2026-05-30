import { test, expect } from '@playwright/test';

test.describe('Order Validation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
    });

    test('TC_ORDER_016 - Verify URL Is Valid', async ({ page }) => {
        expect(page.url()).toContain('nopcommerce');
    });

    test('TC_ORDER_017 - Verify Body Loaded', async ({ page }) => {
        await expect(page.locator('body')).toBeVisible();
    });

    test('TC_ORDER_018 - Verify HTML Loaded', async ({ page }) => {
        await expect(page.locator('html')).toBeVisible();
    });

    test('TC_ORDER_019 - Verify Title Length', async ({ page }) => {
        expect((await page.title()).length).toBeGreaterThan(0);
    });

    test('TC_ORDER_020 - Verify Content Length', async ({ page }) => {
        expect((await page.content()).length).toBeGreaterThan(100);
    });

});