const { expect } = require('@playwright/test');

class OrderPage {

    constructor(page) {
        this.page = page;

        // Common
        this.body = page.locator('body');
        this.html = page.locator('html');
        this.header = page.locator('header');
        this.footer = page.locator('footer');
        this.form = page.locator('form').first();

        // Home Page
        this.searchBox = page.locator(
            '#small-searchterms'
        );

        this.searchButton = page.locator(
            '.search-box-button'
        );

        this.headerMenu = page.locator(
            '.header-menu'
        );

        // Category Pages
        this.pageTitle = page.locator(
            '.page-title'
        );

        this.electronicsLink =
            page.getByRole('link', {
                name: 'Electronics',
                exact: true
            });

        this.apparelLink =
            page.getByRole('link', {
                name: 'Apparel',
                exact: true
            });

        this.digitalDownloadsLink =
            page.getByRole('link', {
                name: 'Digital downloads',
                exact: true
            });
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

    async gotoCartPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/cart'
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

    async openElectronics() {
        await this.electronicsLink.click();
    }

    async openApparel() {
        await this.apparelLink.click();
    }

    async openDigitalDownloads() {
        await this.digitalDownloadsLink.click();
    }

    // Verifications

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

    async verifyHeaderVisible() {
        await expect(this.header)
            .toBeVisible();
    }

    async verifyFooterVisible() {
        await expect(this.footer)
            .toBeVisible();
    }

    async verifyFormVisible() {
        await expect(this.form)
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

    async verifyHeaderMenuVisible() {
        await expect(this.headerMenu)
            .toBeVisible();
    }

    async verifyHomeUrl() {
        await expect(this.page)
            .toHaveURL(/demo.nopcommerce/);
    }

    async verifyPageTitleExists() {
        await expect(this.page)
            .toHaveTitle(/./);
    }

    getCurrentUrl() {
        return this.page.url();
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getPageContent() {
        return await this.page.content();
    }
}

module.exports = { OrderPage };