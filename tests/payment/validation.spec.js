
// import { test, expect } from '@playwright/test';

// test.describe('Payment Validation Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/'
//         );
//     });

//     test(
//     'TC_PAYMENT_011 - Verify Register Link Visible',
//     async ({ page }) => {

//         await expect(
//             page.getByRole(
//                 'link',
//                 { name: /register/i }
//             )
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_012 - Verify Login Link Visible',
//     async ({ page }) => {

//         await expect(
//             page.getByRole(
//                 'link',
//                 { name: /log in/i }
//             )
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_013 - Verify Wishlist Link Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator(
//                 '.wishlist-label'
//             )
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_014 - Verify Cart Link Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator(
//                 '.cart-label'
//             )
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_015 - Verify Navigation Menu Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator(
//                 '.header-menu'
//             )
//         ).toBeVisible();
//     });

// });




const { test } = require('@playwright/test');
const { PaymentPage } =
require('../../pages/PaymentPage');

test.describe('Payment Validation Tests', () => {

    let paymentPage;

    test.beforeEach(async ({ page }) => {

        paymentPage =
            new PaymentPage(page);

        await paymentPage
            .gotoHomePage();
    });

    test('TC_PAYMENT_011 - Verify Register Link Visible',
    async () => {
        await paymentPage
            .verifyRegisterLinkVisible();
    });

    test('TC_PAYMENT_012 - Verify Login Link Visible',
    async () => {
        await paymentPage
            .verifyLoginLinkVisible();
    });

    test('TC_PAYMENT_013 - Verify Wishlist Link Visible',
    async () => {
        await paymentPage
            .verifyWishlistVisible();
    });

    test('TC_PAYMENT_014 - Verify Cart Link Visible',
    async () => {
        await paymentPage
            .verifyCartVisible();
    });

    test('TC_PAYMENT_015 - Verify Navigation Menu Visible',
    async () => {
        await paymentPage
            .verifyHeaderMenuVisible();
    });

});

