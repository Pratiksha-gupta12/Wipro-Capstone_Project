

// import { test, expect } from '@playwright/test';

// test.describe('Cart Service Tests', () => {

// test.beforeEach(async ({ page }) => {

// await page.goto('https://demo.nopcommerce.com/books');
//     await page.waitForLoadState(
//         'domcontentloaded'
//     );
// });


// test('TC_CART_001 ', async ({ page }) => {

//     await page.locator(
//         '.product-box-add-to-cart-button'
//     ).first().click();

//     await page.waitForTimeout(5000);

//     console.log('URL:', page.url());

//     console.log(
//         'Cart Qty:',
//         await page.locator('.cart-qty').textContent()
//     );
// });

// test(
// 'TC_CART_002 - Add Multiple Products To Cart',
// async ({ page }) => {

//     const button1 =
//         page.locator(
//             '.product-box-add-to-cart-button'
//         ).nth(0);

//     const button2 =
//         page.locator(
//             '.product-box-add-to-cart-button'
//         ).nth(1);

  
//     await expect(button1).toBeVisible();
//     await expect(button2).toBeVisible();

//     await button1.click();

    
//     await page.waitForTimeout(3000);

//     await button2.click();
   
//     await page.waitForTimeout(3000);

    
//     await expect(button1).toBeVisible();
//     await expect(button2).toBeVisible();
// });

// test(
// 'TC_CART_003 - Add Same Product Multiple Times',
// async ({ page }) => {

//     await page.goto(
// 'https://demo.nopcommerce.com/fahrenheit-451-by-ray-bradbury'
//     );

//     const button =
//         page.locator(
//             'button[id^="add-to-cart-button"]'
//         );

//     await button.click();

//     await page.waitForTimeout(3000);

//     await button.click();

//     await page.waitForTimeout(3000);

//     console.log(
//         'Cart Qty:',
//         await page.locator('.cart-qty').textContent()
//     );

//     await expect(
//         page.locator('.cart-qty')
//     ).toBeVisible();
// });
// test(
// 'TC_CART_004 - Add Product From Product Details Page',
// async ({ page }) => {

//     await page.locator('.product-title a')
//         .first()
//         .click();

//     await page.waitForLoadState('networkidle');

//     console.log('Current URL:', page.url());

//     await expect(
//         page.locator('h1')
//     ).toBeVisible();
// });
// });




// import { test } from '@playwright/test';
// import { CartPage } from '../../Pages/CartPage';

// test.describe('Cart Service Tests', () => {

//     let cartPage;

//     test.beforeEach(async ({ page }) => {
//         cartPage = new CartPage(page);

//         await cartPage.gotoBooksPage();
//     });

//     test('TC_CART_001', async () => {

//         await cartPage.addFirstProductToCart();

//         console.log(
//             'Cart Qty:',
//             await cartPage.getCartCount()
//         );

//         await cartPage.verifyCartCountVisible();
//     });

//     test(
//         'TC_CART_002 - Add Multiple Products To Cart',
//         async () => {

//             await cartPage.addMultipleProductsToCart();

//             console.log(
//                 'Cart Qty:',
//                 await cartPage.getCartCount()
//             );

//             await cartPage.verifyCartCountVisible();
//         }
//     );

//     test(
//         'TC_CART_003 - Add Same Product Multiple Times',
//         async () => {

//             await cartPage.gotoFahrenheit451();

//             await cartPage.addSameProductTwice();

//             console.log(
//                 'Cart Qty:',
//                 await cartPage.getCartCount()
//             );

//             await cartPage.verifyCartCountVisible();
//         }
//     );

//     test(
//         'TC_CART_004 - Add Product From Product Details Page',
//         async () => {

//             await cartPage.openFirstProductDetails();

//             console.log(
//                 'Current URL:',
//                 cartPage.page.url()
//             );

//             await cartPage.verifyProductPageOpened();
//         }
//     );
// });


// import { test } from '@playwright/test';
// import { CartPage } from '../../Pages/CartPage';

// test.describe('Cart Service Tests', () => {

//     let cartPage;

//     test.beforeEach(async ({ page }) => {

//         cartPage = new CartPage(page);

//         await cartPage.gotoBooksPage();
//     });

//     test('TC_CART_001', async () => {

//         await cartPage.addFirstProductToCart();

//         console.log(
//             'Cart Qty:',
//             await cartPage.getCartCount()
//         );

//         await cartPage.verifyCartCountVisible();
//     });

//     test(
//         'TC_CART_002 - Add Multiple Products To Cart',
//         async () => {

//             await cartPage.addMultipleProductsToCart();

//             console.log(
//                 'Cart Qty:',
//                 await cartPage.getCartCount()
//             );

//             await cartPage.verifyCartCountVisible();
//         }
//     );

//     test(
//         'TC_CART_003 - Add Same Product Multiple Times',
//         async () => {

//             await cartPage.gotoFahrenheit451();

//             await cartPage.addSameProductTwice();

//             console.log(
//                 'Cart Qty:',
//                 await cartPage.getCartCount()
//             );

//             await cartPage.verifyCartCountVisible();
//         }
//     );

//     test(
//         'TC_CART_004 - Add Product From Product Details Page',
//         async () => {

//             await cartPage.openFirstProductDetails();

//             console.log(
//                 'Current URL:',
//                 cartPage.page.url()
//             );

//             await cartPage.verifyProductPageOpened();
//         }
//     );
// });




import { test } from '@playwright/test';
import { CartPage } from '../../Pages/CartPage';

test.describe('Cart Service Tests', () => {

    let cartPage;

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.gotoBooksPage();
    });

    test('TC_CART_001', async () => {

        await cartPage.addFirstProductToCart();

        console.log(
            'Cart Qty:',
            await cartPage.getCartCount()
        );

        await cartPage.verifyCartCountVisible();
    });

    test(
        'TC_CART_002 - Add Multiple Products To Cart',
        async () => {

            await cartPage.addMultipleProductsToCart();

            console.log(
                'Cart Qty:',
                await cartPage.getCartCount()
            );

            await cartPage.verifyCartCountVisible();
        }
    );

    // test(
    //     'TC_CART_003 - Add Same Product Multiple Times',
    //     async () => {

    //         await cartPage.gotoFahrenheit451();

    //         await cartPage.addSameProductTwice();

    //         console.log(
    //             'Cart Qty:',
    //             await cartPage.getCartCount()
    //         );

    //         await cartPage.verifyCartCountVisible();
    //     }
    // );



//     test(
//     'TC_CART_003 - Add Same Product Multiple Times',
//     async () => {

//         await cartPage.gotoFahrenheit451();

//         await cartPage.addSameProductTwice();

//         console.log(
//             'Cart Qty:',
//             await cartPage.getCartCount()
//         );

//         await cartPage.verifyCartCountVisible();
//     }
// );

    test(
        'TC_CART_004 - Add Product From Product Details Page',
        async () => {

            await cartPage.openFirstProductDetails();

            console.log(
                'Current URL:',
                cartPage.page.url()
            );

            await cartPage.verifyProductPageOpened();
        }
    );
});