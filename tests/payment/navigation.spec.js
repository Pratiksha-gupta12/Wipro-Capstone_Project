import { test, expect } from '@playwright/test';

test.describe('Payment Navigation Tests', () => {

    test(
    'TC_PAYMENT_016 - Verify Books Navigation',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await expect(page)
            .toHaveURL(/books/);
    });

    test(
    'TC_PAYMENT_017 - Verify Computers Navigation',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/computers'
        );

        await expect(page)
            .toHaveURL(/computers/);
    });

    test(
    'TC_PAYMENT_018 - Verify Electronics Navigation',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/electronics'
        );

        await expect(page)
            .toHaveURL(/electronics/);
    });

    test(
    'TC_PAYMENT_019 - Verify Apparel Navigation',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/apparel'
        );

        await expect(page)
            .toHaveURL(/apparel/);
    });

    test(
    'TC_PAYMENT_020 - Verify Jewelry Navigation',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com/jewelry'
        );

        await expect(page)
            .toHaveURL(/jewelry/);
    });

});