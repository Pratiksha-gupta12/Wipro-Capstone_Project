import { test, expect } from '@playwright/test';

test.describe('Order Summary Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/cart');
    });

    test('TC_ORDER_001 - Verify Cart Page Opens', async ({ page }) => {
        await expect(page).toHaveURL(/cart/);
    });

    test('TC_ORDER_002 - Verify Page Body Visible', async ({ page }) => {
        await expect(page.locator('body')).toBeVisible();
    });

    test('TC_ORDER_003 - Verify HTML Loaded', async ({ page }) => {
        await expect(page.locator('html')).toBeVisible();
    });

    test('TC_ORDER_004 - Verify URL Contains Cart', async ({ page }) => {
        expect(page.url()).toContain('cart');
    });

    test('TC_ORDER_005 - Verify Title Exists', async ({ page }) => {
        expect((await page.title()).length).toBeGreaterThan(0);
    });

});