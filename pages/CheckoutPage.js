const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Registration / Billing fields
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');

        // Navigation
        this.cartLabel = page.locator('.cart-label');
        this.cartIcon = page.locator('.ico-cart');

        // Generic
        this.body = page.locator('body');
        this.html = page.locator('html');
        this.form = page.locator('form').first();
    }

    // ---------- Navigation ----------

    async gotoBooksPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    async gotoCartPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/cart'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    async gotoRegisterPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/register'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    // ---------- Cart Actions ----------

    async addFirstBookToCart() {
        await this.page.locator(
            '.product-box-add-to-cart-button'
        ).first().click();

        await this.page.waitForTimeout(3000);
    }

    async openCartFromLabel() {
        await this.cartLabel.click();
    }

    async openCartFromIcon() {
        await this.cartIcon.click();
    }

    // ---------- Billing ----------

    async verifyFirstNameVisible() {
        await expect(this.firstName).toBeVisible();
    }

    async verifyLastNameVisible() {
        await expect(this.lastName).toBeVisible();
    }

    async verifyEmailVisible() {
        await expect(this.email).toBeVisible();
    }

    async verifyPasswordVisible() {
        await expect(this.password).toBeVisible();
    }

    async verifyConfirmPasswordVisible() {
        await expect(
            this.confirmPassword
        ).toBeVisible();
    }

    // ---------- Common Verifications ----------

    async verifyCartUrl() {
        await expect(this.page)
            .toHaveURL(/cart/);
    }

    async verifyBodyVisible() {
        await expect(this.body)
            .toBeVisible();
    }

    async verifyHtmlVisible() {
        await expect(this.html)
            .toBeVisible();
    }

    async verifyFormVisible() {
        await expect(this.form)
            .toBeVisible();
    }

    async verifyPageTitle() {
        await expect(this.page)
            .toHaveTitle(/nopCommerce/i);
    }

    getCurrentUrl() {
        return this.page.url();
    }
}

module.exports = { CheckoutPage };