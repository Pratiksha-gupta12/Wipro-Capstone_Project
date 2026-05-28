# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_001 - Search Existing Product
- Location: tests/product/product.spec.js:18:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a:has-text("Apple MacBook Pro 13-inch")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a:has-text("Apple MacBook Pro 13-inch")')

```

```yaml
- status
- banner:
  - link "Skip navigation":
    - /url: "#main"
  - combobox "Currency selector":
    - option "US Dollar" [selected]
    - option "Euro"
  - list:
    - listitem:
      - link "Register":
        - /url: /register?returnUrl=%2Fsearch%3Fq%3DApple%2BMacBook%2BPro%2B13-inch
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fsearch%3Fq%3DApple%2BMacBook%2BPro%2B13-inch
    - listitem:
      - link "Wishlist (0)":
        - /url: /wishlist
    - listitem:
      - link "Shopping cart (0)":
        - /url: /cart
  - link "nopCommerce demo store":
    - /url: /
    - img "nopCommerce demo store"
  - search:
    - textbox "Search store"
    - button "Search"
- navigation:
  - menu "Categories":
    - menuitem "Computers":
      - button "Computers"
    - menuitem "Electronics":
      - button "Electronics"
    - menuitem "Apparel":
      - button "Apparel"
    - menuitem "Digital downloads":
      - button "Digital downloads"
    - menuitem "Books":
      - button "Books"
    - menuitem "Jewelry":
      - button "Jewelry"
    - menuitem "Gift Cards":
      - button "Gift Cards"
- main:
  - complementary:
    - heading "Categories" [level=2]
    - list:
      - listitem:
        - link "Computers":
          - /url: /computers
      - listitem:
        - link "Electronics":
          - /url: /electronics
      - listitem:
        - link "Apparel":
          - /url: /apparel
      - listitem:
        - link "Digital downloads":
          - /url: /digital-downloads
      - listitem:
        - link "Books":
          - /url: /books
      - listitem:
        - link "Jewelry":
          - /url: /jewelry
      - listitem:
        - link "Gift Cards":
          - /url: /gift-cards
    - heading "Manufacturers" [level=2]
    - list:
      - listitem:
        - link "Apple":
          - /url: /apple
      - listitem:
        - link "HP":
          - /url: /hp
    - link "View all":
      - /url: /manufacturer/all
    - heading "Popular tags" [level=2]
    - list:
      - listitem:
        - link "apparel":
          - /url: /apparel-2
      - listitem:
        - link "awesome":
          - /url: /awesome
      - listitem:
        - link "book":
          - /url: /book
      - listitem:
        - link "camera":
          - /url: /camera
      - listitem:
        - link "cell":
          - /url: /cell
      - listitem:
        - link "compact":
          - /url: /compact
      - listitem:
        - link "computer":
          - /url: /computer
      - listitem:
        - link "cool":
          - /url: /cool
      - listitem:
        - link "digital":
          - /url: /digital
      - listitem:
        - link "game":
          - /url: /game
      - listitem:
        - link "jeans":
          - /url: /jeans
      - listitem:
        - link "jewelry":
          - /url: /jewelry-2
      - listitem:
        - link "nice":
          - /url: /nice
      - listitem:
        - link "shirt":
          - /url: /shirt
      - listitem:
        - link "shoes":
          - /url: /shoes-2
    - link "View all":
      - /url: /producttag/all
  - heading "Search" [level=1]
  - text: "Search keyword:"
  - textbox "Search keyword:": Apple MacBook Pro 13-inch
  - checkbox "Advanced search"
  - text: Advanced search
  - button "Search"
  - text: No products were found that matched your criteria.
