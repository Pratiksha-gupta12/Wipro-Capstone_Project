
// import { test, expect } from '@playwright/test';

// test.describe('Payment Information Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/'
//         );
//     });

//     test(
//     'TC_PAYMENT_006 - Verify Body Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('body')
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_007 - Verify HTML Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('html')
//         ).toBeVisible();
//     });

//     test(
//     'TC_PAYMENT_008 - Verify Page Title Exists',
//     async ({ page }) => {

//         expect(
//             (await page.title()).length
//         ).toBeGreaterThan(0);
//     });

//     test(
//     'TC_PAYMENT_009 - Verify Current URL Valid',
//     async ({ page }) => {

//         expect(
//             page.url()
//         ).toContain(
//             'nopcommerce'
//         );
//     });

//     test(
//     'TC_PAYMENT_010 - Verify Main Page Loaded',
//     async ({ page }) => {

//         const content =
//             await page.content();

//         expect(
//             content.length
//         ).toBeGreaterThan(100);
//     });

// });





const { test, expect } = require('@playwright/test');
const { PaymentPage } =
require('../../pages/PaymentPage');

test.describe('Payment Information Tests', () => {

    let paymentPage;

    test.beforeEach(async ({ page }) => {

        paymentPage =
            new PaymentPage(page);

        await paymentPage
            .gotoHomePage();
    });

    test('TC_PAYMENT_006 - Verify Body Visible',
    async () => {
        await paymentPage
            .verifyBodyVisible();
    });

    test('TC_PAYMENT_007 - Verify HTML Visible',
    async () => {
        await paymentPage
            .verifyHtmlVisible();
    });

    test('TC_PAYMENT_008 - Verify Page Title Exists',
    async () => {
        expect(
            (await paymentPage.getTitle()).length
        ).toBeGreaterThan(0);
    });

    test('TC_PAYMENT_009 - Verify Current URL Valid',
    async () => {
        expect(
            paymentPage.getCurrentUrl()
        ).toContain('nopcommerce');
    });

    test('TC_PAYMENT_010 - Verify Main Page Loaded',
    async () => {
        expect(
            (await paymentPage.getContent()).length
        ).toBeGreaterThan(100);
    });

});