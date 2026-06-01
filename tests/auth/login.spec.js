
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://demo.nopcommerce.com';

test.describe('Authentication Tests', () => {

    test.setTimeout(60000);

    async function openLogin(page) {
        await page.goto(`${BASE_URL}/login`);
    }

    async function openRegister(page) {
        await page.goto(`${BASE_URL}/register`);
    }

    test(
    'TC_AUTH_007 - Login with Invalid Password',
    async ({ page }) => {

        await openLogin(page);

        await page.locator('#Email')
            .fill('admin@yourstore.com');

        await page.locator('#Password')
            .fill('WrongPassword123');

        await page.locator('.login-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Login was unsuccessful'
        );
    });

    test(
    'TC_AUTH_008 - Login with Empty Fields',
    async ({ page }) => {

        await openLogin(page);

        await page.locator('.login-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Please enter your email'
        );
    });

    test(
    'TC_AUTH_009 - Login Page Validation',
    async ({ page }) => {

        await openLogin(page);

        await expect(
            page.locator('#Email')
        ).toBeVisible();

        await expect(
            page.locator('#Password')
        ).toBeVisible();

        await expect(
            page.locator('.login-button')
        ).toBeVisible();
    });

    test(
    'TC_AUTH_011 - Forgot Password Page Validation',
    async ({ page }) => {

        await page.goto(
            `${BASE_URL}/passwordrecovery`
        );

        await expect(
            page.locator('#Email')
        ).toBeVisible();

        await expect(
            page.locator(
                'button[name="send-email"]'
            )
        ).toBeVisible();
    });

    test(
    'TC_AUTH_012 - Password Minimum Length Validation',
    async ({ page }) => {

        await openRegister(page);

        await page.locator('#gender-male')
            .check();

        await page.locator('#FirstName')
            .fill('Pratiksha');

        await page.locator('#LastName')
            .fill('Gupta');

        await page.locator('#Email')
            .fill(`user${Date.now()}@gmail.com`);

        await page.locator('#Password')
            .fill('123');

        await page.locator('#ConfirmPassword')
            .fill('123');

        await page.locator('#register-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Password must meet the following rules'
        );
    });

    test(
    'TC_AUTH_013 - Empty Confirm Password',
    async ({ page }) => {

        await openRegister(page);

        await page.locator('#gender-male')
            .check();

        await page.locator('#FirstName')
            .fill('Pratiksha');

        await page.locator('#LastName')
            .fill('Gupta');

        await page.locator('#Email')
            .fill(`test${Date.now()}@gmail.com`);

        await page.locator('#Password')
            .fill('Testing@12345');

        await page.locator('#register-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Confirm password'
        );
    });

    test(
    'TC_AUTH_014 - Login With Invalid Email Format',
    async ({ page }) => {

        await openLogin(page);

        await page.locator('#Email')
            .fill('invalidemail');

        await page.locator('#Password')
            .fill('Testing123');

        await page.locator('.login-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Wrong email'
        );
    });

    test(
    'TC_AUTH_015 - Login With Unregistered Email',
    async ({ page }) => {

        await openLogin(page);

        await page.locator('#Email')
            .fill(`random${Date.now()}@gmail.com`);

        await page.locator('#Password')
            .fill('Testing@12345');

        await page.locator('.login-button')
            .click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Login was unsuccessful'
        );
    });

    test(
    'TC_AUTH_016 - Verify Password Field Is Hidden',
    async ({ page }) => {

        await openLogin(page);

        await expect(
            page.locator('#Password')
        ).toHaveAttribute(
            'type',
            'password'
        );
    });

    test(
    'TC_AUTH_017 - Forgot Password Invalid Email',
    async ({ page }) => {

        await page.goto(
            `${BASE_URL}/passwordrecovery`
        );

        await page.locator('#Email')
            .fill('invalidemail');

        await page.locator(
            'button[name="send-email"]'
        ).click();

        await expect(
            page.locator('body')
        ).toContainText(
            'Wrong email'
        );
    });

    test(
    'TC_AUTH_018 - Remember Me Checkbox Visible',
    async ({ page }) => {

        await openLogin(page);

        await expect(
            page.locator('#RememberMe')
        ).toBeVisible();
    });

    test(
    'TC_AUTH_020 - Multiple Invalid Login Attempts',
    async ({ page }) => {

        for (let i = 0; i < 2; i++) {

            await openLogin(page);

            await page.locator('#Email')
                .fill('admin@yourstore.com');

            await page.locator('#Password')
                .fill('WrongPassword');

            await page.locator('.login-button')
                .click();

            await expect(
                page.locator('body')
            ).toContainText(
                'Login was unsuccessful'
            );
        }
    });

});