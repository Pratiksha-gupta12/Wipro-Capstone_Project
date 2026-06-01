
// import { test, expect } from '@playwright/test';

// test.describe('Order Summary Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/cart'
//         );

//         await page.waitForLoadState(
//             'domcontentloaded'
//         );
//     });

//     test(
//     'TC_CHECKOUT_056 - Verify Cart Page Opens',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveURL(/cart/);
//     });

//     test(
//     'TC_CHECKOUT_057 - Verify Cart URL Contains Cart',
//     async ({ page }) => {

//         expect(
//             page.url()
//         ).toContain('cart');
//     });

//     test(
//     'TC_CHECKOUT_058 - Verify Body Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('body')
//         ).toBeVisible();
//     });

//     test(
//     'TC_CHECKOUT_059 - Verify HTML Loaded',
//     async ({ page }) => {

//         await expect(
//             page.locator('html')
//         ).toBeVisible();
//     });

//     test(
//     'TC_CHECKOUT_060 - Verify Current URL Valid',
//     async ({ page }) => {

//         const url = page.url();

//         expect(url.length)
//             .toBeGreaterThan(0);
//     });

// });



const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Order Summary Tests', () => {

    let checkoutPage;

    test.beforeEach(async ({ page }) => {

        checkoutPage = new CheckoutPage(page);

        await checkoutPage.gotoCartPage();
    });

    test(
        'TC_CHECKOUT_056 - Verify Cart Page Opens',
        async () => {

            await checkoutPage.verifyCartUrl();
        }
    );

    test(
        'TC_CHECKOUT_057 - Verify Cart URL Contains Cart',
        async () => {

            expect(
                checkoutPage.getCurrentUrl()
            ).toContain('cart');
        }
    );

    test(
        'TC_CHECKOUT_058 - Verify Body Visible',
        async () => {

            await checkoutPage.verifyBodyVisible();
        }
    );

    test(
        'TC_CHECKOUT_059 - Verify HTML Loaded',
        async () => {

            await checkoutPage.verifyHtmlVisible();
        }
    );

    test(
        'TC_CHECKOUT_060 - Verify Current URL Valid',
        async () => {

            expect(
                checkoutPage.getCurrentUrl().length
            ).toBeGreaterThan(0);
        }
    );

});