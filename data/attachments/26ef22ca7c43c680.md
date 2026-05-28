# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_001 - Search Existing Product
- Location: tests/product/product.spec.js:14:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-title')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.product-title')

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
  1   | const { test, expect } =
  2   | require('@playwright/test');
  3   | 
  4   | test.describe.configure({
  5   |     mode: 'serial'
  6   | });
  7   | 
  8   | 
  9   | 
  10  | // ======================================================
  11  | // TC_PRODUCT_001 - Search Existing Product
  12  | // ======================================================
  13  | 
  14  | test(
  15  | 'TC_PRODUCT_001 - Search Existing Product',
  16  | async ({ page }) => {
  17  | 
  18  |     await page.goto(
  19  |         'https://demo.nopcommerce.com'
  20  |     );
  21  | 
  22  |     await page.waitForLoadState(
  23  |         'domcontentloaded'
  24  |     );
  25  | 
  26  |     await page.locator('#small-searchterms')
  27  |         .fill('Apple MacBook Pro 13-inch');
  28  | 
  29  |     await page.locator(
  30  |         'button.search-box-button'
  31  |     ).click();
  32  | 
  33  |     await expect(
  34  |         page.locator('.product-title')
> 35  |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  36  |         timeout: 20000
  37  |     });
  38  | 
  39  |     await expect(
  40  |         page.locator('.product-title')
  41  |     ).toContainText(
  42  |         'Apple MacBook Pro 13-inch'
  43  |     );
  44  | });
  45  | 
  46  | 
  47  | 
  48  | 
  49  | // ======================================================
  50  | // TC_PRODUCT_002 - Search Non Existing Product
  51  | // ======================================================
  52  | 
  53  | test(
  54  | 'TC_PRODUCT_002 - Search Non Existing Product',
  55  | async ({ page }) => {
  56  | 
  57  |     await page.goto(
  58  |         'https://demo.nopcommerce.com'
  59  |     );
  60  | 
  61  |     await page.locator('#small-searchterms')
  62  |         .fill('abcdefxyz');
  63  | 
  64  |     await page.locator(
  65  |         'button.search-box-button'
  66  |     ).click();
  67  | 
  68  |     await expect(
  69  |         page.locator('.no-result')
  70  |     ).toBeVisible({
  71  |         timeout: 20000
  72  |     });
  73  | 
  74  |     await expect(
  75  |         page.locator('.no-result')
  76  |     ).toContainText(
  77  |         'No products were found that matched your criteria.'
  78  |     );
  79  | });
  80  | 
  81  | 
  82  | 
  83  | 
  84  | // ======================================================
  85  | // TC_PRODUCT_003 - Open Product Details Page
  86  | // ======================================================
  87  | 
  88  | test(
  89  | 'TC_PRODUCT_003 - Open Product Details Page',
  90  | async ({ page }) => {
  91  | 
  92  |     await page.goto(
  93  | 'https://demo.nopcommerce.com/desktops'
  94  |     );
  95  | 
  96  |     await page.locator(
  97  | 'a:has-text("Build your own computer")'
  98  |     ).click();
  99  | 
  100 |     await expect(
  101 |         page.locator('.product-name h1')
  102 |     ).toBeVisible({
  103 |         timeout: 20000
  104 |     });
  105 | 
  106 |     await expect(
  107 |         page.locator('.product-name h1')
  108 |     ).toContainText(
  109 |         'Build your own computer'
  110 |     );
  111 | });
  112 | 
  113 | 
  114 | 
  115 | 
  116 | // ======================================================
  117 | // TC_PRODUCT_004 - Verify Product Price Visible
  118 | // ======================================================
  119 | 
  120 | test(
  121 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  122 | async ({ page }) => {
  123 | 
  124 |     await page.goto(
  125 | 'https://demo.nopcommerce.com/desktops'
  126 |     );
  127 | 
  128 |     await page.locator(
  129 | 'a:has-text("Build your own computer")'
  130 |     ).click();
  131 | 
  132 |     await expect(
  133 |         page.locator('.price-value')
  134 |     ).toBeVisible({
  135 |         timeout: 20000
```