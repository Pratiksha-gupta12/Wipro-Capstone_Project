// import { test, expect } from '@playwright/test';

// test.describe('Payment Navigation Tests', () => {

//     test(
//     'TC_PAYMENT_016 - Verify Books Navigation',
//     async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/books'
//         );

//         await expect(page)
//             .toHaveURL(/books/);
//     });

//     test(
//     'TC_PAYMENT_017 - Verify Computers Navigation',
//     async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/computers'
//         );

//         await expect(page)
//             .toHaveURL(/computers/);
//     });

//     test(
//     'TC_PAYMENT_018 - Verify Electronics Navigation',
//     async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/electronics'
//         );

//         await expect(page)
//             .toHaveURL(/electronics/);
//     });

//     test(
//     'TC_PAYMENT_019 - Verify Apparel Navigation',
//     async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/apparel'
//         );

//         await expect(page)
//             .toHaveURL(/apparel/);
//     });

//     test(
//     'TC_PAYMENT_020 - Verify Jewelry Navigation',
//     async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/jewelry'
//         );

//         await expect(page)
//             .toHaveURL(/jewelry/);
//     });

// });




const { test, expect } = require('@playwright/test');
const { PaymentPage } =
require('../../pages/PaymentPage');

test.describe('Payment Navigation Tests', () => {

    let paymentPage;

    test.beforeEach(async ({ page }) => {
        paymentPage =
            new PaymentPage(page);
    });

    test('TC_PAYMENT_016 - Verify Books Navigation',
    async () => {

        await paymentPage.gotoBooksPage();

        await expect(paymentPage.page)
            .toHaveURL(/books/);
    });

    test('TC_PAYMENT_017 - Verify Computers Navigation',
    async () => {

        await paymentPage.gotoComputersPage();

        await expect(paymentPage.page)
            .toHaveURL(/computers/);
    });

    test('TC_PAYMENT_018 - Verify Electronics Navigation',
    async () => {

        await paymentPage.gotoElectronicsPage();

        await expect(paymentPage.page)
            .toHaveURL(/electronics/);
    });

    test('TC_PAYMENT_019 - Verify Apparel Navigation',
    async () => {

        await paymentPage.gotoApparelPage();

        await expect(paymentPage.page)
            .toHaveURL(/apparel/);
    });

    test('TC_PAYMENT_020 - Verify Jewelry Navigation',
    async () => {

        await paymentPage.gotoJewelryPage();

        await expect(paymentPage.page)
            .toHaveURL(/jewelry/);
    });

});