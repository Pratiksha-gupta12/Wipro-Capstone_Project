// import { test, expect } from '@playwright/test';

// test.describe('Order Summary Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demo.nopcommerce.com/cart');
//     });

//     test('TC_ORDER_001 - Verify Cart Page Opens', async ({ page }) => {
//         await expect(page).toHaveURL(/cart/);
//     });

//     test('TC_ORDER_002 - Verify Page Body Visible', async ({ page }) => {
//         await expect(page.locator('body')).toBeVisible();
//     });

//     test('TC_ORDER_003 - Verify HTML Loaded', async ({ page }) => {
//         await expect(page.locator('html')).toBeVisible();
//     });

//     test('TC_ORDER_004 - Verify URL Contains Cart', async ({ page }) => {
//         expect(page.url()).toContain('cart');
//     });

//     test('TC_ORDER_005 - Verify Title Exists', async ({ page }) => {
//         expect((await page.title()).length).toBeGreaterThan(0);
//     });

// });


const { test, expect } = require('@playwright/test');
const { OrderPage } = require('../../pages/OrderPage');

test.describe('Order Summary Tests', () => {

    let orderPage;

    test.beforeEach(async ({ page }) => {
        orderPage = new OrderPage(page);
        await orderPage.gotoCartPage();
    });

    test('TC_ORDER_001 - Verify Cart Page Opens',
    async () => {
        await orderPage.verifyCartUrl();
    });

    test('TC_ORDER_002 - Verify Page Body Visible',
    async () => {
        await orderPage.verifyBodyVisible();
    });

    test('TC_ORDER_003 - Verify HTML Loaded',
    async () => {
        await orderPage.verifyHtmlVisible();
    });

    test('TC_ORDER_004 - Verify URL Contains Cart',
    async () => {
        expect(
            orderPage.getCurrentUrl()
        ).toContain('cart');
    });

    test('TC_ORDER_005 - Verify Title Exists',
    async () => {
        expect(
            (await orderPage.getPageTitle()).length
        ).toBeGreaterThan(0);
    });

});