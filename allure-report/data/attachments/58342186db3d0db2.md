# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_004 - Verify Product Price Visible
- Location: tests/product/product.spec.js:181:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.price-value')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.price-value')

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
        - /url: /register?returnUrl=%2Fbuild-your-own-computer
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fbuild-your-own-computer
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
      - link "Desktops":
        - /url: /desktops
      - text: /
    - listitem:
      - strong: Build your own computer
  - article:
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=1]
    - text: Build it
    - link "1 review(s)":
      - /url: "#productreviews"
    - text: "SKU: COMP_CUST Free shipping"
    - term: Processor *
    - definition:
      - combobox "Processor":
        - option "Please select"
        - option "2.2 GHz Intel Pentium Dual-Core E2200"
        - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]" [selected]
    - term: RAM *
    - definition:
      - combobox "RAM":
        - option "Please select" [selected]
        - option "2 GB"
        - option "4GB [+$20.00]"
        - option "8GB [+$60.00]"
    - term: HDD *
    - definition:
      - list:
        - listitem:
          - radio "320 GB"
          - text: 320 GB
        - listitem:
          - radio "400 GB [+$100.00]"
          - text: 400 GB [+$100.00]
    - term: OS *
    - definition:
      - list:
        - listitem:
          - radio "Vista Home [+$50.00]" [checked]
          - text: Vista Home [+$50.00]
        - listitem:
          - radio "Vista Premium [+$60.00]"
          - text: Vista Premium [+$60.00]
    - term: Software
    - definition:
      - list:
        - listitem:
          - checkbox "Microsoft Office [+$50.00]" [checked]
          - text: Microsoft Office [+$50.00]
        - listitem:
          - checkbox "Acrobat Reader [+$10.00]"
          - text: Acrobat Reader [+$10.00]
        - listitem:
          - checkbox "Total Commander [+$5.00]"
          - text: Total Commander [+$5.00]
    - text: $1,200.00
    - textbox "Enter a quantity": "1"
    - button "Add to cart"
    - button "Add to wishlist"
    - button "Add to compare list"
    - button "Email a friend"
    - img "whatsapp sharing button"
    - img "facebook sharing button"
    - img "twitter sharing button"
    - img "linkedin sharing button"
    - img "tumblr sharing button"
    - paragraph: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
    - heading "Product tags" [level=2]
    - list:
      - listitem:
        - link "awesome":
          - /url: /awesome
        - text: (18)
      - listitem: ","
      - listitem:
        - link "computer":
          - /url: /computer
        - text: (14)
    - heading "Customers who bought this item also bought" [level=2]
    - article:
      - link "Picture of Flower Girl Bracelet":
        - /url: /flower-girl-bracelet
        - img "Picture of Flower Girl Bracelet"
      - heading "Flower Girl Bracelet" [level=2]:
        - link "Flower Girl Bracelet":
          - /url: /flower-girl-bracelet
      - text: $360.00
      - button "Add to cart"
      - button "Add to compare list"
      - button "Add to wishlist"
  - heading "Existing reviews" [level=2]
  - strong: Some sample review
  - text: "4 This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right. From: John | Date: 11/4/2025 4:41 AM Was this review helpful? Yes No (0/0) Only registered users can write reviews"
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
  91  | // 'https://demo.nopcommerce.com/build-your-own-computer'
  92  | //     );
  93  | 
  94  | //     await expect(
  95  | //         page.locator('.product-price')
  96  | //     ).toBeVisible();
  97  | // });
  98  | 
  99  | // test(
  100 | // 'TC_PRODUCT_005 - Verify Product Image Visible',
  101 | // async ({ page }) => {
  102 | 
  103 | //     await page.goto(
  104 | // 'https://demo.nopcommerce.com/build-your-own-computer'
  105 | //     );
  106 | 
  107 | //     await expect(
  108 | //         page.locator('.picture img')
  109 | //     ).toBeVisible({
  110 | //         timeout: 20000
  111 | //     });
  112 | // });
  113 | 
  114 | 
  115 | 
  116 | 
  117 | const { test, expect } = require('@playwright/test');
  118 | 
  119 | test(
  120 | 'TC_PRODUCT_001 - Search Existing Product',
  121 | async ({ page }) => {
  122 | 
  123 |     await page.goto(
  124 |         'https://demo.nopcommerce.com'
  125 |     );
  126 | 
  127 |     await page.locator('#small-searchterms')
  128 |         .fill('computer');
  129 | 
  130 |     await page.keyboard.press('Enter');
  131 | 
  132 |     await page.waitForLoadState('networkidle');
  133 | 
  134 |     await expect(
  135 |         page.locator('.product-item')
  136 |             .first()
  137 |     ).toBeVisible();
  138 | });
  139 | 
  140 | test(
  141 | 'TC_PRODUCT_002 - Search Non Existing Product',
  142 | async ({ page }) => {
  143 | 
  144 |     await page.goto(
  145 |         'https://demo.nopcommerce.com'
  146 |     );
  147 | 
  148 |     await page.locator('#small-searchterms')
  149 |         .fill('abcdefghxyz');
  150 | 
  151 |     await page.keyboard.press('Enter');
  152 | 
  153 |     await page.waitForLoadState('networkidle');
  154 | 
  155 |     await expect(
  156 |         page.locator('.no-result')
  157 |     ).toContainText(
  158 |         'No products were found'
  159 |     );
  160 | });
  161 | 
  162 | test(
  163 | 'TC_PRODUCT_003 - Open Product Details Page',
  164 | async ({ page }) => {
  165 | 
  166 |     await page.goto(
  167 |         'https://demo.nopcommerce.com/desktops'
  168 |     );
  169 | 
  170 |     await page.locator(
  171 |         '.product-title a'
  172 |     ).first().click();
  173 | 
  174 |     await page.waitForLoadState('networkidle');
  175 | 
  176 |     await expect(
  177 |         page.locator('h1')
  178 |     ).toBeVisible();
  179 | });
  180 | 
  181 | test(
  182 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  183 | async ({ page }) => {
  184 | 
  185 |     await page.goto(
  186 |         'https://demo.nopcommerce.com/build-your-own-computer'
  187 |     );
  188 | 
  189 |     await expect(
  190 |         page.locator('.price-value')
> 191 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  192 | });
  193 | 
  194 | test(
  195 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  196 | async ({ page }) => {
  197 | 
  198 |     await page.goto(
  199 |         'https://demo.nopcommerce.com/build-your-own-computer'
  200 |     );
  201 | 
  202 |     const productImage = page.locator(
  203 |         '.gallery img'
  204 |     );
  205 | 
  206 |     await expect(productImage)
  207 |         .toBeVisible();
  208 | });
```