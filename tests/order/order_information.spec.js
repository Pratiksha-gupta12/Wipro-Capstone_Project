// import { test, expect } from '@playwright/test';

// test.describe('Order Information Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demo.nopcommerce.com/');
//     });

//     test('TC_ORDER_011 - Verify Search Box Visible', async ({ page }) => {
//         await expect(page.locator('#small-searchterms')).toBeVisible();
//     });

//     test('TC_ORDER_012 - Verify Search Button Visible', async ({ page }) => {
//         await expect(page.locator('.search-box-button')).toBeVisible();
//     });

//     test('TC_ORDER_013 - Verify Header Menu Visible', async ({ page }) => {
//         await expect(page.locator('.header-menu')).toBeVisible();
//     });

//     test('TC_ORDER_014 - Verify Home Page Opens', async ({ page }) => {
//         await expect(page).toHaveURL(/demo.nopcommerce/);
//     });

//     test('TC_ORDER_015 - Verify Page Title Exists', async ({ page }) => {
//         await expect(page).toHaveTitle(/./);
//     });

// });



const { test } = require('@playwright/test');
const { OrderPage } = require('../../pages/OrderPage');

test.describe('Order Information Tests', () => {

    let orderPage;

    test.beforeEach(async ({ page }) => {
        orderPage = new OrderPage(page);
        await orderPage.gotoHomePage();
    });

    test('TC_ORDER_011 - Verify Search Box Visible',
    async () => {
        await orderPage.verifySearchBoxVisible();
    });

    test('TC_ORDER_012 - Verify Search Button Visible',
    async () => {
        await orderPage.verifySearchButtonVisible();
    });

    test('TC_ORDER_013 - Verify Header Menu Visible',
    async () => {
        await orderPage.verifyHeaderMenuVisible();
    });

    test('TC_ORDER_014 - Verify Home Page Opens',
    async () => {
        await orderPage.verifyHomeUrl();
    });

    test('TC_ORDER_015 - Verify Page Title Exists',
    async () => {
        await orderPage.verifyPageTitleExists();
    });

});