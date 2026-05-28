# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/filter.spec.js >> Product Filter Tests >> TC_PRODUCT_022 - Verify Filter Section Is Visible
- Location: tests/product/filter.spec.js:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.block-filter')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.block-filter')

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
        - /url: /register?returnUrl=%2Fdesktops
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fdesktops
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
  - list:
    - listitem:
      - link "Home":
        - /url: /
      - text: /
    - listitem:
      - link "Computers":
        - /url: /computers
      - text: /
    - listitem:
      - strong: Desktops
  - complementary:
    - heading "Categories" [level=2]
    - list:
      - listitem:
        - link "Computers":
          - /url: /computers
        - list:
          - listitem:
            - link "Desktops":
              - /url: /desktops
          - listitem:
            - link "Notebooks":
              - /url: /notebooks
          - listitem:
            - link "Software":
              - /url: /software
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
  - heading "Desktops" [level=1]
  - button "Grid"
  - button "List"
  - text: Sort by
  - combobox "Select product sort order":
    - option "Position" [selected]
    - 'option "Name: A to Z"'
    - 'option "Name: Z to A"'
    - 'option "Price: Low to High"'
    - 'option "Price: High to Low"'
    - option "Created on"
  - text: Display
  - combobox "Select number of products per page":
    - option "3"
    - option "6" [selected]
    - option "9"
  - text: per page
  - article:
    - link "Picture of Build your own computer":
      - /url: /build-your-own-computer
      - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=2]:
      - link "Build your own computer":
        - /url: /build-your-own-computer
    - text: $1,200.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of Digital Storm VANQUISH Custom Performance PC":
      - /url: /digital-storm-vanquish-custom-performance-pc
      - img "Picture of Digital Storm VANQUISH Custom Performance PC"
    - heading "Digital Storm VANQUISH Custom Performance PC" [level=2]:
      - link "Digital Storm VANQUISH Custom Performance PC":
        - /url: /digital-storm-vanquish-custom-performance-pc
    - text: $1,259.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of Lenovo IdeaCentre":
      - /url: /lenovo-ideacentre
      - img "Picture of Lenovo IdeaCentre"
    - heading "Lenovo IdeaCentre" [level=2]:
      - link "Lenovo IdeaCentre":
        - /url: /lenovo-ideacentre
    - text: $500.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
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
  1   | import { test, expect } from '@playwright/test';
  2   | import { ProductPage } from '../../pages/ProductPage';
  3   | 
  4   | test.describe('Product Filter Tests', () => {
  5   | 
  6   |     let productPage;
  7   | 
  8   |     test.beforeEach(async ({ page }) => {
  9   | 
  10  |         productPage = new ProductPage(page);
  11  | 
  12  |         await page.goto('https://demo.nopcommerce.com/desktops');
  13  |     });
  14  | 
  15  |     test(
  16  |         'TC_PRODUCT_022 - Verify Filter Section Is Visible',
  17  |         {
  18  |             annotation: {
  19  |                 type: 'Filter',
  20  |                 description: 'Verify filter section is visible on product page'
  21  |             }
  22  |         },
  23  |         async ({ page }) => {
  24  | 
  25  |             await expect(page.locator('.block-filter'))
> 26  |                 .toBeVisible();
      |                  ^ Error: expect(locator).toBeVisible() failed
  27  |         }
  28  |     );
  29  | 
  30  |     test(
  31  |         'TC_PRODUCT_023 - Filter Products By Manufacturer',
  32  |         {
  33  |             annotation: {
  34  |                 type: 'Filter',
  35  |                 description: 'Verify user can filter products by manufacturer'
  36  |             }
  37  |         },
  38  |         async ({ page }) => {
  39  | 
  40  |             await page.locator('label[for="attribute-option-7"]').click();
  41  | 
  42  |             await expect(page.locator('.product-item'))
  43  |                 .toHaveCount(1);
  44  |         }
  45  |     );
  46  | 
  47  |     test(
  48  |         'TC_PRODUCT_024 - Verify Filtered Products Are Displayed',
  49  |         {
  50  |             annotation: {
  51  |                 type: 'Filter',
  52  |                 description: 'Verify products are displayed after applying filter'
  53  |             }
  54  |         },
  55  |         async ({ page }) => {
  56  | 
  57  |             await page.locator('label[for="attribute-option-7"]').click();
  58  | 
  59  |             await expect(page.locator('.product-item').first())
  60  |                 .toBeVisible();
  61  |         }
  62  |     );
  63  | 
  64  |     test(
  65  |         'TC_PRODUCT_025 - Remove Applied Filter Successfully',
  66  |         {
  67  |             annotation: {
  68  |                 type: 'Filter',
  69  |                 description: 'Verify applied filter can be removed successfully'
  70  |             }
  71  |         },
  72  |         async ({ page }) => {
  73  | 
  74  |             const filterOption = page.locator('label[for="attribute-option-7"]');
  75  | 
  76  |             await filterOption.click();
  77  | 
  78  |             await filterOption.click();
  79  | 
  80  |             await expect(page.locator('.product-item').first())
  81  |                 .toBeVisible();
  82  |         }
  83  |     );
  84  | 
  85  |     test(
  86  |         'TC_PRODUCT_026 - Verify Products Remain Visible After Filtering',
  87  |         {
  88  |             annotation: {
  89  |                 type: 'Filter',
  90  |                 description: 'Verify products remain visible after filter is applied'
  91  |             }
  92  |         },
  93  |         async ({ page }) => {
  94  | 
  95  |             await page.locator('label[for="attribute-option-7"]').click();
  96  | 
  97  |             const products = page.locator('.product-item');
  98  | 
  99  |             await expect(products.first())
  100 |                 .toBeVisible();
  101 |         }
  102 |     );
  103 | 
  104 | });
```