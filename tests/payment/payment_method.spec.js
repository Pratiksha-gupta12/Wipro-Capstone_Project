
// import { test, expect } from '@playwright/test';

// test.describe('Payment Method Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/'
//         );
//     });

//     test(
//     'TC_PAYMENT_001 - Verify Home Page Opens',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveURL(
//                 /nopcommerce/
//             );
//     });

//     test(
//     'TC_PAYMENT_002 - Verify Header Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('.header')
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_003 - Verify Footer Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('.footer')
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_004 - Verify Search Box Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator(
//                 '#small-searchterms'
//             )
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_005 - Verify Search Button Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator(
//                 '.search-box-button'
//             )
//         ).toBeVisible();
//     });

// });




const { test } = require('@playwright/test');
const { PaymentPage } =
require('../../pages/PaymentPage');

test.describe('Payment Method Tests', () => {

    let paymentPage;

    test.beforeEach(async ({ page }) => {

        paymentPage =
            new PaymentPage(page);

        await paymentPage
            .gotoHomePage();
    });

    test('TC_PAYMENT_001 - Verify Home Page Opens',
    async () => {
        await paymentPage.page
            .waitForURL(/nopcommerce/);
    });

    test('TC_PAYMENT_002 - Verify Header Visible',
    async () => {
        await paymentPage
            .verifyHeaderVisible();
    });

    test('TC_PAYMENT_003 - Verify Footer Visible',
    async () => {
        await paymentPage
            .verifyFooterVisible();
    });

    test('TC_PAYMENT_004 - Verify Search Box Visible',
    async () => {
        await paymentPage
            .verifySearchBoxVisible();
    });

    test('TC_PAYMENT_005 - Verify Search Button Visible',
    async () => {
        await paymentPage
            .verifySearchButtonVisible();
    });

});