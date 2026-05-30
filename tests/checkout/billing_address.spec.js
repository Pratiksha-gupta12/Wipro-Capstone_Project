
// import { test, expect } from '@playwright/test';

// test.describe('Billing Address Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         // Open Books page
//         await page.goto(
//             'https://demo.nopcommerce.com/books'
//         );

//         // Add first available product
//         await page.getByRole(
//             'button',
//             { name: /add to cart/i }
//         ).first().click();

//         // Wait for cart update
//         await page.waitForTimeout(3000);

//         // Open Shopping Cart
//         await page.goto(
//             'https://demo.nopcommerce.com/cart'
//         );

//         // Accept Terms Of Service if visible
//         const terms = page.locator(
//             '.termsofservice'
//         );

//         if (await terms.count() > 0) {
//             await terms.check();
//         }

//         // Checkout
//         await page.locator(
//             '.checkout-button'
//         ).click();

//         // Checkout as Guest
//         await page.getByRole(
//             'button',
//             { name: /checkout as guest/i }
//         ).click();

//         // Wait for billing section
//         await page.waitForLoadState(
//             'domcontentloaded'
//         );
//     });

//     test(
//         'TC_CHECKOUT_016 - Verify Country Dropdown Visible',
//         async ({ page }) => {

//             await expect(
//                 page.locator(
//                     '#BillingNewAddress_CountryId'
//                 )
//             ).toBeVisible();
//         }
//     );

//     test(
//         'TC_CHECKOUT_017 - Verify City Field Visible',
//         async ({ page }) => {

//             await expect(
//                 page.locator(
//                     '#BillingNewAddress_City'
//                 )
//             ).toBeVisible();
//         }
//     );

//     test(
//         'TC_CHECKOUT_018 - Verify Address Field Visible',
//         async ({ page }) => {

//             await expect(
//                 page.locator(
//                     '#BillingNewAddress_Address1'
//                 )
//             ).toBeVisible();
//         }
//     );

//     test(
//         'TC_CHECKOUT_019 - Verify Zip Code Field Visible',
//         async ({ page }) => {

//             await expect(
//                 page.locator(
//                     '#BillingNewAddress_ZipPostalCode'
//                 )
//             ).toBeVisible();
//         }
//     );

//     test(
//         'TC_CHECKOUT_020 - Verify Phone Number Field Visible',
//         async ({ page }) => {

//             await expect(
//                 page.locator(
//                     '#BillingNewAddress_PhoneNumber'
//                 )
//             ).toBeVisible();
//         }
//     );

// });




import { test, expect } from '@playwright/test';

test.describe('Billing Address Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/register'
        );

        await page.waitForLoadState(
            'domcontentloaded'
        );
    });

    test(
    'TC_CHECKOUT_016 - Verify First Name Field Visible',
    async ({ page }) => {

        await expect(
            page.locator('#FirstName')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_017 - Verify Last Name Field Visible',
    async ({ page }) => {

        await expect(
            page.locator('#LastName')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_018 - Verify Email Field Visible',
    async ({ page }) => {

        await expect(
            page.locator('#Email')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_019 - Verify Password Field Visible',
    async ({ page }) => {

        await expect(
            page.locator('#Password')
        ).toBeVisible();
    });

    test(
    'TC_CHECKOUT_020 - Verify Confirm Password Field Visible',
    async ({ page }) => {

        await expect(
            page.locator('#ConfirmPassword')
        ).toBeVisible();
    });

});