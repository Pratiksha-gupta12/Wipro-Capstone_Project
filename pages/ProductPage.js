// class page {

//     constructor(page){

//         this.page = page;

//         // Search
//         this.searchBox =
//             page.locator('#small-searchterms');

//         this.searchButton =
//             page.locator(
//                 'button.search-box-button'
//             );

//         // Product
//         this.productItem =
//             page.locator('.product-item');

//         this.productTitle =
//             page.locator('.product-name h1');

//         this.productPrice =
//             page.locator('.prices');

//         this.productImage =
//             page.locator('.product-item img');

//         // Cart
//         this.addToCartButton =
//             page.locator(
//                 '#add-to-cart-button-1'
//             );

//         this.cartNotification =
//             page.locator('.bar-notification');

//         this.cartQuantity =
//             page.locator('.cart-qty');

//         // Wishlist
//         this.addToWishlistButton =
//             page.locator(
//                 '#add-to-wishlist-button-1'
//             );
//     }


//     // =========================================
//     // Open Home Page
//     // =========================================

//     async gotoHomePage(){

//         await this.page.goto(
//             'https://demo.nopcommerce.com'
//         );
//     }


//     // =========================================
//     // Search Product
//     // =========================================

//     async searchProduct(productName){

//         await this.searchBox.fill(
//             productName
//         );

//         await this.searchButton.click();
//     }


//     // =========================================
//     // Open Product
//     // =========================================

//     async openProduct(productName){

//         await this.page.locator(
//             `a:has-text("${productName}")`
//         ).click();
//     }


//     // =========================================
//     // Add Product To Cart
//     // =========================================

//     async addProductToCart(){

//         await this.addToCartButton.click();
//     }


//     // =========================================
//     // Add Product To Wishlist
//     // =========================================

//     async addProductToWishlist(){

//         await this.addToWishlistButton.click();
//     }
// }

// module.exports = { page };



// class page {

//     constructor(page) {

//         this.page = page;

//         this.searchBox = page.locator('#small-searchterms');

//         this.searchButton = page.locator('input[value="Search"]');

//         this.productTitles = page.locator('.product-title');

//         this.sortDropdown = page.locator('#products-orderby');

//         this.productImage = page.locator('.picture img');

//         this.addToCartButton = page.locator('input[value="Add to cart"]');

//         this.breadcrumb = page.locator('.breadcrumb');

//         this.nextPageButton = page.locator('.next-page');

//         this.gridView = page.locator('.viewmode-icon.grid');

//         this.listView = page.locator('.viewmode-icon.list');

//         this.noResultMessage = page.locator('.result');

//         this.productPrice = page.locator('.prices');

//         this.compareButton = page.locator('.compare-products');

//         this.productDescription = page.locator('.full-description');
//     }


//     async gotoHomePage() {

//         await this.page.goto('https://demowebshop.tricentis.com/');
//     }


//     async searchProduct(productName) {

//         await this.searchBox.fill(productName);

//         await this.searchButton.click();
//     }

 
//    async openCategory(categoryName) {

//     const category = this.page
//         .locator('.top-menu a[href="/' + categoryName + '"]')
//         .first();

//     await category.waitFor({
//         state: 'visible'
//     });

//     await category.click();
// }


//     async sortProducts(sortOption) {

//         await this.sortDropdown.selectOption(sortOption);
//     }


//     async openFirstProduct() {

//         await this.productTitles.first().click();
//     }


//     async clickNextPage() {

//         await this.nextPageButton.click();
//     }


//     async switchToGridView() {

//         await this.gridView.click();
//     }


//     async switchToListView() {

//         await this.listView.click();
//     }
// }

// module.exports = page;




// import { expect } from '@playwright/test';

// export class ProductPage {

//     constructor(page){

//         this.page = page;

        
//         this.searchBox = page.locator('#small-searchterms');
//         this.searchBtn = page.locator('button[type="submit"]');

       
//         this.sortDropdown = page.locator('#products-orderby');

        
//         this.productTitle = page.locator('.product-title');

      
//         this.compareBtn = page.locator('.add-to-compare-list-button');

       
//         this.reviewTitle = page.locator('#AddProductReview_Title');
//         this.reviewText = page.locator('#AddProductReview_ReviewText');
//         this.reviewSubmitBtn = page.locator('.write-review button');

        
//         this.successBar = page.locator('.bar-notification.success');
//     }

    
//     async searchProduct(productName){
//         await this.searchBox.fill(productName);
//         await this.searchBtn.click();
//     }

   
//     async sortProduct(option){
//         await this.sortDropdown.selectOption({ label: option });
//     }

    
//     async openProduct(){
//         await this.productTitle.first().click();
//     }

   
//     async addProductToCompare(){
//         await this.compareBtn.first().click();
//     }

  
//     async submitReview(title, review){
//         await this.reviewTitle.fill(title);
//         await this.reviewText.fill(review);
//         await this.reviewSubmitBtn.click();
//     }

    
//     async verifySuccessMessage(message){
//         await expect(this.successBar).toContainText(message);
//     }
// }




import { expect } from '@playwright/test';

export class ProductPage {

    constructor(page){

        this.page = page;

        // Search
        this.searchBox =
            page.locator('#small-searchterms');

        this.searchBtn =
            page.locator('button[type="submit"]');

        // Sorting
        this.sortDropdown =
            page.locator('#products-orderby');

        // Product Locators
        this.productTitle =
    page.locator('.product-title a');

        this.productItems =
    page.locator('.item-box');

        this.productPrice =
    page.locator('.product-price');

  this.productImage =
    page.locator('.gallery img').first();

        this.noResult =
    page.locator('.search-results');

        // Compare
        this.compareBtn =
            page.locator('.add-to-compare-list-button');

        // Review
        this.reviewTitle =
            page.locator('#AddProductReview_Title');

        this.reviewText =
            page.locator('#AddProductReview_ReviewText');

        this.reviewSubmitBtn =
            page.locator('.write-review button');

        // Success Message
        this.successBar =
            page.locator('.bar-notification.success');
    }

    // Search Product
    async searchProduct(productName){

        await this.searchBox.fill(productName);

        await this.searchBtn.click();
    }

    // Sort Product
    async sortProduct(option){

        await this.sortDropdown.selectOption({
            label: option
        });
    }

    // Open First Product
  async openFirstProduct(){

    await this.productTitle.first()
        .waitFor({ state: 'visible' });

    await this.productTitle.first().click();
}

    // Open Product
    async openProduct(){

        await this.productTitle.first().click();
    }

    // Add Product To Compare
    async addProductToCompare(){

        await this.compareBtn.first().click();
    }

    // Submit Review
    async submitReview(title, review){

        await this.reviewTitle.fill(title);

        await this.reviewText.fill(review);

        await this.reviewSubmitBtn.click();
    }

    // Verify Success Message
    async verifySuccessMessage(message){

        await expect(this.successBar)
            .toContainText(message);
    }
}