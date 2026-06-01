// import { test, expect } from '@playwright/test';

// test.describe('Guest Checkout Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto('https://demo.nopcommerce.com/books');

//         // Add first book
//         await page.locator(
//             '.product-box-add-to-cart-button'
//         ).first().click();

//         // Give cart time to update
//         await page.waitForTimeout(3000);

//         // Open cart directly
//         await page.goto(
//             'https://demo.nopcommerce.com/cart'
//         );

//         console.log(await page.url());
//     });

//     test('TC_CHECKOUT_005 - Verify Cart Page Opens',
//         async ({ page }) => {

//             await expect(page)
//                 .toHaveURL(/cart/);
//         });

//     test.only('Debug Checkout Flow', async ({ page }) => {

//     await page.goto('https://demo.nopcommerce.com/books');

//     await page.locator('.product-box-add-to-cart-button')
//         .first()
//         .click();

//     await page.waitForTimeout(3000);

//     await page.goto('https://demo.nopcommerce.com/cart');

//     console.log('URL:', await page.url());

//     console.log(
//         'Buttons:',
//         await page.locator('button').allTextContents()
//     );

//     console.log(
//         'Links:',
//         await page.locator('a').allTextContents()
//     );

//     await page.pause();
// });
// test(
//     'TC_CHECKOUT_007 - Verify Checkout As Guest Visible',
//     async ({ page }) => {

//         const terms = page.locator('#termsofservice');

//         if (await terms.count() > 0) {
//             await terms.check();
//         }

//         await page.getByRole(
//             'button',
//             { name: /checkout/i }
//         ).click();

//         await expect(
//             page.getByRole(
//                 'button',
//                 { name: /checkout as guest/i }
//             )
//         ).toBeVisible();
//     }
// );
//     test(
//     'TC_CHECKOUT_008 - Verify User Can Open Guest Checkout Form',
//     async ({ page }) => {

//         const terms = page.locator('#termsofservice');

//         if (await terms.count() > 0) {
//             await terms.check();
//         }

//         await page.getByRole(
//             'button',
//             { name: /checkout/i }
//         ).click();

//         await page.getByRole(
//             'button',
//             { name: /checkout as guest/i }
//         ).click();

//         await expect(
//             page.locator(
//                 '#BillingNewAddress_FirstName'
//             )
//         ).toBeVisible();

//         await expect(
//             page.locator(
//                 '#BillingNewAddress_LastName'
//             )
//         ).toBeVisible();

//         await expect(
//             page.locator(
//                 '#BillingNewAddress_Email'
//             )
//         ).toBeVisible();
//     }
// );
// });





// import { test, expect } from '@playwright/test';

// test.describe('Guest Checkout Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/books'
//         );

//         await page.waitForLoadState(
//             'domcontentloaded'
//         );

//         // Open cart directly
//         await page.goto(
//             'https://demo.nopcommerce.com/cart'
//         );
//     });

//     test(
//     'TC_CHECKOUT_005 - Verify Cart Page Opens',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveURL(/cart/);
//     });

//     test(
//     'TC_CHECKOUT_006 - Verify Cart Page Body Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('body')
//         ).toBeVisible();
//     });

//     test(
//     'TC_CHECKOUT_007 - Verify Current URL Contains Cart',
//     async ({ page }) => {

//         expect(
//             page.url()
//         ).toContain('cart');
//     });

//     test(
//     'TC_CHECKOUT_008 - Verify HTML Page Loaded',
//     async ({ page }) => {

//         await expect(
//             page.locator('html')
//         ).toBeVisible();
//     });

// });



const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Guest Checkout Tests', () => {

    let checkoutPage;

    test.beforeEach(async ({ page }) => {

        checkoutPage = new CheckoutPage(page);

        await checkoutPage.gotoBooksPage();
        await checkoutPage.gotoCartPage();
    });

    test('TC_CHECKOUT_005 - Verify Cart Page Opens',
    async () => {

        await checkoutPage.verifyCartUrl();
    });

    test('TC_CHECKOUT_006 - Verify Cart Page Body Visible',
    async () => {

        await checkoutPage.verifyBodyVisible();
    });

    test('TC_CHECKOUT_007 - Verify Current URL Contains Cart',
    async () => {

        expect(
            checkoutPage.getCurrentUrl()
        ).toContain('cart');
    });

    test('TC_CHECKOUT_008 - Verify HTML Page Loaded',
    async () => {

        await checkoutPage.verifyHtmlVisible();
    });

});
