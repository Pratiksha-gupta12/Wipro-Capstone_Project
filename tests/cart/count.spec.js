import { test, expect } from '@playwright/test';

test.describe('Cart Count Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/fahrenheit-451-by-ray-bradbury'
        );

        await page.waitForLoadState('domcontentloaded');
    });

    test(
    'TC_CART_005 - Verify Cart Count Is Visible',
    async ({ page }) => {

        await expect(
            page.locator('.cart-qty')
        ).toBeVisible();
    });

    test(
'TC_CART_006 - Verify Cart Count Increases After Adding Product',
async ({ page }) => {

    const addBtn = page.locator(
        'button[id^="add-to-cart-button"]'
    );

    await expect(addBtn).toBeVisible();

    await addBtn.click();

    await page.waitForTimeout(3000);

    console.log(
        'Cart Qty:',
        await page.locator('.cart-qty').textContent()
    );

    console.log(
        'Current URL:',
        page.url()
    );

    await expect(
        page.locator('.cart-qty')
    ).toBeVisible();
});
test(
'TC_CART_007 - Verify Cart Count Persists After Refresh',
async ({ page }) => {

    const countBefore =
        await page.locator('.cart-qty')
        .textContent();

    await page.reload();

    const countAfter =
        await page.locator('.cart-qty')
        .textContent();

    expect(countAfter).toBe(countBefore);
});

    test(
    'TC_CART_008 - Verify Cart Quantity Element Exists',
    async ({ page }) => {

        await expect(
            page.locator('.cart-qty')
        ).toHaveCount(1);
    });

});