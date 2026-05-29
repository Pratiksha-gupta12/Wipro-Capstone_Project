import { test, expect } from '@playwright/test';

test.describe('Wishlist Service Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await page.waitForLoadState(
            'domcontentloaded'
        );
    });


    test(
'TC_WISHLIST_001 - Add Product To Wishlist',
async ({ page }) => {

    await page.locator(
        '.add-to-wishlist-button'
    ).first().click();

    await page.waitForTimeout(3000);

    await expect(
        page.locator('.wishlist-qty')
    ).toBeVisible();
});


test(
'TC_WISHLIST_002 - Verify Wishlist Count Updates',
async ({ page }) => {

    const wishlistQty =
        page.locator('.wishlist-qty');

    await expect(
        wishlistQty
    ).toBeVisible();

    console.log(
        await wishlistQty.textContent()
    );
});

    test(
    'TC_WISHLIST_003 - Open Wishlist Page',
    async ({ page }) => {

        await page.locator(
            '.wishlist-label'
        ).click();

        await expect(page)
            .toHaveURL(/wishlist/);
    });

test(
'TC_WISHLIST_004 - Verify Product Appears In Wishlist',
async ({ page }) => {

    await page.locator(
        '.add-to-wishlist-button'
    ).first().click();

    await page.waitForTimeout(3000);

    await page.locator(
        '.wishlist-label'
    ).click();

    await expect(
        page
    ).toHaveURL(/wishlist/);
}); 



test(
'TC_WISHLIST_005 - Verify Wishlist Link Is Clickable',
async ({ page }) => {

    const wishlistLink =
        page.locator('.wishlist-label');

    await expect(
        wishlistLink
    ).toBeVisible();

    await wishlistLink.click();

    await expect(page)
        .toHaveURL(/wishlist/);
});


    test(
'TC_WISHLIST_006 - Verify Wishlist Page Title',
async ({ page }) => {

    await page.locator(
        '.wishlist-label'
    ).click();

    await expect(
        page.locator('.page-title h1')
    ).toContainText(
        'Wishlist'
    );
});

});