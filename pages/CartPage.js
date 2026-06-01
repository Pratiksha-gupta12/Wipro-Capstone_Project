import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        // Books Page
        this.addToCartButtons = page.locator(
            '.product-box-add-to-cart-button'
        );

        this.productLinks = page.locator(
            '.product-title a'
        );

        // Product Details Page
        this.productDetailAddToCartBtn = page.locator(
            'button[id^="add-to-cart-button"]'
        );

        // Cart
        this.cartQty = page.locator('.cart-qty');

        // Generic
        this.pageTitle = page.locator('h1');
    }

    async gotoBooksPage() {
        await this.page.goto(
            'https://demo.nopcommerce.com/books'
        );

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    // async gotoFahrenheit451() {
    //     await this.page.goto(
    //         'https://demo.nopcommerce.com/fahrenheit-451-by-ray-bradbury'
    //     );

    //     await this.page.waitForLoadState(
    //         'domcontentloaded'
    //     );
    // }


    async gotoFahrenheit451() {
    await this.page.goto(
        'https://demo.nopcommerce.com/fahrenheit-451-by-ray-bradbury'
    );

    await this.page.waitForLoadState('domcontentloaded');

    await this.productDetailAddToCartBtn.waitFor({
        state: 'visible',
        timeout: 15000
    });
}

    async addFirstProductToCart() {
        await this.addToCartButtons
            .first()
            .click();

        await this.page.waitForTimeout(3000);
    }

    async addMultipleProductsToCart() {
        await expect(
            this.addToCartButtons.nth(0)
        ).toBeVisible();

        await expect(
            this.addToCartButtons.nth(1)
        ).toBeVisible();

        await this.addToCartButtons
            .nth(0)
            .click();

        await this.page.waitForTimeout(3000);

        await this.addToCartButtons
            .nth(1)
            .click();

        await this.page.waitForTimeout(3000);
    }

    async addProductToCart() {
        await expect(
            this.productDetailAddToCartBtn
        ).toBeVisible();

        await this.productDetailAddToCartBtn
            .click();

        await this.page.waitForTimeout(3000);
    }

    // async addSameProductTwice() {
    //     await this.addProductToCart();
    //     await this.addProductToCart();
    // }


    async addSameProductTwice() {

    await expect(
        this.productDetailAddToCartBtn
    ).toBeVisible();

    await this.productDetailAddToCartBtn.click();

    await this.page.waitForTimeout(3000);

    await expect(
        this.cartQty
    ).toBeVisible();

    await this.productDetailAddToCartBtn.click();

    await this.page.waitForTimeout(3000);
}


    async openFirstProductDetails() {
        await this.productLinks
            .first()
            .click();

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }

    async getCartCount() {
        return await this.cartQty.textContent();
    }

    async verifyCartCountVisible() {
        await expect(
            this.cartQty
        ).toBeVisible();
    }

    async verifyCartCountExists() {
        await expect(
            this.cartQty
        ).toHaveCount(1);
    }

    async verifyProductPageOpened() {
        await expect(
            this.pageTitle
        ).toBeVisible();
    }
}