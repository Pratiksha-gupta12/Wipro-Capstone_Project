// import { test, expect } from '@playwright/test';

// test.describe('Cart Review Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demo.nopcommerce.com/cart');
//     });

//     test('TC_ORDER_006 - Verify Form Visible', async ({ page }) => {
//         await expect(page.locator('form').first()).toBeVisible();
//     });

//     test('TC_ORDER_007 - Verify Header Visible', async ({ page }) => {
//         await expect(page.locator('header')).toBeVisible();
//     });

//     test('TC_ORDER_008 - Verify Footer Visible', async ({ page }) => {
//         await expect(page.locator('footer')).toBeVisible();
//     });

//     test('TC_ORDER_009 - Verify Main Content Visible', async ({ page }) => {
//         await expect(page.locator('body')).toBeVisible();
//     });

//     test('TC_ORDER_010 - Verify Page Source Loaded', async ({ page }) => {
//         const content = await page.content();
//         expect(content.length).toBeGreaterThan(100);
//     });

// });



const { test, expect } = require('@playwright/test');
const { OrderPage } = require('../../pages/OrderPage');

test.describe('Cart Review Tests', () => {

    let orderPage;

    test.beforeEach(async ({ page }) => {
        orderPage = new OrderPage(page);
        await orderPage.gotoCartPage();
    });

    test('TC_ORDER_006 - Verify Form Visible',
    async () => {
        await orderPage.verifyFormVisible();
    });

    test('TC_ORDER_007 - Verify Header Visible',
    async () => {
        await orderPage.verifyHeaderVisible();
    });

    test('TC_ORDER_008 - Verify Footer Visible',
    async () => {
        await orderPage.verifyFooterVisible();
    });

    test('TC_ORDER_009 - Verify Main Content Visible',
    async () => {
        await orderPage.verifyBodyVisible();
    });

    test('TC_ORDER_010 - Verify Page Source Loaded',
    async () => {
        expect(
            (await orderPage.getPageContent()).length
        ).toBeGreaterThan(100);
    });

});