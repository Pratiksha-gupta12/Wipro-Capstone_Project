// import { test, expect } from '@playwright/test';

// test.describe('Order Navigation Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demo.nopcommerce.com/');
//     });

//     test('TC_ORDER_021 - Verify Books Navigation', async ({ page }) => {
//         await page.getByRole('link', { name: 'Books' }).click();
//         await expect(page).toHaveURL(/books/);
//     });

//     test('TC_ORDER_022 - Verify Computers Navigation', async ({ page }) => {
//         await page.getByRole('link', { name: 'Computers' }).click();
//         await expect(page).toHaveURL(/computers/);
//     });

//     test('TC_ORDER_023 - Verify Electronics Navigation', async ({ page }) => {
//         await page.getByRole('link', { name: 'Electronics' }).click();
//         await expect(page).toHaveURL(/electronics/);
//     });

//     test('TC_ORDER_024 - Verify Apparel Navigation', async ({ page }) => {
//         await page.getByRole('link', { name: 'Apparel' }).click();
//         await expect(page).toHaveURL(/apparel/);
//     });

//     test('TC_ORDER_025 - Verify Digital Downloads Navigation', async ({ page }) => {
//         await page.getByRole('link', { name: 'Digital downloads' }).click();
//         await expect(page).toHaveURL(/digital-downloads/);
//     });

// });



// import { test, expect } from '@playwright/test';

// test.describe('Order Navigation Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demo.nopcommerce.com/');
//         await page.waitForLoadState('networkidle');
//     });
// test('TC_ORDER_021 - Verify Books Navigation', async ({ page }) => {
//     await page.goto('https://demo.nopcommerce.com/books');

//     await expect(page).toHaveURL(/books/);
//     await expect(page.locator('.page-title')).toContainText('Books');
// });

// test('TC_ORDER_022 - Verify Computers Navigation', async ({ page }) => {
//     await page.goto('https://demo.nopcommerce.com/computers');

//     await expect(page).toHaveURL(/computers/);
//     await expect(page.locator('.page-title')).toContainText('Computers');
// });

//     test('TC_ORDER_023 - Verify Electronics Navigation', async ({ page }) => {
//         const electronicsLink = page.getByRole('link', {
//             name: 'Electronics',
//             exact: true
//         });

//         await expect(electronicsLink).toBeVisible();
//         await electronicsLink.click();

//         await expect(page).toHaveURL(/electronics/);
//     });

//     test('TC_ORDER_024 - Verify Apparel Navigation', async ({ page }) => {
//         const apparelLink = page.getByRole('link', {
//             name: 'Apparel',
//             exact: true
//         });

//         await expect(apparelLink).toBeVisible();
//         await apparelLink.click();

//         await expect(page).toHaveURL(/apparel/);
//     });

//     test('TC_ORDER_025 - Verify Digital Downloads Navigation', async ({ page }) => {
//         const digitalDownloadsLink = page.getByRole('link', {
//             name: 'Digital downloads',
//             exact: true
//         });

//         await expect(digitalDownloadsLink).toBeVisible();
//         await digitalDownloadsLink.click();

//         await expect(page).toHaveURL(/digital-downloads/);
//     });

// });


const { test, expect } = require('@playwright/test');
const { OrderPage } = require('../../pages/OrderPage');

test.describe('Order Navigation Tests', () => {

    let orderPage;

    test.beforeEach(async ({ page }) => {

        orderPage = new OrderPage(page);

        await orderPage.gotoHomePage();

        await page.waitForLoadState(
            'networkidle'
        );
    });

    // test(
    //     'TC_ORDER_021 - Verify Books Navigation',
    //     async () => {

    //         await orderPage.gotoBooksPage();

    //         await expect(
    //             orderPage.page
    //         ).toHaveURL(/books/);

    //         await expect(
    //             orderPage.pageTitle
    //         ).toContainText('Books');
    //     }
    // );

    // test(
    //     'TC_ORDER_022 - Verify Computers Navigation',
    //     async () => {

    //         await orderPage.gotoComputersPage();

    //         await expect(
    //             orderPage.page
    //         ).toHaveURL(/computers/);

    //         await expect(
    //             orderPage.pageTitle
    //         ).toContainText('Computers');
    //     }
    // );

    test(
        'TC_ORDER_023 - Verify Electronics Navigation',
        async () => {

            await expect(
                orderPage.electronicsLink
            ).toBeVisible();

            await orderPage.openElectronics();

            await expect(
                orderPage.page
            ).toHaveURL(/electronics/);
        }
    );

    test(
        'TC_ORDER_024 - Verify Apparel Navigation',
        async () => {

            await expect(
                orderPage.apparelLink
            ).toBeVisible();

            await orderPage.openApparel();

            await expect(
                orderPage.page
            ).toHaveURL(/apparel/);
        }
    );

    test(
        'TC_ORDER_025 - Verify Digital Downloads Navigation',
        async () => {

            await expect(
                orderPage.digitalDownloadsLink
            ).toBeVisible();

            await orderPage.openDigitalDownloads();

            await expect(
                orderPage.page
            ).toHaveURL(
                /digital-downloads/
            );
        }
    );

});