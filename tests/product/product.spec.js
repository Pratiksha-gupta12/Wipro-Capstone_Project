// const { test, expect } =
// require('@playwright/test');

// test(
// 'TC_PRODUCT_001 - Search Existing Product',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com'
//     );

//     await page.locator('#small-searchterms')
//         .fill('computer');

//     // Use Enter instead of click
//     await page.locator('#small-searchterms')
//         .press('Enter');

//     // Wait for search page
//     await page.waitForURL(
//         /search/,
//         { timeout: 20000 }
//     );

//     // Verify search results visible
//     await expect(
//         page.locator('.item-box')
//             .first()
//     ).toBeVisible({
//         timeout: 20000
//     });
// });

// test(
// 'TC_PRODUCT_002 - Search Non Existing Product',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com'
//     );

//     await page.locator('#small-searchterms')
//         .fill('abcdefghxyz');

//     // Press Enter
//     await page.locator('#small-searchterms')
//         .press('Enter');

//     await page.waitForURL(
//         /search/,
//         { timeout: 20000 }
//     );

//     await expect(
//         page.locator('.no-result')
//     ).toContainText(
//         'No products were found'
//     );
// });

// test(
// 'TC_PRODUCT_003 - Open Product Details Page',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await page.locator(
// 'a:has-text("Build your own computer")'
//     ).click();

//     await expect(page)
//         .toHaveURL(
//             /build-your-own-computer/
//         );

//     await expect(
//         page.locator('h1')
//     ).toContainText(
//         'Build your own computer'
//     );
// });


// test(
// 'TC_PRODUCT_004 - Verify Product Price Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/build-your-own-computer'
//     );

//     await expect(
//         page.locator('.product-price')
//     ).toBeVisible();
// });

// test(
// 'TC_PRODUCT_005 - Verify Product Image Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/build-your-own-computer'
//     );

//     await expect(
//         page.locator('.picture img')
//     ).toBeVisible({
//         timeout: 20000
//     });
// });




// const { test, expect } = require('@playwright/test');

// test(
// 'TC_PRODUCT_001 - Search Existing Product',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com'
//     );

//     await page.locator('#small-searchterms')
//         .fill('computer');

//     await page.keyboard.press('Enter');

//     await page.waitForLoadState('networkidle');

//     await expect(
//         page.locator('.product-item')
//             .first()
//     ).toBeVisible();
// });

// test(
// 'TC_PRODUCT_002 - Search Non Existing Product',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com'
//     );

//     await page.locator('#small-searchterms')
//         .fill('abcdefghxyz');

//     await page.keyboard.press('Enter');

//     await page.waitForLoadState('networkidle');

//     await expect(
//         page.locator('.no-result')
//     ).toContainText(
//         'No products were found'
//     );
// });

// test(
// 'TC_PRODUCT_003 - Open Product Details Page',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com/desktops'
//     );

//     await page.locator(
//         '.product-title a'
//     ).first().click();

//     await page.waitForLoadState('networkidle');

//     await expect(
//         page.locator('h1')
//     ).toBeVisible();
// });

// test(
// 'TC_PRODUCT_004 - Verify Product Price Visible',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com/build-your-own-computer'
//     );

//     await expect(
//         page.locator('.price-value')
//     ).toBeVisible();
// });

// test(
// 'TC_PRODUCT_005 - Verify Product Image Visible',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com/build-your-own-computer'
//     );

//     const productImage = page.locator(
//         '.gallery img'
//     );

//     await expect(productImage)
//         .toBeVisible();
// });




import { test, expect } from '@playwright/test';

test.describe('Product Service Tests', () => {
test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/'
    );
});

    test(
    'TC_PRODUCT_001 - Search Existing Product',

    {
        annotation: {
            type: 'Search',
            description:
            'Verify user can search existing product'
        }

    },

    async ({ page }) => {

        await page.searchProduct(
            'computer'
        );

        await expect(
            page.productItems.first()
        ).toBeVisible();
    });

    test(
    'TC_PRODUCT_002 - Search Non Existing Product',

    {
        annotation: {
            type: 'Search',
            description:
            'Verify proper message displayed for invalid search'
        }
    },

    async ({ page }) => {

        await page.searchProduct(
            'abcdefghxyz'
        );

        await expect(
            page.noResult
        ).toContainText(
            'No products were found'
        );
    });

    test(
    'TC_PRODUCT_003 - Open Product Details Page',

    {
        annotation: {
            type: 'Product',
            description:
            'Verify product details page opens successfully'
        }
    },

    async ({ page, page }) => {

        await page.goto(
'https://demo.nopcommerce.com/desktops'
        );

        await page.openFirstProduct();

        await expect(
            page.locator('h1')
        ).toBeVisible();
    });

    test(
    'TC_PRODUCT_004 - Verify Product Price Visible',

    {
        annotation: {
            type: 'Product',
            description:
            'Verify product price is visible on details page'
        }
    },

    async ({ page, page }) => {

        await page.goto(
'https://demo.nopcommerce.com/desktops'
        );

        await page.openFirstProduct();

        await expect(
            page.productPrice
        ).toBeVisible();
    });

    test(
    'TC_PRODUCT_005 - Verify Product Image Visible',

    {
        annotation: {
            type: 'Product',
            description:
            'Verify product image is visible on details page'
        }
    },

    async ({ page, page }) => {

        await page.goto(
'https://demo.nopcommerce.com/desktops'
        );

        await page.openFirstProduct();

        await expect(
            page.productImage
        ).toBeVisible();
    });

});