- contentinfo:
  - navigation:
    - heading "Information" [level=2]
    - menu "Information":
      - menuitem "Sitemap":
        - link "Sitemap":
          - /url: /sitemap
      - menuitem "Shipping & returns":
        - link "Shipping & returns":
          - /url: /shipping-returns
      - menuitem "Privacy notice":
        - link "Privacy notice":
          - /url: /privacy-notice
      - menuitem "Conditions of Use":
        - link "Conditions of Use":
          - /url: /conditions-of-use
      - menuitem "About us":
        - link "About us":
          - /url: /about-us
      - menuitem "Contact us":
        - link "Contact us":
          - /url: /contactus
    - heading "Customer service" [level=2]
    - menu "Customer service":
      - menuitem "Search":
        - link "Search":
          - /url: /search
      - menuitem "News":
        - link "News":
          - /url: /news
      - menuitem "Blog":
        - link "Blog":
          - /url: /blog
      - menuitem "Recently viewed products":
        - link "Recently viewed products":
          - /url: /recentlyviewedproducts
      - menuitem "Compare products list":
        - link "Compare products list":
          - /url: /compareproducts
      - menuitem "New products":
        - link "New products":
          - /url: /newproducts
    - heading "My account" [level=2]
    - menu "My account":
      - menuitem "My account":
        - link "My account":
          - /url: /customer/info
      - menuitem "Orders":
        - link "Orders":
          - /url: /order/history
      - menuitem "Addresses":
        - link "Addresses":
          - /url: /customer/addresses
      - menuitem "Shopping cart":
        - link "Shopping cart":
          - /url: /cart
      - menuitem "Wishlist":
        - link "Wishlist":
          - /url: /wishlist
      - menuitem "Apply for vendor account":
        - link "Apply for vendor account":
          - /url: /vendor/apply
  - heading "Follow us" [level=2]
  - list:
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/nopCommerce
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/nopCommerce
    - listitem:
      - link "RSS":
        - /url: /news/rss/1
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/user/nopCommerce
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/nopcommerce_official
  - form:
    - heading "Newsletter" [level=2]
    - textbox "Sign up for our newsletter":
      - /placeholder: Enter your email here...
    - button "Subscribe"
  - text: Copyright © 2026 nopCommerce demo store. All rights reserved. Powered by
  - link "nopCommerce":
    - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  1   | 
  2   | 
  3   | 
  4   | import { test, expect } from '@playwright/test';
  5   | import { ProductPage } from '../../pages/ProductPage';
  6   | test.describe('Product Service Tests', () => {
  7   | 
  8   | let productPage;
  9   | 
  10  | test.beforeEach(async ({ page }) => {
  11  | 
  12  |     productPage = new ProductPage(page);
  13  | 
  14  |     await page.goto(
  15  |         'https://demo.nopcommerce.com/'
  16  |     );
  17  | });
  18  | test(
  19  | 'TC_PRODUCT_001 - Search Existing Product',
  20  | async ({ page }) => {
  21  | 
  22  |     await page.locator('#small-searchterms')
  23  |         .fill('Apple MacBook Pro 13-inch');
  24  | 
  25  |     await page.locator('.search-box-button')
  26  |         .click();
  27  | 
  28  |     await page.waitForTimeout(3000);
  29  | 
  30  |     await expect(
  31  |         page.locator(
  32  | 'a:has-text("Apple MacBook Pro 13-inch")'
  33  |         )
> 34  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  35  | });
  36  | 
  37  | test(
  38  | 'TC_PRODUCT_002 - Search Non Existing Product',
  39  | async ({ page }) => {
  40  | 
  41  |     await page.locator('#small-searchterms')
  42  |         .fill('abcdefghxyz');
  43  | 
  44  |     await page.locator('.search-box-button')
  45  |         .click();
  46  | 
  47  |     await page.waitForTimeout(3000);
  48  | 
  49  |     await expect(
  50  |         page.locator('body')
  51  |     ).toContainText(
  52  |         'No products were found'
  53  |     );
  54  | });
  55  | test(
  56  | 'TC_PRODUCT_003 - Open Product Details Page',
  57  | async ({ page }) => {
  58  | 
  59  |     await page.goto(
  60  | 'https://demo.nopcommerce.com/desktops'
  61  |     );
  62  | 
  63  |     await page.waitForTimeout(3000);
  64  | 
  65  |     const firstProduct =
  66  |         page.locator('.product-title a').first();
  67  | 
  68  |     await firstProduct.click();
  69  | 
  70  |     await expect(
  71  |         page.locator('h1')
  72  |     ).toBeVisible();
  73  | });
  74  | 
  75  | test(
  76  | 'TC_PRODUCT_004 - Verify Product Price Visible',
  77  | async ({ page }) => {
  78  | 
  79  |     await page.goto(
  80  | 'https://demo.nopcommerce.com/build-your-own-computer'
  81  |     );
  82  | 
  83  |     await expect(
  84  |         page.locator('.product-price')
  85  |     ).toBeVisible();
  86  | });
  87  | 
  88  | test(
  89  | 'TC_PRODUCT_005 - Verify Product Image Visible',
  90  | async ({ page }) => {
  91  | 
  92  |     await page.goto(
  93  | 'https://demo.nopcommerce.com/build-your-own-computer'
  94  |     );
  95  | 
  96  |     await expect(
  97  |         page.locator('.picture img')
  98  |     ).toBeVisible({
  99  |         timeout: 20000
  100 |     });
  101 | });
  102 | 
  103 | 
  104 | 
  105 | 
  106 | // const { test, expect } = require('@playwright/test');
  107 | 
  108 | // test(
  109 | // 'TC_PRODUCT_001 - Search Existing Product',
  110 | // async ({ page }) => {
  111 | 
  112 | //     await page.goto(
  113 | //         'https://demo.nopcommerce.com'
  114 | //     );
  115 | 
  116 | //     await page.locator('#small-searchterms')
  117 | //         .fill('computer');
  118 | 
  119 | //     await page.keyboard.press('Enter');
  120 | 
  121 | //     await page.waitForLoadState('domcontentloaded');
  122 | 
  123 | //     await expect(
  124 | //         page.locator('.product-item')
  125 | //             .first()
  126 | //     ).toBeVisible();
  127 | // });
  128 | 
  129 | // test(
  130 | // 'TC_PRODUCT_002 - Search Non Existing Product',
  131 | // async ({ page }) => {
  132 | 
  133 | //     await page.goto(
  134 | //         'https://demo.nopcommerce.com'
```