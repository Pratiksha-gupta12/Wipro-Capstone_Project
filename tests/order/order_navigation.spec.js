import { test, expect } from '@playwright/test';

test.describe('Order Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
    });

    test('TC_ORDER_021 - Verify Books Navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Books' }).click();
        await expect(page).toHaveURL(/books/);
    });

    test('TC_ORDER_022 - Verify Computers Navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Computers' }).click();
        await expect(page).toHaveURL(/computers/);
    });

    test('TC_ORDER_023 - Verify Electronics Navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Electronics' }).click();
        await expect(page).toHaveURL(/electronics/);
    });

    test('TC_ORDER_024 - Verify Apparel Navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Apparel' }).click();
        await expect(page).toHaveURL(/apparel/);
    });

    test('TC_ORDER_025 - Verify Digital Downloads Navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Digital downloads' }).click();
        await expect(page).toHaveURL(/digital-downloads/);
    });

});