// import { test, expect } from '@playwright/test';

// test.describe('Shipping Method Tests', () => {

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
//     'TC_SHIPPING_001 - Verify Shopping Cart Page Opens',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveURL(/cart/);
//     });

//     test(
//     'TC_SHIPPING_002 - Verify Terms Of Service Checkbox Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('#termsofservice')
//         ).toBeVisible();
//     });

//     test(
//     'TC_SHIPPING_003 - Verify Terms Of Service Checkbox Can Be Checked',
//     async ({ page }) => {

//         const checkbox = page.locator(
//             '#termsofservice'
//         );

//         await checkbox.check();

//         await expect(
//             checkbox
//         ).toBeChecked();
//     });

//     test(
//     'TC_SHIPPING_004 - Verify Continue Shopping Button Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('.continue-shopping-button')
//         ).toBeVisible();
//     });

//     test(
//     'TC_SHIPPING_005 - Verify Shopping Cart Title Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('h1')
//         ).toContainText(
//             'Shopping cart'
//         );
//     });

// });



// import { test, expect } from '@playwright/test';

// test.describe('Shipping Method Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto(
//             'https://demo.nopcommerce.com/cart'
//         );

//         await page.waitForLoadState(
//             'domcontentloaded'
//         );
//     });

//     test(
//     'TC_SHIPPING_001 - Verify Cart Page URL',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveURL(/cart/);
//     });

//     test(
//     'TC_SHIPPING_002 - Verify Page Title Contains nopCommerce',
//     async ({ page }) => {

//         await expect(page)
//             .toHaveTitle(/nopCommerce/i);
//     });

//     test(
//     'TC_SHIPPING_003 - Verify Page Body Visible',
//     async ({ page }) => {

//         await expect(
//             page.locator('body')
//         ).toBeVisible();
//     });

//     test(
//     'TC_SHIPPING_004 - Verify Page Has Form Element',
//     async ({ page }) => {

//         await expect(
//             page.locator('form').first()
//         ).toBeVisible();
//     });

//     test(
//     'TC_SHIPPING_005 - Verify Cart Page Loaded Successfully',
//     async ({ page }) => {

//         const url = page.url();

//         expect(url).toContain('cart');
//     });

// });




const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Shipping Method Tests', () => {

    let checkoutPage;

    test.beforeEach(async ({ page }) => {

        checkoutPage = new CheckoutPage(page);

        await checkoutPage.gotoCartPage();
    });

    test(
        'TC_SHIPPING_001 - Verify Cart Page URL',
        async () => {

            await checkoutPage.verifyCartUrl();
        }
    );

    test(
        'TC_SHIPPING_002 - Verify Page Title Contains nopCommerce',
        async () => {

            await checkoutPage.verifyPageTitle();
        }
    );

    test(
        'TC_SHIPPING_003 - Verify Page Body Visible',
        async () => {

            await checkoutPage.verifyBodyVisible();
        }
    );

    test(
        'TC_SHIPPING_004 - Verify Page Has Form Element',
        async () => {

            await checkoutPage.verifyFormVisible();
        }
    );

    test(
        'TC_SHIPPING_005 - Verify Cart Page Loaded Successfully',
        async () => {

            expect(
                checkoutPage.getCurrentUrl()
            ).toContain('cart');
        }
    );

});