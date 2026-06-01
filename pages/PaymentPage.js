const { expect } = require('@playwright/test');

class PaymentPage {

    constructor(page) {
        this.page = page;

        // Common Elements
        this.body = page.locator('body');
        this.html = page.locator('html');

        // Header/Footer
        this.header = page.locator('.header');
        this.footer = page.locator('.footer');
        this.headerLogo = page.locator('.header-logo');
        this.headerMenu = page.locator('.header-menu');

        // Search
        this.searchBox = page.locator(
            '#small-searchterms'
        );

        this.searchButton = page.locator(
            '.search-box-button'
        );

        this.searchSection = page.locator(
            '.search-box'
        );

        // Validation
        this.registerLink =
            page.getByRole('link', {
                name: /register/i
            });

        this.loginLink =
            page.getByRole('link', {
                name: /log in/i
            });

        this.wishlistLabel =
            page.locator('.wishlist-label');

        this.cartLabel =
            page.locator('.cart-label');
    }

    // Navigation

    async gotoHomePage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    async gotoBooksPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/books'
        );
    }

    async gotoComputersPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/computers'
        );
    }

    async gotoElectronicsPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/electronics'
        );
    }

    async gotoApparelPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/apparel'
        );
    }

    async gotoJewelryPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/jewelry'
        );
    }

    // Common Verifications

    async verifyBodyVisible() {
        await expect(this.body)
            .toBeVisible();
    }

    async verifyHtmlVisible() {
        await expect(this.html)
            .toBeVisible();
    }

    async verifyHeaderVisible() {
        await expect(this.header)
            .toBeVisible();
    }

    async verifyFooterVisible() {
        await expect(this.footer)
            .toBeVisible();
    }

    async verifySearchBoxVisible() {
        await expect(this.searchBox)
            .toBeVisible();
    }

    async verifySearchButtonVisible() {
        await expect(this.searchButton)
            .toBeVisible();
    }

    async verifyHeaderLogoVisible() {
        await expect(this.headerLogo)
            .toBeVisible();
    }

    async verifySearchSectionVisible() {
        await expect(this.searchSection)
            .toBeVisible();
    }

    async verifyHeaderMenuVisible() {
        await expect(this.headerMenu)
            .toBeVisible();
    }

    async verifyRegisterLinkVisible() {
        await expect(this.registerLink)
            .toBeVisible();
    }

    async verifyLoginLinkVisible() {
        await expect(this.loginLink)
            .toBeVisible();
    }

    async verifyWishlistVisible() {
        await expect(this.wishlistLabel)
            .toBeVisible();
    }

    async verifyCartVisible() {
        await expect(this.cartLabel)
            .toBeVisible();
    }

    getCurrentUrl() {
        return this.page.url();
    }

    async getTitle() {
        return await this.page.title();
    }

    async getContent() {
        return await this.page.content();
    }
}

module.exports = {
    PaymentPage
};