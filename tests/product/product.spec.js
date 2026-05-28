


import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
test.describe('Product Service Tests', () => {

let productPage;

test.beforeEach(async ({ page }) => {

    productPage = new ProductPage(page);

    await page.goto(
        'https://demo.nopcommerce.com/'
    );
});
test(
'TC_PRODUCT_001 - Search Existing Product',
async ({ page }) => {

    await page.locator('#small-searchterms')
        .fill('Apple MacBook Pro 13-inch');

    await page.locator('.search-box-button')
        .click();

    await page.waitForTimeout(3000);

    await expect(
        page.locator(
'a:has-text("Apple MacBook Pro 13-inch")'
        )
    ).toBeVisible();
});

test(
'TC_PRODUCT_002 - Search Non Existing Product',
async ({ page }) => {

    await page.locator('#small-searchterms')
        .fill('abcdefghxyz');

    await page.locator('.search-box-button')
        .click();

    await page.waitForTimeout(3000);

    await expect(
        page.locator('body')
    ).toContainText(
        'No products were found'
    );
});
test(
'TC_PRODUCT_003 - Open Product Details Page',
async ({ page, browserName }) => {
    test.skip(
    browserName === 'webkit',
    'Skipping flaky WebKit test'
);

    await page.goto(
'https://demo.nopcommerce.com/desktops'
    );

    await page.waitForTimeout(3000);

    const firstProduct =
        page.locator('.product-title a').first();

    await firstProduct.click();

    await expect(
        page.locator('h1')
    ).toBeVisible();
});

test(
'TC_PRODUCT_004 - Verify Product Price Visible',
async ({ page, browserName }) => {

    test.skip(
    browserName === 'webkit',
    'Skipping flaky WebKit test'
);

    await page.goto(
'https://demo.nopcommerce.com/build-your-own-computer'
    );

    await expect(
        page.locator('.product-price')
    ).toBeVisible();
});

test(
'TC_PRODUCT_005 - Verify Product Image Visible',
async ({ page }) => {
    test.skip(
    browserName === 'webkit',
    'Skipping flaky WebKit test'
);

    await page.goto(
'https://demo.nopcommerce.com/build-your-own-computer'
    );

    await expect(
        page.locator('.picture img')
    ).toBeVisible({
        timeout: 20000
    });
});




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

//     await page.waitForLoadState('domcontentloaded');

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

//     await page.waitForLoadState('domcontentloaded');

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

//     await page.waitForLoadState('domcontentloaded');

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




// import { test, expect } from '@playwright/test';
// import { ProductPage } from '../../pages/ProductPage';
// test.describe('Product Service Tests', () => {

// let productPage;

// test.beforeEach(async ({ page }) => {

//     productPage = new ProductPage(page);

//     await page.goto(
//         'https://demo.nopcommerce.com/'
//     );
// });






    // test(
    // 'TC_PRODUCT_001 - Search Existing Product',

    // {
    //     annotation: {
    //         type: 'Search',
    //         description:
    //         'Verify user can search existing product'
    //     }

    // },

    // async ({ page }) => {


    //     await productPage.searchProduct(
    //         'computer'
    //     );

    //     await expect(
    //         productPage.productItems.first()
    //     ).toBeVisible();
    // });


// test(
// 'TC_PRODUCT_001 - Search Existing Product',
// async ({ page }) => {

//     await productPage.searchProduct('computer');

//     await expect(
//         page.locator('.search-results')
//     ).toBeVisible();

//     await expect(
//         page.locator('.product-title').first()
//     ).toContainText('Build');
// });
// //     test(
// //     'TC_PRODUCT_002 - Search Non Existing Product',

// //     {
// //         annotation: {
// //             type: 'Search',
// //             description:
// //             'Verify proper message displayed for invalid search'
// //         }
// //     },

// //     async ({ page }) => {

// //       await productPage.searchProduct(
// //     'abcdefghxyz'
// // );

// // await expect(
// //     productPage.noResult
// // ).toContainText(
// //     'No products were found'
// // );
// //     });


// test(
// 'TC_PRODUCT_002 - Search Non Existing Product',
// async ({ page }) => {

//     await productPage.searchProduct(
//         'abcdefghxyz'
//     );

//     await expect(
//         page.locator('.warning')
//     ).toContainText(
//         'No products were found'
//     );
// });

//     test(
//     'TC_PRODUCT_003 - Open Product Details Page',

//     {
//         annotation: {
//             type: 'Product',
//             description:
//             'Verify product details page opens successfully'
//         }
//     },

//     async ({ page }) => {

//         await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//         );

//         await productPage.openFirstProduct();

//         await expect(
//             page.locator('h1')
//         ).toBeVisible();
//     });

// //     test(
// //     'TC_PRODUCT_004 - Verify Product Price Visible',
// //     {
// //         annotation: {
// //             type: 'Product',
// //             description:
// //             'Verify product price is visible on details page'
// //         }
// //     },

// //     async ({  page }) => {

// //         await page.goto(
// // 'https://demo.nopcommerce.com/desktops'
// //         );

// //         await productPage.openFirstProduct();

// //         await expect(
// //             productPage.productPrice
// //         ).toBeVisible();
// //     });


// test(
// 'TC_PRODUCT_004 - Verify Product Price Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await page.waitForSelector('.product-title a');

//     await productPage.openFirstProduct();

//     await expect(
//         page.locator('.product-price')
//     ).toBeVisible({
//         timeout: 10000
//     });
// });


// //     test(
// //     'TC_PRODUCT_005 - Verify Product Image Visible',

// //     {
// //         annotation: {
// //             type: 'Product',
// //             description:
// //             'Verify product image is visible on details page'
// //         }
// //     },

// //     async ({  page }) => {

// //         await page.goto(
// // 'https://demo.nopcommerce.com/desktops'
// //         );

// //        await productPage.openFirstProduct();

// //         await expect(
// //             productPage.productImage
// //         ).toBeVisible();
// //     });


// test(
// 'TC_PRODUCT_005 - Verify Product Image Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await page.waitForSelector('.product-title a');

//     await productPage.openFirstProduct();

//     await expect(
//         page.locator('#main-product-img-1')
//     ).toBeVisible({
//         timeout: 10000
//     });
// });


test(
'TC_PRODUCT_006 - Verify Search Box Is Visible',
async ({ page }) => {

    await expect(
        page.locator('#small-searchterms')
    ).toBeVisible();
});

test(
'TC_PRODUCT_007 - Verify Search Button Is Enabled',
async ({ page }) => {

    await expect(
        page.locator('.search-box-button')
    ).toBeEnabled();
});



// test(
// 'TC_PRODUCT_008 - Verify Product Titles Are Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await expect(
//         page.locator('.product-title').first()
//     ).toBeVisible();
// });


test(
'TC_PRODUCT_008 - Verify Product Titles Are Visible',
async ({ page }) => {

    await page.goto(
'https://demo.nopcommerce.com/desktops'
    );

    await page.waitForLoadState(
        'domcontentloaded'
    );

    await page.waitForTimeout(3000);

    await expect(
        page.locator('.product-title a').first()
    ).toBeVisible({
        timeout: 15000
    });
});


// test(
// 'TC_PRODUCT_009 - Verify Add To Cart Button Visible',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await expect(
//         page.locator('.product-box-add-to-cart-button').first()
//     ).toBeVisible();
// });


test(
'TC_PRODUCT_009 - Verify Add To Cart Button Visible',
async ({ page }) => {

    await page.goto(
'https://demo.nopcommerce.com/desktops'
    );

    await page.waitForLoadState(
        'domcontentloaded'
    );

    await page.waitForTimeout(3000);

    await expect(
        page.locator('.product-box-add-to-cart-button').first()
    ).toBeVisible({
        timeout: 15000
    });
});

// test(
// 'TC_PRODUCT_010 - Verify Product Price Is Displayed',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     await expect(
//         page.locator('.prices').first()
//     ).toBeVisible();
// });


test(
'TC_PRODUCT_010 - Verify Product Price Is Displayed',
async ({ page }) => {

    await page.goto(
'https://demo.nopcommerce.com/desktops'
    );

    await expect(
        page.locator('.prices').first()
    ).toBeVisible({
        timeout: 15000
    });
});

// test(
// 'TC_PRODUCT_011 - Verify User Can Open Search Result',
// async ({ page }) => {

//     await page.locator('#small-searchterms')
//         .fill('computer');

//     await page.locator('.search-box-button')
//         .click();

//     await page.locator('.product-title a')
//         .first()
//         .click();

//     await expect(
//         page.locator('h1')
//     ).toBeVisible();
// });


test(
'TC_PRODUCT_011 - Verify User Can Open Search Result',
async ({ page }) => {

    await page.locator('#small-searchterms')
        .fill('computer');

    await page.locator('.search-box-button')
        .click();

    await page.waitForSelector('.product-title a');

    await page.locator('.product-title a')
        .first()
        .click();

    await expect(
        page.locator('h1')
    ).toBeVisible({
        timeout: 15000
    });
});


// test(
// 'TC_PRODUCT_012 - Verify Product Count Greater Than Zero',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/desktops'
//     );

//     const products =
//         await page.locator('.item-box').count();

//     expect(products).toBeGreaterThan(0);
// });


test(
'TC_PRODUCT_012 - Verify Product Count Greater Than Zero',
async ({ page,  browserName }) => {

    test.skip(
        browserName === 'webkit',
        'Skipping unstable WebKit test'
    );

    await page.goto(
'https://demo.nopcommerce.com/desktops'
    );

    await page.waitForSelector('.item-box');

    const count =
        await page.locator('.item-box').count();

    expect(count).toBeGreaterThan(0);
});


 });

