const { expect } = require('@playwright/test');

class WishlistPage {

    constructor(page) {
        this.page = page;

        // Books Page
        this.addToWishlistButtons =
            page.locator(
                '.add-to-wishlist-button'
            );

        // Wishlist
        this.wishlistQty =
            page.locator(
                '.wishlist-qty'
            );

        this.wishlistLabel =
            page.locator(
                '.wishlist-label'
            );

        this.pageTitle =
            page.locator(
                '.page-title h1'
            );
    }

    async gotoBooksPage() {

        await this.page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    async addFirstProductToWishlist() {

        await this.addToWishlistButtons
            .first()
            .click();

        await this.page.waitForTimeout(
            3000
        );
    }

    async openWishlistPage() {

        await this.wishlistLabel
            .click();
    }

    async verifyWishlistCountVisible() {

        await expect(
            this.wishlistQty
        ).toBeVisible();
    }

    async getWishlistCount() {

        return await this.wishlistQty
            .textContent();
    }

    async verifyWishlistPageOpened() {

        await expect(
            this.page
        ).toHaveURL(/wishlist/);
    }

    async verifyWishlistTitle() {

        await expect(
            this.pageTitle
        ).toContainText(
            'Wishlist'
        );
    }

    async verifyWishlistLinkVisible() {

        await expect(
            this.wishlistLabel
        ).toBeVisible();
    }
}

module.exports = {
    WishlistPage
};